import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileSearch,
  GraduationCap,
  Handshake,
  MessageCircle,
  SearchCheck,
  UserRoundCheck,
} from "lucide-react";
import CourseLeadForm from "@/app/courses/[slug]/CourseLeadForm";
import Footer from "@/components/layout/Footer";

const journey = [
  { title: "Training", text: "Develop the technical and business skills required for your target role through live, guided learning.", icon: GraduationCap },
  { title: "Portfolio Projects", text: "Build practical work you can show, explain and defend in an interview rather than relying on a certificate alone.", icon: FileSearch },
  { title: "CV & LinkedIn", text: "Position your previous experience, new skills and project evidence for relevant UK data and AI roles.", icon: UserRoundCheck },
  { title: "Interview Preparation", text: "Practise project walkthroughs, technical questions and behavioural answers with structured feedback.", icon: MessageCircle },
  { title: "Job Applications", text: "Build a focused job-search plan and track applications that match your skills, experience and target role.", icon: SearchCheck },
  { title: "Interview Opportunities", text: "Prepare for relevant opportunities identified through your search and any introductions available through the programme.", icon: BriefcaseBusiness },
  { title: "Placement Support", text: "Continue receiving agreed career and placement support while you work through the programme process and eligibility terms.", icon: Handshake },
];

const supportIncludes = [
  "UK-focused CV optimisation",
  "LinkedIn profile optimisation",
  "Portfolio and project-story review",
  "Technical interview practice",
  "Behavioural interview practice",
  "Mock interview feedback",
  "Job-search and application strategy",
  "Application tracking support",
  "Continued placement guidance under programme terms",
];

export default function PlacementPageClient() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#241a1f]">
      <section className="relative overflow-hidden bg-[#24101f] px-5 pb-20 pt-32 text-white md:px-8 md:pb-24">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.2),transparent_34%),radial-gradient(circle_at_10%_90%,rgba(217,87,0,0.2),transparent_32%)]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8 flex gap-2 text-sm font-semibold text-white/60">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Placement Support</span>
          </nav>
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f5c242]">Career support after skills training</p>
            <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">Data Analyst Placement Support in the UK</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76 md:text-xl">
              Move from training and portfolio projects into a structured UK job search with CV, LinkedIn, interview, application and continued placement support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#consultation" className="btn-gold lg">Book Free Career Consultation</Link>
              <Link href="/courses/data-analytics" className="btn-outline btn-outline-white">Explore Data Analyst Programme</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c45118]">The complete career journey</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">From Training to Placement Support</h2>
            <p className="mt-5 text-base leading-8 text-[#6f665c]">
              Placement support works best when it follows evidence of capability. The journey below connects technical learning to the practical steps required to compete for suitable UK roles.
            </p>
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {journey.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="rounded-2xl border border-[#ded6c8] bg-white p-6 shadow-[0_16px_40px_rgba(36,26,31,0.06)]">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#24101f] text-[#f5c242]"><Icon size={23} /></span>
                    <span className="text-sm font-black text-[#c45118]">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#6f665c]">{step.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="bg-[#746d5c] px-5 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f5c242]">What support includes</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">Career Preparation That Continues Beyond the Classroom</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              The focus is on improving the quality of your evidence, positioning and interview performance while helping you run a more disciplined job search.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {supportIncludes.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border border-white/14 bg-[#24101f] p-4 text-sm font-bold leading-6">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f5c242]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#ded6c8] bg-white p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c45118]">Clear expectations</p>
            <h2 className="mt-4 text-3xl font-semibold">What Placement Support Means</h2>
            <p className="mt-4 text-base leading-8 text-[#6f665c]">
              Brit Institute supports eligible learners with preparation, job-search guidance and the placement process described in the applicable programme agreement. Support does not remove the learner&apos;s responsibility to attend, complete projects, prepare and participate actively in applications and interviews.
            </p>
          </article>
          <article className="rounded-2xl bg-[#24101f] p-8 text-white">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f5c242]">Terms-qualified guarantee</p>
            <h2 className="mt-4 text-3xl font-semibold">Eligibility and Programme Terms Apply</h2>
            <p className="mt-4 text-base leading-8 text-white/72">
              A 100% Placement Guarantee is available to eligible learners in selected programmes, subject to the signed programme agreement, attendance, project completion and other eligibility requirements. It is not an unconditional promise of a UK job.
            </p>
            <Link href="/terms" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#f5c242]">Read the programme terms <ArrowRight size={16} /></Link>
          </article>
        </div>
      </section>

      <section id="consultation" className="bg-[#d8e8ff] px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#4d617f]">Plan your next step</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">Discuss Your Data Analyst Career Plan</h2>
            <p className="mt-5 text-base leading-8 text-[#4d617f]">
              Speak with an advisor about your current experience, target role, programme fit and the placement-support terms that would apply to you.
            </p>
            <div className="mt-7 flex flex-wrap gap-4 text-sm font-black">
              <Link href="/career-change-data-analyst-uk" className="text-[#c45118]">Career-change guide</Link>
              <Link href="/power-bi-course-uk" className="text-[#c45118]">Power BI training</Link>
              <Link href="/pricing" className="text-[#c45118]">Course fees</Link>
              <Link href="/reviews" className="text-[#c45118]">Success stories</Link>
            </div>
          </div>
          <CourseLeadForm courseTitle="Data Analyst Placement Support Consultation" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
