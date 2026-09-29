import type { Assessment } from "../data/assessments";

export type AssessmentStatus =
  | "Not Started"
  | "Planning"
  | "In Progress"
  | "Drafting"
  | "Reviewing"
  | "Ready to Submit"
  | "Submitted";

export const ASSESSMENT_STATUSES: AssessmentStatus[] = [
  "Not Started",
  "Planning",
  "In Progress",
  "Drafting",
  "Reviewing",
  "Ready to Submit",
  "Submitted",
];

export type AssessmentPriority = "Low" | "Medium" | "High" | "Urgent";

export const ASSESSMENT_PRIORITIES: AssessmentPriority[] = ["Low", "Medium", "High", "Urgent"];

export type AssessmentProgress = {
  checkedSteps: string[];
  status: AssessmentStatus;
  priority: AssessmentPriority;
  /**
   * A student-entered date that overrides/supplements the officially-sourced deadline — for
   * confirming a date once it's released on Canvas, or correcting one that's changed. Never
   * replaces the original source data (assessment.deadlineISO / deadlineDisplay), which stays
   * intact underneath so the official info is never lost.
   */
  deadlineOverrideISO?: string | null;
  /** Optional note explaining the override, e.g. "Confirmed on Canvas" or "Moved by module lead". */
  deadlineOverrideNote?: string;
};

export type AssessmentProgressMap = Record<string, AssessmentProgress>;

export const DEFAULT_PROGRESS: AssessmentProgress = {
  checkedSteps: [],
  status: "Not Started",
  priority: "Medium",
};

export function getProgress(map: AssessmentProgressMap, id: string): AssessmentProgress {
  return map[id] || DEFAULT_PROGRESS;
}

export function progressPercent(assessment: Assessment, progress: AssessmentProgress): number {
  if (!assessment.taskSteps.length) return progress.status === "Submitted" ? 100 : 0;
  const done = progress.checkedSteps.filter((title) =>
    assessment.taskSteps.some((s) => s.title === title)
  ).length;
  return Math.round((done / assessment.taskSteps.length) * 100);
}

/** The ISO date actually used for countdowns: a student's own override if set, else the sourced deadline. */
export function effectiveDeadlineISO(assessment: Assessment, progress: AssessmentProgress): string | null {
  return progress.deadlineOverrideISO || assessment.deadlineISO;
}

/** Days remaining, or null if there's no known date (official or student-entered) to count down to. */
export function daysRemaining(assessment: Assessment, progress?: AssessmentProgress): number | null {
  const iso = progress ? effectiveDeadlineISO(assessment, progress) : assessment.deadlineISO;
  if (!iso) return null;
  const ms = new Date(`${iso}T12:00:00`).getTime() - Date.now();
  return Math.ceil(ms / 86400000);
}

export type UrgencyBand = {
  key: "overdue" | "urgent" | "important" | "approaching" | "normal" | "unknown";
  label: string;
  /** Short text/icon-friendly marker so urgency never relies on color alone. */
  marker: string;
  tone: "coral" | "apricot" | "lilac" | "sage" | "muted";
};

export function urgencyBand(days: number | null): UrgencyBand {
  if (days === null) return { key: "unknown", label: "Date to confirm", marker: "?", tone: "muted" };
  if (days < 0) return { key: "overdue", label: "Overdue", marker: "!!", tone: "coral" };
  if (days <= 2) return { key: "urgent", label: "Urgent", marker: "!!", tone: "coral" };
  if (days <= 6) return { key: "important", label: "Important", marker: "!", tone: "apricot" };
  if (days <= 14) return { key: "approaching", label: "Approaching", marker: "~", tone: "lilac" };
  return { key: "normal", label: "Normal", marker: "·", tone: "sage" };
}
