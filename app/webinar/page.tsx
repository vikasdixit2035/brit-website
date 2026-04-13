import WebinarPageClient from "@/app/webinar/WebinarPageClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Webinar Registration",
  description:
    "Register for Brit Institute webinars covering AI, data analytics, and career pathways in the UK.",
  path: "/webinar",
  noindex: true,
});

export default function WebinarPage() {
  return <WebinarPageClient />;
}
