"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  FileDown,
  Handshake,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Target,
  Trophy,
  UserCheck,
} from "lucide-react";
import useReveal from "@/hooks/useReveal";

const benefits = [
  { icon: UserCheck, title: "1-to-1 Mentorship", text: "Weekly guidance to clear doubts, review progress, and keep your learning focused." },
  { icon: BookOpenCheck, title: "Project-Based Learning", text: "Build dashboards, automation workflows, and portfolio-ready case studies." },
  { icon: BriefcaseBusiness, title: "UK Career Support", text: "CV, LinkedIn, interview practice, and job-search strategy for the UK market." },
  { icon: Award, title: "Professional Certificate", text: "Finish with a certificate and proof of practical work you can discuss with employers." },
  { icon: BarChart3, title: "Tools Employers Use", text: "Learn SQL, Excel, Power BI, Python, AI tools, and analytics workflows." },
  { icon: Handshake, title: "Placement Guidance", text: "Get structured support from profile building to applications and interview readiness." },
];

const salaries = [
  ["Junior Data Analyst", "GBP 28,000 - 35,000"],
  ["BI Analyst", "GBP 38,000 - 50,000"],
  ["Senior Data Analyst", "GBP 50,000 - 65,000"],
  ["Reporting Analyst", "GBP 30,000 - 50,000"],
];

const programmes = [
  ["Data Analytics", "Best for beginners, business graduates, Excel users, and career switchers."],
  ["Data Science, ML & AI", "Best for learners who want Python, modelling, and machine learning roles."],
  ["Applied AI & Automation", "Best for professionals who want to automate workflows with modern AI tools."],
  ["Full Stack Development", "Best for learners who want to build web apps and software products."],
];

const blogIdeas = [
  "How to Become a Data Analyst in the UK",
  "Power BI vs Tableau for Career Switchers",
  "Best AI Tools Every Analyst Should Learn",
];

function SectionHeader({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <header className="mx-auto mb-12 max-w-3xl text-center">
      <p className={`mb-3 text-xs font-extrabold uppercase tracking-[0.28em] ${dark ? "text-[var(--gold-400)]" : "text-[var(--blue-600)]"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-extrabold tracking-tight md:text-5xl ${dark ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 md:text-lg ${dark ? "text-white/72" : "text-slate-600"}`}>
        {text}
      </p>
    </header>
  );
}

