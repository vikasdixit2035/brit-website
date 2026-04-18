import type { MetadataRoute } from "next";
import { BLOG_ARTICLES } from "@/app/blog/blogData";
import { coursesData } from "@/app/courses/[slug]/courseData";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/courses",
    "/pricing",
    "/reviews",
    "/resources",
    "/blog",
    "/careers",
    "/privacy-policy",
    "/terms",
  ];

  const staticEntries = staticRoutes.map((path) => {
    let priority = 0.7;
    if (path === "/") priority = 1.0;
    else if (["/about", "/contact", "/courses", "/pricing"].includes(path)) priority = 0.9;
    
    return {
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority,
    };
  }) satisfies MetadataRoute.Sitemap;

  const blogEntries = BLOG_ARTICLES.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt ?? article.publishedAt ?? "2026-04-13"),
    changeFrequency: "monthly",
    priority: article.featured ? 0.8 : 0.7,
  })) satisfies MetadataRoute.Sitemap;

  const courseEntries = Object.entries(coursesData).map(([, course]) => ({
    url: `${SITE_URL}${course.canonicalPath}`,
    lastModified: new Date(course.updatedAt),
    changeFrequency: "weekly",
    priority: 0.9,
  })) satisfies MetadataRoute.Sitemap;

  return [...staticEntries, ...courseEntries, ...blogEntries];
}
