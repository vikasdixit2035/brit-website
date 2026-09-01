import AboutPageClient from "@/app/about/AboutPageClient";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Brit Institute",
  description:
    "Learn how Brit Institute helps learners across the UK build practical AI and data skills through structured programmes, projects, and career-focused support.",
  path: "/about",
  keywords: ["about Brit Institute", "AI and data training UK", "career training provider UK"],
});

export default function AboutPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Brit Institute",
    url: "https://britinstitute.uk/about",
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
      <AboutPageClient />
    </>
  );
}
