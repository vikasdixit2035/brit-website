import PlacementPageClient from "@/app/placement/PlacementPageClient";
import { breadcrumbSchema, buildMetadata, organizationSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Placement Support | Brit Institute",
  description:
    "Explore Brit Institute's structured placement support including CV optimisation, LinkedIn improvement, portfolio projects, mock interviews and job-search guidance for UK Data, AI and Automation roles.",
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
    name: "Placement Support | Brit Institute",
    description:
      "Structured placement and career-readiness support for UK Data, AI and Automation learners.",
    mainEntity: organizationSchema(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <PlacementPageClient />
    </>
  );
}
