import PricingPageClient from "@/app/pricing/PricingPageClient";
import { fetchCourses } from "@/lib/courses";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Course Pricing",
  description:
    "Compare pricing for Brit Institute courses in Data Analytics, Data Science, and AI Automation, including duration, learning format, and career outcomes.",
  path: "/pricing",
  keywords: [
    "Brit Institute pricing",
    "data analytics course price UK",
    "data science course price UK",
    "AI course price UK",
  ],
});

export default async function PricingPage() {
  const courses = await fetchCourses();
  return <PricingPageClient courses={courses} />;
}
