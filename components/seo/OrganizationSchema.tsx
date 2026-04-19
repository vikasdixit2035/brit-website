import { SITE_STATS } from "@/lib/site";
import type { SiteConfig } from "@/lib/siteConfig";

export default function OrganizationSchema({ siteConfig }: { siteConfig: SiteConfig }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_STATS.averageRating,
      reviewCount: "885",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
