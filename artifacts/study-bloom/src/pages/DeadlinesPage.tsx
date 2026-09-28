import { useMemo, useState } from "react";
import { Link } from "wouter";
import { AlertTriangle, CalendarDays, CheckCircle2, Filter, Grid2X2, ListTodo, Rows3, Search } from "lucide-react";
import { prettyDate, todayKey } from "../App";
import { ALL_ASSESSMENTS, SEMESTER1_MODULES, type Assessment } from "../data/assessments";
import {
  ASSESSMENT_PRIORITIES,
  ASSESSMENT_STATUSES,
  type AssessmentPriority,
  type AssessmentProgressMap,
  type AssessmentStatus,
  daysRemaining,
  getProgress,
  progressPercent,
  urgencyBand,
} from "../lib/assessmentProgress";

type SortKey = "date" | "module" | "priority" | "progress";
type FilterKey = "all" | "upcoming" | "overdue" | "completed" | "high-priority";

const priorityRank: Record<AssessmentPriority, number> = { Urgent: 0, High: 1, Medium: 2, Low: 3 };

function UrgencyBadge({ days }: { days: number | null }) {
  const band = urgencyBand(days);
  return (
    <span className={`tag-chip tone-${band.tone}`} title={band.label}>
      <strong style={{ marginRight: 4 }}>{band.marker}</strong>
      {band.label}
      {days !== null && band.key !== "unknown" ? ` · ${days < 0 ? `${Math.abs(days)}d overdue` : `${days}d left`}` : ""}
    </span>
  );
}

