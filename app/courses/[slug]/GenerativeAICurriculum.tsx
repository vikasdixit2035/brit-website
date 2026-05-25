import {
  BookOpenCheck,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  FileText,
  GitBranch,
  GraduationCap,
  MessageSquareText,
  Presentation,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const moduleBalance = [
  { name: "GenAI Foundations", weeks: "1 week", hours: "4 live hours", note: "Core concepts, model limits, safe use, and practical business framing" },
  { name: "Prompt Engineering", weeks: "3 weeks", hours: "12 live hours", note: "Reusable prompt systems for research, content, analysis, and operations" },
  { name: "GenAI Tools and Copilots", weeks: "2 weeks", hours: "8 live hours", note: "ChatGPT, Claude, Gemini, Perplexity, NotebookLM, and workflow selection" },
  { name: "Structured Outputs and Automation", weeks: "2 weeks", hours: "8 live hours", note: "Reliable outputs, prompt libraries, no-code workflows, and business process support" },
  { name: "RAG and Knowledge Assistants", weeks: "2 weeks", hours: "8 live hours", note: "Document Q&A, semantic search concepts, citations, and grounded answers" },
  { name: "Portfolio and Career", weeks: "2 weeks", hours: "8 live hours", note: "Responsible AI case studies, portfolio proof, interview prep, and role positioning" },
];

const phaseCards = [
  {
    phase: "Phase 1",
    title: "Generative AI Foundations and Safe Use",
    description:
      "Understand what GenAI can and cannot do, how modern AI assistants behave, and how to use them safely in professional settings.",
    icon: BrainCircuit,
    accent: "text-blue-700",
    bg: "bg-blue-50",
    tracks: [
      {
        title: "Foundations of Generative AI",
        duration: "Week 1",
        project: "AI Use-Case Map",
        items: [
          "Generative AI, LLMs, multimodal AI, tokens, context windows, model strengths, model limits, and hallucinations",
          "Common business use cases across research, writing, customer support, operations, marketing, HR, and productivity",
          "Safe AI use, redaction, privacy, bias, accuracy, copyright awareness, and human review checkpoints",
          "Choosing when to use ChatGPT, Claude, Gemini, Perplexity, NotebookLM, or a workflow automation tool",
        ],
        genAi:
          "Learners create a practical map of where GenAI can save time, where it needs human review, and where it should not be used.",
      },
    ],
  },
  {
    phase: "Phase 2",
    title: "Prompt Engineering and Business Prompt Systems",
    description:
      "Move from casual prompting to repeatable prompt systems that produce useful, reviewable outputs for real professional tasks.",
    icon: MessageSquareText,
    accent: "text-emerald-700",
    bg: "bg-emerald-50",
    tracks: [
      {
        title: "Prompt Engineering Foundations",
        duration: "Weeks 2-3",
        project: "Business Prompt Library",
        items: [
          "Prompt structure, role, context, task, constraints, examples, tone, audience, and output format",
          "Prompt patterns for summarisation, rewriting, ideation, classification, extraction, research, and decision support",
          "Few-shot examples, prompt variables, reusable templates, prompt versioning, and quality rubrics",
          "Prompt debugging, hallucination reduction, fact-checking, citation checks, and evaluation loops",
        ],
        genAi:
          "Learners build a tested prompt library with inputs, expected outputs, review criteria, and examples for repeatable business work.",
      },
      {
        title: "Writing, Research and Communication Workflows",
        duration: "Week 4",
        project: "AI Research and Writing Workflow",
        items: [
          "Research brief creation, source comparison, note synthesis, meeting summaries, and stakeholder update drafting",
          "Email, proposal, report, social content, learning notes, and executive summary workflows",
          "Using AI to adjust tone, audience, structure, clarity, and action orientation without inventing claims",
          "Human-in-the-loop editing, verification, source tracking, and final quality review",
        ],
        genAi:
          "Learners build an end-to-end workflow that turns a research question into notes, draft content, checked claims, and a final business-ready output.",
      },
    ],
  },
  {
    phase: "Phase 3",
    title: "GenAI Tools, Multimodal Workflows and Copilots",
    description:
      "Learn the practical tool stack for modern GenAI work, including text, images, documents, presentations, spreadsheets, and personal productivity systems.",
    icon: Bot,
    accent: "text-violet-700",
    bg: "bg-violet-50",
    tracks: [
      {
        title: "AI Tools and Copilots",
        duration: "Weeks 5-6",
        project: "Productivity Copilot Setup",
        items: [
          "ChatGPT, Claude, Gemini, Perplexity, NotebookLM, Microsoft Copilot concepts, and tool selection by task",
          "Document summarisation, spreadsheet support, presentation drafting, meeting notes, and personal knowledge workflows",
          "Image generation literacy, visual prompt writing, slide/storyboard support, and multimodal input review",
          "AI tool comparison, privacy settings, workspace rules, team adoption, and repeatable productivity playbooks",
        ],
        genAi:
          "Learners create a practical copilot setup for their role, with tool choices, prompt templates, review rules, and workflow examples.",
      },
    ],
  },
  {
    phase: "Phase 4",
    title: "Structured Outputs, Automation and Knowledge Assistants",
    description:
      "Turn GenAI from a chat tool into controlled workflows that extract information, produce structured outputs, and answer from trusted documents.",
    icon: Workflow,
    accent: "text-amber-700",
    bg: "bg-amber-50",
    tracks: [
      {
        title: "Structured Outputs and Workflow Automation",
        duration: "Weeks 7-8",
        project: "Structured AI Workflow",
        items: [
          "Structured outputs, tables, JSON-style responses, checklists, scorecards, templates, and validation rules",
          "Lead triage, support classification, content calendar planning, report drafting, HR screening support, and operations checklists",
          "No-code workflow thinking with tools such as Zapier, Make, forms, spreadsheets, and AI assistants",
          "Error handling, review queues, approval steps, audit trails, and when to keep a human decision point",
        ],
        genAi:
          "Learners build a workflow that turns messy inputs into a structured, reviewed business output with clear approval checkpoints.",
      },
      {
        title: "RAG, Document Q&A and Knowledge Assistants",
        duration: "Weeks 9-10",
        project: "Knowledge Assistant Prototype",
        items: [
          "RAG concepts, embeddings, semantic search, document chunks, metadata, answer grounding, and citations",
          "NotebookLM-style document workflows, policy assistants, training Q&A, internal knowledge support, and research copilots",
          "Good source selection, document hygiene, conflicting evidence, outdated information, and low-confidence answers",
          "Evaluation sets, golden answers, citation review, prompt injection awareness, and escalation rules",
        ],
        genAi:
          "Learners create a grounded assistant over a controlled document set and test whether answers are accurate, cited, and useful.",
      },
    ],
  },
  {
    phase: "Phase 5",
    title: "Responsible AI, Portfolio and Career Acceleration",
    description:
      "Package GenAI skills into a credible portfolio with case studies, governance notes, interview stories, and role-ready communication.",
    icon: GraduationCap,
    accent: "text-rose-700",
    bg: "bg-rose-50",
    tracks: [
      {
        title: "Responsible AI and Governance",
        duration: "Week 11",
        project: "Responsible AI Playbook",
        items: [
          "Accuracy, transparency, fairness, bias, data minimisation, privacy, copyright awareness, and security basics",
          "AI-use declarations, redaction rules, source tracking, human verification, and final accountability",
          "Business risk assessment, stakeholder sign-off, approval workflows, and when not to use GenAI",
          "Policy writing, team guidelines, prompt library governance, and practical AI adoption checklists",
        ],
        genAi:
          "Learners create a responsible AI playbook that documents safe usage rules, review steps, and risk controls for a team or role.",
      },
      {
        title: "Portfolio, Interview Prep and Professional Use Cases",
        duration: "Week 12",
        project: "Generative AI Portfolio Pack",
        items: [
          "Portfolio case studies, before-and-after workflow examples, prompt libraries, tool comparisons, and result summaries",
          "LinkedIn, CV, GitHub or Notion portfolio, role positioning, interview answers, and project walkthroughs",
          "Use-case based interviews for AI content, AI operations, prompt specialist, productivity, and workflow roles",
          "Final presentation, feedback, refinement, and next-step learning plan",
        ],
        genAi:
          "Learners use AI to improve portfolio narratives and interview answers while keeping claims accurate, specific, and evidence-backed.",
      },
    ],
  },
];

const weekPlan = [
  ["1", "GenAI landscape, LLMs, multimodal AI, model limits", "Safe use, redaction, privacy, bias, use-case mapping", "Submit AI Use-Case Map"],
  ["2", "Prompt structure, context, constraints, examples", "Summarisation, rewriting, classification, extraction patterns", "Start Business Prompt Library"],
  ["3", "Few-shot prompting, prompt variables, quality rubrics", "Prompt debugging, hallucination checks, evaluation loops", "Improve prompt library"],
  ["4", "Research, writing, meetings, proposals, reports", "End-to-end AI research and writing workflow", "Submit AI Research and Writing Workflow"],
  ["5", "ChatGPT, Claude, Gemini, Perplexity, NotebookLM", "Tool selection, privacy settings, productivity playbooks", "Start Productivity Copilot Setup"],
  ["6", "Documents, spreadsheets, presentations, images, multimodal review", "Role-specific copilot setup and workflow testing", "Submit Productivity Copilot Setup"],
  ["7", "Structured outputs, tables, JSON-style responses, templates", "Validation rules, scorecards, review queues", "Start Structured AI Workflow"],
  ["8", "No-code automation thinking, forms, spreadsheets, approvals", "Build and test structured workflow with human review", "Submit Structured AI Workflow"],
  ["9", "RAG, embeddings, chunks, metadata, semantic search", "Document preparation and Q&A assistant design", "Start Knowledge Assistant Prototype"],
  ["10", "Grounding, citations, conflicting sources, low-confidence answers", "Evaluation set, golden answers, prompt injection checks", "Submit Knowledge Assistant Prototype"],
  ["11", "Responsible AI, transparency, fairness, privacy, copyright", "AI-use declarations, team guidelines, risk controls", "Submit Responsible AI Playbook"],
  ["12", "Portfolio case studies, CV, LinkedIn, interview stories", "Final presentation, feedback, and role positioning", "Submit Generative AI Portfolio Pack"],
];

const portfolioProjects = [
  {
    title: "AI Use-Case Map",
    proof: "Workflow map, use-case shortlist, value-risk score, and safe-use notes",
    outcome: "Choose practical GenAI use cases with clear boundaries",
  },
  {
    title: "Business Prompt Library",
    proof: "Prompt templates, examples, expected outputs, review rubric, and version notes",
    outcome: "Create reusable prompt systems instead of one-off chat outputs",
  },
  {
    title: "AI Research and Writing Workflow",
    proof: "Research brief, source notes, draft output, verification log, and final polished deliverable",
    outcome: "Use GenAI to support high-quality communication without inventing claims",
  },
  {
    title: "Structured AI Workflow",
    proof: "Input examples, structured output template, validation checklist, and approval process",
    outcome: "Turn messy inputs into reviewable business outputs",
  },
  {
    title: "Knowledge Assistant Prototype",
    proof: "Document set, Q&A examples, citation checks, evaluation notes, and failure-mode list",
    outcome: "Build grounded document Q&A workflows with citations",
  },
  {
    title: "Generative AI Portfolio Pack",
    proof: "Case studies, prompt library, tool comparison, responsible AI playbook, and interview walkthrough",
    outcome: "Present GenAI skills credibly for business and AI workflow roles",
  },
];

const submissionPattern = [
  "Business use case",
  "Input examples",
  "Prompt or workflow design",
  "Tool selection",
  "Output examples",
  "Human review steps",
  "Risk controls",
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

export default function GenerativeAICurriculum() {
  return (
    <section className="space-y-14">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950 text-white shadow-sm">
        <div className="grid gap-8 p-7 md:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-300">3-month practical certification plan</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
              Generative AI Certification
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              A twelve-week practical programme for using GenAI tools, prompt systems, copilots, structured outputs, document Q&A, and responsible AI workflows across business, content, operations, research, and productivity roles.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["12 weeks", "48 guided hours", "6 portfolio projects", "Prompting, tools, RAG, responsible AI"].map((item) => (
                <span key={item} className="rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { icon: BriefcaseBusiness, label: "Role readiness", text: "AI content, prompt specialist, AI operations, productivity, and workflow support roles" },
              { icon: Sparkles, label: "Practical workflows", text: "Learners build prompt libraries, research systems, structured workflows, and document assistants" },
              { icon: ShieldCheck, label: "Responsible use", text: "Every project includes redaction, verification, source awareness, human review, and AI-use declarations" },
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
          title="Build useful AI habits first, then turn them into repeatable business workflows."
          description="The 3-month structure keeps technical overhead light and focuses on practical prompt systems, tool selection, structured outputs, document assistants, workflow automation, and responsible AI use."
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
          title="Five phases from GenAI foundations to portfolio-ready workflows."
          description="Learners progress through safe AI use, prompt engineering, business copilots, multimodal tools, structured outputs, knowledge assistants, governance, and career-ready case studies."
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
                            GenAI workflow
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
          description="Each weekend turns GenAI concepts into a visible workflow, so learners finish the course with case studies rather than loose tool familiarity."
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
          title="Six projects that prove practical GenAI capability."
          description="Each submission shows workflow thinking, prompt design, tool choice, output quality, review steps, and responsible AI controls."
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
            icon: BookOpenCheck,
            title: "Make AI useful",
            text: "Learners focus on repeatable workflows that save time, improve communication, and produce reviewable outputs.",
          },
          {
            icon: FileText,
            title: "Show the evidence",
            text: "Every portfolio piece includes examples, review notes, risk controls, and a clear before-and-after workflow story.",
          },
          {
            icon: GitBranch,
            title: "Keep humans in charge",
            text: "The course trains learners to design AI workflows with verification, approval, escalation, and accountability built in.",
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
            Turn GenAI from casual tool use into repeatable professional workflows, with prompt systems, document assistants, structured outputs, governance habits, and a portfolio that shows exactly how the learner uses AI responsibly.
          </p>
        </div>
      </section>
    </section>
  );
}
