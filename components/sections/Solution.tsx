"use client";

import useReveal from "@/hooks/useReveal";
import {
  BriefcaseBusiness,
  CalendarCheck,
  Code2,
  GraduationCap,
  Handshake,
  Rocket,
} from "lucide-react";

const solutions = [
  {
    icon: GraduationCap,
    title: "Expert-Led Curriculum",
    detail:
      "Learn from practitioners through a practical syllabus shaped around current AI, data, and automation workflows.",
  },
  {
    icon: Code2,
    title: "Hands-On Learning",
    detail:
      "Turn concepts into portfolio evidence with guided labs, real business scenarios, and project-based practice.",
  },
  {
    icon: Handshake,
    title: "Mentor Doubt Support",
    detail:
      "Get steady mentor guidance when topics feel unclear, so you can fix gaps quickly and keep momentum.",
  },
  {
    icon: Rocket,
    title: "Startup Showcase",
    detail:
      "Explore emerging AI tools, product ideas, and research-led use cases that show where the market is heading.",
  },
  {
    icon: BriefcaseBusiness,
    title: "AI Career Boost",
    detail:
      "Prepare for UK opportunities with career sessions, interview practice, networking support, and employer-focused guidance.",
  },
  {
    icon: CalendarCheck,
    title: "Recognised Certifications",
    detail:
      "Earn proof of learning that highlights your practical skills and helps your profile stand out to recruiters.",
  },
];

export default function Solution() {
  const { revealRef, cls } = useReveal();

  return (
    <section
      id="solution"
      ref={revealRef}
      className="relative py-16 bg-[var(--blue-deep)] overflow-hidden"
    >
      {/* Background decorations */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)] blur-[40px]" />
      </div>

      <div className={`relative z-10 max-w-[1180px] mx-auto px-6 ${cls}`}>
        {/* Header */}
        <div className="text-center mb-10 mx-auto max-w-4xl">
          <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold tracking-tight text-[var(--white)] mb-4 leading-[1.15]">
            What{" "}
            <span className="bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-300)] bg-clip-text text-transparent">
              You&apos;ll Get
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-7 text-white/75 md:text-lg">
            Build job-ready confidence through practical training, expert feedback, and real-world projects shaped around the skills UK employers value in AI, data, and automation roles.
          </p>
        </div>

        {/* Grid Layout:
          - grid-cols-1: 1 column on mobile screens
          - sm:grid-cols-2: 2 columns on small/tablet screens
          - lg:grid-cols-3: 3 columns on desktop screens
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={i}
                className="min-h-[260px] bg-white/[0.03] border border-white/10 border-t-[3px] border-t-[var(--gold-400)] rounded-lg p-7 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-[5px]"
              >
                <div className="w-14 h-14 rounded-lg bg-[rgba(212,168,83,0.1)] flex items-center justify-center mb-5">
                  <Icon size={28} className="text-[var(--gold-400)]" strokeWidth={2} />
                </div>
                <h3 className="text-[1.2rem] font-bold text-[var(--white)] mb-3">
                  {point.title}
                </h3>
                <p className="text-[0.95rem] text-white/75 leading-[1.6] m-0">
                  {point.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
