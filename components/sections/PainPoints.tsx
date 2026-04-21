"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Expanded data array to include diagnostic advice and actionable steps
const painPoints = [
  {
    id: 0,
    accent: "#2b1231",
    accentText: "#ffffff",
    accentBorder: "#a78bfa",
    image: "/1.png",
    title: "Stagnant Progression",
    detail: "Working hard without a clear route to promotion.",
    diagnosis: "You've hit a ceiling because upward mobility requires shifting from task execution to strategic value creation. Hard work alone rarely equals a promotion without visibility.",
    steps: [
      "Document your daily impact using quantifiable metrics.",
      "Schedule a specific 1-on-1 to discuss career mapping, not just project status.",
      "Identify and learn the skills the level above you uses daily."
    ],
    actionText: "Book Free Consultation"
  },
  {
    id: 1,
    accent: "#f8d10c",
    accentText: "#111827",
    accentBorder: "#f59e0b",
    image: "/2.png",
    title: "Lack of Direction",
    detail: "Unsure which data or AI role fits you.",
    diagnosis: "The tech landscape is overwhelming. You are likely suffering from analysis paralysis, trying to learn everything instead of focusing on a specific, employable niche.",
    steps: [
      "Choose one specific role (e.g., Data Analyst vs. ML Engineer) and ignore the rest for now.",
      "Find 5 job descriptions for that role and extract the top 3 overlapping required tools.",
      "Build a single, end-to-end project using those specific tools."
    ],
    actionText: "Book Free Consultation"
  },
  {
    id: 2,
    accent: "#341035",
    accentText: "#ffffff",
    accentBorder: "#60a5fa",
    image: "/3.png",
    title: "Theory Over Practice",
    detail: "Learning online without portfolio-ready proof.",
    diagnosis: "Tutorial hell is real. You are passively consuming information rather than actively struggling through problem-solving, which is where true skill acquisition happens.",
    steps: [
      "Stop taking new courses until you complete a project from scratch.",
      "Contribute to an open-source project or solve a problem for a local business.",
      "Rebuild a tutorial project without looking at the source code."
    ],
    actionText: "Book Free Consultation"
  },
  {
    id: 3,
    accent: "#241428",
    accentText: "#ffffff",
    accentBorder: "#fb7185",
    image: "/4.png",
    title: "No Clear Path",
    detail: "No sequenced roadmap from skills to interviews.",
    diagnosis: "You lack a structured roadmap. Without a sequenced learning and networking plan, you are relying on luck rather than a repeatable system.",
    steps: [
      "Audit your current skills against industry standard salary bands.",
      "Optimize your LinkedIn profile to attract technical recruiters.",
      "Join specialized tech communities to network with industry insiders."
    ],
    actionText: "Book Free Consultation"
  },
];

export default function PainPoints() {
  // State to track which card is currently clicked/active
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section
      id="pain-points"
      className="relative py-[80px] lg:py-[100px] bg-[#F7F8FC] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.08),_transparent_36%),radial-gradient(circle_at_80%_20%,_rgba(251,191,36,0.08),_transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.85),rgba(247,248,252,1))]" />
      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold tracking-tight text-slate-900 mb-4 leading-[1.15]">
            Stuck in a Role with{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#E4BE3B] bg-clip-text text-transparent">
              Limited Growth?
            </span>
          </h2>
          <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">
            Select your primary challenge below to discover an actionable path forward.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point) => {
            const isActive = activeId === point.id;

            return (
              <button
                key={point.id}
                onClick={() => setActiveId(isActive ? null : point.id)}
                className={`group relative isolate overflow-hidden text-left rounded-3xl p-8 min-h-[250px] flex flex-col items-start justify-between text-left transition-all duration-500 border shadow-[0_10px_35px_rgba(15,23,42,0.06)] ${isActive
                    ? "bg-white border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.12)] transform -translate-y-2"
                    : "bg-white border-slate-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
                  }`}
              >
                <div
                  className="absolute inset-0 translate-y-full rounded-3xl transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0"
                  style={{
                    background: point.accentBorder + "15",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-1.5 rounded-b-3xl"
                  style={{ backgroundColor: point.accentBorder }}
                />
                <div className="relative z-10 flex w-full flex-col items-start text-left h-full">
                  <div
                    className={`w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 flex items-center justify-center transition-all duration-300 ${isActive ? "bg-white/10 scale-[1.02]" : "bg-slate-50 group-hover:bg-white/5"
                      }`}
                  >
                    <div className="relative w-full h-full p-2">
                      <Image 
                        src={point.image} 
                        alt={point.title} 
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 text-slate-900`}>
                      {point.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed m-0 transition-colors duration-300">
                      {point.detail}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Advice Panel */}
        {activeId !== null && (
          <div className="mt-12 bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-[0_18px_55px_rgba(15,23,42,0.08)] animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex flex-col lg:flex-row gap-10">

              {/* Left Column: Diagnosis */}
              <div className="lg:w-1/2">
                <h4 className="font-bold text-sm tracking-wider uppercase mb-3" style={{ color: painPoints[activeId].accent }}>
                  Diagnostic Insight
                </h4>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {painPoints[activeId].title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  {painPoints[activeId].diagnosis}
                </p>
              </div>

              {/* Right Column: Actionable Steps */}
              <div className="lg:w-1/2">
                <h4 className="text-slate-900 font-bold text-lg mb-5">
                  Actionable Next Steps:
                </h4>
                <ul className="space-y-4 mb-8">
                  {painPoints[activeId].steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-600 text-sm">
                      <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: painPoints[activeId].accent }} />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="btn-outline btn-outline-blue w-full sm:w-auto"
                >
                  {painPoints[activeId].actionText}
                  <ArrowRight size={18} />
                </Link>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
