"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  GraduationCap,
  ListChecks,
  Share2,
  Sparkles,
  UserRound,
} from "lucide-react";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BLOG_ARTICLES, BlogArticle, BlogCTA } from "../blogData";

const BLUE = "#1D4ED8";
const GOLD = "#D4AF37";
const DEEP = "#0a0f1e";

const COURSE_LINKS: Record<string, { title: string; href: string; description: string }> = {
  "data-analytics": {
    title: "Data Analyst and Gen AI Certification Program",
    href: "/courses/data-analytics",
    description: "Build SQL, Power BI, Tableau, Python basics, and AI workflow skills for UK data analyst roles.",
  },
  "data-science": {
    title: "Data Science, Machine Learning and Gen AI Certification Program",
    href: "/courses/data-science",
    description: "Move into Python, statistics, machine learning, GenAI workflows, MLOps, and capstone projects for data science careers.",
  },
  "ai-automation": {
    title: "Agentic AI Certification Program",
    href: "/courses/ai-automation",
    description: "Learn practical AI automation systems, tools, and workflows for emerging AI specialist roles.",
  },
  "gen-ai": {
    title: "Generative AI Certification Program",
    href: "/courses/gen-ai",
    description: "Master prompt engineering, GenAI tools, copilots, structured outputs, document Q&A, and responsible AI workflows.",
  },
};

function useReveal(threshold = 0.1) {
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
      { threshold },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { revealRef: ref, visible };
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getHeadings(content: string) {
  return content
    .split("\n")
    .filter((line) => line.trimStart().startsWith("## "))
    .map((line) => {
      const title = line.trimStart().slice(3);
      return { id: slugify(title), title };
    });
}

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <strong key={`${part}-${index}`}>{part}</strong>
    ) : (
      part
    ),
  );
}

