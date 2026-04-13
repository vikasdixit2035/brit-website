import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/webinar"],
      },
    ],
    sitemap: "https://britinstitute.uk/sitemap.xml",
    host: "https://britinstitute.uk",
  };
}
