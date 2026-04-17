"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  LineChart,
  MessageSquareText,
  MoreHorizontal,
  Paperclip,
  Send,
  Sparkles,
  X,
} from "lucide-react";

import { DEFAULT_PHONE_COUNTRY_CODE, PHONE_COUNTRY_CODES } from "@/components/ui/phoneCountryCodes";
import {
  CAREER_CHATBOT_SOURCE,
  CAREER_STEPS,
  CHAT_QUESTIONS,
  OBJECTION_HANDLING,
  type AssessmentAnswers,
  type AssessmentResult,
  type ChatQuestion,
  type PhoneAnswer,
  computeAssessmentResult,
  getBotFollowupMessage,
  getDisplayValue,
} from "@/lib/careerChatbot";

type ChatMessage =
  | { id: string; sender: "bot" | "user"; kind: "text"; text: string }
  | { id: string; sender: "bot"; kind: "dashboard"; result: AssessmentResult }
  | { id: string; sender: "bot"; kind: "objections" };

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}

function buildId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function createQuestionMessage(question: ChatQuestion): ChatMessage {
  return {
    id: buildId("bot"),
    sender: "bot",
    kind: "text",
    text: question.prompt,
  };
}

function useAnimatedNumber(target: number, duration = 1100) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [duration, target]);

  return value;
}

