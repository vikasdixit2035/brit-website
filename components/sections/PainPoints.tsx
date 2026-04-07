"use client";

import useReveal from "@/hooks/useReveal";
import { AlertCircle, Target, BookX, TrendingDown } from "lucide-react";

const painPoints = [
  {
    icon: TrendingDown,
    title: "Stagnant Progression",
    detail: "Working hard but not seeing career progression",
  },
  {
    icon: Target,
    title: "Lack of Direction",
    detail: "Unsure how to enter data or AI roles",
  },
  {
    icon: BookX,
    title: "Theory Over Practice",
    detail: "Learning online but lacking real-world application",
  },
  {
    icon: AlertCircle,
    title: "No Clear Path",
    detail: "No clear path to a high-paying tech career",
  },
];

export default function PainPoints() {
  const r = useReveal();

  return (
    <section
      id="pain-points"
      ref={r.ref}
      className="relative py-[80px] lg:py-[100px] bg-[#0c0a09] overflow-hidden"
    >
      <div className={`relative z-10 max-w-[1100px] mx-auto px-6 ${r.cls}`}>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
            Stuck in a Role with{" "}
            <span className="bg-gradient-to-r from-[#f87171] to-[#ef4444] bg-clip-text text-transparent">
              Limited Growth?
            </span>
          </h2>
        </div>

        {/* Grid Layout:
          - grid-cols-1: 1 column on mobile screens
          - sm:grid-cols-2: 2x2 grid on small/tablet screens
          - lg:grid-cols-4: All 4 in a single row on desktop screens
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={i}
                className="bg-white/[0.03] border border-red-500/20 rounded-2xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-[#f87171]" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed m-0">
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