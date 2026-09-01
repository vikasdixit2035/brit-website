"use client";

import { FormEvent, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { trackLead } from "@/lib/analytics";
import { BLOG_ARTICLES, BLOG_CATEGORIES, BlogArticle } from "./blogData";

const ARTICLES_PER_PAGE = 6;

const FALLBACK_IMAGES = [
  "/da-Photoroom.webp",
  "/hero1.png",
  "/genai-Photoroom.png",
  "/ds-ml-Photoroom.png",
  "/agentic-ai-Photoroom.png",
  "/mentor1.jpeg",
];

function articleHref(article: BlogArticle) {
  return article.canonicalPath ?? `/blog/${article.slug}`;
}

function articleImage(article: BlogArticle, index: number) {
  return article.ogImage ?? FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
}

function readTimeLabel(readTime: string) {
  return `Time to read: ${readTime.replace(" min read", " minutes").replace("min read", "minutes")}`;
}

function ArticleImage({
  article,
  index,
  priority = false,
}: {
  article: BlogArticle;
  index: number;
  priority?: boolean;
}) {
  return (
    <div className="blog-card-image">
      <Image
        src={articleImage(article, index)}
        alt=""
        fill
        priority={priority}
        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 430px"
      />
    </div>
  );
}

function ReadMore() {
  return (
    <span className="blog-read-more" aria-hidden="true">
      Read more
      <span>→</span>
    </span>
  );
}

function LeadArticle({
  article,
  index,
  priority,
}: {
  article: BlogArticle;
  index: number;
  priority?: boolean;
}) {
  return (
    <Link href={articleHref(article)} className="blog-lead-card">
      <ArticleImage article={article} index={index} priority={priority} />
      <h2>{article.title}</h2>
      <p className="blog-meta">{readTimeLabel(article.readTime)}</p>
      <p className="blog-excerpt">{article.excerpt}</p>
      <ReadMore />
    </Link>
  );
}

function CompactArticle({ article }: { article: BlogArticle }) {
  return (
    <Link href={articleHref(article)} className="blog-compact-card">
      <h2>{article.title}</h2>
      <p className="blog-meta">{readTimeLabel(article.readTime)}</p>
      <p className="blog-excerpt">{article.excerpt}</p>
      <ReadMore />
    </Link>
  );
}

function RecentArticle({
  article,
  index,
}: {
  article: BlogArticle;
  index: number;
}) {
  return (
    <Link href={articleHref(article)} className="blog-recent-card">
      <ArticleImage article={article} index={index} />
      <h3>{article.title}</h3>
      <p className="blog-meta">{readTimeLabel(article.readTime)}</p>
      <p className="blog-excerpt">{article.excerpt}</p>
      <ReadMore />
    </Link>
  );
}

export default function BlogPage() {
  const [activeCat, setActiveCat] = useState("all");
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE);
  const [nlEmail, setNlEmail] = useState("");
  const [nlSubmitting, setNlSubmitting] = useState(false);
  const [nlSuccess, setNlSuccess] = useState(false);

  const leadArticles = BLOG_ARTICLES.slice(0, 5);
  const filteredArticles = useMemo(() => {
    if (activeCat === "all") return BLOG_ARTICLES;
    return BLOG_ARTICLES.filter((article) => article.categorySlug === activeCat);
  }, [activeCat]);

  const shownArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

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
      /* Newsletter failure should not block the page experience. */
    } finally {
      setNlSubmitting(false);
    }
  };

  return (
    <main className="blog-page">
      <style>{`
        .blog-page {
          --ink: #24101f;
          --muted: #62585e;
          --line: #d8d2c8;
          --paper: #f4f1eb;
          --gold: #ffc400;
          min-height: 100vh;
          background: var(--paper);
          color: var(--ink);
          font-family: var(--font-inter, system-ui, -apple-system, sans-serif);
        }

        .blog-page * { box-sizing: border-box; }

        .blog-wrap {
          width: min(100% - 32px, 1080px);
          margin: 0 auto;
        }

        .blog-index {
          padding-top: 102px;
          padding-bottom: 72px;
        }

        .blog-kicker-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          border-bottom: 1px solid var(--line);
          padding: 20px 0 18px;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .blog-crumbs {
          display: flex;
          align-items: center;
          gap: 11px;
          white-space: nowrap;
        }

        .blog-crumbs a {
          color: var(--ink);
          text-decoration: none;
        }

        .blog-crumbs span {
          color: #9b9288;
        }

        .blog-cats {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 19px;
          min-width: 0;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .blog-cats::-webkit-scrollbar { display: none; }

        .blog-cat {
          appearance: none;
          border: 0;
          background: transparent;
          color: var(--ink);
          cursor: pointer;
          flex: 0 0 auto;
          font: inherit;
          padding: 0;
          text-decoration: none;
        }

        .blog-cat:hover,
        .blog-cat.is-active {
          text-decoration: underline;
          text-underline-offset: 5px;
        }

        .blog-search-icon {
          display: inline-grid;
          flex: 0 0 auto;
          height: 20px;
          place-items: center;
          width: 20px;
        }

        .blog-search-icon svg {
          height: 16px;
          width: 16px;
        }

        .blog-feature-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(280px, 0.88fr);
          gap: 58px;
          padding-top: 54px;
        }

        .blog-feature-left {
          display: grid;
          gap: 54px;
        }

        .blog-feature-right {
          display: grid;
          align-content: start;
          gap: 47px;
        }

        .blog-lead-card,
        .blog-compact-card,
        .blog-recent-card {
          color: inherit;
          display: block;
          text-decoration: none;
        }

        .blog-card-image {
          aspect-ratio: 1.52 / 1;
          background: #e7e0d5;
          margin-bottom: 18px;
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .blog-card-image img {
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .blog-lead-card:hover img,
        .blog-recent-card:hover img {
          transform: scale(1.035);
        }

        .blog-lead-card h2,
        .blog-compact-card h2,
        .blog-recent-card h3 {
          color: var(--ink);
          font-size: clamp(1.25rem, 1.7vw, 1.72rem);
          font-weight: 750;
          letter-spacing: 0;
          line-height: 1.05;
          margin: 0 0 10px;
        }

        .blog-compact-card h2 {
          font-size: clamp(1.15rem, 1.45vw, 1.56rem);
        }

        .blog-recent-card h3 {
          font-size: clamp(1.05rem, 1.2vw, 1.32rem);
          line-height: 1.08;
        }

        .blog-meta {
          align-items: center;
          color: #24101f;
          display: flex;
          font-size: 0.76rem;
          font-weight: 650;
          gap: 5px;
          margin: 0 0 16px;
        }

        .blog-meta::before {
          border: 1.5px solid currentColor;
          border-radius: 999px;
          content: "";
          height: 10px;
          width: 10px;
        }

        .blog-excerpt {
          color: var(--ink);
          display: -webkit-box;
          font-size: 0.9rem;
          line-height: 1.46;
          margin: 0 0 18px;
          max-width: 620px;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }

        .blog-read-more {
          align-items: center;
          color: var(--ink);
          display: inline-flex;
          font-size: 0.78rem;
          font-weight: 750;
          gap: 7px;
        }

        .blog-lead-card:hover .blog-read-more,
        .blog-compact-card:hover .blog-read-more,
        .blog-recent-card:hover .blog-read-more {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .blog-recent-section {
          border-top: 1px solid var(--line);
          margin-top: 66px;
          padding-top: 26px;
        }

        .blog-section-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.05rem, 3.5vw, 3.3rem);
          font-weight: 500;
          letter-spacing: 0;
          line-height: 1;
          margin: 0 0 24px;
        }

        .blog-recent-grid {
          display: grid;
          gap: 43px 36px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .blog-recent-card .blog-card-image {
          aspect-ratio: 1.5 / 1;
          margin-bottom: 13px;
        }

        .blog-load-more {
          display: flex;
          justify-content: center;
          padding-top: 44px;
        }

        .blog-load-btn {
          align-items: center;
          background: var(--ink);
          border: 0;
          border-radius: 999px;
          color: #fff;
          cursor: pointer;
          display: inline-flex;
          font-family: inherit;
          font-size: 0.92rem;
          font-weight: 750;
          gap: 8px;
          min-height: 42px;
          padding: 0 25px;
        }

        .blog-newsletter {
          isolation: isolate;
          overflow: hidden;
          padding: 94px 0 106px;
          position: relative;
          text-align: center;
        }

        .blog-newsletter::before,
        .blog-newsletter::after {
          background:
            repeating-linear-gradient(
              168deg,
              transparent 0 24px,
              rgba(36, 16, 31, 0.34) 25px 26px,
              transparent 27px 43px
            );
          content: "";
          height: 440px;
          pointer-events: none;
          position: absolute;
          top: 22px;
          width: min(31vw, 360px);
          z-index: -1;
        }

        .blog-newsletter::before {
          left: max(-90px, calc((100vw - 1420px) / 2));
        }

        .blog-newsletter::after {
          right: max(-90px, calc((100vw - 1420px) / 2));
          transform: scaleX(-1);
        }

        .blog-newsletter-inner {
          margin: 0 auto;
          max-width: 480px;
          padding: 0 20px;
        }

        .blog-newsletter h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2rem, 3.2vw, 3rem);
          font-weight: 500;
          letter-spacing: 0;
          line-height: 1.02;
          margin: 0 0 26px;
        }

        .blog-newsletter h2 em {
          display: block;
          font-style: italic;
        }

        .blog-newsletter p {
          font-size: 0.84rem;
          line-height: 1.45;
          margin: 0 auto 24px;
          max-width: 420px;
        }

        .blog-nl-form {
          display: grid;
          gap: 18px;
          text-align: left;
        }

        .blog-nl-form label {
          display: grid;
          font-size: 0.82rem;
          font-weight: 700;
          gap: 8px;
        }

        .blog-nl-input {
          background: #fff;
          border: 1px solid #cfc8be;
          border-radius: 999px;
          color: var(--ink);
          font: inherit;
          min-height: 42px;
          outline: none;
          padding: 0 18px;
          width: 100%;
        }

        .blog-nl-input:focus {
          border-color: var(--ink);
          box-shadow: 0 0 0 3px rgba(36, 16, 31, 0.1);
        }

        .blog-nl-btn {
          background: var(--gold);
          border: 0;
          border-radius: 999px;
          color: var(--ink);
          cursor: pointer;
          font: inherit;
          font-size: 0.82rem;
          font-weight: 800;
          min-height: 44px;
          padding: 0 22px;
          width: 100%;
        }

        .blog-nl-btn:disabled {
          cursor: wait;
          opacity: 0.68;
        }

        .blog-nl-success {
          background: #fff;
          border: 1px solid #cfc8be;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 750;
          padding: 14px 18px;
        }

        @media (max-width: 900px) {
          .blog-kicker-row {
            align-items: flex-start;
            flex-direction: column;
          }

          .blog-cats {
            justify-content: flex-start;
            width: 100%;
          }

          .blog-feature-grid {
            gap: 44px;
            grid-template-columns: 1fr;
          }

          .blog-feature-right {
            gap: 34px;
          }

          .blog-recent-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .blog-wrap {
            width: min(100% - 24px, 1080px);
          }

          .blog-index {
            padding-top: 88px;
          }

          .blog-feature-grid {
            padding-top: 34px;
          }

          .blog-recent-grid {
            grid-template-columns: 1fr;
          }

          .blog-newsletter::before,
          .blog-newsletter::after {
            opacity: 0.16;
            width: 46vw;
          }
        }
      `}</style>

      <section className="blog-index">
        <div className="blog-wrap">
          <div className="blog-kicker-row">
            <div className="blog-crumbs">
              <Link href="/">Home</Link>
              <span>|</span>
              <span>Blog</span>
            </div>

            <div className="blog-cats" aria-label="Blog categories">
              {BLOG_CATEGORIES.map((category) => (
                <button
                  className={`blog-cat ${activeCat === category.slug ? "is-active" : ""}`}
                  key={category.slug}
                  onClick={() => {
                    setActiveCat(category.slug);
                    setVisibleCount(ARTICLES_PER_PAGE);
                  }}
                  type="button"
                >
                  {category.label}
                </button>
              ))}
              <span className="blog-search-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </span>
            </div>
          </div>

          <div className="blog-feature-grid">
            <div className="blog-feature-left">
              {leadArticles[0] ? <LeadArticle article={leadArticles[0]} index={0} priority /> : null}
              {leadArticles[4] ? <LeadArticle article={leadArticles[4]} index={4} /> : null}
            </div>

            <div className="blog-feature-right">
              {leadArticles.slice(1, 4).map((article) => (
                <CompactArticle article={article} key={article.slug} />
              ))}
            </div>
          </div>

          <section className="blog-recent-section" aria-labelledby="recent-articles-title">
            <h1 className="blog-section-title" id="recent-articles-title">
              UK Data Analytics &amp; AI Career Guides
            </h1>

            {shownArticles.length === 0 ? (
              <p className="blog-excerpt">No articles in this category yet. Check back soon.</p>
            ) : (
              <div className="blog-recent-grid">
                {shownArticles.map((article, index) => (
                  <RecentArticle article={article} index={index} key={article.slug} />
                ))}
              </div>
            )}

            {hasMore ? (
              <div className="blog-load-more">
                <button className="blog-load-btn" onClick={() => setVisibleCount((count) => count + ARTICLES_PER_PAGE)} type="button">
                  Load more <span aria-hidden="true">→</span>
                </button>
              </div>
            ) : null}
          </section>
        </div>
      </section>

      <section className="blog-newsletter" aria-labelledby="blog-newsletter-title">
        <div className="blog-newsletter-inner">
          <h2 id="blog-newsletter-title">
            Subscribe to
            <em>The Thought Process</em>
            newsletter
          </h2>
          <p>Get practical career insights on data analytics, AI, interviews, salaries, and UK tech roles. Subscribe for free.</p>

          {nlSuccess ? (
            <div className="blog-nl-success">You&apos;re subscribed. Check your inbox.</div>
          ) : (
            <form className="blog-nl-form" onSubmit={handleNewsletter}>
              <label>
                Email
                <input
                  className="blog-nl-input"
                  onChange={(e) => setNlEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  type="email"
                  value={nlEmail}
                />
              </label>
              <button className="blog-nl-btn" disabled={nlSubmitting} type="submit">
                {nlSubmitting ? "Subscribing..." : "Subscribe →"}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
