"use client";

import { useState } from "react";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [banner, setBanner] = useState(true);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    payload.source = "Contact Page";

    try {
      const API_URL = process.env.NODE_ENV === "development"
        ? "http://localhost:4000/api/leads"
        : "https://api.britinstitute.uk/api/leads";

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      console.error(err);
      setFormStatus("error");
    }
  };

  const faqs = [
    { q: "I'm from a non-technical background. Can I really learn AI concepts?", a: "Absolutely! Our courses are designed from the ground up to be accessible, starting with foundational concepts before moving to advanced topics." },
    { q: "How are the classes delivered? Can I learn at my own pace?", a: "We offer both live interactive sessions and pre-recorded modules, allowing you to learn at a pace that suits your schedule." },
    { q: "I work full-time. Is this program suitable for someone with a busy schedule?", a: "Yes, many of our students are full-time professionals. The curriculum is flexible and designed to be manageable alongside a full-time job." },
    { q: "What if I fall behind or find the content too challenging?", a: "Our dedicated support team and mentors are always available. We offer 1-on-1 career and technical guidance to ensure everyone succeeds." },
    { q: "Will I actually build real AI projects or just learn theory?", a: "Our curriculum emphasizes hands-on projects securely rooted in real-world scenarios. You will build an extensive portfolio." },
    { q: "How quickly can I start applying these skills at work?", a: "Right away. We focus on practical, actionable skills that you can bring to your workplace from day one." },
    { q: "What happens after I complete the program?", a: "You'll have access to our placement support, alumni network, and continuous learning resources to help you land the tech role you envision." },
  ];

  return (
    <main style={{ backgroundColor: "#F9FAFB", minHeight: "100vh", fontFamily: "var(--font-inter), sans-serif", color: "#111827" }}>
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />

      <div style={{ paddingTop: banner ? "160px" : "120px", paddingBottom: "80px", maxWidth: "1200px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>

        {/* Intro */}
        <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "700px", margin: "0 auto 80px" }}>
          <h2 style={{ fontSize: "1.25rem", color: "#6B7280", fontWeight: 500, lineHeight: 1.6 }}>
            Ready to explore your career? We're here to guide you every step of the way on your learning journey.
          </h2>
        </div>

        {/* Main Connect Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "60px", marginBottom: "100px", alignItems: "start" }}>

          {/* Left Column - Contact Methods */}
          <div>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#111827", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              Multiple Ways to <span style={{ color: "#1D4ED8" }}>Connect</span>
            </h1>
            <p style={{ color: "#4B5563", fontSize: "1rem", lineHeight: 1.6, marginBottom: "40px" }}>
              Whether you have questions about our programs, need technical support, or want to discuss your career exploration goals, we're here to help. Choose the method that works best for you.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Email Block */}
              <div style={{ background: "#FFFFFF", padding: "24px", borderRadius: "16px", border: "1px solid rgba(29, 78, 216, 0.1)", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>Email <span style={{ color: "#1D4ED8" }}>Support</span></h3>
                </div>
                <p style={{ color: "#6B7280", fontSize: "0.9rem", margin: "0 0 12px 0" }}>Get detailed answers to your questions</p>
                <a href="mailto:support@1to10x.com" style={{ color: "#1D4ED8", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem" }}>support@britinstitute.uk</a>
              </div>

              {/* Phone Block */}
              <div style={{ background: "#FFFFFF", padding: "24px", borderRadius: "16px", border: "1px solid rgba(16, 185, 129, 0.1)", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>Phone <span style={{ color: "#10B981" }}>Support</span></h3>
                </div>
                <p style={{ color: "#6B7280", fontSize: "0.9rem", margin: "0 0 16px 0" }}>Speak directly with our team</p>
                <div style={{ display: "flex", gap: "40px" }}>

                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#111827", marginBottom: "4px" }}>United Kingdom</div>
                  <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                    <a href="tel:+447380278167" style={{ color: "#10B981", textDecoration: "none" }}>+44 7380 278167</a><br />
                    <a href="tel:+447520664003" style={{ color: "#10B981", textDecoration: "none" }}>+44 7520 664 003</a>
                  </div>
                </div>
              </div>

              {/* Office Block */}
              <div style={{ background: "#FFFFFF", padding: "24px", borderRadius: "16px", border: "1px solid rgba(239, 68, 68, 0.1)", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>Our <span style={{ color: "#EF4444" }}>Office</span></h3>
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#111827", marginBottom: "4px" }}>London, UK</div>
                <p style={{ color: "#6B7280", fontSize: "0.9rem", margin: 0, lineHeight: 1.5 }}>
                  100 College Road<br />
                  Harrow, HA1 1BQ, United Kingdom
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div style={{ background: "#FFFFFF", padding: "40px", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.06)", border: "1px solid rgba(29, 78, 216, 0.05)" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#111827", marginBottom: "12px" }}>
              Send us a <span style={{ color: "#1D4ED8" }}>Message</span>
            </h2>
            <p style={{ color: "#6B7280", fontSize: "0.95rem", marginBottom: "30px", lineHeight: 1.5 }}>
              Fill out the form below and we'll get back to you within 24 hours during business days.
            </p>

            {formStatus === "success" ? (
              <div style={{ background: "#ECFDF5", color: "#065F46", padding: "20px", borderRadius: "12px", textAlign: "center", border: "1px solid #A7F3D0" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 12px" }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "8px" }}>Message Sent successfully!</div>
                <div style={{ fontSize: "0.95rem" }}>Thank you for reaching out. Our team will contact you shortly.</div>
                <button onClick={() => setFormStatus("idle")} style={{ marginTop: "16px", background: "none", border: "none", color: "#059669", fontWeight: 600, cursor: "pointer", textDecoration: "underline" }}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#374151", marginBottom: "8px" }}>Full Name *</label>
                    <input name="fullName" required type="text" placeholder="Enter your full name" style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid #D1D5DB", outline: "none", fontSize: "0.95rem", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#374151", marginBottom: "8px" }}>Email Address *</label>
                    <input name="email" required type="email" placeholder="your@email.com" style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid #D1D5DB", outline: "none", fontSize: "0.95rem", boxSizing: "border-box" }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#374151", marginBottom: "8px" }}>Subject</label>
                  <input name="subject" type="text" placeholder="What's this about?" style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid #D1D5DB", outline: "none", fontSize: "0.95rem", boxSizing: "border-box" }} />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#374151", marginBottom: "8px" }}>Message *</label>
                  <textarea name="message" required placeholder="Tell us how we can help you..." rows={5} style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid #D1D5DB", outline: "none", fontSize: "0.95rem", boxSizing: "border-box", resize: "vertical" }} />
                </div>

                {formStatus === "error" && (
                  <div style={{ color: "#DC2626", fontSize: "0.9rem", fontWeight: 500, padding: "10px", background: "#FEF2F2", borderRadius: "8px", border: "1px solid #FECACA" }}>
                    Failed to send message. Please try again later.
                  </div>
                )}

                <button
                  disabled={formStatus === "submitting"}
                  type="submit"
                  style={{
                    background: "#1D4ED8", color: "#FFF", fontWeight: 700, padding: "14px", borderRadius: "10px", border: "none", cursor: formStatus === "submitting" ? "not-allowed" : "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", transition: "background 0.2s", opacity: formStatus === "submitting" ? 0.7 : 1
                  }}
                  onMouseEnter={(e) => { if (formStatus !== "submitting") e.currentTarget.style.background = "#1e40af"; }}
                  onMouseLeave={(e) => e.currentTarget.style.background = "#1D4ED8"}
                >
                  {formStatus === "submitting" ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Support Categories Section */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#111827", marginBottom: "16px" }}>
            How Can We <span style={{ color: "#1D4ED8" }}>Help</span> You?
          </h2>
          <p style={{ color: "#6B7280", fontSize: "1rem", maxWidth: "600px", margin: "0 auto" }}>
            Choose the type of support you need and we'll connect you with the right team member.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "100px" }}>
          <div style={{ background: "#FFFFFF", padding: "30px", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>Program <span style={{ color: "#1D4ED8" }}>Information</span></h3>
            </div>
            <p style={{ color: "#6B7280", fontSize: "0.95rem", lineHeight: 1.5, marginBottom: "20px" }}>
              Get detailed information about our course structure, curriculum, duration, and enrollment requirements.
            </p>
            <a href="mailto:programs@britinstitute.uk" style={{ color: "#1D4ED8", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>programs@britinstitute.uk</a>
          </div>

          <div style={{ background: "#FFFFFF", padding: "30px", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>Technical <span style={{ color: "#10B981" }}>Support</span></h3>
            </div>
            <p style={{ color: "#6B7280", fontSize: "0.95rem", lineHeight: 1.5, marginBottom: "20px" }}>
              Need help with platform access, technical issues, or troubleshooting? Our tech team is here to help.
            </p>
            <a href="mailto:support@britinstitute.uk" style={{ color: "#10B981", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>support@britinstitute.uk</a>
          </div>

          <div style={{ background: "#FFFFFF", padding: "30px", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>Career <span style={{ color: "#8B5CF6" }}>Guidance</span></h3>
            </div>
            <p style={{ color: "#6B7280", fontSize: "0.95rem", lineHeight: 1.5, marginBottom: "20px" }}>
              Discuss your career goals, get guidance on learning opportunities, and learn about our educational support.
            </p>
            <a href="mailto:careers@britinstitute.uk" style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>careers@britinstitute.uk</a>
          </div>
        </div>

      </div>

      {/* FAQs Section Layer */}
      <div style={{ background: "#F3F4F6", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#111827", marginBottom: "16px" }}>
              Frequently Asked <span style={{ color: "#1D4ED8" }}>Questions</span>
            </h2>
            <p style={{ color: "#6B7280", fontSize: "1.05rem" }}>
              Everything you need to know about our learning programs
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} style={{ background: "#FFFFFF", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{ width: "100%", textAlign: "left", padding: "20px 24px", background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", fontSize: "1.05rem", fontWeight: 600, color: "#111827", transition: "background 0.2s" }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "#F9FAFB"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "none"}
                  >
                    <span>{faq.q}</span>
                    <svg style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s" }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </button>

                  {isOpen && (
                    <div style={{ padding: "0 24px 20px", color: "#4B5563", fontSize: "0.95rem", lineHeight: 1.6 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
