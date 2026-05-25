import {
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  Database,
  FileSpreadsheet,
  GitBranch,
  GraduationCap,
  LineChart,
  Presentation,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const moduleBalance = [
  { name: "Excel", weeks: "3 weeks", hours: "12 live hours", note: "Analyst essentials for day-one productivity" },
  { name: "Power BI", weeks: "5 weeks", hours: "20 live hours", note: "High visibility skill in UK analyst hiring" },
  { name: "SQL + Advanced SQL", weeks: "5 weeks", hours: "20 live hours", note: "Querying, joining, transforming, and explaining data" },
  { name: "Python + AI Integration", weeks: "7 weeks", hours: "28 live hours", note: "Automation, GenAI, APIs, and analyst tooling" },
  { name: "Statistics", weeks: "2 weeks", hours: "8 live hours", note: "Interpretation for decisions, not academic overload" },
  { name: "Machine Learning", weeks: "4 weeks", hours: "16 live hours", note: "Predictive and segmentation literacy for junior roles" },
];

const phaseCards = [
  {
    phase: "Phase 1",
    title: "Data Foundations & Visualization",
    description:
      "Build a practical foundation in spreadsheet analytics, clean reporting, dashboard thinking, and business storytelling.",
    icon: FileSpreadsheet,
    accent: "text-blue-700",
    bg: "bg-blue-50",
    tracks: [
      {
        title: "Excel for Data Analysis",
        duration: "Weeks 1-3",
        project: "Operations KPI Tracker",
        items: [
          "Workbook structure, data types, tables, sorting, filtering, and validation",
          "Cleaning messy spreadsheets, conditional formatting, and reporting standards",
          "IF/IFS, SUMIFS, COUNTIFS, AVERAGEIFS, XLOOKUP, text and date functions",
          "PivotTables, PivotCharts, basic dashboards, and Power Query in Excel",
        ],
        genAi:
          "Use AI to explain formulas, suggest cleanup steps, draft metric definitions, summarize insights, and write a stakeholder-ready memo after redacting sensitive data.",
      },
      {
        title: "Power BI",
        duration: "Weeks 4-8",
        project: "Executive BI Dashboard",
        items: [
          "Data connections, profiling, Power Query, null/error handling, merge and append",
          "Star schema, relationships, date table, semantic model design, and refresh logic",
          "DAX basics, measures vs calculated columns, CALCULATE, filter context, and time intelligence",
          "KPI design, drillthrough, tooltips, accessibility, publishing, workspaces, and row-level security",
        ],
        genAi:
          "Use AI to draft report requirements, KPI definitions, DAX explanations, dashboard narratives, QA checklists, and stakeholder summaries.",
      },
    ],
  },
  {
    phase: "Phase 2",
    title: "Analytical Tools & Techniques",
    description:
      "Move from dashboard users to analysts who can query databases, validate outputs, and explain evidence with statistical reasoning.",
    icon: Database,
    accent: "text-emerald-700",
    bg: "bg-emerald-50",
    tracks: [
      {
        title: "SQL and Advanced SQL",
        duration: "Weeks 9-13",
        project: "SQL Business Case Pack",
        items: [
          "Database concepts, tables, keys, SELECT, WHERE, ORDER BY, GROUP BY, HAVING, and CASE",
          "Joins, unions, subqueries, CTEs, views, record validation, and data-cleaning SQL",
          "Window functions, ranking, running totals, lag/lead, string functions, and date functions",
          "Optimization basics, indexes, EXPLAIN/ANALYZE, SQL style, and documentation",
        ],
        genAi:
          "Use AI to draft query skeletons, explain joins, convert business questions into SQL, review readability, and validate results without blindly trusting generated queries.",
      },
      {
        title: "Statistics and Probability",
        duration: "Weeks 21-22",
        project: "Decision Memo",
        items: [
          "Data types, mean, median, mode, variance, spread, distributions, and outliers",
          "Percentiles, probability basics, sampling, bias, confidence intervals, and risk",
          "Hypothesis testing, p-values, statistical significance, and business significance",
          "Correlation vs causation, regression interpretation, and A/B test thinking",
        ],
        genAi:
          "Use AI to translate statistical output into plain English, check interpretation wording, and prepare stakeholder-facing explanations after learners compute and verify results.",
      },
    ],
  },
  {
    phase: "Phase 3",
    title: "Python, Automation & AI Workflows",
    description:
      "Use Python as the analyst automation layer: clean data, work with files and APIs, create notebooks, and build AI-assisted workflows.",
    icon: Code2,
    accent: "text-violet-700",
    bg: "bg-violet-50",
    tracks: [
      {
        title: "Python with AI Integration",
        duration: "Weeks 14-20",
        project: "Analyst Copilot Mini-App",
        items: [
          "Python fundamentals, Jupyter notebooks, variables, control flow, functions, file handling, lists, and dictionaries",
          "pandas I/O, filtering, grouping, aggregation, missing values, joins, reshaping, date/time handling, and visualization",
          "Reusable scripts, automation patterns, APIs, JSON, environment variables, and notebook storytelling",
          "OpenAI API basics, prompt design, structured outputs, function calling, embeddings, and document search",
        ],
        genAi:
          "Build workflows that turn raw data into KPI calculations, structured JSON summaries, SQL helpers, document Q&A, and reviewed business insight outputs.",
      },
    ],
  },
  {
    phase: "Phase 4",
    title: "Applied Machine Learning & Responsible GenAI",
    description:
      "Learn enough ML to frame practical predictive problems, evaluate models, explain limits, and use GenAI responsibly in analytics work.",
    icon: BrainCircuit,
    accent: "text-amber-700",
    bg: "bg-amber-50",
    tracks: [
      {
        title: "Machine Learning Basics",
        duration: "Weeks 23-26",
        project: "Prediction or Segmentation Prototype",
        items: [
          "ML workflow, problem framing, supervised vs unsupervised learning, train/test split, and leakage",
          "Preprocessing, encoding, scaling, pipelines, regression, classification, and clustering",
          "Confusion matrix, MAE/RMSE, precision, recall, F1, overfitting, and model comparison",
          "Feature importance, explainability, model bias, model cards, and when not to use ML",
        ],
        genAi:
          "Use AI to compare algorithms, generate model cards, explain feature trade-offs, summarize model limits, and present results to non-technical stakeholders.",
      },
      {
        title: "Git, GitHub and AI Governance",
        duration: "Embedded throughout",
        project: "Portfolio Repository + AI-Use Declaration",
        items: [
          "Git basics, GitHub repositories, branch workflow, README writing, and project documentation",
          "Prompt templates, structured outputs, retrieval notes, validation logs, and human review checkpoints",
          "Data minimization, redaction, transparency, fairness, security, accuracy, and individual rights",
          "Clear declarations of where AI was used, what was verified, and what limitations remain",
        ],
        genAi:
          "Learners document AI usage like professionals: data provided, outputs generated, human checks completed, and governance risks still open.",
      },
    ],
  },
  {
    phase: "Phase 5",
    title: "Career Acceleration & Professional Excellence",
    description:
      "Convert course work into employability proof with a targeted CV, LinkedIn and GitHub profile, interview practice, and portfolio storytelling.",
    icon: GraduationCap,
    accent: "text-rose-700",
    bg: "bg-rose-50",
    tracks: [
      {
        title: "Career Services and Interview Prep",
        duration: "Final portfolio sprint",
        project: "Hiring-Ready Portfolio Pack",
        items: [
          "Resume building, cover letter writing, and role-specific tailoring for UK job descriptions",
          "LinkedIn and GitHub optimization with clear project summaries and documented repositories",
          "Communication skills, interview etiquette, project walkthroughs, and stakeholder explanation practice",
          "Aptitude preparation kit, mock interviews, salary conversation prep, and final portfolio review",
        ],
        genAi:
          "Use AI to draft and refine role-specific CV bullets, interview answers, LinkedIn summaries, and project narratives while keeping claims accurate and evidence-based.",
      },
    ],
  },
];

const weekPlan = [
  ["1", "UK analyst role, workflow, Excel hygiene", "Data types, validation, cleanup, safe AI use", "Start Excel project dataset and data dictionary"],
  ["2", "IF/IFS, SUMIFS, COUNTIFS, percentages", "XLOOKUP, text/date functions, AI formula review", "Build KPI calculation sheet"],
  ["3", "PivotTables, charts, dashboard layout", "Power Query in Excel and AI insight memo", "Submit Operations KPI Tracker"],
  ["4", "Power BI orientation and connections", "Power Query transformations and refresh logic", "Start BI dataset cleanup"],
  ["5", "Data modeling, facts, dimensions, relationships", "DAX basics, measures, filter context, CALCULATE", "Build base semantic model"],
  ["6", "DAX KPIs, time intelligence, trends", "Visual best practices, slicers, drillthrough", "Add KPI measures and first report page"],
  ["7", "Dashboard storytelling and accessibility", "Publishing, refresh, RLS, AI narration QA", "Add role-based report and executive summary"],
  ["8", "Power BI guided build lab", "Project presentation and feedback", "Submit Executive BI Dashboard"],
  ["9", "SQL tables, keys, SELECT, WHERE", "GROUP BY, HAVING, aggregates, CASE", "Explore case-study schema"],
  ["10", "Joins and business meaning", "Subqueries, set operations, validation", "Write multi-table business queries"],
  ["11", "CTEs and staged transformations", "Window functions, ranks, running totals", "Build advanced analysis queries"],
  ["12", "String/date/conditional SQL functions", "Views, optimization, indexes, EXPLAIN", "Improve and tune one query set"],
  ["13", "AI-assisted SQL and documentation", "SQL challenge lab and project review", "Submit SQL Business Case Pack"],
  ["14", "Python environment, Jupyter, basics", "Functions, loops, collections, file handling", "Start Python notebook template"],
  ["15", "pandas CSV/Excel I/O and DataFrames", "Missing values, types, grouping, aggregations", "Clean analysis-ready dataset"],
  ["16", "Merge, join, concat, reshape, dates", "Exploratory charts and story-first commentary", "Build exploratory notebook"],
  ["17", "Reusable code and analyst automation", "APIs, JSON, environment variables, packages", "Automate data pull or report prep"],
  ["18", "GenAI for analysts and API basics", "Structured outputs for reliable JSON insights", "Generate structured KPI summary"],
  ["19", "Function calling and tool workflows", "Embeddings, semantic search, document Q&A", "Add retrieval or tool-calling feature"],
  ["20", "End-to-end analyst copilot build lab", "Demo day and feedback", "Submit Analyst Copilot Mini-App"],
  ["21", "Data types, spread, distributions, outliers", "Probability, sampling, bias, confidence intervals", "Begin statistical decision memo"],
  ["22", "Hypothesis testing and significance", "Correlation, regression, A/B readout, AI memo QA", "Submit Decision Memo"],
  ["23", "ML framing, train/test split, leakage", "Preprocessing, encoding, scaling, pipelines", "Prepare ML-ready dataset"],
  ["24", "Regression workshop and evaluation", "Classification, confusion matrix, precision/recall/F1", "Compare two baseline models"],
  ["25", "Clustering and segmentation", "Feature importance, explainability, bias", "Choose final model and write findings"],
  ["26", "Final ML build lab and model card", "Portfolio presentation and interview defense", "Submit Prediction or Segmentation Prototype"],
];

const portfolioProjects = [
  {
    title: "Operations KPI Tracker",
    proof: "Excel workbook, cleaned tabs, formula sheets, Pivot dashboard, and insight memo",
    outcome: "Clean messy files, calculate KPIs, and report clearly",
  },
  {
    title: "Executive BI Dashboard",
    proof: "PBIX file, semantic model, DAX measures, screenshots or published report, and walkthrough",
    outcome: "Model data, build dashboards, and communicate to stakeholders",
  },
  {
    title: "SQL Business Case Pack",
    proof: ".sql scripts, query notes, output screenshots, and tuning note",
    outcome: "Answer business questions from structured data with readable SQL",
  },
  {
    title: "Analyst Copilot Mini-App",
    proof: "Notebook or app, prompt templates, structured JSON example, and governance note",
    outcome: "Automate analysis and use GenAI responsibly in workflows",
  },
  {
    title: "Decision Memo",
    proof: "Written recommendation, calculations, charts, and uncertainty explanation",
    outcome: "Interpret evidence rather than only calculate formulas",
  },
  {
    title: "Prediction or Segmentation Prototype",
    proof: "Notebook, metrics summary, feature explanation, model card, and stakeholder summary",
    outcome: "Frame an ML problem, evaluate a model, and explain limits",
  },
];

const submissionPattern = [
  "Business problem",
  "Data source description",
  "Cleaning log",
  "Analysis steps",
  "Output or dashboard",
  "Recommendation",
  "Limitations",
  "AI-use declaration",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold leading-tight text-gray-950 md:text-4xl">{title}</h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">{description}</p>
    </div>
  );
}

