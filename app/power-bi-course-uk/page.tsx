import IntentLandingPage from "@/components/sections/IntentLandingPage";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Power BI Course UK | Data Analyst Training",
  description: "Learn Power BI for UK data analyst roles through live training, practical dashboards and portfolio projects within Brit Institute's Data Analytics + AI programme.",
  path: "/power-bi-course-uk",
  keywords: ["Power BI course UK", "Power BI training UK", "Power BI data analyst course"],
});

export default function PowerBiCourseUkPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Power BI Course UK", path: "/power-bi-course-uk" },
  ]);
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Power BI Course UK for Aspiring Data Analysts",
    url: "https://britinstitute.uk/power-bi-course-uk",
    description: "Power BI training for aspiring UK data analysts within Brit Institute's wider Data Analytics + AI career programme.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema).replace(/</g, "\\u003c") }} />
      <IntentLandingPage
        eyebrow="Power BI training for UK analyst roles"
        title="Power BI Course UK for Aspiring Data Analysts"
        intro="Learn how to clean, model, visualise and explain business data in Power BI, then turn your dashboard work into portfolio evidence for UK data analyst interviews. Power BI is taught as a core part of Brit Institute's wider Data Analytics + AI career programme."
        breadcrumb="Power BI Course UK"
        trustItems={["Live, mentor-led sessions", "Business dashboard projects", "DAX and data modelling", "Portfolio and interview preparation"]}
        sections={[
          {
            title: "Learn Power BI in the Context of Real Analyst Work",
            paragraphs: [
              "A useful Power BI course should teach more than how to drag charts onto a report. UK analyst roles often require you to understand the business question, prepare data, create reliable measures and communicate the result to non-technical stakeholders.",
              "Brit Institute places Power BI inside the full analyst workflow. You connect reporting requirements to Excel, SQL and data-quality checks before you build a clear, usable dashboard.",
            ],
            bullets: ["Power Query and data preparation", "Data modelling and relationships", "DAX measures and calculated logic", "Dashboard design and stakeholder communication"],
          },
          {
            title: "Build Power BI Projects for Your Portfolio",
            paragraphs: [
              "Projects give employers something concrete to discuss. You should be able to explain where the data came from, how you modelled it, why you selected each KPI and what decision the report supports.",
              "Your portfolio work is structured around business-style briefs, with mentor feedback to help you improve both the technical build and the story you present in an interview.",
            ],
            bullets: ["Executive performance dashboard", "Operational KPI report", "Data-cleaning and modelling notes", "Project walkthrough for interviews"],
          },
          {
            title: "Connect Power BI to Excel, SQL, Python and AI",
            paragraphs: [
              "Power BI is valuable, but analysts rarely work with one tool in isolation. The wider programme helps you understand when to use Excel for quick exploration, SQL for data retrieval, Python for repeatable analysis and applied AI for carefully reviewed workflow support.",
              "This connected approach reduces tool-only learning and makes your training more relevant to the way analyst work is described in UK job vacancies.",
            ],
          },
          {
            title: "Prepare for Power BI Interview Questions",
            paragraphs: [
              "Career preparation covers the questions behind the dashboard: how you handled missing values, why you created a particular measure, how you validated the result and what you would change for a production environment.",
              "You also prepare your CV, LinkedIn profile and project summaries so recruiters can quickly understand the Power BI capability you have built.",
            ],
            bullets: ["Technical question practice", "Dashboard walkthrough practice", "CV and LinkedIn positioning", "UK job-search support"],
          },
        ]}
        relatedLinks={[
          { href: "/courses/data-analytics", label: "Data Analytics + AI Programme", description: "See the full curriculum, projects, fees and career-support journey." },
          { href: "/career-change-data-analyst-uk", label: "Career Change Guide", description: "Plan a practical move into data analytics from a different background." },
          { href: "/placement", label: "Placement Support", description: "Understand the CV, interview, application and placement process." },
        ]}
      />
    </>
  );
}
