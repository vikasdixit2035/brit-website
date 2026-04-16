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
    demand: string;
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
}

export const coursesData: Record<string, CourseSeoData> = {
  "data-analytics": {
    h1: "Data Analytics Course with Generative AI Program",
    subheadline: "Master data analytics, dashboards, and AI tools to become job-ready for high-demand data analyst roles in the UK.",
    cohort: "Starting Soon",
    duration: "6 months",
    canonicalPath: "/courses/data-analytics",
    seoTitle: "Data Analytics Course in the UK",
    seoDescription: "Explore Brit Institute's practical data analytics course in the UK covering SQL, dashboards, AI tools, and career support for analyst roles.",
    ogImage: "/hero-illustration.png",
    updatedAt: "2026-04-13",
    trustLayer: {
      learnersTrained: SITE_STATS.learnersTrained,
      placedOrTransitioned: SITE_STATS.careerTransitions,
      toolsUsed: "Tools used in real UK data analyst jobs"
    },
    careerOutcomes: {
      roles: ["Data Analyst", "Business Analyst", "Reporting Analyst"],
      salary: "£28,000 – £55,000+",
      demand: "Strong demand across finance, retail, SaaS, consulting"
    },
    isForYou: [
      "Non-tech professionals switching to data analytics",
      "Beginners starting a data analytics career",
      "Excel users upgrading to modern tools",
      "Anyone searching for a data analytics course UK with job outcomes"
    ],
    programmeOverview: {
      duration: "6 months",
      format: "Live + hands-on",
      level: "Beginner-friendly"
    },
    curriculum: [
      "Data Analysis Foundations",
      "Excel to SQL Transition",
      "Power BI / Tableau Dashboards",
      "Generative AI for Data Workflows"
    ],
    toolsCovered: ["Excel", "SQL", "Power BI", "Tableau", "Python (basic)", "ChatGPT"],
    projects: [
      "Sales dashboard",
      "Business reporting system",
      "AI-assisted data insights"
    ],
    careerSupport: [
      "CV tailored for UK data analyst jobs",
      "Interview prep",
      "Portfolio review"
    ],
    pricing: {
      price: "£3,499",
      emi: true
    }
  },
  "data-science": {
    h1: "Data Science Course in the UK with Machine Learning",
    subheadline: "Build real-world machine learning models and become job-ready for data science roles in the UK.",
    cohort: "Starting Soon",
    duration: "12 months",
    canonicalPath: "/courses/data-science",
    seoTitle: "Data Science Course in the UK",
    seoDescription: "Learn machine learning, Python, model deployment, and portfolio-building through Brit Institute's data science course in the UK.",
    ogImage: "/hero-illustration.png",
    updatedAt: "2026-04-13",
    trustLayer: {
      learnersTrained: SITE_STATS.learnersTrained,
      placedOrTransitioned: SITE_STATS.careerTransitions,
      toolsUsed: "Industry-aligned ML projects"
    },
    careerOutcomes: {
      roles: ["Data Scientist", "Machine Learning Engineer", "Data Analyst (Advanced)"],
      salary: "£40,000 – £80,000+",
      demand: "High demand in AI, fintech, healthcare, SaaS"
    },
    isForYou: [
      "Graduates targeting data science roles",
      "Developers moving into machine learning",
      "Analysts upgrading to ML",
      "Anyone searching for a data science course UK with placement focus"
    ],
    programmeOverview: {
      duration: "12 months",
      format: "Live + project-based",
      level: "Intermediate"
    },
    curriculum: [
      "Python for Data Science",
      "Statistics & Data Modelling",
      "Machine Learning Algorithms",
      "Model Deployment"
    ],
    toolsCovered: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Jupyter"],
    projects: [
      "Predictive models",
      "Recommendation systems",
      "ML deployment case"
    ],
    careerSupport: [
      "Data science CV building",
      "ML interview prep",
      "GitHub portfolio guidance"
    ],
    pricing: {
      price: "£4,499",
      emi: true
    }
  },
  "ai-automation": {
    h1: "Agentic AI Course in the UK with Real-World Applications",
    subheadline: "Learn agentic AI tools and automation systems to build intelligent workflows and future-ready careers.",
    cohort: "Starting Soon",
    duration: "4 months",
    canonicalPath: "/courses/ai-automation",
    seoTitle: "Agentic AI Course in the UK",
    seoDescription: "Discover Brit Institute's practical agentic AI course in the UK focused on tools, workflows, automation systems, and career-ready projects.",
    ogImage: "/hero-illustration.png",
    updatedAt: "2026-04-13",
    trustLayer: {
      learnersTrained: SITE_STATS.learnersTrained,
      placedOrTransitioned: SITE_STATS.careerTransitions,
      toolsUsed: "Real-world AI use cases"
    },
    careerOutcomes: {
      roles: ["AI Specialist", "Automation Consultant", "AI Operations Executive"],
      salary: "£35,000 – £75,000+",
      demand: "Growing demand across startups, agencies, enterprises"
    },
    isForYou: [
      "Professionals exploring AI careers",
      "Marketers/ops wanting automation",
      "Beginners entering AI field",
      "Anyone searching for an AI course UK for practical skills"
    ],
    programmeOverview: {
      duration: "4 months",
      format: "Practical + tool-based",
      level: "Beginner-friendly"
    },
    curriculum: [
      "AI Foundations",
      "Generative AI Tools",
      "Automation Systems",
      "Workflow Design"
    ],
    toolsCovered: ["ChatGPT", "Zapier", "Make", "AI APIs", "Automation tools"],
    projects: [
      "AI workflow automation",
      "Chatbot systems",
      "Business automation setup"
    ],
    careerSupport: [
      "AI portfolio building",
      "Use-case based interviews",
      "Freelance + job guidance"
    ],
    pricing: {
      price: "£1,999",
      emi: true
    }
  },
  "gen-ai": {
    h1: "Generative AI Course in the UK for Practical Business Use Cases",
    subheadline: "Learn prompting, copilots, and real-world generative AI workflows you can use across business, operations, and content roles.",
    cohort: "Starting Soon",
    duration: "3 months",
    canonicalPath: "/courses/gen-ai",
    seoTitle: "Generative AI Course in the UK",
    seoDescription: "Explore Brit Institute's practical Generative AI course in the UK covering prompting, copilots, AI workflows, and business-ready applications.",
    ogImage: "/hero-illustration.png",
    updatedAt: "2026-04-16",
    trustLayer: {
      learnersTrained: SITE_STATS.learnersTrained,
      placedOrTransitioned: SITE_STATS.careerTransitions,
      toolsUsed: "Practical Gen AI workflows"
    },
    careerOutcomes: {
      roles: ["AI Content Specialist", "Prompt Engineer", "AI Workflow Executive"],
      salary: "£30,000 – £60,000+",
      demand: "Growing demand across startups, marketing, ops, and product teams"
    },
    isForYou: [
      "Beginners exploring practical generative AI",
      "Professionals who want to work faster with AI copilots",
      "Founders and operators adopting AI workflows",
      "Anyone searching for a Gen AI course with practical use cases"
    ],
    programmeOverview: {
      duration: "3 months",
      format: "Live + practical labs",
      level: "Beginner-friendly"
    },
    curriculum: [
      "Prompt Engineering Foundations",
      "Generative AI Tools & Copilots",
      "Content and Workflow Automation",
      "Use Cases for Business Teams"
    ],
    toolsCovered: ["ChatGPT", "Claude", "Gemini", "Perplexity", "NotebookLM"],
    projects: [
      "AI research workflow",
      "Content copilot setup",
      "Business prompt library"
    ],
    careerSupport: [
      "AI portfolio guidance",
      "Prompt case-study review",
      "Use-case based interview prep"
    ],
    pricing: {
      price: "£1,200",
      emi: true
    }
  }
};
