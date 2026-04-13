import PrivacyPolicyPageClient from "@/app/privacy-policy/PrivacyPolicyPageClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read the Brit Institute privacy policy covering how we collect, use, and protect personal information on our website and programmes.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}