function cleanListItem(line: string) {
  return line.replace(/^- /, "").replace(/^\d+\.\s/, "");
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const trimmed = lines[i].trimStart();

    if (!trimmed) {
      i += 1;
      continue;
    }

    if (trimmed.startsWith("## ")) {
      const title = trimmed.slice(3);
      elements.push(
        <h2 id={slugify(title)} key={key++} className="bp-prose-h2">
          {title}
        </h2>,
      );
      i += 1;
      continue;
    }

    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="bp-prose-h3">
          {trimmed.slice(4)}
        </h3>,
      );
      i += 1;
      continue;
    }

    if (trimmed.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trimStart().startsWith("- ")) {
        items.push(cleanListItem(lines[i].trimStart()));
        i += 1;
      }
      elements.push(
        <ul key={key++} className="bp-list">
          {items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`}>{renderInline(item)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    if (/^\d+\.\s/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trimStart())) {
        items.push(cleanListItem(lines[i].trimStart()));
        i += 1;
      }
      elements.push(
        <ol key={key++} className="bp-list bp-list-numbered">
          {items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`}>{renderInline(item)}</li>
          ))}
        </ol>,
      );
      continue;
    }

    if (trimmed.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trimStart().startsWith("|")) {
        const row = lines[i].trim();
        const cells = row.split("|").filter(Boolean).map((cell) => cell.trim());
        const isDivider = cells.every((cell) => /^-+$/.test(cell));
        if (!isDivider) rows.push(cells);
        i += 1;
      }
      elements.push(
        <div key={key++} className="bp-table-wrap">
          <table className="bp-table">
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={`${row.join("-")}-${rowIndex}`}>
                  {row.map((cell, cellIndex) => {
                    const Cell = rowIndex === 0 ? "th" : "td";
                    return <Cell key={`${cell}-${cellIndex}`}>{renderInline(cell)}</Cell>;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    elements.push(
      <p key={key++} className="bp-prose-p">
        {renderInline(trimmed)}
      </p>,
    );
    i += 1;
  }

  return elements;
}

function CTABlock({ cta, variant }: { cta: BlogCTA; variant: "mid" | "bottom" }) {
  return (
    <div className={`bp-cta bp-cta-${variant}`}>
      <div className="bp-cta-icon">
        {variant === "mid" ? <Sparkles size={22} /> : <GraduationCap size={24} />}
      </div>
      <h2>{cta.heading}</h2>
      <p>{cta.text}</p>
      <div className="bp-cta-actions">
        <Link href={cta.primaryHref} className="bp-btn bp-btn-gold">
          {cta.primaryLabel}
          <ArrowRight size={16} />
        </Link>
        {cta.secondaryLabel && cta.secondaryHref && (
          <Link href={cta.secondaryHref} className="bp-btn bp-btn-ghost">
            {cta.secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`bp-faq-item ${open ? "bp-faq-open" : ""}`}>
      <button type="button" onClick={() => setOpen(!open)} className="bp-faq-question">
        <span>{question}</span>
        <span className="bp-faq-toggle">
          <ChevronDown size={16} />
        </span>
      </button>
      <div className="bp-faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}

function getRelatedArticles(article: BlogArticle): BlogArticle[] {
  if (article.relatedSlugs?.length) {
    return article.relatedSlugs
      .map((slug) => BLOG_ARTICLES.find((item) => item.slug === slug))
      .filter(Boolean) as BlogArticle[];
  }

  const related = BLOG_ARTICLES.filter(
    (item) => item.slug !== article.slug && item.categorySlug === article.categorySlug,
  ).slice(0, 3);

  if (related.length < 3) {
    const more = BLOG_ARTICLES.filter(
      (item) => item.slug !== article.slug && !related.includes(item),
    ).slice(0, 3 - related.length);
    related.push(...more);
  }

  return related;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [banner, setBanner] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);
  const { revealRef: heroRevealRef, visible: heroVisible } = useReveal();
  const { revealRef: contentRevealRef, visible: contentVisible } = useReveal();

  useEffect(() => {
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const article = BLOG_ARTICLES.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="bp-page">
        <TopBanner visible={banner} onClose={() => setBanner(false)} />
        <Navbar hasBanner={banner} />
        <section className="bp-not-found" style={{ paddingTop: banner ? "200px" : "160px" }}>
          <h1>Article Not Found</h1>
          <p>The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="bp-not-found-link">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const related = getRelatedArticles(article);
  const relatedCourses = (article.relatedCourseSlugs ?? [])
    .map((courseSlug) => COURSE_LINKS[courseSlug])
    .filter((course): course is (typeof COURSE_LINKS)[string] => Boolean(course));
  const headings = getHeadings(article.content);
  const contentSections = article.content.split(/\n(?=## )/);
  const midIndex = Math.ceil(contentSections.length / 2);
  const contentBefore = contentSections.slice(0, midIndex).join("\n");
  const contentAfter = contentSections.slice(midIndex).join("\n");
  const heroPaddingTop = banner ? "154px" : "114px";

  return (
    <main className="bp-page">
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />
      <div className="bp-progress" aria-hidden="true">
        <div style={{ width: `${readingProgress}%` }} />
      </div>

      <style>{`
        .bp-page {
          --bp-blue: ${BLUE};
          --bp-gold: ${GOLD};
          --bp-deep: ${DEEP};
          background: #f8fafc;
          min-height: 100vh;
          color: #111827;
          font-family: var(--font-inter, system-ui, -apple-system, sans-serif);
        }
        .bp-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          z-index: 140;
          background: transparent;
        }
        .bp-progress > div {
          height: 100%;
          background: linear-gradient(90deg, ${GOLD}, #60A5FA);
          transition: width .15s ease;
        }
        .bp-hero {
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(135deg, rgba(10,15,30,.96), rgba(17,24,39,.94) 48%, rgba(29,78,216,.88)),
            linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(0deg, rgba(255,255,255,.05) 1px, transparent 1px);
          background-size: auto, 46px 46px, 46px 46px;
        }
        .bp-hero::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px;
          height: 96px;
          background: linear-gradient(180deg, transparent, #f8fafc);
          pointer-events: none;
        }
        .bp-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .bp-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,.66);
          font-size: .88rem;
          font-weight: 700;
          text-decoration: none;
          margin-bottom: 28px;
          transition: color .2s, transform .2s;
        }
        .bp-back:hover {
          color: #fff;
          transform: translateX(-3px);
        }
        .bp-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 340px;
          gap: 42px;
          align-items: end;
        }
        .bp-category {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          color: #fff;
          font-size: .74rem;
          font-weight: 800;
          letter-spacing: .06em;
          text-transform: uppercase;
          margin-bottom: 18px;
          box-shadow: 0 12px 28px rgba(0,0,0,.18);
        }
        .bp-title {
          max-width: 850px;
          color: #fff;
          font-size: clamp(2rem, 4.4vw, 4rem);
          line-height: 1.05;
          letter-spacing: 0;
          font-weight: 900;
          margin: 0 0 22px;
        }
        .bp-excerpt {
          max-width: 700px;
          color: rgba(255,255,255,.72);
          font-size: 1.06rem;
          line-height: 1.75;
          margin: 0 0 28px;
        }
        .bp-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          color: rgba(255,255,255,.78);
        }
        .bp-meta span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 12px;
          border: 1px solid rgba(255,255,255,.13);
          background: rgba(255,255,255,.07);
          border-radius: 999px;
          font-size: .85rem;
          font-weight: 650;
        }
        .bp-hero-panel {
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.08);
          backdrop-filter: blur(16px);
          border-radius: 8px;
          padding: 24px;
          color: #fff;
          box-shadow: 0 24px 70px rgba(0,0,0,.24);
        }
        .bp-panel-kicker {
          display: flex;
          align-items: center;
          gap: 9px;
          color: rgba(255,255,255,.62);
          font-size: .76rem;
          font-weight: 800;
          letter-spacing: .08em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .bp-panel-list {
          display: grid;
          gap: 14px;
        }
        .bp-panel-item {
          display: flex;
          gap: 12px;
          color: rgba(255,255,255,.78);
          font-size: .9rem;
          line-height: 1.5;
        }
        .bp-panel-item svg {
          color: ${GOLD};
          flex: 0 0 auto;
          margin-top: 2px;
        }
        .bp-cover {
          max-width: 1180px;
          margin: -54px auto 0;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }
        .bp-cover-inner {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 28px;
          align-items: center;
          min-height: 146px;
          border-radius: 8px;
          padding: 26px 30px;
          background:
            linear-gradient(135deg, ${article.color}, ${article.color}cc 48%, #111827),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px);
          background-size: auto, 34px 34px;
          box-shadow: 0 22px 70px rgba(17,24,39,.18);
          color: #fff;
          overflow: hidden;
        }
        .bp-cover-label {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 10px;
          font-weight: 800;
          font-size: .78rem;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: rgba(255,255,255,.72);
        }
        .bp-cover-title {
          margin: 0;
          max-width: 620px;
          font-size: clamp(1.15rem, 2.4vw, 1.7rem);
          line-height: 1.25;
          font-weight: 850;
        }
        .bp-cover-stat {
          display: grid;
          place-items: center;
          width: 104px;
          height: 104px;
          border-radius: 8px;
          background: rgba(255,255,255,.14);
          border: 1px solid rgba(255,255,255,.18);
          text-align: center;
          flex-shrink: 0;
        }
        .bp-cover-stat strong {
          display: block;
          color: ${GOLD};
          font-size: 1.7rem;
          line-height: 1;
        }
        .bp-cover-stat span {
          display: block;
          margin-top: 5px;
          color: rgba(255,255,255,.76);
          font-size: .74rem;
          font-weight: 750;
          text-transform: uppercase;
          letter-spacing: .06em;
        }
        .bp-layout {
          display: grid;
          grid-template-columns: minmax(0, 760px) 320px;
          gap: 36px;
          align-items: start;
          max-width: 1180px;
          margin: 0 auto;
          padding: 64px 24px 0;
        }
        .bp-main {
          min-width: 0;
        }
        .bp-article-card {
          background: #fff;
          border: 1px solid rgba(15,23,42,.08);
          border-radius: 8px;
          padding: 50px;
          box-shadow: 0 18px 55px rgba(15,23,42,.07);
        }
        .bp-article-card + .bp-article-card {
          margin-top: 26px;
        }
        .bp-sidebar {
          position: sticky;
          top: 112px;
          display: grid;
          gap: 18px;
        }
        .bp-side-card {
          background: #fff;
          border: 1px solid rgba(15,23,42,.08);
          border-radius: 8px;
          padding: 22px;
          box-shadow: 0 12px 38px rgba(15,23,42,.06);
        }
        .bp-side-title {
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 0 0 14px;
          color: #111827;
          font-size: .92rem;
          font-weight: 850;
        }
        .bp-toc {
          display: grid;
          gap: 2px;
        }
        .bp-toc a {
          color: #64748b;
          text-decoration: none;
          font-size: .86rem;
          line-height: 1.45;
          padding: 9px 0 9px 14px;
          border-left: 2px solid #e5e7eb;
          transition: color .2s, border-color .2s, transform .2s;
        }
        .bp-toc a:hover {
          color: ${BLUE};
          border-color: ${BLUE};
          transform: translateX(2px);
        }
        .bp-author {
          display: flex;
          gap: 13px;
          align-items: center;
          margin-bottom: 16px;
        }
        .bp-avatar {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          display: grid;
          place-items: center;
          background: #eef2ff;
          color: ${BLUE};
        }
        .bp-author strong {
          display: block;
          color: #111827;
          font-size: .95rem;
        }
        .bp-author span {
          display: block;
          color: #64748b;
          font-size: .8rem;
          margin-top: 1px;
        }
        .bp-share {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 42px;
          border-radius: 8px;
          border: 1px solid #dbe3ee;
          background: #f8fafc;
          color: #334155;
          text-decoration: none;
          font-weight: 800;
          font-size: .86rem;
          transition: border-color .2s, color .2s, background .2s;
        }
        .bp-share:hover {
          color: ${BLUE};
          border-color: rgba(29,78,216,.3);
          background: #fff;
        }
        .bp-prose-h2 {
          scroll-margin-top: 126px;
          color: #111827;
          font-size: clamp(1.45rem, 2.6vw, 2rem);
          line-height: 1.2;
          letter-spacing: 0;
          font-weight: 900;
          margin: 44px 0 16px;
        }
        .bp-prose-h2:first-child {
          margin-top: 0;
        }
        .bp-prose-h3 {
          color: #111827;
          font-size: 1.14rem;
          line-height: 1.35;
          font-weight: 850;
          margin: 30px 0 10px;
        }
        .bp-prose-p {
          color: #374151;
          font-size: 1rem;
          line-height: 1.84;
          margin: 0 0 16px;
        }
        .bp-prose-p strong,
        .bp-list strong,
        .bp-table strong {
          color: #111827;
          font-weight: 850;
        }
        .bp-list {
          display: grid;
          gap: 11px;
          margin: 16px 0 24px;
          padding: 0;
          list-style: none;
        }
        .bp-list li {
          position: relative;
          color: #374151;
          font-size: .98rem;
          line-height: 1.7;
          padding-left: 30px;
        }
        .bp-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: .58em;
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: ${GOLD};
          box-shadow: 0 0 0 5px rgba(212,175,55,.14);
        }
        .bp-list-numbered {
          counter-reset: bp-counter;
        }
        .bp-list-numbered li {
          counter-increment: bp-counter;
        }
        .bp-list-numbered li::before {
          content: counter(bp-counter);
          top: .22em;
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: #eef2ff;
          box-shadow: none;
          color: ${BLUE};
          font-size: .74rem;
          font-weight: 900;
        }
        .bp-table-wrap {
          overflow-x: auto;
          margin: 22px 0 30px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          background: #fff;
        }
        .bp-table {
          width: 100%;
          min-width: 580px;
          border-collapse: collapse;
        }
        .bp-table th,
        .bp-table td {
          text-align: left;
          padding: 14px 16px;
          border-bottom: 1px solid #edf2f7;
          color: #475569;
          font-size: .92rem;
          line-height: 1.55;
        }
        .bp-table th {
          background: #f8fafc;
          color: #111827;
          font-weight: 850;
        }
        .bp-table tr:last-child td {
          border-bottom: 0;
        }
        .bp-cta-wrap {
          margin: 28px 0;
        }
        .bp-cta {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          padding: 42px 36px;
          text-align: center;
          color: #fff;
          box-shadow: 0 20px 60px rgba(15,23,42,.2);
        }
        .bp-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(255,255,255,.09) 1px, transparent 1px),
            linear-gradient(0deg, rgba(255,255,255,.09) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: linear-gradient(135deg, rgba(0,0,0,.8), transparent 72%);
          pointer-events: none;
        }
        .bp-cta-mid {
          background: linear-gradient(135deg, ${BLUE}, #2563EB 55%, #111827);
        }
        .bp-cta-bottom {
          background: linear-gradient(135deg, #111827, #1E3A5F 48%, ${BLUE});
        }
        .bp-cta-icon {
          position: relative;
          z-index: 1;
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          margin: 0 auto 18px;
          border-radius: 8px;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.18);
          color: ${GOLD};
        }
        .bp-cta h2 {
          position: relative;
          z-index: 1;
          margin: 0 auto 12px;
          max-width: 620px;
          color: #fff;
          font-size: clamp(1.35rem, 2.8vw, 2rem);
          line-height: 1.2;
          font-weight: 900;
        }
        .bp-cta p {
          position: relative;
          z-index: 1;
          max-width: 560px;
          margin: 0 auto 28px;
          color: rgba(255,255,255,.72);
          font-size: .98rem;
          line-height: 1.7;
        }
        .bp-cta-actions {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .bp-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 46px;
          padding: 12px 22px;
          border-radius: 8px;
          text-decoration: none;
          font-size: .92rem;
          font-weight: 850;
          transition: transform .25s, box-shadow .25s, background .25s;
        }
        .bp-btn:hover {
          transform: translateY(-2px);
        }
        .bp-btn-gold {
          color: #111827;
          background: linear-gradient(135deg, ${GOLD}, #FBBF24);
          box-shadow: 0 10px 26px rgba(212,175,55,.28);
        }
        .bp-btn-ghost {
          color: #fff;
          border: 1px solid rgba(255,255,255,.24);
          background: rgba(255,255,255,.09);
        }
        .bp-section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 72px 24px 0;
        }
        .bp-section-narrow {
          max-width: 860px;
        }
        .bp-section-head {
          text-align: center;
          margin-bottom: 30px;
        }
        .bp-section-head h2 {
          margin: 0 0 9px;
          color: #111827;
          font-size: clamp(1.45rem, 2.4vw, 2rem);
          line-height: 1.2;
          font-weight: 900;
        }
        .bp-section-head h2 span {
          color: ${BLUE};
        }
        .bp-section-head p {
          max-width: 600px;
          margin: 0 auto;
          color: #64748b;
          font-size: .96rem;
          line-height: 1.68;
        }
        .bp-faq-list {
          display: grid;
          gap: 12px;
        }
        .bp-faq-item {
          background: #fff;
          border: 1px solid rgba(15,23,42,.08);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 8px 26px rgba(15,23,42,.05);
          transition: border-color .25s, box-shadow .25s;
        }
        .bp-faq-open {
          border-color: rgba(29,78,216,.28);
          box-shadow: 0 12px 34px rgba(29,78,216,.09);
        }
        .bp-faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 19px 22px;
          border: 0;
          background: transparent;
          color: #111827;
          cursor: pointer;
          text-align: left;
          font: inherit;
          font-size: .98rem;
          font-weight: 850;
          line-height: 1.42;
        }
        .bp-faq-toggle {
          display: grid;
          place-items: center;
          width: 30px;
          height: 30px;
          border-radius: 8px;
          flex: 0 0 auto;
          color: #64748b;
          background: #f1f5f9;
          transition: transform .25s, color .25s, background .25s;
        }
        .bp-faq-open .bp-faq-toggle {
          transform: rotate(180deg);
          color: #fff;
          background: ${BLUE};
        }
        .bp-faq-answer {
          max-height: 0;
          overflow: hidden;
          padding: 0 22px;
          transition: max-height .3s ease, padding .3s ease;
        }
        .bp-faq-open .bp-faq-answer {
          max-height: 320px;
          padding: 0 22px 20px;
        }
        .bp-faq-answer p {
          margin: 0;
          color: #64748b;
          font-size: .93rem;
          line-height: 1.72;
        }
        .bp-course-grid,
        .bp-related-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }
        .bp-course-card,
        .bp-related-card {
          display: flex;
          flex-direction: column;
          min-height: 100%;
          color: inherit;
          text-decoration: none;
          background: #fff;
          border: 1px solid rgba(15,23,42,.08);
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(15,23,42,.05);
          transition: transform .25s, box-shadow .25s, border-color .25s;
        }
        .bp-course-card:hover,
        .bp-related-card:hover {
          transform: translateY(-4px);
          border-color: rgba(29,78,216,.28);
          box-shadow: 0 16px 42px rgba(15,23,42,.1);
        }
        .bp-course-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          margin-bottom: 16px;
          border-radius: 8px;
          background: #eef2ff;
          color: ${BLUE};
        }
        .bp-course-card small,
        .bp-related-card small {
          color: ${BLUE};
          font-size: .72rem;
          font-weight: 850;
          letter-spacing: .08em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .bp-course-card h3,
        .bp-related-card h3 {
          margin: 0 0 10px;
          color: #111827;
          font-size: 1rem;
          line-height: 1.38;
          font-weight: 850;
        }
        .bp-course-card p,
        .bp-related-card p {
          margin: 0 0 18px;
          color: #64748b;
          font-size: .9rem;
          line-height: 1.65;
          flex: 1;
        }
        .bp-card-action {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: ${BLUE};
          font-size: .86rem;
          font-weight: 850;
        }
        .bp-related-badge {
          display: inline-flex;
          width: fit-content;
          margin-bottom: 14px;
          padding: 5px 10px;
          border-radius: 8px;
          color: #fff;
          font-size: .68rem;
          font-weight: 850;
          letter-spacing: .06em;
          text-transform: uppercase;
        }
        .bp-related-meta {
          display: inline-flex;
          color: #94a3b8;
          font-size: .8rem;
          font-weight: 700;
        }
        .bp-not-found {
          min-height: 70vh;
          display: grid;
          place-items: center;
          align-content: center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 80px;
          text-align: center;
        }
        .bp-not-found h1 {
          margin: 0 0 10px;
          color: #111827;
          font-size: 2rem;
          font-weight: 900;
        }
        .bp-not-found p {
          margin: 0 0 26px;
          color: #64748b;
        }
        .bp-not-found-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: ${BLUE};
          font-weight: 850;
          text-decoration: none;
        }
        .bp-fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .7s cubic-bezier(.4,0,.2,1), transform .7s cubic-bezier(.4,0,.2,1);
        }
        .bp-fade-up.bp-vis {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 1060px) {
          .bp-hero-grid,
          .bp-layout {
            grid-template-columns: 1fr;
          }
          .bp-hero-panel {
            max-width: 640px;
          }
          .bp-sidebar {
            position: static;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .bp-course-grid,
          .bp-related-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 760px) {
          .bp-hero-inner,
          .bp-cover,
          .bp-layout,
          .bp-section {
            padding-left: 18px;
            padding-right: 18px;
          }
          .bp-hero-grid {
            gap: 28px;
          }
          .bp-meta {
            gap: 8px;
          }
          .bp-meta span {
            font-size: .78rem;
          }
          .bp-cover {
            margin-top: -38px;
          }
          .bp-cover-inner {
            grid-template-columns: 1fr;
            padding: 22px;
          }
          .bp-cover-stat {
            width: 100%;
            height: auto;
            min-height: 76px;
          }
          .bp-layout {
            padding-top: 44px;
          }
          .bp-article-card {
            padding: 30px 22px;
          }
          .bp-sidebar,
          .bp-course-grid,
          .bp-related-grid {
            grid-template-columns: 1fr;
          }
          .bp-side-card:first-child {
            display: none;
          }
          .bp-cta {
            padding: 34px 22px;
          }
          .bp-btn {
            width: 100%;
          }
        }
      `}</style>

      <section className="bp-hero" style={{ paddingTop: heroPaddingTop, paddingBottom: "116px" }}>
        <div ref={heroRevealRef} className={`bp-hero-inner bp-fade-up ${heroVisible ? "bp-vis" : ""}`}>
          <Link href="/blog" className="bp-back">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          <div className="bp-hero-grid">
            <div>
              <span className="bp-category" style={{ background: article.color }}>
                <BookOpen size={14} />
                {article.category}
              </span>
              <h1 className="bp-title">{article.title}</h1>
              <p className="bp-excerpt">{article.excerpt}</p>
              <div className="bp-meta">
                <span>
                  <CalendarDays size={15} />
                  {article.date}
                </span>
                <span>
                  <Clock3 size={15} />
                  {article.readTime}
                </span>
                <span>
                  <UserRound size={15} />
                  {article.author ?? "Brit Institute"}
                </span>
              </div>
            </div>

            <aside className="bp-hero-panel" aria-label="Article highlights">
              <div className="bp-panel-kicker">
                <ListChecks size={16} />
                What you will get
              </div>
              <div className="bp-panel-list">
                <div className="bp-panel-item">
                  <CheckCircle2 size={18} />
                  <span>Clear UK-focused career guidance without generic theory.</span>
                </div>
                <div className="bp-panel-item">
                  <CheckCircle2 size={18} />
                  <span>Practical skills, salary context, and next steps.</span>
                </div>
                <div className="bp-panel-item">
                  <CheckCircle2 size={18} />
                  <span>Recommended programmes connected to this topic.</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bp-cover" aria-label="Article summary">
        <div className="bp-cover-inner">
          <div>
            <span className="bp-cover-label">
              <Sparkles size={16} />
              Brit Institute guide
            </span>
            <h2 className="bp-cover-title">{article.excerpt}</h2>
          </div>
          <div className="bp-cover-stat">
            <div>
              <strong>{headings.length || 1}</strong>
              <span>Sections</span>
            </div>
          </div>
        </div>
      </section>

      <div ref={contentRevealRef} className={`bp-layout bp-fade-up ${contentVisible ? "bp-vis" : ""}`}>
        <article className="bp-main">
          <div className="bp-article-card">{renderContent(contentBefore)}</div>

          {article.midCta && (
            <div className="bp-cta-wrap">
              <CTABlock cta={article.midCta} variant="mid" />
            </div>
          )}

          {contentAfter.trim() && (
            <div className="bp-article-card">{renderContent(contentAfter)}</div>
          )}
        </article>

        <aside className="bp-sidebar">
          {headings.length > 0 && (
            <div className="bp-side-card">
              <h2 className="bp-side-title">
                <ListChecks size={17} />
                On This Page
              </h2>
              <nav className="bp-toc" aria-label="Table of contents">
                {headings.map((heading) => (
                  <a href={`#${heading.id}`} key={heading.id}>
                    {heading.title}
                  </a>
                ))}
              </nav>
            </div>
          )}

          <div className="bp-side-card">
            <h2 className="bp-side-title">
              <UserRound size={17} />
              Article Details
            </h2>
            <div className="bp-author">
              <span className="bp-avatar">
                <GraduationCap size={21} />
              </span>
              <div>
                <strong>{article.author ?? "Brit Institute"}</strong>
                <span>Career guidance team</span>
              </div>
            </div>
            <a
              href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(`Read this Brit Institute guide: /blog/${article.slug}`)}`}
              className="bp-share"
            >
              <Share2 size={16} />
              Share Article
            </a>
          </div>
        </aside>
      </div>

      {article.faqs && article.faqs.length > 0 && (
        <section className="bp-section bp-section-narrow">
          <div className="bp-section-head">
            <h2>
              Frequently Asked <span>Questions</span>
            </h2>
          </div>
          <div className="bp-faq-list">
            {article.faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>
      )}

      {relatedCourses.length > 0 && (
        <section className="bp-section">
          <div className="bp-section-head">
            <h2>
              Recommended <span>Programmes</span>
            </h2>
            <p>Continue from this guide into structured training built around UK career outcomes.</p>
          </div>
          <div className="bp-course-grid">
            {relatedCourses.map((course) => (
              <Link key={course.href} href={course.href} className="bp-course-card">
                <span className="bp-course-icon">
                  <GraduationCap size={21} />
                </span>
                <small>Relevant course</small>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <span className="bp-card-action">
                  View programme
                  <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="bp-section bp-section-narrow">
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
      </section>

      {related.length > 0 && (
        <section className="bp-section" style={{ paddingBottom: 96 }}>
          <div className="bp-section-head">
            <h2>
              Related <span>Articles</span>
            </h2>
          </div>
          <div className="bp-related-grid">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="bp-related-card">
                <span className="bp-related-badge" style={{ background: item.color }}>
                  {item.category}
                </span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <span className="bp-related-meta">
                  {item.date} / {item.readTime}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
