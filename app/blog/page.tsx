import BlogPageClient from "@/app/blog/BlogPageClient";
import { BLOG_ARTICLES } from "@/app/blog/blogData";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Read practical UK-focused guides on data analytics, AI careers, salaries, and tools from Brit Institute.",
  path: "/blog",
  keywords: ["data analytics blog UK", "AI careers blog UK", "data analyst salary UK", "Brit Institute blog"],
});

export default function BlogPage() {
  const blogCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Blog`,
    description:
      "UK-focused AI, data analytics, salary, and career guides from Brit Institute.",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    blogPost: BLOG_ARTICLES.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.seoDescription ?? article.excerpt,
      url: `${SITE_URL}${article.canonicalPath ?? `/blog/${article.slug}`}`,
      datePublished: article.publishedAt ?? article.date,
      dateModified: article.updatedAt ?? article.publishedAt ?? article.date,
      articleSection: article.category,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }}
      />
      <BlogPageClient />
    </>
  );
}
