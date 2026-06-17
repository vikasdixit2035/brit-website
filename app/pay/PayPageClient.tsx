"use client";

import { useEffect, useMemo, useState } from "react";
import { CreditCard, ExternalLink, Loader2, ShieldCheck, Wallet } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import TopBanner from "@/components/layout/TopBanner";
import Footer from "@/components/layout/Footer";
import { SITE_EMAIL, SITE_PHONE_DISPLAY, SITE_PHONE_UK } from "@/lib/site";

type PaymentConfig = {
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

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  (process.env.NODE_ENV === "development" ? "http://localhost:4000" : "https://api.britinstitute.uk");

async function apiRequest<T>(path: string): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const payload = (await response.json().catch(() => null)) as ApiResponse<T> | null;

  if (!response.ok || !payload?.success) {
    throw new Error(payload?.message || "Payment links could not be loaded");
  }

  return payload;
}

function isConfiguredUrl(url?: string) {
  return Boolean(url && /^https?:\/\//i.test(url));
}

export default function PayPageClient() {
  const [banner, setBanner] = useState(true);
  const [config, setConfig] = useState<PaymentConfig | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadPaymentLinks() {
      try {
        setError("");
        const response = await apiRequest<PaymentConfig>("/api/payments/config");
        if (isMounted) {
          setConfig(response.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Payment links could not be loaded");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadPaymentLinks();

    return () => {
      isMounted = false;
    };
  }, []);

  const paymentMethods = useMemo(
    () => [
      {
        id: "razorpay",
        title: "Pay in India via Razorpay",
        description: "Open the secure Razorpay payment page, enter your preferred amount, and pay using UPI, card, net banking, or wallet.",
        href: config?.paymentLinks?.razorpayPaymentPageUrl,
        icon: CreditCard,
        badge: "INR custom amount",
        buttonLabel: "Open Razorpay Payment Page",
        accent: "bg-[#d95700] hover:bg-[#c45118]",
      },
      {
        id: "paypal",
        title: "International payment via PayPal",
        description: "Use PayPal.Me for international payments. You can enter the payment amount on PayPal and complete checkout securely.",
        href: config?.paymentLinks?.paypalMeUrl,
        icon: Wallet,
        badge: "International",
        buttonLabel: "Open PayPal.Me",
        accent: "bg-[#24101f] hover:bg-[#160914]",
      },
    ],
    [config]
  );

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#241a1f]">
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />

      <section
        className="bg-[linear-gradient(180deg,#24101f_0%,#24101f_70%,#160914_100%)] px-6 text-white"
        style={{ paddingTop: banner ? "164px" : "124px", paddingBottom: "72px" }}
      >
        <div className="mx-auto max-w-5xl">
          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#f5c242]">
            Secure payment links
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Make a payment for your course, deposit, instalment, or balance
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Choose a hosted payment option below. On the payment page, enter the amount you want to pay and include your name, email, phone, and course details.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {paymentMethods.map((method) => {
            const isReady = isConfiguredUrl(method.href);
            const Icon = method.icon;

            return (
              <article key={method.id} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#f0eadf] text-[#24101f]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-amber-800">
                    {method.badge}
                  </span>
                </div>

                <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-slate-950">{method.title}</h2>
                <p className="mt-3 flex-1 text-base leading-7 text-slate-600">{method.description}</p>

                <div className="mt-6 rounded-xl border border-[#ded6c8] bg-[#f7f3ea] p-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#d95700]" />
                    <p className="text-sm font-semibold leading-6 text-[#493f37]">
                      Hosted-link payments are confirmed by the payment provider. Our admissions team will match the payment using the details you enter.
                    </p>
                  </div>
                </div>

                {isLoading ? (
                  <div className="mt-6 flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-sm font-bold text-slate-600">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading payment link
                  </div>
                ) : isReady ? (
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-extrabold text-white transition ${method.accent}`}
                  >
                    {method.buttonLabel}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-600">
                    This payment link is being configured. Please contact admissions to pay using this option.
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {error && (
          <div className="mx-auto mt-6 max-w-5xl rounded-xl border border-red-100 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700">
            {error}
          </div>
        )}

        <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Need help?</p>
          <p className="mt-2 text-base leading-7 text-slate-700">
            Contact admissions before paying if you are unsure about the amount, currency, or payment purpose.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${SITE_PHONE_UK}`}
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#d95700] px-5 text-sm font-bold text-white transition hover:bg-[#c45118]"
            >
              {SITE_PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 px-5 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
            >
              {SITE_EMAIL}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
