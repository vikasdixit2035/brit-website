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

/* ── video testimonials data ── */
const VIDEO_TESTIMONIALS = [
  {
    id: 1,
    title: "From Retail Manager to Data Analyst in 4 Months",
    thumbnail: null,           // placeholder – will use a generated gradient
    tagline: "Career Switch",
    color: "#3B82F6",
  },
  {
    id: 2,
    title: "Transitioning into Data Science with No Prior Experience",
    thumbnail: null,
    tagline: "From Scratch",
    color: "#8B5CF6",
  },
  {
    id: 3,
    title: "Applying AI Skills in Real Work Projects",
    thumbnail: null,
    tagline: "AI in Action",
    color: "#10B981",
  },
];

/* ── written reviews ── */
const WRITTEN_REVIEWS = [
  {
    name: "Priya Sharma",
    role: "Data Analyst at Deloitte",
    text: "Brit Institute helped me transition from an admin role into data analytics. The curriculum was practical, and I started applying concepts at work within weeks.",
    avatar: "PS",
    accent: "#3B82F6",
  },
  {
    name: "James Okonkwo",
    role: "Junior Data Scientist",
    text: "What stood out was the hands-on projects. I built a real portfolio using Python, SQL, and Tableau — tools I now use daily in my new role.",
    avatar: "JO",
    accent: "#8B5CF6",
  },
  {
    name: "Amina Begum",
    role: "AI Automation Specialist",
    text: "The interview prep and mock sessions gave me the confidence I was missing. I went from zero callbacks to three offers in two months.",
    avatar: "AB",
    accent: "#10B981",
  },
  {
    name: "Ravi Patel",
    role: "Business Intelligence Analyst",
    text: "I could learn at my own pace while working full-time. The mentorship was genuine — not scripted responses, but real guidance tailored to my goals.",
    avatar: "RP",
    accent: "#F59E0B",
  },
  {
    name: "Sophie Williams",
    role: "Data Engineer at TechCorp",
    text: "Brit Institute's structured approach made all the difference. Moving from teaching into tech felt impossible until I found this programme.",
    avatar: "SW",
    accent: "#EF4444",
  },
  {
    name: "Daniel Mensah",
    role: "ML Engineer",
    text: "The capstone project alone was worth it. It's now the centrepiece of my portfolio, and every interviewer has asked about it.",
    avatar: "DM",
    accent: "#06B6D4",
  },
];

