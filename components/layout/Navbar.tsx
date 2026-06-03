"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const BRAND_CYAN = "#00E5FF"; // Free badge color
const BRAND_BLUE = "#1D4ED8";
const BRAND_GOLD = "#D4AF37";
const NAV_BG = "#000000";
const NAV_LINK = "#ffffff";
const NAV_LINK_HOVER = "#d1d5db";
const TOP_BANNER_HEIGHT = 40;

// Badge colour map
const BADGE_COLOURS: Record<string, { bg: string; text: string }> = {
  FEATURED: { bg: "#FFD700", text: "#000" },
  "MOST POPULAR": { bg: "#8B5CF6", text: "#fff" },
  "IN DEMAND": { bg: "#10B981", text: "#fff" },
  "AI LEADER": { bg: "#D4AF37", text: "#1a1a1a" },
};

function badgeStyle(label: string) {
  return BADGE_COLOURS[label?.toUpperCase()] ?? { bg: "#1D4ED8", text: "#fff" };
}

interface Course {
  _id: string;
  slug: string;
  topBadge: string;
  title: string;
  desc: string;
  duration: string;
  iconName: string;
}

interface NavLink {
  href: string;
  label: string;
  badge?: string;
}

const HOME_FAQ_HREF = "/#faq";

// Nav links for desktop right side
const NAV_RIGHT_LINKS: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/placement", label: "Placement" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/pay", label: "Pay Fees" },
  { href: HOME_FAQ_HREF, label: "FAQ" },
  { href: "/careers", label: "Careers" },
];

// Mobile menu links mirror the desktop navigation links.
const MOBILE_MENU_LINKS: NavLink[] = [...NAV_RIGHT_LINKS];

