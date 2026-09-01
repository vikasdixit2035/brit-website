import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostClient from "@/app/blog/[slug]/BlogPostClient";
import { BLOG_ARTICLES } from "@/app/blog/blogData";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function getArticle(slug: string) {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return buildMetadata({
      title: "Blog",
      description: "Read practical AI and data career guides from Brit Institute.",
      path: "/blog",
    });
  }

  return buildMetadata({
    title: article.seoTitle ?? article.title,
    description: article.seoDescription ?? article.excerpt,
    path: article.canonicalPath ?? `/blog/${article.slug}`,
    image: article.ogImage,
    keywords: [
      article.category,
      "Brit Institute blog",
      "AI careers UK",
      "data analytics UK",
    ],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const articlePath = article.canonicalPath ?? `/blog/${article.slug}`;
  const articleImage = article.ogImage ?? DEFAULT_OG_IMAGE;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    url: `${SITE_URL}${articlePath}`,
    image: `${SITE_URL}${articleImage}`,
    inLanguage: "en-GB",
    articleSection: article.category,
    keywords: [
      article.category,
      "UK data careers",
      "AI courses UK",
      "data analytics UK",
      ...(article.relatedCourseSlugs ?? []),
    ],
    author: {
      "@type": "Organization",
      name: article.author ?? SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/brit-logo.png`,
      },
    },
    datePublished: article.publishedAt ?? article.date,
    dateModified: article.updatedAt ?? article.publishedAt ?? article.date,
    mainEntityOfPage: `${SITE_URL}${articlePath}`,
  };
  const faqSchema = article.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: article.title, path: articlePath },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <BlogPostClient />
    </>
  );
}