export default function DeadlinesPage({
  assessmentProgress,
  setAssessmentProgress,
}: {
  assessmentProgress: AssessmentProgressMap;
  setAssessmentProgress: React.Dispatch<React.SetStateAction<AssessmentProgressMap>>;
}) {
  const [query, setQuery] = useState("");
  const [moduleFilter, setModuleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState<FilterKey>("all");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [view, setView] = useState<"list" | "calendar">("list");
  const [month, setMonth] = useState(new Date());

  const gradedAssessments = useMemo(() => ALL_ASSESSMENTS.filter((a) => !a.notGraded), []);
  const types = useMemo(() => Array.from(new Set(gradedAssessments.map((a) => a.type))), [gradedAssessments]);

  const withMeta = useMemo(
    () =>
      gradedAssessments.map((a) => {
        const progress = getProgress(assessmentProgress, a.id);
        const days = daysRemaining(a);
        return { assessment: a, progress, days, percent: progressPercent(a, progress) };
      }),
    [gradedAssessments, assessmentProgress]
  );

  const filtered = withMeta.filter(({ assessment, progress, days }) => {
    if (moduleFilter !== "All" && assessment.moduleCode !== moduleFilter) return false;
    if (typeFilter !== "All" && assessment.type !== typeFilter) return false;
    if (statusFilter === "completed" && progress.status !== "Submitted") return false;
    if (statusFilter === "overdue" && !(days !== null && days < 0 && progress.status !== "Submitted")) return false;
    if (statusFilter === "upcoming" && !(days !== null && days >= 0 && progress.status !== "Submitted")) return false;
    if (statusFilter === "high-priority" && !(progress.priority === "High" || progress.priority === "Urgent")) return false;
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      if (!`${assessment.moduleCode} ${assessment.title} ${assessment.type}`.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortKey === "date") {
      if (a.assessment.deadlineISO && b.assessment.deadlineISO) return a.assessment.deadlineISO.localeCompare(b.assessment.deadlineISO);
      if (a.assessment.deadlineISO) return -1;
      if (b.assessment.deadlineISO) return 1;
      return 0;
    }
    if (sortKey === "module") return a.assessment.moduleCode.localeCompare(b.assessment.moduleCode);
    if (sortKey === "priority") return priorityRank[a.progress.priority] - priorityRank[b.progress.priority];
    return b.percent - a.percent;
  });

  const summary = {
    upcoming: withMeta.filter((m) => m.days !== null && m.days >= 0 && m.progress.status !== "Submitted").length,
    overdue: withMeta.filter((m) => m.days !== null && m.days < 0 && m.progress.status !== "Submitted").length,
    completed: withMeta.filter((m) => m.progress.status === "Submitted").length,
    thisWeek: withMeta.filter((m) => m.days !== null && m.days >= 0 && m.days <= 7).length,
    next30: withMeta.filter((m) => m.days !== null && m.days >= 0 && m.days <= 30).length,
  };

  const setPriority = (id: string, priority: AssessmentPriority) =>
    setAssessmentProgress((all) => ({ ...all, [id]: { ...getProgress(all, id), priority } }));
  const setStatus = (id: string, status: AssessmentStatus) =>
    setAssessmentProgress((all) => ({ ...all, [id]: { ...getProgress(all, id), status } }));

  const first = new Date(month.getFullYear(), month.getMonth(), 1, 12);
  const offset = (first.getDay() + 6) % 7;
  const cells = Array.from({ length: 42 }, (_, i) => new Date(month.getFullYear(), month.getMonth(), i - offset + 1, 12));
  const monthLabel = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(month);

  return (
    <div className="page-enter">
      <div className="eyebrow">Every Semester 1 assessment, in one place</div>
      <h1 className="page-title">
        Deadlines that stay <em>in view.</em>
      </h1>
      <p className="page-description">
        Every assessment across your Semester 1 modules, with real dates, weightings and progress — sourced from the official
        module guides and rubrics.
      </p>

      <section className="grid grid-3" style={{ marginTop: 24 }}>
        <div className="card stats-card">
          <div className="mini-label">Upcoming</div>
          <div className="stats-number">{summary.upcoming}</div>
          <div className="stats-caption">not yet submitted</div>
        </div>
        <div className="card stats-card accent-coral">
          <div className="mini-label">Overdue</div>
          <div className="stats-number">{summary.overdue}</div>
          <div className="stats-caption">past their deadline</div>
        </div>
        <div className="card stats-card accent-sage">
          <div className="mini-label">Completed</div>
          <div className="stats-number">{summary.completed}</div>
          <div className="stats-caption">marked Submitted</div>
        </div>
      </section>
      <section className="grid grid-2" style={{ marginTop: 14 }}>
        <div className="card stats-card accent-lilac">
          <div className="mini-label">This week</div>
          <div className="stats-number">{summary.thisWeek}</div>
          <div className="stats-caption">due in the next 7 days</div>
        </div>
        <div className="card stats-card accent-apricot">
          <div className="mini-label">Next 30 days</div>
          <div className="stats-number">{summary.next30}</div>
          <div className="stats-caption">on the horizon</div>
        </div>
      </section>

      <div className="toolbar">
        <div className="field" style={{ minWidth: 220 }}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search module, title or type..."
            aria-label="Search assessments"
            data-testid="input-deadlines-search"
          />
        </div>
        <div className="view-toggle" aria-label="Deadlines view">
          <button className={view === "list" ? "active" : ""} onClick={() => setView("list")} data-testid="button-view-list">
            <Rows3 size={14} /> List
          </button>
          <button className={view === "calendar" ? "active" : ""} onClick={() => setView("calendar")} data-testid="button-view-calendar">
            <Grid2X2 size={14} /> Calendar
          </button>
        </div>
      </div>

      <div className="module-filter">
        <Filter size={14} />
        <span>Module</span>
        <button className={moduleFilter === "All" ? "active" : ""} onClick={() => setModuleFilter("All")}>
          All
        </button>
        {SEMESTER1_MODULES.map((m) => (
          <button key={m.code} className={moduleFilter === m.code ? "active" : ""} onClick={() => setModuleFilter(m.code)}>
            {m.code}
          </button>
        ))}
      </div>
      <div className="module-filter" style={{ marginTop: 8 }}>
        <Filter size={14} />
        <span>Status</span>
        {(["all", "upcoming", "overdue", "completed", "high-priority"] as FilterKey[]).map((key) => (
          <button key={key} className={statusFilter === key ? "active" : ""} onClick={() => setStatusFilter(key)}>
            {key === "all" ? "Everything" : key === "high-priority" ? "High priority" : key[0].toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>
      <div className="module-filter" style={{ marginTop: 8 }}>
        <Filter size={14} />
        <span>Type</span>
        <button className={typeFilter === "All" ? "active" : ""} onClick={() => setTypeFilter("All")}>
          All
        </button>
        {types.map((t) => (
          <button key={t} className={typeFilter === t ? "active" : ""} onClick={() => setTypeFilter(t)}>
            {t}
          </button>
        ))}
      </div>
      <div className="toolbar" style={{ marginTop: 10 }}>
        <span className="mini-label">{sorted.length} assessment{sorted.length === 1 ? "" : "s"}</span>
        <div className="module-filter">
          <span>Sort by</span>
          {(["date", "module", "priority", "progress"] as SortKey[]).map((key) => (
            <button key={key} className={sortKey === key ? "active" : ""} onClick={() => setSortKey(key)}>
              {key[0].toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {view === "list" ? (
        sorted.length ? (
          <div className="list" style={{ marginTop: 14, gap: 10, display: "flex", flexDirection: "column" }}>
            {sorted.map(({ assessment, progress, days, percent }) => (
              <div key={assessment.id} className="card" data-testid={`card-assessment-${assessment.id}`}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <div style={{ minWidth: 220 }}>
                    <div className="mini-label">
                      {assessment.moduleCode} · {assessment.type}
                    </div>
                    <Link href={`/deadlines/${assessment.id}`} style={{ textDecoration: "none" }}>
                      <h3 style={{ margin: "4px 0" }}>{assessment.title}</h3>
                    </Link>
                    <div className="task-meta">
                      {assessment.deadlineDisplay}
                      {assessment.weighting ? ` · ${assessment.weighting}` : ""}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <UrgencyBadge days={days} />
                  </div>
                </div>
                <div className="progress-bar" style={{ marginTop: 12 }}>
                  <span style={{ width: `${percent}%` }} />
                </div>
                <div className="toolbar" style={{ margin: "10px 0 0" }}>
                  <span className="mini-label">{percent}% of the task checklist complete</span>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <select
                      className="status-select"
                      value={progress.status}
                      onChange={(e) => setStatus(assessment.id, e.target.value as AssessmentStatus)}
                      aria-label={`Status for ${assessment.title}`}
                      data-testid={`select-status-${assessment.id}`}
                    >
                      {ASSESSMENT_STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <select
                      className="status-select"
                      value={progress.priority}
                      onChange={(e) => setPriority(assessment.id, e.target.value as AssessmentPriority)}
                      aria-label={`Priority for ${assessment.title}`}
                      data-testid={`select-priority-${assessment.id}`}
                    >
                      {ASSESSMENT_PRIORITIES.map((p) => (
                        <option key={p} value={p}>
                          {p} priority
                        </option>
                      ))}
                    </select>
                    <Link href={`/deadlines/${assessment.id}`} className="outline-button" data-testid={`link-open-${assessment.id}`}>
                      Open assessment
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card empty-state" style={{ marginTop: 14 }}>
            <ListTodo size={26} />
            <p>No assessments match these filters.</p>
            <small>Try clearing the search or filters above.</small>
          </div>
        )
      ) : (
        <div className="card calendar-wrap" style={{ marginTop: 14 }}>
          <div className="toolbar" style={{ margin: "0 0 12px" }}>
            <button className="outline-button" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}>
              ← Prev
            </button>
            <div className="switcher-label">{monthLabel}</div>
            <button className="outline-button" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}>
              Next →
            </button>
          </div>
          <div className="calendar-head">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
              <div key={day} className="calendar-day-label">
                {day.slice(0, 3)}
              </div>
            ))}
          </div>
          <div className="calendar-grid">
            {cells.map((day) => {
              const key = `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, "0")}-${String(day.getDate()).padStart(2, "0")}`;
              const inMonth = day.getMonth() === month.getMonth();
              const dayItems = sorted.filter((m) => m.assessment.deadlineISO === key);
              return (
                <div key={key} className={`calendar-cell ${!inMonth ? "muted-day" : ""} ${key === todayKey ? "today" : ""}`}>
                  <span className="calendar-number">{day.getDate()}</span>
                  <span className="calendar-events">
                    {dayItems.map((m) => (
                      <Link key={m.assessment.id} href={`/deadlines/${m.assessment.id}`} className="calendar-event deadline">
                        {m.assessment.moduleCode} · {m.assessment.title}
                      </Link>
                    ))}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
