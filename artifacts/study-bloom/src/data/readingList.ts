// Reading List — structured and ready to receive real data.
//
// No book/article reading-list documents have been supplied yet for any Semester 1 module,
// so this file intentionally starts empty rather than inventing titles. Add entries here in
// exactly this shape once real reading lists are provided, and the Reading List page will
// pick them up automatically (filters, search, module/assessment links and status tags all
// already work against this schema).

export type ReadingStatusTag = "Want to Read" | "Currently Reading" | "Completed" | "Useful for Assessment";

export type BookEntry = {
  id: string;
  title: string;
  author: string;
  edition?: string;
  year?: string;
  publisher?: string;
  isbn?: string;
  /** Module codes this reading relates to, e.g. ["DASC501"]. */
  relatedModules: string[];
  /** Assessment ids this reading relates to, e.g. ["dasc501-critical-appraisal"]. */
  relatedAssessments: string[];
  topics: string[];
  type: "Core" | "Recommended";
  description: string;
  whyRelevant: string;
  howToUse: string;
  /** A legitimate link — publisher, library catalogue, DOI, or similar. Never a pirated copy. */
  link?: string;
};

export const READING_LIST: BookEntry[] = [];
