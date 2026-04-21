"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import useReveal from "@/hooks/useReveal";

type ExpertCard = {
  name: string;
  title: string;
  photo: string;
  linkedinUrl?: string;
  bio: string;
  expertise: string[];
  companies: string[];
  highlight: string;
  guidance: string;
};

const EXPERTS: ExpertCard[] = [
  {
    name: "Alok Pandey",
    title: "Senior Data Analyst @ Stryker",
    photo: "/mentor1.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/alok-pandey-87825a89/",
    bio: "Senior Data Analyst with 7 years of experience in data and analytics, focused on supply chain analytics, process optimization, and measurable business outcomes. Experienced across Stryker, KPMG, EY, and NSUT.",
    expertise: ["SQL", "Power BI", "Python"],
    companies: ["Stryker", "KPMG", "EY", "NSUT"],
    highlight: "Data & analytics mentor",
    guidance: "Weekly guidance on learner portfolios, CV positioning, and interview readiness.",
  },
  {
    name: "Parag Agrawal",
    title: "Senior Analyst @ Accenture",
    photo: "/avatar-1.png",
    linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Parag%20Agrawal%20Accenture%20Noida",
    bio: "Java developer with 5+ years of experience building scalable, high-performance applications. Proficient in Core Java, Spring Boot, Spring MVC, Spring Batch, and Hibernate, with strong expertise in microservices and backend development.",
    expertise: ["Java", "Spring Boot", "Microservices"],
    companies: ["Accenture", "EbixCash", "IBM"],
    highlight: "Backend systems mentor",
    guidance: "Strong focus on practical builds: automation, GenAI workflows, and explainable outcomes.",
  },
];

// Vibrant color palettes for the tags
const SKILL_COLORS = [
  "bg-blue-500/10 border-blue-500/20 text-blue-300",
  "bg-purple-500/10 border-purple-500/20 text-purple-300",
  "bg-pink-500/10 border-pink-500/20 text-pink-300",
  "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
];

const COMPANY_COLORS = [
  "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
  "bg-amber-500/10 border-amber-500/20 text-amber-300",
  "bg-rose-500/10 border-rose-500/20 text-rose-300",
  "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
];

export default function IndustryExperts() {
  const { ref, cls } = useReveal();

  return (
    <section
      id="industry-experts"
      ref={ref}
      className="relative overflow-hidden bg-[#070B14] py-8 text-white lg:py-10"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.15),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(212,175,55,0.1),_transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_20%,transparent_80%,rgba(255,255,255,0.02))]" />

      <div className={`relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 ${cls}`}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center lg:mb-8"
        >
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
            <Sparkles size={14} />
            Industry Experts
          </div>
          <h2 className="font-gellix text-3xl font-bold tracking-tight sm:text-[2.2rem] lg:text-[2.4rem]">
            Learn from the <span className="text-[#D4AF37]">Best in Industry</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-white/75 sm:text-[15px]">
            Get mentored by professionals who have worked with global leaders and built scalable real-world solutions.
          </p>
        </motion.div>

        {/* Alternating Experts */}
        <div className="space-y-5 lg:space-y-6">
          {EXPERTS.map((expert, index) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className={`mx-auto flex max-w-[1380px] flex-col gap-4 rounded-[24px] border border-white/5 bg-white/[0.02] p-3 shadow-2xl shadow-black/10 sm:flex-row sm:items-start sm:gap-4 lg:p-4 ${index % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
            >
              {/* Image Side */}
              <div className="relative w-full sm:w-[175px] lg:w-[185px] xl:w-[195px]">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[20px] border border-white/10 bg-[#0D1220] shadow-xl">
                  <Image
                    src={expert.photo}
                    alt={expert.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 260px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                  {/* Floating Highlight Tag */}
                  <div className="absolute left-2.5 top-2.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-lg">
                    {expert.highlight}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div
                  className={`absolute -z-10 h-28 w-28 rounded-full bg-[#D4AF37]/10 blur-[50px] ${index % 2 === 1 ? "-left-8 -bottom-8" : "-right-8 -top-8"
                    }`}
                />
              </div>

              {/* Data Side */}
              <div className="flex w-full flex-col sm:flex-1">
                <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
                  Mentor Profile
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-[1.8rem] font-bold leading-tight text-white lg:text-[2rem]">{expert.name}</h3>
                  {expert.linkedinUrl && (
                    <a
                      href={expert.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-bold text-black transition-all hover:bg-[#D4AF37] hover:text-white"
                    >
                      <ExternalLink size={14} />
                      View Profile
                    </a>
                  )}
                </div>
                <div className="mt-1 text-[15px] font-medium leading-tight text-white/70">{expert.title}</div>

                <div className="mt-4 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Left Column: Bio & Guidance */}
                  <div className="flex w-full max-w-2xl flex-1 flex-col gap-4">
                    {/* Increased Font Size Here */}
                    <p className="text-[15px] sm:text-[16px] leading-relaxed text-white/80">
                      {expert.bio}
                    </p>
                    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-2.5 backdrop-blur-sm">
                      <div className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">
                          <CheckCircle2 size={12} />
                        </div>
                        <p className="text-[14px] leading-6 text-white/80">
                          {expert.guidance}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Expertise & Experience */}
                  <div className="flex w-fit shrink-0 flex-col gap-5 md:w-[280px]">
                    <div className="w-fit">
                      <div className="mb-2 text-[10px] font-bold uppercase text-white/65">
                        Core Expertise
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {expert.expertise.slice(0, 4).map((skill, i) => (
                          <span
                            key={skill}
                            className={`rounded-lg border px-2.5 py-1 text-[11px] font-medium ${SKILL_COLORS[i % SKILL_COLORS.length]}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="w-fit">
                      <div className="mb-2 text-[10px] font-bold uppercase text-white/65">
                        Experience at
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {expert.companies.map((company, i) => (
                          <span
                            key={company}
                            className={`rounded-lg border px-2.5 py-1 text-[11px] font-medium ${COMPANY_COLORS[i % COMPANY_COLORS.length]}`}
                          >
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
