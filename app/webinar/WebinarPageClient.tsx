"use client";

import Image from "next/image";
import { useState, useEffect, useRef, FormEvent } from "react";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_STATS } from "@/lib/site";
import { trackLead } from "@/lib/analytics";
import { DEFAULT_PHONE_COUNTRY_CODE, PHONE_COUNTRY_CODES } from "@/components/ui/phoneCountryCodes";

/* ── tokens ── */
const BLUE = "#1D4ED8";
const GOLD = "#D4AF37";
const DEEP = "#0a0f1e";

/* ── webinar date (update as needed) ── */
const WEBINAR_DATE = "16 May 2026";
const WEBINAR_TIME = "1 PM BST";
const SPEAKER_NAME = "Alok Pandey";
const SPEAKER_TITLE = "Senior Data Analyst @ Stryker";
const SPEAKER_PHOTO = "/mentor1.jpeg";
const SPEAKER_BIO_POINTS = [
  "7 years of experience in data and analytics",
  "Focused on supply chain analytics and process optimization",
  "Worked across Stryker, KPMG, EY, and NSUT",
  "Guidance on learner portfolios, CV positioning, and interview readiness",
];

/* ── what you'll learn ── */
const LEARN_POINTS = [
  {
    text: "Current demand for data analytics, data science, and AI roles in the UK",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    color: "#3B82F6",
  },
  {
    text: "Key skills and tools employers expect",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    color: "#F59E0B",
  },
  {
    text: "Step-by-step roadmap to enter these fields",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    color: "#8B5CF6",
  },
  {
    text: "Common mistakes beginners make and how to avoid them",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    color: "#EF4444",
  },
  {
    text: "How to build a portfolio that gets noticed",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    color: "#10B981",
  },
];

/* ── trust / proof stats ── */
const PROOF_STATS = [
  { value: SITE_STATS.learnersTrained, label: "Learners Trained", color: "#3B82F6" },
  { value: SITE_STATS.careerTransitions, label: "Career Transitions", color: "#8B5CF6" },
  { value: SITE_STATS.hiringPartners, label: "Hiring Partners", color: "#10B981" },
  { value: `${SITE_STATS.averageRating}★`, label: "Average Rating", color: "#F59E0B" },
];

/* ── reveal hook ── */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { revealRef: ref, visible };
}

