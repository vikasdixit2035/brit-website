import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ChatbotFloat from "@/components/layout/ChatbotFloat";
import StickyBottomBar from "@/components/layout/StickyBottomBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brit Institute — Break Into High-Paying AI & Data Careers in the UK",
  description:
    "Industry-led Agentic AI & Data Analytics programs with structured training, real-world projects, and dedicated placement support. Average salary outcomes: £35,000 – £70,000.",
  icons: {
    icon: "/britinstitute.png",
    apple: "/britinstitute.png",
  },
  keywords: [
    "AI courses UK",
    "Data Analytics training",
    "Agentic AI program",
    "UK tech careers",
    "AI career transition",
    "data analyst course",
  ],
  openGraph: {
    title: "Brit Institute — Break Into High-Paying AI & Data Careers in the UK",
    description:
      "Industry-led programs designed to help you transition into Agentic AI & Data Analytics roles.",
    type: "website",
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