function FloatingLauncher({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-[160px] right-[18px] z-[10000] flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-[linear-gradient(135deg,#2F6BFF_0%,#7B61FF_100%)] text-white shadow-[0_18px_40px_rgba(47,107,255,0.32)] transition hover:-translate-y-1 hover:shadow-[0_24px_45px_rgba(47,107,255,0.4)] md:bottom-[166px] md:right-[30px] md:h-[62px] md:w-[62px]"
      aria-label={isOpen ? "Close career chatbot" : "Open career chatbot"}
    >
      {isOpen ? <X size={24} /> : <MessageSquareText size={24} />}
    </button>
  );
}

function ResultGauge({ result }: { result: AssessmentResult }) {
  const progress = result.hiringProbability.midpoint / 100;
  const animatedMid = useAnimatedNumber(result.hiringProbability.midpoint);

  return (
    <div className="rounded-[18px] border border-[#E6ECF7] bg-white p-4 shadow-[0_16px_34px_rgba(31,41,55,0.06)]">
      <h4 className="text-sm font-semibold text-[#27324D]">Hiring Probability</h4>
      <div className="mt-4 flex flex-col items-center">
        <svg viewBox="0 0 120 72" className="h-[120px] w-full max-w-[220px] overflow-visible">
          <defs>
            <linearGradient id="career-gauge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#63B5FF" />
              <stop offset="100%" stopColor="#5770FF" />
            </linearGradient>
          </defs>
          <path
            d="M15 60 A45 45 0 0 1 105 60"
            fill="none"
            stroke="#D9E6FF"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <motion.path
            d="M15 60 A45 45 0 0 1 105 60"
            fill="none"
            stroke="url(#career-gauge-gradient)"
            strokeWidth="12"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          />
          <circle cx="101" cy="60" r="4.5" fill="#5B72FF" />
        </svg>
        <div className="-mt-12 text-center">
          <div className="text-[30px] font-bold tracking-[-0.04em] text-[#24314D]">
            {Math.max(result.hiringProbability.low, animatedMid - 8)}%-{Math.min(result.hiringProbability.high, animatedMid + 8)}%
          </div>
          <div className="mt-3 flex items-center justify-center gap-2 text-[#E6B967]">
            <CheckCircle2 size={18} />
          </div>
          <p className="mt-3 max-w-[180px] text-sm leading-5 text-[#5F6F8E]">
            Estimated chance of getting shortlisted
          </p>
        </div>
      </div>
    </div>
  );
}

function SalaryCard({ result }: { result: AssessmentResult }) {
  const low = useAnimatedNumber(result.salary.low);
  const high = useAnimatedNumber(result.salary.high);
  const next = useAnimatedNumber(result.salary.nextLevel);

  const bars = [34, 46, 58, 84];

  return (
    <div className="rounded-[18px] border border-[#E5EBFF] bg-[linear-gradient(180deg,#F9FBFF_0%,#F1F5FF_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-[#66748E]">Realistic starting salary</p>
          <div className="mt-2 text-[28px] font-bold tracking-[-0.04em] text-[#24314D]">
            {formatCurrency(low)} - {formatCurrency(high)}
          </div>
          <p className="mt-4 text-sm font-medium text-[#8693AA]">Next Level</p>
          <div className="mt-1 text-[28px] font-bold tracking-[-0.04em] text-[#324C9A]">
            {formatCurrency(next)}+
          </div>
        </div>
        <div className="rounded-full bg-white/85 p-2 text-[#6A7BEF] shadow-sm">
          <LineChart size={18} />
        </div>
      </div>
      <div className="mt-4 flex items-end gap-2">
        {bars.map((height, index) => (
          <motion.div
            key={height}
            className="w-7 rounded-t-[8px] bg-[linear-gradient(180deg,rgba(102,143,255,0.35)_0%,rgba(95,116,255,0.8)_100%)]"
            initial={{ height: 8, opacity: 0.3 }}
            animate={{ height, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 * index, ease: "easeOut" }}
          />
        ))}
        <motion.div
          className="ml-1 h-[2px] flex-1 origin-left rounded-full bg-[linear-gradient(90deg,#B6C9FF_0%,#5F74FF_100%)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        />
      </div>
    </div>
  );
}

function RoleIcon({ type }: { type: AssessmentResult["topRoles"][number]["icon"] }) {
  const iconProps = { size: 16, className: "text-[#63A3FF]" };

  if (type === "briefcase") return <BriefcaseBusiness {...iconProps} />;
  if (type === "spark") return <Sparkles {...iconProps} />;
  if (type === "report") return <LineChart {...iconProps} />;
  if (type === "bot") return <Bot {...iconProps} />;
  return <BarChart3 {...iconProps} />;
}

function DashboardMessage({ result, onOpenOfferModal }: { result: AssessmentResult; onOpenOfferModal: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="w-full"
    >
      <div className="max-w-[86%] rounded-[18px] rounded-bl-[6px] bg-[#EEF1F7] px-4 py-3 text-[15px] font-medium leading-6 text-[#374564] shadow-[0_8px_24px_rgba(31,41,55,0.06)]">
        {result.intro}
      </div>

      <div className="mt-4 rounded-[24px] border border-[#E7EDF7] bg-white p-4 shadow-[0_22px_50px_rgba(31,41,55,0.08)] md:p-5">
        <div className="grid gap-4 md:grid-cols-[1.08fr_0.92fr]">
          <ResultGauge result={result} />
          <SalaryCard result={result} />
        </div>

        <div className="mt-4 rounded-[20px] border border-[#E8EDF7] bg-white p-4">
          <h4 className="text-[20px] font-semibold tracking-[-0.03em] text-[#23314D]">Possible Top Roles</h4>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {result.topRoles.map((role) => (
              <div
                key={role.id}
                className="flex min-h-12 items-center gap-2 rounded-2xl border border-[#E4EAF5] bg-[#F5F7FB] px-3 py-3 text-sm font-medium text-[#33415F]"
              >
                <RoleIcon type={role.icon} />
                <span>{role.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-[22px] border border-[#DDE6FF] bg-[linear-gradient(180deg,#F6F9FF_0%,#EEF4FF_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
          <div className="flex items-center gap-2 text-[#31479B]">
            <Bot size={18} />
            <h4 className="text-[21px] font-semibold tracking-[-0.03em]">Personalized Report</h4>
          </div>
          <div className="mt-4 rounded-[18px] border border-white/80 bg-white/80 p-4">
            <p className="text-[22px] font-semibold tracking-[-0.03em] text-[#24314D]">Hi {result.candidateName},</p>
            <p className="mt-3 text-[15px] leading-7 text-[#4E5D7B]">
              Based on your current background, you have an <strong>Estimated Hiring Probability</strong> of around{" "}
              <strong>
                {result.hiringProbability.low}-{result.hiringProbability.high}%
              </strong>
              , which is considered <strong>{result.positioning}</strong>.
            </p>
            <p className="mt-3 text-[15px] leading-7 text-[#4E5D7B]">
              To target higher-paying roles ({formatCurrency(result.salary.nextLevel)}+) you&apos;ll need to:
            </p>
            <div className="mt-4 space-y-3">
              {result.gaps.map((gap) => (
                <div key={gap.id} className="flex items-start gap-3 text-[15px] leading-6 text-[#31416A]">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#5D75FF]" />
                  <span>{gap.label}</span>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={onOpenOfferModal}
              className="career-chatbot-cta-glow mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#2F6BFF_0%,#6A5DFF_100%)] px-5 py-4 text-[15px] font-semibold text-white shadow-[0_16px_30px_rgba(71,95,255,0.35)] transition hover:-translate-y-0.5"
            >
              <span>Book Free Career Counselling</span>
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ObjectionMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
      className="mt-4 rounded-[22px] border border-[#E8EDF7] bg-white p-4 shadow-[0_18px_38px_rgba(31,41,55,0.06)]"
    >
      <h4 className="text-base font-semibold text-[#24314D]">Quick answers before you decide</h4>
      <div className="mt-4 space-y-3">
        {OBJECTION_HANDLING.map((item) => (
          <div key={item.question} className="rounded-2xl bg-[#F7F9FC] px-4 py-3">
            <p className="text-sm font-semibold text-[#31416A]">{item.question}</p>
            <p className="mt-1 text-sm leading-6 text-[#5F6F8E]">{item.answer}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function CareerChatbotFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [answers, setAnswers] = useState<AssessmentAnswers>({});
  const [messages, setMessages] = useState<ChatMessage[]>([createQuestionMessage(CHAT_QUESTIONS[0])]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [draftText, setDraftText] = useState("");
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [phoneCountryCode, setPhoneCountryCode] = useState(DEFAULT_PHONE_COUNTRY_CODE);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [freeChatValue, setFreeChatValue] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);
  const leadSubmittedRef = useRef(false);

  const currentQuestion = CHAT_QUESTIONS[currentQuestionIndex];
  const currentStep = result ? CAREER_STEPS : currentQuestion?.step ?? 1;
  const resultShown = result !== null;

  useEffect(() => {
    if (!isOpen) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [isOpen, messages, isProcessing]);

  useEffect(() => {
    if (!isOpen) return;

    lastFocusedElementRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      const focusable = modalRef.current?.querySelector<HTMLElement>("button, input, select, textarea");
      focusable?.focus();
    }, 30);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timer);
      lastFocusedElementRef.current?.focus?.();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;

      const focusable = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const resetFlow = () => {
    setAnswers({});
    setMessages([createQuestionMessage(CHAT_QUESTIONS[0])]);
    setCurrentQuestionIndex(0);
    setDraftText("");
    setSelectedTools([]);
    setPhoneCountryCode(DEFAULT_PHONE_COUNTRY_CODE);
    setPhoneNumber("");
    setIsProcessing(false);
    setResult(null);
    setFreeChatValue("");
    leadSubmittedRef.current = false;
  };

  const openOfferModal = () => {
    window.dispatchEvent(new CustomEvent("brit:open-offer-modal", { detail: { source: CAREER_CHATBOT_SOURCE } }));
  };

  const submitLead = (nextAnswers: AssessmentAnswers) => {
    if (leadSubmittedRef.current || !nextAnswers.name || !nextAnswers.phone?.number.trim()) {
      return;
    }

    leadSubmittedRef.current = true;

    const API_URL =
      process.env.NODE_ENV === "development" ? "http://localhost:4000/api/leads" : "https://api.britinstitute.uk/api/leads";

    const payload = {
      name: nextAnswers.name,
      phone: `${nextAnswers.phone.countryCode} ${nextAnswers.phone.number.trim()}`.trim(),
      motivation: nextAnswers.motivation,
      location: nextAnswers.location,
      targetRole: nextAnswers.targetRole,
      source: CAREER_CHATBOT_SOURCE,
    };

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch((error) => {
      console.error(error);
    });
  };

  const advanceConversation = (question: ChatQuestion, value: AssessmentAnswers[keyof AssessmentAnswers]) => {
    const nextAnswers = { ...answers, [question.id]: value };
    setAnswers(nextAnswers);

    const userMessage = getDisplayValue(question, value);
    setMessages((previous) => [
      ...previous,
      {
        id: buildId("user"),
        sender: "user",
        kind: "text",
        text: userMessage,
      },
    ]);

    if (question.id === "phone") {
      submitLead(nextAnswers);
    }

    const followupText = getBotFollowupMessage(question, value, nextAnswers);

    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < CHAT_QUESTIONS.length) {
      window.setTimeout(() => {
        setCurrentQuestionIndex(nextIndex);
        setMessages((previous) => [
          ...previous,
          ...(followupText
            ? [
                {
                  id: buildId("bot"),
                  sender: "bot" as const,
                  kind: "text" as const,
                  text: followupText,
                },
              ]
            : []),
          createQuestionMessage(CHAT_QUESTIONS[nextIndex]),
        ]);
      }, 280);
      return;
    }

    window.setTimeout(() => {
      setIsProcessing(true);
      setMessages((previous) => [
        ...previous,
        ...(followupText
          ? [
              {
                id: buildId("bot"),
                sender: "bot" as const,
                kind: "text" as const,
                text: followupText,
              },
            ]
          : []),
        {
          id: buildId("bot"),
          sender: "bot",
          kind: "text",
          text: "Analyzing profile...",
        },
      ]);
    }, 220);

    window.setTimeout(() => {
      const computed = computeAssessmentResult(nextAnswers);
      const postResultReply =
        nextAnswers.targetRole === "gen-ai"
          ? "That is a smart direction. The next win is turning your AI curiosity into project proof and a clearer interview story."
          : "This is very fixable. With the right roadmap, your profile can move from interest-led to shortlist-ready much faster.";
      setResult(computed);
      setIsProcessing(false);
      setMessages((previous) => [
        ...previous,
        { id: buildId("dashboard"), sender: "bot", kind: "dashboard", result: computed },
        { id: buildId("objections"), sender: "bot", kind: "objections" },
        {
          id: buildId("bot"),
          sender: "bot",
          kind: "text",
          text: postResultReply || computed.summary,
        },
      ]);
    }, 1550);
  };

  const handleOptionSelect = (value: string) => {
    if (!currentQuestion || currentQuestion.type !== "single") return;
    advanceConversation(currentQuestion, value);
  };

  const handleMultiToggle = (value: string) => {
    setSelectedTools((previous) =>
      previous.includes(value) ? previous.filter((item) => item !== value) : [...previous, value],
    );
  };

  const handleContinue = () => {
    if (!currentQuestion) return;

    if (currentQuestion.type === "multi") {
      if (selectedTools.length === 0) return;
      advanceConversation(currentQuestion, selectedTools);
      setSelectedTools([]);
      return;
    }

    if ((currentQuestion.type === "text" || currentQuestion.type === "number") && draftText.trim()) {
      advanceConversation(currentQuestion, draftText.trim());
      setDraftText("");
      return;
    }

    if (currentQuestion.type === "text" && currentQuestion.optional && draftText.trim().length === 0) {
      advanceConversation(currentQuestion, "Skipped");
      return;
    }

    if (currentQuestion.type === "phone" && phoneNumber.trim()) {
      const phone: PhoneAnswer = { countryCode: phoneCountryCode, number: phoneNumber.trim() };
      advanceConversation(currentQuestion, phone);
      setPhoneNumber("");
    }
  };

  const handleFreeChatSend = () => {
    if (!freeChatValue.trim()) return;

    const text = freeChatValue.trim();
    setMessages((previous) => [
      ...previous,
      { id: buildId("user"), sender: "user", kind: "text", text },
    ]);
    setFreeChatValue("");

    window.setTimeout(() => {
      setMessages((previous) => [
        ...previous,
        {
          id: buildId("bot"),
          sender: "bot",
          kind: "text",
          text: "I can help you with that. For the fastest next step, book the free counselling call and we will turn this report into a roadmap with you.",
        },
      ]);
    }, 520);
  };

  const footerTitle = resultShown
    ? "Type a message..."
    : currentQuestion?.placeholder ?? currentQuestion?.prompt ?? "Tell me a bit about you";

  return (
    <>
      <FloatingLauncher isOpen={isOpen} onClick={() => setIsOpen((current) => !current)} />

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[10001] bg-[rgba(16,24,40,0.42)] px-3 py-4 backdrop-blur-[3px] md:px-6 md:py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full items-end justify-end md:items-end">
              <motion.div
                ref={modalRef}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.98 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="flex h-[min(820px,calc(100vh-1rem))] w-full max-w-[460px] flex-col overflow-hidden rounded-[30px] border border-white/70 bg-[#F7F9FC] shadow-[0_35px_90px_rgba(18,35,79,0.24)] md:h-[min(840px,calc(100vh-3rem))]"
                role="dialog"
                aria-modal="true"
                aria-label="Digital Career Counsellor"
              >
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#E9EDF4] bg-white px-4 py-4 shadow-[0_4px_12px_rgba(31,41,55,0.03)]">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#E5EAF4] bg-[#F3F6FB]">
                      <Image src="/avatar-1.png" alt="Digital Career Counsellor" fill className="object-cover" />
                      <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-white bg-[#6CD48B]" />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-[21px] font-semibold tracking-[-0.03em] text-[#24314D]">
                        Digital Career Counsellor
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="font-medium text-[#5178E0]">Online</span>
                        <span className="text-[#99A4B8]">Step {currentStep} of 8</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={resetFlow}
                      className="rounded-full p-2 text-[#8E9AB0] transition hover:bg-[#F3F6FB] hover:text-[#52617C]"
                      aria-label="Restart assessment"
                    >
                      <MoreHorizontal size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="rounded-full p-2 text-[#8E9AB0] transition hover:bg-[#F3F6FB] hover:text-[#52617C]"
                      aria-label="Close chatbot"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                <div className="career-chatbot-scroll flex-1 overflow-y-auto px-3 py-4 md:px-4">
                  <div className="space-y-4">
                    {messages.map((message) => {
                      if (message.kind === "dashboard") {
                        return <DashboardMessage key={message.id} result={message.result} onOpenOfferModal={openOfferModal} />;
                      }

                      if (message.kind === "objections") {
                        return <ObjectionMessage key={message.id} />;
                      }

                      return (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[86%] rounded-[18px] px-4 py-3 text-[15px] leading-6 shadow-[0_10px_22px_rgba(31,41,55,0.05)] ${
                              message.sender === "user"
                                ? "rounded-br-[6px] bg-[linear-gradient(135deg,#2F6BFF_0%,#5F74FF_100%)] text-white"
                                : "rounded-bl-[6px] bg-[#EEF1F7] text-[#374564]"
                            }`}
                          >
                            {message.text}
                          </div>
                        </div>
                      );
                    })}

                    {isProcessing ? (
                      <div className="flex justify-start">
                        <div className="rounded-[18px] rounded-bl-[6px] bg-[#EEF1F7] px-4 py-3 shadow-[0_10px_22px_rgba(31,41,55,0.05)]">
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#7B8AAC] [animation-delay:-0.2s]" />
                            <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#7B8AAC] [animation-delay:-0.1s]" />
                            <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#7B8AAC]" />
                          </div>
                        </div>
                      </div>
                    ) : null}
                    <div ref={messagesEndRef} />
                  </div>
                </div>

                <div className="sticky bottom-0 border-t border-[#E7EDF6] bg-white px-3 py-3 shadow-[0_-8px_18px_rgba(31,41,55,0.04)] md:px-4">
                  <div className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-[#91A0B6]">Respond</div>

                  {resultShown ? (
                    <div className="flex items-center gap-2 rounded-[22px] border border-[#DFE7F5] bg-[#F8FAFD] px-3 py-2">
                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-full text-[#8B97AD] transition hover:bg-white"
                        aria-label="Add attachment"
                      >
                        <Paperclip size={18} />
                      </button>
                      <input
                        value={freeChatValue}
                        onChange={(event) => setFreeChatValue(event.target.value)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            event.preventDefault();
                            handleFreeChatSend();
                          }
                        }}
                        placeholder="Type a message..."
                        className="h-11 flex-1 border-none bg-transparent text-[15px] text-[#2C3A59] outline-none placeholder:text-[#98A2B3]"
                      />
                      <button
                        type="button"
                        onClick={handleFreeChatSend}
                        className="flex h-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#2F6BFF_0%,#5F74FF_100%)] px-4 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(47,107,255,0.24)] transition hover:-translate-y-0.5"
                      >
                        Send
                      </button>
                    </div>
                  ) : currentQuestion?.type === "single" ? (
                    <div className="grid grid-cols-2 gap-2">
                      {currentQuestion.options?.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleOptionSelect(option.value)}
                          className="rounded-2xl border border-[#DFE6F3] bg-[#F7F9FC] px-4 py-3 text-left text-sm font-medium text-[#31416A] transition hover:border-[#BDD1FF] hover:bg-[#EEF4FF]"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  ) : currentQuestion?.type === "multi" ? (
                    <div>
                      <div className="grid grid-cols-2 gap-2">
                        {currentQuestion.options?.map((option) => {
                          const active = selectedTools.includes(option.value);
                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handleMultiToggle(option.value)}
                              className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                                active
                                  ? "border-[#7A8FFF] bg-[#EEF3FF] text-[#3045A5]"
                                  : "border-[#DFE6F3] bg-[#F7F9FC] text-[#31416A] hover:border-[#BDD1FF] hover:bg-[#EEF4FF]"
                              }`}
                            >
                              {option.label}
                            </button>
                          );
                        })}
                      </div>
                      <button
                        type="button"
                        onClick={handleContinue}
                        disabled={selectedTools.length === 0}
                        className="mt-3 flex h-12 w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#2F6BFF_0%,#5F74FF_100%)] text-sm font-semibold text-white shadow-[0_12px_24px_rgba(47,107,255,0.22)] transition disabled:cursor-not-allowed disabled:opacity-45"
                      >
                        Continue
                      </button>
                    </div>
                  ) : currentQuestion?.type === "phone" ? (
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <div className="relative w-[42%]">
                          <select
                            value={phoneCountryCode}
                            onChange={(event) => setPhoneCountryCode(event.target.value)}
                            className="h-12 w-full appearance-none rounded-2xl border border-[#DFE6F3] bg-[#F8FAFD] px-4 text-sm font-medium text-[#31416A] outline-none"
                          >
                            {PHONE_COUNTRY_CODES.map((country) => (
                              <option key={country.value} value={country.value}>
                                {country.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <input
                          value={phoneNumber}
                          onChange={(event) => setPhoneNumber(event.target.value)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter") {
                              event.preventDefault();
                              handleContinue();
                            }
                          }}
                          placeholder={footerTitle}
                          className="h-12 flex-1 rounded-2xl border border-[#DFE6F3] bg-[#F8FAFD] px-4 text-[15px] text-[#2C3A59] outline-none placeholder:text-[#98A2B3]"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleContinue}
                        disabled={!phoneNumber.trim()}
                        className="flex h-12 w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#2F6BFF_0%,#5F74FF_100%)] text-sm font-semibold text-white shadow-[0_12px_24px_rgba(47,107,255,0.22)] transition disabled:cursor-not-allowed disabled:opacity-45"
                      >
                        {currentQuestion.buttonLabel ?? "Continue"}
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 rounded-[22px] border border-[#DFE7F5] bg-[#F8FAFD] px-3 py-2">
                        <button
                          type="button"
                          className="flex h-10 w-10 items-center justify-center rounded-full text-[#8B97AD] transition hover:bg-white"
                          aria-label="Add attachment"
                        >
                          <Paperclip size={18} />
                        </button>
                        <input
                          value={draftText}
                          onChange={(event) => setDraftText(event.target.value)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter") {
                              event.preventDefault();
                              handleContinue();
                            }
                          }}
                          placeholder={footerTitle}
                          inputMode={currentQuestion?.type === "number" ? "decimal" : "text"}
                          className="h-11 flex-1 border-none bg-transparent text-[15px] text-[#2C3A59] outline-none placeholder:text-[#98A2B3]"
                        />
                        <button
                          type="button"
                          onClick={handleContinue}
                          disabled={!draftText.trim() && !currentQuestion?.optional}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#2F6BFF_0%,#5F74FF_100%)] text-white shadow-[0_12px_24px_rgba(47,107,255,0.24)] transition disabled:cursor-not-allowed disabled:opacity-45"
                          aria-label="Send answer"
                        >
                          <Send size={16} />
                        </button>
                      </div>

                      {currentQuestion?.optional ? (
                        <button
                          type="button"
                          onClick={handleContinue}
                          className="w-full rounded-2xl border border-dashed border-[#CAD5E8] px-4 py-3 text-sm font-medium text-[#6A7894] transition hover:border-[#B7C7E5] hover:bg-[#F8FAFD]"
                        >
                          Skip this for now
                        </button>
                      ) : null}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
