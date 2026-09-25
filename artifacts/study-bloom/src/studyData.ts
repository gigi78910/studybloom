// Real Semester 1 data for Grace's MSc Data Science & AI for Health Innovation,
// ported from the Field Notes study companion so Study Bloom reflects the actual
// timetable, assignments and week-by-week plan rather than placeholder content.
import raw from "./course-data.json";

export type RawTimetableRow = { day: string; start: string; end: string; module: string; label: string; location: string };
export type RawDay = { slots: string[]; tasks: string[]; career: string | null };
export type RawWeek = { week: number; range: string; theme: string; encouragement: string; days: Record<string, RawDay> };
export type RawStage = { by: string; task: string };
export type RawAssignment = { id: string; module: string; title: string; weight: string; due: string | null; dueLabel: string; brief: string; stages: RawStage[] };
export type RawMilestone = { by: string; task: string };

export const TERM_START = raw.termStart as string;
export const MODULE_NAMES = raw.moduleNames as Record<string, string>;
export const TIMETABLE = raw.timetable as RawTimetableRow[];
export const WEEKS = raw.weeks as RawWeek[];
export const ASSIGNMENTS = raw.assignments as RawAssignment[];
export const MILESTONES = raw.milestones as RawMilestone[];

export const MODULES = Object.values(MODULE_NAMES);

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

function dateForWeekDay(week: number, dayIdx: number): Date {
  const d = new Date(`${TERM_START}T12:00:00`);
  d.setDate(d.getDate() + (week - 1) * 7 + dayIdx);
  return d;
}
function dateKey(d: Date): string {
  const y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, "0"), day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Every timetabled class session, exploded across all 12 teaching weeks. */
export function buildClassTasks(colorFor: (module: string) => string, uid: () => string) {
  const out: any[] = [];
  for (let week = 1; week <= 12; week++) {
    WEEKDAYS.forEach((day, dayIdx) => {
      const rows = TIMETABLE.filter(t => t.day === day);
      const date = dateKey(dateForWeekDay(week, dayIdx));
      rows.forEach(row => {
        out.push({
          id: uid(),
          title: `${row.label} · ${row.location}`,
          module: MODULE_NAMES[row.module] || row.module,
          date,
          time: row.start,
          duration: (parseInt(row.end.slice(0, 2), 10) * 60 + parseInt(row.end.slice(3), 10)) - (parseInt(row.start.slice(0, 2), 10) * 60 + parseInt(row.start.slice(3), 10)),
          done: false,
          color: colorFor(MODULE_NAMES[row.module] || row.module),
          kind: "class",
        });
      });
    });
  }
  return out;
}

/** The week-by-week self-study tasks (and career-skill tips) from the study plan. */
export function buildStudyTasks(colorFor: (module: string) => string, uid: () => string) {
  const out: any[] = [];
  WEEKS.forEach(wk => {
    WEEKDAYS.forEach((day, dayIdx) => {
      const dayData = wk.days[day];
      if (!dayData) return;
      const date = dateKey(dateForWeekDay(wk.week, dayIdx));
      const startTime = dayData.slots && dayData.slots[0] ? dayData.slots[0].split("-")[0] : "14:00";
      (dayData.tasks || []).forEach((t, i) => {
        out.push({
          id: uid(),
          title: t.replace(/^PRIORITY:\s*/, ""),
          module: "Self-study",
          date,
          time: i === 0 ? startTime : undefined,
          duration: 45,
          done: false,
          color: colorFor("Self-study"),
          kind: "task",
        });
      });
      if (dayData.career) {
        out.push({
          id: uid(),
          title: dayData.career,
          module: "Career development",
          date,
          duration: 30,
          done: false,
          color: colorFor("Career development"),
          kind: "task",
        });
      }
    });
  });
  return out;
}

/** One deadline task per assignment that has a confirmed due date. */
export function buildDeadlineTasks(colorFor: (module: string) => string, uid: () => string) {
  return ASSIGNMENTS.filter(a => a.due).map(a => ({
    id: uid(),
    title: a.title,
    module: MODULE_NAMES[a.module] || a.module,
    date: a.due as string,
    time: "16:00",
    duration: 30,
    done: false,
    color: colorFor(MODULE_NAMES[a.module] || a.module),
    kind: "deadline",
  }));
}

/** Assignment stage checkpoints as lighter-weight tasks, dated to the Monday of their "by" week. */
export function buildStageTasks(colorFor: (module: string) => string, uid: () => string) {
  const out: any[] = [];
  ASSIGNMENTS.forEach(a => {
    a.stages.forEach(stage => {
      const m = stage.by.match(/Week\s*(\d+)/i);
      if (!m) return;
      const week = parseInt(m[1], 10);
      if (week < 1 || week > 12) return;
      out.push({
        id: uid(),
        title: `${a.module}: ${stage.task}`,
        module: MODULE_NAMES[a.module] || a.module,
        date: dateKey(dateForWeekDay(week, 0)),
        duration: 40,
        done: false,
        color: colorFor(MODULE_NAMES[a.module] || a.module),
        kind: "task",
      });
    });
  });
  return out;
}
