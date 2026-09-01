import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import StickyBottomBar from "@/components/layout/StickyBottomBar";
import CareerChatbotFloat from "@/components/layout/CareerChatbotFloat";
import SiteChrome from "@/components/layout/SiteChrome";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import {
  getRequestSiteConfig,
  isStandaloneChatbotRequest,
  MAIN_SITE_NAME,
} from "@/lib/siteConfig";

import GlobalUI from "@/components/layout/GlobalUI";
import {
  GoogleTagManagerHead,
  GoogleTagManagerNoScript,
} from "@/components/analytics/GoogleTagManager";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MetaPixel from "@/components/analytics/MetaPixel";
import SiteMeasurement from "@/components/analytics/SiteMeasurement";
import {
  educationalOrganizationSchema,
  websiteSchemaForSite,
} from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const siteConfig = getRequestSiteConfig(requestHeaders);
  const isStandalone = isStandaloneChatbotRequest(requestHeaders);
  const siteTitle =
    isStandalone && siteConfig.variant === "chatbot"
      ? "Brit Institute Career Chatbot | Free AI & Data Career Assessment"
      : "Brit Institute | AI and Data Career Training in the UK";
  const siteDescription =
    isStandalone && siteConfig.variant === "chatbot"
      ? "Take the Brit Institute career chatbot assessment for a personalised AI and data career roadmap, salary range, and next-step guidance."
      : "Brit Institute offers practical AI and data career training in the UK with structured programmes, real projects, and dedicated career support.";
  const canonicalPath = isStandalone && siteConfig.variant === "chatbot" ? "/" : "/";

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
      default: siteTitle,
      template: `%s | ${isStandalone && siteConfig.variant === "chatbot" ? siteConfig.siteName : MAIN_SITE_NAME}`,
    },
    description: siteDescription,
    applicationName: siteConfig.siteName,
    icons: {
      icon: "/britinstitute_v1.png",
      apple: "/britinstitute_v1.png",
    },
    manifest: "/site.webmanifest",
    keywords: [
      "AI courses UK",
      "data analytics course UK",
      "agentic AI course UK",
      "AI and data careers UK",
      "UK tech careers",
      "data analyst course",
      "career chatbot",
      "career assessment",
    ],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      type: "website",
      url: siteConfig.siteUrl,
      siteName: siteConfig.siteName,
      locale: "en_GB",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: isStandalone
            ? "Brit Institute Career Chatbot"
            : "Brit Institute AI and data career training",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: {
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
    verification: siteConfig.variant === "main"
      ? {
          google: "hQzAGuOJ9VGAVEm86eQ9iwTOvWRvp0kA8JGz4u8S21U",
        }
      : undefined,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const siteConfig = getRequestSiteConfig(requestHeaders);
  const isStandalone = isStandaloneChatbotRequest(requestHeaders);

  return (
    <html lang="en-GB">
      <head>
        <GoogleTagManagerHead />
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaForSite(siteConfig)).replace(/</g, "\\u003c") }}
        />
        {!isStandalone && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrganizationSchema()).replace(/</g, "\\u003c") }}
          />
        )}
      </head>
      <body>
        <GoogleTagManagerNoScript />
        <MetaPixel />
        <SiteMeasurement />
        <GlobalUI />
        {isStandalone ? null : <SiteChrome />}
        {children}
        {isStandalone ? null : <CareerChatbotFloat />}
        {isStandalone ? null : <WhatsAppFloat />}
        {isStandalone ? null : <StickyBottomBar />}
      </body>
    </html>
  );
}
