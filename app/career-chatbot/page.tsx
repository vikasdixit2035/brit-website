import type { Metadata } from "next";
import { headers } from "next/headers";
import CareerChatbotFloat from "@/components/layout/CareerChatbotFloat";
import { buildMetadata } from "@/lib/seo";
import { getRequestSiteConfig } from "@/lib/siteConfig";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const siteConfig = getRequestSiteConfig(requestHeaders);
  const path = siteConfig.variant === "chatbot" ? "/" : "/career-chatbot";

  return buildMetadata(
    {
      title: "Free AI & Data Career Assessment",
      description:
        "Chat with Brit Institute's digital career counsellor to get a personalised roadmap, role fit, and salary direction for AI and data careers.",
      path,
      noindex: true,
      follow: true,
      keywords: [
        "career chatbot",
        "AI career assessment",
        "data career assessment",
        "Brit Institute chatbot",
      ],
    },
    siteConfig,
  );
}

export default function CareerChatbotPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#dbe8ff_0%,#f5f8ff_38%,#f7f9fc_100%)] px-4 py-8 md:px-6 md:py-10">
      <div className="mx-auto flex w-full max-w-3xl justify-center">
        <section className="w-full rounded-[36px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.64)_0%,rgba(228,237,255,0.86)_100%)] p-3 shadow-[0_36px_100px_rgba(36,58,108,0.16)] md:p-4">
          <CareerChatbotFloat mode="standalone" />
        </section>
      </div>
    </main>
  );
}
