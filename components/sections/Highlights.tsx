"use client";

import useReveal from "@/hooks/useReveal";
import { Calendar, Video, TrendingUp, Terminal, Award } from 'lucide-react';

export default function Highlights() {
  const r = useReveal();
  const highlights = [
    { icon: <Calendar />, title: "Duration", desc: "16–24 weeks" },
    { icon: <Video />, title: "Format", desc: "Live + Practical" },
    { icon: <TrendingUp />, title: "Level", desc: "Beginner to Advanced" },
    { icon: <Terminal />, title: "Projects", desc: "Real-world use cases" },
    { icon: <Award />, title: "Career Support", desc: "CV, interview preparation" },
  ];

  return (
    <section id="highlights" className="section s-highlights" ref={r.ref} style={{ background: 'var(--gray-50)', padding: '80px 0' }}>
      <div className={`section-inner ${r.cls}`}>
        <div className="section-head" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title">Programme Highlights</h2>
          <p className="section-sub">Everything you need to succeed in one comprehensive package.</p>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
          {highlights.map((h, i) => (
            <div key={i} style={{ 
              background: 'white', 
              padding: '24px', 
              borderRadius: '16px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              width: 'calc(33.333% - 16px)',
              minWidth: '280px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{ 
                background: 'var(--blue-50)', 
                color: 'var(--blue-600)', 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {h.icon}
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--gray-500)', fontWeight: 500 }}>{h.title}</h4>
                <p style={{ margin: '4px 0 0', fontSize: '1.1rem', fontWeight: 600, color: 'var(--gray-900)' }}>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
