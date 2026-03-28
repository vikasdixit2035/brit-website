"use client";

import useReveal from "@/hooks/useReveal";

export default function Placement() {
  const r = useReveal();
  const items = [
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>, t: "Resume & LinkedIn", d: "Professional optimization for the UK market" },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>, t: "Mock Interviews", d: "Practice with real industry experts" },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>, t: "Job Strategy", d: "UK-specific application and visa guidance" },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, t: "Career Mentorship", d: "Continuous support beyond the program" },
  ];
  return (
    <section id="placement" className="section s-placement" ref={r.ref}>
      <div className={`section-inner ${r.cls}`}>
        <div className="section-head">
          <h2 className="section-title">We Help You Get Hired</h2>
          <p className="section-sub">Comprehensive career support designed to maximize your placement chances.</p>
        </div>
        <div className="place-grid">
          {items.map((it, i) => (
            <div className="pl-item" key={i} style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
              <div className="pl-icon" style={{ background: 'rgba(37, 99, 235, 0.1)', color: 'var(--blue-600)' }}>
                {it.icon}
              </div>
              <h4 style={{ fontSize: '1.1rem' }}>{it.t}</h4>
              <p style={{ fontSize: '0.9rem' }}>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
