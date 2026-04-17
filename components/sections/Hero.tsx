"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { coursesData } from "@/app/courses/[slug]/courseData";
// If you want to use Next.js Image, you can import it:
// import Image from "next/image";

const ROLES = [
  "Data Science",
  "Generative AI",
  "Machine Learning",
  "Data Analytics",
];

const HERO_IMAGES = [
  "https://ab-public-bucket-prod.s3.ap-south-1.amazonaws.com/website_hero/2.webp",
  "https://ab-public-bucket-prod.s3.ap-south-1.amazonaws.com/website_hero/3.webp",
  "https://ab-public-bucket-prod.s3.ap-south-1.amazonaws.com/website_hero/4.webp",
  "https://ab-public-bucket-prod.s3.ap-south-1.amazonaws.com/website_hero/5.webp",
  "https://ab-public-bucket-prod.s3.ap-south-1.amazonaws.com/website_hero/6.webp",
];

const HERO_IMAGE_ALTS = [
  "Brit Institute learner visual for AI and data career training",
  "Professional upskilling visual for UK data analytics careers",
  "Career transition visual for AI and data programmes",
  "Learner success visual for UK tech training",
  "AI and data skills training hero visual",
];

const COURSE_REVIEW_SUMMARY = Object.values(coursesData).reduce(
  (summary, course) => {
    summary.ratingTotal += course.reviews.aggregate.ratingValue * course.reviews.aggregate.reviewCount;
    summary.reviewCount += course.reviews.aggregate.reviewCount;
    summary.courseCount += 1;
    return summary;
  },
  { ratingTotal: 0, reviewCount: 0, courseCount: 0 }
);

const HOMEPAGE_AVERAGE_RATING =
  COURSE_REVIEW_SUMMARY.reviewCount > 0
    ? (COURSE_REVIEW_SUMMARY.ratingTotal / COURSE_REVIEW_SUMMARY.reviewCount).toFixed(1)
    : "4.8";

