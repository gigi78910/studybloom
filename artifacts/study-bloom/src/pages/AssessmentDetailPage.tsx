import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, BookOpen, ClipboardCheck, GraduationCap, ListChecks, Pencil, Sparkles, X } from "lucide-react";
import { prettyDate } from "../App";
import { getAssessment, getModuleForAssessment } from "../data/assessments";
import {
  ASSESSMENT_PRIORITIES,
  ASSESSMENT_STATUSES,
  type AssessmentPriority,
  type AssessmentProgressMap,
  type AssessmentStatus,
  daysRemaining,
  effectiveDeadlineISO,
  getProgress,
  progressPercent,
  urgencyBand,
} from "../lib/assessmentProgress";

function backwardsTimeline(deadlineISO: string | null, stepCount: number): { label: string; dateISO: string | null }[] {
  if (!deadlineISO || stepCount === 0) return [];
  const deadline = new Date(`${deadlineISO}T12:00:00`);
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  const totalDays = Math.max(1, Math.round((deadline.getTime() - today.getTime()) / 86400000));
  // Compress the plan automatically if little time is left: a stage a day at minimum, otherwise
  // spread the stages evenly back from the deadline with a small buffer before submission.
  const usableDays = Math.max(stepCount, totalDays - 1);
  const gap = Math.max(1, Math.floor(usableDays / stepCount));
  const stages: { label: string; dateISO: string | null }[] = [];
  for (let i = 0; i < stepCount; i++) {
    const daysBeforeDeadline = (stepCount - i) * gap;
    const d = new Date(deadline);
    d.setDate(d.getDate() - daysBeforeDeadline);
    stages.push({ label: `Stage ${i + 1}`, dateISO: d.toISOString().slice(0, 10) });
  }
  stages.push({ label: "Submit", dateISO: deadlineISO });
  return stages;
}

