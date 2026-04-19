import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getRequestSiteConfig } from "@/lib/siteConfig";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const requestHeaders = await headers();
  const siteConfig = getRequestSiteConfig(requestHeaders);

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/webinar"],
      },
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    host: siteConfig.siteUrl,
  };
}