export default function Navbar({ hasBanner }: { hasBanner: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navTop, setNavTop] = useState(hasBanner ? TOP_BANNER_HEIGHT : 0);
  const [courses, setCourses] = useState<Course[]>([]);

  // ── SEPARATE STATE: desktop dropdown vs mobile drawer accordion ──
  const [dropOpen, setDropOpen] = useState(false);           // desktop only
  const [drawerCoursesOpen, setDrawerCoursesOpen] = useState(false); // mobile only

  const dropRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll handler
  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 50);
      setNavTop(hasBanner ? TOP_BANNER_HEIGHT : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, [hasBanner]);

  // Fetch courses
  useEffect(() => {
    const API_URL = process.env.NODE_ENV === "development"
      ? "http://localhost:4000/api/courses"
      : "https://api.britinstitute.uk/api/courses";

    fetch(API_URL)
      .then((r) => r.ok ? r.json() : Promise.reject())
      .then((json) => setCourses((json.data ?? []).slice(0, 6)))
      .catch(() => { });
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 900) {
        setMenuOpen(false);
        setDrawerCoursesOpen(false);
      }
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const openDrop = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropOpen(true);
  };
  const closeDrop = () => {
    closeTimer.current = setTimeout(() => setDropOpen(false), 180);
  };
  const closeMenu = () => {
    setMenuOpen(false);
    setDrawerCoursesOpen(false);
  };

  return (
    <>
      <style>{`
        /* ── Global nav reset ───── */
        .alma-nav * { box-sizing: border-box; font-family: system-ui, -apple-system, sans-serif; }

        /* ── Dropdown ───────────── */
        .courses-dropdown {
          position: absolute;
          top: calc(100% + 15px);
          left: 0;
          width: 680px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
          border: 1px solid rgba(0,0,0,0.08);
          padding: 0;
          overflow: hidden;
          z-index: 200;
          animation: dropFadeIn 0.2s cubic-bezier(.16,1,.3,1);
        }
        @keyframes dropFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .drop-header {
          background: #f8fafc;
          padding: 16px 22px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e2e8f0;
        }
        .drop-header-title {
          color: #333;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .drop-header-link {
          color: ${BRAND_BLUE};
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: opacity .2s;
        }
        .drop-header-link:hover { opacity: .75; }

        .drop-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        .drop-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 20px;
          border-right: 1px solid rgba(0,0,0,0.05);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          text-decoration: none;
          background: #fff;
          transition: background 0.15s;
          cursor: pointer;
        }
        .drop-item:hover { background: #f1f5f9; }
        .drop-item:nth-child(even) { border-right: none; }

        .drop-icon-wrap {
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
        }
        .drop-icon-wrap svg { stroke: #fff; }

        .drop-item-body { flex: 1; min-width: 0; }
        .drop-item-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.3;
          margin-bottom: 4px;
        }
        .drop-item-detail {
          font-size: 0.8rem;
          color: #64748b;
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .drop-badge {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 2px 7px;
          border-radius: 4px;
          margin-bottom: 6px;
        }
        .drop-footer {
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          padding: 14px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .drop-footer-text {
          font-size: 0.85rem;
          color: #475569;
          font-weight: 500;
        }
        .drop-footer-cta {
          background: ${BRAND_GOLD};
          color: #000;
          font-size: 0.85rem;
          font-weight: 700;
          border: none;
          border-radius: 6px;
          padding: 8px 18px;
          cursor: pointer;
          transition: background .2s, transform .15s;
          text-decoration: none;
        }
        .drop-footer-cta:hover { background: #b08d2c; transform: translateY(-1px); }

        /* ── Courses trigger ─── */
        .nav-courses-trigger {
          display: flex;
          align-items: center;
          gap: 6px;
          color: ${NAV_LINK};
          font-weight: 500;
          font-size: 0.95rem;
          background: transparent;
          border: none;
          border-radius: 0;
          cursor: pointer;
          padding: 0;
          font-family: inherit;
          transition: color .2s;
          white-space: nowrap;
        }
        .nav-courses-trigger:hover,
        .nav-courses-trigger[data-open="true"] {
          color: ${NAV_LINK_HOVER};
          background: transparent;
        }

        .chevron-icon { transition: transform .2s; flex-shrink: 0; stroke: currentColor; }
        .chevron-icon[data-open="true"] { transform: rotate(180deg); }

        /* ── Right nav links ─── */
        .nav-right-link {
          color: ${NAV_LINK};
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          transition: color .2s;
          white-space: nowrap;
          position: relative;
        }
        .nav-right-link:hover { color: ${NAV_LINK_HOVER}; }

        /* Free badge on Masterclass */
        .nav-free-badge {
          position: absolute;
          top: -12px;
          right: -10px;
          background: ${BRAND_CYAN};
          color: #000;
          font-size: 0.6rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 2px 6px;
          border-radius: 4px;
          line-height: 1.2;
        }

        /* ── Sign In button ─── */
        .nav-signin-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${BRAND_GOLD};
          color: #000;
          border: none;
          border-radius: 6px;
          padding: 10px 24px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          transition: background .2s;
          white-space: nowrap;
          font-family: inherit;
        }
        .nav-signin-btn:hover {
          background: #b08d2c;
        }

        /* ── Hamburger ────────── */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          flex-shrink: 0;
        }
        .nav-hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #ffffff;
          border-radius: 2px;
          transition: all 0.3s;
        }
        .nav-hamburger[data-open="true"] span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .nav-hamburger[data-open="true"] span:nth-child(2) {
          opacity: 0;
        }
        .nav-hamburger[data-open="true"] span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* ── Mobile user icon btn ─ */
        .nav-user-icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color .2s, background .2s;
          flex-shrink: 0;
        }
        .nav-user-icon-btn:hover {
          border-color: rgba(255,255,255,0.6);
          background: rgba(255,255,255,0.15);
        }

        /* ── Mobile drawer ─────── */
        .mobile-drawer {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 9999;
          display: flex;
        }
        .drawer-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(3px);
          animation: backdropIn 0.25s ease;
        }
        @keyframes backdropIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .drawer-panel {
          position: relative;
          width: 300px;
          max-width: 88vw;
          background: #111111;
          border-right: 1px solid rgba(255,255,255,0.08);
          height: 100%;
          overflow-y: auto;
          animation: slideIn 0.28s cubic-bezier(.16,1,.3,1);
          display: flex;
          flex-direction: column;
        }
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .drawer-close-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #9CA3AF;
          padding: 4px;
          border-radius: 6px;
          transition: color .2s, background .2s;
        }
        .drawer-close-btn:hover { color: #fff; background: rgba(255,255,255,0.07); }

        .drawer-courses-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: calc(100% - 40px);
          margin: 16px 20px 8px;
          color: ${NAV_LINK};
          font-weight: 500;
          font-size: 0.9rem;
          background: transparent;
          border: none;
          border-radius: 0;
          cursor: pointer;
          padding: 14px 20px;
          font-family: inherit;
          transition: color .2s;
        }
        .drawer-courses-btn:hover { color: #fff; background: rgba(255,255,255,0.04); }

        .drawer-nav-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 20px;
          color: ${NAV_LINK};
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: color .2s, background .2s;
        }
        .drawer-nav-link:hover { color: #fff; background: rgba(255,255,255,0.04); }

        /* ── Drawer course sub-items ── */
        .drawer-course-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px 12px 32px;
          color: ${NAV_LINK};
          font-size: 0.88rem;
          font-weight: 500;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: color .2s, background .2s;
          /* Make sure the full row is tappable */
          -webkit-tap-highlight-color: rgba(255,255,255,0.1);
        }
        .drawer-course-link:hover,
        .drawer-course-link:active { color: #fff; background: rgba(255,255,255,0.06); }

        .drawer-signin-btn {
          margin: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${BRAND_GOLD};
          color: #000;
          border: none;
          border-radius: 8px;
          padding: 13px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          transition: background .2s;
          font-family: inherit;
        }
        .drawer-signin-btn:hover { background: #b08d2c; }

        /* ── Responsive breakpoints ─ */
        @media (max-width: 1024px) {
          .nav-desktop-right { display: none !important; }
          .nav-desktop-courses { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-mobile-right { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .nav-hamburger { display: none !important; }
          .nav-mobile-right { display: none !important; }
        }
        @media (max-width: 768px) {
          .alma-nav .nav-inner-container { padding: 0 16px !important; }
          .alma-nav .logo-img { width: 32px !important; height: 32px !important; }
          .alma-nav .logo-text span { font-size: 1.2rem !important; }
        }
        @media (max-width: 480px) {
          .nav-mobile-right { display: none !important; }
          .alma-nav .logo-text span { font-size: 1.1rem !important; }
        }
      `}</style>

      {/* ── Top Nav ──────────────────────────────────────────────────────── */}
      <nav
        className="alma-nav"
        style={{
          top: navTop,
          width: "100%",
          position: "fixed",
          zIndex: 50,
          boxSizing: "border-box",
          background: NAV_BG,
          padding: "16px 0",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.5)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div
          className="nav-inner-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 40px",
            boxSizing: "border-box",
            height: "100%",
            position: "relative",
          }}
        >
          {/* ── LEFT: Hamburger (mobile) + Logo + Courses ──────────────── */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
            {/* Hamburger — mobile only */}
            <button
              className="nav-hamburger"
              data-open={menuOpen ? "true" : "false"}
              onClick={() => {
                setMenuOpen((p) => {
                  const next = !p;
                  if (!next) setDrawerCoursesOpen(false);
                  return next;
                });
              }}
              aria-label="Open menu"
            >
              <span />
              <span />
              <span />
            </button>

            {/* Logo */}
            <Link href="/" className="logo-text" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0, gap: "12px" }}>
              <Image src="/britinstitute_v1.png" alt="Brit Institute logo" className="logo-img" width={45} height={45} style={{ width: "45px", height: "45px" }} />
              <span style={{ fontSize: "1.5rem", fontWeight: 800, color: BRAND_BLUE, letterSpacing: "-0.02em" }}>
                Brit <span style={{ color: BRAND_GOLD }}>Institute</span>
              </span>
            </Link>

          </div>

          {/* ── CENTER / RIGHT: Nav links + Sign In — desktop ──────────── */}
          <div
            className="nav-desktop-right"
            style={{ display: "flex", alignItems: "center", gap: "36px" }}
          >
            {/* Courses trigger — desktop only */}
            <div
              ref={dropRef}
              className="nav-desktop-courses"
              style={{ position: "relative" }}
            >
              <button
                className="nav-courses-trigger"
                data-open={dropOpen ? "true" : "false"}
                onMouseEnter={openDrop}
                onMouseLeave={closeDrop}
                onClick={() => setDropOpen((p) => !p)}
                aria-haspopup="true"
                aria-expanded={dropOpen}
              >
                Courses
                <svg
                  className="chevron-icon"
                  data-open={dropOpen ? "true" : "false"}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Dropdown */}
              {dropOpen && (
                <div
                  className="courses-dropdown"
                  onMouseEnter={openDrop}
                  onMouseLeave={closeDrop}
                >
                  <div className="drop-header">
                    <span className="drop-header-title">Popular Programs</span>
                    <Link href="/courses" className="drop-header-link" onClick={() => setDropOpen(false)}>
                      View All
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Link>
                  </div>

                  <div className="drop-grid">
                    {courses.length === 0
                      ? Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="drop-item" style={{ opacity: 0.5 }}>
                          <div className="drop-icon-wrap" style={{ background: "#E5E7EB" }} />
                          <div style={{ flex: 1 }}>
                            <div style={{ height: 12, background: "#E5E7EB", borderRadius: 6, marginBottom: 6, width: "80%" }} />
                            <div style={{ height: 10, background: "#F3F4F6", borderRadius: 6, width: "60%" }} />
                          </div>
                        </div>
                      ))
                      : courses.map((course) => {
                        const badge = badgeStyle(course.topBadge);
                        return (
                          <Link
                            key={course._id}
                            href={`/courses/${course.slug}`}
                            className="drop-item"
                            onClick={() => setTimeout(() => setDropOpen(false), 150)}
                          >
                            <div className="drop-icon-wrap">
                              <CourseIcon name={course.iconName} />
                            </div>
                            <div className="drop-item-body">
                              {course.topBadge && (
                                <span className="drop-badge" style={{ background: badge.bg, color: badge.text }}>
                                  {course.topBadge}
                                </span>
                              )}
                              <div className="drop-item-name">{course.title}</div>
                              <div className="drop-item-detail">
                                <ClockIcon /> {course.duration}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>

            {NAV_RIGHT_LINKS.map(({ href, label, badge }) => (
              href.startsWith("/") ? (
                <Link key={href} href={href} className="nav-right-link">
                  {label}
                  {badge && <span className="nav-free-badge">{badge}</span>}
                </Link>
              ) : (
                <a key={href} href={href} className="nav-right-link">
                  {label}
                  {badge && <span className="nav-free-badge">{badge}</span>}
                </a>
              )
            ))}

            <Link href="/contact" className="nav-signin-btn">
              Book Free Consultation
            </Link>
          </div>

          {/* ── MOBILE RIGHT: Sign In pill ─────────────────── */}
          <div
            className="nav-mobile-right"
            style={{ display: "none", alignItems: "center", gap: "12px", flexShrink: 0 }}
          >
            <Link
              href="/contact"
              className="nav-signin-btn"
              style={{
                gap: "5px",
                fontSize: "0.9rem",
                padding: "8px 16px",
                whiteSpace: "nowrap",
              }}
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Mobile Drawer ──────────────────────────────────────────────────── */}
      {menuOpen && (
        <div className="mobile-drawer">
          <div className="drawer-backdrop" onClick={closeMenu} />
          <div className="drawer-panel">
            {/* Header */}
            <div className="drawer-header">
              <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", gap: "10px" }} onClick={closeMenu}>
                <Image src="/britinstitute_v1.png" alt="Brit Institute logo" width={36} height={36} style={{ width: "36px", height: "36px" }} />
                <span style={{ fontSize: "1.2rem", fontWeight: 800, color: BRAND_BLUE }}>
                  Brit <span style={{ color: BRAND_GOLD }}>Institute</span>
                </span>
              </Link>
              <button className="drawer-close-btn" onClick={closeMenu} aria-label="Close menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Courses accordion trigger — uses drawerCoursesOpen, NOT dropOpen */}
            <button
              className="drawer-courses-btn"
              onClick={() => setDrawerCoursesOpen((p) => !p)}
            >
              <span>Courses</span>
              <svg
                className="chevron-icon"
                data-open={drawerCoursesOpen ? "true" : "false"}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Course list — only driven by drawerCoursesOpen */}
            {drawerCoursesOpen && courses.length > 0 && (
              <div style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                {courses.map((course) => (
                  <Link
                    key={course._id}
                    href={`/courses/${course.slug}`}
                    className="drawer-course-link"
                    onClick={closeMenu}
                  >
                    <span style={{ color: "#9CA3AF", flexShrink: 0 }}>
                      <CourseIcon name={course.iconName} />
                    </span>
                    <span>{course.title}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Nav links */}
            <div style={{ flex: 1, marginTop: "10px" }}>
              {MOBILE_MENU_LINKS.map(({ href, label, badge }) => (
                href.startsWith("/") ? (
                  <Link
                    key={href}
                    href={href}
                    className="drawer-nav-link"
                    onClick={closeMenu}
                  >
                    {label}
                    {badge && (
                      <span style={{
                        background: BRAND_CYAN,
                        color: "#000",
                        fontSize: "0.6rem",
                        fontWeight: 800,
                        padding: "2px 8px",
                        borderRadius: "4px",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginLeft: "auto"
                      }}>
                        {badge}
                      </span>
                    )}
                  </Link>
                ) : (
                  <a
                    key={href}
                    href={href}
                    className="drawer-nav-link"
                    onClick={closeMenu}
                  >
                    {label}
                    {badge && (
                      <span style={{
                        background: BRAND_CYAN,
                        color: "#000",
                        fontSize: "0.6rem",
                        fontWeight: 800,
                        padding: "2px 8px",
                        borderRadius: "4px",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginLeft: "auto"
                      }}>
                        {badge}
                      </span>
                    )}
                  </a>
                )
              ))}
            </div>

            <Link href="/contact" className="drawer-signin-btn" onClick={closeMenu}>
              Book Free Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

// ── Helper icons ──────────────────────────────────────────────────────────────
function ClockIcon() {
  return (
    <svg
      style={{ display: "inline", verticalAlign: "middle", marginRight: 6 }}
      width="12" height="12" viewBox="0 0 24 24"
      fill="none" stroke="#64748b" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const ICON_PATHS: Record<string, React.ReactElement> = {
  BarChart: <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>,
  Code: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
  Layers: <><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>,
  Brain: <><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14" /></>,
  Database: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></>,
  Cpu: <><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /></>,
  LineChart: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></>,
  BotMessageSquare: <><path d="M12 6V2H8" /><path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" /><path d="M2 12h2" /><path d="M9 11v2" /><path d="M15 11v2" /></>,
  Sparkles: <><path d="M12 3l1.9 4.1L18 9l-4.1 1.9L12 15l-1.9-4.1L6 9l4.1-1.9L12 3Z" /><path d="M5 17l.9 2.1L8 20l-2.1.9L5 23l-.9-2.1L2 20l2.1-.9L5 17Z" /><path d="M19 15l1.1 2.4L22.5 18l-2.4 1.1L19 21.5l-1.1-2.4L15.5 18l2.4-1.1L19 15Z" /></>,
};

function CourseIcon({ name }: { name: string }) {
  const paths = ICON_PATHS[name] ?? ICON_PATHS.BarChart;
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {paths}
    </svg>
  );
}
