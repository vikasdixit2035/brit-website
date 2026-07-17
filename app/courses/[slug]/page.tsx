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
    "python-vs-sql-data-analysts-learn-first",
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
    "python-vs-sql-data-analysts-learn-first",
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
  Python: { icon: PythonLogo, accent: "bg-orange-50 border-orange-100", fallback: "Py" },
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#D95700" stroke="#C45118" strokeWidth="2" className="mt-1 flex-shrink-0">
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

const dataAnalyticsHeroBadges = [
  "24 Weekend Program",
  "Live Mentor-Led Classes",
  "10+ Portfolio Projects",
  "Career Support Included",
];

const dataAnalyticsTrustStrip = [
  {
    value: "4.9/5",
    label: "Learner Rating",
    detail: "Verified reviews from learners who completed practical analytics projects.",
  },
  {
    value: "24",
    label: "Structured Weekends",
    detail: "A clear weekly rhythm from foundation skills to portfolio presentation.",
  },
  {
    value: "10+",
    label: "Portfolio Projects",
    detail: "Dashboards, SQL cases, Python automation, AI workflows, and a capstone.",
  },
  {
    value: "Live",
    label: "Mentor Sessions",
    detail: "Weekend teaching, project feedback, and career checkpoints with tutors.",
  },
];

const dataAnalyticsOutcomes = [
  {
    icon: Database,
    title: "Clean messy business data",
    result: "Prepare raw spreadsheets and exports so teams can trust the analysis.",
  },
  {
    icon: TrendingUp,
    title: "Build Excel KPI dashboards",
    result: "Turn operational data into clear trackers for performance decisions.",
  },
  {
    icon: Terminal,
    title: "Write SQL analysis queries",
    result: "Answer business questions with joins, filters, grouping, and validation.",
  },
  {
    icon: MonitorPlay,
    title: "Create Power BI reports",
    result: "Design interactive reports with meaningful KPIs and executive summaries.",
  },
  {
    icon: Zap,
    title: "Automate analysis with Python",
    result: "Use notebooks and scripts to clean files, analyse data, and save time.",
  },
  {
    icon: Sparkles,
    title: "Use GenAI in analyst workflows",
    result: "Apply AI for summaries, QA, prompts, and documented analyst support.",
  },
];

const dataAnalyticsNotForYou = [
  "You want only recorded videos",
  "You are looking for an advanced research-heavy data science degree",
  "You do not want to complete assignments or portfolio projects",
];

const dataAnalyticsToolGroups = [
  { label: "Data Handling", tools: ["Excel", "Google Sheets", "Power Query"] },
  { label: "Databases", tools: ["SQL", "PostgreSQL / MySQL"] },
  { label: "Dashboards", tools: ["Power BI", "Pivot Charts", "KPI Reports"] },
  { label: "Programming", tools: ["Python", "pandas", "Jupyter"] },
  { label: "AI Workflows", tools: ["ChatGPT", "Prompting", "AI-assisted analysis", "Automation"] },
];

const dataAnalyticsRoadmap = [
  {
    phase: "Phase 1",
    title: "Data Foundation & Visualization",
    weeks: "Weeks 1-4",
    learn: "Excel formulas, data cleaning, PivotTables, dashboard basics",
    tools: "Excel, Power Query, Pivot Charts",
    build: "Operations KPI Tracker and first dashboard file",
    output: "Cleaned dataset, KPI dashboard, and insight summary",
  },
  {
    phase: "Phase 2",
    title: "Business Intelligence & SQL",
    weeks: "Weeks 5-10",
    learn: "Data modelling, joins, filtering, grouping, KPI logic",
    tools: "SQL, Power BI, Power Query",
    build: "Sales dashboard, SQL case study, management report",
    output: "Decision-ready dashboard and documented SQL analysis",
  },
  {
    phase: "Phase 3",
    title: "Python Analytics",
    weeks: "Weeks 11-16",
    learn: "Python basics, pandas, notebooks, reusable analysis scripts",
    tools: "Python, pandas, Jupyter",
    build: "Python data-cleaning automation and EDA notebook",
    output: "A reusable automation workflow for your portfolio",
  },
  {
    phase: "Phase 4",
    title: "GenAI, ML & Responsible AI",
    weeks: "Weeks 17-20",
    learn: "Prompting, structured AI outputs, ML basics, model limits",
    tools: "OpenAI API, scikit-learn, GitHub",
    build: "GenAI analyst workflow and ML prototype",
    output: "AI-use declaration, model card, and verified insight memo",
  },
  {
    phase: "Phase 5",
    title: "Career & Portfolio Sprint",
    weeks: "Weeks 21-24",
    learn: "Project storytelling, CV evidence, interview walkthroughs",
    tools: "LinkedIn, GitHub, portfolio templates",
    build: "Final capstone and hiring-ready project pack",
    output: "Portfolio, interview stories, and clearer job-search plan",
  },
];

const dataAnalyticsPortfolioProjects = [
  ["Operations KPI Dashboard", "Excel, Pivot Tables, Charts", "A management dashboard tracking performance, trends and issues.", "Dashboard + insight summary", "Beginner"],
  ["HR Workforce Analytics", "Excel, Power BI", "A people analytics view covering headcount, attrition, and workforce patterns.", "Workforce report + recommendations", "Dashboard"],
  ["Sales Performance Dashboard", "Power BI, DAX", "An executive dashboard for revenue, product, and regional performance.", "Interactive report + KPI notes", "Power BI"],
  ["SQL Business Case Study", "SQL", "A documented query pack that answers realistic commercial questions.", "SQL scripts + business answer pack", "SQL"],
  ["Power BI Executive Dashboard", "Power Query, DAX", "A polished report with KPIs, filters, and stakeholder-ready commentary.", "Published dashboard + walkthrough", "Portfolio-ready"],
  ["Python Data Cleaning Automation", "Python, pandas", "A repeatable workflow that turns raw files into analysis-ready outputs.", "Notebook + reusable script", "Python"],
  ["Customer Segmentation Analysis", "Python, statistics", "A business-focused segmentation exercise with explained findings.", "Segment profile + action plan", "Analysis"],
  ["GenAI Analyst Workflow", "Prompting, OpenAI API", "A reviewed AI workflow for summaries, QA, and structured insight generation.", "AI workflow + validation log", "AI"],
  ["Machine Learning Prototype", "scikit-learn", "A simple prediction or segmentation prototype with clear model limits.", "Model card + findings memo", "ML"],
  ["Final Capstone Project", "Full stack", "A complete analyst story combining data, dashboard, insights, and presentation.", "Capstone deck + portfolio case study", "Capstone"],
];

const dataAnalyticsWeeklyExperience = [
  ["Saturday", "Live concept class + demo"],
  ["Sunday", "Project implementation + doubt solving"],
  ["Weekdays", "Practice tasks + mentor feedback"],
  ["End of Month", "Portfolio review + career checkpoint"],
];

const dataAnalyticsCareerSupport = [
  "CV Improvement",
  "LinkedIn Profile Review",
  "Portfolio Building",
  "Mock Interviews",
  "Project Walkthrough Practice",
  "Job Search Guidance",
  "AI Use Declaration",
];

