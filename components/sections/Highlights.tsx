"use client";

import useReveal from "@/hooks/useReveal";
import { Calendar, Video, TrendingUp, Terminal, Award, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Calendar,
    label: "Duration",
    value: "16–24 Weeks",
    detail: "Flexible pacing to fit your schedule",
    gradient: "from-blue-500 to-blue-700",
    glow: "rgba(59,130,246,0.35)",
    accent: "#60A5FA",
  },
  {
    icon: Video,
    label: "Format",
    value: "Live + Practical",
    detail: "Real-time sessions with hands-on labs",
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(139,92,246,0.35)",
    accent: "#A78BFA",
  },
  {
    icon: TrendingUp,
    label: "Level",
    value: "Beginner → Advanced",
    detail: "No prior experience required",
    gradient: "from-emerald-500 to-teal-700",
    glow: "rgba(16,185,129,0.35)",
    accent: "#34D399",
  },
  {
    icon: Terminal,
    label: "Projects",
    value: "Real-World Cases",
    detail: "Portfolio-ready industry projects",
    gradient: "from-orange-500 to-amber-600",
    glow: "rgba(245,158,11,0.35)",
    accent: "#FCD34D",
  },
  {
    icon: Award,
    label: "Career Support",
    value: "CV & Interview Prep",
    detail: "1-on-1 coaching until you land the role",
    gradient: "from-rose-500 to-pink-700",
    glow: "rgba(244,63,94,0.35)",
    accent: "#FB7185",
  },
];

export default function Highlights() {
  const r = useReveal();

  return (
    <section
      id="highlights"
      ref={r.ref}
      style={{
        position: 'relative',
        padding: '100px 0 120px',
        background: 'var(--blue-deep)',
        overflow: 'hidden',
      }}
    >
      {/* ── Background decorations ── */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* subtle radial glows */}
        <div style={{
          position: 'absolute', width: 700, height: 700, borderRadius: '50%',
          top: '-200px', left: '-150px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }} />
        <div style={{
          position: 'absolute', width: 600, height: 600, borderRadius: '50%',
          bottom: '-150px', right: '-100px',
          background: 'radial-gradient(circle, rgba(212,168,83,0.10) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }} />
        {/* faint grid lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className={`section-inner ${r.cls}`} style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(212,168,83,0.12)',
            border: '1px solid rgba(212,168,83,0.25)',
            borderRadius: '999px',
            padding: '6px 18px',
            marginBottom: 20,
          }}>
            <Sparkles size={14} color="var(--gold-400)" />
            <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--gold-400)', textTransform: 'uppercase' }}>
              Programme Highlights
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--white)',
            margin: '0 0 16px',
            lineHeight: 1.15,
          }}>
            Everything You Need to{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--gold-400), var(--gold-300))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Succeed
            </span>
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: 520,
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            One comprehensive package designed to take you from zero to career-ready.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          maxWidth: 1100,
          margin: '0 auto',
        }}>
          {highlights.map((h, i) => (
            <HighlightCard key={i} item={h} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightCard({ item, index }: { item: typeof highlights[0]; index: number }) {
  const Icon = item.icon;

  return (
    <div
      className={`highlight-card d${index + 1}`}
      style={{
        position: 'relative',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: '32px 28px',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'transform 0.35s cubic-bezier(.4,0,.2,1), box-shadow 0.35s cubic-bezier(.4,0,.2,1), border-color 0.35s',
        cursor: 'default',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(-6px)';
        el.style.boxShadow = `0 24px 48px ${item.glow}`;
        el.style.borderColor = `${item.accent}40`;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
        el.style.borderColor = 'rgba(255,255,255,0.08)';
      }}
    >
      {/* Top-right corner glow on card */}
      <div aria-hidden style={{
        position: 'absolute', top: -30, right: -30,
        width: 120, height: 120, borderRadius: '50%',
        background: `radial-gradient(circle, ${item.glow} 0%, transparent 70%)`,
        filter: 'blur(20px)',
        opacity: 0.6,
        transition: 'opacity 0.35s',
        pointerEvents: 'none',
      }} />

      {/* Icon */}
      <div style={{
        width: 52, height: 52,
        borderRadius: '14px',
        background: `linear-gradient(135deg, ${item.accent}22, ${item.accent}11)`,
        border: `1px solid ${item.accent}33`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '20px',
        position: 'relative',
        zIndex: 1,
      }}>
        <Icon size={24} color={item.accent} strokeWidth={1.8} />
      </div>

      {/* Label */}
      <p style={{
        fontSize: '0.75rem',
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: item.accent,
        margin: '0 0 8px',
        position: 'relative', zIndex: 1,
      }}>
        {item.label}
      </p>

      {/* Value */}
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 800,
        color: 'var(--white)',
        margin: '0 0 10px',
        letterSpacing: '-0.02em',
        lineHeight: 1.2,
        position: 'relative', zIndex: 1,
      }}>
        {item.value}
      </h3>

      {/* Detail */}
      <p style={{
        fontSize: '0.88rem',
        color: 'rgba(255,255,255,0.45)',
        margin: 0,
        lineHeight: 1.6,
        position: 'relative', zIndex: 1,
      }}>
        {item.detail}
      </p>

      {/* Bottom accent line */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: 2,
        background: `linear-gradient(90deg, transparent, ${item.accent}60, transparent)`,
        borderRadius: '0 0 20px 20px',
      }} />
    </div>
  );
}
