import ResourcesPageClient from "@/app/resources/ResourcesPageClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Career Resources",
  description:
    "Download practical guides, salary reports, and UK career resources for data analytics, AI, and data science roles.",
  path: "/resources",
  keywords: ["data analytics resources UK", "AI career guides UK", "salary guide UK data analyst"],
});

export default function ResourcesPage() {
  return <ResourcesPageClient />;
}
