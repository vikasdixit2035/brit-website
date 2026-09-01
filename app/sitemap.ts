import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { BLOG_ARTICLES } from "@/app/blog/blogData";
import { coursesData } from "@/app/courses/[slug]/courseData";
import { getRequestSiteConfig } from "@/lib/siteConfig";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const requestHeaders = await headers();
  const siteConfig = getRequestSiteConfig(requestHeaders);

  if (siteConfig.variant === "chatbot") {
    return [];
  }

  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/courses",
    "/power-bi-course-uk",
    "/career-change-data-analyst-uk",
    "/data-analyst-bootcamp-uk",
    "/placement",
    "/pricing",
    "/reviews",
    "/resources",
    "/blog",
    "/faq",
    "/careers",
    "/privacy-policy",
    "/terms",
  ];

  const staticEntries = staticRoutes.map((path) => {
    let priority = 0.7;
    if (path === "/") priority = 1.0;
    else if (["/about", "/contact", "/courses", "/placement", "/pricing", "/power-bi-course-uk", "/career-change-data-analyst-uk"].includes(path)) priority = 0.9;
    
    return {
      url: `${siteConfig.siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority,
    };
  }) satisfies MetadataRoute.Sitemap;

  const blogEntries = BLOG_ARTICLES.map((article) => ({
    url: `${siteConfig.siteUrl}${article.canonicalPath ?? `/blog/${article.slug}`}`,
    lastModified: new Date(article.updatedAt ?? article.publishedAt ?? "2026-04-13"),
    changeFrequency: "monthly",
    priority: article.featured ? 0.8 : 0.7,
  })) satisfies MetadataRoute.Sitemap;

  const courseEntries = Object.entries(coursesData).map(([, course]) => ({
    url: `${siteConfig.siteUrl}${course.canonicalPath}`,
    lastModified: new Date(course.updatedAt),
    changeFrequency: "weekly",
    priority: 0.9,
  })) satisfies MetadataRoute.Sitemap;

  return [...staticEntries, ...courseEntries, ...blogEntries];
}
