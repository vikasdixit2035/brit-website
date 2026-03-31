"use client";

import useReveal from "@/hooks/useReveal";

export default function HowItWorks() {
  const r = useReveal();
  const steps = [
    { num: "01", title: "Learn", desc: "Structured sessions" },
    { num: "02", title: "Build", desc: "Real-world projects" },
    { num: "03", title: "Get Hired", desc: "Career support" },
  ];

  return (
    <section id="how-it-works" className="section s-how-it-works" ref={r.ref} style={{ padding: '80px 0', background: 'var(--white)' }}>
      <div className={`section-inner ${r.cls}`}>
        <div className="section-head" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title">How It Works</h2>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center' }}>
          {steps.map((s, i) => (
            <div key={i} style={{ 
              flex: '1',
              minWidth: '250px',
              textAlign: 'center',
              padding: '32px',
              border: '1px solid var(--gray-100)',
              borderRadius: '24px',
              position: 'relative',
              background: 'linear-gradient(180deg, var(--white) 0%, var(--gray-50) 100%)'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: 900, 
                color: 'var(--gray-200)',
                lineHeight: 1,
                marginBottom: '16px'
              }}>
                {s.num}
              </div>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--gray-900)' }}>{s.title}</h4>
              <p style={{ fontSize: '1.1rem', color: 'var(--gray-500)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
