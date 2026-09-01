import ContactPageClient from "@/app/contact/ContactPageClient";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Brit Institute",
  description:
    "Contact Brit Institute for course guidance, support, and career training enquiries across AI, data analytics, and technology programmes in the UK.",
  path: "/contact",
  keywords: ["contact Brit Institute", "course enquiry UK", "AI and data training contact"],
});

export default function ContactPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Brit Institute",
    url: "https://britinstitute.uk/contact",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs).replace(/</g, "\\u003c") }}
      />
      <ContactPageClient />
    </>
  );
}
