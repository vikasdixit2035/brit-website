import IntentLandingPage from "@/components/sections/IntentLandingPage";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Data Analyst Bootcamp UK vs Mentor-Led Programme",
  description: "Compare a typical UK data analyst bootcamp with Brit Institute's six-month mentor-led career programme, including pace, projects and career support.",
  path: "/data-analyst-bootcamp-uk",
  keywords: ["data analyst bootcamp UK", "data analytics bootcamp UK", "data analyst course UK"],
});

export default function DataAnalystBootcampComparisonPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Data Analyst Bootcamp UK Comparison", path: "/data-analyst-bootcamp-uk" },
  ]);
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Data Analyst Bootcamp UK vs Mentor-Led Career Programme",
    url: "https://britinstitute.uk/data-analyst-bootcamp-uk",
    description: "A practical comparison of intensive data analyst bootcamps and Brit Institute's six-month mentor-led programme.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema).replace(/</g, "\\u003c") }} />
      <IntentLandingPage
        eyebrow="Choose the delivery model that fits your life"
        title="Data Analyst Bootcamp UK vs Mentor-Led Career Programme"
        intro="Brit Institute's Data Analytics + AI programme is a six-month, live, mentor-led career programme rather than a short intensive bootcamp. Compare the formats before deciding which pace, project depth and support model suits you."
        breadcrumb="Data Analyst Bootcamp UK Comparison"
        trustItems={["Transparent format comparison", "Six-month structured programme", "Live mentor support", "Projects and career preparation"]}
        sections={[
          {
            title: "What People Usually Mean by a Data Analyst Bootcamp",
            paragraphs: [
              "A data analyst bootcamp is usually an intensive course designed to cover a large amount of material in a short period. Formats vary widely: some are full-time, some are self-paced and others combine recorded content with live workshops.",
              "The label alone does not tell you whether a programme includes feedback, substantial projects, interview preparation or continued career support. Compare the actual delivery and outcomes rather than relying on the word 'bootcamp'.",
            ],
          },
          {
            title: "How Brit Institute's Mentor-Led Programme Differs",
            paragraphs: [
              "Brit Institute's Data Analytics + AI programme runs over six months and is designed to fit around consistent weekly learning. It combines live instruction, practical assignments, portfolio projects, mentoring and structured UK career preparation.",
              "The longer format is intended to give learners time to practise Excel, SQL, Power BI, Python, statistics and applied AI, then improve their work through feedback before presenting it in a portfolio.",
            ],
          },
          {
            title: "Which Format Is Better for You?",
            paragraphs: [
              "An intensive bootcamp may suit someone who can study for long hours, already has technical foundations and wants a compressed schedule. A longer mentor-led programme may suit a beginner, a working professional or a career changer who needs time for practice, feedback and job-search preparation.",
              "Ask how many projects you will complete, who reviews them, how live support works, what career services are included and which terms apply to any placement proposition. The best choice is the programme you can complete and use to create credible evidence.",
            ],
            bullets: ["Check the weekly time commitment", "Ask who reviews project work", "Review the complete tool curriculum", "Read placement and refund terms carefully"],
          },
        ]}
        comparison={{
          title: "Typical Intensive Bootcamp vs Brit Institute Programme",
          firstLabel: "Typical intensive bootcamp",
          secondLabel: "Brit Institute mentor-led programme",
          rows: [
            { topic: "Pace", first: "Often compressed into a shorter, high-intensity schedule.", second: "Six-month structured learning pathway with weekly practice." },
            { topic: "Delivery", first: "Varies between self-paced, full-time and hybrid formats.", second: "Live, mentor-led online training with guided work." },
            { topic: "Tools", first: "Depends on the provider and may focus on a narrower stack.", second: "Excel, SQL, Power BI, Python, statistics and applied AI." },
            { topic: "Projects", first: "Project quantity and review depth vary significantly.", second: "Portfolio projects are integrated into the learning journey." },
            { topic: "Career support", first: "May end with CV advice or a short careers module.", second: "CV, LinkedIn, interview, job-search and placement support are built into the programme." },
          ],
        }}
        relatedLinks={[
          { href: "/courses/data-analytics", label: "Data Analytics + AI Programme", description: "Review the six-month curriculum, projects, tools and fees." },
          { href: "/career-change-data-analyst-uk", label: "Career Change Guide", description: "Build a realistic roadmap from your current role into analytics." },
          { href: "/placement", label: "Placement Support", description: "Read exactly what career and placement support includes." },
        ]}
      />
    </>
  );
}
