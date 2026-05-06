"use client";

import { useState } from "react";
import { CheckCircle2, Code2, FileSearch, LineChart, Sparkles, UserRoundCheck } from "lucide-react";
import useReveal from "@/hooks/useReveal";

export default function CurriculumSection() {
  const { revealRef, cls } = useReveal();
  const [open, setOpen] = useState(0);
  const modules = [
    { icon: Sparkles, t: "Foundations of AI & Data", tag: "Weeks 1-2", items: ["Introduction to AI, ML, and Data Science", "Python programming fundamentals", "Statistics & probability for data", "Data structures for analytics"] },
    { icon: Code2, t: "AI Tools & Automation", tag: "Weeks 3-4", items: ["GPT integration and prompt engineering", "Building AI agents with LangChain", "Automation workflows and pipelines", "API development and deployment"] },
    { icon: LineChart, t: "Data Analysis & Visualization", tag: "Weeks 5-7", items: ["SQL mastery: queries, joins, optimization", "Python data analysis with Pandas", "Dashboard creation with Tableau / Power BI", "Statistical modelling and hypothesis testing"] },
    { icon: FileSearch, t: "Real-World Projects", tag: "Weeks 8-10", items: ["End-to-end AI project deployment", "Business case studies from the UK market", "Portfolio-ready project development", "Code reviews and feedback sessions"] },
    { icon: UserRoundCheck, t: "Career Preparation", tag: "Final sprint", items: ["Resume & LinkedIn optimization", "Mock interviews with industry experts", "UK job application strategies", "Salary negotiation techniques"] },
  ];
  const activeModule = modules[open] ?? modules[0];
  const ActiveIcon = activeModule.icon;

  return (
    <section id="curriculum" className="relative overflow-hidden bg-white px-5 py-20 md:px-8 lg:py-24" ref={revealRef}>
      <div className={`mx-auto max-w-7xl ${cls}`}>
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-[var(--blue-600)]">Curriculum Preview</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Build the exact skills UK data teams ask for.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            A structured path from fundamentals to portfolio work, with every module tied to a practical output learners can show.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-md border border-slate-200 bg-slate-50 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            {modules.map((m, i) => {
              const Icon = m.icon;
              const active = open === i;
              return (
                <button
                  key={m.t}
                  className={`mb-2 flex w-full items-center gap-4 rounded-md border p-4 text-left transition last:mb-0 ${
                    active
                      ? "border-slate-950 bg-slate-950 text-white shadow-[0_18px_36px_rgba(15,23,42,0.16)]"
                      : "border-slate-200 bg-white text-slate-950 hover:border-[var(--blue-600)]"
                  }`}
                  onClick={() => setOpen(i)}
                  aria-expanded={active}
                >
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${active ? "bg-[var(--gold-400)] text-slate-950" : "bg-[var(--blue-50)] text-[var(--blue-600)]"}`}>
                    <Icon size={21} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block text-xs font-extrabold uppercase tracking-[0.18em] ${active ? "text-[var(--gold-400)]" : "text-slate-400"}`}>{m.tag}</span>
                    <span className="mt-1 block text-base font-black">{m.t}</span>
                  </span>
                  <span className={`text-lg font-black ${active ? "text-[var(--gold-400)]" : "text-slate-300"}`}>{i + 1}</span>
                </button>
              );
            })}
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-6 shadow-[0_22px_55px_rgba(15,23,42,0.09)] md:p-8">
            <div className="mb-7 flex items-start justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--gold-700)]">{activeModule.tag}</p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">{activeModule.t}</h3>
              </div>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-[var(--blue-600)] text-white">
                <ActiveIcon size={25} />
              </div>
            </div>
            <div className="grid gap-3">
              {activeModule.items.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={18} />
                  <span className="text-sm font-semibold leading-6 text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 rounded-md bg-slate-950 p-5 text-white">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--gold-400)]">Module output</p>
                  <p className="mt-2 text-lg font-black">Portfolio evidence reviewed by mentors</p>
                </div>
                <div className="rounded-md bg-white px-4 py-3 text-sm font-black text-slate-950">Job-ready proof</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
