"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  GraduationCap,
  Handshake,
  LineChart,
  MessageCircle,
  Route,
  Sparkles,
  UserCheck,
} from "lucide-react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import TopBanner from "@/components/layout/TopBanner";

const audienceCards = [
  {
    title: "Complete beginner",
    text: "Start with Excel, data cleaning, dashboards, SQL basics, and business reporting.",
    icon: GraduationCap,
  },
  {
    title: "Non-technical background",
    text: "Build confidence with practical tools, real business cases, and clear project explanations.",
    icon: UserCheck,
  },
  {
    title: "Career switcher",
    text: "Connect your previous experience with portfolio work for data, AI, and automation roles.",
    icon: Route,
  },
  {
    title: "Already working",
    text: "Use data and AI skills to strengthen your current profile and move toward higher-value work.",
    icon: BriefcaseBusiness,
  },
];

const careerDirections = [
  {
    title: "Data Analytics",
    fit: "Best first step for beginners.",
    text: "Excel, SQL, Power BI, dashboards, reporting, and business insights.",
    accent: "#f5c242",
    icon: BarChart3,
  },
  {
    title: "Business Intelligence",
    fit: "For KPI and dashboard thinkers.",
    text: "Reporting systems, executive dashboards, stakeholder questions, and decision support.",
    accent: "#97c266",
    icon: LineChart,
  },
  {
    title: "Data Science",
    fit: "For learners ready to go deeper.",
    text: "Python, statistics, machine learning, notebooks, and model interpretation.",
    accent: "#cfe0ff",
    icon: BrainCircuit,
  },
  {
    title: "AI & Automation",
    fit: "For workflow builders.",
    text: "AI tools, automation workflows, responsible AI use, and productivity systems.",
    accent: "#f26722",
    icon: Sparkles,
  },
];

const employerSignals = [
  "Understand a business problem",
  "Clean messy data",
  "Build useful dashboards",
  "Write basic SQL queries",
  "Explain insights clearly",
  "Present project evidence",
];

const portfolioProjects = [
  "Sales performance dashboard",
  "HR analytics report",
  "Customer behaviour analysis",
  "SQL business case study",
  "Python data cleaning project",
  "AI automation workflow",
];

const readinessGaps = [
  "No portfolio",
  "Weak project explanation",
  "Generic CV",
  "Unclear LinkedIn profile",
  "No interview practice",
  "Wrong role targeting",
];

const myths = [
  ["You need to be a coding expert", "Many entry roles begin with Excel, SQL, dashboards, and business analysis."],
  ["Only computer science graduates can enter", "Business, finance, operations, marketing, and healthcare backgrounds can transition."],
  ["A certificate is enough", "Employers want practical projects, problem-solving ability, and confident communication."],
  ["AI will replace every data role", "AI changes the work, but increases demand for people who can use data and AI well."],
];

const supportItems = [
  [FileText, "CV and LinkedIn", "Shape your profile around target roles, practical skill, and portfolio proof."],
  [BookOpenCheck, "Portfolio structure", "Build projects you can explain clearly in interviews and applications."],
  [MessageCircle, "Interview practice", "Prepare project walkthroughs, common questions, and confident role stories."],
  [Handshake, "Role guidance", "Understand which UK roles match your background, current level, and timeline."],
];

const ninetyDayPlan = [
  ["1", "Polish proof", "Finalise 3 to 5 portfolio projects and prepare short walkthroughs."],
  ["2", "Sharpen profile", "Improve CV, LinkedIn, GitHub, and project summaries for target roles."],
  ["3", "Apply with rhythm", "Track applications, practise interview questions, and improve from feedback."],
];

