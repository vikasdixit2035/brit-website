"use client";

import useReveal from "@/hooks/useReveal";

export default function StatsStrip() {
  const r = useReveal();
  return (
    <section className="stats-strip" ref={r.ref}>
      <div className={`stats-inner ${r.cls}`}>
        {[
          { num: "1,000+", text: "Learners Trained" },
          { num: "85%", text: "Interview Success Rate" },
          { num: "£52K", text: "Average Salary Outcome" },
          { num: "50+", text: "Industry Mentors" },
        ].map((s, i) => (
          <div className="stat-box" key={i}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-text" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem', fontWeight: 700 }}>{s.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
