import ReviewsPageClient from "@/app/reviews/ReviewsPageClient";
import { buildMetadata, organizationSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Learner Reviews and Success Stories",
  description:
    "Read learner stories, programme reviews, and transition journeys from Brit Institute students building careers in AI and data.",
  path: "/reviews",
  keywords: ["Brit Institute reviews", "data course reviews UK", "AI training testimonials UK"],
});

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <ReviewsPageClient />
    </>
  );
}
