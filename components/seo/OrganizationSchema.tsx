import { SITE_NAME, SITE_URL, SITE_STATS } from "@/lib/site";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    url: SITE_URL,
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
