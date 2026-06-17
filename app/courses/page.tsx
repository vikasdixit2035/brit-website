import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, FileText, GraduationCap, MonitorPlay, Trophy } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeCTA, ThemeHero, ThemeLabel, ThemeShell } from "@/components/layout/ThinkificTheme";
import { fetchCourses } from "@/lib/courses";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Data Analytics Course UK and AI Career Courses",
  description:
    "Compare Brit Institute's data analytics course in the UK with Gen AI, data science and machine learning, agentic AI, and generative AI programmes for UK career growth.",
  path: "/courses",
  keywords: [
    "data analytics course UK",
    "data analyst course UK",
    "data analytics with Gen AI UK",
    "data science course UK",
    "agentic AI course UK",
    "Generative AI UK",
    "Brit Institute courses",
  ],
});

const courseImages: Record<string, string> = {
  "data-analytics": "/da-Photoroom.png",
  "data-science": "/ds-ml-Photoroom.png",
  "ai-automation": "/agentic-ai-Photoroom.png",
  "gen-ai": "/genai-Photoroom.png",
};

const accents = ["#f5c242", "#d95700", "#7c9a4f", "#c45118"];

export default async function CoursesPage() {
  const courseCards = await fetchCourses();

  return (
    <ThemeShell>
      <Navbar hasBanner={false} />
      <ThemeHero
        eyebrow="Programme Catalog"
        title={<>Choose the right learning product for your outcome.</>}
        text="Compare practical programmes built to help learners develop portfolio-ready skills, understand real tools, and prepare for UK career transitions."
      >
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["Live classes", "Portfolio projects", "Mentor support", "Career preparation"].map((item) => (
            <span key={item} className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-bold text-white/78">
              {item}
            </span>
          ))}
        </div>
      </ThemeHero>

      <section className="bg-[#746d5c] px-5 py-20 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <ThemeLabel dark>What's included?</ThemeLabel>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Courses designed like complete career products.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/72 md:text-base">
              Each course gives you a structured path, practical assignments, reviewed output, and a clearer story for employers.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {courseCards.map((course, index) => {
              const accent = accents[index % accents.length];
              const price = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: course.currency ?? "GBP",
                maximumFractionDigits: 0,
              }).format(course.price);

              return (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="group flex h-full flex-col rounded-md bg-white p-4 text-[#241a1f] shadow-[0_24px_70px_rgba(0,0,0,0.18)] transition hover:-translate-y-1"
                >
                  <div className="relative h-44 overflow-hidden rounded-md" style={{ background: accent }}>
                    <Image
                      src={courseImages[course.slug] ?? "/genai-Photoroom.png"}
                      alt={course.title}
                      fill
                      className="object-contain p-5 transition group-hover:scale-105"
                      sizes="(max-width: 768px) 90vw, 300px"
                    />
                    {course.isPopular && (
                      <span className="absolute right-3 top-3 rounded-full bg-[#24101f] px-3 py-1 text-xs font-black uppercase tracking-wide text-white">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-2 pt-5">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="rounded-full bg-[#f0eadf] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#c45118]">
                        {course.topBadge}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-bold text-[#6f665c]">
                        <Clock3 size={14} />
                        {course.duration}
                      </span>
                    </div>
                    <h2 className="text-xl font-black leading-tight transition group-hover:text-[#d95700]">{course.title}</h2>
                    <p className="mt-3 line-clamp-4 text-sm leading-6 text-[#6f665c]">{course.desc}</p>
                    <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-md bg-[#f7f3ea] p-3">
                        <div className="text-xs font-black uppercase tracking-wide text-[#7a7064]">Fee</div>
                        <div className="mt-1 font-black">{price}</div>
                      </div>
                      <div className="rounded-md bg-[#f7f3ea] p-3">
                        <div className="text-xs font-black uppercase tracking-wide text-[#7a7064]">Projects</div>
                        <div className="mt-1 font-black">{course.projects}</div>
                      </div>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#d95700]">
                      View course details <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f3ea] px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-4">
          {[
            [MonitorPlay, "Live instruction", "Expert-led sessions with replays."],
            [FileText, "Career portfolio", "Projects you can show and explain."],
            [GraduationCap, "Certification", "Professional completion proof."],
            [Trophy, "Job readiness", "CV, LinkedIn, and interview support."],
          ].map(([Icon, title, text]) => {
            const TypedIcon = Icon as typeof MonitorPlay;
            return (
              <article key={title as string} className="rounded-md border border-[#ded6c8] bg-white p-6">
                <TypedIcon className="text-[#d95700]" size={26} />
                <h3 className="mt-5 text-xl font-black">{title as string}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6f665c]">{text as string}</p>
              </article>
            );
          })}
        </div>
      </section>

      <ThemeCTA
        title="Find the course that fits your next role."
        text="Speak with an advisor and map your current experience to the right Brit Institute pathway."
      />
      <Footer />
    </ThemeShell>
  );
}
