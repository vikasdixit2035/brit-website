"use client";

import useReveal from "@/hooks/useReveal";
import { Clock, MonitorPlay, TrendingUp, Briefcase } from "lucide-react";

export default function Programs() {
  const r = useReveal();

  const details = [
    { icon: Clock, label: "Duration", value: "[X–X weeks]" },
    { icon: MonitorPlay, label: "Format", value: "Live + hands-on" },
    { icon: TrendingUp, label: "Level", value: "Beginner to Advanced" },
    { icon: Briefcase, label: "Career Support", value: "Career support included" },
  ];

  return (
    <section id="program-snapshot" className="w-full bg-[#111827] py-24 font-sans" ref={r.ref}>
      <div className={`max-w-[1100px] mx-auto px-6 ${r.cls}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Programme <span className="text-[#D4AF37]">Details</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                  <Icon className="text-[#D4AF37]" size={32} />
                </div>
                <h3 className="text-gray-400 font-semibold text-sm tracking-wider uppercase mb-3">{item.label}</h3>
                <p className="text-xl font-bold text-white leading-tight">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}