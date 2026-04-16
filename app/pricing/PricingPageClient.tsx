"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock3,
  CreditCard,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import TopBanner from "@/components/layout/TopBanner";
import Footer from "@/components/layout/Footer";
import { SITE_EMAIL, SITE_PHONE_UK } from "@/lib/site";
import type { CourseRecord } from "@/lib/courses";

const COURSE_STYLES: Record<string, {
  eyebrow: string;
  badge: string;
  accent: string;
  accentSoft: string;
  gradient: string;
  comparisonLabel: string;
}> = {
  "data-analytics": {
    eyebrow: "In Demand",
    badge: "Most Popular",
    accent: "#2563EB",
    accentSoft: "rgba(37,99,235,0.12)",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    comparisonLabel: "Best for fast entry into analyst roles",
  },
  "data-science": {
    eyebrow: "Advanced",
    badge: "Career Track",
    accent: "#111827",
    accentSoft: "rgba(17,24,39,0.10)",
    gradient: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
    comparisonLabel: "Best for machine learning and predictive modelling",
  },
  "ai-automation": {
    eyebrow: "Featured",
    badge: "Future Ready",
    accent: "#7E22CE",
    accentSoft: "rgba(126,34,206,0.12)",
    gradient: "linear-gradient(135deg, #4C1D95 0%, #A21CAF 100%)",
    comparisonLabel: "Best for AI tooling and workflow automation",
  },
  "gen-ai": {
    eyebrow: "Foundation",
    badge: "Fast Start",
    accent: "#EA580C",
    accentSoft: "rgba(234,88,12,0.12)",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #EA580C 100%)",
    comparisonLabel: "Best for practical generative AI workflows",
  },
} as const;

const DEFAULT_STYLE = {
  eyebrow: "Programme",
  badge: "Career Track",
  accent: "#2563EB",
  accentSoft: "rgba(37,99,235,0.12)",
  gradient: "linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)",
  comparisonLabel: "Practical programme for job-ready skill building",
};

