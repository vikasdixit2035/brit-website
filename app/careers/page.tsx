import CareersPageClient from "@/app/careers/CareersPageClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Careers in AI and Data",
  description:
    "Explore UK career paths in data analytics, data science, and AI automation, including salaries, skill tracks, and hiring demand.",
  path: "/careers",
  keywords: [
    "AI careers UK",
    "data analyst jobs UK",
    "data science careers UK",
    "automation careers UK",
  ],
});

export default function CareersPage() {
  return <CareersPageClient />;
}
