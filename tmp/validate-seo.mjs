const origin = "http://localhost:3000";
const routes = [
  "/",
  "/courses",
  "/courses/data-analytics",
  "/placement",
  "/pricing",
  "/about",
  "/apply",
  "/resources",
  "/blog",
  "/faq",
  "/reviews",
  "/power-bi-course-uk",
  "/career-change-data-analyst-uk",
  "/data-analyst-bootcamp-uk",
];

const schemaTypes = [];
const schemaErrors = [];
const forbiddenSchema = [];
const internalLinks = new Map();

function collectTypes(value, route) {
  if (!value || typeof value !== "object") return;
  if (typeof value["@type"] === "string") {
    schemaTypes.push(`${route}:${value["@type"]}`);
    if (["AggregateRating", "Review", "JobPosting"].includes(value["@type"])) {
      forbiddenSchema.push(`${route}:${value["@type"]}`);
    }
  }
  for (const child of Object.values(value)) {
    if (typeof child === "object") collectTypes(child, route);
  }
}

for (const route of routes) {
  const response = await fetch(`${origin}${route}`);
  const html = await response.text();
  const scripts = Array.from(
    html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi),
    (match) => match[1],
  );

  scripts.forEach((script, index) => {
    try {
      collectTypes(JSON.parse(script), route);
    } catch (error) {
      schemaErrors.push(`${route}#${index + 1}: ${error.message}`);
    }
  });

  for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi)) {
    try {
      const url = new URL(match[1], origin);
      if (url.origin !== origin || url.pathname.startsWith("/_next/")) continue;
      if (/\.(?:png|jpe?g|webp|svg|pdf|zip)$/i.test(url.pathname)) continue;
      internalLinks.set(url.pathname, (internalLinks.get(url.pathname) || []).concat(route));
    } catch {}
  }
}

const brokenLinks = [];
for (const [pathname, sources] of internalLinks) {
  const response = await fetch(`${origin}${pathname}`, { redirect: "manual" });
  if (response.status >= 400) {
    brokenLinks.push({ pathname, status: response.status, sources: [...new Set(sources)] });
  }
}

console.log(
  JSON.stringify(
    {
      pagesChecked: routes.length,
      jsonLdBlocks: schemaTypes.length,
      schemaTypes: [...new Set(schemaTypes.map((entry) => entry.split(":").at(-1)))].sort(),
      schemaParseErrors: schemaErrors,
      forbiddenSchema,
      internalTargetsChecked: internalLinks.size,
      brokenLinks,
    },
    null,
    2,
  ),
);
