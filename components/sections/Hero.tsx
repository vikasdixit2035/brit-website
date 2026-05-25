"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { SITE_STATS } from "@/lib/site";

const HERO_IMAGES = [
  "/hero1.png",
  "/hero2.png",
  "/hero3_v2.png",
];

const HERO_IMAGE_ALTS = [
  "Brit Institute learner visual for AI and data career training",
  "Professional upskilling visual for UK data analytics careers",
  "Career transition visual for AI and data programmes",
  "Learner success visual for UK tech training",
  "AI and data skills training hero visual",
];

export default function HeroSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Keep the visual alive without adding headline complexity.
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

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
        <div className="flex flex-1 justify-end">
          <div className="relative flex h-full w-full flex-1 items-end justify-end">
            <div className="relative flex h-full w-full flex-col items-end justify-end self-end">
              <div className="relative flex h-full w-full items-center justify-center">

                {/* Hero Images Crossfader Container */}
                <div className="relative bottom-[10%] w-[500px] max-w-[500px] h-[350px] md:h-[500px] right-0 md:right-0">
                  {HERO_IMAGES.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="absolute inset-0 h-full w-full"
                      style={{
                        opacity: activeImageIndex === idx ? 1 : 0,
                        transition: "opacity 800ms cubic-bezier(0.4, 0, 0.2, 1)",
                        zIndex: activeImageIndex === idx ? 20 : 10
                      }}
                    >
                      <Image
                        src={imgSrc}
                        alt={HERO_IMAGE_ALTS[idx]}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        priority={idx === 0}
                        className="object-contain pointer-events-none object-bottom absolute h-full w-full inset-0"
                      />
                    </div>
                  ))}
                </div>

                {/* Blurry Blue Glow behind globe */}
                <div className="absolute left-1/2 top-1/2 z-0 h-[55vw] w-[80vw] max-h-[243px] max-w-[443px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB] blur-[150px] md:h-[443px]"></div>

                {/* Dotted Globe background */}
                <div className="absolute flex items-center justify-center" style={{ width: '75%', height: '75%' }}>
                  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ opacity: 0.7 }}>
                    <defs>
                      <radialGradient id="globeFade" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#2563EB" stopOpacity="0.9" />
                        <stop offset="70%" stopColor="#2563EB" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    {/* Procedural dotted globe */}
                    {(() => {
                      const dots: React.ReactElement[] = [];
                      const round = (n: number) => Number(n.toFixed(4));
                      const cx = 250, cy = 250, R = 210;
                      const latSteps = 18;
                      const lonSteps = 24;
                      for (let i = 0; i <= latSteps; i++) {
                        const lat = (Math.PI * i) / latSteps - Math.PI / 2;
                        const cosLat = Math.cos(lat);
                        const sinLat = Math.sin(lat);
                        for (let j = 0; j <= lonSteps; j++) {
                          const lon = (2 * Math.PI * j) / lonSteps;
                          const cosLon = Math.cos(lon);
                          const sinLon = Math.sin(lon);
                          // 3D sphere → 2D projection (slight rotation)
                          const x3d = cosLat * sinLon;
                          const y3d = sinLat;
                          const z3d = cosLat * cosLon;
                          // Rotate 25° around Y axis for depth
                          const angle = 0.44;
                          const xr = x3d * Math.cos(angle) + z3d * Math.sin(angle);
                          const zr = -x3d * Math.sin(angle) + z3d * Math.cos(angle);
                          // Only show front-facing dots
                          if (zr < -0.05) continue;
                          const px = round(cx + xr * R);
                          const py = round(cy - y3d * R);
                          // Dot size based on depth (z) — closer = bigger
                          const dotR = round(2.2 + zr * 2.8);
                          // Opacity based on depth
                          const opacity = round(0.15 + zr * 0.7);
                          dots.push(
                            <circle
                              key={`${i}-${j}`}
                              cx={px}
                              cy={py}
                              r={Math.max(dotR, 0.8)}
                              fill="#3B82F6"
                              opacity={Math.max(opacity, 0.08)}
                            />
                          );
                        }
                      }
                      // Add longitude lines (meridians) as additional dot series
                      for (let j = 0; j < 12; j++) {
                        const lon = (2 * Math.PI * j) / 12;
                        for (let t = 0; t <= 40; t++) {
                          const lat = (Math.PI * t) / 40 - Math.PI / 2;
                          const cosLat = Math.cos(lat);
                          const sinLat = Math.sin(lat);
                          const x3d = cosLat * Math.sin(lon);
                          const y3d = sinLat;
                          const z3d = cosLat * Math.cos(lon);
                          const angle = 0.44;
                          const xr = x3d * Math.cos(angle) + z3d * Math.sin(angle);
                          const zr = -x3d * Math.sin(angle) + z3d * Math.cos(angle);
                          if (zr < -0.05) continue;
                          const px = round(cx + xr * R);
                          const py = round(cy - y3d * R);
                          const dotR = round(1.5 + zr * 2);
                          const opacity = round(0.1 + zr * 0.5);
                          dots.push(
                            <circle
                              key={`m-${j}-${t}`}
                              cx={px}
                              cy={py}
                              r={Math.max(dotR, 0.5)}
                              fill="#60A5FA"
                              opacity={Math.max(opacity, 0.05)}
                            />
                          );
                        }
                      }
                      return dots;
                    })()}
                  </svg>
                </div>

                {/* Floating "10x Growth" Card */}
                <div
                  className="absolute right-[-10px] top-[-18px] z-[10] flex w-[186px] flex-col items-center justify-center gap-[24px] rounded-[7.33px] px-3 py-3 backdrop-blur-[1.637px] sm:right-[-12px] sm:top-[-30px] sm:w-[246px] sm:gap-[30px] sm:px-4 sm:py-[24px] lg:right-[-56px] xl:right-[-96px] xl:top-[-42px] 2xl:right-[-128px]"
                  style={{ transition: "opacity 800ms cubic-bezier(0.4, 0, 0.2, 1), transform 800ms cubic-bezier(0.4, 0, 0.2, 1)" }}
                >
                  <div
                    className="hero-badge-arrow"
                    style={{ opacity: 1, transform: "scale(1)", transition: "opacity 800ms cubic-bezier(0.4, 0, 0.2, 1), transform 800ms cubic-bezier(0.4, 0, 0.2, 1)" }}
                  >
                    <div className="hero-badge-grow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="116" height="102" viewBox="0 0 99 87" fill="none">
                        <path opacity="0.7" fillRule="evenodd" clipRule="evenodd" d="M78.6164 10.1035L98.5024 0L95.8896 25.5152L90.4083 20.6249C72.0602 43.6497 41.3096 61.1782 9.25116 58.7257L9.79537 48.8148C38.7311 51.0272 66.7727 35.3073 83.6508 14.5951L78.6164 10.1035Z" fill="url(#paint0_linear_7855_25493)"></path>
                        <path d="M16.611 44.5834V86.4166H9.59354V54.2103L0 61.8535V53.4518L11.755 44.5834H16.611Z" fill="white"></path>
                        <path d="M38.7887 87C35.4724 87 32.6003 86.1151 30.1723 84.3453C27.764 82.5755 25.9282 80.0764 24.6649 76.848C23.4213 73.6196 22.7995 69.837 22.7995 65.5C22.7995 61.163 23.4213 57.3804 24.6649 54.152C25.9282 50.9236 27.764 48.4245 30.1723 46.6547C32.6003 44.8849 35.4724 44 38.7887 44C43.8026 44 47.7308 45.9448 50.5734 49.8345C53.4356 53.7047 54.8668 58.9265 54.8668 65.5C54.8668 72.0735 53.4356 77.3051 50.5734 81.1947C47.7308 85.0649 43.8026 87 38.7887 87ZM38.7887 80.2029C41.5917 80.2029 43.7533 78.9582 45.2732 76.4688C46.8129 73.9794 47.5828 70.3232 47.5828 65.5C47.5828 60.6768 46.8129 57.0206 45.2732 54.5312C43.7533 52.0418 41.5917 50.7972 38.7887 50.7972C36.0251 50.7972 33.8834 52.0418 32.3634 54.5312C30.8434 57.0206 30.0834 60.6768 30.0834 65.5C30.0834 70.3232 30.8434 73.9794 32.3634 76.4688C33.8834 78.9582 36.0251 80.2029 38.7887 80.2029Z" fill="white"></path>
                        <path d="M88 86.4166H79.8869L73.0471 76.9647L66.2369 86.4166H58.183L69.0202 71.3636L58.7752 57.2151H66.9771L73.1063 65.7334L79.2651 57.2151H87.2894L77.1628 71.3053L88 86.4166Z" fill="white"></path>
                        <defs>
                          <linearGradient id="paint0_linear_7855_25493" x1="85.0032" y1="22.7757" x2="12.532" y2="49.4338" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"></stop>
                            <stop offset="0.444" stopColor="#9D9D9D" stopOpacity="0.41"></stop>
                            <stop offset="0.999" stopColor="#A5A5A5" stopOpacity="0"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="hero-badge-copy whitespace-nowrap font-gellix text-sm font-normal leading-[22px] text-white sm:text-base">
                    Growth in AI Skill
                  </div>
                </div>

              </div>
            </div>
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
        .hero-badge-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          animation: heroArrowBob 4.8s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .hero-badge-grow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transform-origin: center;
          animation: heroArrowGrow 2.8s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .hero-badge-copy {
          animation: heroBadgeCopy 4.8s ease-in-out infinite;
          letter-spacing: 0.01em;
        }

        @keyframes heroArrowGrow {
          0% {
            transform: scale(0.72);
            opacity: 0.55;
          }
          60% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes heroArrowBob {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes heroBadgeCopy {
          0%, 100% {
            opacity: 0.88;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-2px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-badge-arrow,
          .hero-badge-copy,
          .hero-badge-grow {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
