"use client";

import { Icons } from "@/components/ui/Icons";
import useReveal from "@/hooks/useReveal";

export default function Outcomes() {
  const r = useReveal();
  return (
    <section id="outcomes" className="section s-outcomes" ref={r.ref} style={{ borderTop: '1px solid var(--gray-100)' }}>
      <div className={`section-inner ${r.cls}`}>
        <div className="outcomes-split outcomes-responsive" style={{ gap: '80px' }}>

          <div className="salary-card" style={{ boxShadow: '0 24px 60px rgba(15, 29, 50, 0.15)', transform: 'perspective(1000px) rotateY(2deg)' }}>
            <div className="sc-head">
              <div>
                <div className="sc-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icons.Star /> Average Graduate Salary
                </div>
                <div className="sc-val">£52,000</div>
              </div>
              <span className="sc-badge" style={{ background: 'var(--gold-400)', color: 'var(--blue-950)' }}>↑ 85% placed</span>
            </div>
            <div className="sc-bars">
              <div className="sc-bar l1"><span className="bar-lbl">Entry</span></div>
              <div className="sc-bar l2"><span className="bar-lbl">Mid</span></div>
              <div className="sc-bar l3"><span className="bar-lbl">Avg</span></div>
              <div className="sc-bar l4"><span className="bar-lbl">Senior</span></div>
              <div className="sc-bar l5"><span className="bar-lbl">Top</span></div>
            </div>
          </div>

          <div className="o-roles-wrapper">
            <h2 className="section-title" style={{ marginBottom: '24px' }}>Build the career you've always wanted.</h2>
            <p className="section-sub" style={{ marginBottom: '40px', maxWidth: '100%', margin: '0 0 40px 0' }}>We bring the learning platform, but we also bring the hiring network. See the roles our students land.</p>

            <div className="o-roles">
              {[
                { icon: "🧠", title: "AI Automation Specialist", salary: "£45k – £70k" },
                { icon: "📊", title: "Business Analyst", salary: "£35k – £55k" },
                { icon: "⚙️", title: "Machine Learning Engineer", salary: "£50k – £75k" },
                { icon: "🔍", title: "BI Developer", salary: "£40k – £60k" },
              ].map((r, i) => (
                <div className="o-role" key={i} style={{ padding: '16px', background: 'var(--white)', border: '1px solid var(--gray-100)', borderRadius: '12px' }}>
                  <div className="o-role-icon">{r.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div className="o-role-title" style={{ fontSize: '1rem' }}>{r.title}</div>
                    <div className="o-role-salary" style={{ fontSize: '0.85rem' }}>{r.salary}</div>
                  </div>
                  <Icons.ArrowRight />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
