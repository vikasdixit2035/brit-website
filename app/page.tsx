import HomePageClient from "@/app/HomePageClient";
import { buildMetadata, organizationSchema } from "@/lib/seo";
import { faqPageSchema } from "@/lib/faqData";

export const metadata = buildMetadata({
  title: "AI and Data Career Training in the UK",
  description:
    "Discover practical AI and data career programmes in the UK with real projects, structured learning, and dedicated career support from Brit Institute.",
  path: "/",
  keywords: [
    "AI course UK",
    "data analytics course UK",
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
