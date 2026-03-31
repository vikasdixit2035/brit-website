"use client";

import useReveal from "@/hooks/useReveal";

export default function StatsStrip() {
  const r = useReveal();
  return (
    <section className="stats-strip" ref={r.ref}>
      <div className={`stats-inner ${r.cls}`}>
        {[
          { num: "50+", text: "Countries with Learners" },
          { num: "1,000+", text: "Learners Trained" },
          { num: "85%", text: "Transition Success Rate" },
          { num: "3+", text: "Top Hiring Domains", sub: "Tech, Finance, Consulting" },
        ].map((s, i) => (
          <div className="stat-box" key={i}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-text" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem', fontWeight: 700 }}>{s.text}</div>
            {s.sub && <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>{s.sub}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
