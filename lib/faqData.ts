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
      "Data Analytics tools: Excel / Google Sheets, SQL, Power BI / Tableau, Python, Statistics, and Business Analysis.\n\nData Analytics roles: Data Analyst, Business Analyst, Financial Analytics, Healthcare Analytics, and Junior Data Consultant.\n\nAgentic AI tools: Python and AI APIs, Prompt Engineering, Autonomous AI Agents, Workflow Automation, and real-world AI implementations.\n\nAgentic AI roles: AI Analyst, AI Automation Specialist, Junior AI Engineer, and AI Solutions Associate.",
  },
  {
    question: "Are industry projects included?",
    answer:
      "Yes. Both courses include industry-based projects and UK-aligned case studies to help you build a strong portfolio.",
  },
  {
    question: "Do you offer placement support?",
    answer:
      "Yes. We provide structured placement support, including job-ready training, CV and LinkedIn optimisation, interview preparation, mock interviews, job-search guidance, and application support.\n\nA 100% Placement Guarantee is available to eligible learners in selected batches, subject to the applicable programme agreement.",
  },
  {
    question: "What does 100% placement guarantee mean?",
    answer:
      "For selected batches, Brit Institute takes responsibility for placing eligible learners. If Brit Institute is unable to secure a placement in accordance with the applicable programme agreement, the learner will receive a 100% refund.\n\nTo remain eligible, learners must maintain at least 85% attendance throughout the programme and complete 100% of all projects and assignments.",
  },
  {
    question: "What are the registration fee and refund policy?",
    answer:
      "A one-time registration fee is required to confirm enrollment and reserve your seat.\n\nUnder the 45-Day Money-Back Guarantee, learners may attend classes for the first 30 days and, with a valid reason such as an unfulfilled programme commitment or a concern about course quality, request a 100% refund within the following 15 days.\n\nEligibility requires 100% class attendance and completion of all assignments during the initial 30 days. Failure to meet either requirement voids the guarantee.",
  },
  {
    question: "How are classes delivered, and what if I miss a session?",
    answer:
      "Classes are live instructor-led, and recordings are provided for revision.\n\nIf you miss a session, you can watch the recording and clarify doubts in upcoming classes.",
  },
  {
    question: "What mentor and career support will I receive?",
    answer:
      "You will receive mentor and doubt support during the course, followed by structured CV, LinkedIn, portfolio, interview and job-search preparation where included in your programme.",
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
    question: "What should a beginner look for in a data analytics course in the UK?",
    answer:
      "Look for a structured programme that teaches Excel, Power BI, SQL, Python and statistics from the foundations, includes reviewed portfolio projects, provides live support, and explains how learning connects to UK analyst roles. Brit Institute's programme is designed around those elements and also includes applied AI workflows.",
  },
  {
    question: "How long is the data analytics course at Brit Institute?",
    answer:
      "The Data Analytics and Gen AI certification program is 6 months long, with live online classes, recorded sessions, and mentored projects throughout.",
  },
  {
    question: "What salary can I expect after completing a data analytics course in the UK?",
    answer:
      "Data analyst salaries vary by experience, location, sector and the scope of the role. Review current vacancy data for your target location and treat broad salary ranges as guidance rather than a guaranteed outcome.",
  },
  {
    question: "What tools are taught in the data analytics course UK?",
    answer:
      "The course covers Excel, Power BI, SQL, Python, pandas, scikit-learn, OpenAI API workflows, GitHub, and responsible GenAI practices for modern data analyst work.",
  },
  {
    question: "Do I need a degree to join a data analytics course in the UK?",
    answer:
      "No degree is required. Brit Institute's data analytics course is open to career switchers, non-technical professionals, and anyone looking to build data skills for the UK job market.",
  },
  {
    question: "Does the data analytics course include job placement support?",
    answer:
      "Yes. The programme includes CV preparation for UK data analyst roles, interview coaching, portfolio review, job-search guidance and placement support under the applicable programme terms.",
  },
  {
    question: "How much does the data analytics course cost in the UK?",
    answer:
      "The current programme fee and available payment options are shown on the course and pricing pages. Speak with admissions for the terms that apply to your intake before enrolling.",
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
