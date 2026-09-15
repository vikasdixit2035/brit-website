"use client";

import { Award, BookOpen, Briefcase, CheckCircle2, Lightbulb, Target, TrendingUp, Users } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { ThemeCTA, ThemeHero, ThemeLabel, ThemeShell } from "@/components/layout/ThinkificTheme";

const aboutProofBadges = [
  { title: "Real Projects", subtitle: "Portfolio Building", accent: "#f26722" },
  { title: "Career Support", subtitle: "UK Job Preparation", accent: "#2563eb" },
];

export default function AboutPage() {
  return (
    <ThemeShell>
      <ThemeHero
        eyebrow="About Brit Institute"
        title={<>A practical approach to careers in data, AI, and emerging technology.</>}
        text="Brit Institute is part of LearnifyOps, a company building technology, automation, and learning ecosystems. We focus on building real-world skills that help learners transition into high-demand roles across the UK and beyond."
      />

      <section className="bg-[#f7f3ea] px-5 py-20 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {[
            {
              icon: Lightbulb,
              eyebrow: "Our approach",
              title: "Most learning platforms focus on content. We focus on outcomes.",
              text: "Brit Institute was built around a simple idea: learning should lead to real career opportunities, not just certificates. Our programmes combine structured learning with practical application, so learners build skills that are directly relevant to industry roles.",
            },
            {
              icon: TrendingUp,
              eyebrow: "Our vision",
              title: "Preparing the next workforce for practical AI and data work.",
              text: "Demand for analytics, data science, automation, and AI skills continues to grow across industries. Our goal is to make those paths accessible through clear learning pathways, guided practice, and career-focused support.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.eyebrow} className="rounded-md border border-[#ded6c8] bg-white p-8 shadow-[0_18px_45px_rgba(36,26,31,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#24101f] text-[#f5c242]">
                  <Icon size={24} />
                </div>
                <ThemeLabel>{item.eyebrow}</ThemeLabel>
                <h2 className="mt-4 text-3xl font-semibold leading-tight">{item.title}</h2>
                <p className="mt-5 text-sm leading-7 text-[#6f665c] md:text-base">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#746d5c] px-5 py-20 text-white md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <ThemeLabel dark>What we focus on</ThemeLabel>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Bridging the gap between classroom theory and real-world execution.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BookOpen, text: "Industry-relevant curriculum aligned with UK job roles" },
              { icon: Briefcase, text: "Hands-on projects and portfolio development" },
              { icon: Users, text: "Structured learning designed for working professionals" },
              { icon: Target, text: "Career-focused training and interview preparation" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.text} className="rounded-md border border-white/12 bg-[#24101f] p-6">
                  <Icon className="text-[#f5c242]" size={26} />
                  <p className="mt-5 text-sm font-semibold leading-7 text-white/78">{item.text}</p>
                </article>
              );
            })}
          </div>

          <div className="mx-auto mt-12 grid max-w-[420px] grid-cols-1 gap-5 min-[420px]:grid-cols-2">
            {aboutProofBadges.map((badge) => (
              <article
                key={badge.subtitle}
                className="relative mx-auto flex aspect-[0.88] w-full max-w-[170px] bg-[#15110f] p-[2px] text-center text-[#111] shadow-[0_20px_48px_rgba(36,16,31,0.18)]"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 78%, 50% 100%, 0 78%)" }}
                aria-label={`${badge.title} ${badge.subtitle}`}
              >
                <div
                  className="relative flex min-h-0 w-full flex-col overflow-hidden bg-white"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 77%, 50% 98%, 0 77%)" }}
                >
                  <div className="flex h-9 items-center justify-between border-b-2 border-[#15110f] pl-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#15110f]">Brit 2026</span>
                    <span className="flex h-full w-8 items-center justify-center bg-[#ff492f] text-white">
                      <Award size={16} strokeWidth={2.5} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-center px-3 pb-8 pt-3">
                    <strong className="text-[19px] font-black leading-[1.05] tracking-tight sm:text-[21px]">
                      {badge.title}
                    </strong>
                    <span className="mt-2 text-[9px] font-black uppercase tracking-[0.22em] text-[#5d5148]">
                      {badge.subtitle}
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-10"
                    style={{
                      background: badge.accent,
                      clipPath: "polygon(0 30%, 50% 72%, 100% 30%, 100% 52%, 50% 94%, 0 52%)",
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f3ea] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-5xl rounded-md border border-[#ded6c8] bg-white p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <ThemeLabel>How it feels</ThemeLabel>
              <h2 className="mt-4 text-4xl font-semibold leading-tight">Clear, practical, and built around visible progress.</h2>
            </div>
            <div className="grid gap-3">
              {[
                "You know what to learn next.",
                "You build projects that prove your skill.",
                "You get support before interviews and applications.",
                "You leave with a clearer career story.",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md bg-[#f7f3ea] px-4 py-3 text-sm font-bold text-[#493f37]">
                  <CheckCircle2 size={18} className="text-[#7c9a4f]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ThemeCTA
        title="Explore the programmes behind our approach."
        text="Start building skills for high-growth careers in data, AI, and technology."
        primaryHref="/courses"
        primaryLabel="View Courses"
        secondaryHref="/contact"
        secondaryLabel="Talk to Advisor"
      />

      <Footer />
    </ThemeShell>
  );
}
