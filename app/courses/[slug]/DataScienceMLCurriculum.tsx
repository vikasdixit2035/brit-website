import {
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Layers,
  LineChart,
  Presentation,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const moduleBalance = [
  { name: "Python and Data Foundations", weeks: "6 weeks", hours: "24 live hours", note: "Programming, notebooks, data handling, and analyst-grade coding habits" },
  { name: "Statistics, SQL and EDA", weeks: "8 weeks", hours: "32 live hours", note: "Evidence, querying, exploration, visualisation, and business interpretation" },
  { name: "Machine Learning Foundations", weeks: "12 weeks", hours: "48 live hours", note: "Supervised, unsupervised, preprocessing, pipelines, evaluation, and model selection" },
  { name: "Advanced ML and Deep Learning", weeks: "8 weeks", hours: "32 live hours", note: "Trees, ensembles, feature engineering, NLP, neural networks, and explainability" },
  { name: "GenAI, LLMs and MLOps", weeks: "8 weeks", hours: "32 live hours", note: "Prompting, embeddings, RAG, deployment, monitoring, and responsible AI workflows" },
  { name: "Capstone and Career", weeks: "6 weeks", hours: "24 live hours", note: "End-to-end portfolio project, GitHub evidence, interview defence, and career positioning" },
];

const phaseCards = [
  {
    phase: "Phase 1",
    title: "Python, Data Foundations and Visualisation",
    description:
      "Start with the practical coding and data handling skills needed for notebooks, analysis scripts, visualisation, and reproducible project work.",
    icon: Code2,
    accent: "text-blue-700",
    bg: "bg-blue-50",
    tracks: [
      {
        title: "Python for Data Science",
        duration: "Weeks 1-6",
        project: "Exploratory Analysis Notebook",
        items: [
          "Python environment setup, Jupyter notebooks, variables, data types, control flow, functions, and error handling",
          "Lists, dictionaries, tuples, sets, file handling, modules, virtual environments, and clean notebook structure",
          "NumPy arrays, pandas DataFrames, CSV/Excel/JSON I/O, filtering, sorting, grouping, joins, reshaping, and date handling",
          "Matplotlib, Seaborn, chart selection, visual storytelling, notebook commentary, and reproducible analysis habits",
        ],
        genAi:
          "Use GenAI as a coding coach for explanation and debugging while learners still test outputs, document assumptions, and explain code in their own words.",
      },
      {
        title: "Data Cleaning and Feature Readiness",
        duration: "Embedded in Weeks 4-8",
        project: "Clean Data Asset",
        items: [
          "Missing values, duplicates, outliers, type conversion, categorical cleanup, text cleanup, and date/time standardisation",
          "Data dictionaries, cleaning logs, data quality checks, validation rules, and analysis-ready datasets",
          "Feature creation, aggregation levels, leakage awareness, train/test thinking, and reusable transformation functions",
          "Project documentation with source notes, limitations, assumptions, and AI-use declarations",
        ],
        genAi:
          "Use AI to propose cleaning checks, draft data dictionaries, create QA checklists, and explain transformation logic for reviewers.",
      },
    ],
  },
  {
    phase: "Phase 2",
    title: "Statistics, SQL and Business Analytics",
    description:
      "Build the evidence layer: query data, explore patterns, understand uncertainty, and explain results in business language.",
    icon: Database,
    accent: "text-emerald-700",
    bg: "bg-emerald-50",
    tracks: [
      {
        title: "Statistics and Probability for Data Science",
        duration: "Weeks 7-10",
        project: "Statistical Decision Report",
        items: [
          "Descriptive statistics, distributions, spread, percentiles, sampling, bias, confidence intervals, and uncertainty",
          "Hypothesis testing, p-values, A/B tests, correlation vs causation, regression interpretation, and business significance",
          "Probability basics, Bayes thinking, conditional probability, distributions, and practical risk communication",
          "Experiment readouts, recommendation writing, charts, limitations, and stakeholder-facing explanation",
        ],
        genAi:
          "Use AI to translate statistical results into plain English, pressure-test wording, and generate alternative explanations after learners verify calculations.",
      },
      {
        title: "SQL, EDA and Analytics Storytelling",
        duration: "Weeks 11-14",
        project: "Analytics Case Study Pack",
        items: [
          "SELECT, WHERE, GROUP BY, HAVING, CASE, joins, subqueries, CTEs, window functions, and date/string functions",
          "EDA workflow, business questions, slicing and segmentation, cohort-style analysis, and metric validation",
          "Power BI or Python dashboards, visual design principles, stakeholder requirements, and narrative insight writing",
          "Readable SQL style, query documentation, output validation, and reproducible analysis handoff",
        ],
        genAi:
          "Use AI to convert business questions into query plans, explain SQL logic, draft insight summaries, and check analysis narratives for clarity.",
      },
    ],
  },
  {
    phase: "Phase 3",
    title: "Machine Learning Foundations",
    description:
      "Learn the modelling workflow from problem framing through preprocessing, training, evaluation, comparison, and responsible recommendation.",
    icon: BrainCircuit,
    accent: "text-violet-700",
    bg: "bg-violet-50",
    tracks: [
      {
        title: "Supervised Learning",
        duration: "Weeks 15-22",
        project: "Prediction Model Benchmark",
        items: [
          "Problem framing, target definition, baseline models, train/test split, cross-validation, leakage, and metric selection",
          "Regression models, classification models, logistic regression, decision trees, random forests, gradient boosting, and model comparison",
          "Preprocessing, encoding, scaling, imputation, pipelines, hyperparameter tuning, and reusable modelling workflows",
          "MAE, RMSE, ROC-AUC, precision, recall, F1, confusion matrix, calibration, thresholding, and business trade-offs",
        ],
        genAi:
          "Use AI to compare algorithm choices, draft experiment plans, explain metrics, and generate model comparison summaries for non-technical audiences.",
      },
      {
        title: "Unsupervised Learning and Feature Engineering",
        duration: "Weeks 23-26",
        project: "Customer or Behaviour Segmentation",
        items: [
          "Clustering, k-means, hierarchical clustering, dimensionality reduction, PCA, anomaly detection, and similarity thinking",
          "Feature engineering for numeric, categorical, date/time, text, behavioural, and aggregated data",
          "Segment profiling, validation, interpretability, stability checks, and actionable recommendation design",
          "Ethics, bias, proxy variables, fairness concerns, and when not to use machine learning",
        ],
        genAi:
          "Use AI to draft segment personas, explain clusters, create stakeholder summaries, and flag possible bias or misuse scenarios.",
      },
    ],
  },
  {
    phase: "Phase 4",
    title: "Advanced ML, NLP and Deep Learning",
    description:
      "Move beyond baseline models into more realistic data science work: ensembles, NLP, neural networks, explainability, and model risk.",
    icon: Layers,
    accent: "text-amber-700",
    bg: "bg-amber-50",
    tracks: [
      {
        title: "Advanced Modelling and Explainability",
        duration: "Weeks 27-30",
        project: "Explainable ML Report",
        items: [
          "Advanced feature engineering, model tuning, nested validation, class imbalance, sampling strategies, and error analysis",
          "Ensembles, boosting, model stacking concepts, time-aware validation, model robustness, and performance drift thinking",
          "Feature importance, permutation importance, SHAP-style explanations, partial dependence concepts, and model cards",
          "Communicating risk, limitations, fairness, interpretability, and readiness for pilot use",
        ],
        genAi:
          "Use AI to generate model cards, explain feature trade-offs, prepare stakeholder narratives, and create checklists for responsible model review.",
      },
      {
        title: "NLP, Deep Learning and Modern AI",
        duration: "Weeks 31-34",
        project: "Text Classification or NLP Insight Prototype",
        items: [
          "Text preprocessing, tokenisation concepts, TF-IDF, embeddings, classification, similarity search, and sentiment-style use cases",
          "Neural network foundations, tensors, training loops, overfitting, regularisation, optimisers, and evaluation",
          "Deep learning use cases across tabular, text, images, and time series at a practical literacy level",
          "Transformer concepts, attention, embeddings, foundation models, and where classical ML still beats deep learning",
        ],
        genAi:
          "Use GenAI to explain model behaviour, compare classical NLP with LLM workflows, and summarise text-model outcomes for stakeholders.",
      },
    ],
  },
  {
    phase: "Phase 5",
    title: "GenAI, MLOps, Deployment and Career Acceleration",
    description:
      "Finish by building AI-enabled data science products, deploying models, documenting governance, and turning projects into hiring proof.",
    icon: Rocket,
    accent: "text-rose-700",
    bg: "bg-rose-50",
    tracks: [
      {
        title: "Applied GenAI for Data Science",
        duration: "Weeks 35-40",
        project: "LLM Data Science Assistant",
        items: [
          "Prompt design, structured outputs, function calling, embeddings, retrieval augmented generation, and evaluation",
          "LLM-assisted EDA, feature explanation, SQL or Python helpers, model documentation, and insight generation workflows",
          "Vector search, document Q&A, RAG quality checks, prompt injection risks, redaction, and human review loops",
          "Responsible AI: transparency, data minimisation, security, fairness, accuracy, governance notes, and AI-use declarations",
        ],
        genAi:
          "Learners build an assistant that helps with a controlled data science task while logging data used, checks performed, and risks remaining.",
      },
      {
        title: "MLOps, Deployment and Capstone",
        duration: "Weeks 41-48",
        project: "End-to-End Data Science Capstone",
        items: [
          "Model packaging, APIs, Streamlit or Flask demos, batch scoring, environment variables, dependency files, and reproducible repositories",
          "Model monitoring concepts, drift, retraining triggers, experiment tracking, versioning, testing, and production-readiness checklists",
          "Capstone scoping, data acquisition, cleaning, modelling, evaluation, deployment demo, model card, and executive summary",
          "GitHub portfolio, README writing, architecture diagrams, CV positioning, interview defence, and stakeholder presentation",
        ],
        genAi:
          "Use AI to improve documentation, model cards, demo scripts, interview explanations, and executive summaries while keeping claims evidence-based.",
      },
    ],
  },
];

const weekPlan = [
  ["1", "Data science roles, workflow, tools, Python setup", "Jupyter, variables, data types, notebook hygiene", "Start Python notebook"],
  ["2", "Control flow, functions, errors, modules", "Lists, dictionaries, file handling, reusable code", "Build Python practice notebook"],
  ["3", "NumPy arrays and vectorised thinking", "pandas DataFrames, CSV/Excel/JSON I/O", "Load first analysis dataset"],
  ["4", "Filtering, grouping, aggregation, joins", "Missing values, duplicates, type conversion, dates", "Create cleaning log"],
  ["5", "Visualisation with Matplotlib and Seaborn", "Chart selection, EDA commentary, insight writing", "Build exploratory charts"],
  ["6", "Notebook storytelling and reproducibility", "Project review and AI-assisted documentation", "Submit Exploratory Analysis Notebook"],
  ["7", "Descriptive statistics, spread, distributions", "Sampling, bias, probability, uncertainty", "Start statistical report"],
  ["8", "Confidence intervals and experiment thinking", "Hypothesis testing, p-values, business significance", "Draft test interpretation"],
  ["9", "Correlation, causation, regression interpretation", "A/B readout lab and stakeholder memo writing", "Add statistical recommendation"],
  ["10", "Probability, Bayes thinking, risk communication", "Statistical report QA and presentation", "Submit Statistical Decision Report"],
  ["11", "SQL SELECT, WHERE, GROUP BY, HAVING, CASE", "Joins, subqueries, CTEs, validation", "Start analytics case schema"],
  ["12", "Window functions, date and string functions", "Business questions, cohorts, segmentation analysis", "Write case-study queries"],
  ["13", "EDA workflow and metric validation", "Dashboard or visual story build lab", "Create analytics narrative"],
  ["14", "SQL style, documentation, insight presentation", "Project review and AI-assisted executive summary", "Submit Analytics Case Study Pack"],
  ["15", "ML workflow, problem framing, target definition", "Train/test split, leakage, baselines, metrics", "Start modelling dataset"],
  ["16", "Preprocessing, imputation, encoding, scaling", "Pipelines and cross-validation", "Build reusable ML pipeline"],
  ["17", "Linear regression and regularisation concepts", "Regression metrics and error analysis", "Train first regression benchmark"],
  ["18", "Classification and logistic regression", "Confusion matrix, precision, recall, F1", "Train first classifier"],
  ["19", "Decision trees and random forests", "Feature importance and business explanation", "Compare tree-based model"],
  ["20", "Gradient boosting and model tuning", "Hyperparameter search and validation strategy", "Improve benchmark model"],
  ["21", "Thresholding, calibration, and trade-offs", "Model comparison summary for stakeholders", "Draft benchmark report"],
  ["22", "Supervised learning project lab", "Presentation, feedback, and model QA", "Submit Prediction Model Benchmark"],
  ["23", "Clustering, similarity, k-means", "Cluster profiling and validation", "Start segmentation project"],
  ["24", "Hierarchical clustering and PCA concepts", "Dimensionality reduction and visualisation", "Add segment exploration"],
  ["25", "Feature engineering for behavioural data", "Anomaly detection and stability checks", "Profile final segments"],
  ["26", "Bias, proxy variables, ethics, when not to use ML", "Recommendation writing and project review", "Submit Segmentation Project"],
  ["27", "Advanced feature engineering and imbalance", "Sampling strategies and robust validation", "Start explainable ML report"],
  ["28", "Ensembles, boosting, stacking concepts", "Time-aware validation and model drift thinking", "Improve advanced model"],
  ["29", "Explainability: permutation importance, SHAP concepts", "Model cards and fairness review", "Draft model card"],
  ["30", "Model risk, pilot-readiness, stakeholder narrative", "Explainable ML presentation and feedback", "Submit Explainable ML Report"],
  ["31", "NLP workflow and text preprocessing", "TF-IDF, embeddings, text classification", "Start NLP prototype"],
  ["32", "Similarity search and text insight use cases", "Evaluation and error analysis for text models", "Train text model"],
  ["33", "Neural network foundations and deep learning literacy", "Training loops, overfitting, regularisation", "Compare neural baseline"],
  ["34", "Transformers, attention, foundation models", "NLP prototype review and AI-assisted summary", "Submit NLP Insight Prototype"],
  ["35", "GenAI for data science workflows", "Prompt design, structured outputs, safe data handling", "Start LLM assistant"],
  ["36", "Function calling and data science tool workflows", "AI helpers for SQL, Python, metrics, and model docs", "Add tool workflow"],
  ["37", "Embeddings and vector search", "RAG architecture and document Q&A", "Add retrieval workflow"],
  ["38", "RAG evaluation, citations, prompt injection risks", "Human review, confidence, refusal, and escalation", "Evaluate LLM assistant"],
  ["39", "Responsible AI governance and AI-use declarations", "Security, fairness, accuracy, transparency checklist", "Draft governance note"],
  ["40", "LLM assistant demo and project review", "Presentation, feedback, and risk review", "Submit LLM Data Science Assistant"],
  ["41", "MLOps foundations, packaging, dependency files", "APIs, batch scoring, Streamlit or Flask demos", "Start capstone repository"],
  ["42", "Model versioning and experiment tracking concepts", "Testing, validation, and reproducibility checks", "Build capstone pipeline"],
  ["43", "Monitoring concepts, drift, retraining triggers", "Production-readiness checklist", "Add monitoring plan"],
  ["44", "Capstone scoping and data acquisition review", "Cleaning, EDA, feature engineering lab", "Prepare capstone dataset"],
  ["45", "Capstone modelling and benchmark comparison", "Model tuning, explainability, and risk review", "Choose final capstone model"],
  ["46", "Deployment demo build lab", "Model card, executive summary, and GitHub README", "Package capstone demo"],
  ["47", "Portfolio storytelling and interview defence", "CV, LinkedIn, GitHub optimisation", "Prepare final presentation"],
  ["48", "Capstone demo day", "Mock interview, feedback, and next-step plan", "Submit End-to-End Data Science Capstone"],
];

const portfolioProjects = [
  {
    title: "Exploratory Analysis Notebook",
    proof: "Clean notebook, data dictionary, charts, findings, assumptions, and AI-use notes",
    outcome: "Analyse raw data clearly and communicate early insights",
  },
  {
    title: "Prediction Model Benchmark",
    proof: "Pipeline, baseline models, metrics table, error analysis, and stakeholder summary",
    outcome: "Frame and evaluate supervised ML problems responsibly",
  },
  {
    title: "Customer or Behaviour Segmentation",
    proof: "Feature table, clustering notebook, segment profiles, validation notes, and recommendations",
    outcome: "Use unsupervised learning to create actionable segments",
  },
  {
    title: "Explainable ML Report",
    proof: "Advanced model, feature explanations, model card, fairness notes, and pilot-readiness view",
    outcome: "Explain model behaviour, risks, and limitations to stakeholders",
  },
  {
    title: "LLM Data Science Assistant",
    proof: "Notebook or app, prompt templates, structured outputs, RAG or tool workflow, and governance note",
    outcome: "Use GenAI inside data science workflows with controls",
  },
  {
    title: "End-to-End Data Science Capstone",
    proof: "GitHub repo, README, deployed demo or walkthrough, model card, slides, and interview defence",
    outcome: "Show full data science delivery from problem to model to demo",
  },
];

const submissionPattern = [
  "Business problem",
  "Data source and ethics note",
  "Cleaning and EDA log",
  "Feature strategy",
  "Model experiments",
  "Evaluation and trade-offs",
  "Deployment or demo",
  "Model card and AI-use declaration",
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

export default function DataScienceMLCurriculum() {
  return (
    <section className="space-y-14">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950 text-white shadow-sm">
        <div className="grid gap-8 p-7 md:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-300">Data science, ML and GenAI certification plan</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
              Data Science, Machine Learning and GenAI Certification
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              A twelve-month project-led programme covering Python, statistics, SQL, machine learning, deep learning, GenAI, deployment, MLOps, and portfolio presentation for UK data science roles.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["48 weeks", "192 guided hours", "6 portfolio projects", "ML, GenAI, MLOps, capstone"].map((item) => (
                <span key={item} className="rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { icon: BriefcaseBusiness, label: "Role readiness", text: "Data scientist, ML engineer, advanced analyst, AI analyst, and modelling-focused roles" },
              { icon: Sparkles, label: "GenAI-enhanced workflow", text: "Learners use LLMs for coding support, documentation, structured outputs, RAG, and reviewed insight generation" },
              { icon: ShieldCheck, label: "Responsible modelling", text: "Model cards, fairness checks, leakage prevention, data ethics, and human review are part of every major project" },
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
          title="Build from Python foundations into ML, GenAI, deployment, and capstone proof."
          description="The course spends enough time on statistics and SQL to support evidence-based modelling, then goes deeper into ML workflows, advanced modelling, GenAI, MLOps, and portfolio delivery."
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
          title="Five phases from Python to deployed data science products."
          description="Learners progress through data foundations, evidence and analytics, core ML, advanced modelling, GenAI, MLOps, capstone delivery, and interview-ready portfolio storytelling."
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
          title="Saturday concepts, Sunday labs, capstone progress every week."
          description="The weekend rhythm keeps the programme manageable across twelve months while moving learners from foundations into a serious end-to-end data science portfolio."
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
          title="Six projects that show complete data science delivery."
          description="The programme produces evidence across EDA, statistics, supervised ML, unsupervised ML, explainability, GenAI, deployment, and a final capstone."
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
            title: "Model from evidence",
            text: "Learners start every model with a business question, data quality review, baseline, metric choice, and clear trade-off explanation.",
          },
          {
            icon: LineChart,
            title: "Explain, not just predict",
            text: "Every major ML project includes model interpretation, error analysis, fairness notes, limitations, and stakeholder-ready language.",
          },
          {
            icon: GitBranch,
            title: "Ship portfolio proof",
            text: "Capstone work is packaged with GitHub documentation, model cards, demo artefacts, and an interview-style project defence.",
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
            Take learners from Python and statistics into real machine learning, GenAI-enabled workflows, deployment, and a defensible capstone that proves they can think, build, explain, and improve models responsibly.
          </p>
        </div>
      </section>
    </section>
  );
}
