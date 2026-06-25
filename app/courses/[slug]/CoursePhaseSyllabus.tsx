import { CheckCircle2, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type PhaseTrack = {
  title: string;
  duration: string;
  project: string;
  items: string[];
  genAi: string;
};

type PhaseCard = {
  phase: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tracks: PhaseTrack[];
};

const phaseAccentStyles = [
  {
    icon: "bg-[#fff7df] text-[#d95700] ring-[#f5c242]/35",
    label: "text-[#d95700]",
    bar: "bg-[#d95700]",
  },
  {
    icon: "bg-[#f2ede4] text-[#746d5c] ring-[#ded6c8]",
    label: "text-[#746d5c]",
    bar: "bg-[#746d5c]",
  },
  {
    icon: "bg-[#f5eadf] text-[#c45118] ring-[#d95700]/20",
    label: "text-[#c45118]",
    bar: "bg-[#c45118]",
  },
  {
    icon: "bg-[#24101f] text-[#f5c242] ring-[#24101f]/15",
    label: "text-[#24101f]",
    bar: "bg-[#24101f]",
  },
  {
    icon: "bg-[#eaf2ff] text-[#0d5272] ring-[#b9d5ef]",
    label: "text-[#0d5272]",
    bar: "bg-[#0d5272]",
  },
];

export default function CoursePhaseSyllabus({
  phases,
  getAiLabel,
}: {
  phases: PhaseCard[];
  getAiLabel?: (trackTitle: string) => string;
}) {
  return (
    <div className="space-y-7">
      {phases.map((phase, index) => {
        const Icon = phase.icon;
        const accent = phaseAccentStyles[index % phaseAccentStyles.length];

        return (
          <article
            key={phase.phase}
            className="relative overflow-hidden rounded-[6px] border border-[#ded6c8] bg-white shadow-[0_18px_55px_rgba(36,16,31,0.08)]"
          >
            <div className={`h-1.5 ${accent.bar}`} />
            <div className="grid gap-0 lg:grid-cols-[0.72fr_1.28fr]">
              <div className="border-b border-[#ded6c8] bg-[#f7f3ea] p-6 md:p-8 lg:border-b-0 lg:border-r">
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-[6px] ring-1 ${accent.icon}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <p className={`text-xs font-black uppercase tracking-[0.26em] ${accent.label}`}>{phase.phase}</p>
                <h3 className="mt-3 max-w-sm text-2xl font-black leading-tight text-[#241a1f] md:text-[1.75rem]">
                  {phase.title}
                </h3>
                <p className="mt-5 max-w-sm text-sm leading-7 text-[#6f665c]">{phase.description}</p>
              </div>

              <div className="space-y-5 bg-[#fbfaf6] p-5 md:p-7">
                {phase.tracks.map((track) => (
                  <div key={track.title} className="rounded-[6px] border border-[#ded6c8] bg-white p-5 shadow-sm md:p-6">
                    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h4 className="text-xl font-black leading-snug text-[#241a1f]">{track.title}</h4>
                        <p className="mt-1 text-sm font-black text-[#746d5c]">{track.duration}</p>
                      </div>
                      <span className="w-fit rounded-[6px] border border-[#ded6c8] bg-[#f7f3ea] px-3 py-2 text-xs font-black text-[#241a1f] shadow-sm">
                        Project: {track.project}
                      </span>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {track.items.map((item) => (
                        <div key={item} className="flex items-start gap-3 rounded-[6px] bg-[#f7f3ea] p-3.5">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#008f6b]" />
                          <span className="text-sm leading-6 text-[#241a1f]">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-[6px] border border-[#d4af37]/35 bg-[#fff7df] p-4">
                      <div className="mb-2 flex items-center gap-2 text-sm font-black text-[#c45118]">
                        <Sparkles className="h-4 w-4" />
                        {getAiLabel ? getAiLabel(track.title) : "AI integration"}
                      </div>
                      <p className="text-sm leading-7 text-[#241a1f]">{track.genAi}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
