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

/** Days remaining, or null if the assessment has no known date to count down to. */
export function daysRemaining(assessment: Assessment): number | null {
  if (!assessment.deadlineISO) return null;
  const ms = new Date(`${assessment.deadlineISO}T12:00:00`).getTime() - Date.now();
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
