import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Eye, ChevronRight, CheckCircle2, Briefcase,
  Clock, Layers, ArrowRight, Check, MonitorPlay, Zap,
  TrendingUp, Target, Users, BookOpen, Terminal, Sparkles, Quote, Database,
  Shield, Award, MapPin, Star, ChevronDown, Play
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BrochureDownloadButton from "./BrochureDownloadButton";
import CourseLeadForm from "./CourseLeadForm";
import CourseInvestmentTracker from "./CourseInvestmentTracker";
import PaymentCheckout from "./PaymentCheckout";
import AgenticAICurriculum from "./AgenticAICurriculum";
import DataAnalyticsCurriculum from "./DataAnalyticsCurriculum";
import DataScienceMLCurriculum from "./DataScienceMLCurriculum";
import GenerativeAICurriculum from "./GenerativeAICurriculum";
import { coursesData } from "./courseData";
import { BLOG_ARTICLES } from "@/app/blog/blogData";
import { breadcrumbSchema, buildCourseSchema, buildMetadata } from "@/lib/seo";
import { fetchCourseBySlug } from "@/lib/courses";
import type { CourseRecord } from "@/lib/courses";
import { dataAnalyticsFaqItems, dataAnalyticsFaqPageSchema } from "@/lib/faqData";

const BROCHURE_HREF = "/brochure/Brit_Institute_Brochure_A4_HD-2.pdf";
const BROCHURE_DOWNLOAD_NAME = "Brit_Institute_Data_Analytics_Brochure.pdf";
const COURSE_RELATED_BLOG_SLUGS: Record<string, string[]> = {
  "data-analytics": [
    "how-to-become-data-analyst-uk",
    "data-analyst-salary-uk-2026",
    "python-vs-sql-data-analysts",
  ],
  "data-science": [
    "how-to-start-career-data-science-uk",
    "data-scientist-salary-uk-2026",
    "data-analyst-vs-data-scientist",
  ],
  "ai-automation": [
    "how-to-become-ai-specialist-uk",
    "best-ai-tools-data-analysts-2026",
  ],
  "gen-ai": [
    "best-ai-tools-data-analysts-2026",
    "how-to-become-ai-specialist-uk",
    "python-vs-sql-data-analysts",
  ],
};

const TRUST_AVATARS = [
  { src: "/testimonials/emma-thompson.webp", alt: "Emma Thompson" },
  { src: "/testimonials/james-walker.webp", alt: "James Walker" },
  { src: "/testimonials/meera-iyer.jpg", alt: "Meera Iyer" },
];

const TOOL_LOGOS: Record<string, { icon: () => ReactNode; accent: string; fallback: string }> = {
  Excel: { icon: ExcelLogo, accent: "bg-emerald-50 border-emerald-100", fallback: "XL" },
  "Power BI": { icon: PowerBILogo, accent: "bg-amber-50 border-amber-100", fallback: "BI" },
  SQL: { icon: SqlLogo, accent: "bg-sky-50 border-sky-100", fallback: "SQL" },
  Python: { icon: PythonLogo, accent: "bg-blue-50 border-blue-100", fallback: "Py" },
  pandas: { icon: PandasLogo, accent: "bg-violet-50 border-violet-100", fallback: "pd" },
  "scikit-learn": { icon: ScikitLearnLogo, accent: "bg-orange-50 border-orange-100", fallback: "sk" },
  "OpenAI API": { icon: OpenAILogo, accent: "bg-slate-50 border-slate-100", fallback: "AI" },
  GitHub: { icon: GitHubLogo, accent: "bg-zinc-50 border-zinc-100", fallback: "GH" },
};

async function getCourse(slug: string): Promise<CourseRecord | null> {
  return fetchCourseBySlug(slug);
}

