"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import useReveal from "@/hooks/useReveal";

const LEARNER_STORIES = [
  {
    name: "Emma Thompson",
    role: "Business Analyst, London",
    avatar: "/testimonials/emma-thompson.webp",
    quote:
      "Brilliant course! The AI-powered modules made learning data science so much easier to grasp. Highly recommend to anyone looking to upskill.",
  },
  {
    name: "James Walker",
    role: "Marketing Data Executive, Manchester",
    avatar: "/testimonials/james-walker.webp",
    quote:
      "Loved the hands-on projects. The instructors were top-notch and really helped me build confidence with analytics tools.",
  },
  {
    name: "Meera Iyer",
    role: "Educator & Learning Analyst, Birmingham",
    avatar: "/testimonials/meera-iyer.jpg",
    quote:
      "As a teacher, I wanted to explore EdTech. Skill Versed gave me the tools to analyze student performance and build smarter learning paths.",
  },
  {
    name: "Rohan Desai",
    role: "Data Analyst, Bradford",
    avatar: "/testimonials/rohan-desai.jpg",
    quote:
      "I was stuck in a routine MIS role until Skill Versed gave me the confidence to pivot into analytics. The hands-on projects and mentorship made all the difference.",
  },
  {
    name: "Rebecca Hollowell",
    role: "Junior Analyst, Nottingham",
    avatar: "/testimonials/rebecca-hollowell.webp",
    quote:
      "The course encouraged analytical thinking and a systematic approach to understanding cybersecurity risks.",
  },
  {
    name: "Sophie Bennett",
    role: "Graduate Student, Bristol",
    avatar: "/testimonials/sophie-bennett.webp",
    quote:
      "Very practical and easy to follow. The mix of real-world case studies and AI tools made it engaging throughout.",
  },
  {
    name: "Leo Parker",
    role: "Freelancer - Power BI Specialist, London",
    avatar: "/testimonials/leo-parker.webp",
    quote:
      "Fantastic content! The AI-driven dashboards and exercises gave me real industry-level experience.",
  },
  {
    name: "Harry Collins",
    role: "Entrepreneur, Cambridge",
    avatar: "/testimonials/harry-collins.webp",
    quote:
      "After finishing my Business degree, I realised every role today demands data skills. Skillversed gave me hands-on experience with Excel, SQL, and Power BI. Now, I am a Junior Data Analyst and finally putting my business knowledge into action.",
  },
  {
    name: "Ankit Verma",
    role: "Operations Manager, Leeds",
    avatar: "/testimonials/ankit-verma.jpg",
    quote:
      "I used to rely on Excel for everything. After Skill Versed, I now build dashboards in Power BI and present insights confidently to leadership.",
  },
  {
    name: "Ella Brooks",
    role: "Junior Data Scientist, Nottingham",
    avatar: "/testimonials/ella-brooks.webp",
    quote:
      "Really impressed by Skill Versed's interactive learning. The AI-driven insights made complex topics feel easy.",
  },
  {
    name: "Grace Mitchell",
    role: "Research Assistant, Oxford",
    avatar: "/testimonials/grace-mitchell.webp",
    quote:
      "I wanted to turn my academic knowledge into something practical. Skillversed's Data Analytics course gave me real-world projects that helped me build my portfolio and confidence. It made my transition from university to industry smooth.",
  },
  {
    name: "Benjamin Hughes",
    role: "Financial Analyst, London",
    avatar: "/testimonials/benjamin-hughes.webp",
    quote:
      "Skill Versed's mix of AI tools and analytics training was superb. The projects felt very relevant to my field.",
  },
  {
    name: "Amelia Turner",
    role: "HR Analyst, Glasgow",
    avatar: "/testimonials/amelia-turner.webp",
    quote:
      "Thanks to Skill Versed, I transitioned into a data-driven HR role. The flexible schedule was a big plus.",
  },
  {
    name: "Neha Kulkarni",
    role: "Intern, Leeds",
    avatar: "/testimonials/neha-kulkarni.jpg",
    quote:
      "Coming from a commerce background, I never imagined working with data. Skill Versed simplified complex topics and helped me land my first internship in analytics.",
  },
  {
    name: "Liam Robinson",
    role: "Software Developer, Edinburgh",
    avatar: "/testimonials/liam-robinson.webp",
    quote:
      "A well-structured programme from Skill Versed! Great balance between theory, coding, and real applications.",
  },
  {
    name: "Daniel Price",
    role: "Operations Manager, Liverpool",
    avatar: "/testimonials/daniel-price.webp",
    quote:
      "Skill Versed helped me make sense of business data like never before. I now make decisions backed by analytics.",
  },
  {
    name: "Vikram Joshi",
    role: "Insights Specialist, London",
    avatar: "/testimonials/vikram-joshi.jpg",
    quote:
      "After years in sales, I wanted to shift into something more analytical. Skill Versed gave me the structure and confidence to make that leap. I now work with data every day and I love it.",
  },
] as const;

function LearnerCard({
  story,
  featured,
}: {
  story: (typeof LEARNER_STORIES)[number];
  featured: boolean;
}) {
  return (
    <article
      className={`relative w-[330px] md:w-[390px] flex-none overflow-hidden rounded-2xl border p-6 shadow-xl transition-transform duration-300 hover:-translate-y-2 ${
        featured
          ? "border-blue-400/30 bg-gradient-to-br from-blue-500/15 via-[#1A1D24] to-teal-400/10"
          : "border-gray-800 bg-[#1A1D24]"
      }`}
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />
      <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-teal-400/10 blur-3xl" />

      <div className="relative z-10 flex h-full min-h-[330px] flex-col">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex gap-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} size={16} className="fill-yellow-400" />
            ))}
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-teal-200">
            Learner Story
          </span>
        </div>

        <Quote className="mb-4 text-blue-400/80" size={34} />

        <p className="flex-grow text-sm leading-relaxed text-gray-200 md:text-[15px]">
          &ldquo;{story.quote}&rdquo;
        </p>

        <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-5">
          <div className="relative h-14 w-14 flex-none overflow-hidden rounded-full border-2 border-blue-400/40 bg-gray-800">
            <Image
              src={story.avatar}
              alt={story.name}
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">{story.name}</h3>
            <p className="mt-1 text-xs font-medium leading-snug text-gray-400">
              {story.role}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const { revealRef, cls } = useReveal();
  const displayStories = [...LEARNER_STORIES, ...LEARNER_STORIES];

  return (
    <section
      id="proof"
      className="w-full overflow-hidden bg-[#0F1218] py-24 font-sans"
      ref={revealRef}
    >
      <style>{`
        @keyframes infinite-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: infinite-scroll 75s linear infinite;
          width: max-content;
        }
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>

      <div className={`mx-auto max-w-[1400px] ${cls}`}>
        <header className="mb-12 px-6 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
            Success Stories
          </p>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
              Learners Say
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Real learners share how practical projects, mentorship, and
            AI-powered learning helped them build confidence and move towards
            data-driven careers.
          </p>
        </header>

        <div className="marquee-container relative mt-4 w-full overflow-hidden">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-[#0F1218] to-transparent md:w-32" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-[#0F1218] to-transparent md:w-32" />

          <div className="animate-marquee flex flex-nowrap items-stretch gap-6 px-6 pb-12 pt-4">
            {displayStories.map((story, idx) => (
              <LearnerCard
                key={`${story.name}-${idx}`}
                story={story}
                featured={idx % 5 === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
