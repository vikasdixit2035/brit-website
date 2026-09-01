import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { faqItems } from "@/lib/faqData";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Data Analyst Course and Placement FAQs",
  description: "Answers about Brit Institute's UK Data Analytics + AI programme, live training, projects, fees, eligibility, career preparation and placement support.",
  path: "/faq",
  keywords: ["data analyst course UK FAQ", "Brit Institute placement support", "data analytics course questions"],
});

export default function FaqPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Frequently Asked Questions", path: "/faq" },
  ]);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#241a1f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <section className="bg-[#24101f] px-5 pb-20 pt-32 text-white md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f5c242]">Clear answers before you enrol</p>
          <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">Data Analyst Course and Placement FAQs</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">Understand the learning format, skills, projects, eligibility, programme terms and career support before choosing your route.</p>
        </div>
      </section>
      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-[#ded6c8] bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-black">
                  <span>{item.question}</span>
                  <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f7f3ea] text-[#d95700] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-5 whitespace-pre-line text-sm leading-7 text-[#6f665c]">{item.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-12 rounded-2xl bg-[#d8e8ff] p-8 text-center">
            <h2 className="text-3xl font-semibold">Still comparing your options?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#4d617f]">Review the complete Data Analytics + AI programme or speak with an advisor about your background and goals.</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/courses/data-analytics" className="btn-gold lg">Explore Data Analyst Programme</Link>
              <Link href="/contact" className="rounded-md border border-[#24101f] px-6 py-3 text-sm font-black">Book Free Career Consultation</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
