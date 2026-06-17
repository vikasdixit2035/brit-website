/* ── Blog article data ── */

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogCTA {
  heading: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  featured: boolean;
  date: string;
  readTime: string;
  color: string;
  content: string; // markdown-ish plain text for the post page
  faqs?: BlogFAQ[];
  midCta?: BlogCTA;
  bottomCta?: BlogCTA;
  relatedSlugs?: string[];
  relatedCourseSlugs?: string[];
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
  canonicalPath?: string;
  ogImage?: string;
}

export const BLOG_CATEGORIES = [
  { label: "All", slug: "all" },
  { label: "How to Become", slug: "how-to" },
  { label: "Career Comparisons", slug: "comparisons" },
  { label: "Salary Insights", slug: "salary-guides" },
  { label: "Tools & Skills", slug: "tools" },
  { label: "Beginner Guides", slug: "beginner-guides" },
];

export { BLOG_ARTICLES } from "./articles";
