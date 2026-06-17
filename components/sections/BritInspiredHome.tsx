"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  FileText,
  GraduationCap,
  Handshake,
  LineChart,
  MessageCircle,
  MonitorPlay,
  Sparkles,
  Star,
  Target,
  Trophy,
  UserCheck,
  Users,
} from "lucide-react";

import { coursesData } from "@/app/courses/[slug]/courseData";
import { SITE_STATS } from "@/lib/site";

const companyLogos = [
  "Accenture.webp",
  "DataBricks logo.webp",
  "HSBC logo.webp",
  "nvidia.webp",
  "snowflake.webp",
  "monzo.webp",
  "Sky logo.webp",
  "wise.webp",
];

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
    title: "Live, guided classes",
    text: "Weekly expert sessions with practical demos, walkthroughs, and replay access.",
  },
  {
    icon: UserCheck,
    title: "1-to-1 mentor support",
    text: "Progress reviews, doubt clearing, and feedback that keeps your study plan moving.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career readiness",
    text: "CV, LinkedIn, portfolio, interview prep, and UK job-search guidance.",
  },
];

const featureRows = [
  {
    eyebrow: "Courses built to perform",
    title: "Turn learning into portfolio proof.",
    text: "Each programme is organised around practical assignments, dashboards, AI workflows, notebooks, and capstone projects you can discuss with employers.",
    image: "/da-Photoroom.png",
    checks: ["Project briefs based on real business tasks", "Mentor review before portfolio submission", "Tools mapped to UK data and AI job descriptions"],
  },
  {
    eyebrow: "Communities built to belong",
    title: "Study with structure, not guesswork.",
    text: "Learners get a visible path from first module to final interview prep, with checkpoints that make progress easy to understand.",
    image: "/certificate-signed.png",
    checks: ["Weekly learning rhythm", "Progress reviews and accountability", "Career support layered into the course"],
  },
  {
    eyebrow: "Built for exit outcomes",
    title: "Prepare for the roles you actually want.",
    text: "The experience connects skills to target roles across analytics, data science, AI automation, and generative AI.",
    image: "/hero-person.png",
    checks: ["Role-based guidance", "Mock interview practice", "Application and salary conversation support"],
  },
];

