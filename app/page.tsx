import HomePageClient from "@/app/HomePageClient";
import OpenOfferModalOnMount from "@/components/layout/OpenOfferModalOnMount";
import { buildMetadata } from "@/lib/seo";
import { faqPageSchema } from "@/lib/faqData";

export const metadata = buildMetadata({
  title: "Data Analyst Course UK | Job-Ready Training | Brit Institute",
  description:
    "Become a job-ready Data Analyst with UK-focused training in Excel, SQL, Power BI, Python and AI. Build real projects and get interview, career and placement support.",
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

type HomeProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function hasApplyParam(value: string | string[] | undefined): boolean {
  if (Array.isArray(value)) {
    return value.some((item) => hasApplyParam(item));
  }

  if (!value) {
    return false;
  }

  return ["1", "true", "yes", "open"].includes(value.toLowerCase());
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const shouldOpenOfferModal = hasApplyParam(params?.apply) || hasApplyParam(params?.form);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema).replace(/</g, "\\u003c") }}
      />
      {shouldOpenOfferModal && <OpenOfferModalOnMount />}
      <HomePageClient />
    </>
  );
}
