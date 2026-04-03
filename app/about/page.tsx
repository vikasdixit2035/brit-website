"use client";

import { useState } from "react";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  const [banner, setBanner] = useState(true);

  return (
    <main style={{ backgroundColor: "#FAFAFA", minHeight: "100vh", fontFamily: "var(--font-inter), sans-serif" }}>
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />

      {/* Hero Section */}
      <section style={{ paddingTop: banner ? "140px" : "100px", paddingBottom: "60px", textAlign: "center", maxWidth: "800px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: 800, color: "#111827", lineHeight: 1.2, marginBottom: "24px", letterSpacing: "-0.02em" }}>
          At <span style={{ color: "#1D4ED8" }}>Brit Institute</span>, career evolution isn't a goal. It's our <span style={{ color: "#1D4ED8" }}>obsession</span>.
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#4B5563", lineHeight: 1.6, maxWidth: "700px", margin: "0 auto" }}>
          Brit Institute is not your typical educational platform. With professionals having experience worth more than a decade, we have focused on one simple thing: creating delightful learning experiences that help our students explore digital concepts.
        </p>
      </section>

      {/* Overview & Vision Cards */}
      <section style={{ maxWidth: "1000px", margin: "0 auto 80px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", padding: "0 24px" }}>
        <div style={{ background: "#FFFFFF", padding: "40px", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid rgba(29,78,216,0.1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", color: "#1D4ED8" }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#111827", margin: 0 }}>Program <span style={{ color: "#1D4ED8" }}>Overview</span></h3>
          </div>
          <p style={{ color: "#4B5563", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
            Brit Institute courses empower students in new ways. We want to improve our course quality every day. We hope our personalized learning paths could provide a stable and retaining path to our modern students.
          </p>
        </div>

        <div style={{ background: "#FFFFFF", padding: "40px", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid rgba(29,78,216,0.1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", color: "#D4AF37" }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            </div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#111827", margin: 0 }}>Our <span style={{ color: "#1D4ED8" }}>Vision</span></h3>
          </div>
          <p style={{ color: "#4B5563", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
            We envision an education ecosystem that allows continuous improvement through community, leads to sustainable opportunities, and makes industry-level education globally accessible for everyone.
          </p>
        </div>
      </section>

      {/* Building the future */}
      <section style={{ maxWidth: "800px", margin: "0 auto 80px", textAlign: "center", padding: "0 24px" }}>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#111827", marginBottom: "20px" }}>
          🚀 We build the future of <span style={{ color: "#1D4ED8" }}>tech careers</span>.
        </h2>
        <p style={{ color: "#4B5563", fontSize: "1.05rem", lineHeight: 1.6 }}>
          Brit Institute is the most human tech educational company under the sun. Our approach to education is Tech & AI is comprehensive because it's rooted in years of industry insights. We don't just teach — we empower. Our students are building innovative solutions and transforming industries. With Brit Institute, we're building the future of tech careers by supporting the next generation of tech learners.
        </p>
      </section>

      {/* Core Values */}
      <section style={{ background: "#F8FAFF", padding: "80px 24px", marginBottom: "80px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#111827", marginBottom: "16px" }}>
              Our <span style={{ color: "#1D4ED8" }}>core values</span> drive everything we do
            </h2>
            <p style={{ color: "#4B5563", fontSize: "1rem" }}>
              These principles explain our approach to education, community, and career transformation. They aren't just words on a page.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {[
              { title: "Embrace change fearlessly", icon: "📈", color: "#3B82F6", text: "Technology is constantly evolving. We equip our students to adapt, innovate, and stay ahead." },
              { title: "Cultivate tech confidence", icon: "✨", color: "#D4AF37", text: "We break down complex barriers and build your technical confidence from day one." },
              { title: "Bring out the best in you", icon: "🌟", color: "#8B5CF6", text: "Every student has unique strengths. Our personalized approach helps you discover your potential." },
              { title: "Champion lifelong learning", icon: "📖", color: "#10B981", text: "Tech education never stops. We instill a growth mindset that keeps you learning and growing." },
              { title: "Bridge industry divide", icon: "🤝", color: "#6366F1", text: "We bridge the gap between classroom theory and real-world industry demands." },
              { title: "Explore theory through practice", icon: "🎯", color: "#F43F5E", text: "We believe in hands-on learning over textbooks. Real projects for real experience." }
            ].map((v, i) => (
              <div key={i} style={{ background: "#FFFFFF", padding: "30px", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: `${v.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", marginBottom: "16px" }}>
                  {v.icon}
                </div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111827", marginBottom: "10px" }}>{v.title}</h4>
                <p style={{ color: "#4B5563", fontSize: "0.9rem", lineHeight: 1.5, margin: 0 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empathy & Innovation */}
      <section style={{ maxWidth: "1000px", margin: "0 auto 80px", padding: "0 24px" }}>
        <div style={{ background: "#EFF6FF", borderRadius: "24px", padding: "60px 40px", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#111827", marginBottom: "16px" }}>
            Our <span style={{ color: "#10B981" }}>empathy</span> drives us, our <span style={{ color: "#1D4ED8" }}>innovation</span> sets us apart
          </h2>
          <p style={{ color: "#4B5563", fontSize: "1rem", maxWidth: "700px", margin: "0 auto 40px" }}>
            We understand that career transitions aren't just about learning new tools – it's about overcoming fears, building confidence, and finding your place in a rapidly growing tech landscape.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            {[
              { title: "Empathetic approach", icon: "🫂", color: "#3B82F6" },
              { title: "Innovation-driven", icon: "💡", color: "#10B981" },
              { title: "Learning-focused", icon: "🎓", color: "#8B5CF6" }
            ].map((v, i) => (
              <div key={i} style={{ background: "#FFFFFF", padding: "30px 20px", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: `${v.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", margin: "0 auto 16px" }}>
                  {v.icon}
                </div>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111827", margin: 0 }}>{v.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section style={{ background: "#F9FAFB", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#111827", marginBottom: "16px" }}>
            ✨ Meet the <span style={{ color: "#1D4ED8" }}>team</span>
          </h2>
          <p style={{ color: "#4B5563", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "40px" }}>
            Brit Institute is a community of dedicated professionals inspiring career transformations in AI and Data Science. We believe learning must be accessible and empathetic, customized to the needs of modern students. Our deeply devoted instructors provide competent, hands-on knowledge to navigate the rapidly growing tech landscape, ensuring each student receives high-quality education.
          </p>

          <div style={{ background: "#FFFFFF", padding: "30px", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.05)", display: "inline-block", maxWidth: "300px", width: "100%" }}>
            <div style={{ width: "120px", height: "120px", borderRadius: "16px", background: "#E5E7EB", margin: "0 auto 20px", overflow: "hidden" }}>
              <img src="/anjali.jpg" alt="Anjali Maheshwari" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#111827", margin: "0 0 4px" }}>Anjali Maheshwari</h3>
            <p style={{ color: "#1D4ED8", fontSize: "0.9rem", fontWeight: 600, margin: "0 0 16px" }}>FOUNDER</p>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#0A66C2", color: "#FFF", textDecoration: "none", padding: "8px 16px", borderRadius: "99px", fontSize: "0.85rem", fontWeight: 600, gap: "6px" }}>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section style={{ maxWidth: "800px", margin: "80px auto", padding: "0 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#111827", marginBottom: "20px" }}>
          Our <span style={{ color: "#1D4ED8" }}>Mission</span>
        </h2>
        <p style={{ color: "#4B5563", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "20px" }}>
          We believe technology should be accessible to everyone, and part of our core into all our endeavors is to break down barriers and help passionate professionals master innovative concepts and un-complicate the future.
        </p>
        <p style={{ color: "#4B5563", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "30px" }}>
          Through personalized learning paths, expert-led instruction, and hands-on projects in AI and Tech Strategy, we build the confidence and core culture that help careers explode.
        </p>
        <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#1D4ED8", fontStyle: "italic" }}>
          "Supporting tomorrow's tech learners, today."
        </h3>
      </section>

      <Footer />
    </main>
  );
}
