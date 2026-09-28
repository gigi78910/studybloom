import type { Assessment, ModuleInfo } from "./types";
import { dasc500 } from "./dasc500";
import { dasc501 } from "./dasc501";
import { dasc502 } from "./dasc502";
import { dasc503 } from "./dasc503";
import { dasc506 } from "./dasc506";
import { dasc507 } from "./dasc507";
import { dasc509 } from "./dasc509";
import { dasc512 } from "./dasc512";
import { dasc513 } from "./dasc513";
import { dasc516 } from "./dasc516";

export * from "./types";

/** Every Semester 1 module we have real, sourced content for. */
export const SEMESTER1_MODULES: ModuleInfo[] = [
  dasc500,
  dasc501,
  dasc502,
  dasc503,
  dasc506,
  dasc507,
  dasc509,
  dasc512,
  dasc513,
  dasc516,
];

/** Flat list of every assessment across every module, graded and ungraded. */
export const ALL_ASSESSMENTS: Assessment[] = SEMESTER1_MODULES.flatMap(
  (m) => m.assessments
);

/** Only assessments that actually carry a weighting/grade (excludes formative practicals like DASC502). */
export const GRADED_ASSESSMENTS: Assessment[] = ALL_ASSESSMENTS.filter(
  (a) => !a.notGraded
);

export function getModule(code: string): ModuleInfo | undefined {
  return SEMESTER1_MODULES.find((m) => m.code === code);
}

export function getAssessment(id: string): Assessment | undefined {
  return ALL_ASSESSMENTS.find((a) => a.id === id);
}

export function getModuleForAssessment(id: string): ModuleInfo | undefined {
  return SEMESTER1_MODULES.find((m) => m.assessments.some((a) => a.id === id));
}
