import ContactPageClient from "@/app/contact/ContactPageClient";
import { buildMetadata, organizationSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Brit Institute",
  description:
    "Contact Brit Institute for course guidance, support, and career training enquiries across AI, data analytics, and technology programmes in the UK.",
  path: "/contact",
  keywords: ["contact Brit Institute", "course enquiry UK", "AI and data training contact"],
});

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: organizationSchema(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ContactPageClient />
    </>
  );
}