export default function DataAnalyticsCurriculum() {
  return (
    <section className="space-y-14">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950 text-white shadow-sm">
        <div className="grid gap-8 p-7 md:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-300">UK job-ready certification plan</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
              Data Analyst and Applied GenAI Certification
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              A six-month weekend programme built around Excel, Power BI, SQL, Python, statistics, machine learning, and AI-assisted analyst workflows. Learners finish with portfolio evidence for junior data analyst, BI analyst, reporting analyst, operations analyst, and data insight roles.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["26 weeks", "104 guided hours", "6 portfolio projects", "GenAI in every module"].map((item) => (
                <span key={item} className="rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { icon: BriefcaseBusiness, label: "Entry-level readiness", text: "Junior analyst, BI, reporting, operations, and people/data insight roles" },
              { icon: Sparkles, label: "Career acceleration", text: "For professionals adding analytics and AI to an existing domain" },
              { icon: ShieldCheck, label: "Responsible AI", text: "Redaction, accountability, transparency, accuracy, fairness, and security" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-amber-300 text-slate-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-extrabold">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <section>
        <SectionHeading
          eyebrow="Recommended curriculum balance"
          title="Spend the most time where UK analyst demand is strongest."
          description="Excel and statistics stay focused and practical. Power BI, SQL, Python, automation, and AI-enabled workflows get the deeper build time because they create the strongest day-to-day evidence for hiring conversations."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {moduleBalance.map((module) => (
            <div key={module.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-lg font-extrabold text-gray-950">{module.name}</h3>
                <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">{module.weeks}</span>
              </div>
              <p className="text-sm font-bold text-blue-700">{module.hours}</p>
              <p className="mt-3 text-sm leading-6 text-gray-600">{module.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="Detailed syllabus"
          title="Five phases with GenAI embedded from the first week."
          description="The course is not a separate AI add-on. Learners use AI safely inside Excel, Power BI, SQL, Python, statistics, ML, documentation, and career preparation."
        />
        <div className="space-y-6">
          {phaseCards.map((phase) => {
            const Icon = phase.icon;
            return (
              <article key={phase.phase} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
                <div className="mb-6 grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
                  <div>
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-md ${phase.bg} ${phase.accent}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className={`text-sm font-bold uppercase tracking-[0.14em] ${phase.accent}`}>{phase.phase}</p>
                    <h3 className="mt-2 text-2xl font-extrabold leading-tight text-gray-950">{phase.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">{phase.description}</p>
                  </div>
                  <div className="grid gap-4">
                    {phase.tracks.map((track) => (
                      <div key={track.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h4 className="text-lg font-extrabold text-gray-950">{track.title}</h4>
                            <p className="mt-1 text-sm font-bold text-slate-500">{track.duration}</p>
                          </div>
                          <span className="rounded-md bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm">
                            Project: {track.project}
                          </span>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {track.items.map((item) => (
                            <div key={item} className="flex items-start gap-3 rounded-md bg-white p-3">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                              <span className="text-sm leading-6 text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 rounded-md border border-blue-100 bg-blue-50 p-4">
                          <div className="mb-2 flex items-center gap-2 text-sm font-extrabold text-blue-800">
                            <Sparkles className="h-4 w-4" />
                            GenAI integration
                          </div>
                          <p className="text-sm leading-6 text-blue-950">{track.genAi}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="Week-by-week teaching plan"
          title="Saturday concepts, Sunday labs, portfolio progress every week."
          description="Each weekend has a clear rhythm: Saturday introduces the concepts and live demos; Sunday turns that learning into guided labs, project work, and AI-in-workflow practice."
        />
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="min-w-[860px]">
            <div className="grid grid-cols-[86px_1fr_1fr_1fr] bg-slate-950 text-sm font-extrabold text-white">
              <div className="p-4">Week</div>
              <div className="p-4">Saturday class</div>
              <div className="p-4">Sunday class</div>
              <div className="p-4">Project milestone</div>
            </div>
            {weekPlan.map(([week, saturday, sunday, milestone], index) => (
              <div
                key={week}
                className={`grid grid-cols-[86px_1fr_1fr_1fr] border-t border-slate-200 text-sm ${
                  index % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                <div className="p-4 font-extrabold text-blue-700">Week {week}</div>
                <div className="p-4 leading-6 text-gray-700">{saturday}</div>
                <div className="p-4 leading-6 text-gray-700">{sunday}</div>
                <div className="p-4 font-semibold leading-6 text-gray-900">{milestone}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="Portfolio outcomes"
          title="Six module projects, one hiring-ready evidence pack."
          description="The certificate should not end with only quizzes. Every module creates a concrete submission that shows practical ability, communication, validation, and responsible AI use."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {portfolioProjects.map((project) => (
            <article key={project.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                  <Presentation className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-gray-950">{project.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-blue-700">{project.outcome}</p>
                </div>
              </div>
              <p className="text-sm leading-6 text-gray-600">{project.proof}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-950 p-6 text-white">
          <div className="mb-5 flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-amber-300" />
            <h3 className="text-xl font-extrabold">Required submission pattern</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {submissionPattern.map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-bold text-slate-100">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {[
          {
            icon: BarChart3,
            title: "Teach Excel tightly",
            text: "Keep Excel focused on tables, formulas, lookups, PivotTables, dashboards, and Power Query basics rather than adding VBA into the core path.",
          },
          {
            icon: LineChart,
            title: "Make statistics practical",
            text: "Use statistics for interpretation, evidence, risk, and avoiding misleading recommendations rather than turning it into a theory block.",
          },
          {
            icon: GitBranch,
            title: "Keep the stack consistent",
            text: "Use one SQL dialect, one Python lab stack, GitHub repositories, pandas, scikit-learn, notebooks, and repeatable project documentation.",
          },
        ].map((note) => {
          const Icon = note.icon;
          return (
            <div key={note.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-800">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-extrabold text-gray-950">{note.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">{note.text}</p>
            </div>
          );
        })}
      </section>

      <section className="rounded-xl border border-blue-100 bg-blue-50 p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-white text-blue-700 shadow-sm">
              <CalendarDays className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-extrabold leading-tight text-gray-950">Simple course promise</h2>
          </div>
          <p className="text-lg font-semibold leading-8 text-blue-950">
            Teach the fundamentals just enough, then spend most of the six months on Power BI, SQL, Python, and AI-powered analyst workflows, with a project in every module and a portfolio outcome every month.
          </p>
        </div>
      </section>
    </section>
  );
}
