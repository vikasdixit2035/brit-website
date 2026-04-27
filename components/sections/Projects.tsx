"use client";

import useReveal from "@/hooks/useReveal";
import { BarChart, Code, Layers } from 'lucide-react';

export default function Projects() {
  const { revealRef, cls } = useReveal();
  const projects = [
    { icon: <BarChart size={32} />, title: "Data Dashboards", desc: "Interactive dashboards and reporting systems" },
    { icon: <Code size={32} />, title: "Machine Learning", desc: "Predictive models and advanced algorithms" },
    { icon: <Layers size={32} />, title: "Automation Workflows", desc: "AI-powered intelligent automation solutions" },
  ];

  return (
    <section id="projects" className="section s-projects" ref={revealRef} style={{ padding: '80px 0', background: 'var(--blue-950)', color: 'white' }}>
      <div className={`section-inner ${cls}`}>
        <div className="section-head" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title" style={{ color: 'white' }}>Projects and Portfolio</h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>Build a practical portfolio that stands out to employers.</p>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyItems: 'center', justifyContent: 'center' }}>
          {projects.map((p, i) => (
            <div key={i} style={{ 
              flex: '1',
              minWidth: '280px',
              padding: '32px',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '24px',
              background: 'rgba(255,255,255,0.02)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{ 
                background: 'linear-gradient(135deg, var(--blue-500), var(--blue-700))',
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.2)'
              }}>
                {p.icon}
              </div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: 600 }}>{p.title}</h4>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
