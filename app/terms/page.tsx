import TermsPageClient from "@/app/terms/TermsPageClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms and Conditions",
  description:
    "Review Brit Institute terms and conditions, including enrolment, payments, the 45-day money-back guarantee, and placement guarantee eligibility.",
  path: "/terms",
});

export default function TermsPage() {
  return <TermsPageClient />;
}
