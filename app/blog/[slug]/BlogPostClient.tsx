"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BLOG_ARTICLES, BlogArticle, BlogCTA } from "../blogData";

/* ── tokens ── */
const BLUE = "#1D4ED8";
const GOLD = "#D4AF37";
const DEEP = "#0a0f1e";

/* ── reveal hook ── */
function useReveal(threshold = 0.1) {
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

/* ── simple markdown-ish renderer ── */
function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trimStart();

    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={key++} style={{ fontSize: "1.4rem", fontWeight: 800, color: "#111827", margin: "36px 0 14px", letterSpacing: "-.02em" }}>
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={key++} style={{ fontSize: "1.15rem", fontWeight: 700, color: "#111827", margin: "28px 0 10px" }}>
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed.startsWith("- **")) {
      const match = trimmed.match(/^- \*\*(.+?)\*\*\s*[—–-]\s*(.+)$/);
      if (match) {
        elements.push(
          <li key={key++} style={{ marginBottom: 8, lineHeight: 1.65, color: "#374151" }}>
            <strong style={{ color: "#111827" }}>{match[1]}</strong> — {match[2]}
          </li>
        );
      } else {
        const boldMatch = trimmed.match(/^- \*\*(.+?)\*\*(.*)$/);
        if (boldMatch) {
          elements.push(
            <li key={key++} style={{ marginBottom: 8, lineHeight: 1.65, color: "#374151" }}>
              <strong style={{ color: "#111827" }}>{boldMatch[1]}</strong>{boldMatch[2]}
            </li>
          );
        } else {
          elements.push(
            <li key={key++} style={{ marginBottom: 8, lineHeight: 1.65, color: "#374151" }}>
              {trimmed.slice(2)}
            </li>
          );
        }
      }
    } else if (trimmed.startsWith("- ")) {
      elements.push(
        <li key={key++} style={{ marginBottom: 8, lineHeight: 1.65, color: "#374151" }}>
          {trimmed.slice(2)}
        </li>
      );
    } else if (/^\d+\.\s/.test(trimmed)) {
      elements.push(
        <li key={key++} style={{ marginBottom: 8, lineHeight: 1.65, color: "#374151", listStyleType: "decimal" }}>
          {trimmed.replace(/^\d+\.\s/, "")}
        </li>
      );
    } else if (trimmed.startsWith("|")) {
      const cells = trimmed.split("|").filter(Boolean).map((c) => c.trim());
      if (cells.some((c) => /^[-]+$/.test(c))) continue;
      elements.push(
        <div key={key++} style={{ display: "flex", gap: 24, padding: "8px 0", borderBottom: "1px solid #F3F4F6", fontSize: ".9rem" }}>
          {cells.map((cell, ci) => (
            <span key={ci} style={{ flex: 1, color: ci === 0 ? "#111827" : "#6B7280", fontWeight: ci === 0 ? 600 : 400 }}>
              {cell}
            </span>
          ))}
        </div>
      );
    } else if (trimmed === "") {
      elements.push(<div key={key++} style={{ height: 8 }} />);
    } else {
      const parts = trimmed.split(/\*\*(.+?)\*\*/g);
      elements.push(
        <p key={key++} style={{ color: "#374151", lineHeight: 1.75, margin: "0 0 6px", fontSize: ".95rem" }}>
          {parts.map((part, pi) =>
            pi % 2 === 1
              ? <strong key={pi} style={{ color: "#111827" }}>{part}</strong>
              : part
          )}
        </p>
      );
    }
  }

  return elements;
}

