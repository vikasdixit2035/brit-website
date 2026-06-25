import {
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Layers,
  Presentation,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
} from "lucide-react";
import CoursePhaseSyllabus from "./CoursePhaseSyllabus";

const moduleBalance = [
  { name: "AI and LLM Foundations", weeks: "2 weeks", hours: "8 live hours", note: "Core concepts, model behavior, limitations, and safe AI use" },
  { name: "Prompt Engineering", weeks: "2 weeks", hours: "8 live hours", note: "Repeatable prompt systems for business, research, and operations" },
  { name: "Python and APIs", weeks: "3 weeks", hours: "12 live hours", note: "The technical base for building AI-powered tools and automations" },
  { name: "RAG and Vector Search", weeks: "3 weeks", hours: "12 live hours", note: "Document search, knowledge assistants, embeddings, and evaluation" },
  { name: "Agentic Workflows", weeks: "4 weeks", hours: "16 live hours", note: "Tool use, planning, memory, orchestration, testing, and deployment" },
  { name: "Portfolio and Career", weeks: "2 weeks", hours: "8 live hours", note: "GitHub proof, case-study storytelling, interviews, and responsible AI documentation" },
];

const phaseCards = [
  {
    phase: "Phase 1",
    title: "AI Foundations and Prompt Systems",
    description:
      "Build a clear understanding of how generative AI works, where it fails, and how to design prompts that produce reliable business outputs.",
    icon: BrainCircuit,
    accent: "text-blue-700",
    bg: "bg-blue-50",
    tracks: [
      {
        title: "AI and LLM Foundations",
        duration: "Weeks 1-2",
        project: "AI Use-Case Audit",
        items: [
          "AI, machine learning, generative AI, LLMs, tokens, context windows, latency, cost, and model trade-offs",
          "Prompt structure, role prompting, task framing, examples, constraints, output formats, and evaluation criteria",
          "Hallucination, bias, privacy, data sensitivity, human review, and responsible use in UK business settings",
          "Business use-case discovery across operations, sales, support, HR, marketing, research, and analytics",
        ],
        genAi:
          "Learners use AI to map real workflows, identify automation candidates, compare risk levels, and produce a practical AI adoption memo.",
      },
      {
        title: "Prompt Engineering for Workflows",
        duration: "Weeks 3-4",
        project: "Business Prompt Library",
        items: [
          "Prompt patterns for summarisation, extraction, rewriting, classification, reasoning support, and decision prep",
          "Reusable prompt templates, prompt variables, rubric-based quality checks, and prompt versioning",
          "Structured outputs, JSON schemas, tables, checklists, email drafts, research briefs, and meeting summaries",
          "Evaluation loops, adversarial testing, edge cases, and when a prompt should become an automated workflow",
        ],
        genAi:
          "Learners build a tested prompt library with input examples, expected outputs, quality rubrics, and human verification notes.",
      },
    ],
  },
  {
    phase: "Phase 2",
    title: "Python, APIs and AI Automation Basics",
    description:
      "Move from using AI tools manually to building controlled workflows with Python, APIs, JSON, environment variables, and reusable scripts.",
    icon: Code2,
    accent: "text-emerald-700",
    bg: "bg-emerald-50",
    tracks: [
      {
        title: "Python for AI Builders",
        duration: "Weeks 5-6",
        project: "AI Utility Notebook",
        items: [
          "Python setup, notebooks, variables, control flow, functions, files, errors, packages, and virtual environments",
          "Working with CSV, Excel, PDFs, text files, JSON, web data, and lightweight data cleaning",
          "API requests, response handling, environment variables, rate limits, logging, and simple automation scripts",
          "Building reusable helper functions for research, summarisation, extraction, classification, and reporting",
        ],
        genAi:
          "Learners use AI as a coding assistant while still reading, testing, and explaining every generated script before using it.",
      },
      {
        title: "AI APIs and Structured Outputs",
        duration: "Week 7",
        project: "Structured Extraction Workflow",
        items: [
          "OpenAI API basics, message design, model selection, parameters, cost awareness, and response validation",
          "Structured outputs for reliable JSON, schemas, validation checks, fallback handling, and retry logic",
          "Batch processing, document extraction, classification pipelines, and simple business rule checks",
          "Writing clear system instructions, separating data from instructions, and reducing prompt injection risk",
        ],
        genAi:
          "Learners build a workflow that converts messy text or documents into reviewed structured JSON for a business process.",
      },
    ],
  },
  {
    phase: "Phase 3",
    title: "RAG, Vector Databases and Knowledge Assistants",
    description:
      "Create assistants that search trusted documents before answering, with a strong focus on retrieval quality, citation discipline, and evaluation.",
    icon: Database,
    accent: "text-violet-700",
    bg: "bg-violet-50",
    tracks: [
      {
        title: "Embeddings and Semantic Search",
        duration: "Weeks 8-9",
        project: "Document Search Prototype",
        items: [
          "Embeddings, chunks, metadata, similarity search, ranking, retrieval precision, and recall",
          "Vector database concepts using tools such as ChromaDB, FAISS, or managed vector storage",
          "Document preparation, chunking strategy, metadata design, access control, and update workflows",
          "Search evaluation, answer grounding, citation checks, and common retrieval failure modes",
        ],
        genAi:
          "Learners build semantic search over a controlled document set and test whether answers are grounded in retrieved evidence.",
      },
      {
        title: "Retrieval Augmented Generation",
        duration: "Week 10",
        project: "Policy or Knowledge Q&A Assistant",
        items: [
          "RAG architecture, retriever plus generator flow, context assembly, citations, and answer constraints",
          "Prompt injection risks, conflicting documents, outdated documents, refusal behavior, and escalation rules",
          "Evaluation sets, golden answers, trace review, relevance scoring, and user feedback loops",
          "Designing knowledge assistants for HR policies, training content, customer support, operations, or sales enablement",
        ],
        genAi:
          "Learners turn document search into a question-answering assistant that cites sources and flags low-confidence responses.",
      },
    ],
  },
  {
    phase: "Phase 4",
    title: "Agentic Workflows and Tool Use",
    description:
      "Design systems that can choose tools, follow steps, call functions, check intermediate results, and complete business tasks under guardrails.",
    icon: Layers,
    accent: "text-amber-700",
    bg: "bg-amber-50",
    tracks: [
      {
        title: "Function Calling and Tool-Based Agents",
        duration: "Weeks 11-12",
        project: "Tool-Calling Agent",
        items: [
          "Function calling, tool schemas, inputs and outputs, validation, deterministic business rules, and guardrails",
          "Connecting AI to calculators, files, spreadsheets, databases, CRMs, ticketing tools, and internal APIs",
          "Planning loops, step-by-step execution, intermediate checks, error recovery, and human approval points",
          "Testing tool outputs, logging traces, debugging agent decisions, and preventing runaway automation",
        ],
        genAi:
          "Learners build an assistant that chooses from defined tools and completes a bounded task with visible reasoning checks and logs.",
      },
      {
        title: "Workflow Automation and Orchestration",
        duration: "Weeks 13-14",
        project: "Business Automation System",
        items: [
          "Workflow mapping, triggers, actions, routing rules, approvals, notifications, and exception handling",
          "Automation with no-code tools such as Zapier or Make alongside Python scripts and API workflows",
          "LangChain-style orchestration concepts, chains, agents, retrievers, tools, memory, and observability",
          "Security, secrets, permissions, audit trails, monitoring, handoff design, and production-readiness checks",
        ],
        genAi:
          "Learners automate a real process such as lead triage, support routing, research reporting, invoice review, or onboarding assistance.",
      },
    ],
  },
  {
    phase: "Phase 5",
    title: "Deployment, Portfolio and Career Acceleration",
    description:
      "Package AI systems into credible portfolio evidence with GitHub documentation, demos, governance notes, and interview-ready explanations.",
    icon: GraduationCap,
    accent: "text-rose-700",
    bg: "bg-rose-50",
    tracks: [
      {
        title: "Deployment and Product Thinking",
        duration: "Week 15",
        project: "AI Workflow Demo App",
        items: [
          "Building lightweight demos with Streamlit, Flask, or a simple web interface",
          "User flows, input validation, loading states, failure states, cost limits, monitoring, and feedback capture",
          "Deployment options, environment variables, secrets, README files, demo scripts, and basic maintainability",
          "Product thinking for AI: user value, risks, controls, success metrics, and when not to automate",
        ],
        genAi:
          "Learners package one workflow into a small demo that a stakeholder can test without reading the code first.",
      },
      {
        title: "Career Services and Interview Prep",
        duration: "Week 16",
        project: "Agentic AI Portfolio Pack",
        items: [
          "Git and GitHub workflow, project READMEs, architecture diagrams, demo videos, and case-study writing",
          "CV, cover letter, LinkedIn, and GitHub optimization for AI specialist and automation roles",
          "Communication skills, project walkthroughs, AI ethics explanation, and mock technical interviews",
          "Freelance positioning, consulting use cases, stakeholder discovery questions, and proposal structure",
        ],
        genAi:
          "Learners use AI to refine portfolio narratives and interview answers while keeping claims accurate, specific, and evidence-backed.",
      },
    ],
  },
];

