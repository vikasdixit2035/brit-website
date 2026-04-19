import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, SITE_EMAIL, SITE_PHONE_UK } from "@/lib/site";
import type { SiteConfig } from "@/lib/siteConfig";

type MetaInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noindex?: boolean;
};

function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

function getAbsoluteUrl(path = "/", siteConfig?: SiteConfig) {
  if (!siteConfig) return absoluteUrl(path);
  return new URL(path, siteConfig.siteUrl).toString();
}

type CourseReviewInput = {
  author: string;
  body: string;
  ratingValue: number;
  datePublished: string;
};

type CourseAggregateRatingInput = {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
};

type CourseSchemaInput = {
  name: string;
  description: string;
  path: string;
  timeRequired?: string;
  teaches?: string[];
  reviews?: {
    aggregate: CourseAggregateRatingInput;
    items: CourseReviewInput[];
  } | null;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  keywords = [],
  noindex = false,
}: MetaInput, siteConfig?: SiteConfig): Metadata {
  const url = getAbsoluteUrl(path, siteConfig);
  const imageUrl = getAbsoluteUrl(image, siteConfig);
  const siteName = siteConfig?.siteName ?? SITE_NAME;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_GB",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/britinstitute.png"),
    email: "info@britinstitute.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office 7084, 58 Peregrine Road",
      addressLocality: "Hainault",
      addressRegion: "Ilford",
      addressCountry: "GB",
      postalCode: "IG6 3SZ",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE_EMAIL,
        telephone: SITE_PHONE_UK,
        areaServed: "GB",
        availableLanguage: ["en"],
      },
    ],
    sameAs: [
      "https://www.trustpilot.com/review/britinstitute.uk",
    ],
  };
}

export function organizationSchemaForSite(siteConfig: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    logo: getAbsoluteUrl("/britinstitute.png", siteConfig),
    email: SITE_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office 7084, 58 Peregrine Road",
      addressLocality: "Hainault",
      addressRegion: "Ilford",
      addressCountry: "GB",
      postalCode: "IG6 3SZ",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE_EMAIL,
        telephone: SITE_PHONE_UK,
        areaServed: "GB",
        availableLanguage: ["en"],
      },
    ],
    sameAs: ["https://www.trustpilot.com/review/britinstitute.uk"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/courses?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function websiteSchemaForSite(siteConfig: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.siteUrl}/courses?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function siteNavigationSchema() {
  const navItems = [
    { name: "About Brit Institute", url: "/about" },
    { name: "Courses", url: "/courses" },
    { name: "Pricing", url: "/pricing" },
    { name: "Reviews", url: "/reviews" },
    { name: "Resources", url: "/resources" },
    { name: "Blog", url: "/blog" },
    { name: "Contact Brit Institute", url: "/contact" },
    { name: "Careers", url: "/careers" },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: navItems.map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: item.name,
      url: `${SITE_URL}${item.url}`,
    })),
  };
}

export function siteNavigationSchemaForSite(siteConfig: SiteConfig) {
  const navItems = [
    { name: "About Brit Institute", url: "/about" },
    { name: "Courses", url: "/courses" },
    { name: "Pricing", url: "/pricing" },
    { name: "Reviews", url: "/reviews" },
    { name: "Resources", url: "/resources" },
    { name: "Blog", url: "/blog" },
    { name: "Contact Brit Institute", url: "/contact" },
    { name: "Careers", url: "/careers" },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: navItems.map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: item.name,
      url: `${siteConfig.siteUrl}${item.url}`,
    })),
  };
}

export function buildCourseSchema({
  name,
  description,
  path,
  timeRequired,
  teaches = [],
  reviews,
}: CourseSchemaInput) {
  const hasVisibleReviews =
    Boolean(reviews) &&
    reviews!.items.length > 0 &&
    reviews!.items.every((review) => Boolean(review.author && review.body && review.datePublished));

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: absoluteUrl(path),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      sameAs: SITE_URL,
    },
    educationalCredentialAwarded: "Certificate of Completion",
    ...(timeRequired ? { timeRequired } : {}),
    ...(teaches.length > 0 ? { teaches } : {}),
    ...(hasVisibleReviews
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: reviews!.aggregate.ratingValue,
            reviewCount: reviews!.aggregate.reviewCount,
            bestRating: reviews!.aggregate.bestRating ?? 5,
            worstRating: reviews!.aggregate.worstRating ?? 1,
          },
          review: reviews!.items.map((review) => ({
            "@type": "Review",
            author: {
              "@type": "Person",
              name: review.author,
            },
            datePublished: review.datePublished,
            reviewBody: review.body,
            reviewRating: {
              "@type": "Rating",
              ratingValue: review.ratingValue,
              bestRating: reviews!.aggregate.bestRating ?? 5,
              worstRating: reviews!.aggregate.worstRating ?? 1,
            },
          })),
        }
      : {}),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
