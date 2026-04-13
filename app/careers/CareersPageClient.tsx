"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* ── colour tokens ── */
const BLUE = "#1D4ED8";
const GOLD = "#D4AF37";
const DEEP = "#0a0f1e";

/* ── salary data ── */
const SALARY_DATA = [
  {
    role: "Data Analyst",
    min: 28000,
    max: 55000,
    color: "#3B82F6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    role: "Data Scientist",
    min: 40000,
    max: 80000,
    color: "#8B5CF6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14" />
      </svg>
    ),
  },
  {
    role: "AI / Automation Specialist",
    min: 35000,
    max: 75000,
    color: "#10B981",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
];

/* ── job roles ── */
const JOB_ROLES = [
  {
    title: "Data Analyst",
    desc: "Work with data to generate insights and support business decisions. Use tools like Excel, SQL, and Tableau to turn raw data into actionable reports.",
    color: "#3B82F6",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Data Scientist",
    desc: "Build predictive models and analyse complex datasets. Combine statistics, programming, and domain expertise to solve real-world problems.",
    color: "#8B5CF6",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14" />
      </svg>
    ),
  },
  {
    title: "AI / Automation Specialist",
    desc: "Design intelligent systems and automate business workflows. Apply machine learning, NLP, and automation platforms to drive efficiency.",
    color: "#10B981",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      </svg>
    ),
  },
];

/* ── skills ── */
const SKILLS = [
  { label: "Data Analysis & Visualisation", pct: 92, color: "#3B82F6" },
  { label: "Programming (Python, SQL)", pct: 88, color: "#8B5CF6" },
  { label: "Machine Learning Fundamentals", pct: 78, color: "#10B981" },
  { label: "AI Tools & Automation Platforms", pct: 74, color: "#F59E0B" },
  { label: "Problem-Solving & Business Understanding", pct: 85, color: "#EF4444" },
];

/* ── industries ── */
const INDUSTRIES = [
  { name: "Technology Companies", icon: "💻", accent: "#3B82F6" },
  { name: "Financial Services", icon: "🏦", accent: "#8B5CF6" },
  { name: "Consulting Firms", icon: "📊", accent: "#10B981" },
  { name: "E-commerce & Retail", icon: "🛒", accent: "#F59E0B" },
  { name: "Startups", icon: "🚀", accent: "#EF4444" },
];

/* ── career paths ── */
const CAREER_PATHS = [
  {
    title: "Data Analytics Track",
    steps: ["Junior Analyst", "Data Analyst", "Senior Analyst", "Lead / Manager"],
    color: "#3B82F6",
  },
  {
    title: "Data Science Track",
    steps: ["Data Analyst", "Junior Data Scientist", "Data Scientist", "Senior / Principal"],
    color: "#8B5CF6",
  },
  {
    title: "AI & Automation Track",
    steps: ["AI Executive", "Automation Specialist", "AI Engineer", "AI Consultant"],
    color: "#10B981",
  },
];

/* ── animate-on-scroll hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

/* ── animated counter ── */
function AnimatedNumber({ value, visible, prefix = "", suffix = "" }: { value: number; visible: boolean; prefix?: string; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1200;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setDisplay(value); clearInterval(timer); }
      else setDisplay(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [visible, value]);
  return <>{prefix}{display.toLocaleString()}{suffix}</>;
}