const weekPlan = [
  ["1", "AI landscape, LLM concepts, model strengths and limits", "Use-case discovery lab and safe AI handling", "Start AI Use-Case Audit"],
  ["2", "Responsible AI, privacy, bias, hallucinations, human review", "Workflow mapping and automation opportunity scoring", "Submit AI Use-Case Audit"],
  ["3", "Prompt patterns for summary, extraction, classification", "Prompt templates, variables, examples, and constraints", "Start Business Prompt Library"],
  ["4", "Structured prompting, output formats, rubrics", "Evaluation loops, edge cases, prompt versioning", "Submit Business Prompt Library"],
  ["5", "Python setup, notebooks, variables, control flow", "Functions, files, errors, packages, and environments", "Start AI Utility Notebook"],
  ["6", "Working with text, CSV, Excel, JSON, and PDFs", "API requests, logging, reusable helper functions", "Build automation helper scripts"],
  ["7", "AI APIs, model parameters, cost awareness", "Structured outputs, validation, retries, batch workflows", "Submit Structured Extraction Workflow"],
  ["8", "Embeddings, chunking, metadata, similarity search", "Vector database setup and document preparation", "Start Document Search Prototype"],
  ["9", "Search evaluation, ranking, retrieval failure modes", "Citation checks and answer grounding", "Submit Document Search Prototype"],
  ["10", "RAG architecture and context assembly", "Knowledge Q&A assistant build lab and evaluation", "Submit Policy or Knowledge Q&A Assistant"],
  ["11", "Function calling, tool schemas, validation", "Connect AI to files, calculators, APIs, and business rules", "Start Tool-Calling Agent"],
  ["12", "Planning loops, error recovery, human approval", "Agent debugging, logs, traces, and guardrail tests", "Submit Tool-Calling Agent"],
  ["13", "Workflow mapping, triggers, actions, approvals", "Zapier/Make plus Python automation patterns", "Start Business Automation System"],
  ["14", "Orchestration, memory, monitoring, audit trails", "Production-readiness checklist and stakeholder demo", "Submit Business Automation System"],
  ["15", "Demo app structure, user flow, failure states", "Deploy or package AI Workflow Demo App", "Submit AI Workflow Demo App"],
  ["16", "GitHub portfolio, README, architecture notes", "Mock interviews, CV, LinkedIn, and project defense", "Submit Agentic AI Portfolio Pack"],
];