/* ── case highlights (before/after) ── */
const CASE_HIGHLIGHTS = [
  {
    before: { label: "Retail Manager", detail: "No coding background" },
    after: { label: "Data Analyst", detail: "at a Big-4 Consultancy" },
    timeline: "4 Months",
    color: "#3B82F6",
  },
  {
    before: { label: "Teaching Assistant", detail: "Non-tech background" },
    after: { label: "Data Science Role", detail: "at a HealthTech Startup" },
    timeline: "5 Months",
    color: "#8B5CF6",
  },
  {
    before: { label: "Call Centre Executive", detail: "Entry-level, stagnant role" },
    after: { label: "AI / Automation Role", detail: "at a FinTech Company" },
    timeline: "6 Months",
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
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { revealRef: ref, visible };
}

/* ──────────────────────────────────────────────────────────────────── */
export default function ReviewsPage() {
  const [banner, setBanner] = useState(true);

  const { revealRef: heroRevealRef, visible: heroVisible } = useReveal();
  const { revealRef: videosRevealRef, visible: videosVisible } = useReveal();
  const { revealRef: writtenRevealRef, visible: writtenVisible } = useReveal();
  const { revealRef: casesRevealRef, visible: casesVisible } = useReveal();
  const { revealRef: ctaRevealRef, visible: ctaVisible } = useReveal();

  return (
    <main style={{ background: "#FAFAFA", minHeight: "100vh", fontFamily: "var(--font-inter, system-ui, -apple-system, sans-serif)", color: "#111827" }}>
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />

      <style>{`
        /* ── REVIEWS PAGE STYLES ── */
        .rv-hero {
          position: relative;
          background: ${DEEP};
          overflow: hidden;
          text-align: center;
        }
        .rv-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 50% 0%, rgba(29,78,216,.25), transparent 70%),
            radial-gradient(ellipse 50% 60% at 80% 100%, rgba(212,175,55,.1), transparent 60%);
          pointer-events: none;
        }
        .rv-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 860px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .rv-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 9999px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.1);
          color: rgba(255,255,255,.72);
          font-size: .82rem;
          font-weight: 600;
          letter-spacing: .04em;
          margin-bottom: 28px;
          backdrop-filter: blur(8px);
        }
        .rv-pill svg { opacity: .7; }
        .rv-h1 {
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.12;
          letter-spacing: -.035em;
          margin: 0 0 20px;
        }
        .rv-h1 span { color: ${GOLD}; }
        .rv-sub {
          font-size: 1.1rem;
          color: rgba(255,255,255,.55);
          line-height: 1.7;
          max-width: 640px;
          margin: 0 auto;
        }
        .rv-divider {
          width: 56px;
          height: 3px;
          border-radius: 2px;
          background: linear-gradient(90deg, ${BLUE}, ${GOLD});
          margin: 32px auto 0;
        }

        /* ── Section wrappers ── */
        .rv-section {
          max-width: 80%;
          margin: 0 auto;
          padding: 0 24px;
        }
        .rv-section-title {
          text-align: center;
          margin-bottom: 48px;
        }
        .rv-section-title h2 {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800;
          color: #111827;
          margin: 0 0 12px;
          letter-spacing: -.025em;
        }
        .rv-section-title h2 span { color: ${BLUE}; }
        .rv-section-title p {
          color: #6B7280;
          font-size: 1rem;
          line-height: 1.6;
          max-width: 540px;
          margin: 0 auto;
        }

        /* ── Video cards ── */
        .rv-videos {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }
        .rv-video-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 16/10;
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(0,0,0,.12);
          transition: transform .35s cubic-bezier(.4,0,.2,1), box-shadow .35s;
        }
        .rv-video-card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 16px 48px rgba(0,0,0,.2);
        }
        .rv-video-bg {
          position: absolute;
          inset: 0;
          transition: transform .5s cubic-bezier(.4,0,.2,1);
        }
        .rv-video-card:hover .rv-video-bg { transform: scale(1.06); }
        .rv-video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.7) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
          z-index: 2;
        }
        .rv-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(255,255,255,.92);
          box-shadow: 0 4px 24px rgba(0,0,0,.25);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          transition: transform .3s, box-shadow .3s;
        }
        .rv-video-card:hover .rv-play-btn {
          transform: translate(-50%,-50%) scale(1.12);
          box-shadow: 0 8px 32px rgba(0,0,0,.35);
        }
        .rv-play-btn svg { margin-left: 3px; }
        .rv-video-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: .7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .06em;
          color: #fff;
          width: fit-content;
          margin-bottom: 8px;
        }
        .rv-video-title {
          color: #fff;
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.35;
          margin: 0;
        }

        /* ── Written review cards ── */
        .rv-reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }
        .rv-review-card {
          background: #fff;
          border-radius: 16px;
          padding: 32px 28px;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 4px 20px rgba(0,0,0,.04);
          display: flex;
          flex-direction: column;
          transition: transform .3s cubic-bezier(.4,0,.2,1), box-shadow .3s;
          position: relative;
          overflow: hidden;
        }
        .rv-review-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 16px 16px 0 0;
          transition: opacity .3s;
        }
        .rv-review-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(0,0,0,.1);
        }
        .rv-review-quote {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 8px;
          opacity: .12;
        }
        .rv-review-text {
          color: #374151;
          font-size: .95rem;
          line-height: 1.7;
          flex: 1;
          margin-bottom: 24px;
          font-style: italic;
        }
        .rv-review-author {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .rv-review-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 700;
          font-size: .82rem;
          flex-shrink: 0;
        }
        .rv-review-name {
          font-size: .92rem;
          font-weight: 700;
          color: #111827;
          margin: 0;
        }
        .rv-review-role {
          font-size: .8rem;
          color: #6B7280;
          margin: 2px 0 0;
        }
        .rv-stars {
          display: flex;
          gap: 2px;
          margin-bottom: 16px;
        }

        /* ── Case highlight cards ── */
        .rv-cases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }
        .rv-case-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 4px 20px rgba(0,0,0,.04);
          transition: transform .3s cubic-bezier(.4,0,.2,1), box-shadow .3s;
        }
        .rv-case-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(0,0,0,.1);
        }
        .rv-case-header {
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .rv-case-timeline {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 9999px;
          font-size: .75rem;
          font-weight: 700;
          color: #fff;
        }
        .rv-case-body {
          padding: 0 24px 28px;
          display: flex;
          gap: 16px;
          align-items: stretch;
        }
        .rv-case-col {
          flex: 1;
          padding: 20px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .rv-case-col-before {
          background: #FEF2F2;
          border: 1px solid #FECACA;
        }
        .rv-case-col-after {
          background: #ECFDF5;
          border: 1px solid #A7F3D0;
        }
        .rv-case-label {
          font-size: .68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-bottom: 4px;
        }
        .rv-case-label-before { color: #DC2626; }
        .rv-case-label-after  { color: #059669; }
        .rv-case-title {
          font-size: 1rem;
          font-weight: 700;
          color: #111827;
        }
        .rv-case-detail {
          font-size: .82rem;
          color: #6B7280;
          line-height: 1.4;
        }
        .rv-case-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 36px;
        }
        .rv-case-arrow svg {
          color: ${BLUE};
          filter: drop-shadow(0 2px 6px rgba(29,78,216,.25));
        }

        /* ── CTA section ── */
        .rv-cta-wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .rv-cta {
          background: linear-gradient(135deg, #111827 0%, #1E3A5F 50%, #1D4ED8 100%);
          border-radius: 24px;
          padding: 60px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0,0,0,.2);
        }
        .rv-cta::before, .rv-cta::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .rv-cta::before {
          width: 300px; height: 300px;
          top: -100px; left: -80px;
          background: rgba(59,130,246,.3);
        }
        .rv-cta::after {
          width: 250px; height: 250px;
          bottom: -80px; right: -50px;
          background: rgba(212,175,55,.2);
        }
        .rv-cta-inner { position: relative; z-index: 2; }
        .rv-cta h2 {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 16px;
          letter-spacing: -.02em;
        }
        .rv-cta p {
          color: rgba(255,255,255,.6);
          font-size: 1.05rem;
          line-height: 1.7;
          max-width: 520px;
          margin: 0 auto 36px;
        }
        .rv-cta-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .rv-btn-gold {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          background: linear-gradient(135deg, ${GOLD}, #FBBF24);
          color: #000;
          font-weight: 700;
          font-size: .95rem;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          text-decoration: none;
          transition: transform .3s, box-shadow .3s;
          box-shadow: 0 4px 20px rgba(212,175,55,.35);
        }
        .rv-btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(212,175,55,.5);
        }
        .rv-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          background: transparent;
          color: #fff;
          font-weight: 600;
          font-size: .95rem;
          border: 1.5px solid rgba(255,255,255,.3);
          border-radius: 9999px;
          cursor: pointer;
          text-decoration: none;
          transition: background .3s, border-color .3s;
        }
        .rv-btn-outline:hover {
          background: rgba(255,255,255,.08);
          border-color: rgba(255,255,255,.55);
        }

        /* ── Animations ── */
        .rv-fade-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity .7s cubic-bezier(.4,0,.2,1), transform .7s cubic-bezier(.4,0,.2,1);
        }
        .rv-fade-up.rv-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .rv-stagger-1 { transition-delay: .1s; }
        .rv-stagger-2 { transition-delay: .2s; }
        .rv-stagger-3 { transition-delay: .3s; }
        .rv-stagger-4 { transition-delay: .35s; }
        .rv-stagger-5 { transition-delay: .4s; }
        .rv-stagger-6 { transition-delay: .5s; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .rv-videos { grid-template-columns: 1fr; }
          .rv-reviews-grid { grid-template-columns: 1fr; }
          .rv-cases-grid { grid-template-columns: 1fr; }
          .rv-case-body { flex-direction: column; }
          .rv-case-arrow { transform: rotate(90deg); width: auto; }
          .rv-cta { padding: 40px 24px; }
          .rv-cta-btns { flex-direction: column; }
          .rv-btn-gold, .rv-btn-outline { width: 100%; justify-content: center; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section
        className="rv-hero"
        style={{ paddingTop: banner ? "160px" : "120px", paddingBottom: "80px" }}
      >
        <div
          ref={heroRevealRef}
          className={`rv-hero-inner rv-fade-up ${heroVisible ? "rv-visible" : ""}`}
        >
          <h1 className="rv-h1">
            Real Career Transitions in<br />
            <span>Data, AI and Tech</span>
          </h1>
          <p className="rv-sub">
            See how learners have moved into data analytics, data science and AI roles with practical skills and structured support.
          </p>
          <div className="rv-divider" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. VIDEO TESTIMONIALS
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: "96px", paddingBottom: "96px" }}>
        <div ref={videosRevealRef} className="rv-section">
          <div className={`rv-section-title rv-fade-up ${videosVisible ? "rv-visible" : ""}`}>
            <h2>Hear Directly from <span>Our Learners</span></h2>
            <p>Watch how real learners transformed their careers with practical skills and mentorship.</p>
          </div>

          <div className="rv-videos">
            {VIDEO_TESTIMONIALS.map((v, i) => (
              <div
                key={v.id}
                className={`rv-video-card rv-fade-up rv-stagger-${i + 1} ${videosVisible ? "rv-visible" : ""}`}
              >
                {/* Gradient placeholder background */}
                <div
                  className="rv-video-bg"
                  style={{
                    background: `linear-gradient(135deg, ${v.color}22, ${v.color}44, ${DEEP})`,
                  }}
                />

                {/* Animated mesh pattern */}
                <div style={{
                  position: "absolute", inset: 0, zIndex: 1,
                  backgroundImage: `
                    radial-gradient(circle at 30% 40%, ${v.color}33 0%, transparent 50%),
                    radial-gradient(circle at 70% 60%, ${v.color}22 0%, transparent 40%)
                  `,
                }} />

                {/* Play button */}
                <div className="rv-play-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill={v.color}>
                    <polygon points="8 5 20 12 8 19" />
                  </svg>
                </div>

                {/* Overlay content */}
                <div className="rv-video-overlay">
                  <div className="rv-video-tag" style={{ background: v.color }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /></svg>
                    {v.tagline}
                  </div>
                  <h3 className="rv-video-title">{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. WRITTEN REVIEWS
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ paddingBottom: "96px", background: "#F3F4F6", paddingTop: "80px" }}>
        <div ref={writtenRevealRef} className="rv-section">
          <div className={`rv-section-title rv-fade-up ${writtenVisible ? "rv-visible" : ""}`}>
            <h2>What Learners Are <span>Saying</span></h2>
            <p>Honest feedback from professionals who made the transition.</p>
          </div>

          <div className="rv-reviews-grid">
            {WRITTEN_REVIEWS.map((r, i) => (
              <div
                key={i}
                className={`rv-review-card rv-fade-up rv-stagger-${i + 1} ${writtenVisible ? "rv-visible" : ""}`}
                style={{ ["--accent" as string]: r.accent }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: r.accent, borderRadius: "16px 16px 0 0" }} />
                <div className="rv-review-quote" style={{ color: r.accent }}>&ldquo;</div>

                {/* Stars */}
                <div className="rv-stars">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                <p className="rv-review-text">&ldquo;{r.text}&rdquo;</p>

                <div className="rv-review-author">
                  <div className="rv-review-avatar" style={{ background: r.accent }}>
                    {r.avatar}
                  </div>
                  <div>
                    <p className="rv-review-name">{r.name}</p>
                    <p className="rv-review-role">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. CASE HIGHLIGHTS — BEFORE / AFTER
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: "96px", paddingBottom: "96px" }}>
        <div ref={casesRevealRef} className="rv-section">
          <div className={`rv-section-title rv-fade-up ${casesVisible ? "rv-visible" : ""}`}>
            <h2>Career Transformation <span>Snapshots</span></h2>
            <p>Real before-and-after stories of learners who made the shift into tech.</p>
          </div>

          <div className="rv-cases-grid">
            {CASE_HIGHLIGHTS.map((c, i) => (
              <div
                key={i}
                className={`rv-case-card rv-fade-up rv-stagger-${i + 1} ${casesVisible ? "rv-visible" : ""}`}
              >
                <div className="rv-case-header">
                  <span style={{ fontSize: ".82rem", fontWeight: 700, color: "#111827" }}>
                    Case Study #{i + 1}
                  </span>
                  <span className="rv-case-timeline" style={{ background: c.color }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    {c.timeline}
                  </span>
                </div>

                <div className="rv-case-body">
                  <div className="rv-case-col rv-case-col-before">
                    <span className="rv-case-label rv-case-label-before">Before</span>
                    <span className="rv-case-title">{c.before.label}</span>
                    <span className="rv-case-detail">{c.before.detail}</span>
                  </div>

                  <div className="rv-case-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>

                  <div className="rv-case-col rv-case-col-after">
                    <span className="rv-case-label rv-case-label-after">After</span>
                    <span className="rv-case-title">{c.after.label}</span>
                    <span className="rv-case-detail">{c.after.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ paddingBottom: "96px" }}>
        <div ref={ctaRevealRef} className={`rv-cta-wrap rv-fade-up ${ctaVisible ? "rv-visible" : ""}`}>
          <div className="rv-cta">
            <div className="rv-cta-inner">
              <h2>Start Your Own Career Transition</h2>
              <p>
                Gain practical skills and build a portfolio that helps you move into high-demand tech roles.
              </p>
              <div className="rv-cta-btns">
                <Link href="/courses" className="rv-btn-gold">
                  Explore Courses
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
                <Link href="/contact" className="rv-btn-outline">
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
