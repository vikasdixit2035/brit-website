import TermsPageClient from "@/app/terms/TermsPageClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms and Conditions",
  description:
    "Review Brit Institute terms and conditions for website use, enrolment, payments, intellectual property, and programme policies.",
  path: "/terms",
});

export default function TermsPage() {
  return <TermsPageClient />;
}
