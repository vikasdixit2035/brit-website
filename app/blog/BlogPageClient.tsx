"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import Link from "next/link";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { trackLead } from "@/lib/analytics";
import { BLOG_ARTICLES, BLOG_CATEGORIES } from "./blogData";

/* ── tokens ── */
const BLUE = "#1D4ED8";
const GOLD = "#D4AF37";
const DEEP = "#0a0f1e";

const ARTICLES_PER_PAGE = 6;

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

/* ══════════════════════════════════════════════════════════════════ */
export default function BlogPage() {
  const [banner, setBanner] = useState(true);
  const [activeCat, setActiveCat] = useState("all");
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE);

  /* newsletter */
  const [nlEmail, setNlEmail] = useState("");
  const [nlSubmitting, setNlSubmitting] = useState(false);
  const [nlSuccess, setNlSuccess] = useState(false);

  const { revealRef: heroRevealRef, visible: heroVisible } = useReveal();
  const { revealRef: catsRevealRef, visible: catsVisible } = useReveal();
  const { revealRef: featuredRevealRef, visible: featuredVisible } = useReveal();
  const { revealRef: gridRevealRef, visible: gridVisible } = useReveal();
  const { revealRef: midCtaRevealRef, visible: midCtaVisible } = useReveal();
  const { revealRef: nlSecRevealRef, visible: nlSecVisible } = useReveal();

  /* filtered articles (non-featured) */
  const allNonFeatured = BLOG_ARTICLES.filter((a) => !a.featured);
  const filtered =
    activeCat === "all"
      ? allNonFeatured
      : allNonFeatured.filter((a) => a.categorySlug === activeCat);
  const shownArticles = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  /* newsletter submit */
  const handleNewsletter = async (e: FormEvent) => {
    e.preventDefault();
    if (!nlEmail.trim()) return;
    setNlSubmitting(true);
    const API_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:4000/api/leads"
        : "https://api.britinstitute.uk/api/leads";
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: nlEmail.trim(), source: "blog-newsletter", name: "Blog Subscriber" }),
      });
      if (!res.ok) throw new Error("Newsletter submission failed");
      trackLead({
        formName: "blog_newsletter",
        source: "blog-newsletter",
      });
      setNlSuccess(true);
      setNlEmail("");
    } catch {
      /* silent fail */
    } finally {
      setNlSubmitting(false);
    }
  };

  return (
    <main style={{ background: "#FAFAFA", minHeight: "100vh", fontFamily: "var(--font-inter, system-ui, -apple-system, sans-serif)", color: "#111827" }}>
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />

      <style>{`
        /* ── BLOG PAGE ── */
        .bl-hero {
          position: relative; background: ${DEEP}; overflow: hidden; text-align: center;
        }
        .bl-hero::before {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 50% 0%, rgba(29,78,216,.22), transparent 65%),
            radial-gradient(ellipse 45% 45% at 20% 80%, rgba(139,92,246,.14), transparent 55%),
            radial-gradient(ellipse 40% 40% at 85% 70%, rgba(212,175,55,.1), transparent 50%);
          pointer-events: none;
        }
        .bl-hero-inner {
          position: relative; z-index: 2; max-width: 860px; margin: 0 auto; padding: 0 24px;
        }
        .bl-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 18px; border-radius: 9999px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.1);
          color: rgba(255,255,255,.72);
          font-size: .82rem; font-weight: 600; letter-spacing: .04em;
          margin-bottom: 28px; backdrop-filter: blur(8px);
        }
        .bl-h1 {
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800; color: #fff;
          line-height: 1.14; letter-spacing: -.035em;
          margin: 0 0 20px;
        }
        .bl-h1 span { color: ${GOLD}; }
        .bl-sub {
          font-size: 1.05rem; color: rgba(255,255,255,.55);
          line-height: 1.7; max-width: 640px; margin: 0 auto;
        }
        .bl-divider {
          width: 56px; height: 3px; border-radius: 2px;
          background: linear-gradient(90deg, ${BLUE}, ${GOLD});
          margin: 32px auto 0;
        }

        /* shared */
        .bl-section { max-width: 1140px; margin: 0 auto; padding: 0 24px; }
        .bl-section-title { text-align: center; margin-bottom: 40px; }
        .bl-section-title h2 {
          font-size: clamp(1.5rem, 2.8vw, 2rem);
          font-weight: 800; color: #111827; margin: 0 0 10px; letter-spacing: -.02em;
        }
        .bl-section-title h2 span { color: ${BLUE}; }
        .bl-section-title p {
          color: #6B7280; font-size: .95rem; line-height: 1.6;
          max-width: 520px; margin: 0 auto;
        }

        /* ── category tabs ── */
        .bl-cats {
          display: flex; gap: 10px; justify-content: center;
          flex-wrap: wrap; margin-bottom: 48px;
        }
        .bl-cat-btn {
          padding: 9px 20px; border-radius: 9999px;
          font-size: .85rem; font-weight: 600;
          border: 1.5px solid #E5E7EB; background: #fff;
          color: #374151; cursor: pointer; font-family: inherit;
          transition: all .25s;
        }
        .bl-cat-btn:hover { border-color: ${BLUE}; color: ${BLUE}; }
        .bl-cat-btn.bl-active {
          background: ${BLUE}; color: #fff; border-color: ${BLUE};
        }

        /* ── featured cards ── */
        .bl-featured-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .bl-featured-card {
          background: #fff; border-radius: 16px; overflow: hidden;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 4px 20px rgba(0,0,0,.04);
          display: flex; flex-direction: column;
          transition: transform .35s cubic-bezier(.4,0,.2,1), box-shadow .35s;
          text-decoration: none; color: inherit;
        }
        .bl-featured-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,.12);
        }
        .bl-featured-img {
          height: 180px; position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }
        .bl-featured-img-pattern {
          position: absolute; inset: 0;
        }
        .bl-featured-img-icon {
          position: relative; z-index: 2;
          width: 56px; height: 56px; border-radius: 14px;
          background: rgba(255,255,255,.2); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          color: #fff;
        }
        .bl-featured-body {
          padding: 24px 22px; flex: 1; display: flex; flex-direction: column;
        }
        .bl-featured-cat {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: .7rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: .06em; padding: 4px 10px; border-radius: 6px;
          width: fit-content; margin-bottom: 12px; color: #fff;
        }
        .bl-featured-title {
          font-size: 1.05rem; font-weight: 700; color: #111827;
          line-height: 1.35; margin: 0 0 10px; flex: 1;
        }
        .bl-featured-excerpt {
          font-size: .85rem; color: #6B7280; line-height: 1.55;
          margin: 0 0 16px;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bl-featured-meta {
          display: flex; align-items: center; gap: 14px;
          font-size: .78rem; color: #9CA3AF; font-weight: 500;
        }
        .bl-featured-meta span {
          display: flex; align-items: center; gap: 4px;
        }

        /* ── article grid ── */
        .bl-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 22px;
        }
        .bl-article-card {
          background: #fff; border-radius: 14px;
          padding: 28px 24px;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 3px 16px rgba(0,0,0,.03);
          display: flex; flex-direction: column;
          transition: transform .3s cubic-bezier(.4,0,.2,1), box-shadow .3s;
          text-decoration: none; color: inherit;
        }
        .bl-article-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0,0,0,.08);
        }
        .bl-article-cat {
          display: inline-flex; padding: 3px 10px;
          border-radius: 6px; font-size: .68rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: .06em;
          color: #fff; width: fit-content; margin-bottom: 14px;
        }
        .bl-article-title {
          font-size: 1rem; font-weight: 700; color: #111827;
          line-height: 1.4; margin: 0 0 10px;
        }
        .bl-article-excerpt {
          font-size: .87rem; color: #6B7280; line-height: 1.55;
          margin: 0 0 18px; flex: 1;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bl-article-footer {
          display: flex; align-items: center; justify-content: space-between;
        }
        .bl-article-meta {
          font-size: .76rem; color: #9CA3AF; font-weight: 500;
          display: flex; align-items: center; gap: 12px;
        }
        .bl-read-more {
          font-size: .82rem; font-weight: 700; color: ${BLUE};
          display: flex; align-items: center; gap: 4px;
          transition: gap .2s;
        }
        .bl-article-card:hover .bl-read-more { gap: 8px; }

        /* load more */
        .bl-load-more {
          display: flex; justify-content: center; margin-top: 40px;
        }
        .bl-load-btn {
          padding: 12px 32px; border-radius: 10px;
          background: #fff; border: 1.5px solid #E5E7EB;
          font-size: .9rem; font-weight: 600; color: #374151;
          cursor: pointer; font-family: inherit;
          transition: border-color .25s, color .25s, box-shadow .25s;
        }
        .bl-load-btn:hover {
          border-color: ${BLUE}; color: ${BLUE};
          box-shadow: 0 4px 16px rgba(29,78,216,.1);
        }

        /* ── mid CTA ── */
        .bl-mid-cta {
          background: linear-gradient(135deg, #111827, #1E3A5F, ${BLUE});
          border-radius: 20px; padding: 48px 40px; text-align: center;
          position: relative; overflow: hidden;
          box-shadow: 0 16px 48px rgba(0,0,0,.15);
        }
        .bl-mid-cta::before {
          content: ''; position: absolute; width: 200px; height: 200px;
          top: -60px; left: -40px; border-radius: 50%;
          background: rgba(59,130,246,.25); filter: blur(60px);
          pointer-events: none;
        }
        .bl-mid-cta-inner { position: relative; z-index: 2; }
        .bl-mid-cta h2 { font-size: 1.5rem; font-weight: 800; color: #fff; margin: 0 0 12px; }
        .bl-mid-cta p { color: rgba(255,255,255,.6); font-size: .95rem; margin: 0 0 24px; line-height: 1.6; }
        .bl-mid-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 30px;
          background: linear-gradient(135deg, ${GOLD}, #FBBF24);
          color: #000; font-weight: 700; font-size: .92rem;
          border: none; border-radius: 9999px; cursor: pointer;
          text-decoration: none; font-family: inherit;
          transition: transform .3s, box-shadow .3s;
          box-shadow: 0 4px 18px rgba(212,175,55,.3);
        }
        .bl-mid-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(212,175,55,.45); }

        /* ── newsletter ── */
        .bl-nl-wrap {
          max-width: 600px; margin: 0 auto;
          background: #fff; border-radius: 20px;
          padding: 44px 36px; text-align: center;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 8px 36px rgba(0,0,0,.05);
          position: relative; overflow: hidden;
        }
        .bl-nl-wrap::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, ${BLUE}, ${GOLD});
        }
        .bl-nl-wrap h2 {
          font-size: 1.3rem; font-weight: 800; color: #111827; margin: 0 0 8px;
        }
        .bl-nl-wrap > p {
          font-size: .92rem; color: #6B7280; margin: 0 0 24px; line-height: 1.5;
        }
        .bl-nl-form {
          display: flex; gap: 10px;
        }
        .bl-nl-input {
          flex: 1; padding: 13px 16px;
          border: 1.5px solid #E5E7EB; border-radius: 10px;
          font-size: .92rem; color: #111827; background: #FAFAFA;
          font-family: inherit; outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .bl-nl-input:focus {
          border-color: ${BLUE};
          box-shadow: 0 0 0 3px rgba(29,78,216,.1);
          background: #fff;
        }
        .bl-nl-input::placeholder { color: #9CA3AF; }
        .bl-nl-btn {
          padding: 13px 24px;
          background: linear-gradient(135deg, ${BLUE}, #2563EB);
          color: #fff; font-weight: 700; font-size: .9rem;
          border: none; border-radius: 10px; cursor: pointer;
          font-family: inherit; white-space: nowrap;
          transition: transform .25s, box-shadow .25s;
        }
        .bl-nl-btn:hover:not(:disabled) {
          transform: translateY(-2px); box-shadow: 0 6px 20px rgba(29,78,216,.3);
        }
        .bl-nl-btn:disabled { opacity: .6; cursor: not-allowed; }
        .bl-nl-success {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 14px; background: #ECFDF5; border-radius: 10px;
          color: #059669; font-weight: 600; font-size: .9rem;
        }

        /* animations */
        .bl-fade-up {
          opacity: 0; transform: translateY(28px);
          transition: opacity .7s cubic-bezier(.4,0,.2,1), transform .7s cubic-bezier(.4,0,.2,1);
        }
        .bl-fade-up.bl-vis { opacity: 1; transform: translateY(0); }
        .bl-s1 { transition-delay: .1s; }
        .bl-s2 { transition-delay: .2s; }
        .bl-s3 { transition-delay: .3s; }

        @media (max-width: 900px) {
          .bl-featured-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .bl-grid { grid-template-columns: 1fr; }
          .bl-nl-form { flex-direction: column; }
          .bl-nl-btn { width: 100%; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════ */}
      <section className="bl-hero" style={{ paddingTop: banner ? "160px" : "120px", paddingBottom: "80px" }}>
        <div ref={heroRevealRef} className={`bl-hero-inner bl-fade-up ${heroVisible ? "bl-vis" : ""}`}>

          <h1 className="bl-h1">
            Insights on Data Analytics, Data Science<br />
            and <span>AI Careers in the UK</span>
          </h1>
          <p className="bl-sub">
            Explore practical guides, salary insights, and career advice to help you move into high-demand tech roles.
          </p>
          <div className="bl-divider" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. CATEGORY NAVIGATION
      ═══════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 64, paddingBottom: 0 }}>
        <div ref={catsRevealRef} className="bl-section">
          <div className={`bl-section-title bl-fade-up ${catsVisible ? "bl-vis" : ""}`}>
            <h2>Explore by <span>Topic</span></h2>
          </div>
          <div className={`bl-cats bl-fade-up ${catsVisible ? "bl-vis" : ""}`}>
            {BLOG_CATEGORIES.map((c) => (
              <button
                key={c.slug}
                className={`bl-cat-btn ${activeCat === c.slug ? "bl-active" : ""}`}
                onClick={() => { setActiveCat(c.slug); setVisibleCount(ARTICLES_PER_PAGE); }}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. FEATURED ARTICLES
      ═══════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 48, paddingBottom: 96 }}>
        <div ref={featuredRevealRef} className="bl-section">
          <div className={`bl-section-title bl-fade-up ${featuredVisible ? "bl-vis" : ""}`}>
            <h2>Featured <span>Guides</span></h2>
          </div>

          <div className="bl-featured-grid">
            {BLOG_ARTICLES.filter((a) => a.featured).map((a, i) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className={`bl-featured-card bl-fade-up bl-s${i + 1} ${featuredVisible ? "bl-vis" : ""}`}
              >
                <div className="bl-featured-img">
                  <div
                    className="bl-featured-img-pattern"
                    style={{
                      background: `linear-gradient(135deg, ${a.color}, ${a.color}88, ${DEEP})`,
                    }}
                  />
                  <div className="bl-featured-img-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                </div>
                <div className="bl-featured-body">
                  <span className="bl-featured-cat" style={{ background: a.color }}>{a.category}</span>
                  <h3 className="bl-featured-title">{a.title}</h3>
                  <p className="bl-featured-excerpt">{a.excerpt}</p>
                  <div className="bl-featured-meta">
                    <span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                      {a.date}
                    </span>
                    <span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                      {a.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. ALL ARTICLES GRID
      ═══════════════════════════════════════════════════ */}
      <section style={{ paddingBottom: 80, background: "#F3F4F6", paddingTop: 80 }}>
        <div ref={gridRevealRef} className="bl-section">
          <div className={`bl-section-title bl-fade-up ${gridVisible ? "bl-vis" : ""}`}>
            <h2>Latest <span>Articles</span></h2>
          </div>

          {shownArticles.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 0", color: "#9CA3AF", fontSize: ".95rem" }}>
              No articles in this category yet. Check back soon!
            </div>
          ) : (
            <div className="bl-grid">
              {shownArticles.map((a, i) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className={`bl-article-card bl-fade-up ${gridVisible ? "bl-vis" : ""}`}
                  style={{ transitionDelay: `${Math.min(i * 0.08, 0.4)}s` }}
                >
                  <span className="bl-article-cat" style={{ background: a.color }}>{a.category}</span>
                  <h3 className="bl-article-title">{a.title}</h3>
                  <p className="bl-article-excerpt">{a.excerpt}</p>
                  <div className="bl-article-footer">
                    <div className="bl-article-meta">
                      <span>{a.date}</span>
                      <span>{a.readTime}</span>
                    </div>
                    <span className="bl-read-more">
                      Read
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {hasMore && (
            <div className="bl-load-more">
              <button className="bl-load-btn" onClick={() => setVisibleCount((c) => c + ARTICLES_PER_PAGE)}>
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. MID CTA
      ═══════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div ref={midCtaRevealRef} className={`bl-section bl-fade-up ${midCtaVisible ? "bl-vis" : ""}`}>
          <div className="bl-mid-cta">
            <div className="bl-mid-cta-inner">
              <h2>Looking to Build These Skills?</h2>
              <p>Explore structured programmes designed for real career outcomes.</p>
              <Link href="/courses" className="bl-mid-cta-btn">
                View Courses
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. NEWSLETTER
      ═══════════════════════════════════════════════════ */}
      <section style={{ paddingBottom: 96 }}>
        <div ref={nlSecRevealRef} className={`bl-section bl-fade-up ${nlSecVisible ? "bl-vis" : ""}`}>
          <div className="bl-nl-wrap">
            <h2>Get Career Insights Directly</h2>
            <p>Receive updates on data, AI, and tech careers in the UK.</p>

            {nlSuccess ? (
              <div className="bl-nl-success">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                You&apos;re subscribed! Check your inbox.
              </div>
            ) : (
              <form className="bl-nl-form" onSubmit={handleNewsletter}>
                <input
                  className="bl-nl-input"
                  type="email"
                  placeholder="Enter your email"
                  value={nlEmail}
                  onChange={(e) => setNlEmail(e.target.value)}
                  required
                />
                <button className="bl-nl-btn" type="submit" disabled={nlSubmitting}>
                  {nlSubmitting ? "Subscribing…" : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
