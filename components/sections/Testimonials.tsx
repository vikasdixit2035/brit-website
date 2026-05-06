"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import useReveal from "@/hooks/useReveal";

const LEARNER_STORIES = [
  {
    name: "Olivia Carter",
    role: "Business Analyst, London",
    avatar: "/testimonials/emma-thompson.webp",
    quote:
      "Brilliant course! The AI-powered modules made learning data science so much easier to grasp. Highly recommend to anyone looking to upskill.",
  },
  {
    name: "Thomas Bennett",
    role: "Marketing Data Executive, Manchester",
    avatar: "/testimonials/james-walker.webp",
    quote:
      "Loved the hands-on projects. The instructors were top-notch and really helped me build confidence with analytics tools.",
  },
  {
    name: "Ananya Menon",
    role: "Educator & Learning Analyst, Birmingham",
    avatar: "/testimonials/meera-iyer.jpg",
    quote:
      "As a teacher, I wanted to explore EdTech. Brit Institute gave me the tools to analyze student performance and build smarter learning paths.",
  },
  {
    name: "Arjun Sharma",
    role: "Data Analyst, Bradford",
    avatar: "/testimonials/rohan-desai.jpg",
    quote:
      "I was stuck in a routine MIS role until Brit Institute gave me the confidence to pivot into analytics. The hands-on projects and mentorship made all the difference.",
  },
  {
    name: "Charlotte Wilson",
    role: "Junior Analyst, Nottingham",
    avatar: "/testimonials/rebecca-hollowell.webp",
    quote:
      "The course encouraged analytical thinking and a systematic approach to understanding cybersecurity risks.",
  },
  {
    name: "Megan Turner",
    role: "Graduate Student, Bristol",
    avatar: "/testimonials/sophie-bennett.webp",
    quote:
      "Very practical and easy to follow. The mix of real-world case studies and AI tools made it engaging throughout.",
  },
  {
    name: "Oliver Harris",
    role: "Freelancer - Power BI Specialist, London",
    avatar: "/testimonials/leo-parker.webp",
    quote:
      "Fantastic content! The AI-driven dashboards and exercises gave me real industry-level experience.",
  },
  {
    name: "George Edwards",
    role: "Entrepreneur, Cambridge",
    avatar: "/testimonials/harry-collins.webp",
    quote:
      "After finishing my Business degree, I realised every role today demands data skills. Brit Institute gave me hands-on experience with Excel, SQL, and Power BI. Now, I am a Junior Data Analyst and finally putting my business knowledge into action.",
  },
  {
    name: "Karan Patel",
    role: "Operations Manager, Leeds",
    avatar: "/testimonials/ankit-verma.jpg",
    quote:
      "I used to rely on Excel for everything. After Brit Institute, I now build dashboards in Power BI and present insights confidently to leadership.",
  },
  {
    name: "Hannah Clarke",
    role: "Junior Data Scientist, Nottingham",
    avatar: "/testimonials/ella-brooks.webp",
    quote:
      "Really impressed by Brit Institute's interactive learning. The AI-driven insights made complex topics feel easy.",
  },
  {
    name: "Lucy Morgan",
    role: "Research Assistant, Oxford",
    avatar: "/testimonials/grace-mitchell.webp",
    quote:
      "I wanted to turn my academic knowledge into something practical. Brit Institute's Data Analytics course gave me real-world projects that helped me build my portfolio and confidence. It made my transition from university to industry smooth.",
  },
  {
    name: "William Foster",
    role: "Financial Analyst, London",
    avatar: "/testimonials/benjamin-hughes.webp",
    quote:
      "Brit Institute's mix of AI tools and analytics training was superb. The projects felt very relevant to my field.",
  },
  {
    name: "Isabelle Evans",
    role: "HR Analyst, Glasgow",
    avatar: "/testimonials/amelia-turner.webp",
    quote:
      "Thanks to Brit Institute, I transitioned into a data-driven HR role. The flexible schedule was a big plus.",
  },
  {
    name: "Priya Nair",
    role: "Intern, Leeds",
    avatar: "/testimonials/neha-kulkarni.jpg",
    quote:
      "Coming from a commerce background, I never imagined working with data. Brit Institute simplified complex topics and helped me land my first internship in analytics.",
  },
  {
    name: "Jack Thompson",
    role: "Software Developer, Edinburgh",
    avatar: "/testimonials/liam-robinson.webp",
    quote:
      "A well-structured programme from Brit Institute! Great balance between theory, coding, and real applications.",
  },
  {
    name: "Adam Richardson",
    role: "Operations Manager, Liverpool",
    avatar: "/testimonials/daniel-price.webp",
    quote:
      "Brit Institute helped me make sense of business data like never before. I now make decisions backed by analytics.",
  },
  {
    name: "Siddharth Rao",
    role: "Insights Specialist, London",
    avatar: "/testimonials/vikram-joshi.jpg",
    quote:
      "After years in sales, I wanted to shift into something more analytical. Brit Institute gave me the structure and confidence to make that leap. I now work with data every day and I love it.",
  },
] as const;

const TESTIMONIAL_SPANS = [
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-4",
  "lg:col-span-2",
] as const;

function LearnerCard({
  story,
  className = "",
}: {
  story: (typeof LEARNER_STORIES)[number];
  className?: string;
}) {
  return (
    <article className={className}>
      <div className="relative min-h-[180px] rounded-md border border-[var(--gold-400)]/20 bg-white px-7 py-7 text-[var(--blue-deep)] shadow-[0_20px_45px_rgba(0,0,0,0.18)] md:min-h-[180px] md:px-8">
        <Quote
          aria-hidden="true"
          size={24}
          className="absolute left-5 top-5 fill-[var(--gold-400)] text-[var(--gold-400)]"
        />
        <p className="pl-1 pt-4 text-[15px] font-medium leading-8 md:text-[17px]">
          {story.quote}
        </p>
      </div>

      <div className="-mt-6 flex items-end gap-3 pl-0 md:pl-0">
        <div className="relative h-[72px] w-[72px] flex-none overflow-hidden rounded-full border-[6px] border-[var(--gold-400)] bg-[var(--blue-950)] shadow-lg">
          <Image
            src={story.avatar}
            alt={story.name}
            fill
            className="object-cover"
            sizes="72px"
          />
        </div>
        <div className="pb-1 text-white">
          <h3 className="text-sm font-extrabold leading-tight md:text-[15px]">
            {story.name}
          </h3>
          <p className="mt-2 text-xs font-bold leading-snug text-white/95 md:text-[14px]">
            {story.role}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const { revealRef, cls } = useReveal();

  return (
    <section
      id="proof"
      className="w-full overflow-hidden bg-[var(--blue-deep)] font-sans"
      ref={revealRef}
    >
      <div className={`mx-auto max-w-[1340px] px-5 pt-10 pb-16 md:px-8 lg:pt-12 lg:pb-20 ${cls}`}>
        <header className="mb-12 px-6 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[var(--gold-400)]">
            Success Stories
          </p>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            What Our{" "}
            <span className="text-[var(--gold-400)]">
              Learners Say
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Real learners share how Brit Institute empowered them to grow, build
            confidence, and achieve their goals.
          </p>
        </header>

        <div className="grid gap-x-6 gap-y-7 md:grid-cols-2 lg:grid-cols-6">
          {LEARNER_STORIES.map((story, idx) => (
            <LearnerCard
              key={story.name}
              story={story}
              className={`md:col-span-1 ${TESTIMONIAL_SPANS[idx]}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
