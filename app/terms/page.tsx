"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsAndConditionsPage() {
  return (
    <main style={{ backgroundColor: "#F9FAFB", minHeight: "100vh", fontFamily: "var(--font-inter), sans-serif", color: "#111827" }}>
      <Navbar hasBanner={false} />

      <div style={{ paddingTop: "140px", paddingBottom: "100px", maxWidth: "800px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>

        {/* Colorful Gradient Header */}
        <div style={{ background: "linear-gradient(135deg, #1D4ED8 0%, #10B981 100%)", padding: "40px", borderRadius: "20px 20px 0 0", color: "white" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "8px" }}>Terms & Conditions</h1>
          <p style={{ fontWeight: 500, opacity: 0.9 }}>Effective Date: 03/03/2026</p>
        </div>

        {/* Content Body */}
        <div style={{ background: "#FFFFFF", padding: "40px", borderRadius: "0 0 20px 20px", boxShadow: "0 20px 40px rgba(0,0,0,0.06)", border: "1px solid rgba(29, 78, 216, 0.05)", borderTop: "none" }}>

          <div style={{ color: "#374151", fontSize: "1rem", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "28px" }}>
            <p>
              Welcome to Brit Institute. These Terms and Conditions govern your use of our website (<a href="https://britinstitute.uk" style={{ color: "#1D4ED8", textDecoration: "underline", fontWeight: 600 }}>https://britinstitute.uk</a>) and our educational services. By accessing or using our services, you agree to comply with and be bound by these Terms.
            </p>

            <section style={{ borderLeft: "4px solid #1D4ED8", paddingLeft: "20px" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#111827" }}>1. Acceptance of Terms</h2>
              <p>By enrolling in our courses, submitting an application, or browsing our website, you acknowledge that you have read, understood, and agreed to these Terms and Conditions in full.</p>
            </section>

            <section style={{ borderLeft: "4px solid #10B981", paddingLeft: "20px" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#111827" }}>2. Enrollment & Payments</h2>
              <ul style={{ listStyleType: "none", paddingLeft: "0", color: "#4B5563", margin: "10px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ color: "#10B981" }}>✔</span>
                  All course fees must be paid in accordance with the payment plans agreed upon at the time of enrollment.
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ color: "#10B981" }}>✔</span>
                  Brit Institute reserves the right to suspend access to course materials if payments are delayed or defaulted.
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ color: "#10B981" }}>✔</span>
                  Refunds are subject to our standard refund policy, provided to students prior to official enrollment.
                </li>
              </ul>
            </section>

            <section style={{ borderLeft: "4px solid #F59E0B", paddingLeft: "20px" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#111827" }}>3. Intellectual Property</h2>
              <p>All content provided, including but not limited to course modules, videos, assignments, and presentations, are the exclusive property of Brit Institute. Sharing, redistributing, or selling these materials without explicit written consent is strictly prohibited and violates our intellectual property rights.</p>
            </section>

            <section style={{ borderLeft: "4px solid #8B5CF6", paddingLeft: "20px" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#111827" }}>4. Code of Conduct</h2>
              <p>Students are expected to maintain professional behavior in all interactions with our instructors, staff, and peers. Harassment, discrimination, or cheating in assessments will not be tolerated and may lead to immediate termination of enrollment without a refund.</p>
            </section>

            <section style={{ borderLeft: "4px solid #EF4444", paddingLeft: "20px" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#111827" }}>5. Job Placement Guarantee</h2>
              <p>Our Job Placement Guarantee is applicable only to students who successfully fulfill all academic, attendance, and assignment requirements outlined in the program syllabus. Specific conditions apply and will be detailed in the Student Enrollment Agreement.</p>
            </section>

            <section style={{ borderLeft: "4px solid #6B7280", paddingLeft: "20px" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#111827" }}>6. Limitation of Liability</h2>
              <p>Brit Institute is committed to providing high-quality education. However, we do not guarantee specific employment outcomes beyond our explicit agreements. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
            </section>

            <section style={{ borderLeft: "4px solid #3B82F6", paddingLeft: "20px" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#111827" }}>7. Modifications to Terms</h2>
              <p>We may revise these Terms and Conditions periodically. Continued use of our website or services after any changes indicates your acceptance of the updated terms.</p>
            </section>

            <section style={{ marginTop: "20px" }}>
              <div style={{ background: "#F3F4F6", padding: "24px", borderRadius: "16px", color: "#111827", border: "1px solid #E5E7EB" }}>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#111827", marginBottom: "12px" }}>Contact Us</h2>
                <p style={{ marginBottom: "8px" }}>For any queries regarding these Terms and Conditions, please contact us:</p>
                <p style={{ fontWeight: 700, marginBottom: "4px" }}>Brit Institute</p>
                <p>Email: <a href="mailto:info@britinstitute.uk" style={{ color: "#1D4ED8", fontWeight: 600 }}>info@britinstitute.uk</a></p>
                <p>Website: <a href="https://britinstitute.uk" style={{ color: "#1D4ED8", fontWeight: 600 }}>https://britinstitute.uk</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
