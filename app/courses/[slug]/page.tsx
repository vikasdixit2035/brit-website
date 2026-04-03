import { notFound } from "next/navigation";
import { Download, Eye, ChevronRight, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseLeadForm from "./CourseLeadForm";

interface Course {
  _id: string;
  slug: string;
  title: string;
  desc: string;
  duration: string;
  iconName: string;
  topBadge?: string;
}

async function getCourse(slug: string): Promise<Course | null> {
  try {
    const res = await fetch(`http://localhost:4000/api/courses/${slug}`, {
      cache: "no-store",
      next: { tags: ['courses'] }
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (e) {
    console.error("Failed to fetch course:", e);
    return null;
  }
}

function StarIcon({ fill = "currentColor" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={fill} stroke={fill} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#10B981" stroke="#059669" strokeWidth="2" className="mt-1 flex-shrink-0">
      <polygon points="12 3 21 12 12 21 3 12 12 3"></polygon>
    </svg>
  );
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const course = await getCourse(resolvedParams.slug);

  if (!course) {
    notFound();
  }

  // Parse description as bullet points
  const points = (course.desc || "")
    .split(/[\n\u2022]+/) // split by newline or bullet points
    .map((p: string) => p.trim())
    .filter((p: string) => p.length > 5);

  return (
    <div className="bg-[#f8faff] min-h-screen font-sans">
      <Navbar hasBanner={false} />

      <main className="pt-28 pb-20 max-w-[1100px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20">
        {/* Left Column */}
        <div className="pt-2">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
            <a href="/" className="hover:text-gray-900 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
            </a>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <a href="#" className="hover:text-gray-900 transition-colors">Agile and Scrum</a>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-[#a855f7] font-semibold">{course.title}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-[42px] leading-[1.15] font-bold text-[#111827] mb-6">
            {course.title}
          </h1>

          {/* Learners Proof */}
          <div className="flex items-center gap-3 mb-8 bg-white/60 w-max pr-4 p-1 rounded-full border border-gray-200/50">
            <div className="flex -space-x-3 ml-2">
              <img src="https://i.pravatar.cc/100?img=1" className="w-8 h-8 rounded-full border-2 border-white bg-gray-100" alt="Learner" />
              <img src="https://i.pravatar.cc/100?img=5" className="w-8 h-8 rounded-full border-2 border-white bg-gray-100" alt="Learner" />
              <img src="https://i.pravatar.cc/100?img=3" className="w-8 h-8 rounded-full border-2 border-white bg-gray-100" alt="Learner" />
              <img src="https://i.pravatar.cc/100?img=8" className="w-8 h-8 rounded-full border-2 border-white bg-gray-100" alt="Learner" />
            </div>
            <span className="text-sm font-semibold text-gray-800">300K+ <span className="text-gray-500 font-medium">Learners</span></span>
          </div>

          {/* Bullet Points */}
          <div className="flex flex-col gap-4 mb-10">
            {points.length > 0 ? points.map((point: string, i: number) => (
              <div key={i} className="flex gap-3 text-[15.5px] text-gray-700 leading-relaxed">
                <DiamondIcon />
                <span>{point}</span>
              </div>
            )) : (
              <div className="flex gap-3 text-[15px] text-gray-700 leading-relaxed">
                <DiamondIcon />
                <span>Gain comprehensive skills in {course.title} and become industry ready with hands-on labs and capstone projects.</span>
              </div>
            )}
            <div className="flex gap-3 text-[15.5px] text-gray-700 leading-relaxed">
              <DiamondIcon />
              <span>Fast track your career with 100% placement assistance and interview preparation by industry veterans.</span>
            </div>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-4 mb-10">
            {/* Trustpilot */}
            <div className="flex items-center gap-4 bg-white px-4 py-2.5 rounded-lg border border-gray-100 shadow-sm">
              <div>
                <div className="flex items-center text-[#00b67a] gap-1 mb-0.5">
                  <Star fill="#00b67a" className="w-4 h-4" />
                  <span className="font-bold text-sm tracking-tight text-[#111827]">Trustpilot</span>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i: number) => <div key={i} className="w-4 h-4 bg-[#00b67a] text-white flex items-center justify-center"><StarIcon fill="white" /></div>)}
                </div>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="text-lg font-bold text-gray-900">
                4.6/5
              </div>
            </div>

            {/* Google */}
            <div className="flex items-center gap-4 bg-white px-4 py-2.5 rounded-lg border border-gray-100 shadow-sm">
              <div>
                <div className="flex items-center gap-1 mb-0.5 font-bold text-sm">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </div>
                <div className="flex gap-0.5 text-[#FBBC05]">
                  {[1, 2, 3, 4, 5].map((i: number) => <div key={i} className="w-4 h-4 flex items-center justify-center"><StarIcon /></div>)}
                </div>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="text-lg font-bold text-gray-900">
                4.8/5
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-3">
            <button className="w-full sm:w-auto px-7 py-3 bg-[#a855f7] hover:bg-[#9333ea] text-white rounded-md font-bold text-[15px] transition-colors flex items-center justify-center gap-2">
              Download Brochure <Download className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-7 py-3 bg-[#e5e7eb]/80 hover:bg-[#e5e7eb] text-gray-900 rounded-md font-bold text-[15px] transition-colors flex items-center justify-center gap-2">
              <Eye className="w-4 h-4" /> View Schedules
            </button>
          </div>

          <p className="text-[13px] font-medium text-gray-600 ml-1">
            Looking for Corporate Training? <a href="#" className="text-[#059669] hover:underline font-bold">Get a Quote</a>
          </p>
        </div>

        {/* Right Column Form */}
        <div className="relative">
          <CourseLeadForm courseTitle={course.title} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
