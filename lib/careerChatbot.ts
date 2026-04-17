"use client";

export type ChatbotStage = "S0" | "CONTACT" | "S1" | "S2" | "S3" | "S4" | "S5" | "S6" | "S7";
export type ChatQuestionType = "single" | "multi" | "text" | "phone" | "number";

export interface RoleOption {
  id: string;
  label: string;
  icon: "bar" | "briefcase" | "spark" | "report" | "bot";
}

export interface GapItem {
  id: string;
  label: string;
}

export interface ChatOption {
  value: string;
  label: string;
  note?: string;
}

export interface PhoneAnswer {
  countryCode: string;
  number: string;
}

export interface AssessmentAnswers {
  motivation?: string;
  personality?: string;
  name?: string;
  phone?: PhoneAnswer;
  location?: string;
  countryIntent?: string;
  profileType?: string;
  experience?: string;
  currentSalary?: string;
  sql?: string;
  excel?: string;
  tools?: string[];
  projects?: string;
  targetRole?: string;
  timeline?: string;
  commitment?: string;
}

export interface ChatQuestion {
  stepId: string;
  id: keyof AssessmentAnswers;
  stage: ChatbotStage;
  step: number;
  prompt: string;
  type: ChatQuestionType;
  placeholder?: string;
  optional?: boolean;
  options?: ChatOption[];
  buttonLabel?: string;
}

export interface AssessmentResult {
  candidateName: string;
  hiringProbability: {
    low: number;
    high: number;
    midpoint: number;
  };
  salary: {
    low: number;
    high: number;
    nextLevel: number;
  };
  topRoles: RoleOption[];
  positioning: string;
  timeline: string;
  gaps: GapItem[];
  insight: string;
  intro: string;
  summary: string;
}

export const CAREER_CHATBOT_SOURCE = "Brit Institute Career Chatbot";

export const CAREER_STEPS = 8;

