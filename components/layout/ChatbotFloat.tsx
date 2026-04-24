"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { trackLead } from "@/lib/analytics";
import { DEFAULT_PHONE_COUNTRY_CODE, PHONE_COUNTRY_CODES } from "@/components/ui/phoneCountryCodes";

export default function ChatbotFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [messages, setMessages] = useState<{sender: "bot" | "user", text: string}[]>([
    { sender: "bot", text: "Welcome to Brit Institute! How can I help you today?" }
  ]);
  const [inputText, setInputText] = useState("");
  
  // Create a ref attached to the messages end
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const phoneCountry = String(payload.phoneCountry ?? DEFAULT_PHONE_COUNTRY_CODE);
    const phone = String(payload.phone ?? "");
    payload.phone = `${phoneCountry} ${phone.trim()}`.trim();
    delete payload.phoneCountry;
    payload.source = "Chatbot";

    try {
      const API_URL = process.env.NODE_ENV === "development" 
        ? "http://localhost:4000/api/leads" 
        : "https://api.britinstitute.uk/api/leads";
        
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        trackLead({
          formName: "chatbot_registration",
          source: String(payload.source),
        });
      }
    } catch(err) {
      console.error(err);
    }
    
    setIsRegistered(true);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: inputText }]);
    setInputText("");
    
    // Simulate typing and bot reply
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: "Thanks for your message! Our team is reviewing your query and will reply shortly." }]);
    }, 1500);
  };

  const BRIT_BLUE = "#1D4ED8";

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "65px",
          height: "65px",
          backgroundColor: BRIT_BLUE,
          color: "white",
          borderRadius: "32px",
          borderTopLeftRadius: "32px", 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
          zIndex: 9999,
          border: "none",
          cursor: "pointer",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        aria-label="Open Chat"
      >
        {isOpen ? (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "110px",
            right: "30px",
            width: "360px",
            height: "550px",
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
            zIndex: 9998,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: "var(--font-inter), sans-serif",
            animation: "slideUp 0.3s ease",
          }}
        >
          <style>{`
            @keyframes slideUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          
          {/* Header */}
          <div style={{ backgroundColor: BRIT_BLUE, padding: "20px 24px", color: "white", position: "relative" }}>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", color: "white", cursor: "pointer", opacity: 0.8 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <div style={{ width: "32px", height: "32px", backgroundColor: "white", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src="/britinstitute.png" alt="Brit Institute logo" width={24} height={24} style={{ width: "24px", height: "24px" }} />
              </div>
              <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700 }}>Chat with Us</h3>
            </div>
            {isRegistered && (
              <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.9 }}>Currently replying in under 3 minutes</p>
            )}
          </div>

          {!isRegistered ? (
            /* Registration Form */
            <div style={{ padding: "24px", flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
              <p style={{ margin: "0 0 24px 0", fontSize: "1.05rem", color: "#374151" }}>
                Hi! Please enter your details to start the chat.
              </p>
              
              <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ position: "relative" }}>
                  <label style={{ position: "absolute", top: "-10px", left: "10px", background: "white", padding: "0 4px", fontSize: "0.85rem", color: "#4B5563" }}>Name <span style={{ color: "red" }}>*</span></label>
                  <input name="name" required type="text" style={{ width: "100%", padding: "14px", border: "1px solid #D1D5DB", borderRadius: "8px", outline: "none", boxSizing: "border-box", fontSize: "0.95rem" }} />
                </div>
                
                <div style={{ position: "relative" }}>
                  <label style={{ position: "absolute", top: "-10px", left: "10px", background: "white", padding: "0 4px", fontSize: "0.85rem", color: "#4B5563" }}>Email <span style={{ color: "red" }}>*</span></label>
                  <input name="email" required type="email" style={{ width: "100%", padding: "14px", border: "1px solid #D1D5DB", borderRadius: "8px", outline: "none", boxSizing: "border-box", fontSize: "0.95rem" }} />
                </div>

                <div style={{ position: "relative" }}>
                  <label style={{ position: "absolute", top: "-10px", left: "10px", background: "white", padding: "0 4px", fontSize: "0.85rem", color: "#4B5563" }}>Phone number <span style={{ color: "red" }}>*</span></label>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <div style={{ position: "relative", width: "180px" }}>
                      <select
                        name="phoneCountry"
                        defaultValue={DEFAULT_PHONE_COUNTRY_CODE}
                        style={{ width: "100%", padding: "14px 34px 14px 14px", border: "1px solid #D1D5DB", borderRadius: "8px", outline: "none", boxSizing: "border-box", fontSize: "0.95rem", appearance: "none", background: "white" }}
                      >
                        {PHONE_COUNTRY_CODES.map((country) => (
                          <option key={country.value} value={country.value}>
                            {country.label}
                          </option>
                        ))}
                      </select>
                      <div style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#6B7280" }}>
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <input name="phone" required type="tel" placeholder="Phone number" style={{ flex: 1, padding: "14px", border: "1px solid #D1D5DB", borderRadius: "8px", outline: "none", boxSizing: "border-box", fontSize: "0.95rem" }} />
                  </div>
                </div>

                <button 
                  type="submit" 
                  style={{
                    backgroundColor: BRIT_BLUE,
                    color: "white",
                    padding: "16px",
                    borderRadius: "8px",
                    border: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    cursor: "pointer",
                    marginTop: "8px",
                    transition: "background 0.2s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1e40af"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = BRIT_BLUE}
                >
                  Start Chat
                </button>
              </form>
            </div>
          ) : (
            /* Chat Interface */
            <>
              {/* Message History */}
              <div style={{ flex: 1, backgroundColor: "#F3F4F6", padding: "20px 16px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "16px" }}>
                {messages.map((msg, idx) => (
                  <div key={idx} style={{ alignSelf: msg.sender === "user" ? "flex-end" : "flex-start", maxWidth: "80%", display: "flex", flexDirection: "column", gap: "4px" }}>
                    {msg.sender === "bot" && (
                      <span style={{ fontSize: "0.75rem", color: "#6B7280", marginLeft: "4px" }}>Brit Institute</span>
                    )}
                    <div 
                      style={{ 
                        padding: "12px 16px", 
                        borderRadius: "16px",
                        backgroundColor: msg.sender === "user" ? BRIT_BLUE : "white",
                        color: msg.sender === "user" ? "white" : "#111827",
                        borderBottomRightRadius: msg.sender === "user" ? "4px" : "16px",
                        borderBottomLeftRadius: msg.sender === "bot" ? "4px" : "16px",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                        fontSize: "0.95rem",
                        lineHeight: 1.5
                      }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Message Input */}
              <div style={{ padding: "16px", backgroundColor: "white", borderTop: "1px solid #E5E7EB" }}>
                <form onSubmit={handleSend} style={{ display: "flex", alignItems: "center", gap: "12px", background: "#F9FAFB", padding: "4px 16px", borderRadius: "99px", border: "1px solid #E5E7EB" }}>
                  <input 
                    type="text" 
                    placeholder="Reply here..." 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    style={{ flex: 1, background: "transparent", border: "none", outline: "none", padding: "10px 0", fontSize: "0.95rem", color: "#111827" }} 
                  />
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <button type="button" style={{ background: "none", border: "none", cursor: "pointer", color: "#9CA3AF" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                    </button>
                    <button type="button" style={{ background: "none", border: "none", cursor: "pointer", color: "#9CA3AF" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                    </button>
                    <button type="submit" disabled={!inputText.trim()} style={{ background: "none", border: "none", cursor: inputText.trim() ? "pointer" : "default", color: inputText.trim() ? BRIT_BLUE : "#D1D5DB", display: "flex" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"></path></svg>
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
