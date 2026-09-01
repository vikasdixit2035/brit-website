import { SITE_STATS } from "@/lib/site";

export interface CourseSeoData {
  h1: string;
  subheadline: string;
  cohort: string;
  duration: string;
  canonicalPath: string;
  seoTitle: string;
  seoDescription: string;
  ogImage: string;
  updatedAt: string;
  trustLayer: {
    learnersTrained: string;
    placedOrTransitioned: string;
    toolsUsed: string;
  };
  careerOutcomes: {
    roles: string[];
    salary: string;
    demand: string | string[];
  };
  isForYou: string[];
  programmeOverview: {
    duration: string;
    format: string;
    level: string;
  };
  curriculum: string[];
  toolsCovered: string[];
  projects: string[];
  careerSupport: string[];
  pricing: {
    price: string;
    emi: boolean;
  };
  reviews: {
    aggregate: {
      ratingValue: number;
      reviewCount: number;
      bestRating?: number;
      worstRating?: number;
    };
    items: Array<{
      author: string;
      body: string;
      ratingValue: number;
      datePublished: string;
    }>;
  };
}

export const coursesData: Record<string, CourseSeoData> = {
  "data-analytics": {
    h1: "Data Analyst Course UK with AI & Placement Support",
    subheadline: "Build job-ready skills in Excel, SQL, Power BI, Python, statistics and applied AI through live training, portfolio projects and structured UK career support.",
    cohort: "Starting Soon",
    duration: "6 months",
    canonicalPath: "/courses/data-analytics",
    seoTitle: "Data Analytics Course UK with AI",
    seoDescription: "Build job-ready Excel, SQL, Power BI, Python and applied AI skills through live UK data analyst training, portfolio projects, interview preparation and placement support.",
    ogImage: "/og.png",
    updatedAt: "2026-04-13",
    trustLayer: {
      learnersTrained: SITE_STATS.learnersTrained,
      placedOrTransitioned: SITE_STATS.careerTransitions,
      toolsUsed: "Excel, Power BI, SQL, Python, ML basics, and GenAI workflows"
    },
    careerOutcomes: {
      roles: ["Data Analyst", "Business Analyst", "Financial Analytics", "Healthcare Analytics"],
      salary: "£28,000 – £55,000+",
      demand: ["Finance", "Retail", "SaaS", "Consulting", "IT", "Healthcare"]
    },
    isForYou: [
      "Non-tech professionals switching to data analytics",
      "Beginners starting a data analytics career",
      "Excel users upgrading to Power BI, SQL, Python, and AI-enabled workflows",
      "Anyone searching for a data analytics course UK with job-focused projects"
    ],
    programmeOverview: {
      duration: "6 months",
      format: "Live + hands-on",
      level: "Beginner-friendly"
    },
    curriculum: [
      "Excel for Data Analysis",
      "Power BI Dashboards and Semantic Models",
      "SQL and Advanced SQL",
      "Python with Applied GenAI Integration",
      "Statistics, Probability, and Decision Memos",
      "Machine Learning Basics and Responsible AI"
    ],
    toolsCovered: ["Excel", "Power BI", "SQL", "Python", "pandas", "scikit-learn", "OpenAI API", "GitHub"],
    projects: [
      "Operations KPI Tracker",
      "Executive BI Dashboard",
      "SQL Business Case Pack",
      "Analyst Copilot Mini-App",
      "Decision Memo",
      "Prediction or Segmentation Prototype",
      "Portfolio Repository + AI-Use Declaration",
      "Hiring-Ready Portfolio Pack"
    ],
    careerSupport: [
      "CV tailored for UK data analyst jobs",
      "Interview prep",
      "Portfolio review",
      "LinkedIn optimisation",
      "Mock interview sessions",
      "Targeted job application support"
    ],
    pricing: {
      price: "£3,499",
      emi: true
    },
    reviews: {
      aggregate: {
        ratingValue: 4.9,
        reviewCount: 42,
        bestRating: 5,
        worstRating: 1,
      },
      items: [
        {
          author: "Priya Sharma",
          body: "The analytics projects felt practical from week one. I used the dashboard work in interviews and moved into a reporting-focused analyst role with much more confidence.",
          ratingValue: 5,
          datePublished: "2026-02-14",
        },
        {
          author: "James Okonkwo",
          body: "I joined with Excel experience only and left comfortable with SQL, Tableau, and presenting insights. The mentor feedback on my portfolio was especially useful.",
          ratingValue: 5,
          datePublished: "2026-01-29",
        },
        {
          author: "Amina Begum",
          body: "The live support and structured roadmap helped me balance study with work. I could see how each module connected to real analyst tasks in UK job descriptions.",
          ratingValue: 4.8,
          datePublished: "2025-12-08",
        },
      ],
    }
  },
  "data-science": {
    h1: "Data Science, Machine Learning and Gen AI Certification Program",
    subheadline: "Build Python, statistics, SQL, machine learning, deep learning, GenAI, MLOps, and deployment skills through a 12-month portfolio-led programme.",
    cohort: "Starting Soon",
    duration: "12 months",
    canonicalPath: "/courses/data-science",
    seoTitle: "Data Science, Machine Learning and Gen AI Certification Program",
    seoDescription: "Learn Python, statistics, SQL, machine learning, deep learning, GenAI workflows, MLOps, model deployment, and portfolio-building through Brit Institute's data science course in the UK.",
    ogImage: "/hero-illustration.png",
    updatedAt: "2026-04-13",
    trustLayer: {
      learnersTrained: SITE_STATS.learnersTrained,
      placedOrTransitioned: SITE_STATS.careerTransitions,
      toolsUsed: "Python, ML, deep learning, GenAI, MLOps, and capstone projects"
    },
    careerOutcomes: {
      roles: ["Data Scientist", "Machine Learning Engineer", "AI Analyst", "Data Analyst (Advanced)"],
      salary: "£40,000 – £80,000+",
      demand: "High demand in AI, fintech, healthcare, SaaS"
    },
    isForYou: [
      "Graduates targeting data science and machine learning roles",
      "Developers moving into ML, GenAI, and applied AI product work",
      "Analysts upgrading from dashboards to modelling, prediction, and deployment",
      "Anyone searching for a data science course UK with portfolio and capstone focus"
    ],
    programmeOverview: {
      duration: "12 months",
      format: "Live + project-based",
      level: "Intermediate"
    },
    curriculum: [
      "Python, Data Foundations and Visualisation",
      "Statistics, SQL and Business Analytics",
      "Machine Learning Foundations",
      "Advanced ML, NLP and Deep Learning",
      "Applied GenAI, LLMs and RAG",
      "MLOps, Deployment, Capstone and Career Prep"
    ],
    toolsCovered: ["Python", "Jupyter", "NumPy", "pandas", "SQL", "Power BI", "scikit-learn", "TensorFlow", "OpenAI API", "GitHub", "Streamlit / Flask"],
    projects: [
      "Exploratory Analysis Notebook",
      "Prediction Model Benchmark",
      "Customer or Behaviour Segmentation",
      "Explainable ML Report",
      "Time Series Forecasting Dashboard",
      "Natural Language Processing Classifier",
      "Computer Vision Application",
      "LLM Data Science Assistant",
      "Production ML Deployment Pipeline",
      "End-to-End Data Science Capstone"
    ],
    careerSupport: [
      "Data science CV and LinkedIn positioning",
      "ML, statistics, and project interview prep",
      "GitHub portfolio and capstone review"
    ],
    pricing: {
      price: "£4,499",
      emi: true
    },
    reviews: {
      aggregate: {
        ratingValue: 4.8,
        reviewCount: 31,
        bestRating: 5,
        worstRating: 1,
      },
      items: [
        {
          author: "Sophie Williams",
          body: "The machine learning modules were challenging in the right way. I appreciated that every concept was tied back to a business problem instead of staying theoretical.",
          ratingValue: 4.9,
          datePublished: "2026-03-05",
        },
        {
          author: "Daniel Mensah",
          body: "My capstone project became the strongest part of my portfolio. The team also pushed me to explain model choices clearly, which helped during interviews.",
          ratingValue: 4.8,
          datePublished: "2026-01-18",
        },
        {
          author: "Ravi Patel",
          body: "The programme gave me structure across Python, statistics, and deployment. It felt like a serious path for moving from analytics into data science work.",
          ratingValue: 4.7,
          datePublished: "2025-11-27",
        },
      ],
    }
  },
  "ai-automation": {
    h1: "Agentic AI Certification Program",
    subheadline: "Learn prompt systems, Python AI APIs, RAG, vector search, function calling, tool-based agents, and business automation workflows through portfolio-ready builds.",
    cohort: "Starting Soon",
    duration: "4 months",
    canonicalPath: "/courses/ai-automation",
    seoTitle: "Agentic AI Certification Program",
    seoDescription: "Discover Brit Institute's practical Agentic AI Certification Program in the UK. Learn prompt engineering, Python AI APIs, RAG, vector databases, function calling, workflow automation, responsible AI, and career-ready projects.",
    ogImage: "/hero-illustration.png",
    updatedAt: "2026-04-13",
    trustLayer: {
      learnersTrained: SITE_STATS.learnersTrained,
      placedOrTransitioned: SITE_STATS.careerTransitions,
      toolsUsed: "RAG, AI APIs, vector search, agents, and workflow automation"
    },
    careerOutcomes: {
      roles: ["AI Specialist", "Automation Consultant", "AI Operations Executive", "AI Workflow Builder"],
      salary: "£35,000 – £75,000+",
      demand: "Growing demand across startups, agencies, enterprises"
    },
    isForYou: [
      "Professionals exploring AI specialist and automation careers",
      "Marketers, operators, analysts, and founders wanting practical AI workflows",
      "Beginners who want to build assistants, agents, and automations step by step",
      "Anyone searching for an Agentic AI course UK with portfolio-ready projects"
    ],
    programmeOverview: {
      duration: "4 months",
      format: "Practical + tool-based",
      level: "Beginner-friendly"
    },
    curriculum: [
      "AI and LLM Foundations",
      "Prompt Engineering for Workflows",
      "Python, APIs, and Structured Outputs",
      "RAG, Embeddings, and Vector Databases",
      "Function Calling and Agentic Workflows",
      "Deployment, GitHub Portfolio, and Career Prep"
    ],
    toolsCovered: ["ChatGPT", "OpenAI API", "Python", "JSON", "LangChain concepts", "ChromaDB / FAISS", "Zapier", "Make", "GitHub", "Streamlit / Flask"],
    projects: [
      "AI Use-Case Audit",
      "Business Prompt Library",
      "Structured Extraction Workflow",
      "Policy or Knowledge Q&A Assistant",
      "Business Automation System",
      "Agentic AI Portfolio Pack"
    ],
    careerSupport: [
      "AI portfolio and GitHub project review",
      "Use-case based interviews and project walkthroughs",
      "Freelance, consulting, and job guidance"
    ],
    pricing: {
      price: "£1,999",
      emi: true
    },
    reviews: {
      aggregate: {
        ratingValue: 4.9,
        reviewCount: 27,
        bestRating: 5,
        worstRating: 1,
      },
      items: [
        {
          author: "Kiran Patel",
          body: "This course made automation feel approachable. I built useful workflows quickly and started spotting repetitive tasks at work that I could actually improve.",
          ratingValue: 5,
          datePublished: "2026-02-22",
        },
        {
          author: "Noah Mensah",
          body: "I liked how practical the sessions were. We were not just watching demos; we were designing flows, testing tools, and understanding where automation can fail.",
          ratingValue: 4.9,
          datePublished: "2026-01-11",
        },
        {
          author: "Fatima Rahman",
          body: "The course helped me connect AI tools with real business operations. I now feel much more prepared to discuss automation ideas with my team.",
          ratingValue: 4.8,
          datePublished: "2025-12-15",
        },
      ],
    }
  },
  "gen-ai": {
    h1: "Generative AI Certification Program",
    subheadline: "Learn prompt engineering, GenAI tools, AI copilots, structured outputs, document Q&A, workflow automation, and responsible AI practices in 3 months.",
    cohort: "Starting Soon",
    duration: "3 months",
    canonicalPath: "/courses/gen-ai",
    seoTitle: "Generative AI Certification Program",
    seoDescription: "Explore Brit Institute's practical 3-month Generative AI Certification Program in the UK covering prompt engineering, AI tools, copilots, structured outputs, document Q&A, workflow automation, responsible AI, and portfolio projects.",
    ogImage: "/hero-illustration.png",
    updatedAt: "2026-04-16",
    trustLayer: {
      learnersTrained: SITE_STATS.learnersTrained,
      placedOrTransitioned: SITE_STATS.careerTransitions,
      toolsUsed: "Prompt systems, AI copilots, document Q&A, automation, and responsible AI"
    },
    careerOutcomes: {
      roles: ["AI Content Specialist", "Prompt Engineer", "AI Workflow Executive", "AI Productivity Specialist"],
      salary: "£30,000 – £60,000+",
      demand: "Growing demand across startups, marketing, ops, and product teams"
    },
    isForYou: [
      "Beginners exploring practical generative AI for work and career growth",
      "Professionals who want to work faster with AI copilots and prompt systems",
      "Founders, operators, marketers, and support teams adopting AI workflows",
      "Anyone searching for a 3-month Gen AI course with practical portfolio projects"
    ],
    programmeOverview: {
      duration: "3 months",
      format: "Live + practical labs",
      level: "Beginner-friendly"
    },
    curriculum: [
      "Generative AI Foundations and Safe Use",
      "Prompt Engineering and Business Prompt Systems",
      "GenAI Tools, Multimodal Workflows and Copilots",
      "Structured Outputs and Workflow Automation",
      "RAG, Document Q&A and Knowledge Assistants",
      "Responsible AI, Portfolio and Career Prep"
    ],
    toolsCovered: ["ChatGPT", "Claude", "Gemini", "Perplexity", "NotebookLM", "Microsoft Copilot concepts", "Zapier / Make concepts", "Google Workspace / Microsoft 365"],
    projects: [
      "AI Use-Case Map",
      "Business Prompt Library",
      "AI Research and Writing Workflow",
      "Structured AI Workflow",
      "Knowledge Assistant Prototype",
      "Generative AI Portfolio Pack"
    ],
    careerSupport: [
      "Generative AI portfolio guidance",
      "Prompt library and workflow case-study review",
      "Use-case based interview prep and role positioning"
    ],
    pricing: {
      price: "£1,200",
      emi: true
    },
    reviews: {
      aggregate: {
        ratingValue: 4.8,
        reviewCount: 24,
        bestRating: 5,
        worstRating: 1,
      },
      items: [
        {
          author: "Lauren Smith",
          body: "The prompting frameworks were immediately useful in my day-to-day work. I now have repeatable workflows instead of experimenting from scratch every time.",
          ratingValue: 4.9,
          datePublished: "2026-03-18",
        },
        {
          author: "Omar Khan",
          body: "I wanted a practical introduction to generative AI, and this delivered exactly that. The business use cases made it much easier to apply what I learned.",
          ratingValue: 4.8,
          datePublished: "2026-02-03",
        },
        {
          author: "Neha Verma",
          body: "The labs and feedback sessions gave me a clear way to improve. I came away with prompts and systems I can actually reuse across projects.",
          ratingValue: 4.7,
          datePublished: "2025-12-21",
        },
      ],
    }
  }
};