/* ══════════════════════════════════════════════════════════════════ */
export default function WebinarPage() {
  const [banner, setBanner] = useState(true);

  const { revealRef: heroRevealRef, visible: heroVisible } = useReveal();
  const { revealRef: learnRevealRef, visible: learnVisible } = useReveal();
  const { revealRef: speakerRevealRef, visible: speakerVisible } = useReveal();
  const { revealRef: proofRevealRef, visible: proofVisible } = useReveal();
  const { revealRef: regSecRevealRef, visible: regSecVisible } = useReveal();

  /* form */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCountry, setPhoneCountry] = useState(DEFAULT_PHONE_COUNTRY_CODE);
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

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
          source: "webinar",
          message: `Webinar registration – ${WEBINAR_DATE}`,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      trackLead({
        formName: "webinar_form",
        source: "webinar",
      });
      setSuccess(true);
      setName(""); setEmail(""); setPhoneCountry(DEFAULT_PHONE_COUNTRY_CODE); setPhone("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main style={{ background: "#FAFAFA", minHeight: "100vh", fontFamily: "var(--font-inter, system-ui, -apple-system, sans-serif)", color: "#111827" }}>
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />

      <style>{`
        /* ── WEBINAR PAGE ── */

        /* hero */
        .wb-hero {
          position: relative; background: ${DEEP}; overflow: hidden;
        }
        .wb-hero::before {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 55% 50% at 25% 100%, rgba(29,78,216,.22), transparent 60%),
            radial-gradient(ellipse 50% 50% at 80% 0%, rgba(139,92,246,.18), transparent 55%),
            radial-gradient(ellipse 45% 40% at 55% 50%, rgba(212,175,55,.08), transparent 50%);
          pointer-events: none;
        }
        /* subtle grid overlay */
        .wb-hero::after {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%);
        }
        .wb-hero-inner {
          position: relative; z-index: 2;
          max-width: 1140px; margin: 0 auto; padding: 0 24px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 48px; align-items: center;
        }
        .wb-hero-left { color: #fff; }
        .wb-hero-right {
          display: flex; justify-content: center; align-items: center;
        }

        .wb-live-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 16px; border-radius: 9999px;
          background: rgba(239,68,68,.15);
          border: 1px solid rgba(239,68,68,.3);
          color: #FCA5A5; font-size: .78rem; font-weight: 700;
          letter-spacing: .06em; text-transform: uppercase;
          margin-bottom: 24px;
        }
        .wb-live-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #EF4444;
          animation: wb-pulse 1.5s ease-in-out infinite;
        }
        @keyframes wb-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .5; transform: scale(1.3); }
        }

        .wb-h1 {
          font-size: clamp(1.8rem, 3.8vw, 2.8rem);
          font-weight: 800; color: #fff;
          line-height: 1.15; letter-spacing: -.03em;
          margin: 0 0 18px;
        }
        .wb-h1 span { color: ${GOLD}; }
        .wb-sub {
          font-size: 1.05rem; color: rgba(255,255,255,.55);
          line-height: 1.7; margin: 0 0 28px; max-width: 480px;
        }

        .wb-meta {
          display: flex; flex-direction: column; gap: 10px;
          margin-bottom: 32px;
        }
        .wb-meta-item {
          display: flex; align-items: center; gap: 10px;
          font-size: .9rem; color: rgba(255,255,255,.7);
        }
        .wb-meta-icon {
          width: 36px; height: 36px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,.08);
          flex-shrink: 0; color: ${GOLD};
        }

        .wb-hero-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 16px 36px;
          background: linear-gradient(135deg, ${GOLD}, #FBBF24);
          color: #000; font-weight: 700; font-size: 1rem;
          border: none; border-radius: 12px; cursor: pointer;
          text-decoration: none; font-family: inherit;
          transition: transform .3s, box-shadow .3s;
          box-shadow: 0 4px 24px rgba(212,175,55,.35);
          animation: wb-cta-glow 3s ease-in-out infinite;
        }
        @keyframes wb-cta-glow {
          0%, 100% { box-shadow: 0 4px 24px rgba(212,175,55,.35); }
          50%      { box-shadow: 0 8px 40px rgba(212,175,55,.55); }
        }
        .wb-hero-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(212,175,55,.5);
        }

        /* hero right card */
        .wb-hero-card {
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 20px; padding: 32px 28px;
          backdrop-filter: blur(12px);
          text-align: center; width: 100%; max-width: 380px;
        }
        .wb-hero-card-label {
          font-size: .72rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: .08em; color: ${GOLD}; margin-bottom: 18px;
        }
        .wb-hero-card-avatar {
          width: 88px; height: 88px; border-radius: 50%;
          background: linear-gradient(135deg, ${BLUE}, #8B5CF6);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 18px;
          border: 3px solid rgba(255,255,255,.15);
          font-size: 2rem; color: #fff; font-weight: 700;
          position: relative; overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,.22);
        }
        .wb-hero-card-name {
          font-size: 1.1rem; font-weight: 700; color: #fff; margin: 0 0 4px;
        }
        .wb-hero-card-role {
          font-size: .85rem; color: rgba(255,255,255,.5); margin: 0 0 20px;
        }
        .wb-hero-card-stats {
          display: flex; gap: 16px; justify-content: center;
          border-top: 1px solid rgba(255,255,255,.08);
          padding-top: 18px;
        }
        .wb-hero-card-stat {
          text-align: center;
        }
        .wb-hero-card-stat-val {
          font-size: 1.15rem; font-weight: 800; color: ${GOLD};
          display: block;
        }
        .wb-hero-card-stat-label {
          font-size: .68rem; color: rgba(255,255,255,.45);
          text-transform: uppercase; letter-spacing: .06em;
        }

        /* shared */
        .wb-section { max-width: 1140px; margin: 0 auto; padding: 0 24px; }
        .wb-section-title { text-align: center; margin-bottom: 48px; }
        .wb-section-title h2 {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800; color: #111827; margin: 0 0 12px;
          letter-spacing: -.025em;
        }
        .wb-section-title h2 span { color: ${BLUE}; }
        .wb-section-title p {
          color: #6B7280; font-size: 1rem; line-height: 1.6;
          max-width: 540px; margin: 0 auto;
        }

        /* ── what you'll learn ── */
        .wb-learn-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px; max-width: 900px; margin: 0 auto;
        }
        .wb-learn-item {
          display: flex; align-items: flex-start; gap: 16px;
          background: #fff; border-radius: 14px;
          padding: 24px 22px;
          border: 1px solid rgba(0,0,0,.05);
          box-shadow: 0 3px 16px rgba(0,0,0,.03);
          transition: transform .3s cubic-bezier(.4,0,.2,1), box-shadow .3s;
        }
        .wb-learn-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(0,0,0,.08);
        }
        .wb-learn-icon {
          width: 44px; height: 44px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; color: #fff;
        }
        .wb-learn-text {
          font-size: .92rem; font-weight: 600; color: #374151;
          line-height: 1.5; margin: 0;
        }

        /* ── speaker ── */
        .wb-speaker-wrap {
          max-width: 800px; margin: 0 auto;
          display: grid; grid-template-columns: auto 1fr;
          gap: 40px; align-items: center;
          background: #fff; border-radius: 20px;
          padding: 40px 36px;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 8px 32px rgba(0,0,0,.05);
        }
        .wb-speaker-avatar {
          width: 140px; height: 140px; border-radius: 20px;
          background: linear-gradient(135deg, ${BLUE}, #8B5CF6);
          display: flex; align-items: center; justify-content: center;
          font-size: 3.2rem; color: #fff; font-weight: 800;
          box-shadow: 0 8px 32px rgba(29,78,216,.2);
          position: relative; overflow: hidden;
        }
        .wb-speaker-avatar::after {
          content: ''; position: absolute; inset: -4px;
          border-radius: 24px;
          border: 2px dashed rgba(29,78,216,.2);
        }
        .wb-speaker-info h3 {
          font-size: 1.35rem; font-weight: 800; color: #111827;
          margin: 0 0 4px;
        }
        .wb-speaker-info .wb-sp-role {
          font-size: .92rem; color: ${BLUE}; font-weight: 600;
          margin: 0 0 18px;
        }
        .wb-speaker-points {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 10px;
        }
        .wb-speaker-points li {
          display: flex; align-items: center; gap: 10px;
          font-size: .9rem; color: #4B5563; font-weight: 500;
        }
        .wb-sp-check {
          width: 22px; height: 22px; border-radius: 50%;
          background: #ECFDF5; display: flex;
          align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        /* ── proof / trust ── */
        .wb-proof-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px; max-width: 900px; margin: 0 auto;
        }
        .wb-proof-card {
          background: #fff; border-radius: 16px;
          padding: 28px 20px; text-align: center;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 4px 18px rgba(0,0,0,.04);
          transition: transform .3s, box-shadow .3s;
        }
        .wb-proof-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0,0,0,.1);
        }
        .wb-proof-val {
          font-size: 2rem; font-weight: 800;
          margin-bottom: 6px;
        }
        .wb-proof-label {
          font-size: .82rem; font-weight: 600; color: #6B7280;
          text-transform: uppercase; letter-spacing: .06em;
        }

        /* ── registration form ── */
        .wb-reg-grid {
          max-width: 1000px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 40px; align-items: start;
        }
        .wb-reg-info {
          padding: 20px 0;
        }
        .wb-reg-info h2 {
          font-size: 1.8rem; font-weight: 800; color: #111827;
          margin: 0 0 16px; letter-spacing: -.02em;
        }
        .wb-reg-info h2 span { color: ${BLUE}; }
        .wb-reg-info p {
          color: #6B7280; font-size: 1rem; line-height: 1.65; margin: 0 0 28px;
        }
        .wb-reg-benefits {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 14px;
        }
        .wb-reg-benefits li {
          display: flex; align-items: center; gap: 12px;
          font-size: .92rem; font-weight: 600; color: #374151;
        }
        .wb-reg-check {
          width: 28px; height: 28px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .wb-form {
          background: #fff; border-radius: 20px;
          padding: 40px 32px;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 8px 40px rgba(0,0,0,.06);
          position: relative; overflow: hidden;
        }
        .wb-form::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, ${BLUE}, ${GOLD});
        }
        .wb-form-title {
          font-size: 1.2rem; font-weight: 800; color: #111827;
          margin: 0 0 6px;
        }
        .wb-form-sub {
          font-size: .88rem; color: #6B7280; margin: 0 0 24px;
        }
        .wb-field { margin-bottom: 18px; }
        .wb-label {
          display: block; font-size: .82rem; font-weight: 600;
          color: #374151; margin-bottom: 6px;
        }
        .wb-input {
          width: 100%; padding: 13px 16px;
          border: 1.5px solid #E5E7EB; border-radius: 10px;
          font-size: .92rem; color: #111827;
          background: #FAFAFA; font-family: inherit;
          transition: border-color .2s, box-shadow .2s;
          outline: none;
        }
        .wb-input:focus {
          border-color: ${BLUE};
          box-shadow: 0 0 0 3px rgba(29,78,216,.1);
          background: #fff;
        }
        .wb-input::placeholder { color: #9CA3AF; }
        .wb-submit {
          width: 100%; padding: 14px;
          background: linear-gradient(135deg, ${GOLD}, #FBBF24);
          color: #000; font-weight: 700; font-size: .95rem;
          border: none; border-radius: 10px; cursor: pointer;
          font-family: inherit;
          transition: transform .25s, box-shadow .25s;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          margin-top: 8px;
        }
        .wb-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212,175,55,.4);
        }
        .wb-submit:disabled { opacity: .65; cursor: not-allowed; }
        .wb-success {
          text-align: center; padding: 20px 0;
        }
        .wb-success-icon {
          width: 56px; height: 56px; border-radius: 50%;
          background: #ECFDF5; display: flex;
          align-items: center; justify-content: center;
          margin: 0 auto 16px;
        }
        .wb-success h3 {
          font-size: 1.15rem; font-weight: 700; color: #111827;
          margin: 0 0 8px;
        }
        .wb-success p {
          font-size: .9rem; color: #6B7280; line-height: 1.5; margin: 0;
        }
        .wb-error {
          background: #FEF2F2; border: 1px solid #FECACA;
          color: #DC2626; font-size: .85rem; font-weight: 500;
          padding: 10px 14px; border-radius: 8px;
          margin-bottom: 16px; text-align: center;
        }

        /* animations */
        .wb-fade-up {
          opacity: 0; transform: translateY(32px);
          transition: opacity .7s cubic-bezier(.4,0,.2,1), transform .7s cubic-bezier(.4,0,.2,1);
        }
        .wb-fade-up.wb-vis { opacity: 1; transform: translateY(0); }
        .wb-s1 { transition-delay: .1s; }
        .wb-s2 { transition-delay: .2s; }
        .wb-s3 { transition-delay: .3s; }
        .wb-s4 { transition-delay: .35s; }
        .wb-s5 { transition-delay: .45s; }

        @keyframes spin { to { transform: rotate(360deg); } }

        @media (max-width: 900px) {
          .wb-hero-inner { grid-template-columns: 1fr; text-align: center; }
          .wb-hero-left { display: flex; flex-direction: column; align-items: center; }
          .wb-hero-right { order: -1; }
          .wb-sub { margin-left: auto; margin-right: auto; }
          .wb-meta { align-items: center; }
          .wb-reg-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .wb-learn-grid { grid-template-columns: 1fr; }
          .wb-speaker-wrap { grid-template-columns: 1fr; text-align: center; justify-items: center; }
          .wb-proof-grid { grid-template-columns: repeat(2, 1fr); }
          .wb-form { padding: 28px 20px; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════ */}
      <section
        className="wb-hero"
        style={{ paddingTop: banner ? "160px" : "120px", paddingBottom: "80px" }}
      >
        <div ref={heroRevealRef} className={`wb-hero-inner wb-fade-up ${heroVisible ? "wb-vis" : ""}`}>
          {/* left */}
          <div className="wb-hero-left">
            <div className="wb-live-badge">
              <span className="wb-live-dot" />
              Free Live Webinar
            </div>

            <h1 className="wb-h1">
              How to Start a Career in<br />
              <span>Data, AI and Automation</span><br />
              in the UK
            </h1>

            <p className="wb-sub">
              Understand the exact skills, tools, and roadmap required to transition into high-demand tech roles.
            </p>

            <div className="wb-meta">
              <div className="wb-meta-item">
                <div className="wb-meta-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <span>{WEBINAR_DATE}</span>
              </div>
              <div className="wb-meta-item">
                <div className="wb-meta-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span>{WEBINAR_TIME}</span>
              </div>
            </div>

            <button className="wb-hero-cta" onClick={scrollToForm}>
              Reserve Your Spot
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          {/* right — speaker preview card */}
          <div className="wb-hero-right">
            <div className="wb-hero-card">
              <div className="wb-hero-card-label">Your Speaker</div>
              <div className="wb-hero-card-avatar">
                <Image
                  src={SPEAKER_PHOTO}
                  alt={SPEAKER_NAME}
                  fill
                  sizes="88px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <p className="wb-hero-card-name">{SPEAKER_NAME}</p>
              <p className="wb-hero-card-role">{SPEAKER_TITLE}</p>
              <div className="wb-hero-card-stats">
                <div className="wb-hero-card-stat">
                  <span className="wb-hero-card-stat-val">7+</span>
                  <span className="wb-hero-card-stat-label">Years Exp</span>
                </div>
                <div className="wb-hero-card-stat">
                  <span className="wb-hero-card-stat-val">4</span>
                  <span className="wb-hero-card-stat-label">Teams</span>
                </div>
                <div className="wb-hero-card-stat">
                  <span className="wb-hero-card-stat-val">4</span>
                  <span className="wb-hero-card-stat-label">Companies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. WHAT YOU'LL LEARN
      ═══════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div ref={learnRevealRef} className="wb-section">
          <div className={`wb-section-title wb-fade-up ${learnVisible ? "wb-vis" : ""}`}>
            <h2>What You Will <span>Learn</span></h2>
            <p>Key takeaways from this 90-minute live session.</p>
          </div>

          <div className="wb-learn-grid">
            {LEARN_POINTS.map((lp, i) => (
              <div
                key={i}
                className={`wb-learn-item wb-fade-up wb-s${i + 1} ${learnVisible ? "wb-vis" : ""}`}
              >
                <div className="wb-learn-icon" style={{ background: lp.color }}>
                  {lp.icon}
                </div>
                <p className="wb-learn-text">{lp.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. SPEAKER
      ═══════════════════════════════════════════════════ */}
      <section style={{ paddingBottom: 96, background: "#F3F4F6", paddingTop: 80 }}>
        <div ref={speakerRevealRef} className="wb-section">
          <div className={`wb-section-title wb-fade-up ${speakerVisible ? "wb-vis" : ""}`}>
            <h2>Your <span>Speaker</span></h2>
          </div>

          <div className={`wb-speaker-wrap wb-fade-up ${speakerVisible ? "wb-vis" : ""}`}>
            <div className="wb-speaker-avatar">
              <Image
                src={SPEAKER_PHOTO}
                alt={SPEAKER_NAME}
                fill
                sizes="140px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="wb-speaker-info">
              <h3>{SPEAKER_NAME}</h3>
              <p className="wb-sp-role">{SPEAKER_TITLE}</p>
              <ul className="wb-speaker-points">
                {SPEAKER_BIO_POINTS.map((point) => (
                  <li key={point}>
                    <span className="wb-sp-check">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. PROOF / TRUST
      ═══════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div ref={proofRevealRef} className="wb-section">
          <div className={`wb-section-title wb-fade-up ${proofVisible ? "wb-vis" : ""}`}>
            <h2>Why Attend <span>This Webinar</span></h2>
            <p>Join thousands of learners who have accelerated their careers with Brit Institute.</p>
          </div>

          <div className="wb-proof-grid">
            {PROOF_STATS.map((s, i) => (
              <div
                key={i}
                className={`wb-proof-card wb-fade-up wb-s${i + 1} ${proofVisible ? "wb-vis" : ""}`}
                style={{ borderTop: `3px solid ${s.color}` }}
              >
                <div className="wb-proof-val" style={{ color: s.color }}>{s.value}</div>
                <div className="wb-proof-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. REGISTRATION FORM
      ═══════════════════════════════════════════════════ */}
      <section ref={formRef} style={{ paddingBottom: 96, background: "#F3F4F6", paddingTop: 80 }}>
        <div ref={regSecRevealRef} className="wb-section">
          <div className={`wb-reg-grid wb-fade-up ${regSecVisible ? "wb-vis" : ""}`}>
            {/* left info */}
            <div className="wb-reg-info">
              <h2>Reserve Your <span>Spot</span></h2>
              <p>
                This free webinar is your first step toward a career in data and AI. Spaces are limited — register now to secure your seat.
              </p>

              <ul className="wb-reg-benefits">
                {[
                  { text: "100% free — no payment required", color: "#10B981" },
                  { text: "Live Q&A with the speaker", color: "#3B82F6" },
                  { text: "Recording sent to all registrants", color: "#8B5CF6" },
                  { text: "Exclusive course discount for attendees", color: "#F59E0B" },
                ].map((b, i) => (
                  <li key={i}>
                    <span className="wb-reg-check" style={{ background: `${b.color}15`, color: b.color }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    {b.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* right form */}
            <div className="wb-form">
              {success ? (
                <div className="wb-success">
                  <div className="wb-success-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3>You&apos;re Registered!</h3>
                  <p>Check your inbox for the webinar details and calendar invite. See you there!</p>
                  <button
                    style={{
                      marginTop: 20, padding: "10px 24px",
                      background: BLUE, color: "#fff", border: "none",
                      borderRadius: 8, fontWeight: 600, fontSize: ".88rem",
                      cursor: "pointer", fontFamily: "inherit",
                    }}
                    onClick={() => setSuccess(false)}
                  >
                    Register Another Person
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="wb-form-title">Register for the Webinar</h3>
                  <p className="wb-form-sub">Fill in your details to secure your spot.</p>

                  {error && <div className="wb-error">{error}</div>}

                  <form onSubmit={handleSubmit}>
                    <div className="wb-field">
                      <label className="wb-label">Full Name *</label>
                      <input className="wb-input" type="text" placeholder="e.g. John Smith" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="wb-field">
                      <label className="wb-label">Email Address *</label>
                      <input className="wb-input" type="email" placeholder="e.g. john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="wb-field">
                      <label className="wb-label">Phone Number *</label>
                      <div style={{ display: "flex", gap: "12px" }}>
                        <div style={{ position: "relative", width: "180px" }}>
                          <select
                            value={phoneCountry}
                            onChange={(e) => setPhoneCountry(e.target.value)}
                            style={{
                              width: "100%",
                              padding: "13px 36px 13px 16px",
                              border: "1.5px solid #E5E7EB",
                              borderRadius: "10px",
                              fontSize: ".92rem",
                              color: "#111827",
                              background: "#FAFAFA",
                              fontFamily: "inherit",
                              transition: "border-color .2s, box-shadow .2s",
                              outline: "none",
                              appearance: "none",
                            }}
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
                        <input className="wb-input" style={{ flex: 1 }} type="tel" placeholder="e.g. 7700 900000" value={phone} onChange={(e) => setPhone(e.target.value)} />
                      </div>
                    </div>

                    <button type="submit" className="wb-submit" disabled={submitting}>
                      {submitting ? (
                        <>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: "spin 1s linear infinite" }}>
                            <path d="M12 2v4m0 12v4m-7.07-3.93 2.83-2.83m8.48-8.48 2.83-2.83M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83" />
                          </svg>
                          Registering…
                        </>
                      ) : (
                        <>
                          Register Now
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