const portfolioProjects = [
  {
    title: "AI Use-Case Audit",
    proof: "Workflow map, use-case shortlist, value-risk matrix, and responsible AI notes",
    outcome: "Identify where AI should and should not be used in a business process",
  },
  {
    title: "Business Prompt Library",
    proof: "Prompt templates, sample inputs, expected outputs, quality rubric, and version notes",
    outcome: "Create repeatable AI workflows instead of one-off prompts",
  },
  {
    title: "Structured Extraction Workflow",
    proof: "Python notebook or script, schema, JSON output examples, and validation checks",
    outcome: "Turn messy information into reliable structured data for operations",
  },
  {
    title: "Policy or Knowledge Q&A Assistant",
    proof: "RAG prototype, document set, retrieval tests, citations, and failure-mode notes",
    outcome: "Build a grounded assistant that answers from trusted documents",
  },
  {
    title: "Business Automation System",
    proof: "Automation map, tool-calling flow, approval points, logs, and stakeholder demo",
    outcome: "Design agentic workflows that connect AI to tools under guardrails",
  },
  {
    title: "Agentic AI Portfolio Pack",
    proof: "GitHub repo, README, architecture diagram, demo video, governance note, and CV bullets",
    outcome: "Present AI automation work credibly in interviews and client conversations",
  },
];

