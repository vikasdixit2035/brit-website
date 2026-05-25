"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { SITE_STATS } from "@/lib/site";

const HeroGlobe = dynamic(() => import("@/components/sections/HeroGlobe"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_45%_42%,rgba(59,130,246,0.42),rgba(17,29,85,0.22)_42%,transparent_70%)]" />
  ),
});

const HERO_ROLE_BADGES = [
  { label: "AI Engineer", className: "left-[3%] top-[38%] sm:left-[2%] sm:top-[40%]" },
  { label: "Data Analyst", className: "right-[10%] top-[24%] sm:right-[11%] sm:top-[25%]" },
  { label: "Data Scientist", className: "left-[8%] bottom-[20%] sm:left-[8%] sm:bottom-[18%]" },
  { label: "Data Engineer", className: "right-[14%] bottom-[11%] sm:right-[15%] sm:bottom-[11%]" },
];

export default function HeroSection() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden bg-black px-4 sm:px-8 md:px-12 lg:px-[100px]">
      <div className="flex h-full w-full max-w-7xl flex-col items-end justify-between lg:flex-row">



        {/* --- LEFT CONTENT --- */}
        <div className="relative z-10 flex flex-1">
          <div className="flex h-full w-full flex-1 flex-col items-start justify-start pb-[30px]">
            <div className="w-full pt-[75px]">

              {/* Top Badge */}
              <div className="z-[2] flex w-max flex-shrink-0 items-center gap-[6px] whitespace-pre rounded-full border border-white/20 px-2 py-1 font-gellix font-normal leading-[160%] text-white/80 sm:px-3 sm:text-sm md:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M8.60061 0.081745C4.50933 -0.524832 0.688052 2.31142 0.0817683 6.40072C-0.524955 10.493 2.30946 14.313 6.40074 14.9196C10.492 15.5261 14.3129 12.6929 14.9196 8.60058C15.526 4.51029 12.6919 0.688322 8.60061 0.081745ZM8.45395 1.07093C8.9436 1.14353 9.40961 1.27327 9.8522 1.44504C9.98153 1.75233 10.0951 2.10479 10.1574 2.53661L6.3985 1.97931C6.64127 1.5624 6.86959 1.25658 7.09589 1.01213C7.54052 0.986053 7.99482 1.00387 8.4538 1.07192L8.45395 1.07093ZM10.9647 2.00121C11.3343 2.23496 11.6793 2.50559 11.9943 2.80895L11.2455 2.69793C11.1367 2.6818 11.0467 2.36821 10.9647 2.00121ZM5.71021 1.25554C5.54886 1.57331 5.40932 1.83265 5.3104 1.81798L4.56059 1.70682C4.92821 1.52009 5.31284 1.36893 5.70922 1.25539L5.71021 1.25554ZM3.31693 2.53336L4.86599 2.76303C4.52249 3.72303 4.27691 4.69755 4.27691 4.69755L1.82768 4.33443C2.21071 3.64869 2.71535 3.03839 3.31693 2.53336ZM5.85518 2.90968L10.3065 3.56964C10.3577 4.58816 10.31 5.59202 10.4089 5.60668L5.2661 4.84421C5.2661 4.84421 5.60961 3.88421 5.85518 2.90968ZM11.3966 3.73126L12.9457 3.96093C13.3752 4.61875 13.6814 5.34927 13.8493 6.11676L11.3991 5.75349C11.3001 5.73882 11.3489 4.73511 11.3966 3.73126ZM1.38922 5.28035L4.03134 5.67207L3.73802 7.65045L1.00687 7.24552C1.03306 6.57477 1.162 5.912 1.38922 5.28035ZM5.02052 5.81873L10.3602 6.61039L10.0668 8.58876L4.7282 7.79725L5.02052 5.81873ZM11.3493 6.75705L13.9925 7.14892C14.0266 7.81932 13.9577 8.49099 13.7882 9.14049L11.056 8.73542L11.3493 6.75705ZM1.04915 8.26272L3.69028 8.6543C3.64254 9.65815 3.5948 10.662 3.69372 10.6767L1.67083 10.3768C1.3437 9.7129 1.13407 8.99791 1.04915 8.26272ZM4.58055 8.78629L9.82324 9.56358C9.67658 10.5528 9.33209 11.5126 9.23317 11.498L4.68291 10.8233C4.48507 10.794 4.53281 9.79014 4.58055 8.78629ZM10.8124 9.71024L13.4536 10.1018C13.159 10.7807 12.7499 11.404 12.2443 11.9444L10.2224 11.6446C10.3213 11.6593 10.6648 10.6993 10.8114 9.71009L10.8124 9.71024ZM2.37389 11.4919L3.84382 11.7099C3.87837 12.3974 4.00037 12.7541 4.12208 13.0582C3.44856 12.6469 2.85677 12.1162 2.37389 11.4919ZM4.83301 11.8565L8.69084 12.4285C8.29079 13.1152 7.91312 13.6375 7.52161 13.9939C7.19574 13.997 6.8701 13.9758 6.5474 13.9304C6.19327 13.8779 5.85332 13.7911 5.52309 13.6865C5.23509 13.2698 5.02171 12.6498 4.83301 11.8565ZM9.68002 12.5751L11.2489 12.8077C10.5717 13.2876 9.80876 13.633 9.00137 13.8251C9.22697 13.5512 9.43012 13.272 9.68002 12.5751Z" fill="url(#paint0_linear_6996_23314)"></path>
                  <defs>
                    <linearGradient id="paint0_linear_6996_23314" x1="0.0816217" y1="6.4017" x2="12.9411" y2="8.30826" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#DBEAFE"></stop>
                      <stop offset="1" stopColor="#1E40AF"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="flex-shrink-0 md:text-base text-xs">World Class Education. Engineered for Outcome</span>
              </div>

              <h1 className="z-[3] mt-5 max-w-[720px] flex-shrink-0 font-gellix text-[40px] font-bold leading-[1.05] text-white sm:text-[52px] md:text-[64px] lg:text-[72px]">
                Launch Your Tech Career with Practical AI &amp; Data Training
              </h1>

              <p className="mt-6 max-w-[620px] font-gellix text-base font-normal leading-7 text-white/75 md:text-lg">
                Build portfolio-ready skills, get mentor support, and prepare for UK data, AI, and automation roles with a clear learning path.
              </p>

              <div className="mt-8 flex w-full flex-col gap-3 sm:max-w-[560px] sm:flex-row">
                <Link href="/contact" className="btn-gold lg w-full sm:w-auto">
                  Book Free Consultation
                </Link>
                <a href="#programs" className="btn-outline btn-outline-white w-full sm:w-auto">
                  Browse Courses
                </a>
              </div>

              <div className="mt-8 grid w-full max-w-[620px] grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { value: SITE_STATS.learnersTrained, label: "learners trained" },
                  { value: `${SITE_STATS.averageRating}/5`, label: "learner rating" },
                  { value: SITE_STATS.hiringPartners, label: "hiring partners" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 backdrop-blur-md"
                  >
                    <div className="font-gellix text-2xl font-bold leading-none text-white">
                      {stat.value}
                    </div>
                    <div className="mt-2 font-gellix text-xs font-medium text-white/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT VISUAL CONTENT --- */}
        <div className="relative z-[1] mt-10 flex w-full flex-1 justify-center lg:mt-0 lg:justify-end">
          <div className="hero-visual-grid relative h-[430px] w-full max-w-[680px] overflow-hidden lg:h-[560px] xl:max-w-[760px]">
            <div className="absolute left-[56%] top-[44%] z-[1] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 sm:h-[430px] sm:w-[430px] lg:h-[520px] lg:w-[520px] xl:h-[560px] xl:w-[560px]">
              <HeroGlobe />
            </div>
            {HERO_ROLE_BADGES.map((badge) => (
              <div
                key={badge.label}
                className={`absolute z-[2] flex items-center gap-2 rounded-full border border-white/20 bg-[#171820]/90 px-4 py-2 font-gellix text-xs font-medium leading-none text-white shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-md sm:text-sm ${badge.className}`}
              >
                <span className="h-2 w-2 rounded-full bg-[#56b277]" />
                {badge.label}
              </div>
            ))}
          </div>
        </div>

        {/* Large Background Red Curve SVG mapped correctly at the bottom-left */}
        <div className="absolute bottom-[-100px] left-0 z-[0] h-[400px] w-[450px] overflow-hidden sm:h-[550px] sm:w-[600px] md:h-[694px] md:w-[758px]">
          <div className="absolute right-0 top-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="758" height="694" viewBox="0 0 758 694" fill="none">
              <path opacity="0.8" d="M-418.193 2.1847C-624.474 130.299 -386.266 224.988 -304.413 336.185C-284.975 362.591 -191.4 531.93 -295.811 494.764C-356.803 473.054 -108.242 270.955 -81.072 527.076L-85.0915 499.868C-90.265 554.71 -86.5403 706.731 31.5178 655.129C159.395 599.235 273.001 468.21 295.401 521.646C317.802 575.081 328.464 714.104 450.501 705.71C545.001 699.21 537.934 767.159 556.225 748.39C574.516 729.622 632.118 731.814 700.435 767.203C746.249 790.937 717.206 685.233 756.811 697.041" stroke="url(#paint0_linear_6996_23321)" strokeWidth={4.99182}></path>
              <defs>
                <linearGradient id="paint0_linear_6996_23321" x1="828.05" y1="722.352" x2="-159.859" y2="986.671" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2563EB"></stop>
                  <stop offset="0.43542" stopColor="#2563EB" stopOpacity="0.2"></stop>
                  <stop offset="0.709382" stopColor="#2563EB" stopOpacity="0.5"></stop>
                  <stop offset="1" stopColor="#2563EB" stopOpacity="0.7"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

      </div>
      <style jsx>{`
        .hero-visual-grid {
          background:
            linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            radial-gradient(circle at 72% 12%, rgba(88, 41, 146, 0.08), transparent 42%),
            #000;
          background-size: 64px 64px, 64px 64px, 100% 100%, 100% 100%;
        }
      `}</style>
    </div>
  );
}
