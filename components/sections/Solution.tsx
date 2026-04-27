"use client";

import useReveal from "@/hooks/useReveal";
import { Briefcase, Code, Wrench, GraduationCap } from "lucide-react";

const solutions = [
  {
    icon: Briefcase,
    title: "Industry-Ready",
    detail: "Industry-relevant curriculum aligned with UK job roles",
  },
  {
    icon: Code,
    title: "Hands-On Experience",
    detail: "Hands-on projects to build a strong portfolio",
  },
  {
    icon: Wrench,
    title: "Modern Tools",
    detail: "Tools and skills used in real data, AI, and automation jobs",
  },
  {
    icon: GraduationCap,
    title: "For Everyone",
    detail: "Designed for beginners and working professionals",
  },
];

export default function Solution() {
  const { revealRef, cls } = useReveal();

  return (
    <section
      id="solution"
      ref={revealRef}
      className="relative py-24 bg-[var(--blue-deep)] overflow-hidden"
    >
      {/* Background decorations */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)] blur-[40px]" />
      </div>

      <div className={`relative z-10 max-w-[1100px] mx-auto px-6 ${cls}`}>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold tracking-tight text-[var(--white)] mb-4 leading-[1.15]">
            A Structured Path to a{" "}
            <span className="bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-300)] bg-clip-text text-transparent">
              High-Growth Career
            </span>
          </h2>
        </div>

        {/* Grid Layout:
          - grid-cols-1: 1 column on mobile screens
          - sm:grid-cols-2: 2x2 grid on small/tablet screens
          - lg:grid-cols-4: All 4 in a single row on desktop screens
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/10 border-t-[3px] border-t-[var(--gold-400)] rounded-2xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-[5px]"
              >
                <div className="w-14 h-14 rounded-2xl bg-[rgba(212,168,83,0.1)] flex items-center justify-center mb-5">
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
