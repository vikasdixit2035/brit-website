import HomePageClient from "@/app/HomePageClient";
import OpenOfferModalOnMount from "@/components/layout/OpenOfferModalOnMount";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Apply for Brit Institute Programmes",
  description:
    "Apply for Brit Institute AI and data career programmes and speak with the admissions team.",
  path: "/apply",
  keywords: [
    "apply Brit Institute",
    "AI course application UK",
    "data analytics course application UK",
    "career training consultation UK",
  ],
});

export default function ApplyPage() {
  return (
    <>
      <OpenOfferModalOnMount />
      <HomePageClient />
    </>
  );
}
