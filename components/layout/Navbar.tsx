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
    <nav className={`navbar ${scrolled ? "navbar-glass" : "navbar-transparent"}`} style={{ top: navTop }}>
      <div className="navbar-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/britinstitute.png" alt="Brit Institute Logo" style={{ height: '64px', width: '124px', borderRadius: '4px' }} />
          </a>

          <div className="hidden-mobile" style={{ position: 'relative', width: '280px' }}>
            <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: scrolled ? '#9CA3AF' : 'rgba(255,255,255,0.6)' }}>
              <Icons.Search />
            </div>
            <input
              type="text"
              placeholder="What do you want to learn?"
              style={{
                width: '100%',
                padding: '10px 16px 10px 40px',
                borderRadius: '999px',
                border: scrolled ? '1px solid #E5E7EB' : '1px solid rgba(255,255,255,0.2)',
                background: scrolled ? '#F9FAFB' : 'rgba(255,255,255,0.1)',
                color: scrolled ? '#111827' : '#FFFFFF',
                fontSize: '0.9rem',
                outline: 'none',
              }}
            />
          </div>
        </div>

        <button className="mobile-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          <li><a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a></li>
          <li><a href="#outcomes" onClick={() => setMenuOpen(false)}>Outcomes</a></li>
          <li><a href="#curriculum" onClick={() => setMenuOpen(false)}>Curriculum</a></li>
          <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
        </ul>

        <div className="nav-right">
          <a href="#" className="nav-signin hidden-mobile">Sign In</a>
          <a href="#final-cta" className="btn-gold" style={{ padding: "10px 22px", fontSize: ".85rem" }}>
            Register for free
          </a>
        </div>
      </div>
    </nav>
  );
}
