"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, CheckCircle2, CreditCard, Loader2, ShieldCheck, Wallet, X } from "lucide-react";

type PaymentCheckoutProps = {
  courseSlug: string;
  courseTitle: string;
  amount: number;
  currency?: string | null;
  className?: string;
  label?: string;
};

type PaymentConfig = {
  razorpayKeyId: string;
  paypalClientId: string;
  paypalCurrency: string;
  paypalEnvironment?: "sandbox" | "live";
  paypalPayLaterMinAmount?: number;
  paypalPayLaterMaxAmount?: number;
  paymentLinks?: {
    razorpayPaymentPageUrl?: string;
    paypalMeUrl?: string;
  };
};

type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data: T;
};

type RazorpayOrder = {
  keyId: string;
  orderId: string;
  amount: number;
  currency: string;
};

type AppliedCoupon = {
  code: string;
  description: string;
  discountType: "fixed" | "percentage";
  discountValue: number;
  discountAmount: number;
  originalAmount: number;
  finalAmount: number;
  currency: string;
};

type PayPalApproveData = {
  orderID: string;
};

type PayPalButtonConfig = {
  style?: Record<string, string | number>;
  fundingSource?: string;
  createOrder: () => Promise<string>;
  onApprove: (data: PayPalApproveData) => Promise<void>;
  onError: (error: unknown) => void;
  onCancel: () => void;
};

type ApplePayConfig = {
  isEligible: boolean;
  countryCode: string;
  merchantCapabilities: string[];
  supportedNetworks: string[];
};

type ApplePayMerchant = {
  config: () => Promise<ApplePayConfig>;
  validateMerchant: (options: {
    validationUrl: string;
    displayName: string;
  }) => Promise<{ merchantSession: unknown }>;
  confirmOrder: (options: {
    orderId: string;
    token: unknown;
    billingContact?: unknown;
  }) => Promise<unknown>;
};

type ApplePaySessionInstance = {
  onvalidatemerchant: ((event: { validationURL: string }) => void) | null;
  onpaymentauthorized: ((event: {
    payment: { token: unknown; billingContact?: unknown };
  }) => void) | null;
  oncancel: (() => void) | null;
  completeMerchantValidation: (merchantSession: unknown) => void;
  completePayment: (status: number) => void;
  abort: () => void;
  begin: () => void;
};

type ApplePaySessionConstructor = {
  new (version: number, paymentRequest: Record<string, unknown>): ApplePaySessionInstance;
  canMakePayments: () => boolean;
  STATUS_SUCCESS: number;
  STATUS_FAILURE: number;
};

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
    paypal?: {
      FUNDING: {
        PAYPAL: string;
        PAYLATER: string;
        CARD?: string;
        CREDIT?: string;
      };
      Buttons: (options: PayPalButtonConfig) => {
        isEligible?: () => boolean;
        render: (selector: HTMLElement) => Promise<void>;
      };
      Applepay?: () => ApplePayMerchant;
    };
    ApplePaySession?: ApplePaySessionConstructor;
  }
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  (process.env.NODE_ENV === "development" ? "http://localhost:4000" : "https://api.britinstitute.uk");
const DEFAULT_RAZORPAY_COUNTRY_CODE = "+44";

function formatAmount(amount: number, currency = "GBP") {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

async function apiRequest<T>(path: string, init?: RequestInit): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
    ...init,
  });
  const payload = (await response.json().catch(() => null)) as ApiResponse<T> | null;

  if (!response.ok || !payload?.success) {
    throw new Error(payload?.message || "Payment request failed");
  }

  return payload;
}