export default function AssessmentDetailPage({
  id,
  assessmentProgress,
  setAssessmentProgress,
}: {
  id: string;
  assessmentProgress: AssessmentProgressMap;
  setAssessmentProgress: React.Dispatch<React.SetStateAction<AssessmentProgressMap>>;
}) {
  const assessment = getAssessment(id);
  const module = getModuleForAssessment(id);

  if (!assessment) {
    return (
      <div className="page-enter">
        <Link href="/deadlines" className="outline-button">
          <ArrowLeft size={14} /> Back to Deadlines
        </Link>
        <div className="card empty-state" style={{ marginTop: 20 }}>
          <p>That assessment couldn't be found.</p>
        </div>
      </div>
    );
  }

  const progress = getProgress(assessmentProgress, id);
  const percent = progressPercent(assessment, progress);
  const effectiveISO = effectiveDeadlineISO(assessment, progress);
  const days = daysRemaining(assessment, progress);
  const band = urgencyBand(days);
  const timeline = useMemo(() => backwardsTimeline(effectiveISO, assessment.taskSteps.length), [effectiveISO, assessment]);
  const [editingDeadline, setEditingDeadline] = useState(false);
  const [overrideDate, setOverrideDate] = useState(progress.deadlineOverrideISO || "");
  const [overrideNote, setOverrideNote] = useState(progress.deadlineOverrideNote || "");

  const toggleStep = (title: string) => {
    setAssessmentProgress((all) => {
      const current = getProgress(all, id);
      const has = current.checkedSteps.includes(title);
      return {
        ...all,
        [id]: {
          ...current,
          checkedSteps: has ? current.checkedSteps.filter((t) => t !== title) : [...current.checkedSteps, title],
        },
      };
    });
  };
  const setStatus = (status: AssessmentStatus) =>
    setAssessmentProgress((all) => ({ ...all, [id]: { ...getProgress(all, id), status } }));
  const setPriority = (priority: AssessmentPriority) =>
    setAssessmentProgress((all) => ({ ...all, [id]: { ...getProgress(all, id), priority } }));
  const saveOverride = () => {
    setAssessmentProgress((all) => ({
      ...all,
      [id]: { ...getProgress(all, id), deadlineOverrideISO: overrideDate || null, deadlineOverrideNote: overrideNote.trim() || undefined },
    }));
    setEditingDeadline(false);
  };
  const clearOverride = () => {
    setAssessmentProgress((all) => ({ ...all, [id]: { ...getProgress(all, id), deadlineOverrideISO: null, deadlineOverrideNote: undefined } }));
    setOverrideDate("");
    setOverrideNote("");
    setEditingDeadline(false);
  };

  return (
    <div className="page-enter">
      <Link href="/deadlines" className="outline-button" data-testid="link-back-deadlines">
        <ArrowLeft size={14} /> Back to Deadlines
      </Link>
      <div className="eyebrow" style={{ marginTop: 18 }}>
        {assessment.moduleCode}
        {module?.name && module.name !== module.code ? ` · ${module.name}` : ""}
      </div>
      <h1 className="page-title">{assessment.title}</h1>
      <p className="page-description">{assessment.description}</p>

      <section className="grid grid-3">
        <div className="card stats-card">
          <div className="mini-label">Deadline{progress.deadlineOverrideISO ? " (your date)" : ""}</div>
          <div className="stats-number" style={{ fontSize: 22 }}>
            {effectiveISO ? prettyDate(effectiveISO, { day: "numeric", month: "short", year: "numeric" }) : "TBC"}
          </div>
          <div className="stats-caption">
            {progress.deadlineOverrideISO
              ? `${progress.deadlineOverrideNote ? `${progress.deadlineOverrideNote} · ` : ""}Official: ${assessment.deadlineDisplay}`
              : assessment.deadlineDisplay}
          </div>
          <button className="tiny-button" style={{ marginTop: 6, padding: 0 }} onClick={() => setEditingDeadline((v) => !v)} data-testid="button-edit-detail-deadline">
            <Pencil size={12} /> {progress.deadlineOverrideISO ? "Edit your date" : "Amend deadline"}
          </button>
          {editingDeadline && (
            <div style={{ marginTop: 10 }}>
              <div className="field">
                <label>Your date</label>
                <input type="date" value={overrideDate} onChange={(e) => setOverrideDate(e.target.value)} aria-label="Amended deadline date" />
              </div>
              <div className="field" style={{ marginTop: 6 }}>
                <label>Note (optional)</label>
                <input value={overrideNote} onChange={(e) => setOverrideNote(e.target.value)} placeholder="e.g. Confirmed on Canvas" />
              </div>
              <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
                <button className="primary-button" disabled={!overrideDate} onClick={saveOverride}>
                  Save
                </button>
                {progress.deadlineOverrideISO && (
                  <button className="outline-button" onClick={clearOverride}>
                    <X size={13} /> Use official date
                  </button>
                )}
                <button className="tiny-button" onClick={() => setEditingDeadline(false)}>
                  Cancel
                </button>
              </div>
              <p className="page-description" style={{ fontSize: 11, margin: "6px 0 0" }}>
                This only changes what you see — the official source data stays as-is above.
              </p>
            </div>
          )}
        </div>
        <div className={`card stats-card ${band.tone === "coral" ? "accent-coral" : band.tone === "apricot" ? "accent-apricot" : band.tone === "lilac" ? "accent-lilac" : band.tone === "sage" ? "accent-sage" : ""}`}>
          <div className="mini-label">Urgency</div>
          <div className="stats-number" style={{ fontSize: 22 }}>
            {band.marker} {band.label}
          </div>
          <div className="stats-caption">{days !== null ? (days < 0 ? `${Math.abs(days)} days overdue` : `${days} days left`) : "Confirm the exact date via Canvas"}</div>
        </div>
        <div className="card stats-card accent-sage">
          <div className="mini-label">Checklist progress</div>
          <div className="stats-number">{percent}%</div>
          <div className="progress-bar">
            <span style={{ width: `${percent}%` }} />
          </div>
        </div>
      </section>

      {assessment.deadlineConflictNote && (
        <div className="card accent-apricot" style={{ marginTop: 16 }}>
          <div className="mini-label">Dates as stated in the source documents</div>
          <p style={{ margin: "6px 0 0" }}>{assessment.deadlineConflictNote}</p>
        </div>
      )}

      <div className="toolbar">
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <select className="status-select" value={progress.status} onChange={(e) => setStatus(e.target.value as AssessmentStatus)} aria-label="Status" data-testid="select-detail-status">
            {ASSESSMENT_STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <select className="status-select" value={progress.priority} onChange={(e) => setPriority(e.target.value as AssessmentPriority)} aria-label="Priority" data-testid="select-detail-priority">
            {ASSESSMENT_PRIORITIES.map((p) => (
              <option key={p} value={p}>
                {p} priority
              </option>
            ))}
          </select>
        </div>
      </div>

      <section className="card" style={{ marginTop: 18 }}>
        <div className="section-heading" style={{ marginTop: 0 }}>
          <h2>Overview</h2>
        </div>
        <div className="grid grid-2">
          <div>
            <div className="mini-label">Type</div>
            <p>{assessment.type}</p>
          </div>
          {assessment.weighting && (
            <div>
              <div className="mini-label">Weighting</div>
              <p>{assessment.weighting}</p>
            </div>
          )}
          {assessment.wordCount && (
            <div>
              <div className="mini-label">Word / length limit</div>
              <p>{assessment.wordCount}</p>
            </div>
          )}
          {assessment.timeLimit && (
            <div>
              <div className="mini-label">Time limit</div>
              <p>{assessment.timeLimit}</p>
            </div>
          )}
          {assessment.submissionMethod && (
            <div>
              <div className="mini-label">Submission method</div>
              <p>{assessment.submissionMethod}</p>
            </div>
          )}
          {assessment.setDate && (
            <div>
              <div className="mini-label">Set date</div>
              <p>{assessment.setDate}</p>
            </div>
          )}
          {assessment.genAiTier && (
            <div>
              <div className="mini-label">GenAI use policy</div>
              <p>{assessment.genAiTier}</p>
            </div>
          )}
        </div>
        {assessment.learningOutcomes && assessment.learningOutcomes.length > 0 && (
          <div style={{ marginTop: 12 }}>
            <div className="mini-label">Learning outcomes</div>
            <ul>
              {assessment.learningOutcomes.map((lo, i) => (
                <li key={i}>{lo}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="card" style={{ marginTop: 18 }}>
        <div className="section-heading" style={{ marginTop: 0 }}>
          <h2>
            <ListChecks size={20} style={{ verticalAlign: -3, marginRight: 6 }} />
            What do I actually need to do?
          </h2>
          <span>{progress.checkedSteps.length}/{assessment.taskSteps.length} done</span>
        </div>
        {assessment.taskSteps.length ? (
          <div className="list">
            {assessment.taskSteps.map((step, i) => {
              const checked = progress.checkedSteps.includes(step.title);
              return (
                <label key={i} className="task-row" style={{ cursor: "pointer" }} data-testid={`checklist-item-${i}`}>
                  <input type="checkbox" className="check" checked={checked} onChange={() => toggleStep(step.title)} />
                  <div className="task-copy">
                    <div className={`task-title ${checked ? "done" : ""}`}>{step.title}</div>
                    <div className="task-meta">{step.detail}</div>
                  </div>
                </label>
              );
            })}
          </div>
        ) : (
          <p className="page-description">A step-by-step breakdown hasn't been added for this assessment yet.</p>
        )}
      </section>

      {timeline.length > 0 && (
        <section className="card" style={{ marginTop: 18 }}>
          <div className="section-heading" style={{ marginTop: 0 }}>
            <h2>Suggested timeline</h2>
            <span>counting back from the deadline</span>
          </div>
          <div className="list">
            {timeline.map((stage, i) => (
              <div key={i} className="task-row">
                <div className="task-copy">
                  <div className="task-title">{stage.label}{assessment.taskSteps[i] ? `: ${assessment.taskSteps[i].title}` : ""}</div>
                  <div className="task-meta">{stage.dateISO ? prettyDate(stage.dateISO, { weekday: "short", day: "numeric", month: "short" }) : ""}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="card" style={{ marginTop: 18 }}>
        <div className="section-heading" style={{ marginTop: 0 }}>
          <h2>
            <ClipboardCheck size={20} style={{ verticalAlign: -3, marginRight: 6 }} />
            Assessment rubric
          </h2>
        </div>
        {assessment.rubric.status === "not-available" ? (
          <div className="empty-state">
            <p>{assessment.rubric.note}</p>
          </div>
        ) : (
          assessment.rubric.tables.map((table, ti) => (
            <div key={ti} style={{ marginTop: ti > 0 ? 24 : 0 }}>
              {table.label && <div className="mini-label" style={{ marginBottom: 8 }}>{table.label}</div>}
              {table.note && <p className="page-description" style={{ fontSize: 13 }}>{table.note}</p>}
              <div className="rubric-scroll">
                <table className="rubric-table">
                  <thead>
                    <tr>
                      <th>Criterion</th>
                      {table.criteria[0]?.bands.map((b) => (
                        <th key={b.band}>
                          {b.band}
                          <br />
                          <small>{b.range}</small>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.criteria.map((c, ci) => (
                      <tr key={ci}>
                        <td>
                          <strong>{c.name}</strong>
                          {c.weight ? <div className="mini-label">{c.weight}</div> : null}
                          {c.sourceNote && <div className="verify-flag" style={{ fontSize: 11, marginTop: 4 }}>{c.sourceNote}</div>}
                        </td>
                        {c.bands.map((b) => (
                          <td key={b.band}>{b.text}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {table.academicIntegrity && table.academicIntegrity.length > 0 && (
                <div style={{ marginTop: 12 }}>
                  <div className="mini-label">Academic integrity</div>
                  {table.academicIntegrity.map((row, ri) => (
                    <p key={ri} style={{ fontSize: 13, margin: "4px 0" }}>
                      <strong>{row.label}:</strong> {row.text}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </section>

      {assessment.topBandGuidance && (
        <section className="card accent-lilac" style={{ marginTop: 18 }}>
          <div className="section-heading" style={{ marginTop: 0 }}>
            <h2>
              <GraduationCap size={20} style={{ verticalAlign: -3, marginRight: 6 }} />
              How to aim for the top band
            </h2>
          </div>
          <p>{assessment.topBandGuidance}</p>
          <p className="page-description" style={{ fontSize: 12 }}>
            This describes what the rubric's top bands look for — it isn't a guarantee of any particular grade.
          </p>
        </section>
      )}

      {assessment.goodWorkLooksLike && assessment.goodWorkLooksLike.length > 0 && (
        <section className="card accent-sage" style={{ marginTop: 18 }}>
          <div className="section-heading" style={{ marginTop: 0 }}>
            <h2>
              <Sparkles size={20} style={{ verticalAlign: -3, marginRight: 6 }} />
              What good work looks like
            </h2>
          </div>
          <ul>
            {assessment.goodWorkLooksLike.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </section>
      )}

      {assessment.readingRefs && assessment.readingRefs.length > 0 && (
        <section className="card" style={{ marginTop: 18 }}>
          <div className="section-heading" style={{ marginTop: 0 }}>
            <h2>
              <BookOpen size={20} style={{ verticalAlign: -3, marginRight: 6 }} />
              Reading for this assessment
            </h2>
          </div>
          <div className="list">
            {assessment.readingRefs.map((r, i) => (
              <div key={i} className="task-row">
                <div className="task-copy">
                  <div className="task-title">{r.title}</div>
                  <div className="task-meta">
                    {r.author}
                    {r.note ? ` · ${r.note}` : ""}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {assessment.gaps && assessment.gaps.length > 0 && (
        <section className="card" style={{ marginTop: 18 }}>
          <div className="mini-label">Not yet confirmed</div>
          <ul>
            {assessment.gaps.map((g, i) => (
              <li key={i} className="verify-flag" style={{ fontSize: 13 }}>
                {g}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
