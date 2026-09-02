"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  FileText,
  GraduationCap,
  Handshake,
  LineChart,
  MessageCircle,
  MonitorPlay,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";

import { coursesData } from "@/app/courses/[slug]/courseData";
import LogoStrip from "@/components/sections/LogoStrip";

const courseImages: Record<string, string> = {
  "data-analytics": "/da-Photoroom.png",
  "data-science": "/ds-ml-Photoroom.png",
  "ai-automation": "/agentic-ai-Photoroom.png",
  "gen-ai": "/genai-Photoroom.png",
};

const courseAccents = ["#f5c242", "#f26722", "#97c266", "#c44d2d"];

const included = [
  {
    icon: MonitorPlay,
    title: "Learn the tools employers use",
    text: "Build practical capability in Excel, SQL, Power BI, Python and applied AI through live, guided training.",
  },
  {
    icon: BookOpenCheck,
    title: "Build real portfolio projects",
    text: "Create dashboards, analysis case studies and project walkthroughs you can explain during interviews.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Prepare for the UK job search",
    text: "Strengthen your CV, LinkedIn profile, interview answers and application strategy with structured support.",
  },
];

const featureRows = [
  {
    eyebrow: "Skills UK analyst roles require",
    title: "Learn Excel, SQL, Power BI, Python and applied AI.",
    text: "The Data Analytics + AI programme connects core analyst tools to practical business tasks, so each skill has a clear workplace purpose.",
    image: "/dapic.png",
    checks: ["Data cleaning and analysis", "Dashboard and reporting workflows", "Business-focused SQL and Python practice"],
  },
  {
    eyebrow: "Projects before certificates",
    title: "Turn learning into portfolio proof.",
    text: "Build practical assignments, dashboards and case studies that show how you approach a problem, use data and communicate an outcome.",
    image: "/microsoft-certificate.png",
    checks: ["Business-style project briefs", "Mentor feedback on practical work", "Portfolio outputs prepared for interviews"],
  },
  {
    eyebrow: "Career support built in",
    title: "Move from projects to interviews with a clear plan.",
    text: "Connect your skills and project evidence to suitable UK analyst roles through CV, LinkedIn, interview and job-search preparation.",
    image: "/hero-person.png",
    checks: ["CV and LinkedIn optimisation", "Technical and behavioural interview practice", "Application and placement support"],
  },
];

const productCards = Object.entries(coursesData).slice(0, 4).map(([slug, course], index) => ({
  slug,
  title: course.seoTitle,
  text: course.subheadline,
  duration: course.duration,
  level: course.programmeOverview.level,
  image: courseImages[slug] ?? "/genai-Photoroom.png",
  accent: courseAccents[index % courseAccents.length],
}));


