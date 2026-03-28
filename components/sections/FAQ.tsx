"use client";

import { useState } from "react";
import useReveal from "@/hooks/useReveal";

export default function FAQ() {
  const r = useReveal();
  const [open, setOpen] = useState(-1);
  const faqs = [
    { q: "Do I need prior experience?", a: "No — our programs are structured for beginners transitioning into tech. We start from the fundamentals and build up to advanced, industry-ready skills." },
    { q: "Will you guarantee a job?", a: "We provide strong placement support, mentorship, and preparation aligned with real hiring standards. While we can't guarantee a job, our 85% interview success rate speaks for itself." },
    { q: "Is this UK-focused?", a: "Yes — our curriculum, mentorship, and career guidance are specifically tailored for UK opportunities, including job market insights and visa-friendly strategies." },
    { q: "How long are the programs?", a: "The Agentic AI program is 4–6 months and the Data Analytics program is 3–5 months. Both are designed for part-time learners balancing work or studies." },
  ];
  return (
    <section id="faq" className="section s-faq" ref={r.ref}>
      <div className={`section-inner ${r.cls}`}>
        <div className="section-head">
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className={`faq-item${open === i ? " open" : ""}`} key={i}>
              <button className="faq-btn" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} style={{ padding: '24px' }}>
                <h4 style={{ fontSize: '1.1rem' }}>{f.q}</h4>
                <span className="faq-chev" style={{ fontSize: '1.5rem', fontWeight: 300 }}>{open === i ? '−' : '+'}</span>
              </button>
              <div className="faq-body"><p style={{ fontSize: '1rem', paddingBottom: '24px' }}>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