function DarkPattern({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-45 ${className}`}
      style={{
        background:
          "radial-gradient(circle at 48% 38%, rgba(245,194,66,0.16), transparent 32%), repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 0 1px, transparent 1px 18px)",
      }}
    />
  );
}

function SectionLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`text-xs font-black uppercase tracking-[0.28em] ${dark ? "text-[#f5c242]" : "text-[#c45118]"}`}>
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <SectionLabel dark={dark}>{eyebrow}</SectionLabel> : null}
      <h2 className={`mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl ${dark ? "text-white" : "text-[#241a1f]"}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 text-sm leading-7 md:text-base ${dark ? "text-white/72" : "text-[#6f665c]"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

export default function CareersPageClient() {
  const [banner, setBanner] = useState(true);

  return (
    <main className="bg-[#f7f3ea] text-[#241a1f]">
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />

      <HeroSection banner={banner} />
      <CareerConfusionSection />
      <AudienceSection />
      <PathSelectorSection />
      <EmployerExpectationSection />
      <PortfolioSection />
      <ReadinessGapSection />
      <MythsSection />
      <CareerSupportSection />
      <NinetyDaysSection />
      <FinalCTASection />

      <Footer />
    </main>
  );
}

function HeroSection({ banner }: { banner: boolean }) {
  return (
    <section
      className="relative overflow-hidden px-5 text-center text-white md:px-8"
      style={{
        paddingTop: banner ? "166px" : "126px",
        paddingBottom: "86px",
        background:
          "linear-gradient(135deg, rgba(36,16,31,.98), rgba(22,9,20,.98)), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,.045) 1px, transparent 1px)",
        backgroundSize: "auto, 44px 44px, 44px 44px",
      }}
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(212,175,55,.56),transparent)]" />

      <div className="relative z-10 mx-auto max-w-[960px]">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.8rem] font-extrabold tracking-[0.04em] text-white/80 backdrop-blur">
          <Route size={16} aria-hidden="true" />
          Career guidance for data, AI and automation roles
        </div>
        <h1 className="mx-auto max-w-4xl text-[2.15rem] font-black leading-[1.04] tracking-normal md:text-[4.35rem]">
          Build a career in <span className="text-[#f5c242]">Data, AI and Automation</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[720px] text-base leading-8 text-white/70 md:text-lg">
          Map your route from your current background to practical projects, interview confidence, and the right UK career direction.
        </p>

        <div className="mx-auto mt-10 grid max-w-[760px] gap-3 sm:grid-cols-3" aria-label="Career guidance highlights">
          <div className="rounded-md border border-white/15 bg-white/[0.07] p-4 text-left">
            <strong className="block text-xl leading-tight text-white">4 paths</strong>
            <span className="mt-1 block text-sm leading-5 text-white/65">data, BI, science and AI routes</span>
          </div>
          <div className="rounded-md border border-white/15 bg-white/[0.07] p-4 text-left">
            <strong className="block text-xl leading-tight text-white">Portfolio proof</strong>
            <span className="mt-1 block text-sm leading-5 text-white/65">projects that make skills visible</span>
          </div>
          <div className="rounded-md border border-white/15 bg-white/[0.07] p-4 text-left">
            <strong className="block text-xl leading-tight text-white">UK focused</strong>
            <span className="mt-1 block text-sm leading-5 text-white/65">role guidance and interview support</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CareerConfusionSection() {
  return (
    <section className="bg-[#f7f3ea] px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Not sure where to start?"
          title="Career confusion usually starts before the first lesson."
          text="Most learners do not struggle because information is missing. They struggle because they do not know what to learn first, which projects matter, and how to explain their skills to employers."
          align="left"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["What should I learn first?", "A sequenced roadmap beats random tutorials."],
            ["Which roles fit me?", "Your background should shape the target path."],
            ["What projects should I build?", "Proof needs to match real employer questions."],
            ["How do I apply confidently?", "CV, LinkedIn, interviews, and role selection need practice."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-md border border-[#ded6c8] bg-white p-5 shadow-[0_18px_45px_rgba(36,26,31,0.06)]">
              <CheckCircle2 className="text-[#7c9a4f]" size={22} />
              <h3 className="mt-4 text-lg font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#6f665c]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="bg-[#cfe0ff] px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Your starting point matters"
          title="The right career plan depends on where you begin."
          text="A beginner, career switcher, coder, and working professional should not all follow the same route."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {audienceCards.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-md bg-white p-6 shadow-[0_18px_45px_rgba(36,26,31,0.08)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#24101f] text-[#f5c242]">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4d617f]">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PathSelectorSection() {
  return (
    <section className="bg-[#746d5c] px-5 py-20 text-white md:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Choose your career direction"
          title="Pick the route that matches your target role."
          text="Brit Institute helps learners choose a realistic path before months are lost on the wrong material."
          dark
        />

        <div className="mt-12 rounded-md bg-[#10151c] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:p-7">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {careerDirections.map((path) => {
              const Icon = path.icon;
              return (
                <Link key={path.title} href="/courses" className="group rounded-md bg-white p-4 text-[#241a1f] transition hover:-translate-y-1">
                  <div className="flex h-36 items-center justify-center rounded-md" style={{ background: path.accent }}>
                    <Icon size={46} className={path.accent === "#cfe0ff" ? "text-[#24101f]" : "text-white"} />
                  </div>
                  <div className="mt-5 min-h-[154px]">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c45118]">{path.fit}</p>
                    <h3 className="mt-2 text-xl font-black">{path.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#6f665c]">{path.text}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#c45118]">
                    View course options <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function EmployerExpectationSection() {
  return (
    <section className="relative overflow-hidden bg-[#24101f] px-5 py-20 text-white md:px-8 lg:py-24">
      <DarkPattern />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeading
          eyebrow="Employer expectation"
          title="UK employers look for evidence, not just tool names."
          text="A strong candidate can understand the problem, prepare the data, build a useful output, and explain the business value clearly."
          align="left"
          dark
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {employerSignals.map((signal) => (
            <div key={signal} className="flex items-center gap-3 rounded-md border border-white/12 bg-white px-4 py-4 text-[#24101f]">
              <CheckCircle2 className="shrink-0 text-[#7c9a4f]" size={20} />
              <span className="text-sm font-black">{signal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section className="bg-[#f7f3ea] px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="rounded-md border border-[#ded6c8] bg-white p-4 shadow-[0_22px_55px_rgba(36,26,31,0.08)]">
          <div className="relative h-[320px] overflow-hidden rounded-md bg-[#efe8dc] md:h-[390px]">
            <Image
              src="/da-Photoroom.png"
              alt="Data analytics portfolio project"
              fill
              className="object-contain p-8"
              sizes="(max-width: 1024px) 90vw, 520px"
            />
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Portfolio proof"
            title="From learning to work you can show."
            text="A strong data career starts with proof. Learners should be able to show what they built, why it matters, and how they solved the problem."
            align="left"
          />
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {portfolioProjects.map((project) => (
              <div key={project} className="rounded-md border border-[#ded6c8] bg-white px-4 py-3 text-sm font-bold text-[#493f37]">
                {project}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReadinessGapSection() {
  return (
    <section className="bg-[#d95700] px-5 py-16 text-white md:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <SectionLabel dark>Career readiness gap</SectionLabel>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">Certificates alone rarely make learners interview-ready.</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {readinessGaps.map((gap) => (
            <div key={gap} className="rounded-md bg-white px-4 py-4 text-sm font-black text-[#24101f] shadow-[0_16px_36px_rgba(36,26,31,0.12)]">
              {gap}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MythsSection() {
  return (
    <section className="bg-[#f0eadf] px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Myths vs reality"
          title="A clearer view of data and AI careers."
          text="The goal is to remove the common doubts that stop capable learners from starting."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {myths.map(([myth, reality]) => (
            <article key={myth} className="rounded-md border border-[#ded6c8] bg-white p-6 shadow-[0_18px_45px_rgba(36,26,31,0.06)]">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c45118]">Myth</p>
              <h3 className="mt-2 text-xl font-black">{myth}</h3>
              <p className="mt-5 text-xs font-black uppercase tracking-[0.22em] text-[#7c9a4f]">Reality</p>
              <p className="mt-2 text-sm leading-7 text-[#6f665c]">{reality}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerSupportSection() {
  return (
    <section className="bg-[#24101f] px-5 py-20 text-white md:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Career support"
          title="Support beyond the classroom."
          text="The aim is not just to complete a course. The aim is to become confident enough to apply, interview, and keep improving."
          dark
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {supportItems.map(([Icon, title, text]) => {
            const TypedIcon = Icon as typeof FileText;
            return (
              <article key={title as string} className="rounded-md border border-white/12 bg-white p-6 text-[#24101f]">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#f5c242] text-[#24101f]">
                  <TypedIcon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-black">{title as string}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6f665c]">{text as string}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function NinetyDaysSection() {
  return (
    <section className="bg-[#cfe0ff] px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="First 90 days after training"
          title="A simple transition plan for the job search."
          text="The first 90 days after training should turn learning into visible proof, stronger applications, and better interview confidence."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {ninetyDayPlan.map(([step, title, text]) => (
            <article key={title} className="rounded-md bg-white p-6 shadow-[0_18px_45px_rgba(36,26,31,0.08)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#24101f] text-xl font-black text-[#f5c242]">
                {step}
              </div>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#4d617f]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#24101f] px-5 py-20 text-center text-white md:px-8">
      <DarkPattern />
      <div className="relative z-10 mx-auto max-w-3xl">
        <SectionLabel dark>Free career guidance</SectionLabel>
        <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">Book a Free Career Guidance Call</h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
          Talk through your background, target roles, and best-fit training route before choosing a programme.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="btn-gold lg">
            Book Free Career Guidance Call
          </Link>
          <Link href="/courses" className="btn-outline btn-outline-white">
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
