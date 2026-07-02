"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, CreditCard, ShieldCheck, Tag, Wallet } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { SITE_EMAIL, SITE_PHONE_DISPLAY, SITE_PHONE_UK } from "@/lib/site";
import { coursesData } from "@/app/courses/[slug]/courseData";
import PaymentCheckout from "@/app/courses/[slug]/PaymentCheckout";

const COURSE_ORDER = ["data-analytics", "data-science", "ai-automation", "gen-ai"];

function parseAmount(value: string) {
  return Number(value.replace(/[^\d.]/g, "")) || 0;
}

function formatAmount(amount: number, currency = "GBP") {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function PayPageClient() {
  const courses = useMemo(
    () =>
      COURSE_ORDER.map((slug) => {
        const course = coursesData[slug];
        return {
          slug,
          title: course.h1,
          description: course.subheadline,
          duration: course.duration,
          price: parseAmount(course.pricing.price),
          priceLabel: course.pricing.price,
          isPopular: slug === "data-analytics",
        };
      }).filter((course) => course.price > 0),
    []
  );
  const [selectedSlug, setSelectedSlug] = useState(courses[0]?.slug ?? "");
  const selectedCourse = courses.find((course) => course.slug === selectedSlug) ?? courses[0];

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#241a1f]">
      <section
        className="bg-[linear-gradient(180deg,#24101f_0%,#24101f_72%,#160914_100%)] px-6 text-white"
        style={{ paddingTop: "124px", paddingBottom: "72px" }}
      >
        <div className="mx-auto max-w-6xl">
          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#f5c242]">
            Secure checkout
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Pay your Brit Institute course fee securely
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
            Select your course, apply your coupon in checkout, and complete payment through Razorpay or PayPal.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: CreditCard, label: "Razorpay", detail: "UPI, card, net banking" },
              { icon: Wallet, label: "PayPal", detail: "PayPal, card, Pay Later" },
              { icon: Tag, label: "Coupon codes", detail: "Validated by backend" },
            ].map(({ icon: Icon, label, detail }) => (
              <div key={label} className="rounded-md border border-white/12 bg-white/[0.06] p-4">
                <Icon className="h-5 w-5 text-[#f5c242]" />
                <p className="mt-3 text-sm font-extrabold">{label}</p>
                <p className="mt-1 text-xs font-semibold text-white/58">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c45118]">Choose course</p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">Payment details</h2>
              </div>
            </div>

            <div className="grid gap-4">
              {courses.map((course) => {
                const isSelected = course.slug === selectedCourse.slug;

                return (
                  <button
                    key={course.slug}
                    type="button"
                    onClick={() => setSelectedSlug(course.slug)}
                    className={`group flex w-full flex-col gap-4 rounded-md border bg-white p-5 text-left shadow-[0_16px_42px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:border-[#d95700]/40 sm:flex-row sm:items-start sm:justify-between ${
                      isSelected ? "border-[#d95700] ring-4 ring-[#f5c242]/20" : "border-slate-200"
                    }`}
                  >
                    <span className="min-w-0">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="text-lg font-extrabold leading-snug text-slate-950">{course.title}</span>
                        {course.isPopular && (
                          <span className="rounded-full bg-amber-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-amber-800">
                            Popular
                          </span>
                        )}
                      </span>
                      <span className="mt-2 line-clamp-2 block text-sm font-medium leading-6 text-slate-600">
                        {course.description}
                      </span>
                      <span className="mt-3 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                        <span className="rounded-full bg-slate-100 px-3 py-1">{course.duration}</span>
                        <span className="rounded-full bg-slate-100 px-3 py-1">Coupon eligible</span>
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end">
                      <span className="text-2xl font-black text-slate-950">{course.priceLabel}</span>
                      <span
                        className={`grid h-8 w-8 place-items-center rounded-full border ${
                          isSelected ? "border-[#d95700] bg-[#d95700] text-white" : "border-slate-200 bg-slate-50 text-transparent"
                        }`}
                        aria-hidden="true"
                      >
                        <CheckCircle2 className="h-5 w-5" />
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {selectedCourse && (
            <aside className="rounded-md border border-slate-200 bg-white p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] lg:sticky lg:top-28">
              <div className="flex items-start justify-between gap-5 border-b border-slate-100 pb-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Selected programme</p>
                  <h2 className="mt-2 text-2xl font-extrabold leading-tight text-slate-950">{selectedCourse.title}</h2>
                </div>
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-[#f0eadf] text-[#24101f]">
                  <CreditCard className="h-6 w-6" />
                </div>
              </div>

              <div className="space-y-4 py-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-bold text-slate-500">Course fee</span>
                  <span className="text-2xl font-black text-slate-950">{formatAmount(selectedCourse.price)}</span>
                </div>
                <div className="rounded-md border border-[#ded6c8] bg-[#f7f3ea] p-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#d95700]" />
                    <p className="text-sm font-semibold leading-6 text-[#493f37]">
                      Orders are created by the payment backend. Coupon codes are validated before PayPal or Razorpay receives the final amount.
                    </p>
                  </div>
                </div>
              </div>

              <PaymentCheckout
                key={selectedCourse.slug}
                courseSlug={selectedCourse.slug}
                courseTitle={selectedCourse.title}
                amount={selectedCourse.price}
                currency="GBP"
                label="Continue to Payment"
                className="flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#d95700] px-6 py-3.5 text-[15px] font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#c45118]"
              />

              <div className="mt-5 grid gap-2 text-sm font-semibold text-slate-600">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  PayPal and card checkout enabled
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Razorpay checkout enabled
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Coupon code field included
                </span>
              </div>
            </aside>
          )}
        </div>

        <div className="mx-auto mt-10 max-w-6xl rounded-md border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Need help?</p>
          <p className="mt-2 text-base leading-7 text-slate-700">
            Contact admissions before paying if you are unsure about the amount, currency, or payment purpose.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${SITE_PHONE_UK}`}
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#d95700] px-5 text-sm font-bold text-white transition hover:bg-[#c45118]"
            >
              {SITE_PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 px-5 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
            >
              {SITE_EMAIL}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