const dataAnalyticsFaqGroups = [
  {
    title: "Eligibility",
    questions: ["Can beginners join?", "Do I need coding experience?", "Is this suitable for career switchers?"],
  },
  {
    title: "Course Format",
    questions: ["Are classes live?", "Are recordings available?", "How many hours per week are required?"],
  },
  {
    title: "Projects",
    questions: ["Will I build portfolio projects?", "Are projects reviewed?", "Is there a final capstone?"],
  },
  {
    title: "Career Support",
    questions: ["Do you help with CVs?", "Will I practise interviews?", "Do I get portfolio guidance?"],
  },
];

const dataAnalyticsSkillStack = [
  "Excel",
  "Power BI",
  "SQL",
  "Python",
  "ChatGPT",
  "Portfolio Projects",
  "Career Guidance",
];

const dataAnalyticsPremiumOutcomes = [
  {
    title: "Live, Guided Classes",
    text: "Learn through weekend live sessions, demos and practical implementation.",
    icon: MonitorPlay,
  },
  {
    title: "Mentor Support",
    text: "Get structured guidance, doubt solving and feedback on your work.",
    icon: Users,
  },
  {
    title: "Career Readiness",
    text: "Build your CV, LinkedIn, portfolio and project explanation confidence.",
    icon: Briefcase,
  },
];

const dataAnalyticsLearningPath = [
  {
    title: "Data Analytics Foundation",
    text: "Excel, formulas, cleaning, dashboards",
  },
  {
    title: "Business Intelligence",
    text: "Power BI, Power Query, DAX, reporting",
  },
  {
    title: "SQL + Python Analytics",
    text: "Databases, queries, automation, pandas",
  },
  {
    title: "GenAI Career Workflow",
    text: "Prompting, AI-assisted analysis, portfolio and job search",
  },
];

const dataAnalyticsLearningSteps = [
  ["Define your target", "Map your current background to realistic analyst roles."],
  ["Build visible proof", "Create projects that show how you think and solve problems."],
  ["Apply with support", "Prepare CV, LinkedIn, portfolio stories and interviews."],
];

const dataAnalyticsCurriculumPhases = [
  {
    phase: "Phase 1",
    title: "Excel and Data Foundation",
    weeks: "Weeks 1-4",
    learn: "Excel formulas, cleaning, tables, pivots, charts",
    build: "Operations KPI Dashboard, HR Analytics Dashboard",
  },
  {
    phase: "Phase 2",
    title: "Power BI and Business Reporting",
    weeks: "Weeks 5-10",
    learn: "Power Query, data modelling, DAX, dashboard design",
    build: "Executive Power BI Dashboard, Sales Performance Report",
  },
  {
    phase: "Phase 3",
    title: "SQL for Analysts",
    weeks: "Weeks 11-14",
    learn: "SELECT, JOIN, GROUP BY, subqueries, business case queries",
    build: "SQL Business Case Study Pack",
  },
  {
    phase: "Phase 4",
    title: "Python for Analytics",
    weeks: "Weeks 15-18",
    learn: "Python basics, pandas, cleaning, automation",
    build: "Python Data Cleaning Automation Project",
  },
  {
    phase: "Phase 5",
    title: "GenAI and Applied ML",
    weeks: "Weeks 19-21",
    learn: "AI prompting, analyst workflows, basic ML prototype",
    build: "AI-assisted analysis workflow, ML prototype",
  },
  {
    phase: "Phase 6",
    title: "Career and Portfolio",
    weeks: "Weeks 22-24",
    learn: "Project storytelling, job-search assets, interview practice",
    build: "Final capstone, GitHub portfolio, CV, LinkedIn, mock interview",
  },
];

const dataAnalyticsPremiumProjects = [
  {
    title: "Operations KPI Dashboard",
    tools: "Excel, Pivot Tables, Charts",
    problem: "Track operational performance, trends and issues.",
    output: "Dashboard + insight summary",
    value: "Shows spreadsheet reporting and KPI thinking.",
  },
  {
    title: "HR Workforce Analytics",
    tools: "Excel, Power BI",
    problem: "Understand workforce patterns, headcount and attrition.",
    output: "People analytics report",
    value: "Shows practical business analytics storytelling.",
  },
  {
    title: "Sales Performance Dashboard",
    tools: "Power BI, DAX",
    problem: "Explain revenue performance across products and regions.",
    output: "Interactive sales dashboard",
    value: "Shows BI modelling and executive reporting.",
  },
  {
    title: "SQL Business Case Study Pack",
    tools: "SQL",
    problem: "Answer business questions from relational data.",
    output: "Query pack + business answers",
    value: "Shows database analysis and validation.",
  },
  {
    title: "Python Data Cleaning Automation",
    tools: "Python, pandas",
    problem: "Turn raw files into repeatable analysis-ready outputs.",
    output: "Notebook + reusable script",
    value: "Shows automation and practical Python skill.",
  },
  {
    title: "GenAI Analyst Workflow",
    tools: "ChatGPT, OpenAI API",
    problem: "Use AI to support summaries, QA and structured insights.",
    output: "Workflow + validation log",
    value: "Shows responsible AI use in analyst work.",
  },
  {
    title: "Power BI Executive Dashboard",
    tools: "Power Query, DAX",
    problem: "Create a stakeholder-ready management view.",
    output: "Published dashboard + walkthrough",
    value: "Shows presentation-ready reporting confidence.",
  },
  {
    title: "Final Capstone Project",
    tools: "Excel, SQL, Power BI, Python, GenAI",
    problem: "Bring data, analysis, dashboard and explanation together.",
    output: "Portfolio case study + capstone deck",
    value: "Shows end-to-end analyst capability.",
  },
];

const dataAnalyticsFeatureSuite = [
  {
    title: "Turn learning into portfolio proof",
    text: "Every phase ends with a project you can show in interviews, explain on LinkedIn and add to your portfolio.",
    bullets: ["Project-based learning", "Real business-style datasets", "Dashboard and case-study outputs"],
  },
  {
    title: "Study with structure, not guesswork",
    text: "You get a weekly roadmap, clear tasks, mentor guidance and checkpoints, so you always know what to complete next.",
    bullets: ["Weekly learning plan", "Practice tasks and assignments", "Mentor feedback and doubt support"],
  },
  {
    title: "Prepare for the roles you actually want",
    text: "The program connects technical skills with CV, LinkedIn, project explanation and interview preparation.",
    bullets: ["CV and LinkedIn support", "Mock interview preparation", "Project walkthrough practice"],
  },
];

const dataAnalyticsIncludedFeatures = [
  "Live weekend classes",
  "24-week structured roadmap",
  "10+ portfolio projects",
  "Excel, SQL, Power BI, Python and GenAI",
  "Mentor support",
  "Career preparation",
  "Certificate of completion",
];

const dataAnalyticsStories = [
  "I finally understood how Excel dashboards are built for real business use.",
  "The Power BI project helped me explain analytics better in interviews.",
  "The course gave me a proper roadmap instead of random YouTube learning.",
];