/* ── CTA block renderer ── */
function CTABlock({ cta, variant }: { cta: BlogCTA; variant: "mid" | "bottom" }) {
  return (
    <div style={{
      background: variant === "mid"
        ? `linear-gradient(135deg, ${BLUE}, #2563EB)`
        : `linear-gradient(135deg, #111827, #1E3A5F, ${BLUE})`,
      borderRadius: 20, padding: variant === "mid" ? "40px 36px" : "52px 40px",
      textAlign: "center", position: "relative", overflow: "hidden",
      boxShadow: "0 16px 48px rgba(0,0,0,.15)",
    }}>
      {/* decorative blobs */}
      <div style={{ position: "absolute", width: 200, height: 200, top: -60, left: -50, borderRadius: "50%", background: "rgba(139,92,246,.2)", filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 180, height: 180, bottom: -50, right: -40, borderRadius: "50%", background: "rgba(212,175,55,.15)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        <h2 style={{ fontSize: variant === "bottom" ? "1.5rem" : "1.3rem", fontWeight: 800, color: "#fff", margin: "0 0 10px" }}>
          {cta.heading}
        </h2>
        <p style={{ color: "rgba(255,255,255,.6)", fontSize: ".92rem", margin: "0 0 28px", lineHeight: 1.65, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
          {cta.text}
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href={cta.primaryHref}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 30px",
              background: `linear-gradient(135deg, ${GOLD}, #FBBF24)`,
              color: "#000", fontWeight: 700, fontSize: ".9rem",
              border: "none", borderRadius: 9999, textDecoration: "none",
              boxShadow: "0 4px 18px rgba(212,175,55,.3)",
              transition: "transform .3s, box-shadow .3s",
            }}
          >
            {cta.primaryLabel}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </Link>
          {cta.secondaryLabel && cta.secondaryHref && (
            <Link
              href={cta.secondaryHref}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 30px",
                background: "rgba(255,255,255,.1)",
                backdropFilter: "blur(8px)",
                color: "#fff", fontWeight: 600, fontSize: ".9rem",
                border: "1px solid rgba(255,255,255,.2)",
                borderRadius: 9999, textDecoration: "none",
                transition: "transform .3s, background .3s",
              }}
            >
              {cta.secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── FAQ accordion item ── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: "#fff", borderRadius: 14,
      border: `1.5px solid ${open ? BLUE : "rgba(0,0,0,.06)"}`,
      overflow: "hidden",
      transition: "border-color .3s",
      boxShadow: open ? `0 4px 20px rgba(29,78,216,.08)` : "0 2px 10px rgba(0,0,0,.02)",
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 16,
          padding: "18px 22px", background: "transparent",
          border: "none", cursor: "pointer", fontFamily: "inherit",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: ".95rem", fontWeight: 700, color: "#111827", lineHeight: 1.4 }}>{question}</span>
        <span style={{
          width: 28, height: 28, borderRadius: 8, flexShrink: 0,
          background: open ? BLUE : "#F3F4F6",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background .3s, transform .3s",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={open ? "#fff" : "#6B7280"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div style={{
        maxHeight: open ? 300 : 0,
        overflow: "hidden",
        transition: "max-height .35s cubic-bezier(.4,0,.2,1), padding .35s",
        padding: open ? "0 22px 20px" : "0 22px 0",
      }}>
        <p style={{ color: "#6B7280", fontSize: ".9rem", lineHeight: 1.7, margin: 0 }}>{answer}</p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════ */
export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [banner, setBanner] = useState(true);

  const { revealRef: heroRevealRef, visible: heroVisible } = useReveal();
  const { revealRef: bodyRevealRef, visible: bodyVisible } = useReveal();

  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  /* related articles — prefer explicit slugs, fall back to same category */
  const getRelated = (a: BlogArticle): BlogArticle[] => {
    if (a.relatedSlugs?.length) {
      return a.relatedSlugs
        .map((s) => BLOG_ARTICLES.find((b) => b.slug === s))
        .filter(Boolean) as BlogArticle[];
    }
    const related = BLOG_ARTICLES.filter((b) => b.slug !== a.slug && b.categorySlug === a.categorySlug).slice(0, 3);
    if (related.length < 3) {
      const more = BLOG_ARTICLES.filter((b) => b.slug !== a.slug && !related.includes(b)).slice(0, 3 - related.length);
      related.push(...more);
    }
    return related;
  };

  if (!article) {
    return (
      <main style={{ background: "#FAFAFA", minHeight: "100vh", fontFamily: "var(--font-inter, system-ui, -apple-system, sans-serif)" }}>
        <TopBanner visible={banner} onClose={() => setBanner(false)} />
        <Navbar hasBanner={banner} />
        <section style={{ paddingTop: banner ? "200px" : "160px", paddingBottom: 80, textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#111827", marginBottom: 16 }}>Article Not Found</h1>
          <p style={{ color: "#6B7280", marginBottom: 32 }}>The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" style={{ color: BLUE, fontWeight: 700, textDecoration: "none" }}>← Back to Blog</Link>
        </section>
        <Footer />
      </main>
    );
  }

  const related = getRelated(article);

  /* split content at midpoint for mid-CTA injection */
  const contentSections = article.content.split(/\n(?=## )/);
  const midIndex = Math.ceil(contentSections.length / 2);
  const contentBefore = contentSections.slice(0, midIndex).join("\n");
  const contentAfter = contentSections.slice(midIndex).join("\n");

  return (
    <main style={{ background: "#FAFAFA", minHeight: "100vh", fontFamily: "var(--font-inter, system-ui, -apple-system, sans-serif)", color: "#111827" }}>
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />

      <style>{`
        .bp-hero {
          position: relative; background: ${DEEP}; overflow: hidden; text-align: center;
        }
        .bp-hero::before {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 55% 50% at 50% 0%, rgba(29,78,216,.22), transparent 65%),
            radial-gradient(ellipse 40% 40% at 80% 80%, rgba(212,175,55,.1), transparent 50%);
          pointer-events: none;
        }
        .bp-hero-inner {
          position: relative; z-index: 2;
          max-width: 760px; margin: 0 auto; padding: 0 24px;
        }
        .bp-back {
          display: inline-flex; align-items: center; gap: 6px;
          color: rgba(255,255,255,.5); font-size: .85rem; font-weight: 600;
          text-decoration: none; margin-bottom: 24px;
          transition: color .2s;
        }
        .bp-back:hover { color: rgba(255,255,255,.8); }
        .bp-cat {
          display: inline-flex; padding: 5px 14px; border-radius: 8px;
          font-size: .72rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: .06em; color: #fff; margin-bottom: 18px;
        }
        .bp-title {
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-weight: 800; color: #fff;
          line-height: 1.18; letter-spacing: -.03em;
          margin: 0 0 18px;
        }
        .bp-meta {
          display: flex; align-items: center; justify-content: center; gap: 20px;
          font-size: .85rem; color: rgba(255,255,255,.45); font-weight: 500;
        }
        .bp-meta span {
          display: flex; align-items: center; gap: 5px;
        }

        .bp-body {
          max-width: 720px; margin: 0 auto; padding: 0 24px;
        }
        .bp-content {
          background: #fff; border-radius: 20px;
          padding: 48px 40px;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 8px 40px rgba(0,0,0,.04);
        }
        .bp-content ul, .bp-content ol {
          padding-left: 20px; margin: 8px 0 16px;
        }

        /* related */
        .bp-related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 22px;
        }
        .bp-related-card {
          background: #fff; border-radius: 14px;
          padding: 24px 22px; text-decoration: none; color: inherit;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 3px 14px rgba(0,0,0,.03);
          transition: transform .3s, box-shadow .3s;
          display: flex; flex-direction: column;
        }
        .bp-related-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 28px rgba(0,0,0,.08);
        }
        .bp-related-cat {
          display: inline-flex; padding: 3px 10px;
          border-radius: 6px; font-size: .68rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: .06em;
          color: #fff; width: fit-content; margin-bottom: 12px;
        }
        .bp-related-title {
          font-size: .95rem; font-weight: 700; color: #111827;
          line-height: 1.4; margin: 0 0 8px; flex: 1;
        }
        .bp-related-meta {
          font-size: .76rem; color: #9CA3AF;
        }

        /* animations */
        .bp-fade-up {
          opacity: 0; transform: translateY(28px);
          transition: opacity .7s cubic-bezier(.4,0,.2,1), transform .7s cubic-bezier(.4,0,.2,1);
        }
        .bp-fade-up.bp-vis { opacity: 1; transform: translateY(0); }

        @media (max-width: 768px) {
          .bp-content { padding: 32px 20px; }
          .bp-related-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="bp-hero" style={{ paddingTop: banner ? "150px" : "110px", paddingBottom: "60px" }}>
        <div ref={heroRevealRef} className={`bp-hero-inner bp-fade-up ${heroVisible ? "bp-vis" : ""}`}>
          <Link href="/blog" className="bp-back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
            Back to Blog
          </Link>
          <div><span className="bp-cat" style={{ background: article.color }}>{article.category}</span></div>
          <h1 className="bp-title">{article.title}</h1>
          <div className="bp-meta">
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              {article.date}
            </span>
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* ── BODY (first half) ── */}
      <section style={{ paddingTop: 48, paddingBottom: article.midCta ? 40 : 80 }}>
        <div ref={bodyRevealRef} className={`bp-body bp-fade-up ${bodyVisible ? "bp-vis" : ""}`}>
          <div className="bp-content">
            {renderContent(contentBefore)}
          </div>
        </div>
      </section>

      {/* ── MID CTA ── */}
      {article.midCta && (
        <section style={{ paddingBottom: 40 }}>
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
            <CTABlock cta={article.midCta} variant="mid" />
          </div>
        </section>
      )}

      {/* ── BODY (second half) ── */}
      {contentAfter.trim() && (
        <section style={{ paddingBottom: 48 }}>
          <div className="bp-body">
            <div className="bp-content">
              {renderContent(contentAfter)}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQs ── */}
      {article.faqs && article.faqs.length > 0 && (
        <section style={{ paddingBottom: 64 }}>
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
            <h2 style={{
              fontSize: "1.5rem", fontWeight: 800, color: "#111827",
              textAlign: "center", marginBottom: 28,
            }}>
              Frequently Asked <span style={{ color: BLUE }}>Questions</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {article.faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ── */}
      <section style={{ paddingBottom: 80 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
          {article.bottomCta ? (
            <CTABlock cta={article.bottomCta} variant="bottom" />
          ) : (
            <CTABlock
              cta={{
                heading: "Ready to Start Learning?",
                text: "Explore structured programmes designed for real career outcomes.",
                primaryLabel: "Explore Courses",
                primaryHref: "/courses",
              }}
              variant="bottom"
            />
          )}
        </div>
      </section>

      {/* ── RELATED ── */}
      {related.length > 0 && (
        <section style={{ paddingBottom: 96, background: "#F3F4F6", paddingTop: 80 }}>
          <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111827", margin: "0 0 8px" }}>
                Related <span style={{ color: BLUE }}>Articles</span>
              </h2>
            </div>
            <div className="bp-related-grid">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="bp-related-card">
                  <span className="bp-related-cat" style={{ background: r.color }}>{r.category}</span>
                  <h3 className="bp-related-title">{r.title}</h3>
                  <span className="bp-related-meta">{r.date} · {r.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
