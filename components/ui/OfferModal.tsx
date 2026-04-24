"use client";

import Link from "next/link";
import { useState } from "react";
import { Icons } from "@/components/ui/Icons";
import { DEFAULT_PHONE_COUNTRY_CODE, PHONE_COUNTRY_CODES } from "@/components/ui/phoneCountryCodes";

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OfferModal({ isOpen, onClose }: OfferModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCountry: DEFAULT_PHONE_COUNTRY_CODE,
    phone: "",
    course: "",
    purpose: "",
    agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const BRIT_BLUE = "#1D4ED8";

  const hasCoreDetails =
    formData.name.trim().length > 0 &&
    formData.email.trim().length > 0 &&
    formData.phone.trim().length > 0;
  const hasOfferDetails = formData.course.length > 0 && formData.purpose.length > 0;
  const readyToSubmit = hasCoreDetails && hasOfferDetails && formData.agreed;

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!readyToSubmit) {
      alert("Please complete the form and agree to the Terms & Conditions.");
      return;
    }

    try {
      setIsSubmitting(true);

      const API_URL =
        process.env.NODE_ENV === "development"
          ? "http://localhost:4000/api/leads"
          : "https://api.britinstitute.uk/api/leads";

      const { phoneCountry, phone, ...rest } = formData;
      const payload = {
        ...rest,
        phone: `${phoneCountry} ${phone.trim()}`.trim(),
        source: "Brit Institute Website - Offer Modal",
      };

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Success! We will contact you soon.");
        setFormData({
          name: "",
          email: "",
          phoneCountry: DEFAULT_PHONE_COUNTRY_CODE,
          phone: "",
          course: "",
          purpose: "",
          agreed: false,
        });
        setIsSubmitting(false);
        onClose();
      } else {
        alert("Failed to submit. Please try again.");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "20px",
      }}
    >
      <div
        style={{
          position: "relative",
          background: "#fff",
          borderRadius: "18px",
          display: "flex",
          maxWidth: "560px",
          width: "100%",
          overflow: "hidden",
          boxShadow: "0 24px 40px -20px rgba(15, 23, 42, 0.45)",
          maxHeight: "90vh",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "24px",
            color: "#64748B",
            zIndex: 10,
          }}
        >
          &times;
        </button>

        <div
          style={{
            flex: "1",
            padding: "40px 30px",
            overflowY: "auto",
            background: "#fff",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 800,
                margin: "0 0 8px 0",
                color: "#111827",
              }}
            >
              High Growth Offer
            </h2>
            <p style={{ color: "#6B7280", margin: 0, fontSize: "0.95rem" }}>
              Unlock growth with limited-time offers
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <input
                type="text"
                placeholder="Full Name*"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  border: "1px solid #D1D5DB",
                  outline: "none",
                  fontSize: "0.95rem",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Id*"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  border: "1px solid #D1D5DB",
                  outline: "none",
                  fontSize: "0.95rem",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div style={{ display: "flex", gap: "8px" }}>
              <div style={{ position: "relative", width: "180px" }}>
                <select
                  value={formData.phoneCountry}
                  onChange={(e) => setFormData({ ...formData, phoneCountry: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 36px 12px 12px",
                    border: "1px solid #D1D5DB",
                    borderRadius: "10px",
                    outline: "none",
                    fontSize: "0.92rem",
                    boxSizing: "border-box",
                    appearance: "none",
                    background: "#F9FAFB",
                    cursor: "pointer",
                  }}
                >
                  {PHONE_COUNTRY_CODES.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
                <div
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    color: "#6B7280",
                  }}
                >
                  <Icons.ChevronDown />
                </div>
              </div>

              <input
                type="tel"
                placeholder="Phone*"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  borderRadius: "10px",
                  border: "1px solid #D1D5DB",
                  outline: "none",
                  fontSize: "0.95rem",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div style={{ position: "relative" }}>
              <label
                style={{
                  position: "absolute",
                  top: "-8px",
                  left: "10px",
                  background: "#fff",
                  padding: "0 4px",
                  fontSize: "0.75rem",
                  color: "#6B7280",
                }}
              >
                Select Course*
              </label>
              <select
                required
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  border: "1px solid #D1D5DB",
                  outline: "none",
                  fontSize: "0.95rem",
                  appearance: "none",
                  background: "#fff",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              >
                <option value="">Select an option</option>
                <option value="software">Data Analytics</option>
                <option value="data">Data Science</option>
                <option value="product">AI Automation</option>
              </select>
              <div
                style={{
                  position: "absolute",
                  right: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "#6B7280",
                }}
              >
                <Icons.ChevronDown />
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <label
                style={{
                  position: "absolute",
                  top: "-8px",
                  left: "10px",
                  background: "#fff",
                  padding: "0 4px",
                  fontSize: "0.75rem",
                  color: "#6B7280",
                }}
              >
                Purpose*
              </label>
              <select
                required
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  border: "1px solid #D1D5DB",
                  outline: "none",
                  fontSize: "0.95rem",
                  appearance: "none",
                  background: "#fff",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              >
                <option value="">Select an option</option>
                <option value="career_change">Career Change</option>
                <option value="upskill">Upskilling</option>
                <option value="placement">Placement Assistance</option>
              </select>
              <div
                style={{
                  position: "absolute",
                  right: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "#6B7280",
                }}
              >
                <Icons.ChevronDown />
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "8px" }}>
              <input
                type="checkbox"
                id="agree"
                required
                checked={formData.agreed}
                onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                style={{ marginTop: "4px", accentColor: "#10B981" }}
              />
              <label htmlFor="agree" style={{ fontSize: "0.85rem", color: "#4B5563", lineHeight: 1.5 }}>
                I agree to Brit Institute&apos;s{" "}
                <Link href="/terms" style={{ color: "#111827", fontWeight: 600 }}>
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" style={{ color: "#111827", fontWeight: 600 }}>
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            <button
              type="submit"
              className="pulse"
              disabled={!readyToSubmit || isSubmitting}
              style={{
                width: "100%",
                padding: "14px",
                background: readyToSubmit && !isSubmitting ? BRIT_BLUE : "#93C5FD",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "1rem",
                fontWeight: 700,
                marginTop: "16px",
                cursor: readyToSubmit && !isSubmitting ? "pointer" : "not-allowed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                opacity: readyToSubmit && !isSubmitting ? 1 : 0.92,
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit request"}
              {!isSubmitting && <Icons.ArrowRight />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
