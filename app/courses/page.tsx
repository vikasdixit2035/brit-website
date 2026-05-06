import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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

export default async function CoursesPage() {
  const courseCards = await fetchCourses();

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar hasBanner={false} />
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-32">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Explore Career-Focused Programmes
          </p>
          <h1 className="mb-5 text-4xl font-extrabold tracking-tight md:text-5xl">
            Generative AI, Data Analyst and Gen AI, Data Science & Machine Learning, and Agentic AI Certification Programs
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            Compare practical programmes built to help learners develop portfolio-ready skills, understand real tools, and prepare for career transitions.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courseCards.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
                  {course.topBadge}
                </span>
                <span className="text-sm font-semibold text-slate-500">{course.duration}</span>
              </div>
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 group-hover:text-blue-700">
                {course.title}
              </h2>
              <p className="mb-6 text-sm leading-7 text-slate-600">{course.desc}</p>
              <div className="mb-6 rounded-2xl bg-slate-50 p-4">
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Programme Fee</div>
                <div className="mt-2 text-lg font-semibold text-slate-900">
                  {new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: course.currency ?? "GBP",
                    maximumFractionDigits: 0,
                  }).format(course.price)}
                </div>
              </div>
              <span className="inline-flex items-center text-sm font-bold text-blue-700">
                View course details
              </span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
