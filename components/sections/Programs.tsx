"use client";

import Link from "next/link";
import useReveal from "@/hooks/useReveal";
import { Clock, MonitorPlay, TrendingUp, Briefcase, ArrowRight } from "lucide-react";
import { coursesData } from "@/app/courses/[slug]/courseData";

export default function Programs() {
  const { ref, cls } = useReveal();

  const details = Object.entries(coursesData)
    .slice(0, 3)
    .map(([slug, course]) => ({
      slug,
      title: course.seoTitle,
      description: course.subheadline,
      meta: [
        { icon: Clock, label: course.duration },
        { icon: MonitorPlay, label: course.programmeOverview.format },
        { icon: TrendingUp, label: course.programmeOverview.level },
        { icon: Briefcase, label: "Career support" },
      ],
    }));

  return (
    <section
      id="programs"
      className="relative w-full overflow-hidden bg-[#070B14] py-24 font-sans text-white"
      ref={ref}
    >
      {/* Subtle Background Effects for Premium Feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.08),_transparent_50%)]" />

      {/* Main Container */}
      <div className={`relative z-10 mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 ${cls}`}>

        {/* Header section */}
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-[2.8rem] lg:text-[3.2rem]">
            Programme <span className="text-[#D4AF37]">Details</span>
          </h2>
          <p className="max-w-2xl text-base text-white/75">
            Accelerate your career with our industry-vetted programs. Designed for absolute clarity, hands-on learning, and measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-8 xl:gap-10">
          {details.map((item, index) => (
            <Link
              key={item.slug}
              href={`/courses/${item.slug}`}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[24px] border p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-[#0D1220] ${
                index === 0
                  ? "border-[#D4AF37]/45 bg-[#111827] shadow-[0_24px_60px_-28px_rgba(212,175,55,0.55)]"
                  : "border-white/10 bg-[#0D1220]/55 hover:border-[#D4AF37]/35 hover:shadow-[0_20px_40px_-18px_rgba(212,175,55,0.18)]"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/0 via-transparent to-[#D4AF37]/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              {index === 0 && (
                <div className="relative z-10 mb-6 w-max rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-bold text-[#070B14]">
                  Most Popular
                </div>
              )}

              <div className="relative z-10">
                <h3 className="mb-5 text-2xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
                  {item.title}
                </h3>
                <p className="mb-8 line-clamp-3 text-base leading-relaxed text-white/75">
                  {item.description}
                </p>

                <div className="mb-8 grid grid-cols-1 gap-3">
                  {item.meta.map((meta, idx) => {
                    const Icon = meta.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-colors group-hover:border-white/10 group-hover:bg-white/[0.04]"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                          <Icon size={18} strokeWidth={2.5} />
                        </div>
                        <span className="text-[13px] font-semibold text-white/85 lg:text-[14px]">
                          {meta.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative z-10 mt-auto flex items-center justify-between border-t border-white/5 pt-6 transition-colors duration-300 group-hover:border-[#D4AF37]/20">
                <span className="text-base font-bold text-white transition-colors group-hover:text-[#D4AF37]">
                  Explore Course
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#D4AF37] group-hover:text-black">
                  <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-center lg:mt-20">
          <Link
            href="/courses"
            className="btn-outline btn-outline-white"
          >
            View All Courses
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