export const CHAT_QUESTIONS: ChatQuestion[] = [
  {
    stepId: "S0-Q1",
    id: "motivation",
    stage: "S0",
    step: 1,
    prompt: "Hey, before we get into numbers... what's making you consider data/tech?",
    type: "single",
    options: [
      { value: "salary", label: "Salary" },
      { value: "abroad", label: "Abroad" },
      { value: "switch", label: "Career switch" },
      { value: "growth", label: "Growth" },
      { value: "exploring", label: "Exploring" },
    ],
  },
  {
    stepId: "S0-Q2",
    id: "personality",
    stage: "S0",
    step: 1,
    prompt: "What sounds more like you?",
    type: "single",
    options: [
      { value: "numbers", label: "Numbers" },
      { value: "problem-solving", label: "Problem-solving" },
      { value: "tech-curiosity", label: "Tech curiosity" },
      { value: "not-sure", label: "Not sure" },
    ],
  },
  {
    stepId: "S0-Q3",
    id: "name",
    stage: "CONTACT",
    step: 2,
    prompt: "What should I call you?",
    type: "text",
    placeholder: "Type your name",
    buttonLabel: "Continue",
  },
  {
    stepId: "S0-Q4",
    id: "phone",
    stage: "CONTACT",
    step: 2,
    prompt: "I'm generating a personalised roadmap... Where should I send it?",
    type: "phone",
    placeholder: "Phone number",
    buttonLabel: "Share number",
  },
  {
    stepId: "S1-Q1",
    id: "location",
    stage: "S1",
    step: 3,
    prompt: "Where are you currently based?",
    type: "single",
    options: [
      { value: "uk", label: "UK" },
      { value: "outside-uk", label: "Outside UK" },
    ],
  },
  {
    stepId: "S1-Q2",
    id: "countryIntent",
    stage: "S1",
    step: 3,
    prompt: "Are you specifically aiming for the UK?",
    type: "single",
    options: [
      { value: "uk", label: "UK" },
      { value: "open", label: "Open" },
      { value: "compare", label: "Not sure" },
      { value: "local", label: "Not abroad" },
    ],
  },
  {
    stepId: "S2-Q1",
    id: "profileType",
    stage: "S2",
    step: 4,
    prompt: "What best describes your situation?",
    type: "single",
    options: [
      { value: "student", label: "Student" },
      { value: "non-data", label: "Non-data" },
      { value: "data", label: "Data" },
      { value: "not-working", label: "Not working" },
    ],
  },
  {
    stepId: "S2-Q2",
    id: "experience",
    stage: "S2",
    step: 4,
    prompt: "Years of experience?",
    type: "number",
    placeholder: "0-1 / 1-3 / 3-5 / 5+",
    buttonLabel: "Save",
  },
  {
    stepId: "S2-Q3",
    id: "currentSalary",
    stage: "S2",
    step: 4,
    prompt: "Current salary (optional)?",
    type: "text",
    placeholder: "Enter a range",
    buttonLabel: "Continue",
    optional: true,
  },
  {
    stepId: "S3-Q1",
    id: "sql",
    stage: "S3",
    step: 5,
    prompt: "SQL experience?",
    type: "single",
    options: [
      { value: "none", label: "None" },
      { value: "basics", label: "Basics" },
      { value: "projects", label: "Projects" },
      { value: "work", label: "Work" },
    ],
  },
  {
    stepId: "S3-Q2",
    id: "excel",
    stage: "S3",
    step: 5,
    prompt: "Excel/Data level?",
    type: "single",
    options: [
      { value: "basic", label: "Basic" },
      { value: "pivot", label: "Pivot" },
      { value: "dashboard", label: "Dashboard" },
      { value: "advanced", label: "Advanced" },
    ],
  },
  {
    stepId: "S3-Q3",
    id: "tools",
    stage: "S3",
    step: 5,
    prompt: "Tools used?",
    type: "multi",
    buttonLabel: "Continue",
    options: [
      { value: "python", label: "Python" },
      { value: "power-bi", label: "Power BI" },
      { value: "tableau", label: "Tableau" },
      { value: "google-sheets", label: "Google Sheets" },
      { value: "statistics", label: "Statistics" },
      { value: "ai-tools", label: "Gen AI tools" },
    ],
  },
  {
    stepId: "S3-Q4",
    id: "projects",
    stage: "S3",
    step: 5,
    prompt: "Projects built?",
    type: "single",
    options: [
      { value: "none", label: "None" },
      { value: "1-2", label: "1-2 projects" },
      { value: "3+", label: "3+ projects" },
    ],
  },
  {
    stepId: "S4-Q1",
    id: "targetRole",
    stage: "S4",
    step: 6,
    prompt: "Target role?",
    type: "single",
    options: [
      { value: "data", label: "Data Analyst" },
      { value: "business", label: "Business Analyst" },
      { value: "gen-ai", label: "Gen AI" },
      { value: "not-sure", label: "Not sure" },
    ],
  },
  {
    stepId: "S4-Q2",
    id: "timeline",
    stage: "S4",
    step: 6,
    prompt: "Timeline?",
    type: "single",
    options: [
      { value: "1-3", label: "1-3 months" },
      { value: "3-6", label: "3-6 months" },
      { value: "6-12", label: "6-12 months" },
      { value: "exploring", label: "Still exploring" },
    ],
  },
  {
    stepId: "S4-Q3",
    id: "commitment",
    stage: "S4",
    step: 6,
    prompt: "Commitment level?",
    type: "single",
    options: [
      { value: "low", label: "Low" },
      { value: "medium", label: "Medium" },
      { value: "high", label: "High" },
    ],
  },
];