const submissionPattern = [
  "Business problem",
  "Workflow map",
  "Tools and data sources",
  "Prompt or agent design",
  "Testing evidence",
  "Demo output",
  "Risk controls",
  "Human review plan",
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

export default function AgenticAICurriculum() {
  return (
    <section className="space-y-14">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950 text-white shadow-sm">
        <div className="grid gap-8 p-7 md:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-300">Applied agentic AI certification plan</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
              Agentic AI Automation Certification
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              A four-month practical programme for building AI assistants, RAG systems, tool-calling agents, and business automation workflows. Learners finish with deployable demos, GitHub evidence, and responsible AI documentation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["16 weeks", "64 guided hours", "6 portfolio projects", "Agents, RAG, APIs, automation"].map((item) => (
                <span key={item} className="rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { icon: BriefcaseBusiness, label: "Role readiness", text: "AI specialist, automation consultant, AI operations, and workflow automation roles" },
              { icon: Sparkles, label: "Real AI systems", text: "Learners build assistants that retrieve, call tools, validate outputs, and hand off safely" },
              { icon: ShieldCheck, label: "Governed automation", text: "Privacy, redaction, permissions, logging, evaluation, and human approval are built into the workflow" },
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
          title="Start with judgement, then build agentic systems step by step."
          description="The programme keeps AI foundations and prompting practical, then spends most of the time on Python, APIs, RAG, function calling, orchestration, deployment, and portfolio proof."
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
          title="Five phases from AI foundations to deployable agent workflows."
          description="Learners move from prompt systems to Python automation, RAG, tool-calling agents, orchestration, deployment, and interview-ready project storytelling."
        />
        <CoursePhaseSyllabus phases={phaseCards} getAiLabel={() => "Applied AI workflow"} />
      </section>

      <section>
        <SectionHeading
          eyebrow="Week-by-week teaching plan"
          title="Saturday concepts, Sunday build labs, portfolio evidence every week."
          description="The weekend rhythm keeps the programme practical: Saturday introduces architecture and concepts; Sunday is for guided builds, debugging, evaluation, and documentation."
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
          title="Six projects that prove practical agentic AI ability."
          description="Each submission shows a business problem, workflow design, technical implementation, evaluation evidence, and responsible AI controls."
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
            icon: Terminal,
            title: "Build before abstract theory",
            text: "Learners create working prompts, scripts, RAG prototypes, agents, and automations early so concepts stay tied to visible outputs.",
          },
          {
            icon: GitBranch,
            title: "Document like a professional",
            text: "Every project includes README notes, architecture choices, testing evidence, failure modes, and clear human review checkpoints.",
          },
          {
            icon: Users,
            title: "Prepare for stakeholders",
            text: "The programme trains learners to explain value, risk, cost, limits, and governance to managers, clients, and interview panels.",
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
            Teach AI judgement first, then build practical assistants, RAG systems, tool-calling agents, and automations that are documented, tested, and safe enough to discuss with real stakeholders.
          </p>
        </div>
      </section>
    </section>
  );
}
