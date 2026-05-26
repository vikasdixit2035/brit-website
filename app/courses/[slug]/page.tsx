import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Eye, ChevronRight, CheckCircle2, Briefcase,
  Clock, Layers, ArrowRight, Check, MonitorPlay, Zap,
  TrendingUp, Target, Users, BookOpen, Terminal, Sparkles, Quote, Database,
  FileSpreadsheet, ChartColumn, CodeXml, Table2, BrainCircuit, Bot, GitBranch
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BrochureDownloadButton from "./BrochureDownloadButton";
import CourseLeadForm from "./CourseLeadForm";
import CourseInvestmentTracker from "./CourseInvestmentTracker";
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

const TOOL_LOGOS: Record<string, { icon: typeof Database; accent: string; fallback: string }> = {
  Excel: {
    icon: FileSpreadsheet,
    accent: "bg-emerald-50 text-emerald-700",
    fallback: "XL",
  },
  "Power BI": {
    icon: ChartColumn,
    accent: "bg-yellow-50 text-yellow-700",
    fallback: "BI",
  },
  SQL: {
    icon: Database,
    accent: "bg-sky-50 text-sky-700",
    fallback: "SQL",
  },
  Python: {
    icon: CodeXml,
    accent: "bg-blue-50 text-blue-700",
    fallback: "Py",
  },
  pandas: {
    icon: Table2,
    accent: "bg-violet-50 text-violet-700",
    fallback: "pd",
  },
  "scikit-learn": {
    icon: BrainCircuit,
    accent: "bg-orange-50 text-orange-700",
    fallback: "sk",
  },
  "OpenAI API": {
    icon: Bot,
    accent: "bg-gray-100 text-gray-800",
    fallback: "AI",
  },
  GitHub: {
    icon: GitBranch,
    accent: "bg-zinc-100 text-zinc-800",
    fallback: "GH",
  },
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

function StarIcon({ fill = "currentColor" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={fill} stroke={fill} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#10B981" stroke="#059669" strokeWidth="2" className="mt-1 flex-shrink-0">
      <polygon points="12 3 21 12 12 21 3 12 12 3"></polygon>
    </svg>
  );
}

function ToolLogo({ tool }: { tool: string }) {
  const logo = TOOL_LOGOS[tool];
  const Icon = logo?.icon;

  if (Icon) {
    return (
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${logo.accent}`}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
    );
  }

  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xs font-extrabold text-gray-700">
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

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const richData = coursesData[resolvedParams.slug];
  const course = (await getCourse(resolvedParams.slug)) ?? buildFallbackCourse(resolvedParams.slug);

  if (!course) {
    notFound();
  }

  const coursePath = richData?.canonicalPath ?? `/courses/${resolvedParams.slug}`;
  const isDataAnalyticsCourse = resolvedParams.slug === "data-analytics";
  const isAgenticAICourse = resolvedParams.slug === "ai-automation";
  const isDataScienceCourse = resolvedParams.slug === "data-science";
  const isGenerativeAICourse = resolvedParams.slug === "gen-ai";
  const hasCourseReviews =
    Boolean(richData?.reviews) &&
    richData!.reviews.items.length > 0 &&
    richData!.reviews.items.every((review) => review.author && review.body && review.datePublished);
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
    .map((blogSlug) => BLOG_ARTICLES.find((article) => article.slug === blogSlug))
    .filter((article): article is (typeof BLOG_ARTICLES)[number] => Boolean(article));

  // Fallback points for backward compatibility
  const points = (course.desc || "")
    .split(/[\n\u2022]+/)
    .map((p: string) => p.trim())
    .filter((p: string) => p.length > 5);

  return (
    <div className="bg-[#FAFBFF] min-h-screen font-sans text-gray-900 selection:bg-purple-200">
      {courseSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {isDataAnalyticsCourse && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dataAnalyticsFaqPageSchema) }}
        />
      )}
      <Navbar hasBanner={false} />

      <main className="pt-28 pb-20 max-w-[1200px] xl:max-w-[1380px] 2xl:max-w-[1580px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-14">

        {/* Left Column Content */}
        <div className="pt-2">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
            <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-300" />
            <Link href="/courses" className="hover:text-purple-600 transition-colors">Courses</Link>
            <ChevronRight className="w-4 h-4 text-gray-300" />
            <span className="text-purple-600 font-semibold">{course.title}</span>
          </nav>

          {/* 1. Hero Section */}
          <header className="mb-12">
            {isDataAnalyticsCourse && (
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1.5 text-sm font-extrabold text-purple-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-amber-500" aria-hidden="true" />
                AI enabled
              </div>
            )}

            <h1 className="text-4xl md:text-5xl leading-[1.2] font-extrabold text-gray-900 mb-5 tracking-tight">
              {richData ? richData.h1 : course.title}
            </h1>

            {richData && (
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
                {richData.subheadline}
              </p>
            )}

            {/* Badges */}
            {richData && (
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="bg-emerald-50 text-emerald-700 px-4 py-2 flex items-center gap-2 text-sm font-bold rounded-full border border-emerald-100 shadow-sm">
                  <Clock className="w-4 h-4" /> Cohort: {richData.cohort}
                </div>
                <div className="bg-indigo-50 text-indigo-700 px-4 py-2 flex items-center gap-2 text-sm font-bold rounded-full border border-indigo-100 shadow-sm">
                  <Layers className="w-4 h-4" /> Duration: {richData.duration}
                </div>
              </div>
            )}

            {/* Social Proof / Trust Layer */}
            <div className="flex flex-wrap md:flex-nowrap items-center gap-4 bg-white shadow-sm p-2 pr-6 rounded-full border border-gray-200/60 w-max max-w-full">
              <div className="flex -space-x-3 ml-2 flex-shrink-0">
                {TRUST_AVATARS.map((avatar) => (
                  <span key={avatar.src} className="relative block h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gray-100 shadow-sm">
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </span>
                ))}
              </div>
              <div className="text-sm font-bold text-gray-900 border-r border-gray-200 pr-4">
                {richData ? richData.trustLayer.learnersTrained : "300K+"} <span className="text-gray-500 font-medium">Trained</span>
              </div>
              {richData && (
                <>
                  <div className="text-sm font-bold text-emerald-600 border-r border-gray-200 pr-4 hidden sm:block">
                    {richData.trustLayer.placedOrTransitioned} <span className="text-gray-500 font-medium">Placed</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium hidden sm:flex items-center gap-1.5 truncate">
                    <Sparkles className="w-4 h-4 text-amber-500" /> {richData.trustLayer.toolsUsed}
                  </div>
                </>
              )}
            </div>

            {aggregateRating && (
              <div className="mt-6 rounded-2xl border border-amber-100 bg-gradient-to-r from-amber-50 via-white to-yellow-50 p-5 shadow-sm">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">Learner Reviews</p>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-4xl font-extrabold tracking-tight text-gray-900">
                        {aggregateRating.ratingValue.toFixed(1)}
                      </span>
                      <div>
                        <div className="flex items-center gap-1 text-amber-400">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <StarIcon key={i} fill="#FBBF24" />
                          ))}
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-600">
                          Based on {aggregateRating.reviewCount} first-party learner reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="max-w-md text-sm leading-6 text-gray-600">
                    These ratings come from learner feedback published on this page and are mirrored in the course structured data for search engines.
                  </p>
                </div>
              </div>
            )}
          </header>

          {!richData ? (
            /* Fallback Content */
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-8">
                <div className="flex flex-col gap-5">
                  {points.length > 0 ? points.map((point: string, i: number) => (
                    <div key={i} className="flex gap-4 text-base text-gray-700 leading-relaxed">
                      <DiamondIcon />
                      <span>{point}</span>
                    </div>
                  )) : (
                    <div className="flex gap-4 text-base text-gray-700 leading-relaxed">
                      <DiamondIcon />
                      <span>Gain comprehensive skills in {course.title} and become industry ready with hands-on labs and capstone projects.</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <BrochureDownloadButton
                  brochureHref={BROCHURE_HREF}
                  downloadName={BROCHURE_DOWNLOAD_NAME}
                  courseTitle={course.title}
                  variant="primary"
                />
                <button className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-900 rounded-xl font-bold text-[15px] transition-all flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" /> View Schedules
                </button>
              </div>
            </div>
          ) : (
            /* Rich Content Render */
            <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pb-4 border-b border-gray-100">
                <button className="w-full sm:w-auto px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-bold text-[16px] transition-all shadow-md flex items-center justify-center gap-2 hover:-translate-y-0.5">
                  Apply Now <ArrowRight className="w-5 h-5" />
                </button>
                <BrochureDownloadButton
                  brochureHref={BROCHURE_HREF}
                  downloadName={BROCHURE_DOWNLOAD_NAME}
                  courseTitle={course.title}
                />
              </div>

              {/* Career Outcomes - Elevated Cards */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Career Outcomes</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <Target className="w-6 h-6 text-emerald-500 mb-4" />
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-3">Target Roles</div>
                    <ul className="space-y-2">
                      {richData.careerOutcomes.roles.map((r: string, idx: number) => (
                        <li key={idx} className="text-gray-800 font-medium flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-b from-purple-50 to-white p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                    <Briefcase className="w-6 h-6 text-purple-600 mb-4" />
                    <div className="text-xs text-purple-600 font-bold uppercase tracking-wider mb-2">Average Salary (UK)</div>
                    <div className="text-3xl font-extrabold text-gray-900 mb-2">{richData.careerOutcomes.salary}</div>
                    <p className="text-sm text-gray-600 font-medium">Post-completion</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <Users className="w-6 h-6 text-blue-500 mb-4" />
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-3">Industry Demand</div>
                    {Array.isArray(richData.careerOutcomes.demand) ? (
                      <ul className="grid grid-cols-2 gap-2">
                        {richData.careerOutcomes.demand.map((industry: string) => (
                          <li key={industry} className="flex items-start gap-2 text-sm font-medium text-gray-700">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                            {industry}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700 text-sm leading-relaxed font-medium">
                        {richData.careerOutcomes.demand}
                      </p>
                    )}
                  </div>
                </div>
              </section>

              {/* Is This Course For You */}
              <section className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-50 rounded-full blur-3xl"></div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 relative z-10">Is This Right Fit For You?</h2>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 relative z-10">
                  {richData.isForYou.map((item: string, idx: number) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="bg-gray-50 group-hover:bg-purple-50 p-2 rounded-full transition-colors shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="text-gray-700 font-medium pt-1 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Programme Overview & Curriculum Split */}
              <section className="grid md:grid-cols-12 gap-8">

                {/* Curriculum Pathway */}
                <div className="md:col-span-7">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Curriculum</h2>
                  </div>

                  {isDataAnalyticsCourse || isAgenticAICourse || isDataScienceCourse || isGenerativeAICourse ? (
                    <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
                      <p className="text-sm font-semibold leading-7 text-blue-950">
                        {isDataAnalyticsCourse
                          ? "The full 26-week Data Analytics with GenAI curriculum is expanded below, including phase-by-phase topics, weekly labs, GenAI integration, and portfolio outcomes."
                          : isAgenticAICourse
                            ? "The full 16-week Agentic AI curriculum is expanded below, including phase-by-phase topics, weekly labs, agent workflow design, and portfolio outcomes."
                            : isDataScienceCourse
                              ? "The full 48-week Data Science, Machine Learning and GenAI curriculum is expanded below, including phase-by-phase topics, weekly labs, ML projects, GenAI integration, and capstone outcomes."
                              : "The full 12-week Generative AI curriculum is expanded below, including phase-by-phase topics, weekly labs, prompt systems, GenAI tools, workflow projects, and responsible AI outcomes."}
                      </p>
                      <a
                        href={
                          isDataAnalyticsCourse
                            ? "#detailed-data-analytics-curriculum"
                            : isAgenticAICourse
                              ? "#detailed-agentic-ai-curriculum"
                              : isDataScienceCourse
                                ? "#detailed-data-science-curriculum"
                                : "#detailed-generative-ai-curriculum"
                        }
                        className="mt-4 inline-flex rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-800"
                      >
                        View detailed curriculum
                      </a>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {richData.curriculum.map((item: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors">
                          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                            {idx + 1}
                          </div>
                          <span className="font-semibold text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Quick Stats Sidebar */}
                <div className="md:col-span-5 space-y-6">
                  <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <MonitorPlay className="w-5 h-5 text-purple-400" /> Overview
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                        <span className="text-gray-400">Duration</span>
                        <span className="font-bold">{richData.programmeOverview.duration}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                        <span className="text-gray-400">Format</span>
                        <span className="font-bold">{richData.programmeOverview.format}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Level</span>
                        <span className="font-bold">{richData.programmeOverview.level}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Box */}
                  <CourseInvestmentTracker
                    courseTitle={course.title}
                    courseSlug={resolvedParams.slug}
                    price={course.price || richData.pricing.price}
                    currency={course.currency ?? "GBP"}
                  >
                    <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4" /> Course Investment
                    </h3>
                    <div className="text-4xl font-extrabold text-gray-900 mb-2">
                      {course.price ? new Intl.NumberFormat("en-GB", {
                        style: "currency",
                        currency: course.currency ?? "GBP",
                        maximumFractionDigits: 0,
                      }).format(course.price) : richData.pricing.price}
                    </div>
                    {richData.pricing.emi && (
                      <span className="inline-block bg-white text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                        EMI Available
                      </span>
                    )}
                  </CourseInvestmentTracker>
                </div>
              </section>

              {/* Tools & Tech Stack */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Terminal className="w-5 h-5 text-gray-700" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Tools Covered</h2>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                  {richData.toolsCovered.map((tool: string, idx: number) => (
                    <div key={idx} className="flex min-h-16 items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-purple-300 hover:shadow-md">
                      <ToolLogo tool={tool} />
                      <span className="text-sm font-bold leading-tight text-gray-900">{tool}</span>
                    </div>
                  ))}
                </div>
              </section>

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

              {relatedBlogArticles.length > 0 && (
                <section className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
                  <div className="mb-6">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                      Career guides
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-gray-900">
                      Read before choosing this programme
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
                      These Brit Institute guides explain the UK roles, salaries, tools, and learning path connected to this course.
                    </p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    {relatedBlogArticles.map((article) => (
                      <Link
                        key={article.slug}
                        href={article.canonicalPath ?? `/blog/${article.slug}`}
                        className="group rounded-2xl border border-gray-100 bg-gray-50 p-5 text-left transition-all hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md"
                      >
                        <span
                          className="inline-flex rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white"
                          style={{ backgroundColor: article.color }}
                        >
                          {article.category}
                        </span>
                        <h3 className="mt-4 text-base font-bold leading-snug text-gray-900 group-hover:text-blue-700">
                          {article.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-gray-600">
                          {article.excerpt}
                        </p>
                        <span className="mt-4 inline-flex text-sm font-bold text-blue-700">
                          Read guide →
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Projects & Career Support */}
              <section className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Hands-On Projects</h2>
                  <ul className="space-y-4">
                    {richData.projects.map((proj: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center shrink-0 mt-0.5">
                          <Layers className="w-4 h-4 text-purple-600" />
                        </div>
                        <span className="text-gray-800 font-medium pt-1">{proj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Career Support</h2>
                  <ul className="space-y-4">
                    {richData.careerSupport.map((support: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="text-gray-800 font-medium pt-1">{support}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {hasCourseReviews && (
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                      <Quote className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Learner Reviews</h2>
                      <p className="text-sm text-gray-600 mt-1">
                        {aggregateRating?.ratingValue.toFixed(1)} / 5 average from {aggregateRating?.reviewCount} published learner reviews
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-3">
                    {richData.reviews.items.map((review, idx) => (
                      <article
                        key={`${review.author}-${idx}`}
                        className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <h3 className="font-bold text-gray-900">{review.author}</h3>
                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                              Published {formatReviewDate(review.datePublished)}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center justify-end gap-1 text-amber-400">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <StarIcon
                                  key={i}
                                  fill={i <= Math.round(review.ratingValue) ? "#FBBF24" : "#E5E7EB"}
                                />
                              ))}
                            </div>
                            <p className="mt-1 text-sm font-bold text-gray-900">
                              {review.ratingValue.toFixed(1)} / 5
                            </p>
                          </div>
                        </div>
                        <p className="mt-5 text-sm leading-7 text-gray-700">
                          {review.body}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {isDataAnalyticsCourse && (
                <section className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
                  <div className="mb-7">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                      Data Analytics Course UK FAQ
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-gray-900">
                      Common questions about studying data analytics in the UK
                    </h2>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {dataAnalyticsFaqItems.map((item) => (
                      <details key={item.question} className="group py-5">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-bold text-gray-900">
                          <span>{item.question}</span>
                          <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700 transition-transform group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <p className="mt-3 whitespace-pre-line text-sm leading-7 text-gray-700">
                          {item.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* Final CTA Area */}
              <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 rounded-3xl p-10 md:p-14 text-center shadow-2xl overflow-hidden mt-8">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                  <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                </div>

                <div className="relative z-10 max-w-2xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                    Ready to transform your career?
                  </h2>
                  <p className="text-purple-200 text-lg mb-8">
                    Join hundreds of professionals who have accelerated their journey with us.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 hover:bg-gray-50 rounded-xl font-bold text-[16px] transition-transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2">
                      Apply Now <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white rounded-xl font-bold text-[16px] transition-colors flex items-center justify-center gap-2">
                      Book Consultation
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Right Column Form (Sticky) */}
        <aside className="relative">
          <div className="lg:sticky lg:top-32 space-y-6">

            {/* The Form Component */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <CourseLeadForm courseTitle={course.title} />
            </div>

            {/* Quick Reviews / Trust badges under form */}
            <div className="grid grid-cols-2 gap-4">
              {/* Trustpilot */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-1 mb-2">
                  <StarIcon fill="#00b67a" />
                  <span className="font-extrabold text-sm text-[#111827]">Trustpilot</span>
                </div>
                <div className="flex gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-4 h-4 bg-[#00b67a] text-white flex items-center justify-center rounded-sm">
                      <StarIcon fill="white" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-900 mt-1">4.8/5 Rating</span>
              </div>

              {/* Google */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-0.5 mb-2 font-bold text-sm">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </div>
                <div className="flex gap-0.5 text-[#FBBC05] mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} fill="#FBBC05" />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-900 mt-1">4.9/5 Rating</span>
              </div>
            </div>

          </div>
        </aside>

      </main>

      <Footer />
    </div>
  );
}
