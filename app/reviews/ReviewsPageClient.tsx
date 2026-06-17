"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Quote,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const BLUE = "#D95700";
const GOLD = "#D4AF37";

const BATCH_REVIEWS = [
  {
    id: 1,
    slug: "march-2026",
    batch: "March 2026",
    label: "Most recent completed cohort",
    videos: ["/testimonials/1.mp4", "/testimonials/2.mp4"],
    outcome: "Moved from reporting support to dashboard ownership",
    accent: "#D95700",
    reviews: [
      {
        name: "Ananya Menon",
        role: "Educator to Learning Analyst",
        text: "Weekly mentor feedback helped me connect analytics concepts to real education problems. The structure kept me moving every week.",
      },
      {
        name: "James Okonkwo",
        role: "Junior Data Scientist",
        text: "Every module led to something visible in my portfolio. Python and SQL finally clicked because we kept applying them to real scenarios.",
      },
      {
        name: "Meera Iyer",
        role: "Operations Analyst",
        text: "The live sessions were focused and easy to follow. I finished with a dashboard project I can confidently show in interviews.",
      },
      {
        name: "Thomas Bennett",
        role: "Marketing Data Executive",
        text: "The examples felt close to real business work. I now understand how to turn a vague question into a clean analysis plan.",
      },
    ],
  },
  {
    id: 2,
    slug: "january-2026",
    batch: "January 2026",
    label: "Winter career transition cohort",
    videos: ["/testimonials/3.mp4", "/testimonials/4.mp4"],
    outcome: "Built a portfolio using Excel, SQL and Power BI",
    accent: "#7C9A4F",
    reviews: [
      {
        name: "Amina Begum",
        role: "AI Automation Specialist",
        text: "The mock interviews were direct and useful. By the end of the batch, I could explain my projects clearly and answer technical questions with confidence.",
      },
      {
        name: "Ravi Patel",
        role: "Business Intelligence Analyst",
        text: "I was working full-time, so the recordings and review checkpoints mattered. I always knew what to complete next.",
      },
      {
        name: "Hannah Clarke",
        role: "Junior Data Scientist",
        text: "The mentor comments were specific, not generic. That helped me improve my notebooks and explain my choices more professionally.",
      },
      {
        name: "Oliver Harris",
        role: "Power BI Specialist",
        text: "The dashboard labs were excellent. I learned how to design reports that are useful for decision-makers, not just visually busy.",
      },
    ],
  },
  {
    id: 3,
    slug: "november-2025",
    batch: "November 2025",
    label: "Autumn AI and data cohort",
    videos: ["/testimonials/5.MP4", "/testimonials/6.MP4"],
    outcome: "Used AI workflows to speed up analysis and documentation",
    accent: "#746D5C",
    reviews: [
      {
        name: "Sophie Williams",
        role: "Career switcher",
        text: "The programme helped me move from theory to practice. I finished with dashboards, SQL examples, and a capstone story I can talk through.",
      },
      {
        name: "Daniel Mensah",
        role: "ML Engineer pathway",
        text: "The feedback was honest and detailed. My final project became much stronger after mentor review, especially around business context.",
      },
      {
        name: "Charlotte Wilson",
        role: "Junior Analyst",
        text: "I learned how to present insights with more discipline. The weekly tasks helped me build a proper working rhythm.",
      },
      {
        name: "Jack Thompson",
        role: "Software Developer",
        text: "The AI workflow modules were practical. I now use prompts, checks, and documentation templates in a much more controlled way.",
      },
    ],
  },
  {
    id: 4,
    slug: "september-2025",
    batch: "September 2025",
    label: "Project-focused career cohort",
    videos: ["/testimonials/7.MP4", "/testimonials/8.MP4"],
    outcome: "Completed a reviewed capstone project",
    accent: "#C45118",
    reviews: [
      {
        name: "George Edwards",
        role: "Business graduate to Data Analyst",
        text: "Excel, SQL, and Power BI came together in a way that finally made sense. I left with evidence I could show, not just a certificate.",
      },
      {
        name: "Rebecca Hollowell",
        role: "Junior Analyst",
        text: "The teaching was calm and structured. I liked that every topic was followed by practice and a review of common mistakes.",
      },
      {
        name: "Adam Richardson",
        role: "Operations Manager",
        text: "I now make decisions with clearer evidence. The course helped me move beyond spreadsheet habits and build better reporting workflows.",
      },
      {
        name: "William Foster",
        role: "Financial Analyst",
        text: "The analytics projects were relevant to my work. I improved my SQL, dashboard design, and stakeholder storytelling in one programme.",
      },
    ],
  },
] as const;