function DarkPattern({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-50 ${className}`}
      style={{
        background:
          "radial-gradient(circle at 50% 45%, rgba(245,194,66,0.16), transparent 32%), repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 0 1px, transparent 1px 18px)",
      }}
    />
  );
}

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`text-xs font-black uppercase tracking-[0.28em] ${dark ? "text-[#f5c242]" : "text-[#c45118]"}`}>
      {children}
    </p>
  );
}

export default function BritInspiredHome() {
  return (
    <main className="bg-[#f7f3ea] text-[#241a1f]">
      <HeroSection />
      <CareerJourneyStrip />
      <LogoStrip />
      <IntroCardsSection />
      <ProductsSection />
      <CareerChangeBand />
      <FeatureSuite />
      <CohortCTA />
      <ReviewEvidenceStrip />
      <PortfolioGrid />
      <OutcomeProcessBand />
      <FinalDarkCTA />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[640px] overflow-hidden bg-[#24101f] px-5 pb-10 pt-20 text-white md:min-h-[700px] md:px-8 md:pt-24 lg:min-h-[735px] lg:px-12 lg:pb-12 lg:pt-24">
      <DarkPattern />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(36,16,31,0.98)_0%,rgba(36,16,31,0.92)_45%,rgba(36,16,31,0.58)_100%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl pt-12 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionLabel dark>UK Data Analyst Career Programme</SectionLabel>
          <h1 className="mt-3 max-w-2xl text-4xl font-black leading-[0.98] tracking-tight md:text-[52px] lg:text-[60px]">
            Become a Job-Ready Data Analyst in the UK
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            Live, mentor-led Data Analytics + AI training built for UK careers. Master Excel, SQL, Power BI, Python and AI through real projects, then get structured CV, interview, job-search and placement support to help you move into a data role.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-gold min-h-12 px-6 py-3 text-sm sm:min-w-[230px]">
              Book Free Career Consultation
            </Link>
            <Link href="/courses/data-analytics" className="btn-outline btn-outline-white min-h-12 px-6 py-3 text-sm sm:min-w-[230px]">
              Explore Data Analyst Programme
            </Link>
          </div>

          <div className="mt-6 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              "Real Projects",
              "UK Job Preparation",
              "1-to-1 Mentoring",
              "Placement Support",
            ].map((label) => (
              <div key={label} className="border-t border-white/25 pt-4">
                <div className="text-sm font-black leading-5 text-white">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[330px] lg:min-h-[420px]">
          <div className="absolute inset-x-0 bottom-0 mx-auto h-[330px] max-w-[570px] overflow-hidden rounded-b-none rounded-t-[190px] border border-white/10 bg-[#352338] shadow-[0_40px_90px_rgba(0,0,0,0.42)] md:h-[390px] lg:h-[410px]">
            <Image
              src="/hero-person.png"
              alt="Learner preparing for a UK data analyst career with Brit Institute"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 92vw, 620px"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(36,16,31,0.84)_100%)]" />
          </div>
          <div className="absolute bottom-4 left-0 max-w-[240px] rounded-md border border-white/15 bg-white px-4 py-3 text-[#24101f] shadow-2xl md:left-8">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#c45118]">
              <Sparkles size={14} />
              Live online programme
            </div>
            <div className="mt-2 text-xl font-black">Beginner-friendly</div>
            <p className="mt-1 text-sm font-semibold text-[#6f665c]">A structured route from skills to job search.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CareerJourneyStrip() {
  return (
    <section aria-label="Brit Institute career journey" className="bg-[#d95700] px-5 py-7 text-white md:px-8">
      <div className="mx-auto grid max-w-6xl gap-3 text-center sm:grid-cols-5 sm:text-left">
        {["Learn skills", "Build real projects", "Become job ready", "Prepare for interviews", "Get placement support"].map((step, index) => (
          <div key={step} className="flex items-center justify-center gap-3 rounded-md border border-white/20 bg-white/8 px-4 py-3 sm:justify-start">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f5c242] text-xs font-black text-[#24101f]">
              {index + 1}
            </span>
            <span className="text-sm font-black leading-5">{step}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function IntroCardsSection() {
  return (
    <section className="bg-[#f7f3ea] px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <SectionLabel>Career-outcome training</SectionLabel>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Data Analytics Training Built Around Getting Hired
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6f665c] md:text-base">
          Brit Institute combines live training, hands-on projects, mentor feedback and UK career preparation in one structured journey from first skill to job search.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {included.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-md border border-[#ded6c8] bg-white p-5 text-left shadow-[0_18px_45px_rgba(36,26,31,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#24101f] text-[#f5c242]">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6f665c]">{item.text}</p>
                <Link href={item.title.includes("job search") ? "/placement" : "/courses/data-analytics"} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#c45118]">
                  {item.title.includes("job search") ? "Explore placement support" : "Explore the programme"} <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="programs" className="bg-[#746d5c] px-5 py-20 text-white md:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">Explore Data &amp; AI Career Programmes</h2>
          <p className="mt-4 text-sm leading-7 text-white/72">
            Choose the pathway that matches your starting point, the skills you need to prove and the role you want to pursue.
          </p>
        </div>

        <div className="mt-12 rounded-md bg-[#10151c] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:p-7">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f5c242]">Skills + projects + career preparation</p>
              <h3 className="mt-2 text-2xl font-black">Programmes designed to create visible, interview-ready proof</h3>
            </div>
            <Link href="/courses" className="hidden rounded-full bg-[#f5c242] px-5 py-3 text-sm font-black text-[#24101f] md:inline-flex">
              Compare programmes
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {productCards.map((course) => (
              <Link key={course.slug} href={`/courses/${course.slug}`} className="group rounded-md bg-white p-3 text-[#241a1f] transition hover:-translate-y-1">
                <div className="relative h-36 overflow-hidden rounded-md" style={{ background: course.accent }}>
                  <Image src={course.image} alt={course.title} fill className="object-contain p-4 transition group-hover:scale-105" sizes="260px" />
                </div>
                <div className="mt-4 min-h-[150px]">
                  <h4 className="text-base font-black leading-tight">{course.title}</h4>
                  <p className="mt-2 line-clamp-3 text-xs leading-5 text-[#6f665c]">{course.text}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-black uppercase tracking-wide text-[#4f463d]">
                  <span className="rounded-full bg-[#f0eadf] px-3 py-1">{course.duration}</span>
                  <span className="rounded-full bg-[#f0eadf] px-3 py-1">{course.level}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-center text-2xl font-semibold">How learning becomes job readiness</h3>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {[
              ["Define your target", "Choose the programme that fits your role goal and current skill level.", Target],
              ["Build visible proof", "Create practical projects that make interviews easier to navigate.", BookOpenCheck],
              ["Apply with support", "Use CV, LinkedIn, interview, and application guidance to move faster.", Handshake],
            ].map(([title, text, Icon], index) => {
              const TypedIcon = Icon as typeof Target;
              return (
                <article key={title as string} className="rounded-md border border-white/12 bg-[#24101f] p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md" style={{ background: courseAccents[index] }}>
                    <TypedIcon size={22} className="text-white" />
                  </div>
                  <h4 className="text-xl font-black">{title as string}</h4>
                  <p className="mt-3 text-sm leading-7 text-white/68">{text as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CareerChangeBand() {
  return (
    <section className="relative overflow-hidden bg-[#24101f] px-5 py-16 text-white md:px-8">
      <DarkPattern />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <SectionLabel dark>Career changers</SectionLabel>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">Changing Careers into Data Analytics? Start Here</h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
            You do not need to collect disconnected certificates. Start with a role target, build the analyst skills that target requires, create project evidence and prepare a clear career-change story for UK employers.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/career-change-data-analyst-uk" className="btn-gold lg">Read the career-change guide</Link>
            <Link href="/data-analyst-bootcamp-uk" className="btn-outline btn-outline-white">Compare programme formats</Link>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {["Role and skill-gap plan", "Mentor-led learning", "Portfolio project evidence", "CV and interview preparation"].map((item) => (
            <div key={item} className="rounded-md border border-white/12 bg-white/8 p-5 text-sm font-black leading-6">
              <CheckCircle2 className="mb-4 text-[#f5c242]" size={22} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureSuite() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ea] px-5 py-20 md:px-8 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 opacity-25"
        style={{
          background:
            "repeating-conic-gradient(from 0deg at 50% 0%, rgba(36,26,31,0.18) 0deg 0.45deg, transparent 0.45deg 2.2deg)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">Excel, SQL, Power BI, Python and AI — One Career Programme</h2>
          <p className="mt-5 text-sm leading-7 text-[#6f665c] md:text-base">
            Learn the tools together in a connected analyst workflow, then turn that workflow into projects and interview evidence.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {featureRows.map((feature, index) => (
            <div key={feature.title} className={`grid gap-10 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <SectionLabel>{feature.eyebrow}</SectionLabel>
                <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-tight">{feature.title}</h3>
                <p className="mt-5 max-w-xl text-sm leading-7 text-[#6f665c] md:text-base">{feature.text}</p>
                <ul className="mt-6 space-y-3">
                  {feature.checks.map((check) => (
                    <li key={check} className="flex gap-3 text-sm font-semibold text-[#493f37]">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-[#7c9a4f]" size={18} />
                      {check}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-md border border-[#ded6c8] bg-white p-4 shadow-[0_22px_55px_rgba(36,26,31,0.08)]">
                <div className="relative h-[300px] overflow-hidden rounded-md md:h-[360px]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className={feature.image === "/hero-person.png" ? "object-cover" : "object-contain"}
                    sizes="(max-width: 1024px) 90vw, 520px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CohortCTA() {
  return (
    <section className="relative overflow-hidden bg-[#24101f] px-5 py-20 text-center text-white md:px-8">
      <DarkPattern />
      <div className="relative z-10 mx-auto max-w-2xl">
        <SectionLabel dark>Career journey</SectionLabel>
        <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">From Training to Interviews and Placement Support</h2>
        <p className="mt-5 text-sm leading-7 text-white/72 md:text-base">
          Follow a structured route through technical training, portfolio review, CV and LinkedIn preparation, mock interviews, job-search planning and continued placement support.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/placement" className="btn-gold lg">How Placement Support Works</Link>
          <Link href="/contact" className="btn-outline btn-outline-white">Book Free Career Consultation</Link>
        </div>
      </div>
    </section>
  );
}

function ReviewEvidenceStrip() {
  return (
    <section className="bg-[#cfe0ff] px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#4d617f]">Review the evidence</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#24101f]">See learner stories and the projects completed during the programme</h2>
        </div>
        <Link href="/reviews" className="shrink-0 rounded-full bg-[#24101f] px-6 py-3 text-sm font-black text-white">
          View Success Stories
        </Link>
      </div>
    </section>
  );
}

function PortfolioGrid() {
  return (
    <section className="bg-[#f7f3ea] px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <SectionLabel>Portfolio-first learning</SectionLabel>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">Real Projects That Become Your Interview Portfolio</h2>
          <p className="mt-5 text-sm leading-7 text-[#6f665c] md:text-base">
            Each project is designed to help you explain the business question, the tools you used, the decisions you made and the result you produced.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["Executive Power BI dashboard", "Clean and model a business dataset, define useful KPIs and present a clear decision-ready dashboard."],
            ["SQL business case", "Query linked tables, test assumptions and turn analysis into concise recommendations for a stakeholder."],
            ["Python and AI analyst workflow", "Use Python and applied AI responsibly to automate part of an analysis while documenting your checks."],
          ].map(([title, text], index) => (
            <article
              key={title}
              className="rounded-md p-6 text-white shadow-[0_18px_45px_rgba(36,26,31,0.08)]"
              style={{ background: index === 0 ? "#3250b5" : index === 1 ? "#24101f" : "#d95700" }}
            >
              <BarChart3 size={26} className="text-[#f5c242]" />
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/82">{text}</p>
            </article>
          ))}
        </div>
        <Link href="/courses/data-analytics#projects" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-[#c45118]">
          Explore Data Analytics portfolio projects <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

function OutcomeProcessBand() {
  return (
    <section className="bg-[#d95700] px-5 py-10 text-white md:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 text-center md:grid-cols-3 md:text-left">
        {[
          ["Learn", "Live technical training and guided practice"],
          ["Build", "Portfolio projects with mentor feedback"],
          ["Apply", "Interview, job-search and placement support"],
        ].map(([value, label]) => (
          <div key={label} className="md:border-r md:border-white/25 md:last:border-r-0">
            <div className="text-3xl font-black md:text-4xl">{value}</div>
            <div className="mt-1 text-sm font-bold text-white/78">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalDarkCTA() {
  return (
    <section id="final-cta" className="relative overflow-hidden bg-[#24101f] px-5 py-20 text-center text-white md:px-8">
      <DarkPattern />
      <div className="relative z-10 mx-auto max-w-3xl">
        <SectionLabel dark>Career support after training</SectionLabel>
        <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">How Brit Institute Placement Support Works</h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
          Build the skills first, then work through portfolio review, CV and LinkedIn optimisation, interview preparation, job-search planning and continued placement support under the applicable programme terms.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="btn-gold lg">
            Book Free Career Consultation
          </Link>
          <Link href="/placement" className="btn-outline btn-outline-white">
            Explore Placement Support
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            [GraduationCap, "Live classes"],
            [BarChart3, "Projects"],
            [FileText, "Certificate"],
            [LineChart, "Career prep"],
            [Users, "Mentors"],
            [Trophy, "Portfolio"],
            [Clock3, "Flexible"],
            [MessageCircle, "Support"],
          ].map(([Icon, label]) => {
            const TypedIcon = Icon as typeof GraduationCap;
            return (
              <div key={label as string} className="flex items-center gap-2 rounded-full border border-white/12 bg-white px-3 py-2 text-xs font-black text-[#24101f]">
                <TypedIcon size={14} className="text-[#d95700]" />
                {label as string}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