export function AboutTrust() {
  const { revealRef, cls } = useReveal();

  return (
    <section ref={revealRef} className="relative overflow-hidden bg-white px-5 py-20 text-slate-950 md:px-8 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className={`mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center ${cls}`}>
        <div>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.28em] text-[var(--blue-600)]">About Brit Institute</p>
          <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
            Practical learning for serious UK career growth.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Brit Institute helps learners move from confusion to career clarity with live learning, mentor guidance, real projects, and practical tools employers actually ask for.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {["Industry-led sessions", "Personalised guidance", "Career-focused projects", "UK job-readiness support"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800">
                <CheckCircle2 size={18} className="text-emerald-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-md border border-slate-200 bg-slate-950 p-4 shadow-[0_28px_70px_rgba(15,23,42,0.18)] md:p-5">
            <div className="rounded-md border border-white/10 bg-[#0B1220] p-5 text-white">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--gold-400)]">Learner cockpit</p>
                  <h3 className="mt-2 text-xl font-black">Career readiness tracker</h3>
                </div>
                <div className="rounded-md bg-emerald-400/10 px-3 py-2 text-xs font-black text-emerald-300">Live support</div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Mentor reviews", "92% complete"],
                  ["Portfolio projects", "4 submitted"],
                  ["Interview prep", "3 sessions"],
                  ["Applications", "18 tracked"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-sm font-bold text-white/65">{label}</div>
                    <div className="mt-2 text-2xl font-black text-white">{value}</div>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-[var(--gold-400)]" style={{ width: label === "Applications" ? "68%" : "84%" }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-4">
                {[
                  ["150+", "partners"],
                  ["4.8/5", "rating"],
                  ["847+", "trained"],
                  ["Live", "mentor"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-md bg-white px-3 py-4 text-center text-slate-950">
                    <div className="text-2xl font-black text-[var(--blue-600)]">{value}</div>
                    <div className="mt-1 text-xs font-extrabold uppercase tracking-wide text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BenefitsGrid() {
  const { revealRef, cls } = useReveal();

  return (
    <section ref={revealRef} className="bg-slate-50 px-5 py-20 md:px-8 lg:py-24">
      <div className={`mx-auto max-w-7xl ${cls}`}>
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-[var(--blue-600)]">What You Get</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Learn with structure, mentorship, and proof of skill.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            A clear weekly experience with mentor support, practical projects, career preparation, and visible outcomes from week to week.
          </p>
        </div>
        <div className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            const featured = index === 0 || index === 1;
            return (
              <article
                key={item.title}
                className={`group rounded-md border p-7 transition duration-300 hover:-translate-y-1 ${
                  featured
                    ? "border-slate-800 bg-slate-950 text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] lg:col-span-2"
                    : "border-slate-200 bg-white text-slate-950 shadow-[0_16px_36px_rgba(15,23,42,0.07)]"
                }`}
              >
                <div className={`mb-7 flex h-12 w-12 items-center justify-center rounded-md ${featured ? "bg-[var(--gold-400)] text-slate-950" : "bg-[var(--blue-600)] text-white"}`}>
                  <Icon size={23} />
                </div>
                <h3 className={`text-xl font-extrabold ${featured ? "text-white" : "text-slate-950"}`}>{item.title}</h3>
                <p className={`mt-3 text-sm leading-7 ${featured ? "text-white/70" : "text-slate-600"}`}>{item.text}</p>
                {featured && (
                  <div className="mt-7 h-1.5 rounded-full bg-white/10">
                    <div className="h-1.5 w-3/4 rounded-full bg-[var(--gold-400)] transition-all duration-300 group-hover:w-full" />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CareerOutcomes() {
  const { revealRef, cls } = useReveal();

  return (
    <section ref={revealRef} className="bg-[#070B14] px-5 py-20 text-white md:px-8 lg:py-24">
      <div className={`mx-auto max-w-7xl ${cls}`}>
        <SectionHeader dark eyebrow="Career Outcomes" title="Show learners the destination before they apply." text="Help visitors connect each programme to real UK roles, market demand, and salary potential." />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="overflow-hidden rounded-md border border-white/10 bg-white/[0.04]">
            {salaries.map(([role, salary]) => (
              <div key={role} className="grid gap-2 border-b border-white/10 px-6 py-5 last:border-b-0 sm:grid-cols-2">
                <div className="font-bold text-white">{role}</div>
                <div className="font-extrabold text-[var(--gold-400)] sm:text-right">{salary}</div>
              </div>
            ))}
          </div>
          <div className="grid gap-4">
            {[
              { icon: LineChart, value: "24,000+", label: "active UK data and analytics openings" },
              { icon: Target, value: "18%", label: "projected growth across data-focused roles" },
              { icon: MapPin, value: "London, Manchester, Leeds", label: "popular hiring locations" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.value} className="rounded-md border border-white/10 bg-white/[0.04] p-6">
                  <Icon className="mb-4 text-[var(--gold-400)]" size={24} />
                  <div className="text-2xl font-black">{item.value}</div>
                  <p className="mt-2 text-sm leading-6 text-white/68">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CertificateAndChooser() {
  const { revealRef, cls } = useReveal();

  return (
    <section ref={revealRef} className="bg-white px-5 py-20 md:px-8 lg:py-24">
      <div className={`mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] ${cls}`}>
        <div className="rounded-md border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
          <div className="mb-8 flex items-center gap-3">
            <Trophy className="text-[var(--gold-400)]" />
            <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--gold-400)]">Certificate Preview</span>
          </div>
          <div className="rounded-md border border-[var(--gold-400)]/35 bg-white p-7 text-slate-950">
            <div className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Brit Institute</div>
            <h3 className="mt-8 text-3xl font-black">Professional Certificate</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Awarded for completing practical projects, mentor-reviewed assignments, and career-readiness milestones.
            </p>
            <div className="mt-10 border-t border-slate-200 pt-5 text-sm font-bold text-slate-700">AI & Data Career Programme</div>
          </div>
          <Link href="/contact" className="btn-gold mt-7 inline-flex items-center gap-2">
            <FileDown size={18} />
            Get Curriculum PDF
          </Link>
        </div>
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-[var(--blue-600)]">Programme Finder</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">Which path is right for you?</h2>
          <div className="mt-8 grid gap-4">
            {programmes.map(([title, text]) => (
              <Link key={title} href="/courses" className="group flex items-center justify-between gap-5 rounded-md border border-slate-200 bg-slate-50 p-5 transition hover:border-[var(--gold-400)] hover:bg-white">
                <div>
                  <h3 className="font-extrabold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
                <ArrowRight className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-[var(--gold-600)]" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PlacementJourney() {
  const { revealRef, cls } = useReveal();
  const steps = [
    ["Week 1", "Career profile audit", "Identify target roles, skills gaps, and the best learning path."],
    ["Mid-course", "Portfolio build", "Create projects that show practical SQL, BI, AI, and analytics ability."],
    ["Final weeks", "Interview readiness", "Mock interviews, CV refinement, and LinkedIn positioning."],
    ["After course", "Application support", "Guidance for job applications, follow-ups, and salary conversations."],
  ];

  return (
    <section ref={revealRef} className="bg-slate-50 px-5 py-20 md:px-8 lg:py-24">
      <div className={`mx-auto max-w-7xl ${cls}`}>
        <SectionHeader eyebrow="Placement Journey" title="A career process learners can picture." text="Turn placement support from a promise into a visible journey from first call to job applications." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([time, title, text]) => (
            <article key={title} className="rounded-md border border-slate-200 bg-white p-6">
              <CalendarCheck className="mb-5 text-[var(--blue-600)]" size={24} />
              <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--gold-600)]">{time}</div>
              <h3 className="mt-3 text-xl font-extrabold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogAndContact() {
  const { revealRef, cls } = useReveal();

  return (
    <section ref={revealRef} className="bg-white px-5 py-20 md:px-8 lg:py-24">
      <div className={`mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 ${cls}`}>
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-[var(--blue-600)]">Latest Updates</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">Keep learners coming back.</h2>
          <div className="mt-8 grid gap-4">
            {blogIdeas.map((title) => (
              <Link key={title} href="/blog" className="group rounded-md border border-slate-200 bg-slate-50 p-5 transition hover:border-[var(--gold-400)] hover:bg-white">
                <h3 className="font-extrabold text-slate-950">{title}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm font-bold text-[var(--blue-600)]">
                  Read article <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="rounded-md bg-[#0a0f1e] p-7 text-white">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-[var(--gold-400)]">Get In Touch</p>
          <h2 className="text-3xl font-extrabold">Speak with an advisor.</h2>
          <p className="mt-4 text-sm leading-7 text-white/70">
            Ask about courses, eligibility, fees, projects, or the best path for your career goal.
          </p>
          <div className="mt-7 grid gap-4">
            {[
              { icon: Mail, text: "support@britinstitute.com" },
              { icon: Phone, text: "+44 204 634 8694" },
              { icon: MapPin, text: "London, United Kingdom" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white/82">
                  <Icon size={18} className="text-[var(--gold-400)]" />
                  {item.text}
                </div>
              );
            })}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-gold inline-flex items-center justify-center gap-2">
              <MessageCircle size={18} />
              Send Message
            </Link>
            <Link href="/contact" className="btn-outline btn-outline-white inline-flex items-center justify-center gap-2">
              <ShieldCheck size={18} />
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
