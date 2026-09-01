import type { Metadata } from "next";
import {
  DEFAULT_OG_IMAGE,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE_UK,
  SITE_POSTAL_ADDRESS,
  SITE_URL,
} from "@/lib/site";
import type { SiteConfig } from "@/lib/siteConfig";

type MetaInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noindex?: boolean;
  follow?: boolean;
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
  price?: string;
  currency?: string;
  courseMode?: string;
  providerName?: string;
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
  follow = !noindex,
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
          follow,
          googleBot: {
            index: false,
            follow,
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
    logo: absoluteUrl("/brit-logo.png"),
    email: "info@britinstitute.uk",
    address: SITE_POSTAL_ADDRESS,
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
    logo: getAbsoluteUrl("/brit-logo.png", siteConfig),
    email: SITE_EMAIL,
    address: SITE_POSTAL_ADDRESS,
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
  };
}

export function websiteSchemaForSite(siteConfig: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
  };
}

export function siteNavigationSchema() {
  const navItems = [
    { name: "About Brit Institute", url: "/about" },
    { name: "Courses", url: "/courses" },
    { name: "Placement Support", url: "/placement" },
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
    { name: "Placement Support", url: "/placement" },
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
  price,
  currency = "GBP",
  courseMode = "online",
  providerName = SITE_NAME,
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
      name: providerName,
      sameAs: SITE_URL,
    },
    inLanguage: "en-GB",
    audience: {
      "@type": "Audience",
      audienceType: "UK learners, beginners, career switchers, and working professionals",
      geographicArea: {
        "@type": "Country",
        name: "United Kingdom",
      },
    },
    educationalCredentialAwarded: "Certificate of Completion",
    ...(timeRequired ? { timeRequired } : {}),
    ...(teaches.length > 0 ? { teaches } : {}),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode,
      courseWorkload: timeRequired,
      location: {
        "@type": "VirtualLocation",
        url: absoluteUrl(path),
      },
      instructor: {
        "@type": "Organization",
        name: providerName,
      },
    },
    ...(price
      ? {
          offers: {
            "@type": "Offer",
            category: "Paid",
            price,
            priceCurrency: currency,
            availability: "https://schema.org/InStock",
            url: absoluteUrl(path),
            eligibleRegion: {
              "@type": "Country",
              name: "United Kingdom",
            },
          },
        }
      : {}),
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

export function courseCatalogueSchema(
  courses: Array<{ name: string; description: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Brit Institute data and AI career programmes",
    numberOfItems: courses.length,
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(course.path),
      item: {
        "@type": "Course",
        name: course.name,
        description: course.description,
        url: absoluteUrl(course.path),
        provider: {
          "@type": "EducationalOrganization",
          name: SITE_NAME,
          url: SITE_URL,
        },
      },
    })),
  };
}

/**
 * EducationalOrganization schema – signals to Google that Brit Institute
 * is a training provider, improving eligibility for course-related rich
 * results on queries like "data analytics course UK".
 */
export function educationalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/brit-logo.png"),
    email: SITE_EMAIL,
    telephone: SITE_PHONE_UK,
    description:
      "Brit Institute provides live, project-led data and AI skills training with structured career and placement support for learners pursuing UK roles.",
    address: SITE_POSTAL_ADDRESS,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "admissions",
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
