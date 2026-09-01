import PayPageClient from "./PayPageClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Make a Payment",
  description: "Make a secure Brit Institute payment through hosted Razorpay and PayPal payment links.",
  path: "/pay",
  noindex: true,
});

export default function PayPage() {
  return <PayPageClient />;
}
