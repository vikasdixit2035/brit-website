"use client";

import { useState } from "react";
import { Icons } from "@/components/ui/Icons";

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OfferModal({ isOpen, onClose }: OfferModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    purpose: "",
    agreed: false
  });

  const BRIT_BLUE = "#1D4ED8";

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please agree to the Terms & Conditions.");
      return;
    }

    try {
      const API_URL = process.env.NODE_ENV === "development" 
        ? "http://localhost:4000/api/leads" 
        : "https://api.britinstitute.uk/api/leads";
        
      const payload = { ...formData, source: "Offer Modal" };
        
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        alert("Success! We will contact you soon.");
        onClose();
        setFormData({ name: "", email: "", phone: "", course: "", purpose: "", agreed: false });
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      padding: "20px"
    }}>
      <div style={{
        position: "relative",
        background: "#fff",
        borderRadius: "16px",
        display: "flex",
        maxWidth: "800px",
        width: "100%",
        overflow: "hidden",
        boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
        maxHeight: "90vh",
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "16px", right: "16px",
            background: "none", border: "none",
            cursor: "pointer", fontSize: "24px", color: "#6B7280",
            zIndex: 10
          }}
        >
          &times;
        </button>

        {/* Left Side (Dark Blue Theme) */}
        <div style={{
          flex: "1",
          background: "linear-gradient(135deg, #0f172a 0%, #172554 100%)",
          padding: "40px",
          display: "none",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }} className="modal-left-pane">
          <h2 style={{ color: "#10B981", fontSize: "2.5rem", fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
            Unlock Growth
          </h2>
          <h3 style={{ color: "white", fontSize: "1.8rem", fontWeight: 700, margin: "10px 0 0 0", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "#10B981" }}>⬆</span>
            Lock in Savings
            <span style={{ color: "#10B981" }}>⬆</span>
          </h3>
          <div style={{ marginTop: "40px", flex: 1, display: "flex", alignItems: "flex-end" }}>
            {/* Simple Graphic or Logo */}
            <div style={{ width: "120px", height: "120px", background: "rgba(255,255,255,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="/britinstitute.png" alt="Logo" style={{ width: "80%", borderRadius: "4px" }} />
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div style={{ flex: "1.2", padding: "40px 30px", overflowY: "auto" }}>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, margin: "0 0 8px 0", color: "#111827" }}>
              High Growth Offer
            </h2>
            <p style={{ color: "#6B7280", margin: 0, fontSize: "0.95rem" }}>
              Unlock growth with limited-time offers
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Full Name */}
            <div>
              <input
                type="text"
                placeholder="Full Name*"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: "100%", padding: "12px 16px", borderRadius: "8px",
                  border: "1px solid #D1D5DB", outline: "none", fontSize: "0.95rem",
                  boxSizing: "border-box"
                }}
              />
            </div>

            {/* Email Id */}
            <div>
              <input
                type="email"
                placeholder="Email Id*"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: "100%", padding: "12px 16px", borderRadius: "8px",
                  border: "1px solid #D1D5DB", outline: "none", fontSize: "0.95rem",
                  boxSizing: "border-box"
                }}
              />
            </div>

            {/* Phone */}
            <div style={{ display: "flex", gap: "8px" }}>
              <div style={{
                display: "flex", alignItems: "center", gap: "6px", width: "100px",
                border: "1px solid #D1D5DB", borderRadius: "8px", padding: "0 10px",
                background: "#F9FAFB"
              }}>
                <span>🇬🇧</span>
                <span style={{ fontSize: "0.95rem" }}>+44</span>
              </div>
              <input
                type="tel"
                placeholder="Phone*"
                required
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                style={{
                  flex: 1, padding: "12px 16px", borderRadius: "8px",
                  border: "1px solid #D1D5DB", outline: "none", fontSize: "0.95rem",
                  boxSizing: "border-box"
                }}
              />
            </div>

            {/* Select Course */}
            <div style={{ position: "relative" }}>
              <label style={{ position: "absolute", top: "-8px", left: "10px", background: "#fff", padding: "0 4px", fontSize: "0.75rem", color: "#6B7280" }}>Select Course*</label>
              <select
                required
                value={formData.course}
                onChange={e => setFormData({ ...formData, course: e.target.value })}
                style={{
                  width: "100%", padding: "12px 16px", borderRadius: "8px",
                  border: "1px solid #D1D5DB", outline: "none", fontSize: "0.95rem",
                  appearance: "none", background: "#fff", cursor: "pointer",
                  boxSizing: "border-box"
                }}
              >
                <option value="">Select an option</option>
                <option value="software">Data Analytics</option>
                <option value="data">Data Science</option>
                <option value="product">AI Automation</option>
              </select>
              <div style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#6B7280" }}>
                <Icons.ChevronDown />
              </div>
            </div>

            {/* Purpose */}
            <div style={{ position: "relative" }}>
              <label style={{ position: "absolute", top: "-8px", left: "10px", background: "#fff", padding: "0 4px", fontSize: "0.75rem", color: "#6B7280" }}>Purpose*</label>
              <select
                required
                value={formData.purpose}
                onChange={e => setFormData({ ...formData, purpose: e.target.value })}
                style={{
                  width: "100%", padding: "12px 16px", borderRadius: "8px",
                  border: "1px solid #D1D5DB", outline: "none", fontSize: "0.95rem",
                  appearance: "none", background: "#fff", cursor: "pointer",
                  boxSizing: "border-box"
                }}
              >
                <option value="">Select an option</option>
                <option value="career_change">Career Change</option>
                <option value="upskill">Upskilling</option>
                <option value="placement">Placement Assistance</option>
              </select>
              <div style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#6B7280" }}>
                <Icons.ChevronDown />
              </div>
            </div>

            {/* Checkbox */}
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "8px" }}>
              <input
                type="checkbox"
                id="agree"
                required
                checked={formData.agreed}
                onChange={e => setFormData({ ...formData, agreed: e.target.checked })}
                style={{ marginTop: "4px", accentColor: "#10B981" }}
              />
              <label htmlFor="agree" style={{ fontSize: "0.85rem", color: "#4B5563", lineHeight: 1.5 }}>
                I agree to Brit Institute's <a href="#" style={{ color: "#111827", fontWeight: 600 }}>Terms & Conditions</a> and <a href="#" style={{ color: "#111827", fontWeight: 600 }}>Privacy Policy.</a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="pulse"
              style={{
                width: "100%",
                padding: "14px",
                background: BRIT_BLUE,
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: 700,
                marginTop: "16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              }}
            >
              Submit <Icons.ArrowRight />
            </button>
          </form>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (min-width: 768px) {
          .modal-left-pane { display: flex !important; }
        }
      `}} />
    </div>
  );
}
