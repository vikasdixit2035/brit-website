"use client";

import { useState } from "react";
import { CalendarCheck, Mail, MapPin, MessageCircle, Phone, Send, ShieldCheck } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { ThemeHero, ThemeLabel, ThemeShell } from "@/components/layout/ThinkificTheme";
import { trackLead } from "@/lib/analytics";
import { SITE_ADDRESS, SITE_EMAIL, SITE_PHONE_DISPLAY, SITE_PHONE_UK } from "@/lib/site";

const inputClass =
  "w-full rounded-md border border-[#ded6c8] bg-[#f7f3ea] px-4 py-3 text-sm font-semibold text-[#241a1f] outline-none transition placeholder:text-[#8b8175] focus:border-[#d95700] focus:bg-white";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    payload.source = "Contact Page";

    try {
      const API_URL =
        process.env.NODE_ENV === "development"
          ? "http://localhost:4000/api/leads"
          : "https://api.britinstitute.uk/api/leads";

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        trackLead({
          formName: "contact_page",
          source: String(payload.source),
        });
        setFormStatus("success");
        e.currentTarget.reset();
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      console.error(err);
      setFormStatus("error");
    }
  };

  return (
    <ThemeShell>
      <ThemeHero
        eyebrow="Contact Admissions"
        title={<>Speak with an advisor before choosing your path.</>}
        text="Ask about courses, eligibility, fees, project work, career support, or the best route for your next role."
      />

      <section className="bg-[#f7f3ea] px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <ThemeLabel>Ways to connect</ThemeLabel>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Get clear answers, then move with confidence.
            </h1>
            <p className="mt-5 text-sm leading-7 text-[#6f665c] md:text-base">
              Whether you are comparing programmes or planning a career transition, our team can help you understand the next practical step.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                {
                  icon: Mail,
                  title: "Email support",
                  text: "Get detailed answers to course and admissions questions.",
                  value: SITE_EMAIL,
                  href: `mailto:${SITE_EMAIL}`,
                },
                {
                  icon: Phone,
                  title: "Phone support",
                  text: "Speak directly with our team.",
                  value: SITE_PHONE_DISPLAY,
                  href: `tel:${SITE_PHONE_UK}`,
                },
                {
                  icon: MapPin,
                  title: "Location",
                  text: "Brit Institute is based in the United Kingdom.",
                  value: SITE_ADDRESS,
                  href: "/contact",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.title} href={item.href} className="rounded-md border border-[#ded6c8] bg-white p-5 transition hover:border-[#d95700]">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#24101f] text-[#f5c242]">
                        <Icon size={21} />
                      </div>
                      <div>
                        <h3 className="font-black">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-[#6f665c]">{item.text}</p>
                        <p className="mt-2 text-sm font-black text-[#d95700]">{item.value}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="rounded-md border border-[#ded6c8] bg-white p-6 shadow-[0_24px_70px_rgba(36,26,31,0.08)] md:p-8">
            <div className="mb-7">
              <ThemeLabel>Send a message</ThemeLabel>
              <h2 className="mt-3 text-3xl font-semibold">Tell us what you want to achieve.</h2>
              <p className="mt-3 text-sm leading-7 text-[#6f665c]">
                We will get back to you with next steps during business days.
              </p>
            </div>

            {formStatus === "success" ? (
              <div className="rounded-md border border-[#7c9a4f]/30 bg-[#edf4df] p-6 text-center text-[#2f4125]">
                <ShieldCheck className="mx-auto mb-3" size={36} />
                <div className="text-xl font-black">Message sent successfully.</div>
                <p className="mt-2 text-sm font-semibold">Thank you for reaching out. Our team will contact you shortly.</p>
                <button
                  type="button"
                  onClick={() => setFormStatus("idle")}
                  className="mt-5 rounded-full bg-[#24101f] px-5 py-3 text-sm font-black text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-black text-[#493f37]">Full Name *</label>
                    <input name="fullName" required type="text" placeholder="Enter your full name" className={inputClass} />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-black text-[#493f37]">Email Address *</label>
                    <input name="email" required type="email" placeholder="your@email.com" className={inputClass} />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-black text-[#493f37]">Phone</label>
                    <input name="phone" type="tel" placeholder="Your phone number" className={inputClass} />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-black text-[#493f37]">Course Interest</label>
                    <select name="course" className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Select a course
                      </option>
                      <option>Data Analytics and Gen AI Certification Program</option>
                      <option>Data Science, Machine Learning and Gen AI Certification Program</option>
                      <option>Agentic AI Certification Program</option>
                      <option>Generative AI Certification Program</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-black text-[#493f37]">Message *</label>
                  <textarea name="message" required placeholder="Tell us how we can help you..." rows={5} className={inputClass} />
                </div>

                {formStatus === "error" && (
                  <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm font-bold text-red-700">
                    Failed to send message. Please try again later.
                  </div>
                )}

                <button
                  disabled={formStatus === "submitting"}
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4af37] px-6 py-4 text-sm font-black text-[#24101f] transition hover:bg-[#f5c242] disabled:opacity-60"
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#746d5c] px-5 py-20 text-white md:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {[
            [CalendarCheck, "Programme information", "Understand curriculum, timelines, fees, and eligibility."],
            [MessageCircle, "Career advice", "Discuss your background and which course fits your goal."],
            [ShieldCheck, "Application support", "Get help with next steps before joining a cohort."],
          ].map(([Icon, title, text]) => {
            const TypedIcon = Icon as typeof CalendarCheck;
            return (
              <article key={title as string} className="rounded-md border border-white/12 bg-[#24101f] p-6">
                <TypedIcon className="text-[#f5c242]" size={26} />
                <h3 className="mt-5 text-xl font-black">{title as string}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{text as string}</p>
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </ThemeShell>
  );
}
