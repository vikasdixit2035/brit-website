"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import Link from "next/link";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { trackLead } from "@/lib/analytics";
import { DEFAULT_PHONE_COUNTRY_CODE, PHONE_COUNTRY_CODES } from "@/components/ui/phoneCountryCodes";

/* ── colour tokens ── */
const BLUE = "#1D4ED8";
const GOLD = "#D4AF37";
const DEEP = "#0a0f1e";

/* ── resource data ── */
const RESOURCES = [
  {
    id: "uk-data-analyst-salary-2026",
    title: "UK Data Analyst Salary Report (2026)",
    desc: "Understand salary ranges, hiring trends, and role expectations across industries.",
    cta: "Download Report",
    type: "Report",
    color: "#3B82F6",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    id: "how-to-start-data-analytics-uk",
    title: "How to Start a Career in Data Analytics (UK Guide)",
    desc: "A step-by-step roadmap to move into data analyst roles with no prior experience.",
    cta: "Download Guide",
    type: "Guide",
    color: "#8B5CF6",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    id: "ai-automation-uk-careers",
    title: "AI & Automation in the UK: Career Opportunities Report",
    desc: "Explore how AI is transforming roles and where new opportunities are emerging.",
    cta: "Download Report",
    type: "Report",
    color: "#10B981",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      </svg>
    ),
  },
  {
    id: "data-science-career-path-uk",
    title: "Data Science Career Path Guide (UK Edition)",
    desc: "Learn the skills, tools, and progression path for data science roles.",
    cta: "Download Guide",
    type: "Guide",
    color: "#F59E0B",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14" />
      </svg>
    ),
  },
];

