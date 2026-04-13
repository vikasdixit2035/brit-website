"use client";

import Link from "next/link";
import useReveal from "@/hooks/useReveal";
import { Clock, MonitorPlay, TrendingUp, Briefcase, ArrowRight } from "lucide-react";
import { coursesData } from "@/app/courses/[slug]/courseData";

export default function Programs() {
  const r = useReveal();

  const details = Object.entries(coursesData).map(([slug, course]) => ({
    slug,
    title: course.seoTitle,
    description: course.subheadline,
    meta: [
      { icon: Clock, label: course.duration },
      { icon: MonitorPlay, label: course.programmeOverview.format },
      { icon: TrendingUp, label: course.programmeOverview.level },
      { icon: Briefcase, label: "Career support included" },
    ],
  }));

  return (
    <section id="programs" className="w-full bg-[#111827] font-sans" ref={r.ref}>
      <div className={`max-w-[1100px] mx-auto px-6 ${r.cls}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Programme <span className="text-[#D4AF37]">Details</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {details.map((item) => (
            <Link
              key={item.slug}
              href={`/courses/${item.slug}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-transform duration-300 hover:-translate-y-2"
            >
              <h3 className="mb-4 text-2xl font-bold text-white leading-tight">{item.title}</h3>
              <p className="mb-6 text-sm leading-7 text-gray-300">{item.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {item.meta.map((meta, idx) => {
                  const Icon = meta.icon;
                  return (
                    <div key={idx} className="rounded-2xl bg-black/20 p-4 text-center">
                      <div className="mb-3 flex justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                          <Icon className="text-[#D4AF37]" size={22} />
                        </div>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{meta.label}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#D4AF37]">
                View course details <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            Browse all courses <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
