"use client";

import type { KeyboardEvent, ReactNode } from "react";
import { trackCourseInvestmentClick } from "@/lib/analytics";

type CourseInvestmentTrackerProps = {
  children: ReactNode;
  courseTitle: string;
  courseSlug: string;
  price?: number | string | null;
  currency?: string | null;
};

export default function CourseInvestmentTracker({
  children,
  courseTitle,
  courseSlug,
  price,
  currency,
}: CourseInvestmentTrackerProps) {
  const trackClick = () => {
    trackCourseInvestmentClick({
      courseTitle,
      courseSlug,
      price,
      currency,
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    trackClick();
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={trackClick}
      onKeyDown={handleKeyDown}
      aria-label={`View course investment for ${courseTitle}`}
      className="cursor-pointer rounded-2xl bg-emerald-50 p-6 text-left outline-none border border-emerald-100 transition hover:border-emerald-300 hover:bg-emerald-100/70 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
    >
      {children}
    </div>
  );
}
