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
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <section className="rounded-[32px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(242,246,255,0.94)_100%)] p-7 shadow-[0_28px_80px_rgba(32,58,115,0.12)] md:p-9">
          <span className="inline-flex rounded-full border border-[#C8D8FF] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3560d7]">
            Free Career Snapshot
          </span>
          <h1 className="mt-5 max-w-[12ch] text-[clamp(2.6rem,5vw,4.6rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-[#18284a]">
            Find your next AI or data role faster.
          </h1>
          <p className="mt-5 max-w-[58ch] text-[17px] leading-8 text-[#4d5d7d]">
            This guided chatbot turns your background into a practical career snapshot: shortlist probability,
            salary range, strongest-fit roles, and the gaps worth fixing next.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              "8-step guided assessment",
              "Role + salary direction",
              "Lead capture stays on your current backend",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-[#dbe5fb] bg-white px-4 py-4 text-sm font-medium text-[#30415f] shadow-[0_10px_24px_rgba(37,61,117,0.05)]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[36px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.64)_0%,rgba(228,237,255,0.86)_100%)] p-3 shadow-[0_36px_100px_rgba(36,58,108,0.16)] md:p-4">
          <CareerChatbotFloat mode="standalone" />
        </section>
      </div>
    </main>
  );
}

