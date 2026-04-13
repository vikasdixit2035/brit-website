import BlogPageClient from "@/app/blog/BlogPageClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Read practical UK-focused guides on data analytics, AI careers, salaries, and tools from Brit Institute.",
  path: "/blog",
  keywords: ["data analytics blog UK", "AI careers blog UK", "data analyst salary UK", "Brit Institute blog"],
});

export default function BlogPage() {
  return <BlogPageClient />;
}