function loadExternalScript(src: string, id: string) {
  return new Promise<boolean>((resolve) => {
    const existingScript = document.getElementById(id) as HTMLScriptElement | null;
    if (existingScript) {
      const requestedSrc = new URL(src, window.location.href).href;
      if (existingScript.src === requestedSrc) {
        resolve(true);
        return;
      }

      existingScript.remove();
      if (id === "paypal-js-sdk") {
        window.paypal = undefined;
      }
    }

    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

function buildPayPalSdkUrl(config: PaymentConfig) {
  const params = new URLSearchParams({
    "client-id": config.paypalClientId,
    currency: config.paypalCurrency || "GBP",
    intent: "capture",
    components: "buttons,funding-eligibility,applepay",
    "enable-funding": "paylater,credit,card",
  });

  if (config.paypalEnvironment !== "live") {
    params.set("buyer-country", "GB");
  }

  return `https://www.paypal.com/sdk/js?${params.toString()}`;
}

export default function PaymentCheckout({
  courseSlug,
  courseTitle,
  amount,
  currency = "GBP",
  className,
  label = "Pay Now",
}: PaymentCheckoutProps) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isRazorpayLoading, setIsRazorpayLoading] = useState(false);
  const [isPayPalLoading, setIsPayPalLoading] = useState(false);
  const [isApplePayLoading, setIsApplePayLoading] = useState(false);
  const [isApplePayChecking, setIsApplePayChecking] = useState(false);
  const [isApplePayEligible, setIsApplePayEligible] = useState(false);
  const [applePaySdkReady, setApplePaySdkReady] = useState(false);
  const [applePayUnavailableReason, setApplePayUnavailableReason] = useState("");
  const [applePayCheckAttempt, setApplePayCheckAttempt] = useState(0);
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const [paypalReady, setPaypalReady] = useState(false);
  const [isCardChecking, setIsCardChecking] = useState(false);
  const [isCardRendered, setIsCardRendered] = useState(false);
  const [isPayLaterChecking, setIsPayLaterChecking] = useState(false);
  const [isPayLaterRendered, setIsPayLaterRendered] = useState(false);
  const [payLaterUnavailable, setPayLaterUnavailable] = useState(false);
  const [config, setConfig] = useState<PaymentConfig | null>(null);
  const [error, setError] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<AppliedCoupon | null>(null);
  const [couponMessage, setCouponMessage] = useState("");
  const paypalContainerRef = useRef<HTMLDivElement | null>(null);
  const cardContainerRef = useRef<HTMLDivElement | null>(null);
  const payLaterContainerRef = useRef<HTMLDivElement | null>(null);
  const applePayContainerRef = useRef<HTMLDivElement | null>(null);

  const checkoutAmount = appliedCoupon?.finalAmount ?? amount;
  const checkoutCurrency = appliedCoupon?.currency ?? currency ?? "GBP";
  const displayAmount = formatAmount(checkoutAmount, checkoutCurrency);
  const originalDisplayAmount = formatAmount(amount, currency ?? "GBP");
  const payLaterMinAmount = config?.paypalPayLaterMinAmount ?? 30;
  const payLaterMaxAmount = config?.paypalPayLaterMaxAmount ?? 2000;
  const isPayLaterAmountEligible =
    checkoutCurrency === "GBP" &&
    checkoutAmount >= payLaterMinAmount &&
    checkoutAmount <= payLaterMaxAmount;

  useEffect(() => {
    if (isCheckoutOpen) return;

    setCouponCode("");
    setAppliedCoupon(null);
    setCouponMessage("");
    setIsCardChecking(false);
    setIsCardRendered(false);
    setIsPayLaterChecking(false);
    setIsPayLaterRendered(false);
    setPayLaterUnavailable(false);
    setIsApplePayLoading(false);
    setIsApplePayChecking(false);
    setIsApplePayEligible(false);
    setApplePayUnavailableReason("");
    setError("");
  }, [isCheckoutOpen]);

  useEffect(() => {
    if (
      !isCheckoutOpen ||
      !paypalReady ||
      !applePaySdkReady ||
      !applePayContainerRef.current
    ) return;

    let isCancelled = false;
    let applePayButton: HTMLElement | null = null;
    let handleApplePayClick: (() => void) | null = null;
    const container = applePayContainerRef.current;

    container.innerHTML = "";
    setIsApplePayChecking(true);
    setIsApplePayEligible(false);
    setApplePayUnavailableReason("");

    async function setUpApplePay() {
      const ApplePaySession = window.ApplePaySession;
      const applePayFactory = window.paypal?.Applepay;

      if (!window.isSecureContext) {
        if (!isCancelled) {
          setApplePayUnavailableReason("Apple Pay requires a secure HTTPS page.");
          setIsApplePayChecking(false);
        }
        return;
      }

      if (!ApplePaySession) {
        if (!isCancelled) {
          setApplePayUnavailableReason(
            "This browser or device does not expose the Apple Pay payment API. Try Safari on an Apple Pay-enabled device or a browser that supports Apple Pay on the web."
          );
          setIsApplePayChecking(false);
        }
        return;
      }

      if (!ApplePaySession.canMakePayments()) {
        if (!isCancelled) {
          setApplePayUnavailableReason(
            "Apple Pay is not configured for this device. Sign in to your Apple Account and add an eligible card to Apple Wallet."
          );
          setIsApplePayChecking(false);
        }
        return;
      }

      if (!applePayFactory) {
        if (!isCancelled) {
          setApplePayUnavailableReason(
            "The PayPal Apple Pay component is unavailable for this merchant application."
          );
          setIsApplePayChecking(false);
        }
        return;
      }

      try {
        const applePay = applePayFactory();
        const eligibleConfig = await applePay.config();
        if (isCancelled) return;

        setIsApplePayEligible(eligibleConfig.isEligible);
        setIsApplePayChecking(false);

        if (!eligibleConfig.isEligible) {
          setApplePayUnavailableReason(
            "PayPal marked this merchant or buyer as ineligible. Confirm that Apple Pay is enabled for the live PayPal app and that britinstitute.uk is registered under its Apple Pay domains."
          );
          return;
        }

        applePayButton = document.createElement("apple-pay-button");
        applePayButton.setAttribute("buttonstyle", "black");
        applePayButton.setAttribute("type", "buy");
        applePayButton.setAttribute("locale", "en-GB");
        applePayButton.setAttribute("aria-label", `Buy ${courseTitle} with Apple Pay`);
        applePayButton.style.display = "block";
        applePayButton.style.width = "100%";
        applePayButton.style.height = "48px";
        applePayButton.style.cursor = "pointer";

        handleApplePayClick = () => {
          const Session = window.ApplePaySession;
          if (!Session) {
            setError("Apple Pay is not supported on this device.");
            return;
          }

          setError("");
          setIsApplePayLoading(true);

          let session: ApplePaySessionInstance;
          try {
            session = new Session(4, {
              countryCode: eligibleConfig.countryCode,
              merchantCapabilities: eligibleConfig.merchantCapabilities,
              supportedNetworks: eligibleConfig.supportedNetworks,
              currencyCode: checkoutCurrency,
              requiredBillingContactFields: ["postalAddress"],
              total: {
                label: "Brit Institute",
                type: "final",
                amount: checkoutAmount.toFixed(2),
              },
            });
          } catch (err) {
            setError(err instanceof Error ? err.message : "Apple Pay could not be started.");
            setIsApplePayLoading(false);
            return;
          }

          session.onvalidatemerchant = async (event) => {
            try {
              const validation = await applePay.validateMerchant({
                validationUrl: event.validationURL,
                displayName: "Brit Institute",
              });
              session.completeMerchantValidation(validation.merchantSession);
            } catch (err) {
              console.error("Apple Pay merchant validation failed:", err);
              setError("Apple Pay merchant validation failed. Please try another payment method.");
              setIsApplePayLoading(false);
              session.abort();
            }
          };

          session.onpaymentauthorized = async (event) => {
            try {
              const orderResponse = await apiRequest<{ id: string }>("/api/payments/paypal/order", {
                method: "POST",
                body: JSON.stringify({ courseSlug, couponCode: appliedCoupon?.code }),
              });

              await applePay.confirmOrder({
                orderId: orderResponse.data.id,
                token: event.payment.token,
                billingContact: event.payment.billingContact,
              });

              const captureResponse = await apiRequest<{
                provider: string;
                orderId: string;
                captureId: string;
              }>("/api/payments/paypal/capture", {
                method: "POST",
                body: JSON.stringify({
                  courseSlug,
                  orderID: orderResponse.data.id,
                  couponCode: appliedCoupon?.code,
                }),
              });

              if (!captureResponse.success) {
                throw new Error("Apple Pay capture failed.");
              }

              session.completePayment(Session.STATUS_SUCCESS);
              setIsCheckoutOpen(false);
              setIsSuccessOpen(true);
            } catch (err) {
              console.error("Apple Pay payment failed:", err);
              session.completePayment(Session.STATUS_FAILURE);
              setError(err instanceof Error ? err.message : "Apple Pay payment failed.");
            } finally {
              setIsApplePayLoading(false);
            }
          };

          session.oncancel = () => {
            setIsApplePayLoading(false);
            setError("Apple Pay payment was cancelled.");
          };

          session.begin();
        };

        applePayButton.addEventListener("click", handleApplePayClick);
        container.appendChild(applePayButton);
      } catch (err) {
        if (isCancelled) return;
        console.error("Apple Pay eligibility check failed:", err);
        setApplePayUnavailableReason(
          "PayPal could not complete the Apple Pay eligibility check. Verify the live app's Apple Pay feature and registered domain, then retry."
        );
        setIsApplePayChecking(false);
        setIsApplePayEligible(false);
      }
    }

    setUpApplePay();

    return () => {
      isCancelled = true;
      if (applePayButton && handleApplePayClick) {
        applePayButton.removeEventListener("click", handleApplePayClick);
      }
      container.innerHTML = "";
    };
  }, [
    appliedCoupon?.code,
    applePayCheckAttempt,
    applePaySdkReady,
    checkoutAmount,
    checkoutCurrency,
    courseSlug,
    courseTitle,
    isCheckoutOpen,
    paypalReady,
  ]);

  useEffect(() => {
    if (!isCheckoutOpen) return;

    let isMounted = true;

    async function loadPaymentConfig() {
      try {
        setError("");
        setIsPayPalLoading(true);
        const response = await apiRequest<PaymentConfig>("/api/payments/config");
        if (!isMounted) return;
        setConfig(response.data);

        if (response.data.paypalClientId) {
          const [paypalScriptLoaded, appleScriptLoaded] = await Promise.all([
            loadExternalScript(buildPayPalSdkUrl(response.data), "paypal-js-sdk"),
            loadExternalScript(
              "https://applepay.cdn-apple.com/jsapi/1.latest/apple-pay-sdk.js",
              "apple-pay-js-sdk"
            ),
          ]);
          if (isMounted) {
            setPaypalReady(paypalScriptLoaded);
            setApplePaySdkReady(appleScriptLoaded);
            if (!paypalScriptLoaded) {
              setError("PayPal could not be loaded. Please try again.");
            }
            if (!appleScriptLoaded) {
              setApplePayUnavailableReason("Apple's Apple Pay SDK could not be loaded.");
            }
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Payment setup failed");
        }
      } finally {
        if (isMounted) {
          setIsPayPalLoading(false);
        }
      }
    }

    loadPaymentConfig();

    return () => {
      isMounted = false;
    };
  }, [isCheckoutOpen]);

  useEffect(() => {
    if (
      !isCheckoutOpen ||
      !paypalReady ||
      !paypalContainerRef.current ||
      !cardContainerRef.current ||
      !payLaterContainerRef.current ||
      !window.paypal
    ) return;

    let isCancelled = false;

    paypalContainerRef.current.innerHTML = "";
    cardContainerRef.current.innerHTML = "";
    payLaterContainerRef.current.innerHTML = "";
    setIsCardChecking(true);
    setIsCardRendered(false);
    setIsPayLaterChecking(isPayLaterAmountEligible);
    setIsPayLaterRendered(false);
    setPayLaterUnavailable(false);

    const createOrder = async () => {
      const response = await apiRequest<{ id: string }>("/api/payments/paypal/order", {
        method: "POST",
        body: JSON.stringify({ courseSlug, couponCode: appliedCoupon?.code }),
      });
      return response.data.id;
    };

    const onApprove = async (data: PayPalApproveData) => {
      const response = await apiRequest<{ provider: string; orderId: string; captureId: string }>(
        "/api/payments/paypal/capture",
        {
          method: "POST",
          body: JSON.stringify({ courseSlug, orderID: data.orderID, couponCode: appliedCoupon?.code }),
        }
      );

      if (response.success) {
        setIsCheckoutOpen(false);
        setIsSuccessOpen(true);
      }
    };

    const onError = (err: unknown) => {
      console.error("PayPal payment failed:", err);
      setError("PayPal payment failed. Please try again.");
    };

    const onCancel = () => {
      setError("PayPal payment was cancelled.");
    };

    const baseStyle = {
      layout: "vertical",
      shape: "rect",
      height: 48,
    };

    const paypalButton = window.paypal.Buttons({
      fundingSource: window.paypal.FUNDING.PAYPAL,
      style: {
        ...baseStyle,
        label: "paypal",
      },
      createOrder,
      onApprove,
      onError,
      onCancel,
    });

    paypalButton
      .render(paypalContainerRef.current)
      .catch((err) => {
        console.error("PayPal render failed:", err);
        setError("PayPal button could not be displayed.");
      });

    const cardFundingSource = window.paypal.FUNDING.CARD;
    const cardRenderResult = cardFundingSource
      ? (() => {
          const cardButton = window.paypal!.Buttons({
            fundingSource: cardFundingSource,
            style: baseStyle,
            createOrder,
            onApprove,
            onError,
            onCancel,
          });

          if (!(cardButton.isEligible?.() ?? true)) {
            return Promise.resolve(false);
          }

          return cardButton
            .render(cardContainerRef.current!)
            .then(() => true)
            .catch((err) => {
              console.error("PayPal card render failed:", err);
              return false;
            });
        })()
      : Promise.resolve(false);

    cardRenderResult.then((isRendered) => {
      if (isCancelled) return;
      setIsCardRendered(isRendered);
      setIsCardChecking(false);
    });

    const payLaterFundingSources = isPayLaterAmountEligible
      ? [
          window.paypal.FUNDING.PAYLATER,
          window.paypal.FUNDING.CREDIT,
        ].filter(Boolean)
      : [];

    const payLaterRenderResults = payLaterFundingSources.map((fundingSource, index) => {
      const buttonContainer = document.createElement("div");
      if (index > 0) {
        buttonContainer.className = "mt-2";
      }
      payLaterContainerRef.current!.appendChild(buttonContainer);

      const payLaterButton = window.paypal!.Buttons({
        fundingSource,
        style: baseStyle,
        createOrder,
        onApprove,
        onError,
        onCancel,
      });

      if (!(payLaterButton.isEligible?.() ?? true)) {
        return Promise.resolve(false);
      }

      return payLaterButton
        .render(buttonContainer)
        .then(() => true)
        .catch((err) => {
          console.error("PayPal Pay Later render failed:", err);
          return false;
        });
    });

    const payLaterRenderResult = payLaterRenderResults.length
      ? Promise.all(payLaterRenderResults).then((results) => results.some(Boolean))
      : Promise.resolve(false);

    payLaterRenderResult.then((didRenderPayLater) => {
      if (isCancelled) return;
      setIsPayLaterRendered(didRenderPayLater);
      setPayLaterUnavailable(isPayLaterAmountEligible && !didRenderPayLater);
      setIsPayLaterChecking(false);
    });

    return () => {
      isCancelled = true;
    };
  }, [
    appliedCoupon?.code,
    checkoutAmount,
    checkoutCurrency,
    courseSlug,
    isCheckoutOpen,
    isPayLaterAmountEligible,
    paypalReady,
  ]);

  const applyCoupon = async () => {
    const code = couponCode.trim().toUpperCase();
    if (!code) {
      setCouponMessage("Enter a coupon code.");
      return;
    }

    try {
      setError("");
      setCouponMessage("");
      setIsApplyingCoupon(true);
      const response = await apiRequest<AppliedCoupon>("/api/payments/coupons/validate", {
        method: "POST",
        body: JSON.stringify({ courseSlug, couponCode: code }),
      });

      setAppliedCoupon(response.data);
      setCouponCode(response.data.code);
      setCouponMessage(`Coupon applied: ${formatAmount(response.data.discountAmount, response.data.currency)} off.`);
    } catch (err) {
      setAppliedCoupon(null);
      setCouponMessage(err instanceof Error ? err.message : "Coupon could not be applied.");
    } finally {
      setIsApplyingCoupon(false);
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    setCouponMessage("");
  };

  const startRazorpayPayment = async () => {
    try {
      setError("");
      setIsRazorpayLoading(true);
      const scriptLoaded = await loadExternalScript(
        "https://checkout.razorpay.com/v1/checkout.js",
        "razorpay-checkout-js"
      );

      if (!scriptLoaded || !window.Razorpay) {
        throw new Error("Razorpay could not be loaded. Please try again.");
      }

      const response = await apiRequest<RazorpayOrder>("/api/payments/razorpay/order", {
        method: "POST",
        body: JSON.stringify({ courseSlug, couponCode: appliedCoupon?.code }),
      });

      const order = response.data;
      const razorpay = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: "Brit Institute",
        description: courseTitle,
        order_id: order.orderId,
        prefill: {
          contact: DEFAULT_RAZORPAY_COUNTRY_CODE,
        },
        theme: { color: "#D95700" },
        modal: {
          ondismiss: () => setIsRazorpayLoading(false),
        },
        handler: async (paymentResponse: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          try {
            const verifyResponse = await apiRequest<{ provider: string; orderId: string; paymentId: string }>(
              "/api/payments/razorpay/verify",
              {
                method: "POST",
                body: JSON.stringify({ courseSlug, couponCode: appliedCoupon?.code, ...paymentResponse }),
              }
            );

            if (verifyResponse.success) {
              setIsCheckoutOpen(false);
              setIsSuccessOpen(true);
            }
          } catch (err) {
            setError(err instanceof Error ? err.message : "Payment verification failed.");
          } finally {
            setIsRazorpayLoading(false);
          }
        },
      });

      razorpay.open();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Razorpay payment failed.");
      setIsRazorpayLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          setIsCheckoutOpen(true);
        }}
        className={
          className ??
          "w-full sm:w-auto px-8 py-4 bg-[#d95700] hover:bg-[#c45118] text-white rounded-xl font-bold text-[16px] transition-all shadow-md flex items-center justify-center gap-2 hover:-translate-y-0.5"
        }
      >
        <CreditCard className="h-5 w-5" />
        {label}
      </button>

      {isCheckoutOpen && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center bg-gray-950/65 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-gray-100 px-6 py-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c45118]">Secure checkout</p>
                <h2 className="mt-2 text-xl font-extrabold leading-snug text-gray-900">{courseTitle}</h2>
                <p className="mt-1 text-sm font-semibold text-gray-600">
                  Total amount:{" "}
                  {appliedCoupon && (
                    <span className="mr-2 text-gray-400 line-through">{originalDisplayAmount}</span>
                  )}
                  <span className="text-gray-900">{displayAmount}</span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsCheckoutOpen(false)}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-gray-900"
                aria-label="Close payment modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-5 px-6 py-6">
              <div className="rounded-2xl border border-[#ded6c8] bg-[#f7f3ea] p-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#d95700]" />
                  <p className="text-sm font-medium leading-6 text-[#493f37]">
                    Choose Apple Pay, Razorpay, or PayPal. Each option creates the course fee on the server and confirms it only after verified payment capture.
                  </p>
                </div>
              </div>


              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <label htmlFor={`coupon-${courseSlug}`} className="text-sm font-bold text-gray-900">
                  Coupon code
                </label>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <input
                    id={`coupon-${courseSlug}`}
                    type="text"
                    value={couponCode}
                    disabled={Boolean(appliedCoupon)}
                    onChange={(event) => {
                      setCouponCode(event.target.value.toUpperCase());
                      setCouponMessage("");
                    }}
                    placeholder="Enter coupon code"
                    className="min-h-12 flex-1 rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#d95700] focus:ring-2 focus:ring-[#f5c242]/25 disabled:bg-gray-100"
                  />
                  <button
                    type="button"
                    onClick={appliedCoupon ? removeCoupon : applyCoupon}
                    disabled={isApplyingCoupon}
                    className="min-h-12 rounded-xl bg-[#d95700] px-5 text-sm font-bold text-white transition hover:bg-[#c45118] disabled:cursor-not-allowed disabled:bg-gray-300"
                  >
                    {isApplyingCoupon ? (
                      <span className="inline-flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Checking
                      </span>
                    ) : appliedCoupon ? (
                      "Remove"
                    ) : (
                      "Apply"
                    )}
                  </button>
                </div>
                {couponMessage && (
                  <p className={`mt-2 text-xs font-semibold ${appliedCoupon ? "text-emerald-700" : "text-red-600"}`}>
                    {couponMessage}
                  </p>
                )}
                {appliedCoupon && (
                  <div className="mt-3 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
                    {appliedCoupon.description}. New total: {displayAmount}
                  </div>
                )}
              </div>

              {error && (
                <div className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <div className="mb-3 flex items-center gap-2 text-sm font-bold text-gray-700">
                  <Wallet className="h-4 w-4 text-gray-950" />
                  Apple Pay
                </div>
                {(isPayPalLoading || isApplePayChecking) && (
                  <div className="flex h-14 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-sm font-semibold text-gray-600">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Checking Apple Pay
                  </div>
                )}
                <div
                  ref={applePayContainerRef}
                  className={isApplePayEligible ? "min-h-12" : "hidden"}
                />
                {isApplePayLoading && (
                  <p className="mt-2 text-xs font-semibold text-gray-600">Completing Apple Pay payment…</p>
                )}
                {!isPayPalLoading && config && !isApplePayChecking && !isApplePayEligible && (
                  <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-600">
                    <p>
                      <span className="font-bold text-gray-800">Apple Pay is unavailable.</span>{" "}
                      {applePayUnavailableReason || "The eligibility check did not complete."}
                    </p>
                    <button
                      type="button"
                      onClick={() => setApplePayCheckAttempt((attempt) => attempt + 1)}
                      className="mt-3 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-bold text-gray-800 transition hover:border-gray-400 hover:bg-gray-100"
                    >
                      Retry Apple Pay check
                    </button>
                  </div>
                )}
              </div>

              <div className="grid gap-3">
                <button
                  type="button"
                  onClick={startRazorpayPayment}
                  disabled={isRazorpayLoading || Boolean(config && !config.razorpayKeyId)}
                  className="flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-gray-900 px-5 py-3 text-base font-bold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  {isRazorpayLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <CreditCard className="h-5 w-5" />}
                  Pay with Razorpay
                </button>

                {config && !config.razorpayKeyId && (
                  <p className="text-xs font-medium text-gray-500">Razorpay key is not configured on the backend.</p>
                )}
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2 text-sm font-bold text-gray-700">
                  <Wallet className="h-4 w-4 text-[#d95700]" />
                  PayPal
                </div>
                {isPayPalLoading && (
                  <div className="flex h-14 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-sm font-semibold text-gray-600">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading PayPal
                  </div>
                )}
                {!isPayPalLoading && config && !config.paypalClientId && (
                  <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-600">
                    PayPal client ID is not configured on the backend.
                  </div>
                )}
                <div ref={paypalContainerRef} className={paypalReady ? "min-h-12" : "hidden"} />
              </div>

              <div
                className={
                  paypalReady &&
                  (isPayLaterChecking ||
                    isPayLaterRendered ||
                    payLaterUnavailable ||
                    !isPayLaterAmountEligible)
                    ? ""
                    : "hidden"
                }
              >
                <div className="mb-3 flex items-center gap-2 text-sm font-bold text-gray-700">
                  <Wallet className="h-4 w-4 text-indigo-700" />
                  PayPal Pay Later
                </div>
                {isPayLaterChecking && (
                  <div className="flex h-14 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-sm font-semibold text-gray-600">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading PayPal Pay Later
                  </div>
                )}
                <div ref={payLaterContainerRef} className={isPayLaterRendered ? "min-h-12" : "hidden"} />
                {!isPayLaterAmountEligible && (
                  <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-600">
                    PayPal Pay Later is available for eligible GBP totals from{" "}
                    {formatAmount(payLaterMinAmount, "GBP")} to {formatAmount(payLaterMaxAmount, "GBP")}. Current total:{" "}
                    {displayAmount}.
                  </div>
                )}
                {isPayLaterAmountEligible && payLaterUnavailable && (
                  <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-600">
                    PayPal Pay Later is not available for this buyer or PayPal account right now.
                  </div>
                )}
              </div>

              <div className={paypalReady && (isCardChecking || isCardRendered) ? "" : "hidden"}>
                {isCardChecking && (
                  <div className="flex h-14 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-sm font-semibold text-gray-600">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading card payment
                  </div>
                )}
                <div ref={cardContainerRef} className={isCardRendered ? "min-h-12" : "hidden"} />
              </div>
            </div>
          </div>
        </div>
      )}

      {isSuccessOpen && (
        <div className="fixed inset-0 z-[1200] flex items-center justify-center bg-gray-950/65 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-emerald-100 bg-white p-8 text-center shadow-2xl">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <h2 className="mt-5 text-2xl font-extrabold text-gray-900">Payment successful</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Your payment for {courseTitle} has been completed successfully. Our team will contact you with the next steps.
            </p>
            <button
              type="button"
              onClick={() => setIsSuccessOpen(false)}
              className="mt-6 w-full rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
}
