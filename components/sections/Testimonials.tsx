"use client";

import Image from "next/image";
import { Icons } from "@/components/ui/Icons";
import useReveal from "@/hooks/useReveal";

export default function Testimonials() {
  const r = useReveal();
  const data = [
    {
      name: "Arjun Mehta", role: "AI Engineer, London", avatar: "/avatar-1.png",
      quote: "Before this program, I had no direction. Within months, I was confidently applying to UK roles and landed an AI role in London paying £55K."
    },
    {
      name: "Priya Sharma", role: "Data Analyst, Birmingham", avatar: "/avatar-2.png",
      quote: "The structured roadmap plus mentorship made all the difference. I transitioned from marketing to data analytics in under 5 months."
    },
    {
      name: "Ravi Patel", role: "ML Engineer, Manchester", avatar: "/avatar-3.png",
      quote: "The portfolio projects and mock interviews gave me an edge. I received 3 offers within weeks of completing the program."
    },
  ];

  return (
    <section id="testimonials" className="section s-testimonials" ref={r.ref}>
      <div className={`section-inner ${r.cls}`}>
        <div className="section-head">
          <h2 className="section-title">Powering the world's top careers</h2>
          <p className="section-sub">Hear from our community of successful professionals who transitioned into high-paying roles.</p>
        </div>
        <div className="test-grid">
          {data.map((t, i) => (
            <div className="t-card" key={i} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div className="t-stars" style={{ marginBottom: '24px' }}>
                <Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star />
              </div>
              <p className="t-quote" style={{ fontSize: '1.05rem', color: 'var(--gray-800)', flex: 1 }}>"{t.quote}"</p>
              <div className="t-author" style={{ marginTop: '24px', borderTop: '1px solid var(--gray-100)', paddingTop: '24px' }}>
                <Image src={t.avatar} alt={t.name} width={48} height={48} className="t-avatar" style={{ border: 'none' }} />
                <div>
                  <div className="t-name" style={{ fontSize: '1rem' }}>{t.name}</div>
                  <div className="t-role" style={{ fontSize: '0.85rem' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
