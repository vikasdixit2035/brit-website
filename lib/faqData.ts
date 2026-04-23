export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What is Data Analytics?",
    answer:
      "Data Analytics is the process of collecting, cleaning, and analysing data to help organisations make data-driven business decisions using tools like Excel, SQL, Power BI, and Python.",
  },
  {
    question: "What is Agentic AI?",
    answer:
      "Agentic AI focuses on building autonomous AI agents that can independently make decisions, automate workflows, and interact with systems using AI models.",
  },
  {
    question: "What is the difference between Data Analytics and Agentic AI?",
    answer:
      "Data Analytics focuses on analysing historical and current data to generate insights. Agentic AI focuses on creating intelligent systems that act, decide, and automate tasks.",
  },
  {
    question: "Who can join these programmes?",
    answer:
      "Freshers, working professionals, career switchers, and learners from both non-technical and technical backgrounds can apply.",
  },
  {
    question: "Do I need coding experience?",
    answer:
      "Data Analytics: Basic Python and SQL are taught from scratch.\n\nAgentic AI: Introductory to intermediate coding is required, and it is fully covered during training.",
  },
  {
    question: "Which tools and roles will I learn?",
    answer:
      "Data Analytics tools: Excel / Google Sheets, SQL, Power BI / Tableau, Python, Statistics, and Business Analysis.\n\nData Analytics roles: Data Analyst, Business Analyst, Reporting Analyst, and Junior Data Consultant.\n\nAgentic AI tools: Python and AI APIs, Prompt Engineering, Autonomous AI Agents, Workflow Automation, and real-world AI implementations.\n\nAgentic AI roles: AI Analyst, AI Automation Specialist, Junior AI Engineer, and AI Solutions Associate.",
  },
  {
    question: "Are industry projects included?",
    answer:
      "Yes. Both courses include industry-based projects and UK-aligned case studies to help you build a strong portfolio.",
  },
  {
    question: "Do you offer placement support?",
    answer:
      "Yes. We provide a 100% Placement Guarantee and end-to-end placement support until eligible learners are placed.\n\nThis includes job-ready training, resume and LinkedIn optimisation, interview preparation, mock interviews, and continuous job opportunities until placement.",
  },
  {
    question: "What does 100% placement guarantee mean?",
    answer:
      "It means we stay with you until you secure a job. You are not left alone after course completion, and our dedicated placement team keeps working on your profile.\n\nPlacement support is subject to course completion, performance, and participation in placement activities.",
  },
  {
    question: "Are Pay After Placement, registration fee, and refunds available?",
    answer:
      "Eligible candidates can opt for Pay After Placement, allowing them to pay fees after securing employment as per agreement terms.\n\nA one-time registration fee is required to confirm enrollment and block your seat.\n\nRefunds are processed according to the organisation's internal refund policy and may take 30 to 45 working days.",
  },
  {
    question: "How are classes delivered, and what if I miss a session?",
    answer:
      "Classes are live instructor-led, and recordings are provided for revision.\n\nIf you miss a session, you can watch the recording and clarify doubts in upcoming classes.",
  },
  {
    question: "What support will I receive, and what salary can I expect?",
    answer:
      "You will receive dedicated mentor and doubt support throughout the course.\n\nUK entry-level Data Analyst salary expectation: £28,000 to £55,000 per year, depending on skills, interview performance, and role.",
  },
];

// ── Data Analytics Course – targeted FAQ for UK search queries ──────────────
export const dataAnalyticsFaqItems: FaqItem[] = [
  {
    question: "Is Brit Institute's data analytics course available in the UK?",
    answer:
      "Yes. Brit Institute's data analytics course is designed specifically for learners in the UK. The programme is delivered online via live instructor-led sessions, so you can join from anywhere in the United Kingdom.",
  },
  {
    question: "What is the best data analytics course in the UK for beginners?",
    answer:
      "Brit Institute offers a beginner-friendly Data Analytics with Generative AI programme that covers Excel, SQL, Power BI, Tableau, and Python from scratch. It includes hands-on projects and end-to-end career support tailored for the UK job market.",
  },
  {
    question: "How long is the data analytics course at Brit Institute?",
    answer:
      "The Data Analytics with Generative AI programme is 6 months long, with live online classes, recorded sessions, and mentored projects throughout.",
  },
  {
    question: "What salary can I expect after completing a data analytics course in the UK?",
    answer:
      "UK data analyst salaries typically range from £28,000 to £55,000+ depending on experience, location, and sector. Brit Institute graduates have transitioned into roles in finance, retail, SaaS, and consulting.",
  },
  {
    question: "What tools are taught in the data analytics course UK?",
    answer:
      "The course covers Excel, SQL, Power BI, Tableau, Python (basic), and ChatGPT/Generative AI for data workflows — all tools actively used in UK data analyst job descriptions.",
  },
  {
    question: "Do I need a degree to join a data analytics course in the UK?",
    answer:
      "No degree is required. Brit Institute's data analytics course is open to career switchers, non-technical professionals, and anyone looking to build data skills for the UK job market.",
  },
  {
    question: "Does the data analytics course include job placement support?",
    answer:
      "Yes. The programme includes CV preparation for UK data analyst roles, interview coaching, portfolio review, and ongoing placement support until you secure a relevant position.",
  },
  {
    question: "How much does the data analytics course cost in the UK?",
    answer:
      "The Data Analytics with Generative AI programme is priced at £3,499. EMI payment options are available, and eligible learners may qualify for Pay After Placement arrangements.",
  },
];

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

// Dedicated FAQPage schema for /courses/data-analytics
// Targets "data analytics course UK" rich snippets in Google Search
export const dataAnalyticsFaqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: dataAnalyticsFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
