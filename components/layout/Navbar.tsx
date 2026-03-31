"use client";

import { useState, useEffect } from "react";
import { Icons } from "@/components/ui/Icons";

export default function Navbar({ hasBanner }: { hasBanner: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navTop, setNavTop] = useState(hasBanner ? 38 : 0);

  useEffect(() => {
    const fn = () => {
      const sy = window.scrollY;
      setScrolled(sy > 80);

      if (hasBanner) {
        setNavTop(Math.max(0, 38 - sy));
      } else {
        setNavTop(0);
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    fn(); // initialize
    return () => window.removeEventListener("scroll", fn);
  }, [hasBanner]);

  return (
    <nav
      className={`navbar ${scrolled ? "navbar-glass" : "navbar-transparent"}`}
      style={{
        top: navTop,
        width: "100%", // Ensures full viewport width
        position: "fixed",
        zIndex: 50,
        boxSizing: "border-box"
      }}
    >
      <div
        className="navbar-inner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Spreads items across the full width
          width: "100%",
          maxWidth: "100%", // Overrides any existing CSS max-width
          padding: "12px 32px", // Adds padding to the far left and right edges
          boxSizing: "border-box",
          gap: "24px"
        }}
      >
        {/* Left: Logo */}
        <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img
            src="/britinstitute.png"
            alt="Brit Institute Logo"
            style={{ height: '56px', width: 'auto', borderRadius: '4px' }}
          />
        </a>

        {/* Center: Search Bar */}
        <div className="hidden-mobile" style={{ position: 'relative', flex: '1', maxWidth: '450px' }}>
          <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: scrolled ? '#9CA3AF' : 'rgba(255,255,255,0.6)' }}>
            <Icons.Search />
          </div>
          <input
            type="text"
            placeholder="What do you want to learn?"
            style={{
              width: '100%',
              padding: '12px 16px 12px 44px',
              borderRadius: '999px',
              border: scrolled ? '1px solid #E5E7EB' : '1px solid rgba(255,255,255,0.2)',
              background: scrolled ? '#F9FAFB' : 'rgba(255,255,255,0.1)',
              color: scrolled ? '#111827' : '#FFFFFF',
              fontSize: '0.95rem',
              outline: 'none',
              boxSizing: "border-box",
              transition: 'all 0.2s ease'
            }}
          />
        </div>

        {/* Right: Links & Actions Group */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>

          {/* Navigation Links */}
          <ul className={`nav-links ${menuOpen ? "open" : ""}`} style={{ display: 'flex', gap: '24px', margin: 0, padding: 0 }}>
            <li><a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a></li>
            <li><a href="#outcomes" onClick={() => setMenuOpen(false)}>Outcomes</a></li>
            <li><a href="#curriculum" onClick={() => setMenuOpen(false)}>Curriculum</a></li>
            <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
          </ul>

          {/* Buttons */}
          <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '24px', flexShrink: 0 }}>
            <a href="#" className="nav-signin hidden-mobile" style={{ fontWeight: 500, fontSize: '0.95rem' }}>
              Sign In
            </a>
            <a href="#final-cta" className="btn-gold" style={{ padding: "12px 24px", fontSize: ".9rem", borderRadius: "999px", fontWeight: 600, whiteSpace: "nowrap" }}>
              Register for free →
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <button className="mobile-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>

      </div>
    </nav>
  );
}