export async function generateStaticParams() {
  return Object.keys(coursesData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const richData = coursesData[slug];

  if (!richData) {
    return buildMetadata({
      title: "Courses",
      description: "Explore Brit Institute courses in AI and data.",
      path: "/courses",
    });
  }

  return buildMetadata({
    title: richData.seoTitle,
    description: richData.seoDescription,
    path: richData.canonicalPath,
    image: richData.ogImage,
    keywords:
      slug === "data-analytics"
        ? [
          "data analytics course UK",
          "data analyst course UK",
          "data analytics with generative AI",
          "Power BI course UK",
          "SQL course UK",
          "Brit Institute data analytics",
          "UK data analyst training",
        ]
        : [richData.seoTitle, "Brit Institute courses", "UK career training"],
  });
}

/* ─────────────────────────────────── SVG Icons ─────────────────────────────────── */

function StarIcon({ fill = "currentColor", size = 14 }: { fill?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={fill} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#1D4ED8" stroke="#1E40AF" strokeWidth="2" className="mt-1 flex-shrink-0">
      <polygon points="12 3 21 12 12 21 3 12 12 3"></polygon>
    </svg>
  );
}

function UKFlagIcon() {
  return (
    <svg viewBox="0 0 30 20" className="h-3.5 w-5" aria-hidden="true">
      <rect width="30" height="20" fill="#012169"/>
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="white" strokeWidth="3"/>
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="#C8102E" strokeWidth="2"/>
      <path d="M15,0 V20 M0,10 H30" stroke="white" strokeWidth="5"/>
      <path d="M15,0 V20 M0,10 H30" stroke="#C8102E" strokeWidth="3"/>
    </svg>
  );
}

function ExcelLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
      <rect x="12" y="5" width="15" height="22" rx="2" fill="#21A366" />
      <path d="M12 8h12v4H12zM12 14h12v4H12zM12 20h12v4H12z" fill="#fff" opacity=".45" />
      <path d="M4 9.5 14 7v18L4 22.5z" fill="#107C41" />
      <path d="m6.6 14 2.1 3-2.3 3h2.1l1.2-1.9 1.2 1.9h2.2l-2.3-3.1 2.1-2.9h-2l-1.1 1.7L8.7 14z" fill="#fff" />
    </svg>
  );
}

function PowerBILogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
      <rect x="5" y="15" width="5" height="11" rx="2" fill="#F2C811" />
      <rect x="13" y="10" width="5" height="16" rx="2" fill="#F6D64A" />
      <rect x="21" y="5" width="5" height="21" rx="2" fill="#E5A100" />
    </svg>
  );
}

function SqlLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
      <ellipse cx="16" cy="8" rx="10" ry="4" fill="#3B82F6" />
      <path d="M6 8v12c0 2.2 4.5 4 10 4s10-1.8 10-4V8" fill="#60A5FA" />
      <path d="M6 14c0 2.2 4.5 4 10 4s10-1.8 10-4M6 20c0 2.2 4.5 4 10 4s10-1.8 10-4" fill="none" stroke="#DBEAFE" strokeWidth="1.8" />
    </svg>
  );
}

function PythonLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
      <path d="M16 4c-5 0-7 1.4-7 4.2V12h8.4c1.8 0 3.2 1.4 3.2 3.2v2.4h3.2c2.8 0 4.2-2 4.2-6S26.6 5 23.8 5H17V4z" fill="#3776AB" />
      <path d="M16 28c5 0 7-1.4 7-4.2V20h-8.4a3.2 3.2 0 0 1-3.2-3.2v-2.4H8.2c-2.8 0-4.2 2-4.2 6S5.4 27 8.2 27H15v1z" fill="#FFD43B" />
      <circle cx="12" cy="8" r="1.2" fill="#fff" />
      <circle cx="20" cy="24" r="1.2" fill="#664E00" />
    </svg>
  );
}

function PandasLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
      <rect x="7" y="5" width="4" height="22" rx="1" fill="#150458" />
      <rect x="14" y="5" width="4" height="8" rx="1" fill="#E70488" />
      <rect x="14" y="17" width="4" height="10" rx="1" fill="#150458" />
      <rect x="21" y="5" width="4" height="22" rx="1" fill="#150458" />
    </svg>
  );
}

function ScikitLearnLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="5" fill="#F89939" />
      <circle cx="20" cy="20" r="6" fill="#3499CD" />
      <circle cx="22" cy="9" r="3" fill="#F89939" />
    </svg>
  );
}

function OpenAILogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
      <g fill="none" stroke="#111827" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 5.2a6 6 0 0 1 5.7 4.2 6 6 0 0 1 4.9 8.7 6 6 0 0 1-5.1 8.6 6 6 0 0 1-10.1.2 6 6 0 0 1-5.2-8.8 6 6 0 0 1 4.2-8.8A6 6 0 0 1 16 5.2z" />
        <path d="M21.7 9.4 16 12.7l-5.6-3.4M26.6 18.1 21 14.9v-5.5M21.5 26.7V20l5.1-1.9M11.4 26.9l5.6-3.3 4.5 3.1M6.2 18.1l5.8 3.3v5.5M10.4 9.3V16l-4.2 2.1" />
      </g>
    </svg>
  );
}

function GitHubLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#181717"
        d="M16 4.4A11.8 11.8 0 0 0 12.3 27c.6.1.8-.3.8-.6v-2.1c-3.4.7-4.1-1.4-4.1-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1.8 2.1 3.5 1.5.1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C21.5 8.8 22.5 9 22.5 9c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.2.9 2.4v2.7c0 .3.2.7.8.6A11.8 11.8 0 0 0 16 4.4z"
      />
    </svg>
  );
}

function ToolLogo({ tool }: { tool: string }) {
  const logo = TOOL_LOGOS[tool];
  const Icon = logo?.icon;
  if (Icon) {
    return (
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${logo.accent}`}>
        <Icon />
      </span>
    );
  }
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 text-xs font-bold text-slate-600">
      {logo?.fallback ?? tool.slice(0, 2).toUpperCase()}
    </span>
  );
}

function formatReviewDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function schemaPrice(value: string) {
  return value.replace(/[^\d.]/g, "");
}

function schemaDuration(value: string) {
  const match = value.match(/^(\d+)\s+months?$/i);
  return match ? `P${match[1]}M` : value;
}

function buildFallbackCourse(slug: string): CourseRecord | null {
  const richData = coursesData[slug];
  if (!richData) return null;
  return {
    slug,
    topBadge: richData.cohort,
    bottomLeftBadge: richData.programmeOverview.level,
    isPopular: slug === "data-analytics",
    title: richData.h1,
    desc: richData.subheadline,
    price: Number(schemaPrice(richData.pricing.price)) || 0,
    currency: "GBP",
    duration: richData.duration,
    projects: richData.projects.join(", "),
    gradient: "",
    iconName: "chart",
    order: 0,
  };
}

/* ─────────────────────────────────── Section Divider ─────────────────────────────────── */
function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="h-px flex-1 bg-slate-100" />
      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">{children}</span>
      <span className="h-px flex-1 bg-slate-100" />
    </div>
  );
}

/* ─────────────────────────────────── Page ─────────────────────────────────── */

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const richData = coursesData[resolvedParams.slug];
  const course = (await getCourse(resolvedParams.slug)) ?? buildFallbackCourse(resolvedParams.slug);

  if (!course) notFound();

  const coursePath = richData?.canonicalPath ?? `/courses/${resolvedParams.slug}`;
  const paymentAmount = course.price || Number(schemaPrice(richData?.pricing.price ?? "")) || 0;
  const paymentCurrency = course.currency ?? "GBP";
  const isDataAnalyticsCourse = resolvedParams.slug === "data-analytics";
  const isAgenticAICourse = resolvedParams.slug === "ai-automation";
  const isDataScienceCourse = resolvedParams.slug === "data-science";
  const isGenerativeAICourse = resolvedParams.slug === "gen-ai";
  const hasCourseReviews =
    Boolean(richData?.reviews) &&
    richData!.reviews.items.length > 0 &&
    richData!.reviews.items.every((r) => r.author && r.body && r.datePublished);
  const courseSchema = richData
    ? buildCourseSchema({
      name: richData.seoTitle,
      description: richData.seoDescription,
      path: coursePath,
      timeRequired: schemaDuration(richData.duration),
      teaches: richData.toolsCovered,
      price: schemaPrice(richData.pricing.price),
      currency: "GBP",
      courseMode: richData.programmeOverview.format,
      reviews: hasCourseReviews ? richData.reviews : null,
    })
    : null;
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: richData?.seoTitle ?? course.title, path: coursePath },
  ]);
  const aggregateRating = hasCourseReviews ? richData!.reviews.aggregate : null;
  const relatedBlogArticles = (COURSE_RELATED_BLOG_SLUGS[resolvedParams.slug] ?? [])
    .map((s) => BLOG_ARTICLES.find((a) => a.slug === s))
    .filter((a): a is (typeof BLOG_ARTICLES)[number] => Boolean(a));

  const points = (course.desc || "")
    .split(/[\n\u2022]+/)
    .map((p: string) => p.trim())
    .filter((p: string) => p.length > 5);

  return (
    <div className="min-h-screen font-sans" style={{ background: "linear-gradient(180deg, #F8F9FC 0%, #FFFFFF 100%)", color: "#0F172A" }}>
      {courseSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {isDataAnalyticsCourse && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataAnalyticsFaqPageSchema) }} />
      )}

      <Navbar hasBanner={false} />

      {/* ── Thin UK accent bar ── */}
      <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg, #012169 0%, #C8102E 50%, #012169 100%)" }} />

      <main className="pt-24 pb-24 max-w-[1240px] xl:max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-14">

        {/* ═══════════════════════════════ LEFT COLUMN ═══════════════════════════════ */}
        <div className="min-w-0">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[13px] text-slate-400 mb-10 font-medium">
            <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-40" />
            <Link href="/courses" className="hover:text-slate-700 transition-colors">Courses</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-40" />
            <span className="text-slate-700 font-semibold truncate">{course.title}</span>
          </nav>

          {/* ── HERO ── */}
          <header className="mb-14">

            {/* Status pills row */}
            <div className="flex flex-wrap gap-2 mb-6">
              {isDataAnalyticsCourse && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-blue-700">
                  <Sparkles className="h-3 w-3 text-amber-500" />
                  AI-Enhanced
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-slate-600">
                <UKFlagIcon />
                UK Accredited
              </span>
              {course.isPopular && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-amber-700">
                  <Award className="h-3 w-3" />
                  Most Popular
                </span>
              )}
            </div>

            <h1 className="text-[2.6rem] md:text-[3.2rem] font-black leading-[1.1] tracking-tight text-slate-900 mb-5" style={{ fontVariantNumeric: "tabular-nums" }}>
              {richData ? richData.h1 : course.title}
            </h1>

            {richData && (
              <p className="text-lg md:text-xl text-slate-500 mb-8 leading-relaxed max-w-2xl font-normal">
                {richData.subheadline}
              </p>
            )}

            {/* Cohort / Duration chips */}
            {richData && (
              <div className="flex flex-wrap gap-2.5 mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-emerald-500" />
                  Cohort: <span className="text-slate-900">{richData.cohort}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  <Layers className="w-3.5 h-3.5 text-blue-500" />
                  Duration: <span className="text-slate-900">{richData.duration}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  {richData.programmeOverview.format}
                </div>
              </div>
            )}

            {/* Social proof strip */}
            <div className="flex flex-wrap items-center gap-0 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden w-max max-w-full divide-x divide-slate-100">
              <div className="flex items-center gap-3 px-5 py-3.5">
                <div className="flex -space-x-2.5">
                  {TRUST_AVATARS.map((a) => (
                    <span key={a.src} className="relative block h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-slate-100 shadow-sm">
                      <Image src={a.src} alt={a.alt} fill sizes="32px" className="object-cover" />
                    </span>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-black text-slate-900">{richData ? richData.trustLayer.learnersTrained : "300K+"}</span>
                  <span className="text-slate-500 ml-1 font-medium">trained</span>
                </div>
              </div>
              {richData && (
                <>
                  <div className="px-5 py-3.5 text-sm hidden sm:block">
                    <span className="font-black text-emerald-600">{richData.trustLayer.placedOrTransitioned}</span>
                    <span className="text-slate-500 ml-1 font-medium">placed</span>
                  </div>
                  <div className="px-5 py-3.5 hidden sm:flex items-center gap-1.5 text-sm text-slate-600 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    {richData.trustLayer.toolsUsed}
                  </div>
                </>
              )}
            </div>

            {/* Aggregate rating banner */}
            {aggregateRating && (
              <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-5xl font-black text-slate-900 tabular-nums">{aggregateRating.ratingValue.toFixed(1)}</div>
                  <div>
                    <div className="flex items-center gap-0.5 mb-1">
                      {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} fill="#FBBF24" size={16} />)}
                    </div>
                    <p className="text-sm font-medium text-slate-500">
                      {aggregateRating.reviewCount} verified learner reviews
                    </p>
                  </div>
                </div>
                <div className="h-px md:h-10 md:w-px bg-slate-100" />
                <p className="text-sm leading-6 text-slate-500 max-w-lg">
                  All ratings are collected from enrolled learners post-completion and are independently verified. They are structured in course schema for search engines.
                </p>
              </div>
            )}
          </header>

          {/* ── FALLBACK CONTENT ── */}
          {!richData ? (
            <div>
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm mb-8">
                <div className="space-y-5">
                  {(points.length > 0 ? points : [`Gain comprehensive skills in ${course.title} and become industry ready with hands-on labs and capstone projects.`]).map((p: string, i: number) => (
                    <div key={i} className="flex gap-3.5 text-slate-700 leading-relaxed">
                      <DiamondIcon />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <BrochureDownloadButton brochureHref={BROCHURE_HREF} downloadName={BROCHURE_DOWNLOAD_NAME} courseTitle={course.title} variant="primary" />
                <button className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-900 font-bold text-[15px] shadow-sm hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" /> View Schedules
                </button>
              </div>
            </div>
          ) : (
            /* ── RICH CONTENT ── */
            <div className="space-y-20">

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pb-10 border-b border-slate-100">
                <PaymentCheckout courseSlug={resolvedParams.slug} courseTitle={course.title} amount={paymentAmount} currency={paymentCurrency} />
                <button className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-[15px] transition-all flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
                <BrochureDownloadButton brochureHref={BROCHURE_HREF} downloadName={BROCHURE_DOWNLOAD_NAME} courseTitle={course.title} />
              </div>

              {/* ── CAREER OUTCOMES ── */}
              <section>
                <SectionLabel>Career Outcomes</SectionLabel>
                <div className="flex items-end gap-3 mb-7">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4.5 h-4.5 text-white" />
                  </div>
                  <h2 className="text-[1.65rem] font-black text-slate-900 leading-tight">Where This Takes You</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {/* Target roles */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                      <Target className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Target Roles</p>
                    <ul className="space-y-2.5">
                      {richData.careerOutcomes.roles.map((r: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2.5 text-[13px] text-slate-700 font-semibold">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Salary */}
                  <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center mb-5">
                        <Briefcase className="w-4 h-4 text-blue-700" />
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-2">Average UK Salary</p>
                      <div className="text-[2.4rem] font-black text-slate-900 leading-none mb-2">{richData.careerOutcomes.salary}</div>
                    </div>
                    <p className="text-[12px] font-semibold text-slate-500">Annual, post-completion</p>
                  </div>

                  {/* Demand */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center mb-5">
                      <Users className="w-4 h-4 text-violet-600" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Industry Demand</p>
                    {Array.isArray(richData.careerOutcomes.demand) ? (
                      <ul className="grid grid-cols-2 gap-2">
                        {richData.careerOutcomes.demand.map((industry: string) => (
                          <li key={industry} className="flex items-start gap-2 text-[12px] font-semibold text-slate-700">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-500" />{industry}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[13px] text-slate-700 leading-relaxed font-medium">{richData.careerOutcomes.demand}</p>
                    )}
                  </div>
                </div>
              </section>

              {/* ── IS THIS FOR YOU ── */}
              <section>
                <SectionLabel>Eligibility</SectionLabel>
                <div className="flex items-end gap-3 mb-7">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center shrink-0">
                    <Shield className="w-4.5 h-4.5 text-white" />
                  </div>
                  <h2 className="text-[1.65rem] font-black text-slate-900 leading-tight">Is This Right For You?</h2>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
                  <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                    {richData.isForYou.map((item: string, idx: number) => (
                      <div key={idx} className="flex gap-4 items-start p-6">
                        <div className="shrink-0 w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center mt-0.5">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-[14px] text-slate-700 font-medium leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── CURRICULUM + OVERVIEW ── */}
              <section>
                <SectionLabel>Programme</SectionLabel>
                <div className="grid md:grid-cols-12 gap-6">

                  {/* Curriculum */}
                  <div className="md:col-span-7">
                    <div className="flex items-end gap-3 mb-7">
                      <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center shrink-0">
                        <BookOpen className="w-4.5 h-4.5 text-white" />
                      </div>
                      <h2 className="text-[1.65rem] font-black text-slate-900 leading-tight">Curriculum</h2>
                    </div>

                    {isDataAnalyticsCourse || isAgenticAICourse || isDataScienceCourse || isGenerativeAICourse ? (
                      <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-[#EFF6FF] to-white p-6">
                        <p className="text-[13px] font-semibold leading-7 text-slate-700 mb-5">
                          {isDataAnalyticsCourse ? "The full 26-week Data Analytics with AI curriculum is expanded below — phase-by-phase topics, weekly labs, AI integration, and portfolio outcomes."
                            : isAgenticAICourse ? "The full 16-week Agentic AI curriculum is expanded below — agent workflow design, phase topics, labs, and portfolio outcomes."
                              : isDataScienceCourse ? "The full 48-week Data Science, ML & GenAI curriculum is expanded below — ML projects, GenAI integration, and capstone outcomes."
                              : "The full 12-week Generative AI curriculum is expanded below — prompt systems, GenAI tools, workflow projects, and responsible AI outcomes."}
                        </p>
                        <a
                          href={isDataAnalyticsCourse ? "#detailed-data-analytics-curriculum" : isAgenticAICourse ? "#detailed-agentic-ai-curriculum" : isDataScienceCourse ? "#detailed-data-science-curriculum" : "#detailed-generative-ai-curriculum"}
                          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-[13px] font-bold text-white hover:bg-slate-800 transition-colors"
                        >
                          View full curriculum <ChevronDown className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    ) : (
                      <div className="space-y-2.5">
                        {richData.curriculum.map((item: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-4 bg-white rounded-xl border border-slate-100 px-4 py-3.5 shadow-sm hover:border-blue-200 transition-all group">
                            <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white flex items-center justify-center text-[11px] font-black shrink-0 transition-colors">
                              {idx + 1}
                            </span>
                            <span className="font-semibold text-[14px] text-slate-800">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Overview + Pricing */}
                  <div className="md:col-span-5 space-y-4">
                    {/* Overview card */}
                    <div className="rounded-2xl bg-slate-900 text-white p-6 shadow-lg">
                      <h3 className="text-[13px] font-black uppercase tracking-[0.18em] text-slate-400 mb-5 flex items-center gap-2">
                        <MonitorPlay className="w-4 h-4" /> Programme Overview
                      </h3>
                      <div className="space-y-0 divide-y divide-slate-800">
                        <div className="flex justify-between items-center py-3.5">
                          <span className="text-[13px] text-slate-400 font-medium">Duration</span>
                          <span className="text-[14px] font-bold">{richData.programmeOverview.duration}</span>
                        </div>
                        <div className="flex justify-between items-center py-3.5">
                          <span className="text-[13px] text-slate-400 font-medium">Format</span>
                          <span className="text-[14px] font-bold">{richData.programmeOverview.format}</span>
                        </div>
                        <div className="flex justify-between items-center py-3.5">
                          <span className="text-[13px] text-slate-400 font-medium">Level</span>
                          <span className="text-[14px] font-bold">{richData.programmeOverview.level}</span>
                        </div>
                      </div>
                    </div>

                    {/* Pricing card */}
                    <CourseInvestmentTracker courseTitle={course.title} courseSlug={resolvedParams.slug} price={paymentAmount || richData.pricing.price} currency={paymentCurrency}>
                      <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-700 mb-2 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" /> Course Investment
                      </h3>
                      <div className="text-[2.4rem] font-black text-slate-900 leading-none mb-3">
                        {course.price ? new Intl.NumberFormat("en-GB", { style: "currency", currency: course.currency ?? "GBP", maximumFractionDigits: 0 }).format(course.price) : richData.pricing.price}
                      </div>
                      {richData.pricing.emi && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-700 px-3 py-1">
                          <Check className="w-3 h-3" /> EMI Available
                        </span>
                      )}
                    </CourseInvestmentTracker>

                    <PaymentCheckout
                      courseSlug={resolvedParams.slug}
                      courseTitle={course.title}
                      amount={paymentAmount}
                      currency={paymentCurrency}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-[14px] font-bold text-white shadow-md hover:bg-blue-800 hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                </div>
              </section>

              {/* ── TOOLS COVERED ── */}
              <section>
                <SectionLabel>Tech Stack</SectionLabel>
                <div className="flex items-end gap-3 mb-7">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center shrink-0">
                    <Terminal className="w-4.5 h-4.5 text-white" />
                  </div>
                  <h2 className="text-[1.65rem] font-black text-slate-900 leading-tight">Tools & Technologies</h2>
                </div>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 xl:grid-cols-4">
                  {richData.toolsCovered.map((tool: string, idx: number) => (
                    <div key={idx} className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-3.5 py-3 shadow-sm hover:border-slate-300 hover:shadow-md transition-all">
                      <ToolLogo tool={tool} />
                      <span className="text-[13px] font-bold text-slate-900 leading-tight">{tool}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── DETAILED CURRICULA ── */}
              {isDataAnalyticsCourse && (
                <section id="detailed-data-analytics-curriculum" className="scroll-mt-28">
                  <DataAnalyticsCurriculum />
                </section>
              )}
              {isAgenticAICourse && (
                <section id="detailed-agentic-ai-curriculum" className="scroll-mt-28">
                  <AgenticAICurriculum />
                </section>
              )}
              {isDataScienceCourse && (
                <section id="detailed-data-science-curriculum" className="scroll-mt-28">
                  <DataScienceMLCurriculum />
                </section>
              )}
              {isGenerativeAICourse && (
                <section id="detailed-generative-ai-curriculum" className="scroll-mt-28">
                  <GenerativeAICurriculum />
                </section>
              )}

              {/* ── RELATED BLOG ── */}
              {relatedBlogArticles.length > 0 && (
                <section>
                  <SectionLabel>Career Guides</SectionLabel>
                  <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                    <h2 className="text-[1.65rem] font-black text-slate-900 mb-2">Read Before You Decide</h2>
                    <p className="text-[14px] text-slate-500 mb-7 max-w-xl leading-relaxed">
                      Brit Institute guides on UK roles, salaries, tools, and learning paths connected to this course.
                    </p>
                    <div className="grid gap-3 md:grid-cols-3">
                      {relatedBlogArticles.map((article) => (
                        <Link
                          key={article.slug}
                          href={article.canonicalPath ?? `/blog/${article.slug}`}
                          className="group rounded-xl border border-slate-100 bg-slate-50 p-5 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all"
                        >
                          <span
                            className="inline-flex rounded-md px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.12em] text-white mb-4"
                            style={{ backgroundColor: article.color }}
                          >
                            {article.category}
                          </span>
                          <h3 className="text-[14px] font-bold leading-snug text-slate-900 group-hover:text-blue-700 mb-3">
                            {article.title}
                          </h3>
                          <p className="text-[13px] leading-6 text-slate-500">{article.excerpt}</p>
                          <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-bold text-blue-700">
                            Read guide <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* ── PROJECTS + CAREER SUPPORT ── */}
              <section>
                <SectionLabel>Hands-On Learning</SectionLabel>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center mb-5">
                      <Layers className="w-4 h-4 text-violet-600" />
                    </div>
                    <h2 className="text-lg font-black text-slate-900 mb-5">Portfolio Projects</h2>
                    <ul className="space-y-4">
                      {richData.projects.map((proj: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3.5">
                          <span className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-[9px] font-black text-violet-700">{idx + 1}</span>
                          </span>
                          <span className="text-[14px] text-slate-700 font-medium leading-relaxed">{proj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                      <Briefcase className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h2 className="text-lg font-black text-slate-900 mb-5">Career Support</h2>
                    <ul className="space-y-4">
                      {richData.careerSupport.map((support: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3.5">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-emerald-700" />
                          </div>
                          <span className="text-[14px] text-slate-700 font-medium leading-relaxed">{support}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* ── REVIEWS ── */}
              {hasCourseReviews && (
                <section>
                  <SectionLabel>Social Proof</SectionLabel>
                  <div className="flex items-end gap-3 mb-7">
                    <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center shrink-0">
                      <Quote className="w-4.5 h-4.5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-[1.65rem] font-black text-slate-900 leading-tight">Learner Reviews</h2>
                      <p className="text-[13px] text-slate-500 font-medium mt-0.5">
                        {aggregateRating?.ratingValue.toFixed(1)} / 5 · {aggregateRating?.reviewCount} verified reviews
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    {richData.reviews.items.map((review, idx) => (
                      <article key={`${review.author}-${idx}`} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                        <div className="flex justify-between items-start gap-3 mb-5">
                          <div>
                            <h3 className="font-black text-[14px] text-slate-900">{review.author}</h3>
                            <p className="text-[11px] text-slate-400 font-medium mt-0.5">{formatReviewDate(review.datePublished)}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <div className="flex items-center gap-0.5 justify-end mb-1">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <StarIcon key={i} fill={i <= Math.round(review.ratingValue) ? "#FBBF24" : "#E2E8F0"} size={12} />
                              ))}
                            </div>
                            <span className="text-[12px] font-black text-slate-900">{review.ratingValue.toFixed(1)}</span>
                          </div>
                        </div>
                        <p className="text-[13px] leading-7 text-slate-600">{review.body}</p>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {/* ── FAQ ── */}
              {isDataAnalyticsCourse && (
                <section>
                  <SectionLabel>FAQ</SectionLabel>
                  <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                    <h2 className="text-[1.65rem] font-black text-slate-900 mb-2">Common Questions</h2>
                    <p className="text-[14px] text-slate-500 mb-8">About studying data analytics in the UK</p>
                    <div className="divide-y divide-slate-100">
                      {dataAnalyticsFaqItems.map((item) => (
                        <details key={item.question} className="group py-5">
                          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-[15px] font-bold text-slate-900">
                            <span>{item.question}</span>
                            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600 group-open:rotate-45 transition-transform mt-0.5 text-sm font-black">
                              +
                            </span>
                          </summary>
                          <p className="mt-4 text-[14px] leading-7 text-slate-600 whitespace-pre-line">{item.answer}</p>
                        </details>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* ── FINAL CTA ── */}
              <div className="relative rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)" }}>
                {/* Decorative lines */}
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, #fff 39px, #fff 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #fff 39px, #fff 40px)" }} />
                {/* Accent gradient */}
                <div className="absolute inset-x-0 -top-px h-px" style={{ background: "linear-gradient(90deg, transparent, #3B82F6 50%, transparent)" }} />
                <div className="relative z-10 px-10 py-14 md:px-16 md:py-18 text-center max-w-2xl mx-auto">
                  <p className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-400 mb-4">Begin Your Journey</p>
                  <h2 className="text-[2.4rem] md:text-[2.8rem] font-black text-white leading-[1.1] mb-5">
                    Ready to accelerate<br />your career?
                  </h2>
                  <p className="text-[15px] text-slate-400 mb-8 leading-relaxed">
                    Join hundreds of professionals who have transformed their careers with Brit Institute's industry-aligned programmes.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-[15px] hover:bg-slate-100 hover:-translate-y-0.5 transition-all shadow-lg flex items-center justify-center gap-2">
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/20 text-white font-bold text-[15px] hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                      Book a Consultation
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* ═══════════════════════════════ RIGHT COLUMN (STICKY) ═══════════════════════════════ */}
        <aside className="relative">
          <div className="lg:sticky lg:top-28 space-y-4">

            {/* Lead Form */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
              <CourseLeadForm courseTitle={course.title} />
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              {/* Trustpilot */}
              <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm flex flex-col items-center text-center">
                <div className="flex items-center gap-1 mb-2.5">
                  <svg viewBox="0 0 32 32" className="h-4 w-4" aria-hidden="true">
                    <path d="M16 2l3.6 7.3L28 10.7l-6 5.8 1.4 8.2L16 21l-7.4 3.9L10 16.5 4 10.7l8.4-1.4L16 2z" fill="#00B67A"/>
                  </svg>
                  <span className="text-[11px] font-black text-slate-700">Trustpilot</span>
                </div>
                <div className="flex gap-0.5 mb-1.5">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-4 h-4 bg-[#00B67A] flex items-center justify-center rounded-[3px]">
                      <StarIcon fill="white" size={10} />
                    </div>
                  ))}
                </div>
                <span className="text-[12px] font-bold text-slate-900">4.8 / 5</span>
              </div>

              {/* Google */}
              <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm flex flex-col items-center text-center">
                <div className="flex items-center gap-0.5 mb-2.5 font-black text-[13px] leading-none">
                  <span style={{ color: "#4285F4" }}>G</span>
                  <span style={{ color: "#EA4335" }}>o</span>
                  <span style={{ color: "#FBBC05" }}>o</span>
                  <span style={{ color: "#4285F4" }}>g</span>
                  <span style={{ color: "#34A853" }}>l</span>
                  <span style={{ color: "#EA4335" }}>e</span>
                </div>
                <div className="flex gap-0.5 mb-1.5">
                  {[1,2,3,4,5].map((i) => <StarIcon key={i} fill="#FBBC05" size={13} />)}
                </div>
                <span className="text-[12px] font-bold text-slate-900">4.9 / 5</span>
              </div>
            </div>

            {/* Trust micro-signals */}
            <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm space-y-3">
              {[
                { icon: Shield, label: "Secure Payment", sub: "256-bit SSL encryption" },
                { icon: Award, label: "UK Recognised", sub: "Industry-accredited programme" },
                { icon: Users, label: "300K+ Learners", sub: "Trained globally" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-slate-900">{label}</p>
                    <p className="text-[11px] text-slate-400">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </aside>

      </main>

      <Footer />
    </div>
  );
}