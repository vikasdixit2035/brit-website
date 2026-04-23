import HomePageClient from "@/app/HomePageClient";
import { buildMetadata, organizationSchema } from "@/lib/seo";
import { faqPageSchema } from "@/lib/faqData";

export const metadata = buildMetadata({
  title: "Data Analytics Course UK | AI and Data Career Training",
  description:
    "Brit Institute offers a practical data analytics course in the UK plus AI and data career programmes with real projects, structured learning, and career support.",
  path: "/",
  keywords: [
    "data analytics course UK",
    "data analyst course UK",
    "AI course UK",
    "Power BI course UK",
    "SQL course UK",
    "data career training UK",
    "AI and data careers UK",
  ],
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <HomePageClient />
    </>
  );
}