function formatPrice(price: number, currency = "GBP") {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

function getGradientFromTailwindTokens(gradient: string, fallback: string) {
  if (gradient.includes("from-blue-500")) return "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)";
  if (gradient.includes("from-teal-400")) return "linear-gradient(135deg, #2DD4BF 0%, #0F766E 100%)";
  if (gradient.includes("from-purple-500")) return "linear-gradient(135deg, #7C3AED 0%, #A21CAF 100%)";
  if (gradient.includes("from-amber-400")) return "linear-gradient(135deg, #FBBF24 0%, #F97316 100%)";
  return fallback;
}

function buildPricingCards(courses: CourseRecord[]) {
  return courses.map((course) => {
    const style = COURSE_STYLES[course.slug] ?? DEFAULT_STYLE;

    return {
      slug: course.slug,
      title: course.bottomLeftBadge,
      fullTitle: course.title,
      description: course.desc,
      duration: course.duration,
      price: formatPrice(course.price, course.currency),
      rawPrice: course.price,
      projects: course.projects,
      topBadge: course.topBadge,
      isPopular: course.isPopular,
      canonicalPath: `/courses/${course.slug}`,
      gradientCss: getGradientFromTailwindTokens(course.gradient, style.gradient),
      ...style,
    };
  });
}

type PricingPageClientProps = {
  courses: CourseRecord[];
};

export default function PricingPageClient({ courses }: PricingPageClientProps) {
  const [banner, setBanner] = useState(true);
  const pricingCards = buildPricingCards(courses);
  const comparisonRows = [
    { label: "Duration", getValue: (course: CourseRecord) => course.duration },
    { label: "Price", getValue: (course: CourseRecord) => formatPrice(course.price, course.currency) },
    { label: "Projects focus", getValue: (course: CourseRecord) => course.projects },
    { label: "Category", getValue: (course: CourseRecord) => course.bottomLeftBadge },
    { label: "Featured badge", getValue: (course: CourseRecord) => course.topBadge },
  ];

  return (
    <main className="min-h-screen bg-[#f7f8fc] text-slate-900">
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />

      <style>{`
        .pricing-hero {
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #05070d 0%, #0b1328 58%, #111827 100%);
        }
        .pricing-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 55% 45% at 15% 82%, rgba(37,99,235,.22), transparent 60%),
            radial-gradient(ellipse 42% 42% at 82% 22%, rgba(168,85,247,.18), transparent 58%),
            radial-gradient(ellipse 50% 30% at 50% 0%, rgba(228,190,59,.10), transparent 65%);
          pointer-events: none;
        }
        .pricing-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle 2px at 12% 24%, rgba(255,255,255,.14) 0%, transparent 100%),
            radial-gradient(circle 2px at 74% 18%, rgba(255,255,255,.10) 0%, transparent 100%),
            radial-gradient(circle 1.5px at 85% 70%, rgba(255,255,255,.08) 0%, transparent 100%),
            radial-gradient(circle 2px at 38% 78%, rgba(255,255,255,.08) 0%, transparent 100%);
          pointer-events: none;
        }
        .pricing-ribbon {
          position: absolute;
          left: -44px;
          top: 28px;
          transform: rotate(-90deg);
          transform-origin: left top;
        }
      `}</style>

      <section
        className="pricing-hero"
        style={{ paddingTop: banner ? "164px" : "124px", paddingBottom: "104px" }}
      >
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[58px]">
            Compare pricing across <span className="text-[#E4BE3B]">all Brit Institute courses</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
            Choose the programme that fits your career stage, learning goals, and timeline. Every option is built around practical outcomes, portfolio work, and job-relevant skills.
          </p>
          <div className="mx-auto mt-8 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#2563EB] to-[#E4BE3B]" />
        </div>
      </section>

      <section className="-mt-16 px-3 pb-24 sm:px-4 md:px-4 lg:px-6">
        <div className="mx-auto grid max-w-[100rem] gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-4 md:gap-4">
          {pricingCards.map((card, index) => (
            <article
              key={card.slug}
              className="relative flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_70px_rgba(15,23,42,0.08)]"
            >
              {card.isPopular && index === 0 ? (
                <div className="pricing-ribbon rounded-b-md bg-[#16A34A] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white shadow-lg">
                  Most Popular
                </div>
              ) : null}

              <div className="p-4">
                <div
                  className="rounded-[26px] px-7 pb-7 pt-6 text-white"
                  style={{ background: card.gradientCss }}
                >
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-white/90">
                      {card.topBadge || card.eyebrow}
                    </span>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-700">
                      {card.badge}
                    </span>
                  </div>

                  <div className="mb-8 flex h-24 items-center justify-center">
                    <Sparkles className="h-12 w-12 text-white/90" strokeWidth={1.8} />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-xl bg-black/20 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/85">
                      {card.title}
                    </span>
                    <span className="rounded-xl bg-[#FACC15] px-3 py-2 text-xs font-bold text-slate-900">
                      <Star className="mr-1 inline h-3.5 w-3.5" /> Job-focused
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col px-8 pb-8">
                <div className="flex-1">
                  <h2 className="text-[2rem] font-extrabold tracking-tight text-slate-900">
                    {card.price}
                  </h2>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    One-time programme fee
                  </p>

                  <div className="mt-4 space-y-4 md:min-h-[190px]">
                    <p className="text-2xl font-bold leading-tight text-slate-900">
                      {card.fullTitle}
                    </p>
                    <p className="text-base leading-7 text-slate-600">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-3 rounded-2xl bg-slate-50 p-5 text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-blue-600" />
                      <span>{card.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-blue-600" />
                      <span>One-time programme fee</span>
                    </div>
                    <div className="text-slate-600">
                      {card.comparisonLabel}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 min-[480px]:flex-row">
                    <Link
                      href={card.canonicalPath}
                      className="inline-flex flex-1 items-center justify-center rounded-2xl bg-[#2563EB] px-5 py-3.5 text-center text-sm font-bold text-white transition hover:bg-[#1D4ED8]"
                    >
                      View Details
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex flex-1 items-center justify-center rounded-2xl border border-slate-300 px-5 py-3.5 text-center text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                    What&apos;s included
                  </p>
                  <ul className="mt-4 space-y-3">
                    {[card.description, `${card.duration} guided programme`, `${card.projects} focus`, "Admissions and learner support"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                        <span
                          className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full"
                          style={{ backgroundColor: card.accentSoft, color: card.accent }}
                        >
                          <Check className="h-4 w-4" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                    Course snapshot
                  </p>
                  <p className="mt-3 text-base font-semibold text-slate-900">
                    {card.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Investment: <span className="font-semibold text-slate-900">{card.price}</span>
                  </p>
                  <p className="mt-3 text-sm text-slate-600">
                    Focus area: {card.projects}.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[90rem] rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.06)] md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Quick Comparison</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              A tabular view of the core pricing differences
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              This keeps the page easy to scan while still showing the most important differences between your learning paths.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0 overflow-hidden rounded-3xl">
              <thead>
                <tr>
                  <th className="border-b border-slate-200 bg-slate-50 px-5 py-4 text-left text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                    Compare
                  </th>
                  {pricingCards.map((card) => (
                    <th
                      key={card.slug}
                      className="border-b border-slate-200 px-5 py-4 text-left text-sm font-bold uppercase tracking-[0.16em] text-white"
                      style={{ background: card.gradientCss }}
                    >
                      {card.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, rowIndex) => (
                  <tr key={row.label} className={rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                    <td className="border-b border-slate-200 px-5 py-4 text-sm font-semibold text-slate-900">
                      {row.label}
                    </td>
                    {courses.map((course) => (
                      <td key={`${row.label}-${course.slug}`} className="border-b border-slate-200 px-5 py-4 text-sm text-slate-600">
                        {row.getValue(course)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-8 py-10 text-white shadow-2xl md:grid-cols-[1.4fr_1fr] md:px-12 md:py-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E4BE3B]">
              Need help choosing?
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              Speak with our team about the right course and payment option
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              If you&apos;re comparing career outcomes, unsure which programme fits your background, or want to discuss payment flexibility, we can help you choose the right route.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="space-y-4">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-[#2563EB] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#1D4ED8]"
              >
                Talk to Admissions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href={`tel:${SITE_PHONE_UK}`}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-5 py-3.5 text-sm font-semibold text-white/85 transition hover:bg-white/5"
              >
                <Phone className="h-4 w-4" /> {SITE_PHONE_UK}
              </a>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="block text-center text-sm text-white/65 underline-offset-4 hover:text-white hover:underline"
              >
                {SITE_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
