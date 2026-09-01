import IntentLandingPage from "@/components/sections/IntentLandingPage";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Data Analyst Career Change UK | Practical Roadmap",
  description: "Plan your UK data analyst career change: identify transferable skills, learn Excel, SQL, Power BI, Python and AI, build projects and prepare for interviews.",
  path: "/career-change-data-analyst-uk",
  keywords: ["data analyst career change", "become data analyst UK", "career change to data analytics UK"],
});

export default function CareerChangeDataAnalystPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Data Analyst Career Change UK", path: "/career-change-data-analyst-uk" },
  ]);
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Change Career to Data Analyst in the UK",
    url: "https://britinstitute.uk/career-change-data-analyst-uk",
    description: "A practical UK career-change roadmap covering analyst skills, projects, CV positioning, interviews and job-search support.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema).replace(/</g, "\\u003c") }} />
      <IntentLandingPage
        eyebrow="A structured path for UK career switchers"
        title="Change Career to Data Analyst in the UK"
        intro="Turn your existing experience into an advantage. Build the technical skills, business-focused projects and interview story you need to pursue a data analyst role without pretending your previous career did not happen."
        breadcrumb="Data Analyst Career Change UK"
        trustItems={["Beginner-friendly pathway", "Transferable-skill mapping", "Portfolio projects", "UK interview and job-search support"]}
        sections={[
          {
            title: "Start with Your Transferable Experience",
            paragraphs: [
              "Career changers often already understand customers, finance, operations, sales, healthcare or another business area. That domain knowledge can become a strength when it is connected to analysis and evidence.",
              "Begin by identifying the decisions you already support, the reports you use and the problems you solve. This creates a clearer target than applying broadly to every role with 'data' in the title.",
            ],
            bullets: ["Map previous responsibilities to analyst tasks", "Choose realistic entry and adjacent roles", "Identify technical and evidence gaps", "Create a weekly transition plan"],
          },
          {
            title: "Build the Core Data Analyst Skill Set",
            paragraphs: [
              "Most career changers benefit from a practical sequence: Excel for analysis, SQL for retrieving data, Power BI for reporting and Python for repeatable analysis. Statistics and responsible AI use help you interpret results and work more efficiently.",
              "The goal is not to memorise every feature. It is to complete common analyst tasks confidently and explain why you took each step.",
            ],
            bullets: ["Excel and data cleaning", "SQL and relational thinking", "Power BI dashboards and DAX", "Python, statistics and applied AI"],
          },
          {
            title: "Create Projects That Make the Career Change Credible",
            paragraphs: [
              "A portfolio bridges the experience gap by showing how you approach a realistic business question. Strong projects include the original brief, the cleaning process, analysis, visual output, checks and a concise recommendation.",
              "Where possible, choose project themes connected to your previous sector. A retail manager can analyse sales or stock; a finance professional can build a performance dashboard; an NHS administrator can explore operational trends using suitable public or practice data.",
            ],
          },
          {
            title: "Prepare Your CV, Interviews and Job Search",
            paragraphs: [
              "Your CV and LinkedIn profile should make the transition easy to understand: where you are coming from, what analyst capability you have built and which evidence supports it. Interviews then become a conversation about your decisions and projects rather than a list of course modules.",
              "Structured support can help you practise technical and behavioural questions, target suitable roles and improve applications over time. No course can remove the need for consistent practice and an active job search.",
            ],
            bullets: ["Career-change CV positioning", "LinkedIn optimisation", "Technical and behavioural mock interviews", "Focused application tracking"],
          },
        ]}
        relatedLinks={[
          { href: "/courses/data-analytics", label: "Data Analyst Course UK", description: "Explore the full live, project-led Data Analytics + AI programme." },
          { href: "/power-bi-course-uk", label: "Power BI Training", description: "See how Power BI projects support analyst job readiness." },
          { href: "/placement", label: "Placement Support", description: "Understand the support available after skills and portfolio development." },
        ]}
      />
    </>
  );
}
