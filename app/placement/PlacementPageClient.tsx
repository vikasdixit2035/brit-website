"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  GraduationCap,
  Handshake,
  Laptop,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Phone,
  Quote,
  SearchCheck,
  ShieldCheck,
  Star,
  Target,
  Users,
} from "lucide-react";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_PHONE_DISPLAY } from "@/lib/site";

// --- Data Constants ---
const stats = [
  { icon: Target, value: "6-Step", label: "Career Roadmap" },
  { icon: ClipboardCheck, value: "8+", label: "Portfolio Assets" },
  { icon: MessageCircle, value: "Mock", label: "Interview Prep" },
  { icon: BriefcaseBusiness, value: "UK", label: "Job-Search Focus" },
  { icon: ShieldCheck, value: "100%", label: "Transparency" },
];

const roadmap = [
  { icon: Target, title: "Career Mapping", text: "Identify target roles in the UK market and establish a clear baseline for your transition.", detail: "We start by analyzing your current skill set against top employer requirements, mapping out a personalized trajectory for roles in Data, AI, and Automation." },
  { icon: SearchCheck, title: "Skill Gap Analysis", text: "Pinpoint exact technical and employability gaps.", detail: "Stop guessing what employers want. We conduct a deep-dive audit of your profile to highlight exactly which tools and frameworks you need to master." },
  { icon: BarChart3, title: "Practical Training", text: "Master Excel, SQL, Power BI, Python & AI.", detail: "Move beyond theory. Our hands-on training ensures you can actually execute the tasks expected of you on day one of your new job." },
  { icon: ClipboardCheck, title: "Portfolio Building", text: "Create evidence of your capabilities for employers.", detail: "Build 3-5 enterprise-grade projects that serve as undeniable proof of your skills during interviews and on your LinkedIn profile." },
  { icon: MessageCircle, title: "Interview Mastery", text: "Rigorous technical and HR mock interviews.", detail: "Practice articulating your project decisions, handling behavioral questions, and passing technical assessments with confidence." },
  { icon: BriefcaseBusiness, title: "Targeted Search", text: "Strategic application and networking processes.", detail: "Learn how to bypass the standard application black hole using targeted outreach, alumni networking, and professional follow-ups." },
];

const stories = [
  {
    name: "Aisha Khan",
    role: "Junior Data Analyst",
    company: "FinTech Startup, London",
    text: "The portfolio-first approach changed everything. Instead of just sending my CV, I was able to walk interviewers through a live Power BI dashboard I built during the program.",
    image: "/avatar-1.png",
  },
  {
    name: "Rahul Sharma",
    role: "BI Developer",
    company: "Retail Group, Manchester",
    text: "I was struggling to get past the initial screening. The mock interviews and CV optimization helped me translate my past experience into the language tech recruiters want to hear.",
    image: "/avatar-2.png",
  },
  {
    name: "Sara Ahmed",
    role: "Operations Analyst",
    company: "Healthcare Provider, Leeds",
    text: "The alumni network was invaluable. I connected with a previous learner who referred me internally, skipping the queue of hundreds of applicants.",
    image: "/avatar-3.png",
  },
];

const hiringCompanies = [
  { name: "Technology & SaaS", icon: Laptop, desc: "Cloud, AI, and software providers" },
  { name: "Financial Services", icon: LineChart, desc: "Banks, FinTech, and trading firms" },
  { name: "Consulting Firms", icon: BriefcaseBusiness, desc: "Management and tech consultancies" },
  { name: "Retail & E-commerce", icon: Building2, desc: "Major UK retailers and online brands" },
];

const hiringPartners = [
  { title: "Skill-Verified Talent", text: "Employers know our learners have passed rigorous project milestones." },
  { title: "Direct Referrals", text: "We connect standout learners directly with partners seeking specific technical skills." },
  { title: "Day-One Readiness", text: "Our candidates are trained on actual business problems, not just academic theory." },
];