export const OBJECTION_HANDLING = [
  {
    question: "Will I actually get interviews?",
    answer: "Yes, if we close your practical gaps and build a project-led CV. Your current profile is not far off, but it needs better market proof.",
  },
  {
    question: "Do I need strong coding skills?",
    answer: "Not for every role. For analyst and reporting tracks, strong SQL, Excel, dashboards, and business thinking matter more than heavy coding.",
  },
  {
    question: "Can I do this from a non-tech background?",
    answer: "Absolutely. Career switchers often do well when they connect domain experience with practical analytics projects and a focused roadmap.",
  },
  {
    question: "How long will this take?",
    answer: "That depends on your commitment and current skill base. We use your answers to estimate a practical, role-focused timeline rather than a generic promise.",
  },
  {
    question: "Is it worth it?",
    answer: "It becomes worth it when the path is realistic, salary-linked, and matched to your starting point. That is exactly what this report is built to show.",
  },
];

const ROLE_LIBRARY: Record<string, RoleOption[]> = {
  data: [
    { id: "data-analyst", label: "Data Analyst", icon: "bar" },
    { id: "junior-data-analyst", label: "Junior Data Analyst", icon: "briefcase" },
    { id: "reporting-analyst", label: "Reporting Analyst", icon: "report" },
    { id: "bi-support", label: "BI Support Roles", icon: "spark" },
  ],
  business: [
    { id: "business-analyst", label: "Business Analyst", icon: "briefcase" },
    { id: "reporting-analyst", label: "Reporting Analyst", icon: "report" },
    { id: "operations-analyst", label: "Operations Analyst", icon: "bar" },
    { id: "data-analyst", label: "Data Analyst", icon: "spark" },
  ],
  "gen-ai": [
    { id: "gen-ai-support", label: "Gen AI Support Roles", icon: "bot" },
    { id: "prompt-ops", label: "Prompt Operations", icon: "spark" },
    { id: "knowledge-assistant", label: "AI Knowledge Assistant", icon: "report" },
    { id: "data-analyst", label: "Data Analyst", icon: "bar" },
  ],
  "not-sure": [
    { id: "data-analyst", label: "Data Analyst", icon: "bar" },
    { id: "business-analyst", label: "Business Analyst", icon: "briefcase" },
    { id: "reporting-analyst", label: "Reporting Analyst", icon: "report" },
    { id: "gen-ai-support", label: "Gen AI Support Roles", icon: "bot" },
  ],
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function normalizeYears(raw: string | undefined) {
  if (!raw) return 0;
  const match = raw.match(/(\d+(\.\d+)?)/);
  return match ? Number(match[1]) : 0;
}

function parseSalary(raw: string | undefined) {
  if (!raw) return 0;
  const numeric = raw.replace(/,/g, "").match(/(\d{2,6})/);
  return numeric ? Number(numeric[1]) : 0;
}

function capitalizeName(name?: string) {
  if (!name?.trim()) return "there";
  return name
    .trim()
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function buildGaps(answers: AssessmentAnswers) {
  const gaps: GapItem[] = [];

  if (answers.projects === "none") {
    gaps.push({ id: "portfolio", label: "Portfolio missing" });
  }

  if (answers.sql === "none" || answers.sql === "basics") {
    gaps.push({ id: "sql-gap", label: "SQL gap" });
  }

  if ((answers.tools?.length ?? 0) < 2) {
    gaps.push({ id: "tool-depth", label: "Tool depth needs work" });
  }

  if (answers.excel === "basic") {
    gaps.push({ id: "excel-gap", label: "Dashboarding gap" });
  }

  if (answers.commitment === "low" || answers.timeline === "exploring") {
    gaps.push({ id: "roadmap", label: "No clear roadmap yet" });
  }

  if (gaps.length < 3) {
    gaps.push({ id: "interview-story", label: "Interview story needs sharpening" });
  }

  return gaps.slice(0, 4);
}

function buildPositioning(score: number, answers: AssessmentAnswers) {
  if (score >= 72) return "Entry-Ready";
  if (answers.profileType === "data" && score >= 62) return "Upskilling for Better Roles";
  if (answers.profileType === "student") return "Early Career Builder";
  if (answers.profileType === "non-data") return "Career Switch in Progress";
  return "Foundation Stage";
}

function buildTimeline(score: number, answers: AssessmentAnswers) {
  if (answers.timeline === "1-3" && score >= 68) return "You could target interviews in 8-12 weeks with a focused sprint.";
  if (answers.timeline === "1-3") return "A stronger 3-4 month roadmap would be more realistic than rushing in 1-3 months.";
  if (answers.timeline === "3-6" && score >= 55) return "A 3-6 month transition window looks realistic for your profile.";
  if (answers.timeline === "6-12") return "A 6-12 month timeline gives you enough room to build depth, projects, and confidence.";
  return "Start with a 90-day roadmap, then reassess once your projects and interview readiness improve.";
}

export function getDisplayValue(question: ChatQuestion, value: AssessmentAnswers[keyof AssessmentAnswers]) {
  if (!value) return question.optional ? "Skipped for now" : "";

  if (question.type === "multi" && Array.isArray(value)) {
    return value
      .map((item) => question.options?.find((option) => option.value === item)?.label ?? item)
      .join(", ");
  }

  if (question.type === "phone" && typeof value === "object" && "countryCode" in value) {
    return `${value.countryCode} ${value.number}`.trim();
  }

  if (typeof value === "string") {
    return question.options?.find((option) => option.value === value)?.label ?? value;
  }

  return String(value);
}

export function getBotFollowupMessage(
  question: ChatQuestion,
  value: AssessmentAnswers[keyof AssessmentAnswers],
  answers: AssessmentAnswers,
) {
  switch (question.id) {
    case "motivation": {
      const responseMap: Record<string, string> = {
        salary: "Makes sense. Strong earning potential is a real reason people move into data and tech.",
        abroad: "Makes sense. This path can support much stronger abroad opportunities.",
        switch: "Makes sense. Data is a very common and practical career-switch route.",
        growth: "Makes sense. It has strong long-term growth.",
        exploring: "Makes sense. Exploring first is completely fine.",
      };
      return responseMap[String(value)] ?? "Makes sense.";
    }
    case "personality":
      return "Got it. This helps a lot.";
    case "name":
      return `Nice to meet you, ${typeof value === "string" && value.trim() ? value.trim() : "there"}.`;
    case "phone":
      return "Perfect. I'll send it there.";
    case "location":
      return String(value) === "uk"
        ? "Perfect. That helps me frame this around the UK market."
        : "Helpful. I'll factor your current market into the path.";
    case "countryIntent":
      if (value === "uk") return "Perfect. We'll focus on UK outcomes.";
      if (value === "open") return "UK is one of the fastest routes right now.";
      if (value === "compare") return "We'll compare options for you.";
      if (value === "local") return "Let's map your career growth locally.";
      return "Got it.";
    case "profileType":
      return "Got it. That helps me personalize the next few questions.";
    case "experience":
      return "Helpful. I use that in the scoring.";
    case "currentSalary":
      return value === "Skipped"
        ? "No problem. I'll continue without it."
        : "Perfect. That helps me position your next move.";
    case "sql":
      return "Got it. SQL is one of the key hiring filters.";
    case "excel":
      return "Helpful. That gives me a better sense of your analyst readiness.";
    case "tools":
      return "Nice. Tool exposure helps a lot with role mapping.";
    case "projects":
      return "That is a critical factor in shortlisting.";
    case "targetRole":
      return "Perfect. That gives the roadmap a clear direction.";
    case "timeline":
      return "Got it. That helps me assess urgency.";
    case "commitment":
      return `Got it${answers.name ? `, ${answers.name}` : ""}. I'm analyzing your profile now.`;
    default:
      return "";
  }
}

export function computeAssessmentResult(answers: AssessmentAnswers): AssessmentResult {
  const years = normalizeYears(answers.experience);
  const toolCount = answers.tools?.length ?? 0;
  const currentSalary = parseSalary(answers.currentSalary);

  let score = 32;

  if (answers.motivation === "growth" || answers.motivation === "salary") score += 4;
  if (answers.motivation === "switch" || answers.motivation === "abroad") score += 3;

  if (answers.personality === "numbers" || answers.personality === "problem-solving") score += 5;
  if (answers.personality === "tech-curiosity") score += 3;

  if (answers.profileType === "data") score += 10;
  if (answers.profileType === "non-data") score += 5;
  if (answers.profileType === "student") score += 4;

  score += clamp(Math.round(years * 3), 0, 12);

  const sqlPoints: Record<string, number> = { none: 0, basics: 6, projects: 10, work: 14 };
  const excelPoints: Record<string, number> = { basic: 2, pivot: 5, dashboard: 8, advanced: 10 };
  const projectPoints: Record<string, number> = { none: 0, "1-2": 6, "3+": 10 };
  const commitmentPoints: Record<string, number> = { low: 0, medium: 4, high: 8 };
  const timelinePoints: Record<string, number> = { exploring: 0, "6-12": 2, "3-6": 5, "1-3": 7 };

  score += sqlPoints[answers.sql ?? "none"] ?? 0;
  score += excelPoints[answers.excel ?? "basic"] ?? 0;
  score += projectPoints[answers.projects ?? "none"] ?? 0;
  score += commitmentPoints[answers.commitment ?? "low"] ?? 0;
  score += timelinePoints[answers.timeline ?? "exploring"] ?? 0;
  score += clamp(toolCount * 2, 0, 10);

  if (answers.countryIntent === "uk") score += 4;
  if (answers.location === "uk") score += 3;
  if (answers.targetRole === "gen-ai" && answers.tools?.includes("ai-tools")) score += 5;

  score = clamp(score, 28, 88);

  const low = clamp(Math.round(score - 8), 24, 82);
  const high = clamp(Math.round(score + 8), 34, 92);
  const midpoint = Math.round((low + high) / 2);

  const ukBias = answers.location === "uk" || answers.countryIntent === "uk" || answers.countryIntent === "open";
  const baseLow = ukBias ? 28000 : 18000;
  const baseHigh = ukBias ? 34000 : 22000;
  const experienceLift = Math.round(years * 1800);
  const skillLift = Math.round((score - 40) * 140);

  const salaryLow = clamp(baseLow + experienceLift + skillLift, ukBias ? 26000 : 16000, ukBias ? 52000 : 36000);
  const salaryHigh = clamp(baseHigh + experienceLift + skillLift, salaryLow + 3000, ukBias ? 60000 : 42000);
  const salaryFloor = currentSalary > 0 ? Math.max(salaryLow, Math.round(currentSalary * 1.04)) : salaryLow;
  const nextLevel = clamp(salaryHigh + (ukBias ? 7000 : 5000), salaryHigh + 4000, ukBias ? 70000 : 50000);

  const topRoles = ROLE_LIBRARY[answers.targetRole ?? "not-sure"] ?? ROLE_LIBRARY["not-sure"];
  const positioning = buildPositioning(score, answers);
  const gaps = buildGaps(answers);
  const timeline = buildTimeline(score, answers);
  const candidateName = capitalizeName(answers.name);

  const intro = `OK ${candidateName}, based on your inputs, here is your career assessment.`;
  const summary =
    positioning === "Entry-Ready"
      ? "You are closer than most early-career applicants, but better projects and sharper positioning would noticeably improve your shortlisting odds."
      : "You have a realistic route into the market, and the biggest opportunity is to turn your existing motivation into visible, job-ready proof.";

  const insight = `Hi ${candidateName}, based on your current background, your estimated hiring probability is around ${low}-${high}%, which positions you as ${positioning}. To target higher-paying roles, focus on closing your most visible skill and portfolio gaps first.`;

  return {
    candidateName,
    hiringProbability: { low, high, midpoint },
    salary: { low: salaryFloor, high: salaryHigh, nextLevel },
    topRoles,
    positioning,
    timeline,
    gaps,
    intro,
    summary,
    insight,
  };
}
