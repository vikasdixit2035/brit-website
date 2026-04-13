import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ChatbotFloat from "@/components/layout/ChatbotFloat";
import StickyBottomBar from "@/components/layout/StickyBottomBar";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Brit Institute | AI and Data Career Training in the UK",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Brit Institute offers practical AI and data career training in the UK with structured programmes, real projects, and dedicated career support.",
  applicationName: SITE_NAME,
  icons: {
    icon: "/britinstitute.png",
    apple: "/britinstitute.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "AI courses UK",
    "data analytics course UK",
    "agentic AI course UK",
    "AI and data careers UK",
    "UK tech careers",
    "data analyst course",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Brit Institute | AI and Data Career Training in the UK",
    description:
      "Industry-led programmes designed to help learners transition into AI and data roles in the UK.",
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_GB",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Brit Institute AI and data career training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brit Institute | AI and Data Career Training in the UK",
    description:
      "Practical AI and data programmes for UK career transitions, with projects and career support.",
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
};

import GlobalUI from "@/components/layout/GlobalUI";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <GlobalUI />
        {children}
        <WhatsAppFloat />
        <ChatbotFloat />
        <StickyBottomBar />
      </body>
    </html>
  );
}