/* ── animate-on-scroll ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { revealRef: ref, visible };
}

/* ══════════════════════════════════════════════════════════════════ */
export default function ResourcesPage() {
  const [banner, setBanner] = useState(true);

  /* reveal refs */
  const { revealRef: heroRevealRef, visible: heroVisible } = useReveal();
  const { revealRef: cardsRevealRef, visible: cardsVisible } = useReveal();
  const { revealRef: formRevealRef, visible: formVisible } = useReveal();

  /* form state */
  const [selected, setSelected] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCountry, setPhoneCountry] = useState(DEFAULT_PHONE_COUNTRY_CODE);
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const formRef = useRef<HTMLDivElement>(null);

  /* click "Download" → scroll to form */
  const handleDownloadClick = (resourceId: string) => {
    setSelected(resourceId);
    setSuccess(false);
    setError("");
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  /* submit */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) { setError("Name and email are required."); return; }
    setSubmitting(true);
    setError("");

    const API_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:4000/api/leads"
        : "https://api.britinstitute.uk/api/leads";

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() ? `${phoneCountry} ${phone.trim()}` : undefined,
          source: "resources",
          resource: selected,
          message: `Resource download: ${RESOURCES.find((r) => r.id === selected)?.title ?? selected}`,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      trackLead({
        formName: "resources_form",
        source: "resources",
        resource: selected,
      });
      setSuccess(true);
      setName(""); setEmail(""); setPhoneCountry(DEFAULT_PHONE_COUNTRY_CODE); setPhone("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const selectedResource = RESOURCES.find((r) => r.id === selected);

  return (
    <main style={{ background: "#FAFAFA", minHeight: "100vh", fontFamily: "var(--font-inter, system-ui, -apple-system, sans-serif)", color: "#111827" }}>
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />

      <style>{`
        /* ── RESOURCES PAGE ── */

        /* hero */
        .rs-hero {
          position: relative; background: ${DEEP};
          overflow: hidden; text-align: center;
        }
        .rs-hero::before {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 30% 90%, rgba(139,92,246,.18), transparent 60%),
            radial-gradient(ellipse 50% 55% at 70% 15%, rgba(59,130,246,.2), transparent 55%),
            radial-gradient(ellipse 40% 40% at 50% 50%, rgba(212,175,55,.08), transparent 50%);
          pointer-events: none;
        }
        .rs-hero::after {
          content: ''; position: absolute; inset: 0;
          background-image:
            radial-gradient(circle 2px at 12% 30%, rgba(255,255,255,.1) 0%, transparent 100%),
            radial-gradient(circle 2px at 85% 25%, rgba(255,255,255,.08) 0%, transparent 100%),
            radial-gradient(circle 1.5px at 45% 75%, rgba(255,255,255,.06) 0%, transparent 100%),
            radial-gradient(circle 2px at 70% 60%, rgba(255,255,255,.09) 0%, transparent 100%);
          pointer-events: none;
          animation: rs-drift 22s linear infinite alternate;
        }
        @keyframes rs-drift {
          0%   { transform: translateY(0) translateX(0); }
          100% { transform: translateY(-10px) translateX(6px); }
        }
        .rs-hero-inner {
          position: relative; z-index: 2;
          max-width: 860px; margin: 0 auto; padding: 0 24px;
        }
        .rs-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 18px; border-radius: 9999px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.1);
          color: rgba(255,255,255,.72);
          font-size: .82rem; font-weight: 600; letter-spacing: .04em;
          margin-bottom: 28px; backdrop-filter: blur(8px);
        }
        .rs-h1 {
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 800; color: #fff;
          line-height: 1.12; letter-spacing: -.035em;
          margin: 0 0 20px;
        }
        .rs-h1 span { color: ${GOLD}; }
        .rs-sub {
          font-size: 1.1rem; color: rgba(255,255,255,.55);
          line-height: 1.7; max-width: 660px; margin: 0 auto;
        }
        .rs-divider {
          width: 56px; height: 3px; border-radius: 2px;
          background: linear-gradient(90deg, ${BLUE}, ${GOLD});
          margin: 32px auto 0;
        }

        /* shared */
        .rs-section { max-width: 80%; margin: 0 auto; padding: 0 24px; }
        .rs-section-title { text-align: center; margin-bottom: 48px; }
        .rs-section-title h2 {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800; color: #111827; margin: 0 0 12px; letter-spacing: -.025em;
        }
        .rs-section-title h2 span { color: ${BLUE}; }
        .rs-section-title p {
          color: #6B7280; font-size: 1rem; line-height: 1.6;
          max-width: 540px; margin: 0 auto;
        }

        /* ── resource cards ── */
        .rs-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .rs-card {
          background: #fff; border-radius: 16px;
          padding: 0; overflow: hidden;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 4px 20px rgba(0,0,0,.04);
          display: flex; flex-direction: column;
          transition: transform .35s cubic-bezier(.4,0,.2,1), box-shadow .35s;
          position: relative;
        }
        .rs-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,.12);
        }
        .rs-card-accent {
          height: 4px; width: 100%;
        }
        .rs-card-body {
          padding: 28px 24px; flex: 1;
          display: flex; flex-direction: column;
        }
        .rs-card-icon {
          width: 52px; height: 52px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px; color: #fff;
          position: relative;
        }
        .rs-card-icon::after {
          content: ''; position: absolute; inset: -3px;
          border-radius: 17px; opacity: .2;
          z-index: -1;
        }
        .rs-card-type {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: .7rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: .08em; padding: 4px 10px; border-radius: 6px;
          width: fit-content; margin-bottom: 14px; color: #fff;
        }
        .rs-card-title {
          font-size: 1.1rem; font-weight: 700; color: #111827;
          margin: 0 0 10px; line-height: 1.35;
        }
        .rs-card-desc {
          font-size: .9rem; color: #6B7280; line-height: 1.65;
          margin: 0; flex: 1;
        }
        .rs-card-cta {
          display: inline-flex; align-items: center; gap: 8px;
          margin-top: 24px; padding: 12px 22px;
          border-radius: 10px; font-size: .88rem; font-weight: 700;
          border: none; cursor: pointer;
          color: #fff;
          transition: transform .25s, box-shadow .25s, filter .25s;
          text-decoration: none;
        }
        .rs-card-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,.15);
          filter: brightness(1.08);
        }
        .rs-card-cta svg {
          transition: transform .25s;
        }
        .rs-card-cta:hover svg {
          transform: translateX(3px);
        }

        /* selected glow ring */
        .rs-card.rs-selected {
          border-color: ${BLUE};
          box-shadow: 0 0 0 3px rgba(29,78,216,.18), 0 16px 48px rgba(0,0,0,.1);
        }

        /* ── download form ── */
        .rs-form-wrap {
          max-width: 580px; margin: 0 auto;
          background: #fff; border-radius: 20px;
          padding: 48px 40px;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 8px 40px rgba(0,0,0,.06);
          position: relative; overflow: hidden;
        }
        .rs-form-wrap::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, ${BLUE}, ${GOLD});
        }
        .rs-form-header {
          text-align: center; margin-bottom: 32px;
        }
        .rs-form-header h2 {
          font-size: 1.4rem; font-weight: 800;
          color: #111827; margin: 0 0 8px;
        }
        .rs-form-header p {
          font-size: .92rem; color: #6B7280;
          line-height: 1.5; margin: 0;
        }
        .rs-form-selected {
          display: flex; align-items: center; gap: 10px;
          background: #EFF6FF; border: 1px solid #BFDBFE;
          border-radius: 10px; padding: 14px 16px;
          margin-bottom: 24px;
        }
        .rs-form-selected-icon {
          width: 36px; height: 36px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; color: #fff;
        }
        .rs-form-selected-title {
          font-size: .88rem; font-weight: 600; color: #1E40AF;
          line-height: 1.35;
        }
        .rs-field {
          margin-bottom: 18px;
        }
        .rs-label {
          display: block; font-size: .82rem; font-weight: 600;
          color: #374151; margin-bottom: 6px;
        }
        .rs-input {
          width: 100%; padding: 13px 16px;
          border: 1.5px solid #E5E7EB; border-radius: 10px;
          font-size: .92rem; color: #111827;
          background: #FAFAFA;
          font-family: inherit;
          transition: border-color .2s, box-shadow .2s;
          outline: none;
        }
        .rs-input:focus {
          border-color: ${BLUE};
          box-shadow: 0 0 0 3px rgba(29,78,216,.1);
          background: #fff;
        }
        .rs-input::placeholder { color: #9CA3AF; }
        .rs-submit {
          width: 100%; padding: 14px;
          background: linear-gradient(135deg, ${BLUE}, #2563EB);
          color: #fff; font-weight: 700; font-size: .95rem;
          border: none; border-radius: 10px; cursor: pointer;
          font-family: inherit;
          transition: transform .25s, box-shadow .25s;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          margin-top: 8px;
        }
        .rs-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(29,78,216,.3);
        }
        .rs-submit:disabled {
          opacity: .65; cursor: not-allowed;
        }
        .rs-success {
          text-align: center; padding: 24px 0;
        }
        .rs-success-icon {
          width: 56px; height: 56px; border-radius: 50%;
          background: #ECFDF5; display: flex;
          align-items: center; justify-content: center;
          margin: 0 auto 16px;
        }
        .rs-success h3 {
          font-size: 1.15rem; font-weight: 700; color: #111827; margin: 0 0 8px;
        }
        .rs-success p {
          font-size: .9rem; color: #6B7280; line-height: 1.5; margin: 0;
        }
        .rs-error {
          background: #FEF2F2; border: 1px solid #FECACA;
          color: #DC2626; font-size: .85rem; font-weight: 500;
          padding: 10px 14px; border-radius: 8px;
          margin-bottom: 16px; text-align: center;
        }

        /* ── additional resources strip ── */
        .rs-extra-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
        }
        .rs-extra-card {
          background: #fff; border-radius: 14px;
          padding: 24px 20px;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 3px 16px rgba(0,0,0,.03);
          display: flex; align-items: flex-start; gap: 14px;
          transition: transform .3s, box-shadow .3s;
        }
        .rs-extra-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(0,0,0,.08);
        }
        .rs-extra-icon {
          width: 42px; height: 42px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; font-size: 1.3rem;
        }
        .rs-extra-title {
          font-size: .88rem; font-weight: 700; color: #111827; margin: 0 0 4px;
        }
        .rs-extra-desc {
          font-size: .8rem; color: #6B7280; line-height: 1.5; margin: 0;
        }

        /* ── CTA ── */
        .rs-cta-wrap { max-width: 900px; margin: 0 auto; padding: 0 24px; }
        .rs-cta {
          background: linear-gradient(135deg, #111827 0%, #1E3A5F 50%, ${BLUE} 100%);
          border-radius: 24px; padding: 60px 48px; text-align: center;
          position: relative; overflow: hidden;
          box-shadow: 0 24px 64px rgba(0,0,0,.2);
        }
        .rs-cta::before, .rs-cta::after {
          content: ''; position: absolute; border-radius: 50%;
          filter: blur(80px); pointer-events: none;
        }
        .rs-cta::before { width: 280px; height: 280px; top: -100px; left: -80px; background: rgba(139,92,246,.25); }
        .rs-cta::after  { width: 240px; height: 240px; bottom: -80px; right: -50px; background: rgba(212,175,55,.2); }
        .rs-cta-inner { position: relative; z-index: 2; }
        .rs-cta h2 { font-size: clamp(1.6rem,3vw,2.2rem); font-weight: 800; color: #fff; margin: 0 0 16px; }
        .rs-cta p { color: rgba(255,255,255,.6); font-size: 1.05rem; line-height: 1.7; max-width: 520px; margin: 0 auto 36px; }
        .rs-btn-gold {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 36px;
          background: linear-gradient(135deg, ${GOLD}, #FBBF24);
          color: #000; font-weight: 700; font-size: .95rem;
          border: none; border-radius: 9999px; cursor: pointer;
          text-decoration: none;
          transition: transform .3s, box-shadow .3s;
          box-shadow: 0 4px 20px rgba(212,175,55,.35);
        }
        .rs-btn-gold:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(212,175,55,.5); }

        /* ── Animations ── */
        .rs-fade-up {
          opacity: 0; transform: translateY(32px);
          transition: opacity .7s cubic-bezier(.4,0,.2,1), transform .7s cubic-bezier(.4,0,.2,1);
        }
        .rs-fade-up.rs-vis { opacity: 1; transform: translateY(0); }
        .rs-s1 { transition-delay: .1s; }
        .rs-s2 { transition-delay: .2s; }
        .rs-s3 { transition-delay: .3s; }
        .rs-s4 { transition-delay: .4s; }

        @media (min-width: 640px) {
          .rs-cards-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (min-width: 768px) {
          .rs-cards-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }

        @media (max-width: 768px) {
          .rs-form-wrap { padding: 32px 20px; }
          .rs-extra-grid { grid-template-columns: 1fr; }
          .rs-cta { padding: 40px 24px; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════ */}
      <section
        className="rs-hero"
        style={{ paddingTop: banner ? "160px" : "120px", paddingBottom: "80px" }}
      >
        <div ref={heroRevealRef} className={`rs-hero-inner rs-fade-up ${heroVisible ? "rs-vis" : ""}`}>
          <h1 className="rs-h1">
            AI, Data Analytics and Data Science<br />
            <span>Resources for the UK Market</span>
          </h1>
          <p className="rs-sub">
            Access practical guides, industry reports, and career insights designed to help you understand and enter high-demand tech roles in the UK.
          </p>
          <div className="rs-divider" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. RESOURCE CARDS
      ═══════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div ref={cardsRevealRef} className="rs-section">
          <div className={`rs-section-title rs-fade-up ${cardsVisible ? "rs-vis" : ""}`}>
            <h2>Featured <span>Resources</span></h2>
            <p>Free guides and reports to accelerate your career transition into data and AI.</p>
          </div>

          <div className="rs-cards-grid">
            {RESOURCES.map((r, i) => (
              <div
                key={r.id}
                className={`rs-card rs-fade-up rs-s${i + 1} ${cardsVisible ? "rs-vis" : ""} ${selected === r.id ? "rs-selected" : ""}`}
              >
                <div className="rs-card-accent" style={{ background: r.color }} />
                <div className="rs-card-body">
                  <div className="rs-card-icon" style={{ background: r.color }}>
                    {r.icon}
                  </div>
                  <div className="rs-card-type" style={{ background: `${r.color}CC` }}>
                    {r.type === "Report" ? (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                    ) : (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /></svg>
                    )}
                    {r.type}
                  </div>
                  <h3 className="rs-card-title">{r.title}</h3>
                  <p className="rs-card-desc">{r.desc}</p>
                  <button
                    className="rs-card-cta"
                    style={{ background: r.color }}
                    onClick={() => handleDownloadClick(r.id)}
                  >
                    {r.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. DOWNLOAD FORM (GATED)
      ═══════════════════════════════════════════════════ */}
      <section style={{ paddingBottom: 96, background: "#F3F4F6", paddingTop: 80 }}>
        <div ref={formRevealRef} className="rs-section">
          <div ref={formRef} className={`rs-form-wrap rs-fade-up ${formVisible ? "rs-vis" : ""}`}>
            {success ? (
              <div className="rs-success">
                <div className="rs-success-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>Thank You!</h3>
                <p>Your download link has been sent to your email. Check your inbox shortly.</p>
                <button
                  style={{
                    marginTop: 20, padding: "10px 24px",
                    background: BLUE, color: "#fff", border: "none",
                    borderRadius: 8, fontWeight: 600, fontSize: ".88rem",
                    cursor: "pointer", fontFamily: "inherit",
                  }}
                  onClick={() => { setSuccess(false); setSelected(null); }}
                >
                  Download Another Resource
                </button>
              </div>
            ) : (
              <>
                <div className="rs-form-header">
                  <h2>Get Instant Access to Resources</h2>
                  <p>Fill in your details to download the selected guide or report.</p>
                </div>

                {/* selected resource indicator */}
                {selectedResource ? (
                  <div className="rs-form-selected">
                    <div className="rs-form-selected-icon" style={{ background: selectedResource.color }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <span className="rs-form-selected-title">{selectedResource.title}</span>
                  </div>
                ) : (
                  <div className="rs-form-selected" style={{ background: "#FEF3C7", borderColor: "#FDE68A" }}>
                    <div className="rs-form-selected-icon" style={{ background: "#F59E0B" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    </div>
                    <span style={{ fontSize: ".85rem", fontWeight: 600, color: "#92400E" }}>Select a resource above to download</span>
                  </div>
                )}

                {error && <div className="rs-error">{error}</div>}

                <form onSubmit={handleSubmit}>
                  <div className="rs-field">
                    <label className="rs-label">Full Name *</label>
                    <input
                      className="rs-input"
                      type="text"
                      placeholder="e.g. John Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="rs-field">
                    <label className="rs-label">Email Address *</label>
                    <input
                      className="rs-input"
                      type="email"
                      placeholder="e.g. john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="rs-field">
                    <label className="rs-label">Phone Number <span style={{ color: "#9CA3AF", fontWeight: 400 }}>(optional)</span></label>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <div style={{ position: "relative", width: "180px" }}>
                        <select
                          className="rs-input"
                          style={{ width: "100%", paddingRight: "36px", appearance: "none" }}
                          value={phoneCountry}
                          onChange={(e) => setPhoneCountry(e.target.value)}
                        >
                          {PHONE_COUNTRY_CODES.map((country) => (
                            <option key={country.value} value={country.value}>
                              {country.label}
                            </option>
                          ))}
                        </select>
                        <div style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#6B7280" }}>
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <input
                        className="rs-input"
                        type="tel"
                        placeholder="e.g. 7700 900000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{ flex: 1 }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="rs-submit"
                    disabled={submitting || !selected}
                  >
                    {submitting ? (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: "spin 1s linear infinite" }}><path d="M12 2v4m0 12v4m-7.07-3.93 2.83-2.83m8.48-8.48 2.83-2.83M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83" /></svg>
                        Submitting…
                      </>
                    ) : (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download Now
                      </>
                    )}
                  </button>
                </form>

                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          EXTRA: More Ways to Learn
      ═══════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 80, paddingBottom: 96 }}>
        <div className="rs-section">
          <div className="rs-section-title">
            <h2>More Ways to <span>Learn</span></h2>
            <p>Explore additional pathways and resources from Brit Institute.</p>
          </div>

          <div className="rs-extra-grid">
            {[
              { icon: "📹", title: "Free Masterclass", desc: "Watch an intro session on data analytics and AI careers.", accent: "#3B82F6", href: "#masterclass" },
              { icon: "📊", title: "Career Quiz", desc: "Find out which data or AI career path fits you best.", accent: "#8B5CF6", href: "/careers" },
              { icon: "💬", title: "Free Consultation", desc: "Book a 1-on-1 call with our career guidance team.", accent: "#10B981", href: "/contact" },
              { icon: "📖", title: "Course Catalogue", desc: "Browse all available programmes and certifications.", accent: "#F59E0B", href: "/courses" },
            ].map((item, i) => (
              <Link href={item.href} key={i} style={{ textDecoration: "none" }}>
                <div className="rs-extra-card">
                  <div className="rs-extra-icon" style={{ background: `${item.accent}15`, color: item.accent }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="rs-extra-title">{item.title}</p>
                    <p className="rs-extra-desc">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════ */}
      <section style={{ paddingBottom: 96 }}>
        <div className="rs-cta-wrap">
          <div className="rs-cta">
            <div className="rs-cta-inner">
              <h2>Ready to Start Learning?</h2>
              <p>Explore structured programmes designed to take you from beginner to job-ready in data, AI, and automation.</p>
              <Link href="/courses" className="rs-btn-gold">
                Explore Courses
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
