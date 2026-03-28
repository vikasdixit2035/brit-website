"use client";

import { useState } from "react";
import useReveal from "@/hooks/useReveal";

export default function CurriculumSection() {
  const r = useReveal();
  const [open, setOpen] = useState(0);
  const modules = [
    { t: "Foundations of AI & Data", items: ["Introduction to AI, ML, and Data Science", "Python programming fundamentals", "Statistics & probability for data", "Data structures for analytics"] },
    { t: "AI Tools & Automation", items: ["GPT integration and prompt engineering", "Building AI agents with LangChain", "Automation workflows and pipelines", "API development and deployment"] },
    { t: "Data Analysis & Visualization", items: ["SQL mastery — queries, joins, optimization", "Python data analysis with Pandas", "Dashboard creation with Tableau / Power BI", "Statistical modelling and hypothesis testing"] },
    { t: "Real-World Projects", items: ["End-to-end AI project deployment", "Business case studies from the UK market", "Portfolio-ready project development", "Code reviews and feedback sessions"] },
    { t: "Career Preparation", items: ["Resume & LinkedIn optimization", "Mock interviews with industry experts", "UK job application strategies", "Salary negotiation techniques"] },
  ];

  return (
    <section id="curriculum" className="section s-curriculum" ref={r.ref}>
      <div className={`section-inner ${r.cls}`}>
        <div className="section-head">
          <h2 className="section-title">Built for Real-World Skills</h2>
          <p className="section-sub">A structured learning path from fundamentals to career-ready skills.</p>
        </div>
        <div className="accord-list" style={{ maxWidth: '840px' }}>
          {modules.map((m, i) => (
            <div className={`acc-item${open === i ? " open" : ""}`} key={i} style={{ borderRadius: '12px', marginBottom: '8px' }}>
              <button className="acc-btn" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} style={{ padding: '24px' }}>
                <div className="acc-btn-left">
                  <span className="acc-num" style={{ background: open === i ? 'var(--blue-600)' : 'var(--blue-50)', color: open === i ? 'white' : 'var(--blue-600)' }}>
                    {i + 1}
                  </span>
                  <h4 style={{ fontSize: '1.1rem' }}>{m.t}</h4>
                </div>
                <span className="acc-chev" style={{ fontSize: '1.2rem' }}>▼</span>
              </button>
              <div className="acc-body">
                <div className="acc-body-inner" style={{ paddingLeft: '78px' }}>
                  <ul>{m.items.map((it, j) => <li key={j} style={{ fontSize: '0.95rem', padding: '6px 0' }}>{it}</li>)}</ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
