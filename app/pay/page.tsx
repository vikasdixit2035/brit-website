import type { Metadata } from "next";
import PayPageClient from "./PayPageClient";

export const metadata: Metadata = {
  title: "Make a Payment",
  description: "Make a secure Brit Institute payment through hosted Razorpay and PayPal payment links.",
  alternates: {
    canonical: "/pay",
  },
};

export default function PayPage() {
  return <PayPageClient />;
}
