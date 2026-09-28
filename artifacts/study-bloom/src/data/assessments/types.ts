// Structured, real assessment data for Study Bloom's Semester 1 modules.
// Every field here is sourced from official module guides, cover sheets and
// marking rubrics supplied by the student. Nothing in this file (or the
// per-module files that populate MODULES) is invented. Where information was
// genuinely not supplied, the field holds an explicit placeholder string
// (e.g. "Deadline not yet added", "Rubric not yet available") rather than a
// guess. Where a source document itself contained an internal contradiction
// (two different dates, two rubric-sheet versions, etc.) both versions are
// kept and clearly labelled — nothing is silently "corrected".

export type RubricBand = {
  /** e.g. "A* Distinction", "A Distinction", "B Merit", "C Pass", "D Fail", "F Fail" */
  band: string;
  /** e.g. "80-100%" */
  range: string;
  /** Verbatim band-descriptor text from the rubric. */
  text: string;
};

export type RubricCriterion = {
  name: string;
  /** e.g. "15%" — omitted if the source rubric didn't weight this row. */
  weight?: string;
  bands: RubricBand[];
  /** Set when the source itself is inconsistent/contains a likely typo we are reproducing verbatim rather than silently fixing. */
  sourceNote?: string;
};

export type AcademicIntegrityRow = {
  label: string;
  text: string;
};

export type RubricTable = {
  /** Label for this rubric version, used when a module supplies more than one conflicting version of the same rubric. */
  label?: string;
  criteria: RubricCriterion[];
  academicIntegrity?: AcademicIntegrityRow[];
  note?: string;
};

export type RubricSection =
  | { status: "available"; tables: RubricTable[] }
  | { status: "not-available"; note: string };

/** One step of the "What Do I Actually Need To Do?" practical breakdown. */
export type TaskStep = {
  title: string;
  detail: string;
};

export type ReadingRef = {
  title: string;
  author?: string;
  note?: string;
};

export type Assessment = {
  id: string;
  moduleCode: string;
  title: string;
  type: string;
  weighting?: string;
  wordCount?: string;
  timeLimit?: string;
  submissionMethod?: string;
  /** ISO date string ("YYYY-MM-DD") used for countdown/urgency calculations, or null if genuinely unknown. */
  deadlineISO: string | null;
  /** Human-readable deadline text as stated in the source, kept verbatim (may include time, or "not yet added"). */
  deadlineDisplay: string;
  /** Set when the source itself gives more than one deadline/date and the student asked to keep both rather than pick one. */
  deadlineConflictNote?: string;
  setDate?: string;
  learningOutcomes?: string[];
  description: string;
  taskSteps: TaskStep[];
  topBandGuidance?: string;
  goodWorkLooksLike?: string[];
  genAiTier?: string;
  rubric: RubricSection;
  readingRefs?: ReadingRef[];
  gaps?: string[];
  notGraded?: boolean;
};

export type ModuleInfo = {
  code: string;
  name: string;
  lecturer?: string;
  assessments: Assessment[];
  notes?: string[];
};
