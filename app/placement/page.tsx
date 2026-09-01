import PlacementPageClient from "@/app/placement/PlacementPageClient";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Data Analyst Placement Support UK",
  description:
    "Build your portfolio, CV, LinkedIn profile, interview skills and UK job-search plan with structured Data Analyst placement support from Brit Institute.",
  path: "/placement",
  keywords: [
    "placement support UK",
    "data analyst career support",
    "AI career support UK",
    "CV optimisation UK data roles",
    "Brit Institute placement support",
  ],
});

export default function PlacementPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Placement", path: "/placement" },
  ]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Data Analyst Placement Support in the UK",
    url: "https://britinstitute.uk/placement",
    description:
      "Structured portfolio, CV, LinkedIn, interview, job-search and placement support for learners pursuing UK data analyst roles.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs).replace(/</g, "\\u003c") }}
      />
      <PlacementPageClient />
    </>
  );
}