const dataAnalyticsPremiumFaqs = [
  ["Can beginners join this course?", "Yes. The roadmap starts with Excel and data foundations before moving into SQL, Power BI, Python and GenAI workflows."],
  ["Do I need coding experience?", "No. Python and SQL are introduced step by step for analyst use cases, with practical tasks and mentor support."],
  ["Are classes live or recorded?", "The program is built around live weekend classes. Recordings and supporting resources may be shared for revision where available."],
  ["Will I get project files?", "Yes. The course is project-led, with datasets, dashboard work, SQL cases, Python notebooks and portfolio outputs."],
  ["Will I receive career support?", "Yes. Career preparation includes CV, LinkedIn, portfolio guidance, project walkthrough practice and mock interview preparation."],
  ["Will I get a certificate?", "Yes. Learners receive a certificate of completion after meeting the program requirements."],
  ["How much time should I spend weekly?", "Plan for weekend classes plus weekday practice tasks. Consistent weekly work is important for building portfolio-quality proof."],
  ["Is this suitable for career switchers?", "Yes. It is designed for beginners, Excel users and professionals who want a structured route into practical data analytics work."],
];

type RichCourseData = (typeof coursesData)[string];

function DataAnalyticsCtaRow({
  courseSlug,
  courseTitle,
  amount,
  currency,
  align = "left",
}: {
  courseSlug: string;
  courseTitle: string;
  amount: number;
  currency: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${align === "center" ? "sm:justify-center" : ""}`}>
      <Link
        href="/apply"
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#E95B00] px-7 py-3.5 text-base font-extrabold text-white shadow-lg shadow-black/15 transition-all hover:-translate-y-0.5 hover:bg-[#c94f00] focus:outline-none focus:ring-2 focus:ring-[#F5B82E] focus:ring-offset-2"
      >
        Book a Free Counselling Call
      </Link>
      <BrochureDownloadButton
        brochureHref={BROCHURE_HREF}
        downloadName={BROCHURE_DOWNLOAD_NAME}
        courseTitle={courseTitle}
        label="Download Curriculum"
      />
      {amount > 0 && (
        <PaymentCheckout
          courseSlug={courseSlug}
          courseTitle={courseTitle}
          amount={amount}
          currency={currency}
          label="Pay Now"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#F5B82E]/70 bg-[#F5B82E] px-7 py-3.5 text-base font-extrabold text-[#23091D] shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#F5B82E] focus:ring-offset-2"
        />
      )}
    </div>
  );
}

function PremiumSectionHeader({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && (
        <p className={`mb-3 text-sm font-black uppercase tracking-[0.18em] ${light ? "text-[#F5B82E]" : "text-[#E95B00]"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-[2rem] font-black leading-tight md:text-[2.7rem] ${light ? "text-white" : "text-[#231F20]"}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-base leading-8 md:text-lg ${light ? "text-white/75" : "text-[#6B6262]"}`}>{text}</p>
      )}
    </div>
  );
}

function courseCareerLabel(slug: string, title: string) {
  if (slug === "data-science") return "Data Science, Machine Learning and AI";
  if (slug === "ai-automation") return "Agentic AI and automation";
  if (slug === "gen-ai") return "Generative AI";
  if (slug === "data-analytics") return "Data Analytics and AI";
  return title.replace(/ Certification Program$/i, "");
}

function countLabel(count: number, singular: string, plural = `${singular}s`) {
  return `${count} ${count === 1 ? singular : plural}`;
}

function buildPremiumCourseContent(course: CourseRecord, richData: RichCourseData) {
  const careerLabel = courseCareerLabel(course.slug, richData.h1);
  const projectCount = richData.projects.length;
  const reviewRating = richData.reviews?.aggregate.ratingValue ?? 4.9;
  const supportCount = richData.careerSupport.length;
  const curriculumCount = richData.curriculum.length;
  const tools = richData.toolsCovered.slice(0, 8);

  const heroBadges = [
    richData.programmeOverview.duration,
    richData.programmeOverview.format,
    countLabel(projectCount, "Portfolio Project"),
    "Career Support Included",
  ];

  const metricCards = [
    [`${reviewRating}/5`, "Learner Rating"],
    [richData.programmeOverview.duration, "Structured Program"],
    [`${projectCount}+`, "Portfolio Projects"],
    ["Included", "Career Support"],
  ];

  const investmentBadges = [
    {
      title: String(projectCount),
      subtitle: projectCount === 1 ? "Portfolio Project" : "Portfolio Projects",
      accent: "#f26722",
    },
    {
      title: richData.programmeOverview.duration,
      subtitle: "Structured Program",
      accent: "#f5c242",
    },
    {
      title: "Career",
      subtitle: "Support Included",
      accent: "#2563eb",
    },
  ];

  const outcomes = [
    {
      title: "Live, guided learning",
      text: `Study ${careerLabel.toLowerCase()} through structured sessions, demos, labs and practical implementation.`,
      icon: MonitorPlay,
    },
    {
      title: "Project-first practice",
      text: `Build ${countLabel(projectCount, "portfolio project")} that turn concepts into visible proof for interviews and applications.`,
      icon: Briefcase,
    },
    {
      title: "Career readiness",
      text: "Shape your CV, LinkedIn, portfolio story and interview confidence around the roles you want.",
      icon: Users,
    },
  ];

  const learningPath = richData.curriculum.slice(0, 4).map((item, index) => ({
    title: item,
    text: index === 0
      ? "Build the foundations and vocabulary for practical work."
      : index === 1
        ? "Connect tools, workflows and business problem solving."
        : index === 2
          ? "Apply the skills through guided builds and review."
          : "Turn your work into a portfolio-ready career story.",
  }));

  const learningSteps = [
    ["Define your target", `Map your background to ${richData.careerOutcomes.roles.slice(0, 2).join(" and ")} opportunities.`],
    ["Build visible proof", `Create practical outputs such as ${richData.projects.slice(0, 2).join(" and ")}.`],
    ["Apply with support", "Prepare your CV, LinkedIn, portfolio walkthroughs and interview stories."],
  ];

  const curriculumPhases = richData.curriculum.map((title, index) => ({
    phase: `Phase ${index + 1}`,
    title,
    weeks: `Stage ${index + 1}`,
    learn: `Core concepts, tools and applied workflows for ${title.toLowerCase()}.`,
    build: richData.projects[index % richData.projects.length] ?? "Portfolio-ready practical output",
  }));

  const projectTools = richData.toolsCovered.length ? richData.toolsCovered : tools;
  const projects = richData.projects.map((title, index) => ({
    title,
    tools: projectTools.slice(index % Math.max(1, projectTools.length), index % Math.max(1, projectTools.length) + 3).join(", ") || projectTools.slice(0, 3).join(", "),
    problem: `Solve a realistic ${careerLabel.toLowerCase()} problem with a clear business or portfolio outcome.`,
    output: `${title} deliverable + walkthrough notes`,
    value: "Shows practical capability, tool confidence and communication.",
  }));

  const featureSuite = [
    {
      title: "Turn learning into portfolio proof",
      text: "Every stage connects learning to a tangible project, case study or workflow you can explain clearly.",
      bullets: richData.projects.slice(0, 3),
    },
    {
      title: "Study with structure, not guesswork",
      text: "Follow a clear roadmap with guided practice, checkpoints and practical expectations.",
      bullets: richData.curriculum.slice(0, 3),
    },
    {
      title: "Prepare for the roles you actually want",
      text: `Position yourself for roles such as ${richData.careerOutcomes.roles.slice(0, 3).join(", ")}.`,
      bullets: richData.careerSupport.slice(0, 3),
    },
  ];

  const includedFeatures = [
    richData.programmeOverview.format,
    `${richData.programmeOverview.duration} structured roadmap`,
    countLabel(projectCount, "portfolio project"),
    ...tools.slice(0, 4),
    ...richData.careerSupport.slice(0, 3),
    "Certificate of completion",
  ];

  const stories = richData.reviews?.items.map((review) => review.body) ?? dataAnalyticsStories;
  const faqs = [
    ["Can beginners join this course?", richData.programmeOverview.level === "Beginner-friendly" ? "Yes. The roadmap is designed to start from foundations and move into practical projects step by step." : "Yes, if you are ready for a structured intermediate programme with regular practice and project work."],
    ["What will I learn?", `You will work through ${richData.curriculum.slice(0, 4).join(", ")} and related portfolio projects.`],
    ["Will I build portfolio projects?", `Yes. The programme includes projects such as ${richData.projects.slice(0, 3).join(", ")}.`],
    ["Will I receive career support?", `Yes. Support includes ${richData.careerSupport.slice(0, 4).join(", ")}.`],
    ["What tools are covered?", `Tools and workflows include ${richData.toolsCovered.slice(0, 8).join(", ")}.`],
    ["Will I get a certificate?", "Yes. Learners receive a certificate of completion after meeting the programme requirements."],
  ];

  return {
    careerLabel,
    heroBadges,
    metricCards,
    investmentBadges,
    tools,
    outcomes,
    learningPath,
    learningSteps,
    curriculumPhases,
    projects,
    featureSuite,
    includedFeatures,
    stories,
    faqs,
  };
}

function CoursePremiumLanding({
  course,
  richData,
  courseSchema,
  breadcrumbs,
}: {
  course: CourseRecord;
  richData: RichCourseData;
  courseSchema: ReturnType<typeof buildCourseSchema> | null;
  breadcrumbs: ReturnType<typeof breadcrumbSchema>;
}) {
  const content = buildPremiumCourseContent(course, richData);
  const paymentAmount = course.price || Number(schemaPrice(richData.pricing.price)) || 0;
  const paymentCurrency = course.currency ?? "GBP";

  return (
    <div className="min-h-screen bg-[#F8F1E7] font-sans text-[#231F20]">
      {courseSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {course.slug === "data-analytics" && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataAnalyticsFaqPageSchema) }} />
      )}

      <header className="relative overflow-hidden bg-[linear-gradient(135deg,#180715_0%,#23091D_50%,#3A102C_100%)] pt-20 text-white">

        <section className="mx-auto max-w-[1180px] px-5 pb-10 pt-8 md:pb-12 md:pt-10 lg:px-8">
          <nav className="mb-7 flex items-center gap-2 text-sm font-semibold text-white/55" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white/80">{content.careerLabel}</span>
          </nav>
          <div className="max-w-5xl">
            <p className="mb-4 inline-flex rounded-full border border-[#F5B82E]/30 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-[#F5B82E]">
              {richData.h1}
            </p>
            <h1 className="max-w-5xl text-[2.65rem] font-black leading-[1.03] tracking-tight md:text-[4.4rem]">
              Powering your {content.careerLabel} career
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/78 md:text-xl">
              {richData.subheadline}
            </p>
            <div className="mt-7">
              <DataAnalyticsCtaRow
                courseSlug={course.slug}
                courseTitle={course.title}
                amount={paymentAmount}
                currency={paymentCurrency}
              />
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {content.heroBadges.map((badge) => (
                <div key={badge} className="rounded-xl border border-white/12 bg-white/8 px-5 py-3.5 text-base font-extrabold text-white shadow-xl shadow-black/10 backdrop-blur">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="bg-[#F8F1E7] px-5 py-16 md:py-24 lg:px-8">
          <div className="mx-auto max-w-[1180px]">
            <PremiumSectionHeader title="Trusted by learners building practical data and AI skills" />
            <div className="mb-8 flex flex-wrap gap-3">
              {content.tools.map((skill) => (
                <span key={skill} className="rounded-full border border-[#E8DCCB] bg-[#FFF9F1] px-4 py-2 text-base font-bold text-[#231F20] shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {content.metricCards.map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-[#E8DCCB] bg-[#FFF9F1] p-6 shadow-[0_18px_40px_rgba(35,9,29,0.08)] transition-all hover:-translate-y-1">
                  <div className="text-4xl font-black text-[#23091D]">{value}</div>
                  <p className="mt-2 text-base font-bold text-[#6B6262]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8F1E7] px-5 pb-16 md:pb-28 lg:px-8">
          <div className="mx-auto max-w-[1180px]">
            <PremiumSectionHeader title="Learning experiences that convert ambition into career-ready skill." />
            <div className="grid gap-6 md:grid-cols-3">
              {content.outcomes.map(({ title, text, icon: Icon }) => (
                <article key={title} className="rounded-3xl border border-[#E8DCCB] bg-[#FFF9F1] p-8 shadow-[0_18px_40px_rgba(35,9,29,0.08)] transition-all hover:-translate-y-1">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23091D] text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-black text-[#231F20]">{title}</h3>
                  <p className="mt-4 text-base leading-8 text-[#6B6262]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="program" className="bg-[#7A7462] px-5 py-16 md:py-28 lg:px-8">
          <div className="mx-auto max-w-[1180px]">
            <PremiumSectionHeader light title={`The right learning path for your ${content.careerLabel.toLowerCase()} outcomes`} />
            <div className="rounded-[2rem] bg-[#23091D] p-6 shadow-2xl md:p-8">
              <div className="grid gap-4 md:grid-cols-4">
                {content.learningPath.map((item) => (
                  <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-white transition-all hover:-translate-y-1 hover:bg-white/[0.1]">
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-4 text-base leading-7 text-white/72">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {content.learningSteps.map(([title, text]) => (
                <article key={title} className="rounded-3xl border border-white/18 bg-[#FFF9F1] p-6 shadow-xl">
                  <h3 className="text-xl font-black text-[#23091D]">{title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#6B6262]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#180715_0%,#23091D_50%,#3A102C_100%)] px-5 py-16 text-white md:py-28 lg:px-8">
          <div className="mx-auto max-w-[1180px]">
            <PremiumSectionHeader light title="The proof stack for career change." />
            <div className="grid gap-4 md:grid-cols-4">
              {content.metricCards.map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/12 bg-white/8 p-7 shadow-xl shadow-black/10">
                  <div className="text-4xl font-black text-[#F5B82E]">{value}</div>
                  <p className="mt-3 text-lg font-bold text-white/82">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="curriculum" className="bg-[#F8F1E7] px-5 py-16 md:py-28 lg:px-8">
          <div className="mx-auto max-w-[1180px]">
            <PremiumSectionHeader title={`A ${richData.programmeOverview.duration} roadmap from learning to portfolio proof`} />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {content.curriculumPhases.map((phase) => (
                <details key={phase.phase} className="group rounded-3xl border border-[#E8DCCB] bg-[#FFF9F1] p-6 shadow-[0_18px_40px_rgba(35,9,29,0.08)] open:bg-white">
                  <summary className="cursor-pointer list-none">
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-[#E95B00]">{phase.phase} · {phase.weeks}</p>
                    <h3 className="mt-3 text-2xl font-black leading-tight text-[#231F20]">{phase.title}</h3>
                    <span className="mt-5 inline-flex rounded-full bg-[#23091D] px-4 py-2 text-sm font-bold text-white group-open:bg-[#E95B00]">
                      View phase
                    </span>
                  </summary>
                  <div className="mt-6 space-y-4 border-t border-[#E8DCCB] pt-6">
                    <div>
                      <p className="font-black text-[#23091D]">Learn</p>
                      <p className="mt-1 text-base leading-7 text-[#6B6262]">{phase.learn}</p>
                    </div>
                    <div>
                      <p className="font-black text-[#23091D]">Build</p>
                      <p className="mt-1 text-base leading-7 text-[#6B6262]">{phase.build}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-[#7A7462] px-5 py-16 md:py-28 lg:px-8">
          <div className="mx-auto max-w-[1180px]">
            <PremiumSectionHeader light title={`Build portfolio projects that show real ${content.careerLabel.toLowerCase()} capability`} />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {content.projects.map((project) => (
                <article key={project.title} className="rounded-3xl border border-white/20 bg-[#FFF9F1] p-6 shadow-xl transition-all hover:-translate-y-1">
                  <h3 className="text-2xl font-black text-[#23091D]">{project.title}</h3>
                  <p className="mt-3 text-sm font-black uppercase tracking-[0.14em] text-[#E95B00]">Tools used</p>
                  <p className="mt-1 text-base font-bold text-[#231F20]">{project.tools}</p>
                  <p className="mt-4 text-base leading-7 text-[#6B6262]"><span className="font-black text-[#231F20]">Business problem:</span> {project.problem}</p>
                  <p className="mt-3 text-base leading-7 text-[#6B6262]"><span className="font-black text-[#231F20]">Final output:</span> {project.output}</p>
                  <p className="mt-3 text-base leading-7 text-[#6B6262]"><span className="font-black text-[#231F20]">Portfolio value:</span> {project.value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="career-support" className="bg-[#F8F1E7] px-5 py-16 md:py-28 lg:px-8">
          <div className="mx-auto max-w-[1180px]">
            <PremiumSectionHeader title="Brit Institute’s stand-out suite of features" />
            <div className="space-y-6">
              {content.featureSuite.map((feature, index) => (
                <article key={feature.title} className={`grid gap-8 rounded-[2rem] border border-[#E8DCCB] bg-[#FFF9F1] p-8 shadow-[0_18px_40px_rgba(35,9,29,0.08)] md:grid-cols-2 md:p-10 ${index % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                  <div>
                    <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-[#E95B00]">Feature {index + 1}</p>
                    <h3 className="text-3xl font-black leading-tight text-[#23091D]">{feature.title}</h3>
                    <p className="mt-4 text-lg leading-8 text-[#6B6262]">{feature.text}</p>
                  </div>
                  <div className="rounded-3xl bg-[#23091D] p-6 text-white">
                    <ul className="space-y-4">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-base font-bold leading-7">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F5B82E]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="fees" className="bg-[linear-gradient(135deg,#180715_0%,#23091D_60%,#3A102C_100%)] px-5 py-16 text-white md:py-28 lg:px-8">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1fr_430px] lg:items-center">
            <div>
              <PremiumSectionHeader
                light
                title={`Start your ${content.careerLabel.toLowerCase()} journey with a clear learning plan.`}
                text="Book a free counselling call and understand the right path based on your background, goals and current skill level."
              />
              <DataAnalyticsCtaRow
                courseSlug={course.slug}
                courseTitle={course.title}
                amount={paymentAmount}
                currency={paymentCurrency}
              />
            </div>
            <aside className="rounded-[2rem] border border-white/12 bg-white/8 p-7 shadow-2xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#F5B82E]">Included Features</p>
              <div className="mt-5 text-5xl font-black">{richData.pricing.price}</div>
              {richData.pricing.emi && <p className="mt-2 text-base font-bold text-white/70">Flexible payment options available</p>}
              {paymentAmount > 0 && (
                <div className="mt-6">
                  <PaymentCheckout
                    courseSlug={course.slug}
                    courseTitle={course.title}
                    amount={paymentAmount}
                    currency={paymentCurrency}
                    label="Pay now"
                    className="flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#F5B82E] px-6 py-3.5 text-sm font-black text-[#23091D] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white"
                  />
                  <p className="mt-3 text-sm font-bold leading-6 text-white/68">
                    Coupon codes can be applied in checkout before PayPal, Razorpay, or Apple Pay payment.
                  </p>
                </div>
              )}
              <ul className="mt-7 space-y-4">
                {content.includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-3 text-base font-bold leading-7">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F5B82E]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="bg-[#D8E8FF] px-5 py-16 md:py-24 lg:px-8">
          <div className="mx-auto max-w-[980px] text-center">
            <Quote className="mx-auto mb-6 h-10 w-10 text-[#23091D]" />
            <p className="text-3xl font-black leading-tight text-[#23091D] md:text-5xl">
              “{content.stories[0] ?? "Brit Institute gave me structure, practical projects and the confidence to explain my work clearly in interviews."}”
            </p>
          </div>
        </section>

        <section className="bg-[#F8F1E7] px-5 py-16 md:py-28 lg:px-8">
          <div className="mx-auto max-w-[1180px]">
            <PremiumSectionHeader title="Join learners building practical career success stories" />
            <div className="grid gap-5 md:grid-cols-3">
              {content.stories.slice(0, 3).map((story, index) => (
                <article key={story} className="rounded-3xl border border-[#E8DCCB] bg-[#FFF9F1] p-7 shadow-[0_18px_40px_rgba(35,9,29,0.08)]">
                  <div className="mb-5 flex gap-1 text-[#F5B82E]">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-5 w-5 fill-current" />)}
                  </div>
                  <p className="text-xl font-bold leading-8 text-[#231F20]">“{story}”</p>
                  <p className="mt-5 text-base font-bold text-[#6B6262]">Learner story {index + 1}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#E95B00] px-5 py-14 text-white md:py-20 lg:px-8">
          <div className="mx-auto grid max-w-[1180px] gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <h2 className="text-3xl font-black leading-tight md:text-5xl">The best investment is skill you can prove.</h2>
            <div className="grid grid-cols-1 gap-4 min-[520px]:grid-cols-3 sm:gap-5 md:justify-items-end">
              {content.investmentBadges.map((badge) => (
                <article
                  key={badge.subtitle}
                  className="relative mx-auto flex aspect-[0.88] w-full max-w-[150px] bg-[#15110f] p-[2px] text-center text-[#111] shadow-[0_20px_48px_rgba(89,32,0,0.2)] sm:max-w-[168px] md:mx-0"
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
                      <strong className="text-[20px] font-black leading-[0.98] tracking-tight sm:text-[23px]">
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

        <section id="faq" className="bg-[#FFF9F1] px-5 py-16 md:py-28 lg:px-8">
          <div className="mx-auto max-w-[1180px]">
            <PremiumSectionHeader title="Frequently Asked Questions" />
            <div className="grid gap-4 md:grid-cols-2">
              {content.faqs.map(([question, answer]) => (
                <details key={question} className="group rounded-3xl border border-[#E8DCCB] bg-white p-6 shadow-sm">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-black text-[#23091D]">
                    <span>{question}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#F8F1E7] text-[#E95B00] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-5 text-base leading-8 text-[#6B6262]">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#180715] px-5 pb-28 pt-16 text-white md:pb-16 lg:px-8">
        <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-4">
          <div>
            <h2 className="text-2xl font-black">Brit Institute</h2>
            <p className="mt-4 text-base leading-7 text-white/65">Practical UK-focused data, AI and career training for learners building visible skill proof.</p>
            <Link href="/apply" className="mt-6 inline-flex rounded-full bg-[#F5B82E] px-5 py-3 text-sm font-black text-[#23091D] transition-all hover:-translate-y-0.5 hover:bg-white">
              Book Free Counselling
            </Link>
          </div>
          {[
            ["Programs", ["Data Analytics + GenAI", "Data Science", "Agentic AI"]],
            ["Resources", ["Blog", "Reviews", "Pricing"]],
            ["Contact", ["info@britinstitute.uk", "London, United Kingdom", "Online weekend classes"]],
          ].map(([title, items]) => (
            <div key={title as string}>
              <h3 className="text-lg font-black">{title}</h3>
              <ul className="mt-4 space-y-3 text-base text-white/65">
                {(items as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E8DCCB] bg-[#FFF9F1]/95 p-3 shadow-2xl backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-[520px] gap-2">
          <Link href="/apply" className="flex flex-1 items-center justify-center rounded-full bg-[#E95B00] px-4 py-3 text-sm font-black text-white">
            Book a Free Counselling Call
          </Link>
          {paymentAmount > 0 ? (
            <PaymentCheckout
              courseSlug={course.slug}
              courseTitle={course.title}
              amount={paymentAmount}
              currency={paymentCurrency}
              label="Pay Now"
              className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#23091D] px-4 py-3 text-sm font-black text-white"
            />
          ) : (
            <BrochureDownloadButton
              brochureHref={BROCHURE_HREF}
              downloadName={BROCHURE_DOWNLOAD_NAME}
              courseTitle={course.title}
              label="Download Curriculum"
            />
          )}
        </div>
      </div>
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

  const premiumRichData = richData;
  if (premiumRichData) {
    return (
      <CoursePremiumLanding
        course={course}
        richData={premiumRichData}
        courseSchema={courseSchema}
        breadcrumbs={breadcrumbs}
      />
    );
  }

  const legacyRichData = richData as RichCourseData | undefined;

  const relatedBlogArticles = (COURSE_RELATED_BLOG_SLUGS[resolvedParams.slug] ?? [])
    .map((s) => BLOG_ARTICLES.find((a) => a.slug === s))
    .filter((a): a is (typeof BLOG_ARTICLES)[number] => Boolean(a));

  const points = (course.desc || "")
    .split(/[\n\u2022]+/)
    .map((p: string) => p.trim())
    .filter((p: string) => p.length > 5);

  return (
    <div className="min-h-screen font-sans" style={{ background: "linear-gradient(180deg, #F7F3EA 0%, #FFFFFF 100%)", color: "#241A1F" }}>
      {courseSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {isDataAnalyticsCourse && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataAnalyticsFaqPageSchema) }} />
      )}

      {/* ── Thin UK accent bar ── */}
      <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg, #24101F 0%, #D95700 50%, #D4AF37 100%)" }} />

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
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f5c242]/40 bg-[#fff7df] px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#c45118]">
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

            <h1 className="text-[2.6rem] md:text-[3.2rem] font-black leading-[1.1] tracking-tight text-[#241a1f] mb-5" style={{ fontVariantNumeric: "tabular-nums" }}>
              {isDataAnalyticsCourse ? "Become a Job-Ready Data Analyst with GenAI" : legacyRichData ? legacyRichData.h1 : course.title}
            </h1>

            {legacyRichData && (
              <p className="text-lg md:text-xl text-slate-500 mb-8 leading-relaxed max-w-2xl font-normal">
                {isDataAnalyticsCourse
                  ? "Learn Excel, SQL, Power BI, Python and AI workflows through live weekend classes, portfolio projects, mentor support and career preparation."
                  : legacyRichData.subheadline}
              </p>
            )}

            {legacyRichData && (
              <div className="mb-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/apply"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 text-[15px] font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto"
                >
                  Book Free Counselling <ArrowRight className="h-4 w-4" />
                </Link>
                <BrochureDownloadButton brochureHref={BROCHURE_HREF} downloadName={BROCHURE_DOWNLOAD_NAME} courseTitle={course.title} />
              </div>
            )}

            {/* Cohort / Duration chips */}
            {legacyRichData && (
              <div className="flex flex-wrap gap-2.5 mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-emerald-500" />
                  Cohort: <span className="text-slate-900">{legacyRichData.cohort}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  <Layers className="w-3.5 h-3.5 text-[#d95700]" />
                  Duration: <span className="text-slate-900">{legacyRichData.duration}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  {legacyRichData.programmeOverview.format}
                </div>
              </div>
            )}

            {isDataAnalyticsCourse && (
              <div className="mb-8 grid grid-cols-2 gap-2.5 md:grid-cols-4">
                {dataAnalyticsHeroBadges.map((badge) => (
                  <div key={badge} className="rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-center text-[12px] font-black leading-snug text-slate-800 shadow-sm">
                    {badge}
                  </div>
                ))}
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
                  <span className="font-black text-slate-900">{legacyRichData ? legacyRichData.trustLayer.learnersTrained : "300K+"}</span>
                  <span className="text-slate-500 ml-1 font-medium">trained</span>
                </div>
              </div>
              {legacyRichData && (
                <>
                  <div className="px-5 py-3.5 text-sm hidden sm:block">
                    <span className="font-black text-emerald-600">{legacyRichData.trustLayer.placedOrTransitioned}</span>
                    <span className="text-slate-500 ml-1 font-medium">placed</span>
                  </div>
                  <div className="px-5 py-3.5 hidden sm:flex items-center gap-1.5 text-sm text-slate-600 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    {legacyRichData.trustLayer.toolsUsed}
                  </div>
                </>
              )}
            </div>

            {isDataAnalyticsCourse && (
              <p className="mt-4 text-[13px] font-semibold text-slate-500">
                Rated 4.9 by learners | Practical projects | UK career-focused training
              </p>
            )}

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
          {!legacyRichData ? (
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

              {isDataAnalyticsCourse && (
                <section>
                  <div className="grid gap-3 md:grid-cols-4">
                    {dataAnalyticsTrustStrip.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="mb-2 text-[2rem] font-black leading-none text-slate-900">{item.value}</div>
                        <h2 className="mb-2 text-[13px] font-black uppercase tracking-[0.16em] text-[#c45118]">{item.label}</h2>
                        <p className="text-[13px] leading-6 text-slate-500">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {isDataAnalyticsCourse && (
                <section>
                  <SectionLabel>Outcomes</SectionLabel>
                  <div className="mb-7 flex items-end gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900">
                      <Target className="h-4.5 w-4.5 text-white" />
                    </div>
                    <h2 className="text-[1.65rem] font-black leading-tight text-slate-900">
                      By the End of This Program, You Will Be Able To
                    </h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {dataAnalyticsOutcomes.map(({ icon: Icon, title, result }) => (
                      <div key={title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                        <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-xl border border-slate-100 bg-slate-50">
                          <Icon className="h-4.5 w-4.5 text-[#d95700]" />
                        </div>
                        <h3 className="mb-2 text-[15px] font-black text-slate-900">{title}</h3>
                        <p className="text-[13px] leading-6 text-slate-500">{result}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

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
                      {legacyRichData.careerOutcomes.roles.map((r: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2.5 text-[13px] text-slate-700 font-semibold">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Salary */}
                  <div className="rounded-2xl border border-[#ded6c8] bg-gradient-to-b from-[#fff7df] to-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-[#f0eadf] border border-[#ded6c8] flex items-center justify-center mb-5">
                        <Briefcase className="w-4 h-4 text-[#d95700]" />
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c45118] mb-2">Average UK Salary</p>
                      <div className="text-[2.4rem] font-black text-slate-900 leading-none mb-2">{legacyRichData.careerOutcomes.salary}</div>
                    </div>
                    <p className="text-[12px] font-semibold text-slate-500">Annual, post-completion</p>
                  </div>

                  {/* Demand */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center mb-5">
                      <Users className="w-4 h-4 text-violet-600" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Industry Demand</p>
                    {Array.isArray(legacyRichData.careerOutcomes.demand) ? (
                      <ul className="grid grid-cols-2 gap-2">
                        {legacyRichData.careerOutcomes.demand.map((industry: string) => (
                          <li key={industry} className="flex items-start gap-2 text-[12px] font-semibold text-slate-700">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-500" />{industry}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[13px] text-slate-700 leading-relaxed font-medium">{legacyRichData.careerOutcomes.demand}</p>
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
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                    <h3 className="mb-5 text-[15px] font-black text-slate-900">This program is ideal for you if:</h3>
                    <div className="space-y-4">
                      {legacyRichData.isForYou.map((item: string, idx: number) => (
                        <div key={idx} className="flex gap-3.5">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                            <Check className="h-3 w-3 text-emerald-700" />
                          </div>
                          <span className="text-[14px] font-medium leading-relaxed text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-7 shadow-sm">
                    <h3 className="mb-5 text-[15px] font-black text-slate-900">This may not be right if:</h3>
                    <div className="space-y-4">
                      {(isDataAnalyticsCourse ? dataAnalyticsNotForYou : ["You want only passive viewing", "You are not ready to practise between sessions", "You do not want feedback on projects"]).map((item) => (
                        <div key={item} className="flex gap-3.5">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[13px] font-black text-slate-500">
                            ×
                          </div>
                          <span className="text-[14px] font-medium leading-relaxed text-slate-600">{item}</span>
                        </div>
                      ))}
                    </div>
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

                    {isDataAnalyticsCourse ? (
                      <div className="space-y-4">
                        {dataAnalyticsRoadmap.map((phase) => (
                          <article key={phase.phase} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                              <div>
                                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#c45118]">{phase.phase} · {phase.weeks}</p>
                                <h3 className="mt-1 text-[16px] font-black text-slate-900">{phase.title}</h3>
                              </div>
                              <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600">Roadmap</span>
                            </div>
                            <div className="grid gap-3 sm:grid-cols-2">
                              {[
                                ["Learn", phase.learn],
                                ["Tools", phase.tools],
                                ["Build", phase.build],
                                ["Career Output", phase.output],
                              ].map(([label, text]) => (
                                <div key={label} className="rounded-xl bg-slate-50 p-4">
                                  <p className="mb-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">{label}</p>
                                  <p className="text-[13px] font-semibold leading-6 text-slate-700">{text}</p>
                                </div>
                              ))}
                            </div>
                          </article>
                        ))}
                      </div>
                    ) : isAgenticAICourse || isDataScienceCourse || isGenerativeAICourse ? (
                      <div className="rounded-2xl border border-[#ded6c8] bg-gradient-to-br from-[#fff7df] to-white p-6">
                        <p className="text-[13px] font-semibold leading-7 text-slate-700 mb-5">
                          {isAgenticAICourse ? "The full 16-week Agentic AI curriculum is expanded below — agent workflow design, phase topics, labs, and portfolio outcomes."
                              : isDataScienceCourse ? "The full 48-week Data Science, ML & GenAI curriculum is expanded below — ML projects, GenAI integration, and capstone outcomes."
                              : "The full 12-week Generative AI curriculum is expanded below — prompt systems, GenAI tools, workflow projects, and responsible AI outcomes."}
                        </p>
                        <a
                          href={isAgenticAICourse ? "#detailed-agentic-ai-curriculum" : isDataScienceCourse ? "#detailed-data-science-curriculum" : "#detailed-generative-ai-curriculum"}
                          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-[13px] font-bold text-white hover:bg-slate-800 transition-colors"
                        >
                          View full curriculum <ChevronDown className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    ) : (
                      <div className="space-y-2.5">
                        {legacyRichData.curriculum.map((item: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-4 bg-white rounded-xl border border-slate-100 px-4 py-3.5 shadow-sm hover:border-[#d95700]/40 transition-all group">
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
                          <span className="text-[14px] font-bold">{legacyRichData.programmeOverview.duration}</span>
                        </div>
                        <div className="flex justify-between items-center py-3.5">
                          <span className="text-[13px] text-slate-400 font-medium">Format</span>
                          <span className="text-[14px] font-bold">{legacyRichData.programmeOverview.format}</span>
                        </div>
                        <div className="flex justify-between items-center py-3.5">
                          <span className="text-[13px] text-slate-400 font-medium">Level</span>
                          <span className="text-[14px] font-bold">{legacyRichData.programmeOverview.level}</span>
                        </div>
                      </div>
                    </div>

                    {/* Pricing card */}
                    <CourseInvestmentTracker courseTitle={course.title} courseSlug={resolvedParams.slug} price={paymentAmount || legacyRichData.pricing.price} currency={paymentCurrency}>
                      <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-700 mb-2 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" /> Program Fee
                      </h3>
                      <div className="text-[2.4rem] font-black text-slate-900 leading-none mb-3">
                        {course.price ? new Intl.NumberFormat("en-GB", { style: "currency", currency: course.currency ?? "GBP", maximumFractionDigits: 0 }).format(course.price) : legacyRichData.pricing.price}
                      </div>
                      {isDataAnalyticsCourse && (
                        <div className="mb-4 grid gap-2 text-[12px] font-semibold text-slate-600">
                          {["Live weekend classes", "Project files and templates", "Mentor support", "Portfolio projects", "Career guidance", "Certificate of completion"].map((item) => (
                            <span key={item} className="flex items-start gap-2">
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                      {legacyRichData.pricing.emi && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-700 px-3 py-1">
                          <Check className="w-3 h-3" /> Flexible payment options available
                        </span>
                      )}
                    </CourseInvestmentTracker>

                    <PaymentCheckout
                      courseSlug={resolvedParams.slug}
                      courseTitle={course.title}
                      amount={paymentAmount}
                      currency={paymentCurrency}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#d95700] px-6 py-3.5 text-[14px] font-bold text-white shadow-md hover:bg-[#c45118] hover:-translate-y-0.5 transition-all"
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
                  <h2 className="text-[1.65rem] font-black text-slate-900 leading-tight">Tools & Technologies You Will Use</h2>
                </div>
                {isDataAnalyticsCourse ? (
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {dataAnalyticsToolGroups.map((group) => (
                      <div key={group.label} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                        <h3 className="mb-4 text-[12px] font-black uppercase tracking-[0.18em] text-slate-400">{group.label}</h3>
                        <div className="flex flex-wrap gap-2">
                          {group.tools.map((tool) => (
                            <span key={tool} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[12px] font-bold text-slate-700">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 xl:grid-cols-4">
                    {legacyRichData.toolsCovered.map((tool: string, idx: number) => (
                      <div key={idx} className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-3.5 py-3 shadow-sm hover:border-slate-300 hover:shadow-md transition-all">
                        <ToolLogo tool={tool} />
                        <span className="text-[13px] font-bold text-slate-900 leading-tight">{tool}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* ── DETAILED CURRICULA ── */}
              {isDataAnalyticsCourse && (
                <section id="detailed-data-analytics-curriculum" className="scroll-mt-28">
                  <details className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-black text-slate-900">
                      <span>View the full week-by-week curriculum</span>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <div className="mt-8">
                      <DataAnalyticsCurriculum />
                    </div>
                  </details>
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
                          <h3 className="text-[14px] font-bold leading-snug text-slate-900 group-hover:text-[#d95700] mb-3">
                            {article.title}
                          </h3>
                          <p className="text-[13px] leading-6 text-slate-500">{article.excerpt}</p>
                          <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-bold text-[#d95700]">
                            Read guide <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* ── PROJECTS + CAREER SUPPORT ── */}
              {isDataAnalyticsCourse ? (
                <>
                  <section>
                    <SectionLabel>Weekly Learning</SectionLabel>
                    <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                      <div className="mb-7 flex items-end gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900">
                          <Clock className="h-4.5 w-4.5 text-white" />
                        </div>
                        <h2 className="text-[1.65rem] font-black leading-tight text-slate-900">How Your Week Will Look</h2>
                      </div>
                      <div className="grid gap-3 md:grid-cols-4">
                        {dataAnalyticsWeeklyExperience.map(([day, activity]) => (
                          <div key={day} className="rounded-xl bg-slate-50 p-5">
                            <p className="mb-2 text-[12px] font-black uppercase tracking-[0.18em] text-[#c45118]">{day}</p>
                            <p className="text-[14px] font-semibold leading-6 text-slate-700">{activity}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  <section>
                    <SectionLabel>Portfolio Proof</SectionLabel>
                    <div className="mb-7">
                      <h2 className="text-[1.8rem] font-black leading-tight text-slate-900">Build a Portfolio That Shows Real Analyst Capability</h2>
                      <p className="mt-3 max-w-2xl text-[14px] leading-7 text-slate-500">
                        Every project is designed to create evidence you can explain in interviews: what the data showed, what you built, and how you checked your work.
                      </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                      {dataAnalyticsPortfolioProjects.map(([title, tools, build, output, tag]) => (
                        <article key={title} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                          <span className="mb-4 inline-flex rounded-full bg-violet-50 px-3 py-1 text-[11px] font-black text-violet-700">{tag}</span>
                          <h3 className="mb-3 text-[15px] font-black text-slate-900">{title}</h3>
                          <p className="mb-3 text-[12px] font-bold text-slate-500">Tools: {tools}</p>
                          <p className="text-[13px] leading-6 text-slate-600">You will build: {build}</p>
                          <p className="mt-4 text-[12px] font-black uppercase tracking-[0.16em] text-[#c45118]">Portfolio Output</p>
                          <p className="mt-1 text-[13px] font-semibold leading-6 text-slate-700">{output}</p>
                        </article>
                      ))}
                    </div>
                  </section>

                  <section className="overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-lg md:p-10">
                    <div className="mb-8 max-w-2xl">
                      <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#f5c242]">Career Support</p>
                      <h2 className="mb-4 text-[1.9rem] font-black leading-tight">Career Preparation Built Into the Program</h2>
                      <p className="text-[15px] leading-7 text-slate-300">
                        You do not only complete a course. You graduate with projects, interview stories and a clearer job-search plan.
                      </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {dataAnalyticsCareerSupport.map((support) => (
                        <div key={support} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                          <span className="text-[13px] font-bold text-slate-100">{support}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </>
              ) : (
                <section>
                  <SectionLabel>Hands-On Learning</SectionLabel>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                      <div className="w-8 h-8 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center mb-5">
                        <Layers className="w-4 h-4 text-violet-600" />
                      </div>
                      <h2 className="text-lg font-black text-slate-900 mb-5">Portfolio Projects</h2>
                      <ul className="space-y-4">
                        {legacyRichData.projects.map((proj: string, idx: number) => (
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
                        {legacyRichData.careerSupport.map((support: string, idx: number) => (
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
              )}

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
                    {legacyRichData.reviews.items.map((review, idx) => (
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
                    <p className="text-[14px] text-slate-500 mb-8">Grouped by format, eligibility, projects, fees, and career support.</p>
                    <div className="mb-8 grid gap-3 md:grid-cols-2">
                      {dataAnalyticsFaqGroups.map((group) => (
                        <div key={group.title} className="rounded-xl bg-slate-50 p-5">
                          <h3 className="mb-3 text-[12px] font-black uppercase tracking-[0.18em] text-[#c45118]">{group.title}</h3>
                          <ul className="space-y-2">
                            {group.questions.map((question) => (
                              <li key={question} className="flex items-start gap-2 text-[13px] font-semibold leading-6 text-slate-600">
                                <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                                {question}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
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
                  <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#f5c242] mb-4">Begin Your Journey</p>
                  <h2 className="text-[2.4rem] md:text-[2.8rem] font-black text-white leading-[1.1] mb-5">
                    {isDataAnalyticsCourse ? "Ready to Start Your Data Career?" : "Ready to accelerate your career?"}
                  </h2>
                  <p className="text-[15px] text-slate-400 mb-8 leading-relaxed">
                    {isDataAnalyticsCourse
                      ? "Speak with our advisor, understand the curriculum, and choose the right learning path for your background."
                      : "Join hundreds of professionals who have transformed their careers with Brit Institute's industry-aligned programmes."}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link href="/apply" className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-[15px] hover:bg-slate-100 hover:-translate-y-0.5 transition-all shadow-lg flex items-center justify-center gap-2">
                      Book Free Counselling <ArrowRight className="w-4 h-4" />
                    </Link>
                    <BrochureDownloadButton brochureHref={BROCHURE_HREF} downloadName={BROCHURE_DOWNLOAD_NAME} courseTitle={course.title} />
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* ═══════════════════════════════ RIGHT COLUMN (STICKY) ═══════════════════════════════ */}
        <aside className="relative">
          <div className="lg:sticky lg:top-28 space-y-4">

            {legacyRichData && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
                <p className="mb-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#c45118]">Next Cohort Starts Soon</p>
                <h2 className="mb-5 text-xl font-black text-slate-900">{isDataAnalyticsCourse ? "Data Analytics + GenAI" : course.title}</h2>
                <div className="space-y-0 divide-y divide-slate-100">
                  {[
                    ["Duration", legacyRichData.programmeOverview.duration],
                    ["Format", isDataAnalyticsCourse ? "Weekend Live Classes" : legacyRichData.programmeOverview.format],
                    ["Level", isDataAnalyticsCourse ? "Beginner to Job-Ready" : legacyRichData.programmeOverview.level],
                    ["Mode", "Online"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between gap-4 py-3">
                      <span className="text-[13px] font-semibold text-slate-500">{label}</span>
                      <span className="text-right text-[13px] font-black text-slate-900">{value}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/apply"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-[14px] font-bold text-white transition-colors hover:bg-slate-800"
                >
                  Book Free Counselling <ArrowRight className="h-4 w-4" />
                </Link>
                {isDataAnalyticsCourse && (
                  <p className="mt-4 text-center text-[12px] font-semibold leading-5 text-slate-500">
                    Rated 4.9 by learners | Practical projects | UK career-focused training
                  </p>
                )}
              </div>
            )}

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