const CASE_HIGHLIGHTS = [
  {
    before: { label: "Admin and reporting", detail: "Manual spreadsheets and ad hoc reports" },
    after: { label: "Data analyst ready", detail: "Power BI dashboard, SQL case study and CV review" },
    timeline: "16 weeks",
    color: "#D95700",
  },
  {
    before: { label: "Non-tech graduate", detail: "Limited coding and project experience" },
    after: { label: "Portfolio built", detail: "Python notebook, analytics story and interview practice" },
    timeline: "18 weeks",
    color: "#7C9A4F",
  },
  {
    before: { label: "Operations role", detail: "Wanted practical AI skills for daily work" },
    after: { label: "AI workflow capable", detail: "Prompt library, automation plan and responsible-use notes" },
    timeline: "20 weeks",
    color: "#746D5C",
  },
] as const;

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { revealRef: ref, visible };
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

function Stars() {
  return (
    <div className="rv-stars" aria-label="5 out of 5 rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={14} fill="#FBBF24" stroke="#FBBF24" strokeWidth={1.5} />
      ))}
    </div>
  );
}

type BatchReview = (typeof BATCH_REVIEWS)[number];

function CohortReviewCard({ batch, index }: { batch: BatchReview; index: number }) {
  const { revealRef, visible } = useReveal();
  const direction = index % 2 === 0 ? "left" : "right";

  return (
    <article
      ref={revealRef}
      id={batch.slug}
      className={`rv-batch-card rv-slide-reveal rv-slide-${direction} ${visible ? "rv-visible" : ""}`}
      style={{
        ["--accent" as string]: batch.accent,
        ["--accent-soft" as string]: `${batch.accent}14`,
      }}
    >
      <div className="rv-batch-head">
        <div>
          <span className="rv-batch-label">
            <BadgeCheck size={14} aria-hidden="true" />
            {batch.label}
          </span>
          <h2 className="rv-batch-title">{batch.batch} Cohort</h2>
        </div>
        <div className="rv-batch-summary">
          <TrendingUp size={18} color={batch.accent} aria-hidden="true" />
          <span>{batch.outcome}</span>
        </div>
      </div>

      <div className="rv-batch-body">
        <div className="rv-video-column">
          {batch.videos.map((video, videoIndex) => (
            <div key={video} className="rv-video-shell">
              <video
                controls
                controlsList="nodownload"
                playsInline
                preload="metadata"
                aria-label={`${batch.batch} cohort video testimonial ${videoIndex + 1}`}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <span className="rv-video-chip">
                <Sparkles size={14} aria-hidden="true" />
                Learner video {videoIndex + 1}
              </span>
            </div>
          ))}
        </div>

        <div className="rv-written-grid">
          {batch.reviews.map((review) => (
            <div key={review.name} className="rv-review-card">
              <div className="rv-review-top">
                <span className="rv-review-quote-icon">
                  <Quote size={16} aria-hidden="true" />
                </span>
                <Stars />
              </div>
              <p className="rv-review-text">&ldquo;{review.text}&rdquo;</p>
              <div className="rv-review-author">
                <div className="rv-review-avatar">{initials(review.name)}</div>
                <div>
                  <p className="rv-name">{review.name}</p>
                  <p className="rv-role">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ReviewsPage() {
  const [banner, setBanner] = useState(true);

  const { revealRef: heroRevealRef, visible: heroVisible } = useReveal();
  const { revealRef: batchesRevealRef, visible: batchesVisible } = useReveal();
  const { revealRef: casesRevealRef, visible: casesVisible } = useReveal();
  const { revealRef: ctaRevealRef, visible: ctaVisible } = useReveal();

  return (
    <main
      style={{
        background: "#F7F3EA",
        minHeight: "100vh",
        fontFamily: "var(--font-inter, system-ui, -apple-system, sans-serif)",
        color: "#241A1F",
      }}
    >
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />

      <style>{`
        .rv-hero {
          position: relative;
          overflow: hidden;
          text-align: center;
          background:
            linear-gradient(135deg, rgba(36,16,31,.98), rgba(22,9,20,.98)),
            linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255,255,255,.045) 1px, transparent 1px);
          background-size: auto, 44px 44px, 44px 44px;
        }
        .rv-hero::after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,.56), transparent);
        }
        .rv-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 960px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .rv-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 9999px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.14);
          color: rgba(255,255,255,.78);
          font-size: .8rem;
          font-weight: 800;
          letter-spacing: .04em;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }
        .rv-h1 {
          font-size: clamp(2.15rem, 5vw, 4.35rem);
          font-weight: 850;
          color: #fff;
          line-height: 1.04;
          letter-spacing: 0;
          margin: 0 0 22px;
        }
        .rv-h1 span { color: ${GOLD}; }
        .rv-sub {
          font-size: clamp(1rem, 1.5vw, 1.18rem);
          color: rgba(255,255,255,.68);
          line-height: 1.72;
          max-width: 720px;
          margin: 0 auto;
        }
        .rv-hero-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          max-width: 760px;
          margin: 38px auto 0;
        }
        .rv-stat {
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.07);
          border-radius: 8px;
          padding: 16px;
          text-align: left;
        }
        .rv-stat strong {
          display: block;
          color: #fff;
          font-size: 1.28rem;
          line-height: 1.1;
        }
        .rv-stat span {
          display: block;
          margin-top: 5px;
          color: rgba(255,255,255,.62);
          font-size: .82rem;
          line-height: 1.35;
        }
        .rv-section {
          width: min(1280px, calc(100% - 40px));
          margin: 0 auto;
        }
        .rv-section-title {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(280px, .55fr);
          align-items: end;
          gap: 44px;
          margin-bottom: 24px;
        }
        .rv-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: ${BLUE};
          font-size: .78rem;
          font-weight: 850;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin: 0 0 10px;
        }
        .rv-section-title h2 {
          font-size: clamp(1.75rem, 3vw, 2.55rem);
          font-weight: 850;
          color: #241A1F;
          line-height: 1.12;
          letter-spacing: 0;
          margin: 0;
        }
        .rv-section-title p {
          color: #64748B;
          font-size: 1rem;
          line-height: 1.65;
          margin: 0;
        }
        .rv-batch-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 0 0 26px;
          padding: 12px;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          background: #fff;
          box-shadow: 0 14px 36px rgba(15,23,42,.05);
        }
        .rv-nav-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 38px;
          padding: 9px 14px;
          border: 1px solid #CBD5E1;
          border-radius: 9999px;
          color: #0F172A;
          background: #fff;
          font-size: .86rem;
          font-weight: 850;
          text-decoration: none;
          transition: border-color .2s, color .2s, background .2s;
        }
        .rv-nav-link:hover {
          border-color: ${BLUE};
          color: ${BLUE};
          background: #F7F3EA;
        }
        .rv-batch-stack {
          display: grid;
          gap: 24px;
        }
        .rv-batch-card {
          overflow: hidden;
          border: 1px solid rgba(15,23,42,.08);
          border-radius: 8px;
          background: #fff;
          box-shadow: 0 22px 58px rgba(15,23,42,.08);
          scroll-margin-top: 130px;
        }
        .rv-batch-head {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: center;
          gap: 18px;
          padding: 22px 24px;
          border-bottom: 1px solid #E2E8F0;
          background: linear-gradient(180deg, #fff, #F8FAFC);
        }
        .rv-batch-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border: 1px solid var(--accent);
          border-radius: 9999px;
          color: var(--accent);
          background: #fff;
          padding: 7px 11px;
          margin-bottom: 10px;
          font-size: .74rem;
          font-weight: 850;
        }
        .rv-batch-title {
          margin: 0;
          color: #0F172A;
          font-size: clamp(1.45rem, 2.2vw, 2rem);
          font-weight: 850;
          line-height: 1.08;
          letter-spacing: 0;
        }
        .rv-batch-summary {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          max-width: 360px;
          color: #334155;
          font-size: .88rem;
          line-height: 1.45;
          border: 1px solid #E2E8F0;
          background: #fff;
          border-radius: 8px;
          padding: 12px 13px;
        }
        .rv-batch-body {
          display: grid;
          grid-template-columns: minmax(400px, 600px) minmax(0, 1fr);
          align-items: stretch;
          gap: 24px;
          padding: 24px;
        }
        .rv-video-column {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          grid-auto-rows: 1fr;
          gap: 12px;
          align-content: start;
          height: 100%;
        }
        .rv-video-shell {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 510px;
          border-radius: 8px;
          background: #020617;
          overflow: hidden;
        }
        .rv-video-shell video {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          background: #020617;
        }
        .rv-video-chip {
          position: absolute;
          left: 12px;
          top: 12px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border-radius: 9999px;
          background: rgba(2,6,23,.74);
          color: #fff;
          padding: 7px 10px;
          font-size: .74rem;
          font-weight: 850;
          pointer-events: none;
          backdrop-filter: blur(10px);
        }
        .rv-review-avatar {
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 850;
          font-size: .78rem;
          flex: 0 0 auto;
          background: var(--accent);
        }
        .rv-name {
          font-size: .94rem;
          font-weight: 850;
          color: #0F172A;
          margin: 0;
        }
        .rv-role {
          font-size: .8rem;
          color: #64748B;
          margin: 3px 0 0;
          line-height: 1.35;
        }
        .rv-written-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          align-content: start;
        }
        .rv-review-card {
          background: #fff;
          border-radius: 8px;
          padding: 18px;
          border: 1px solid rgba(15,23,42,.08);
          box-shadow: 0 12px 30px rgba(15,23,42,.045);
          display: flex;
          flex-direction: column;
          min-height: 205px;
        }
        .rv-review-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
        }
        .rv-review-quote-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 9999px;
          background: var(--accent-soft);
          color: var(--accent);
          flex: 0 0 auto;
        }
        .rv-review-text {
          color: #334155;
          font-size: .9rem;
          line-height: 1.62;
          flex: 1;
          margin: 0 0 16px;
        }
        .rv-review-author {
          display: flex;
          align-items: center;
          gap: 11px;
          padding-top: 14px;
          border-top: 1px solid #E2E8F0;
        }
        .rv-stars {
          display: flex;
          gap: 2px;
          flex: 0 0 auto;
        }
        .rv-cases-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }
        .rv-case-card {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(15,23,42,.08);
          box-shadow: 0 16px 42px rgba(15,23,42,.06);
          transition: transform .3s cubic-bezier(.4,0,.2,1), box-shadow .3s;
        }
        .rv-case-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 58px rgba(15,23,42,.1);
        }
        .rv-case-header {
          padding: 20px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #E2E8F0;
        }
        .rv-case-timeline {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 9999px;
          font-size: .75rem;
          font-weight: 850;
          color: #fff;
        }
        .rv-case-body {
          padding: 22px;
          display: grid;
          gap: 12px;
        }
        .rv-case-col {
          padding: 18px;
          border-radius: 8px;
          display: grid;
          gap: 5px;
        }
        .rv-case-col-before {
          background: #FFF7ED;
          border: 1px solid #FED7AA;
        }
        .rv-case-col-after {
          background: #ECFDF5;
          border: 1px solid #A7F3D0;
        }
        .rv-case-label {
          font-size: .68rem;
          font-weight: 850;
          text-transform: uppercase;
          letter-spacing: .08em;
        }
        .rv-case-label-before { color: #C2410C; }
        .rv-case-label-after { color: #047857; }
        .rv-case-title {
          font-size: 1rem;
          font-weight: 850;
          color: #241A1F;
        }
        .rv-case-detail {
          font-size: .86rem;
          color: #64748B;
          line-height: 1.45;
        }
        .rv-cta-wrap {
          width: min(920px, calc(100% - 40px));
          margin: 0 auto;
        }
        .rv-cta {
          background: linear-gradient(135deg, #24101F 0%, #160914 58%, #D95700 100%);
          border-radius: 8px;
          padding: 56px 44px;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(15,23,42,.22);
          border: 1px solid rgba(255,255,255,.08);
        }
        .rv-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: .4;
        }
        .rv-cta-inner { position: relative; z-index: 2; }
        .rv-cta h2 {
          font-size: clamp(1.65rem, 3vw, 2.35rem);
          font-weight: 850;
          color: #fff;
          margin: 0 0 14px;
          letter-spacing: 0;
        }
        .rv-cta p {
          color: rgba(255,255,255,.68);
          font-size: 1.04rem;
          line-height: 1.7;
          max-width: 560px;
          margin: 0 auto 30px;
        }
        .rv-cta-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        .rv-btn-gold,
        .rv-btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 48px;
          padding: 13px 24px;
          font-weight: 850;
          font-size: .94rem;
          border-radius: 9999px;
          cursor: pointer;
          text-decoration: none;
          transition: transform .25s, box-shadow .25s, background .25s, border-color .25s;
        }
        .rv-btn-gold {
          background: linear-gradient(135deg, ${GOLD}, #FBBF24);
          color: #101827;
          box-shadow: 0 12px 28px rgba(212,175,55,.26);
        }
        .rv-btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 36px rgba(212,175,55,.36);
        }
        .rv-btn-outline {
          background: rgba(255,255,255,.06);
          color: #fff;
          border: 1px solid rgba(255,255,255,.26);
        }
        .rv-btn-outline:hover {
          background: rgba(255,255,255,.1);
          border-color: rgba(255,255,255,.44);
        }
        .rv-fade-up {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity .65s cubic-bezier(.4,0,.2,1), transform .65s cubic-bezier(.4,0,.2,1);
        }
        .rv-fade-up.rv-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .rv-slide-reveal {
          opacity: 0;
          transition:
            opacity .72s cubic-bezier(.2,.8,.2,1),
            transform .72s cubic-bezier(.2,.8,.2,1),
            box-shadow .3s;
          will-change: opacity, transform;
        }
        .rv-slide-left {
          transform: translateX(-72px) translateY(16px);
        }
        .rv-slide-right {
          transform: translateX(72px) translateY(16px);
        }
        .rv-slide-reveal.rv-visible {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }
        .rv-stagger-1 { transition-delay: .06s; }
        .rv-stagger-2 { transition-delay: .12s; }
        .rv-stagger-3 { transition-delay: .18s; }
        .rv-stagger-4 { transition-delay: .24s; }

        @media (max-width: 1120px) {
          .rv-batch-body,
          .rv-section-title,
          .rv-cases-grid {
            grid-template-columns: 1fr;
          }
          .rv-batch-body {
            align-items: start;
          }
          .rv-video-column {
            max-width: 640px;
            height: auto;
          }
          .rv-video-shell {
            aspect-ratio: 9 / 16;
            height: auto;
            min-height: 0;
          }
        }
        @media (max-width: 760px) {
          .rv-hero-stats,
          .rv-batch-head,
          .rv-video-column,
          .rv-written-grid {
            grid-template-columns: 1fr;
          }
          .rv-section-title {
            gap: 14px;
          }
          .rv-batch-summary {
            max-width: none;
          }
          .rv-batch-body,
          .rv-batch-head {
            padding: 20px;
          }
          .rv-cta {
            padding: 40px 22px;
          }
          .rv-cta-btns {
            flex-direction: column;
          }
          .rv-btn-gold,
          .rv-btn-outline {
            width: 100%;
          }
          .rv-slide-left,
          .rv-slide-right {
            transform: translateY(28px);
          }
        }
        @media (max-width: 480px) {
          .rv-section,
          .rv-cta-wrap {
            width: min(100% - 28px, 1280px);
          }
          .rv-batch-body,
          .rv-batch-head,
          .rv-review-card,
          .rv-case-body {
            padding: 18px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .rv-fade-up,
          .rv-slide-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <section
        className="rv-hero"
        style={{ paddingTop: banner ? "166px" : "126px", paddingBottom: "86px" }}
      >
        <div
          ref={heroRevealRef}
          className={`rv-hero-inner rv-fade-up ${heroVisible ? "rv-visible" : ""}`}
        >
          <div className="rv-pill">
            <CalendarCheck size={16} aria-hidden="true" />
            Recent learner feedback from 2025-2026
          </div>
          <h1 className="rv-h1">
            Real stories from <span>completed learner cohorts</span>
          </h1>
          <p className="rv-sub">
            Hear from Brit Institute learners who built practical data, AI, and analytics projects with mentor feedback and career-focused support.
          </p>
          <div className="rv-hero-stats" aria-label="Learner review highlights">
            <div className="rv-stat">
              <strong>4 cohorts</strong>
              <span>recent completion months</span>
            </div>
            <div className="rv-stat">
              <strong>16 notes</strong>
              <span>written learner feedback</span>
            </div>
            <div className="rv-stat">
              <strong>8 videos</strong>
              <span>from recent programme learners</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "92px", paddingBottom: "92px" }}>
        <div className="rv-section">
          <div
            ref={batchesRevealRef}
            className={`rv-section-title rv-fade-up ${batchesVisible ? "rv-visible" : ""}`}
          >
            <div>
              <p className="rv-kicker">
                <Sparkles size={16} aria-hidden="true" />
                Learner feedback
              </p>
              <h2>Browse reviews by completion month</h2>
            </div>
            <p>
              Each cohort section brings together learner videos, project outcome, and written feedback from classmates in the same completion period.
            </p>
          </div>

          <nav className={`rv-batch-nav rv-fade-up ${batchesVisible ? "rv-visible" : ""}`} aria-label="Review cohorts">
            {BATCH_REVIEWS.map((batch) => (
              <a key={batch.slug} className="rv-nav-link" href={`#${batch.slug}`}>
                {batch.batch}
              </a>
            ))}
          </nav>

          <div className="rv-batch-stack">
            {BATCH_REVIEWS.map((batch, index) => (
              <CohortReviewCard key={batch.batch} batch={batch} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "92px", paddingBottom: "92px", background: "#EEF2F7" }}>
        <div className="rv-section">
          <div
            ref={casesRevealRef}
            className={`rv-section-title rv-fade-up ${casesVisible ? "rv-visible" : ""}`}
          >
            <div>
              <p className="rv-kicker">
                <TrendingUp size={16} aria-hidden="true" />
                Career progress
              </p>
              <h2>What learners built during the programme</h2>
            </div>
            <p>
              Recent learners left with practical portfolio evidence, clearer interview stories, and stronger confidence using modern data tools.
            </p>
          </div>

          <div className="rv-cases-grid">
            {CASE_HIGHLIGHTS.map((highlight, index) => (
              <article
                key={highlight.before.label}
                className={`rv-case-card rv-fade-up rv-stagger-${index + 1} ${casesVisible ? "rv-visible" : ""}`}
              >
                <div className="rv-case-header">
                  <span style={{ fontSize: ".84rem", fontWeight: 850, color: "#241A1F" }}>
                    Learner path {index + 1}
                  </span>
                  <span className="rv-case-timeline" style={{ background: highlight.color }}>
                    {highlight.timeline}
                  </span>
                </div>

                <div className="rv-case-body">
                  <div className="rv-case-col rv-case-col-before">
                    <span className="rv-case-label rv-case-label-before">Starting point</span>
                    <span className="rv-case-title">{highlight.before.label}</span>
                    <span className="rv-case-detail">{highlight.before.detail}</span>
                  </div>

                  <div className="rv-case-col rv-case-col-after">
                    <span className="rv-case-label rv-case-label-after">Portfolio evidence</span>
                    <span className="rv-case-title">{highlight.after.label}</span>
                    <span className="rv-case-detail">{highlight.after.detail}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "92px", paddingBottom: "96px" }}>
        <div ref={ctaRevealRef} className={`rv-cta-wrap rv-fade-up ${ctaVisible ? "rv-visible" : ""}`}>
          <div className="rv-cta">
            <div className="rv-cta-inner">
              <h2>Build your own AI and data portfolio</h2>
              <p>
                Learn with structured live sessions, practical projects, mentor feedback, and career preparation built around real learner goals.
              </p>
              <div className="rv-cta-btns">
                <Link href="/courses" className="rv-btn-gold">
                  Explore Courses
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link href="/contact" className="rv-btn-outline">
                  Book Free Consultation
                  <CalendarCheck size={17} aria-hidden="true" />
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