export default function HeroSection() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Animation effect for both Text Carousel and Hero Images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % ROLES.length);
      setActiveImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 2500); // changes every 2.5 seconds for a more dynamic feel

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

              {/* Main Heading */}
              <h1 className="z-[3] mt-[13px] flex-shrink-0 text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px]">
                <span className="block font-gellix font-normal text-white">Learn, build &amp; Secure</span>

                <span className="relative block font-gellix font-normal text-white">
                  Your Career in Tech
                  <span className="relative bottom-[5px] left-[20px] ml-[10px] inline-flex rotate-[-15.332deg] flex-col justify-start gap-[5.957px] rounded-[4.765px] border-[0.413px] border-white p-[5px_3px] sm:bottom-[8px] sm:right-[-40px] sm:p-[6px_4px] md:bottom-[10px] md:right-[-50px] md:p-[7.148px_4.765px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                      <path d="M5.72547 10.807C5.5261 10.862 5.31348 10.8417 5.1281 10.75L-1.97633e-06 8.21527L3.29139 3.15306C3.41556 2.96981 3.60669 2.84261 3.82367 2.79881C4.04066 2.755 4.26617 2.79811 4.4517 2.91884C4.63724 3.03957 4.76799 3.2283 4.81583 3.44443C4.86367 3.66056 4.82478 3.88683 4.70753 4.07459L2.45272 7.5428L5.87601 9.23431C6.02976 9.31013 6.1568 9.43092 6.24028 9.58065C6.32376 9.73038 6.35972 9.90196 6.34339 10.0726C6.32705 10.2433 6.2592 10.4049 6.14883 10.5361C6.03847 10.6672 5.89081 10.7618 5.72547 10.807ZM13.0139 8.80696L16.3053 3.74475L11.1772 1.20999C10.9763 1.11078 10.7443 1.09544 10.5321 1.16734C10.3199 1.23924 10.1449 1.39249 10.0457 1.59338C9.9465 1.79427 9.93115 2.02634 10.0031 2.23854C10.075 2.45074 10.2282 2.62569 10.4291 2.7249L13.8526 4.41723L11.5976 7.88462C11.4753 8.07244 11.4326 8.30116 11.4789 8.52045C11.5252 8.73975 11.6568 8.93166 11.8446 9.05397C12.0324 9.17628 12.2611 9.21897 12.4804 9.17264C12.6997 9.12632 12.8916 8.99478 13.0139 8.80696ZM9.5186 11.0067L8.46735 0.781607C8.45889 0.669027 8.42795 0.559284 8.37637 0.458861C8.32478 0.358438 8.25359 0.269371 8.16701 0.196921C8.08043 0.124472 7.9802 0.0701097 7.87225 0.0370449C7.76431 0.00398002 7.65083 -0.00711637 7.53852 0.00441147C7.42621 0.0159393 7.31735 0.049857 7.21837 0.104162C7.1194 0.158466 7.0323 0.232056 6.96224 0.320585C6.89218 0.409113 6.84057 0.510784 6.81046 0.619593C6.78035 0.728401 6.77236 0.842141 6.78694 0.954092L7.8382 11.1792C7.84666 11.2918 7.8776 11.4016 7.92918 11.502C7.98077 11.6024 8.05195 11.6915 8.13854 11.7639C8.22512 11.8364 8.32535 11.8907 8.4333 11.9238C8.54124 11.9569 8.65472 11.968 8.76703 11.9564C8.87934 11.9449 8.9882 11.911 9.08717 11.8567C9.18615 11.8024 9.27325 11.7288 9.34331 11.6403C9.41337 11.5517 9.46498 11.4501 9.49508 11.3412C9.52519 11.2324 9.53319 11.1187 9.5186 11.0067Z" fill="white"></path>
                    </svg>
                  </span>
                </span>

                {/* Animated Text Carousel */}
                <div className="h-[38px] sm:h-[43px] md:h-[50px] lg:h-[58px]">
                  <div
                    className="relative h-full overflow-hidden"
                    style={{
                      color: "#D4AF37",
                      fontFamily: "Gellix, sans-serif",
                      fontSize: "clamp(28px, 5vw, 47px)",
                      fontWeight: 700,
                      lineHeight: "120%",
                      letterSpacing: "-0.96px"
                    }}
                  >
                    <div
                      className="flex flex-col transition-transform duration-700 ease-in-out"
                      style={{
                        willChange: "transform",
                        transform: `translateY(-${(activeRoleIndex % ROLES.length) * (100 / ROLES.length)}%) translateZ(0px)`
                      }}
                    >
                      {ROLES.map((role, idx) => (
                        <div key={idx} className="w-full flex-shrink-0 h-[38px] sm:h-[43px] md:h-[50px] lg:h-[58px] flex items-center">
                          {role}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </h1>

              <p className="mt-5 max-w-full font-gellix text-sm md:text-base font-normal text-white/60 sm:max-w-[60%]">
                Get certified from Top institutes and land jobs in high growth tech roles.
              </p>

              {/* Action Cards & Stats (Desktop Grid) */}
              <div className="mt-[20px] sm:mt-[40px] md:mt-[60px]">
                <div className="hidden pr-16 md:flex">
                  <div className="mb-2 grid w-full cursor-pointer grid-cols-[266px_266px] flex-wrap items-start gap-2 pr-4">

                    {/* Action Card 1: Talk to Career Expert */}
                    <button type="button" className="cursor-pointer z-[20] flex h-full flex-1 flex-col items-end justify-between overflow-hidden rounded-[11.855px] border border-[rgba(255,255,255,0.20)] bg-[rgba(25,22,23,0.60)] px-[20px] py-[16px] backdrop-blur-[51.56px] sm:h-[106px] text-left">
                      <p className="flex max-w-[150px] flex-shrink-0 -rotate-[0.297deg] flex-col justify-center self-stretch font-gellix text-xs md:text-lg font-normal not-italic tracking-[0.512px] text-white sm:max-w-full">
                        Talk to Career Expert
                      </p>
                      <div className="flex h-9 w-9 mt-2 items-center justify-center rounded-full bg-white">
                        <svg className="h-5 w-5 text-[#3B82F6]" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M14.9822 10.8433C15.0154 10.6705 14.9547 10.4902 14.8187 10.3722C14.8187 10.3722 13.2594 9.02075 12.1517 8.06075C11.3432 7.36025 10.1307 7.4035 9.37419 8.16L8.86944 8.6645C7.50119 8.081 6.41044 6.99025 5.82669 5.622C5.96444 5.484 6.14945 5.29875 6.3432 5.105C7.0932 4.355 7.14319 3.1555 6.45794 2.34575C5.65794 1.40025 4.62294 0.177 4.62294 0.177C4.52794 0.06475 4.38819 0 4.24119 0H3.54045C1.8197 0 0.338443 1.2145 0.000942962 2.9015C0.000942962 2.902 -0.0128058 3.05875 0.0646942 3.3215C1.63769 8.67025 5.82094 12.8535 11.1697 14.4265L11.3474 14.479C11.4269 14.5022 11.5109 14.506 11.5922 14.4897C11.5999 14.4882 11.6239 14.4832 11.6612 14.476C13.3279 14.1425 14.6219 12.8255 14.9262 11.1532C14.9574 10.9802 14.9824 10.843 14.9824 10.843L14.9822 10.8433ZM8.8342 9.7245L8.84469 9.728L8.84794 9.729C8.93919 9.75775 8.99119 9.75 8.99119 9.75C9.12369 9.75 9.25094 9.69725 9.34469 9.6035L10.0812 8.867C10.4669 8.4815 11.0847 8.4595 11.4969 8.8165L13.9482 10.941L13.9422 10.9745C13.7144 12.227 12.7544 13.217 11.5129 13.4853L11.4517 13.4673C6.42919 11.99 2.50119 8.062 1.02394 3.0395L1.0072 2.9825C1.2937 1.823 2.33595 1 3.54045 1H4.0092L5.6947 2.99175C6.0437 3.40425 6.01845 4.01575 5.6362 4.398C5.24445 4.7895 4.88769 5.14675 4.88769 5.14675C4.75019 5.284 4.70494 5.4885 4.77144 5.671C5.45569 7.553 6.93819 9.0355 8.82019 9.71975L8.8342 9.7245Z" fill="#2563EB"></path>
                        </svg>
                      </div>
                      <div className="absolute bottom-0 right-0 z-0 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="158" height="99" viewBox="0 0 158 99" fill="none">
                          <g filter="url(#filter0_f_6996_23342)">
                            <circle cx="46.9223" cy="46.9223" r="46.9223" transform="matrix(-1 0 0 1 177.564 90.6189)" fill="#2563EB"></circle>
                          </g>
                          <defs>
                            <filter id="filter0_f_6996_23342" x="-40.0311" y="-33.1321" width="341.347" height="341.347" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                              <feGaussianBlur stdDeviation="61.8755" result="effect1_foregroundBlur_6996_23342"></feGaussianBlur>
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </button>

                    {/* Action Card 2: Discover All Courses */}
                    <div
                      className="cursor-pointer z-[20] flex h-full flex-1 flex-col items-end justify-between overflow-hidden rounded-[11.855px] border border-[rgba(255,255,255,0.20)] bg-[rgba(25,22,23,0.60)] px-[20px] py-[16px] backdrop-blur-[51.56px] sm:h-[106px]"
                      onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <p className="flex max-w-[150px] flex-shrink-0 -rotate-[0.297deg] flex-col justify-center self-stretch font-gellix text-xs md:text-lg font-normal not-italic tracking-[0.512px] text-white sm:max-w-full">
                        Discover All Courses
                      </p>
                      <div className="flex h-9 w-9 mt-2 items-center justify-center rounded-full bg-white">
                        <svg className="h-5 w-5 text-[#3B82F6]" xmlns="http://www.w3.org/2000/svg" width="13" height="7" viewBox="0 0 13 7" fill="none">
                          <path d="M6.50063 6.44812C5.97563 6.44812 5.45062 6.24563 5.05312 5.84813L0.163125 0.958125C-0.054375 0.740625 -0.054375 0.380625 0.163125 0.163125C0.380625 -0.054375 0.740625 -0.054375 0.958125 0.163125L5.84813 5.05312C6.20813 5.41312 6.79313 5.41312 7.15313 5.05312L12.0431 0.163125C12.2606 -0.054375 12.6206 -0.054375 12.8381 0.163125C13.0556 0.380625 13.0556 0.740625 12.8381 0.958125L7.94813 5.84813C7.55063 6.24563 7.02563 6.44812 6.50063 6.44812Z" fill="#2563EB"></path>
                        </svg>
                      </div>
                      <div className="absolute bottom-0 right-0 z-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="158" height="99" viewBox="0 0 158 99" fill="none">
                          <g filter="url(#filter0_f_6996_23342)">
                            <circle cx="46.9223" cy="46.9223" r="46.9223" transform="matrix(-1 0 0 1 177.564 90.6189)" fill="#2563EB"></circle>
                          </g>
                          <defs>
                            <filter id="filter0_f_6996_23342" x="-40.0311" y="-33.1321" width="341.347" height="341.347" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                              <feGaussianBlur stdDeviation="61.8755" result="effect1_foregroundBlur_6996_23342"></feGaussianBlur>
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="hidden md:flex mt-2">
                  <div className="z-[10] flex whitespace-nowrap items-start justify-start gap-2 w-full">

                    {/* Learner Rating Card */}
                    <div className="relative flex h-full flex-1 flex-col overflow-hidden rounded-[11.855px] border border-[rgba(255,255,255,0.20)] bg-[rgba(25,22,23,0.60)] px-[20px] py-[14px] backdrop-blur-[51.56px] sm:px-[20px] sm:py-[12px]">
                      <div className="flex items-start flex-col">
                        <div className="flex gap-2">
                          <div className="flex items-center justify-center py-[16px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M12 2L14.97 8.11L21.7 9.08L16.85 13.75L18 20.5L12 17.27L6 20.5L7.15 13.75L2.3 9.08L9.03 8.11L12 2Z" fill="#FBBF24"></path>
                            </svg>
                          </div>
                          <div className="flex items-baseline leading-[200%]">
                            <p className="font-gellix text-[24px] md:text-[28px] font-[400] leading-[200%] text-white">{HOMEPAGE_AVERAGE_RATING}</p>
                            <span className="font-gellix text-xs md:text-sm font-[400] leading-[200%] text-white/60">/5</span>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-gellix text-xs md:text-sm font-[400] leading-[200%] text-white/60">First-Party Learner Rating</span>
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-0 z-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="158" height="99" viewBox="0 0 158 99" fill="none">
                          <g filter="url(#filter0_f_6996_23342)">
                            <circle cx="46.9223" cy="46.9223" r="46.9223" transform="matrix(-1 0 0 1 177.564 90.6189)" fill="#2563EB"></circle>
                          </g>
                          <defs>
                            <filter id="filter0_f_6996_23342" x="-40.0311" y="-33.1321" width="341.347" height="341.347" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                              <feGaussianBlur stdDeviation="61.8755" result="effect1_foregroundBlur_6996_23342"></feGaussianBlur>
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    {/* Published Reviews Card */}
                    <div className="relative flex h-full flex-1 flex-col overflow-hidden rounded-[11.855px] border border-[rgba(255,255,255,0.20)] bg-[rgba(25,22,23,0.60)] px-[20px] py-[14px] backdrop-blur-[51.56px] sm:px-[20px] sm:py-[12px]">
                      <div className="flex items-start flex-col">
                        <div className="flex gap-2">
                          <div className="flex items-center justify-center py-[16px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M8 7H16M8 12H16M8 17H13M7 3H17C18.1046 3 19 3.89543 19 5V19L15.5 16.5L12 19L8.5 16.5L5 19V5C5 3.89543 5.89543 3 7 3Z" stroke="#93C5FD" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <div className="flex items-baseline leading-[200%]">
                            <p className="font-gellix text-[24px] md:text-[28px] font-[400] leading-[200%] text-white">{COURSE_REVIEW_SUMMARY.reviewCount}</p>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-gellix text-xs md:text-sm font-[400] leading-[200%] text-white/60">Published Learner Reviews</span>
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-0 z-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="158" height="99" viewBox="0 0 158 99" fill="none">
                          <g filter="url(#filter0_f_6996_23342)">
                            <circle cx="46.9223" cy="46.9223" r="46.9223" transform="matrix(-1 0 0 1 177.564 90.6189)" fill="#2563EB"></circle>
                          </g>
                          <defs>
                            <filter id="filter0_f_6996_23342" x="-40.0311" y="-33.1321" width="341.347" height="341.347" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                              <feGaussianBlur stdDeviation="61.8755" result="effect1_foregroundBlur_6996_23342"></feGaussianBlur>
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    {/* Skilled Learners Card */}
                    <div className="relative flex h-full flex-1 flex-col overflow-hidden rounded-[11.855px] border border-[rgba(255,255,255,0.20)] bg-[rgba(25,22,23,0.60)] px-[20px] py-[14px] backdrop-blur-[51.56px] sm:px-[20px] sm:py-[12px]">
                      <div className="flex items-start flex-col">
                        <div className="flex gap-2">
                          <div className="flex h-full items-center justify-center py-[20px]">
                            <div className="flex items-center justify-center">
                              {/* <img alt="ellipse" src="/assets/Mobile.png" className="w-[106px] h-[34px] object-contain" /> */}
                            </div>
                          </div>
                          <div className="flex items-baseline leading-[200%]">
                            <p className="font-gellix text-[24px] md:text-[28px] font-[400] leading-[200%] text-white">{COURSE_REVIEW_SUMMARY.courseCount}</p>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-gellix text-xs md:text-sm font-[400] leading-[200%] text-white/60">Rated Career Programmes</span>
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-0 z-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="158" height="99" viewBox="0 0 158 99" fill="none">
                          <g filter="url(#filter0_f_6996_23342)">
                            <circle cx="46.9223" cy="46.9223" r="46.9223" transform="matrix(-1 0 0 1 177.564 90.6189)" fill="#2563EB"></circle>
                          </g>
                          <defs>
                            <filter id="filter0_f_6996_23342" x="-40.0311" y="-33.1321" width="341.347" height="341.347" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                              <feGaussianBlur stdDeviation="61.8755" result="effect1_foregroundBlur_6996_23342"></feGaussianBlur>
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Mobile version of grids excluded for brevity but easy to duplicate structure if needed as in original HTML */}
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
                  className="absolute right-3 top-12 z-[10] flex w-[166px] flex-col items-center justify-center gap-[12px] rounded-[7.33px] border-[0.275px] border-white/30 bg-[rgba(0,0,0,0.15)] px-3 py-3 backdrop-blur-[1.637px] sm:right-0 sm:top-8 sm:w-[226px] sm:gap-[18px] sm:px-4 sm:py-[24px]"
                  style={{ transition: "opacity 800ms cubic-bezier(0.4, 0, 0.2, 1), transform 800ms cubic-bezier(0.4, 0, 0.2, 1)" }}
                >
                  <div style={{ opacity: 1, transform: "scale(1)", transition: "opacity 800ms cubic-bezier(0.4, 0, 0.2, 1), transform 800ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="99" height="87" viewBox="0 0 99 87" fill="none">
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
                  <div className="whitespace-nowrap font-gellix text-[10px] font-normal leading-[19.652px] text-white sm:text-xs">
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
    </div>
  );
}