// --- Animation Variants ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function PlacementPageClient() {
  const [banner, setBanner] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-[#f7f3ea] font-sans text-[#241a1f] selection:bg-[#d4af37] selection:text-[#24101f]">
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />

      {/* --- HERO SECTION --- */}
      <section 
        className="relative overflow-hidden bg-[#24101f] text-white"
        style={{ paddingTop: banner ? "160px" : "120px", paddingBottom: "100px" }}
      >
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#d95700]/20 blur-[120px]" />
          <div className="absolute bottom-0 left-10 h-[400px] w-[400px] rounded-full bg-[#d4af37]/15 blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
              <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                <GraduationCap className="h-4 w-4" />
                Career Acceleration
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl font-black leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
                Don't Just Learn. <br/>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#fceb9c] bg-clip-text text-transparent">Get Hired.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 text-lg font-medium leading-relaxed text-slate-300">
                End-to-end career support tailored for the UK market. We transform your raw skills into undeniable portfolio assets, optimizing everything from your CV to your final interview.
              </motion.p>
              
              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="#contact" className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#d4af37] px-8 py-4 text-sm font-black text-slate-950 transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                  <span className="relative z-10 flex items-center gap-2">
                    Book Career Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">Placement Readiness</h3>
                    <p className="text-xs text-slate-400">Live Dashboard Preview</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#d4af37]/30 bg-[#d4af37]/10 text-xl font-black text-[#d4af37]">
                    85%
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: "Portfolio Strength", val: "Strong", color: "bg-emerald-500", width: "90%" },
                    { label: "CV Optimization", val: "Reviewed", color: "bg-[#d95700]", width: "100%" },
                    { label: "Interview Prep", val: "In Progress", color: "bg-[#d4af37]", width: "65%" },
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-slate-300">
                        <span>{item.label}</span>
                        <span>{item.val}</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: item.width }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                          className={`h-full rounded-full ${item.color}`} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="relative z-20 mx-auto -mt-12 max-w-7xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] md:grid-cols-5"
        >
          {stats.map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center border-slate-100 p-4 text-center last:border-0 md:border-r">
              <item.icon className="mb-3 h-6 w-6 text-[#d95700]" />
              <div className="text-2xl font-black text-[#241a1f]">{item.value}</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* --- INTERACTIVE ROADMAP --- */}
      <section id="roadmap" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black tracking-tight text-[#241a1f]">The 6-Step Transformation</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">A systematic, predictable pathway designed to remove the guesswork from your job search.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-3">
            {roadmap.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`group relative flex items-center gap-4 rounded-xl p-4 text-left transition-all ${
                    isActive ? "bg-[#d95700] shadow-lg" : "hover:bg-[#f0eadf]"
                  }`}
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${isActive ? "bg-white/20 text-white" : "bg-white text-[#d95700] shadow-sm"}`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className={`font-bold ${isActive ? "text-white" : "text-[#241a1f]"}`}>{step.title}</h3>
                    <p className={`text-sm ${isActive ? "text-white/75" : "text-[#6f665c]"}`}>{step.text}</p>
                  </div>
                  {isActive && (
                    <motion.div layoutId="active-indicator" className="absolute right-4 text-white">
                      <ChevronRight className="h-5 w-5" />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#061a38] p-8 text-white shadow-2xl lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#d4af37,transparent_50%)] opacity-20" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 flex h-full flex-col justify-center"
              >
                <div className="mb-6 inline-flex items-center justify-center rounded-lg bg-[#d4af37]/20 p-4 text-[#d4af37]">
                  {(() => {
                    const Icon = roadmap[activeStep].icon;
                    return <Icon className="h-10 w-10" />;
                  })()}
                </div>
                <div className="mb-2 text-sm font-bold uppercase tracking-widest text-[#d4af37]">Stage 0{activeStep + 1}</div>
                <h3 className="mb-4 text-3xl font-black">{roadmap[activeStep].title}</h3>
                <p className="text-lg leading-relaxed text-slate-300">{roadmap[activeStep].detail}</p>
                
                <div className="mt-8 border-t border-white/10 pt-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">Key Deliverables</h4>
                  <ul className="mt-4 space-y-3">
                    {[1, 2].map((_, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-200">
                        <CheckCircle2 className="h-5 w-5 text-[#d4af37]" />
                        Structured milestone completion
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- SUCCESS STORIES --- */}
      <section className="bg-slate-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black tracking-tight text-[#241a1f]">Learner Success Stories</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Real outcomes from dedicated learners who followed the framework.</p>
            <Link
              href="/reviews"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#d95700] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[#d95700]/20 transition-all hover:-translate-y-0.5 hover:bg-[#c45118] hover:shadow-xl"
            >
              View All Reviews
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {stories.map((story, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-xl"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-slate-100" />
                <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                  <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-[#d4af37] bg-slate-200">
                    <Image src={story.image} alt={story.name} width={56} height={56} className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#241a1f]">{story.name}</h3>
                    <p className="text-sm font-bold text-[#d95700]">{story.role}</p>
                    <p className="text-xs text-slate-500">{story.company}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-slate-600">"{story.text}"</p>
                <div className="mt-6 flex text-[#d4af37]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMPANIES ACTIVELY HIRING & HIRING PARTNERS --- */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            
            {/* Companies Actively Hiring */}
            <div>
              <h2 className="mb-2 text-3xl font-black tracking-tight text-[#241a1f]">Industries Actively Hiring</h2>
              <p className="mb-8 text-slate-600">Our learners research and target high-growth roles across these major sectors in the UK.</p>
              
              <div className="grid grid-cols-2 gap-4">
                {hiringCompanies.map((company, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col items-start rounded-xl border border-[#ded6c8] bg-[#f7f3ea] p-6"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f0eadf] text-[#d95700]">
                      <company.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-black text-[#241a1f]">{company.name}</h3>
                    <p className="mt-1 text-xs text-slate-500">{company.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hiring Partners Approach */}
            <div className="rounded-3xl bg-[#24101f] p-8 text-white shadow-2xl lg:p-12">
              <Handshake className="mb-6 h-10 w-10 text-[#d4af37]" />
              <h2 className="mb-4 text-3xl font-black">Our Hiring Partners Approach</h2>
              <p className="mb-8 text-slate-300">We collaborate with employers looking for validated talent. Our candidates don't just have certificates; they have enterprise-grade project evidence.</p>
              
              <div className="space-y-6">
                {hiringPartners.map((partner, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/20 text-[#d4af37]">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{partner.title}</h4>
                      <p className="text-sm text-slate-400">{partner.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- ALUMNI NETWORK --- */}
      <section className="bg-[#24101f] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Network className="mx-auto mb-6 h-12 w-12 text-[#d4af37]" />
          <h2 className="text-4xl font-black tracking-tight">The Alumni Advantage</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">Your network is your net worth. Gain immediate access to a community of professionals navigating the same UK market.</p>
          
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { title: "Peer Referrals", desc: "Skip the queue with internal recommendations from past alumni working at target companies." },
              { title: "Interview Circles", desc: "Practice with peers who have just passed the exact interviews you're preparing for." },
              { title: "Industry Insights", desc: "Get real-time updates on which companies are actively hiring and the questions they ask." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left transition-colors hover:bg-white/10"
              >
                <h3 className="mb-3 text-xl font-bold text-[#d4af37]">{feature.title}</h3>
                <p className="leading-relaxed text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GET IN TOUCH CTA --- */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-200 lg:flex">
            
            {/* Left side: Context */}
            <div className="bg-[#d4af37] p-10 lg:w-5/12 lg:p-12">
              <h2 className="text-3xl font-black text-slate-950">Ready to Get Hired?</h2>
              <p className="mt-4 text-slate-800 font-medium leading-relaxed">
                Stop sending applications into the void. Let's build a strategy that gets you noticed by top UK employers.
              </p>
              
              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4 text-slate-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="font-bold">admissions@britinstitute.uk</span>
                </div>
                <div className="flex items-center gap-4 text-slate-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/10">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="font-bold">{SITE_PHONE_DISPLAY}</span>
                </div>
                <div className="flex items-center gap-4 text-slate-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/10">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="font-bold">London, United Kingdom</span>
                </div>
              </div>
            </div>

            {/* Right side: Quick Form */}
            <div className="p-10 lg:w-7/12 lg:p-12">
              <h3 className="mb-6 text-2xl font-black text-slate-900">Request a Callback</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500">First Name</label>
                    <input type="text" className="w-full rounded-lg border border-[#ded6c8] bg-[#f7f3ea] p-3 text-sm focus:border-[#d95700] focus:outline-none focus:ring-1 focus:ring-[#d95700]" placeholder="John" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500">Last Name</label>
                    <input type="text" className="w-full rounded-lg border border-[#ded6c8] bg-[#f7f3ea] p-3 text-sm focus:border-[#d95700] focus:outline-none focus:ring-1 focus:ring-[#d95700]" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500">Email Address</label>
                  <input type="email" className="w-full rounded-lg border border-[#ded6c8] bg-[#f7f3ea] p-3 text-sm focus:border-[#d95700] focus:outline-none focus:ring-1 focus:ring-[#d95700]" placeholder="john@example.com" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500">Target Role</label>
                  <select className="w-full rounded-lg border border-[#ded6c8] bg-[#f7f3ea] p-3 text-sm focus:border-[#d95700] focus:outline-none focus:ring-1 focus:ring-[#d95700]">
                    <option>Data Analyst</option>
                    <option>Power BI Developer</option>
                    <option>Operations Analyst</option>
                    <option>AI/Automation Specialist</option>
                  </select>
                </div>
                <button type="submit" className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#d95700] p-4 text-sm font-black text-white transition-colors hover:bg-[#c45118]">
                  Book Free Consultation <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