const testimonials = [
  {
    name: "Olivia Carter",
    role: "Business Analyst, London",
    image: "/testimonials/emma-thompson.webp",
    quote: "The projects gave me clear proof of what I could do. I finally felt ready to talk about analytics in interviews.",
  },
  {
    name: "Karan Patel",
    role: "Operations Manager, Leeds",
    image: "/testimonials/ankit-verma.jpg",
    quote: "I moved from Excel-heavy reporting to confident Power BI dashboards and better business conversations.",
  },
  {
    name: "Priya Nair",
    role: "Analytics Intern, Leeds",
    image: "/testimonials/neha-kulkarni.jpg",
    quote: "Brit Institute simplified complex topics and helped me build the confidence to apply for my first analytics role.",
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
      <LogoTrustSection />
      <IntroCardsSection />
      <ProductsSection />
      <ProofBand />
      <FeatureSuite />
      <CohortCTA />
      <TestimonialStrip />
      <SuccessGrid />
      <StatsBand />
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
          <SectionLabel dark>Brit Institute</SectionLabel>
          <h1 className="mt-3 max-w-2xl text-4xl font-black leading-[0.98] tracking-tight md:text-[52px] lg:text-[60px]">
            Powering the world's next data and AI careers
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            Practical UK-focused programmes for learners who want portfolio proof, mentor support, and a clear path into analytics, data science, and AI roles.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-gold min-h-12 px-6 py-3 text-sm sm:min-w-[230px]">
              Book Free Consultation
            </Link>
            <Link href="/courses" className="btn-outline btn-outline-white min-h-12 px-6 py-3 text-sm sm:min-w-[176px]">
              Explore Courses
            </Link>
          </div>

          <div className="mt-6 grid max-w-2xl grid-cols-3 gap-3">
            {[
              [SITE_STATS.learnersTrained, "learners"],
              [`${SITE_STATS.averageRating}/5`, "rating"],
              [SITE_STATS.hiringPartners, "partners"],
            ].map(([value, label]) => (
              <div key={label} className="border-t border-white/25 pt-4">
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-white/55">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[330px] lg:min-h-[420px]">
          <div className="absolute inset-x-0 bottom-0 mx-auto h-[330px] max-w-[570px] overflow-hidden rounded-b-none rounded-t-[190px] border border-white/10 bg-[#352338] shadow-[0_40px_90px_rgba(0,0,0,0.42)] md:h-[390px] lg:h-[410px]">
            <Image
              src="/hero-person.png"
              alt="Brit Institute learners in London"
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
              Next intake
            </div>
            <div className="mt-2 text-xl font-black">30 June 2026</div>
            <p className="mt-1 text-sm font-semibold text-[#6f665c]">Live, mentor-led cohorts now open.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoTrustSection() {
  return (
    <section className="bg-[#f7f3ea] px-5 py-12 md:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.26em] text-[#7a7064]">
          Trusted by learners targeting roles across leading UK employers
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-5 sm:grid-cols-4 lg:grid-cols-8">
          {companyLogos.map((logo) => (
            <div key={logo} className="flex h-12 items-center justify-center">
              <Image
                src={`/companies/${encodeURIComponent(logo)}`}
                alt={logo.replace(/\.webp$/i, "").replace(/\s+logo/i, "")}
                width={130}
                height={42}
                className="max-h-9 w-auto grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntroCardsSection() {
  return (
    <section className="bg-[#f7f3ea] px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <SectionLabel>Learning platform</SectionLabel>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Learning experiences that convert ambition into career-ready skill.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6f665c] md:text-base">
          Brit Institute combines structured courses, hands-on projects, mentor feedback, and career support into a single journey.
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
                <Link href="/courses" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#c45118]">
                  View details <ArrowRight size={16} />
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
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">The right learning products for your outcomes</h2>
          <p className="mt-4 text-sm leading-7 text-white/72">
            Pick the route that matches your starting point and target role.
          </p>
        </div>

        <div className="mt-12 rounded-md bg-[#10151c] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:p-7">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f5c242]">What's included?</p>
              <h3 className="mt-2 text-2xl font-black">Courses, mentorship, portfolio work, and career support</h3>
            </div>
            <Link href="/courses" className="hidden rounded-full bg-[#f5c242] px-5 py-3 text-sm font-black text-[#24101f] md:inline-flex">
              View all
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
          <h3 className="text-center text-2xl font-semibold">How learners win with Brit Institute</h3>
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

function ProofBand() {
  return (
    <section className="relative overflow-hidden bg-[#24101f] px-5 py-16 text-white md:px-8">
      <DarkPattern />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            ["Top rated", "4.8/5"],
            ["Portfolio", "Projects"],
            ["Career", "Support"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-md border border-white/12 bg-white p-5 text-center text-[#24101f]">
              <Award className="mx-auto text-[#c45118]" size={28} />
              <div className="mt-3 text-2xl font-black">{value}</div>
              <div className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-[#7a7064]">{label}</div>
            </div>
          ))}
        </div>
        <div>
          <SectionLabel dark>The results speak</SectionLabel>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">The proof stack for career change.</h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
            Learners leave with certificates, practical work, mentor feedback, and a stronger story for UK data and AI interviews.
          </p>
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
          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">Brit Institute's stand-out suite of features</h2>
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
                <div className="relative h-[300px] overflow-hidden rounded-md bg-[#efe8dc] md:h-[360px]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className={feature.image === "/hero-person.png" ? "object-cover" : "object-contain p-6"}
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
        <SectionLabel dark>Admissions open</SectionLabel>
        <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">Launch in 30 days with zero setup stress.</h2>
        <p className="mt-5 text-sm leading-7 text-white/72 md:text-base">
          Speak with an advisor, pick your course, and join the next guided cohort with a clear study plan.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/apply" className="btn-gold lg">Apply Now</Link>
          <Link href="/contact" className="btn-outline btn-outline-white">Book Free Counselling</Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialStrip() {
  return (
    <section className="bg-[#cfe0ff] px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center md:flex-row md:text-left">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-xl">
          <Image src="/testimonials/benjamin-hughes.webp" alt="Brit Institute learner" fill className="object-cover" sizes="112px" />
        </div>
        <blockquote className="text-lg font-semibold leading-8 text-[#24101f] md:text-xl">
          "Brit Institute gave me structure, practical projects, and the confidence to explain my work clearly in interviews."
          <footer className="mt-4 text-sm font-black uppercase tracking-[0.2em] text-[#4d617f]">William Foster, Financial Analyst</footer>
        </blockquote>
      </div>
    </section>
  );
}

function SuccessGrid() {
  return (
    <section className="bg-[#f7f3ea] px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">Join the ranks of leading learning success stories</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((story, index) => (
            <article
              key={story.name}
              className="rounded-md p-6 text-white shadow-[0_18px_45px_rgba(36,26,31,0.08)]"
              style={{ background: index === 0 ? "#3250b5" : index === 1 ? "#24101f" : "#d95700" }}
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white/70">
                  <Image src={story.image} alt={story.name} fill className="object-cover" sizes="56px" />
                </div>
                <div>
                  <h3 className="font-black">{story.name}</h3>
                  <p className="text-xs font-semibold text-white/70">{story.role}</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/82">{story.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="bg-[#d95700] px-5 py-10 text-white md:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 text-center md:grid-cols-3 md:text-left">
        {[
          ["The best businesses", "build on practical skill"],
          [SITE_STATS.learnersTrained, "learners trained"],
          [SITE_STATS.hiringPartners, "hiring partner network"],
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
        <SectionLabel dark>Courses. Community. Career.</SectionLabel>
        <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">We do practical learning better.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
          Build the skills, proof, and confidence to pursue your next role in data, analytics, and AI.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="btn-gold lg">
            Book Free Consultation
          </Link>
          <Link href="/courses" className="btn-outline btn-outline-white">
            Compare Courses
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
