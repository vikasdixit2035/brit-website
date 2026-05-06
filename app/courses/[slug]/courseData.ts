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
    h1: "Data Analyst and Gen AI certification program",
    subheadline: "Master SQL, Power BI, Tableau, dashboards, and AI tools through a practical data analytics course built for UK data analyst roles.",
    cohort: "Starting Soon",
    duration: "6 months",
    canonicalPath: "/courses/data-analytics",
    seoTitle: "Data Analyst and Gen AI certification program",
    seoDescription: "Join Brit Institute's practical data analytics course in the UK. Learn Excel, SQL, Power BI, Tableau, Python basics, Gen AI workflows, projects, and career support.",
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
      "Anyone searching for a data analytics course UK with job-focused projects"
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
    h1: "Data Science & Machine Learning Certification Program",
    subheadline: "Build real-world machine learning models and become job-ready for data science roles in the UK.",
    cohort: "Starting Soon",
    duration: "12 months",
    canonicalPath: "/courses/data-science",
    seoTitle: "Data Science & Machine Learning Certification Program",
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
    subheadline: "Learn agentic AI tools and automation systems to build intelligent workflows and future-ready careers.",
    cohort: "Starting Soon",
    duration: "4 months",
    canonicalPath: "/courses/ai-automation",
    seoTitle: "Agentic AI Certification Program",
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
    h1: "Generative AI Certificaation Program",
    subheadline: "Learn prompting, copilots, and real-world generative AI workflows you can use across business, operations, and content roles.",
    cohort: "Starting Soon",
    duration: "3 months",
    canonicalPath: "/courses/gen-ai",
    seoTitle: "Generative AI Certificaation Program",
    seoDescription: "Explore Brit Institute's practical Generative AI in the UK covering prompting, copilots, AI workflows, and business-ready applications.",
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
