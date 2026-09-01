import ReviewsPageClient from "@/app/reviews/ReviewsPageClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Recent Batch Reviews and Learner Video Testimonials",
  description:
    "Watch learner video testimonials by completed Brit Institute batch and read written reviews from recent AI, data analytics, and data science cohorts.",
  path: "/reviews",
  keywords: [
    "Brit Institute reviews",
    "recent learner testimonials",
    "AI and data batch reviews",
    "data course reviews UK",
    "AI training testimonials UK",
  ],
});

export default function ReviewsPage() {
  return <ReviewsPageClient />;
}