/* ══════════════════════════════════════════════════════════════════ */
export default function CareersPage() {
  const [banner, setBanner] = useState(true);

  const hero      = useReveal();
  const salaries  = useReveal();
  const roles     = useReveal();
  const skills    = useReveal();
  const hiring    = useReveal();
  const paths     = useReveal();
  const ctaSec    = useReveal();

  return (
    <main style={{ background: "#FAFAFA", minHeight: "100vh", fontFamily: "var(--font-inter, system-ui, -apple-system, sans-serif)", color: "#111827" }}>
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />

      <style>{`
        /* ── CAREERS PAGE ── */
        .cr-hero {
          position: relative;
          background: ${DEEP};
          overflow: hidden;
          text-align: center;
        }
        .cr-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 55% 45% at 20% 80%, rgba(29,78,216,.2), transparent 60%),
            radial-gradient(ellipse 50% 50% at 80% 20%, rgba(16,185,129,.12), transparent 55%),
            radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,92,246,.15), transparent 65%);
          pointer-events: none;
        }
        /* floating data nodes */
        .cr-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle 2px at 15% 25%, rgba(255,255,255,.12) 0%, transparent 100%),
            radial-gradient(circle 2px at 72% 18%, rgba(255,255,255,.1) 0%, transparent 100%),
            radial-gradient(circle 1.5px at 88% 65%, rgba(255,255,255,.08) 0%, transparent 100%),
            radial-gradient(circle 2px at 35% 78%, rgba(255,255,255,.1) 0%, transparent 100%),
            radial-gradient(circle 1.5px at 60% 45%, rgba(255,255,255,.06) 0%, transparent 100%);
          pointer-events: none;
          animation: cr-drift 20s linear infinite alternate;
        }
        @keyframes cr-drift {
          0%   { transform: translateY(0) translateX(0); }
          100% { transform: translateY(-12px) translateX(8px); }
        }

        .cr-hero-inner {
          position: relative; z-index: 2;
          max-width: 860px; margin: 0 auto; padding: 0 24px;
        }
        .cr-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 18px; border-radius: 9999px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.1);
          color: rgba(255,255,255,.72);
          font-size: .82rem; font-weight: 600; letter-spacing: .04em;
          margin-bottom: 28px; backdrop-filter: blur(8px);
        }
        .cr-h1 {
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 800; color: #fff;
          line-height: 1.12; letter-spacing: -.035em;
          margin: 0 0 20px;
        }
        .cr-h1 span { color: ${GOLD}; }
        .cr-sub {
          font-size: 1.1rem; color: rgba(255,255,255,.55);
          line-height: 1.7; max-width: 640px; margin: 0 auto;
        }
        .cr-divider {
          width: 56px; height: 3px; border-radius: 2px;
          background: linear-gradient(90deg, ${BLUE}, ${GOLD});
          margin: 32px auto 0;
        }

        /* ── shared ── */
        .cr-section { max-width: 1140px; margin: 0 auto; padding: 0 24px; }
        .cr-section-title { text-align: center; margin-bottom: 48px; }
        .cr-section-title h2 {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800; color: #111827; margin: 0 0 12px; letter-spacing: -.025em;
        }
        .cr-section-title h2 span { color: ${BLUE}; }
        .cr-section-title p {
          color: #6B7280; font-size: 1rem; line-height: 1.6;
          max-width: 540px; margin: 0 auto;
        }

        /* ── salary cards ── */
        .cr-salary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }
        .cr-salary-card {
          background: #fff; border-radius: 16px;
          padding: 32px 28px; border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 4px 20px rgba(0,0,0,.04);
          transition: transform .35s cubic-bezier(.4,0,.2,1), box-shadow .35s;
          position: relative; overflow: hidden;
        }
        .cr-salary-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0,0,0,.1);
        }
        .cr-salary-card::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
        }
        .cr-salary-icon {
          width: 48px; height: 48px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px; color: #fff;
        }
        .cr-salary-role {
          font-size: 1.08rem; font-weight: 700; color: #111827; margin: 0 0 20px;
        }
        .cr-salary-bar-wrap {
          background: #F3F4F6; border-radius: 8px;
          height: 12px; width: 100%; position: relative; overflow: hidden;
          margin-bottom: 14px;
        }
        .cr-salary-bar {
          height: 100%; border-radius: 8px;
          transition: width 1.2s cubic-bezier(.4,0,.2,1);
        }
        .cr-salary-range {
          display: flex; justify-content: space-between;
          font-size: .85rem; font-weight: 600;
        }

        /* ── role cards ── */
        .cr-roles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }
        .cr-role-card {
          background: #fff; border-radius: 16px;
          padding: 36px 28px; border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 4px 20px rgba(0,0,0,.04);
          transition: transform .35s cubic-bezier(.4,0,.2,1), box-shadow .35s;
          position: relative;
        }
        .cr-role-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0,0,0,.1);
        }
        .cr-role-icon {
          width: 56px; height: 56px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px; color: #fff;
        }
        .cr-role-title {
          font-size: 1.15rem; font-weight: 700; color: #111827; margin: 0 0 10px;
        }
        .cr-role-desc {
          font-size: .92rem; color: #6B7280; line-height: 1.65; margin: 0;
        }

        /* ── skills bars ── */
        .cr-skills-wrap {
          max-width: 700px; margin: 0 auto;
          display: flex; flex-direction: column; gap: 22px;
        }
        .cr-skill-row {
          display: flex; flex-direction: column; gap: 8px;
        }
        .cr-skill-label {
          display: flex; justify-content: space-between; align-items: center;
        }
        .cr-skill-name { font-size: .92rem; font-weight: 600; color: #111827; }
        .cr-skill-pct { font-size: .82rem; font-weight: 700; }
        .cr-skill-track {
          background: #F3F4F6; border-radius: 8px;
          height: 10px; width: 100%; overflow: hidden;
        }
        .cr-skill-fill {
          height: 100%; border-radius: 8px;
          transition: width 1s cubic-bezier(.4,0,.2,1);
        }

        /* ── industry grid ── */
        .cr-industry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 18px;
        }
        .cr-industry-card {
          background: #fff; border-radius: 14px;
          padding: 28px 20px; text-align: center;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 4px 18px rgba(0,0,0,.04);
          transition: transform .3s cubic-bezier(.4,0,.2,1), box-shadow .3s, border-color .3s;
          cursor: default;
        }
        .cr-industry-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0,0,0,.1);
        }
        .cr-industry-icon {
          font-size: 2rem; margin-bottom: 12px; display: block;
          filter: grayscale(0);
        }
        .cr-industry-name {
          font-size: .88rem; font-weight: 700; color: #111827;
        }

        /* ── career paths ── */
        .cr-paths-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }
        .cr-path-card {
          background: #fff; border-radius: 16px;
          padding: 32px 28px; border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 4px 20px rgba(0,0,0,.04);
          transition: transform .35s cubic-bezier(.4,0,.2,1), box-shadow .35s;
        }
        .cr-path-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(0,0,0,.1);
        }
        .cr-path-title {
          font-size: 1.05rem; font-weight: 700; color: #111827; margin: 0 0 24px;
          display: flex; align-items: center; gap: 10px;
        }
        .cr-path-dot {
          width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0;
        }
        .cr-path-steps {
          display: flex; flex-direction: column; gap: 0;
          position: relative; padding-left: 28px;
        }
        .cr-path-step {
          position: relative; padding: 12px 0; display: flex; align-items: center;
        }
        .cr-path-step::before {
          content: '';
          position: absolute; left: -22px; top: 50%; transform: translateY(-50%);
          width: 12px; height: 12px; border-radius: 50%;
          border: 2.5px solid; background: #fff; z-index: 2;
        }
        .cr-path-step:not(:last-child)::after {
          content: '';
          position: absolute; left: -17px; top: calc(50% + 6px);
          width: 2px; height: calc(100% - 2px);
        }
        .cr-path-step-label {
          font-size: .9rem; font-weight: 600; color: #374151;
          background: #F9FAFB; padding: 8px 16px; border-radius: 8px;
          border: 1px solid #E5E7EB; flex: 1;
          transition: background .2s, border-color .2s;
        }
        .cr-path-step:hover .cr-path-step-label {
          border-color: #D1D5DB; background: #F3F4F6;
        }
        .cr-path-arrow {
          display: flex; align-items: center; justify-content: center;
          padding: 4px 0; color: #D1D5DB;
        }

        /* ── CTA ── */
        .cr-cta-wrap { max-width: 900px; margin: 0 auto; padding: 0 24px; }
        .cr-cta {
          background: linear-gradient(135deg, #111827 0%, #1E3A5F 50%, ${BLUE} 100%);
          border-radius: 24px; padding: 60px 48px; text-align: center;
          position: relative; overflow: hidden;
          box-shadow: 0 24px 64px rgba(0,0,0,.2);
        }
        .cr-cta::before, .cr-cta::after {
          content: ''; position: absolute; border-radius: 50%;
          filter: blur(80px); pointer-events: none;
        }
        .cr-cta::before { width: 300px; height: 300px; top: -100px; left: -80px; background: rgba(59,130,246,.3); }
        .cr-cta::after  { width: 250px; height: 250px; bottom: -80px; right: -50px; background: rgba(212,175,55,.2); }
        .cr-cta-inner { position: relative; z-index: 2; }
        .cr-cta h2 { font-size: clamp(1.6rem,3vw,2.2rem); font-weight: 800; color: #fff; margin: 0 0 16px; letter-spacing: -.02em; }
        .cr-cta p { color: rgba(255,255,255,.6); font-size: 1.05rem; line-height: 1.7; max-width: 540px; margin: 0 auto 36px; }
        .cr-btn-gold {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 36px;
          background: linear-gradient(135deg, ${GOLD}, #FBBF24);
          color: #000; font-weight: 700; font-size: .95rem;
          border: none; border-radius: 9999px; cursor: pointer;
          text-decoration: none;
          transition: transform .3s, box-shadow .3s;
          box-shadow: 0 4px 20px rgba(212,175,55,.35);
        }
        .cr-btn-gold:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(212,175,55,.5); }

        /* ── Animations ── */
        .cr-fade-up {
          opacity: 0; transform: translateY(32px);
          transition: opacity .7s cubic-bezier(.4,0,.2,1), transform .7s cubic-bezier(.4,0,.2,1);
        }
        .cr-fade-up.cr-vis { opacity: 1; transform: translateY(0); }
        .cr-s1 { transition-delay: .1s; }
        .cr-s2 { transition-delay: .2s; }
        .cr-s3 { transition-delay: .3s; }
        .cr-s4 { transition-delay: .4s; }
        .cr-s5 { transition-delay: .5s; }

        @media (max-width: 768px) {
          .cr-salary-grid,
          .cr-roles-grid,
          .cr-paths-grid { grid-template-columns: 1fr; }
          .cr-industry-grid { grid-template-columns: repeat(2, 1fr); }
          .cr-cta { padding: 40px 24px; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════ */}
      <section
        className="cr-hero"
        style={{ paddingTop: banner ? "160px" : "120px", paddingBottom: "80px" }}
      >
        <div ref={hero.ref} className={`cr-hero-inner cr-fade-up ${hero.visible ? "cr-vis" : ""}`}>
          <div className="cr-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            Careers
          </div>
          <h1 className="cr-h1">
            Careers in <span>AI, Data Analytics</span><br />and Data Science in the UK
          </h1>
          <p className="cr-sub">
            Explore high-demand career paths, salary benchmarks, and the skills required to enter the UK&apos;s fastest-growing tech roles.
          </p>
          <div className="cr-divider" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. SALARY BENCHMARKS
      ═══════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div ref={salaries.ref} className="cr-section">
          <div className={`cr-section-title cr-fade-up ${salaries.visible ? "cr-vis" : ""}`}>
            <h2>Salary Insights Across <span>Key Roles</span></h2>
            <p>UK-based salary ranges for the most in-demand data and AI positions.</p>
          </div>

          <div className="cr-salary-grid">
            {SALARY_DATA.map((s, i) => {
              const barPct = (s.max / 80000) * 100;
              return (
                <div
                  key={i}
                  className={`cr-salary-card cr-fade-up cr-s${i + 1} ${salaries.visible ? "cr-vis" : ""}`}
                  style={{ ["--acc" as string]: s.color }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: s.color, borderRadius: "16px 16px 0 0" }} />
                  <div className="cr-salary-icon" style={{ background: s.color }}>{s.icon}</div>
                  <div className="cr-salary-role">{s.role}</div>

                  <div className="cr-salary-bar-wrap">
                    <div
                      className="cr-salary-bar"
                      style={{
                        width: salaries.visible ? `${barPct}%` : "0%",
                        background: `linear-gradient(90deg, ${s.color}, ${s.color}99)`,
                      }}
                    />
                  </div>

                  <div className="cr-salary-range">
                    <span style={{ color: s.color }}>
                      £<AnimatedNumber value={s.min} visible={salaries.visible} />
                    </span>
                    <span style={{ color: s.color }}>
                      £<AnimatedNumber value={s.max} visible={salaries.visible} suffix="+" />
                    </span>
                  </div>

                  <p style={{ fontSize: ".76rem", color: "#9CA3AF", marginTop: 12, marginBottom: 0, textAlign: "center" }}>
                    Varies by experience, location &amp; industry
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. JOB ROLES
      ═══════════════════════════════════════════════════ */}
      <section style={{ paddingBottom: 96, background: "#F3F4F6", paddingTop: 80 }}>
        <div ref={roles.ref} className="cr-section">
          <div className={`cr-section-title cr-fade-up ${roles.visible ? "cr-vis" : ""}`}>
            <h2>Popular <span>Career Roles</span></h2>
            <p>Explore the roles driving digital transformation across industries.</p>
          </div>

          <div className="cr-roles-grid">
            {JOB_ROLES.map((r, i) => (
              <div
                key={i}
                className={`cr-role-card cr-fade-up cr-s${i + 1} ${roles.visible ? "cr-vis" : ""}`}
              >
                <div className="cr-role-icon" style={{ background: r.color }}>{r.icon}</div>
                <h3 className="cr-role-title">{r.title}</h3>
                <p className="cr-role-desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. SKILLS REQUIRED
      ═══════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div ref={skills.ref} className="cr-section">
          <div className={`cr-section-title cr-fade-up ${skills.visible ? "cr-vis" : ""}`}>
            <h2>Skills Employers <span>Look For</span></h2>
            <p>The most requested skills by UK employers hiring for data and AI roles.</p>
          </div>

          <div className={`cr-skills-wrap cr-fade-up ${skills.visible ? "cr-vis" : ""}`}>
            {SKILLS.map((sk, i) => (
              <div key={i} className={`cr-skill-row cr-fade-up cr-s${i + 1} ${skills.visible ? "cr-vis" : ""}`}>
                <div className="cr-skill-label">
                  <span className="cr-skill-name">{sk.label}</span>
                  <span className="cr-skill-pct" style={{ color: sk.color }}>
                    {skills.visible ? sk.pct : 0}%
                  </span>
                </div>
                <div className="cr-skill-track">
                  <div
                    className="cr-skill-fill"
                    style={{
                      width: skills.visible ? `${sk.pct}%` : "0%",
                      background: `linear-gradient(90deg, ${sk.color}, ${sk.color}bb)`,
                    }}
                  />
                </div>
              </div>
            ))}
            <p style={{ fontSize: ".8rem", color: "#9CA3AF", textAlign: "center", marginTop: 8 }}>
              Based on UK job listing data for data &amp; AI roles.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. HIRING INDUSTRIES
      ═══════════════════════════════════════════════════ */}
      <section style={{ paddingBottom: 96, background: "#F3F4F6", paddingTop: 80 }}>
        <div ref={hiring.ref} className="cr-section">
          <div className={`cr-section-title cr-fade-up ${hiring.visible ? "cr-vis" : ""}`}>
            <h2>Industries Hiring for <span>These Roles</span></h2>
            <p>From finance to startups, data and AI talent is in demand everywhere.</p>
          </div>

          <div className="cr-industry-grid">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={i}
                className={`cr-industry-card cr-fade-up cr-s${i + 1} ${hiring.visible ? "cr-vis" : ""}`}
                style={{ borderTop: `3px solid ${ind.accent}` }}
              >
                <span className="cr-industry-icon">{ind.icon}</span>
                <span className="cr-industry-name">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. CAREER PATHS
      ═══════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div ref={paths.ref} className="cr-section">
          <div className={`cr-section-title cr-fade-up ${paths.visible ? "cr-vis" : ""}`}>
            <h2>Typical Career <span>Progression</span></h2>
            <p>See how professionals typically grow through these career tracks.</p>
          </div>

          <div className="cr-paths-grid">
            {CAREER_PATHS.map((p, i) => (
              <div
                key={i}
                className={`cr-path-card cr-fade-up cr-s${i + 1} ${paths.visible ? "cr-vis" : ""}`}
              >
                <h3 className="cr-path-title">
                  <span className="cr-path-dot" style={{ background: p.color }} />
                  {p.title}
                </h3>

                <div className="cr-path-steps">
                  {p.steps.map((step, si) => (
                    <div
                      key={si}
                      className="cr-path-step"
                      style={{
                        ["--step-color" as string]: p.color,
                      }}
                    >
                      <style>{`
                        .cr-path-card:nth-child(${i + 1}) .cr-path-step:nth-child(${si + 1})::before {
                          border-color: ${p.color};
                        }
                        .cr-path-card:nth-child(${i + 1}) .cr-path-step:nth-child(${si + 1}):not(:last-child)::after {
                          background: ${p.color}44;
                        }
                      `}</style>
                      <span className="cr-path-step-label">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          7. CTA
      ═══════════════════════════════════════════════════ */}
      <section style={{ paddingBottom: 96 }}>
        <div ref={ctaSec.ref} className={`cr-cta-wrap cr-fade-up ${ctaSec.visible ? "cr-vis" : ""}`}>
          <div className="cr-cta">
            <div className="cr-cta-inner">
              <h2>Start Your Career in Data or AI</h2>
              <p>
                Gain the skills required to enter these high-growth roles with structured, job-ready programmes.
              </p>
              <Link href="/courses" className="cr-btn-gold">
                Explore Courses
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
