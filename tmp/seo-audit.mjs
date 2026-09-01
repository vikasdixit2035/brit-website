const defaultRoutes = [
  "/",
  "/courses",
  "/courses/data-analytics",
  "/power-bi-course-uk",
  "/career-change-data-analyst-uk",
  "/data-analyst-bootcamp-uk",
  "/courses/data-science",
  "/courses/ai-automation",
  "/courses/gen-ai",
  "/placement",
  "/pricing",
  "/about",
  "/apply",
  "/resources",
  "/blog",
  "/faq",
  "/reviews",
  "/contact",
  "/careers",
  "/privacy-policy",
  "/terms",
  "/webinar",
  "/pay",
  "/career-chatbot",
  "/does-not-exist",
  "/robots.txt",
  "/sitemap.xml",
];

const routes = process.argv.length > 2 ? process.argv.slice(2) : defaultRoutes;

const clean = (value) =>
  String(value || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

const one = (html, pattern) => {
  const match = html.match(pattern);
  return match ? clean(match[1]) : "";
};

const all = (html, tag) =>
  Array.from(
    html.matchAll(new RegExp(`<${tag}\\b[^>]*>(.*?)</${tag}>`, "gis")),
    (match) => clean(match[1]),
  );

for (const route of routes) {
  const response = await fetch(`http://localhost:3000${route}`, {
    redirect: "manual",
  });
  const html = await response.text();
  const canonical =
    one(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/is) ||
    one(html, /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/is);
  const robots = one(
    html,
    /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)/is,
  );
  const images = Array.from(html.matchAll(/<img\b[^>]*>/gis), (match) => match[0]);

  console.log(
    JSON.stringify({
      route,
      status: response.status,
      bytes: html.length,
      title: one(html, /<title[^>]*>(.*?)<\/title>/is),
      description: one(
        html,
        /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)/is,
      ),
      canonical,
      robots,
      h1: all(html, "h1"),
      h2Count: all(html, "h2").length,
      links: (html.match(/<a\b[^>]+href=/gi) || []).length,
      images: images.length,
      missingAlt: images.filter((image) => !/\salt=["']/i.test(image)).length,
      jsonLd: (html.match(/<script[^>]+type=["']application\/ld\+json["']/gi) || [])
        .length,
    }),
  );
}
