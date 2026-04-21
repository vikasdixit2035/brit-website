"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  Clock,
  CheckCircle,
} from "lucide-react";
import useReveal from "@/hooks/useReveal";

const COURSE_CARD_IMAGES: Record<string, { src: string; alt: string }> = {
  "data-analytics": {
    src: "/da-Photoroom.png",
    alt: "Data analytics course image",
  },
  "data-science": {
    src: "/ds-ml-Photoroom.png",
    alt: "Data science and machine learning course image",
  },
  "ai-automation": {
    src: "/agentic-ai-Photoroom.png",
    alt: "Agentic AI course image",
  },
  "gen-ai": {
    src: "/genai-Photoroom.png",
    alt: "Generative AI image",
  },
} as const;

const COURSE_ROUTE_MAP: Record<string, string> = {
  "data-analytics": "/courses/data-analytics",
  "data-science": "/courses/data-science",
  "ai-automation": "/courses/ai-automation",
  "gen-ai": "/courses/gen-ai",
} as const;

// ─── Types ───────────────────────────────────────────────────────────────────
interface Course {
  _id: string;
  slug: string;
  topBadge: string;
  bottomLeftBadge: string;
  isPopular: boolean;
  title: string;
  desc: string;
  duration: string;
  projects: string;
  gradient: string;
  iconName: string;
  order: number;
}

// ─── Skeleton card ────────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="w-[340px] md:w-[380px] flex-none bg-[#1A1D24] rounded-2xl border border-gray-800 overflow-hidden flex flex-col animate-pulse">
      <div className="h-56 w-full bg-gray-800" />
      <div className="p-6 flex flex-col gap-3">
        <div className="h-5 bg-gray-700 rounded w-3/4" />
        <div className="h-4 bg-gray-700 rounded w-full" />
        <div className="h-4 bg-gray-700 rounded w-2/3" />
        <div className="flex gap-3 mt-4">
          <div className="flex-1 h-11 bg-gray-700 rounded-xl" />
          <div className="flex-1 h-11 bg-gray-700 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Programs() {
  const r = useReveal();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCourses() {
      try {
        setLoading(true);
        setError(null);
        const API_URL = process.env.NODE_ENV === "development"
          ? "http://localhost:4000/api/courses"
          : "https://api.britinstitute.uk/api/courses";

        const res = await fetch(API_URL, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const json = await res.json();
        setCourses(json.data ?? []);
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") return;
        console.error("Failed to fetch courses:", err);
        setError("Could not load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
    return () => controller.abort();
  }, []);

  // Duplicate for seamless marquee loop
  const displayCourses = [...courses, ...courses];

  return (
    <section
      id="programs"
      className="w-full bg-[#0F1218] py-24 font-sans overflow-hidden"
      ref={r.ref}
    >
      {/* Marquee animation styles */}
      <style>{`
        @keyframes infinite-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: infinite-scroll 40s linear infinite;
          width: max-content;
        }
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className={`max-w-[1400px] mx-auto ${r.cls}`}>
        {/* Header */}
        <header className="text-center mb-16 px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-semibold tracking-wider mb-4 uppercase"
          >
            Your Career Journey Starts Here
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
              Path
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Select the programme that matches your goals and start building a
            high-demand career in data and AI.
          </p>
        </header>

        {/* Error state */}
        {error && (
          <p className="text-center text-red-400 mb-8">{error}</p>
        )}

        {/* Marquee */}
        <div className="relative w-full overflow-hidden mt-4 marquee-container">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0F1218] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0F1218] to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div
            className={`flex flex-nowrap gap-6 pb-12 pt-4 px-6 ${loading || courses.length === 0 ? "" : "animate-marquee"
              }`}
          >
            {loading ? (
              // Skeleton placeholders
              Array.from({ length: 3 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            ) : courses.length === 0 && !error ? (
              <p className="text-gray-500 text-center w-full py-12">
                No courses available at the moment.
              </p>
            ) : (
              displayCourses.map((course, idx) => {
                const courseImage = COURSE_CARD_IMAGES[course.slug] ?? {
                  src: "/genai.jpg",
                  alt: course.title,
                };
                const courseHref = COURSE_ROUTE_MAP[course.slug] ?? `/courses/${course.slug}`;
                return (
                  <Link
                    key={`${course.slug}-${idx}`}
                    href={courseHref}
                    className="w-[340px] md:w-[380px] flex-none bg-[#1A1D24] rounded-2xl border border-gray-800 overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300 shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0F1218]"
                    aria-label={`View details for ${course.title}`}
                  >
                    {/* Card top */}
                    <div
                      className={`relative h-56 w-full bg-gradient-to-br ${course.gradient} flex items-center justify-center p-6`}
                    >
                      <span className="absolute top-4 right-4 bg-white text-gray-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                        {course.topBadge}
                      </span>

                      <div className="relative h-40 w-full max-w-[240px] transform group-hover:scale-110 transition-transform duration-500">
                        <Image
                          src={courseImage.src}
                          alt={courseImage.alt}
                          fill
                          className="object-contain object-center"
                          sizes="(max-width: 768px) 100vw, 240px"
                        />
                      </div>

                      <div className="absolute bottom-4 left-4 bg-black/30 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 uppercase tracking-wide">
                        {course.bottomLeftBadge}
                      </div>

                      {course.isPopular && (
                        <div className="absolute bottom-4 right-4 bg-yellow-400 text-yellow-950 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-md">
                          <Star size={12} className="fill-yellow-950" />
                          Popular
                        </div>
                      )}
                    </div>

                    {/* Card bottom */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-white leading-tight mb-3">
                        {course.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                        {course.desc}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-300 font-medium">
                        <div className="flex items-center gap-1.5">
                          <Clock size={16} className="text-blue-400" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle size={16} className="text-emerald-400" />
                          {course.projects}
                        </div>
                      </div>

                      <div className="flex gap-3 mt-auto">
                        <span className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors duration-200 text-center">
                          View Details
                        </span>
                        <span className="flex-1 bg-transparent border border-gray-700 hover:border-gray-500 hover:bg-white/5 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-all duration-200 text-center">
                          Course Page
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
