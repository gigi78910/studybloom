import { useEffect, useMemo, useRef, useState } from "react";
import { Link, Route, Router, Switch, useLocation } from "wouter";
import {
  BookOpen, Bookmark, BrainCircuit, Briefcase, CalendarDays, Check, CheckCircle2, ChevronLeft, ChevronRight, Clock3, Copy, ExternalLink, Flower2,
  Filter, Gamepad2, Grid2X2, LayoutDashboard, Link2, ListTodo, Minus, NotebookPen, Pause, Pencil, Play, Plus,
  RefreshCw, Rows3, RotateCcw, Search, Sparkles, Target, Trash2, X
} from "lucide-react";
import { MODULES, buildClassTasks, buildStudyTasks, buildDeadlineTasks, buildStageTasks } from "./data/studyData";
import { PARAPHRASE_BANK, PYTHON_BANK, type Difficulty, type ParaphraseQuestion, type PythonQuestion } from "./data/gameQuestions";
import { RESEARCH_SEED, type ResearchItem } from "./data/researchSeed";

type Task = { id: string; title: string; module: string; date: string; time?: string; duration?: number; done: boolean; color: string; kind?: "task" | "deadline" | "class" | "personal" };
type Goal = { id: string; title: string; detail: string; current: number; target: number; color: string };
type Note = { id: string; title: string; body: string; done: boolean; updated: string; color: string };
type Session = { id: string; label: string; minutes: number; date: string };
type JournalEntry = { id: string; title: string; date: string; body: string; tags: string[]; mood?: "good" | "neutral" | "tough" };
type JobStatus = "Not Started" | "Considering" | "Applied" | "Ongoing" | "Interview" | "Assessment" | "Not Successful" | "Offer" | "Got the Job" | "Withdrawn" | "Closed";
type Job = { id: string; company: string; title: string; field: "Cybersecurity" | "Data Science" | "Both" | "Other"; location: string; salary?: string; deadline?: string; link?: string; status: JobStatus; dateApplied?: string; notes?: string };
type SkillStats = { paraphraseCompleted: string[]; pythonCompleted: string[]; paraphraseGot: number; paraphraseTotal: number; pythonGot: number; pythonTotal: number; lastPlayed?: string; streak: number };
type CanvasLink = { id: string; module: string; url: string };
type CanvasAssignment = { courseName: string; title: string; dueAt: string | null; url: string | null };
type DiscoveredResearch = { id: string; source: "arXiv" | "PubMed"; title: string; authors: string; url: string; publishedAt: string; discoveredAt: string };
type DiscoveredJob = { id: string; title: string; company: string; url: string; geo: string; tag: string; postedAt: string; discoveredAt: string };

const JOB_STATUSES: JobStatus[] = ["Not Started", "Considering", "Applied", "Ongoing", "Interview", "Assessment", "Offer", "Got the Job", "Not Successful", "Withdrawn", "Closed"];
const jobStatusTone = (status: JobStatus): string => {
  if (status === "Got the Job" || status === "Offer") return "sage";
  if (status === "Interview" || status === "Assessment" || status === "Ongoing") return "lilac";
  if (status === "Not Successful" || status === "Withdrawn" || status === "Closed") return "muted";
  if (status === "Applied") return "apricot";
  return "coral";
};

const modules = MODULES;
const moduleFilters = [...modules, "Self-study", "Career development", "Personal / rest"];
const colors = ["coral", "lilac", "sage", "apricot"];
const colorForModule = (module: string) => colors[Math.max(0, moduleFilters.indexOf(module)) % colors.length];
const uid = () => Math.random().toString(36).slice(2, 9);
const dateKey = (date: Date) => { const d = new Date(date); d.setHours(12, 0, 0, 0); return d.toISOString().slice(0, 10); };
const addDays = (date: Date, amount: number) => { const d = new Date(date); d.setDate(d.getDate() + amount); return d; };
const startOfWeek = (date: Date) => { const d = new Date(date); const day = d.getDay(); const diff = day === 0 ? -6 : 1 - day; d.setDate(d.getDate() + diff); d.setHours(12, 0, 0, 0); return d; };
const monthLabel = (date: Date) => new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(date);
const prettyDate = (key: string, options?: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat("en-GB", options || { day: "numeric", month: "short" }).format(new Date(`${key}T12:00:00`));
const todayKey = dateKey(new Date());

function seedTasks(): Task[] {
  return [
    ...buildClassTasks(colorForModule, uid),
    ...buildStudyTasks(colorForModule, uid),
    ...buildStageTasks(colorForModule, uid),
    ...buildDeadlineTasks(colorForModule, uid),
  ] as Task[];
}
function seedGoals(): Goal[] {
  return [
    { id: "g1", title: "Submit every Semester 1 assessment", detail: "All 10 DASC500-513 deadlines, from the Week 6 stakeholder workshop through DASC513's Week 12 portfolio report.", current: 0, target: 10, color: "coral" },
    { id: "g2", title: "Lock in a dissertation supervisor", detail: "Build a shortlist through the term, then formally express interest in Semester 2 Week 3 (19 Feb 2027).", current: 0, target: 5, color: "lilac" },
    { id: "g3", title: "Build a security-minded portfolio", detail: "TryHackMe + Kaggle accounts, a documented GitHub project, and one certification path chosen by the end of term.", current: 0, target: 6, color: "sage" },
  ];
}
function seedNotes(): Note[] {
  return [
    { id: "n1", title: "Two things to double-check", body: "Monday's DASC500 session lists 'DASC510(?)' alongside it - worth confirming with the department whether that's a real module. And Wednesday's DASC509 slot shows as 11pm-1pm on the timetable, which is almost certainly meant to be 11am-1pm.", done: false, updated: "Today", color: "apricot" },
    { id: "n2", title: "Deadlines still TBC on Canvas", body: "DASC503's Assessment 1 (poster + oral) and Assessment 2 (written report) don't have confirmed dates yet - usually released around Week 4 and Week 8. Check Canvas as soon as they land and update the dates here.", done: false, updated: "Today", color: "coral" },
    { id: "n3", title: "For the harder weeks", body: "Rest is part of the plan, not a failure of it.", done: false, updated: "This week", color: "sage" },
  ];
}

function seedSkillStats(): SkillStats {
  return { paraphraseCompleted: [], pythonCompleted: [], paraphraseGot: 0, paraphraseTotal: 0, pythonGot: 0, pythonTotal: 0, streak: 0 };
}

// A tiny shared store so any number of useStored() instances can report sync health to one banner,
// without threading state through every page.
let syncFailureCount = 0;
const syncListeners = new Set<() => void>();
function reportSyncResult(ok: boolean) {
  syncFailureCount = ok ? 0 : syncFailureCount + 1;
  syncListeners.forEach(l => l());
}
function useSyncTrouble(): boolean {
  const [, force] = useState(0);
  useEffect(() => {
    const listener = () => force(n => n + 1);
    syncListeners.add(listener);
    return () => { syncListeners.delete(listener); };
  }, []);
  return syncFailureCount > 0;
}

/**
 * Same call shape as a plain useState, but the value is mirrored to /api/data (Postgres, via
 * Vercel's Neon integration) so it follows you across devices, while every write also lands in
 * localStorage immediately so the page never waits on the network to feel responsive. Only ever
 * mounted after LoginGate confirms the passcode session is valid — every fetch here assumes that.
 */
function useStored<T>(key: string, initial: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    try { const saved = localStorage.getItem(key); return saved ? JSON.parse(saved) as T : initial; } catch { return initial; }
  });
  const hydratedRef = useRef({ done: false, skipNextPush: false });
  const [, rerender] = useState(0);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/data?key=${encodeURIComponent(key)}`, { credentials: "include" })
      .then(r => (r.ok ? r.json() : Promise.reject(r)))
      .then((data: { value: T | null }) => {
        if (cancelled) return;
        if (data.value !== null && data.value !== undefined) {
          hydratedRef.current.skipNextPush = true;
          setValue(data.value);
        }
        reportSyncResult(true);
      })
      .catch(() => { if (!cancelled) reportSyncResult(false); })
      .finally(() => { if (!cancelled) { hydratedRef.current.done = true; rerender(n => n + 1); } });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignore quota errors */ }
    if (!hydratedRef.current.done) return;
    if (hydratedRef.current.skipNextPush) { hydratedRef.current.skipNextPush = false; return; }
    const timer = window.setTimeout(() => {
      fetch(`/api/data?key=${encodeURIComponent(key)}`, {
        method: "PUT", credentials: "include", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, value }),
      }).then(r => { if (!r.ok) throw new Error("sync failed"); reportSyncResult(true); }).catch(() => reportSyncResult(false));
    }, 600);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, key]);

  return [value, setValue];
}

function SyncBanner() {
  const trouble = useSyncTrouble();
  if (!trouble) return null;
  return <div className="sync-banner" role="status">Study Bloom couldn't sync just now — your changes are saved on this device and will sync once the connection returns.</div>;
}

const nav = [
  { href: "/", label: "Today", icon: LayoutDashboard },
  { href: "/week", label: "Week", icon: CalendarDays },
  { href: "/month", label: "Month", icon: CalendarDays },
  { href: "/goals", label: "Goals", icon: Target },
  { href: "/notes", label: "Notes", icon: NotebookPen },
  { href: "/journal", label: "Journal", icon: BookOpen },
  { href: "/games", label: "Games", icon: Gamepad2 },
  { href: "/research", label: "Research", icon: Bookmark },
  { href: "/jobs", label: "Jobs", icon: Briefcase },
  { href: "/focus", label: "Focus", icon: Clock3 },
];

function Shell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  return <div className="app-shell">
    <aside className="sidebar">
      <Link href="/" className="brand" data-testid="link-brand">
        <span className="brand-mark"><Flower2 size={21} strokeWidth={1.7} /></span>
        <span><span className="brand-title">Study Bloom</span><span className="brand-subtitle">your gentle study desk</span></span>
      </Link>
      <div className="nav-label">Open a page</div>
      <nav className="nav-list" aria-label="Primary navigation">
        {nav.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className={`nav-link ${location === href ? "active" : ""}`} data-testid={`link-nav-${label.toLowerCase()}`}><Icon size={17} strokeWidth={1.7} /><span>{label}</span></Link>)}
      </nav>
      <div className="sidebar-foot"><p>Make room for good work.</p><small>Semester 01 · 2026</small><button className="tiny-button" style={{ marginTop: 8, padding: 0, color: "var(--muted-ink)" }} onClick={() => { fetch("/api/auth", { method: "POST", credentials: "include", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "logout" }) }).finally(() => window.location.reload()); }} data-testid="button-sign-out">Sign out</button></div>
    </aside>
    <main className="main">
      <SyncBanner />
      <div className="topbar"><div className="mobile-brand">Study Bloom</div><div className="topbar-meta">{new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long" }).format(new Date())}</div><div className="topbar-actions"><Link href="/focus" className="outline-button" data-testid="link-top-focus"><Play size={13} /> Focus now</Link></div></div>
      {children}
    </main>
  </div>;
}

function Botanical() {
  return <svg className="hero-botanical" viewBox="0 0 180 180" aria-hidden="true">
    <path d="M86 158C89 125 88 91 91 51" /><path d="M88 115C63 100 45 84 29 58" /><path d="M89 105C113 93 135 75 149 48" />
    <path d="M88 137C65 132 44 121 27 105" /><path d="M88 130C112 123 133 110 150 89" />
    <ellipse className="petal" cx="28" cy="48" rx="18" ry="34" transform="rotate(-27 28 48)" /><ellipse className="petal" cx="49" cy="60" rx="15" ry="28" transform="rotate(-44 49 60)" />
    <ellipse className="petal" cx="151" cy="41" rx="18" ry="34" transform="rotate(30 151 41)" /><ellipse className="petal" cx="130" cy="63" rx="15" ry="28" transform="rotate(43 130 63)" />
    <path d="M88 158C67 159 45 153 25 142M89 154C112 153 137 145 157 130" />
  </svg>;
}

function TaskRow({ task, onToggle, onEdit, onDelete }: { task: Task; onToggle: () => void; onEdit: () => void; onDelete: () => void }) {
  return <div className="task-row" data-testid={`row-task-${task.id}`}>
    <input className="check" type="checkbox" checked={task.done} onChange={onToggle} aria-label={`Mark ${task.title} complete`} data-testid={`checkbox-task-${task.id}`} />
    <div className="task-copy"><div className={`task-title ${task.done ? "done" : ""}`}>{task.title}</div><div className="task-meta">{task.time || "Flexible"} · {task.module}</div></div>
    <div className="row-actions"><button className="tiny-button" onClick={onEdit} aria-label={`Edit ${task.title}`} data-testid={`button-edit-task-${task.id}`}><Pencil size={14} /></button><button className="tiny-button" onClick={onDelete} aria-label={`Delete ${task.title}`} data-testid={`button-delete-task-${task.id}`}><Trash2 size={14} /></button></div>
  </div>;
}

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-header"><h2 className="modal-title" id="modal-title">{title}</h2><button className="icon-button" onClick={onClose} aria-label="Close dialog" data-testid="button-close-modal"><X size={17} /></button></div>
      {children}
    </div>
  </div>;
}

function TaskForm({ initial, defaultDate, onSave, onClose }: { initial?: Task; defaultDate?: string; onSave: (task: Task) => void; onClose: () => void }) {
  const [title, setTitle] = useState(initial?.title || "");
  const [module, setModule] = useState(initial?.module || modules[0]);
  const [date, setDate] = useState(initial?.date || defaultDate || todayKey);
  const [time, setTime] = useState(initial?.time || "");
  const [duration, setDuration] = useState(String(initial?.duration || 50));
  const [kind, setKind] = useState<Task["kind"]>(initial?.kind || "task");
  return <div className="form-grid">
    <div className="field"><label htmlFor="task-title">What needs doing?</label><input id="task-title" autoFocus value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Outline the discussion section" data-testid="input-task-title" /></div>
    <div className="field"><label htmlFor="task-module">Module or thread</label><select id="task-module" value={module} onChange={e => setModule(e.target.value)} data-testid="select-task-module">{modules.map(m => <option key={m}>{m}</option>)}<option>Career development</option><option>Personal / rest</option></select></div>
    <div className="form-row"><div className="field"><label htmlFor="task-date">Date</label><input id="task-date" type="date" value={date} onChange={e => setDate(e.target.value)} data-testid="input-task-date" /></div><div className="field"><label htmlFor="task-time">Start time</label><input id="task-time" type="time" value={time} onChange={e => setTime(e.target.value)} data-testid="input-task-time" /></div></div>
    <div className="form-row"><div className="field"><label htmlFor="task-duration">Minutes</label><input id="task-duration" type="number" min="5" step="5" value={duration} onChange={e => setDuration(e.target.value)} data-testid="input-task-duration" /></div><div className="field"><label htmlFor="task-kind">Type</label><select id="task-kind" value={kind} onChange={e => setKind(e.target.value as Task["kind"])} data-testid="select-task-kind"><option value="task">Study block</option><option value="class">Class / seminar</option><option value="deadline">Deadline</option><option value="personal">Life / rest</option></select></div></div>
    <div className="modal-footer"><button className="outline-button" onClick={onClose} data-testid="button-cancel-task">Cancel</button><button className="primary-button" disabled={!title.trim() || !date} onClick={() => onSave({ id: initial?.id || uid(), title: title.trim(), module, date, time, duration: Number(duration) || 50, done: initial?.done || false, color: initial?.color || colors[Math.floor(Math.random() * colors.length)], kind })} data-testid="button-save-task"><Check size={14} /> Save block</button></div>
  </div>;
}

const timeToMinutes = (time?: string) => {
  if (!time) return 9 * 60;
  const [hours, minutes] = time.split(":").map(Number);
  return (hours || 0) * 60 + (minutes || 0);
};

const moduleShort = (module: string) => {
  if (module === "Career development") return "Career";
  if (module === "Personal / rest") return "Life / rest";
  return module
    .replace("Data Science & AI for Health Innovation", "Data Science + AI")
    .replace("Computer Programming for Health Research", "Programming for Health")
    .replace("Practical & Responsible AI", "Responsible AI");
};

function ScheduleTimeline({ days, tasks, onEdit, onToggle, onDelete, onAdd }: {
  days: Date[];
  tasks: Task[];
  onEdit: (task: Task) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onAdd: (date: string) => void;
}) {
  const startHour = 8;
  const endHour = 19;
  const totalMinutes = (endHour - startHour) * 60;
  const hours = Array.from({ length: endHour - startHour + 1 }, (_, index) => startHour + index);
  return <div className="schedule-card card">
    <div className="timeline-heading">
      <div><div className="mini-label">Timetable view</div><h2>See the shape of the week.</h2></div>
      <span className="timeline-hint">08:00 — 19:00</span>
    </div>
    <div className="timeline-scroll">
      <div className="timeline">
        <div className="timeline-corner">TIME</div>
        <div className="timeline-day-headings">{days.map(day => <div key={dateKey(day)} className={`timeline-day-heading ${dateKey(day) === todayKey ? "today" : ""}`}><span>{new Intl.DateTimeFormat("en-GB", { weekday: "short" }).format(day)}</span><b>{day.getDate()}</b></div>)}</div>
        <div className="timeline-hours">{hours.map(hour => <div key={hour} className="timeline-hour">{String(hour).padStart(2, "0")}:00</div>)}</div>
        <div className="timeline-columns">
          {days.map(day => {
            const dayKey = dateKey(day);
            const dayTasks = tasks.filter(task => task.date === dayKey).sort((a, b) => timeToMinutes(a.time) - timeToMinutes(b.time));
            return <div className={`timeline-column ${dayKey === todayKey ? "today" : ""}`} key={dayKey}>
              {hours.slice(0, -1).map(hour => <div className="timeline-rule" style={{ top: `${((hour - startHour) / (endHour - startHour)) * 100}%` }} key={hour} />)}
              <button className="timeline-add" onClick={() => onAdd(dayKey)} aria-label={`Add a study block on ${prettyDate(dayKey, { weekday: "long", day: "numeric", month: "long" })}`}><Plus size={12} /> Add</button>
              {dayTasks.map(task => {
                const top = Math.max(0, Math.min(100, ((timeToMinutes(task.time) - startHour * 60) / totalMinutes) * 100));
                const height = Math.max(9, Math.min(42, ((task.duration || 50) / totalMinutes) * 100));
                return <div className={`timeline-block ${task.color} ${task.done ? "done" : ""}`} style={{ top: `${top}%`, height: `${height}%` }} key={task.id}>
                  <div className="timeline-block-time">{task.time || "open"}</div>
                  <div className="timeline-block-title">{task.title}</div>
                  <div className="timeline-block-module">{moduleShort(task.module)}</div>
                  <div className="timeline-block-actions">
                    <button className="tiny-button" onClick={() => onToggle(task.id)} aria-label={`${task.done ? "Reopen" : "Complete"} ${task.title}`}>{task.done ? <RotateCcw size={11} /> : <Check size={11} />}</button>
                    <button className="tiny-button" onClick={() => onEdit(task)} aria-label={`Edit ${task.title}`}><Pencil size={11} /></button>
                    <button className="tiny-button" onClick={() => onDelete(task.id)} aria-label={`Delete ${task.title}`}><Trash2 size={11} /></button>
                  </div>
                </div>;
              })}
            </div>;
          })}
        </div>
      </div>
    </div>
  </div>;
}

function Dashboard({ tasks, setTasks, canvasLinks, setCanvasLinks }: { tasks: Task[]; setTasks: React.Dispatch<React.SetStateAction<Task[]>>; canvasLinks: CanvasLink[]; setCanvasLinks: React.Dispatch<React.SetStateAction<CanvasLink[]>> }) {
  const [modal, setModal] = useState<Task | "new" | null>(null);
  const todayTasks = tasks.filter(t => t.date === todayKey).sort((a,b) => (a.time || "").localeCompare(b.time || ""));
  const upcoming = tasks.filter(t => t.date >= todayKey && !t.done).sort((a,b) => a.date.localeCompare(b.date) || (a.time || "").localeCompare(b.time || "")).slice(0, 3);
  const complete = tasks.filter(t => t.done).length;
  const toggle = (id: string) => setTasks(all => all.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const remove = (id: string) => setTasks(all => all.filter(t => t.id !== id));
  return <div className="page-enter">
    <section className="card dashboard-hero accent-coral"><div><div className="eyebrow">Good morning · {prettyDate(todayKey, { weekday:"long", day:"numeric", month:"long" })}</div><h1>Make room for<br /><em>good work.</em></h1><p className="hero-note">A clear little corner for the reading, thinking, and making that matters this week.</p></div><Botanical /></section>
    <section className="grid grid-3">
      <div className="card stats-card"><div className="mini-label">Today’s rhythm</div><div className="stats-number">{todayTasks.filter(t => t.done).length}/{todayTasks.length}</div><div className="stats-caption">blocks complete</div><div className="progress-bar"><span style={{ width: `${todayTasks.length ? todayTasks.filter(t => t.done).length / todayTasks.length * 100 : 0}%` }} /></div></div>
      <div className="card stats-card accent-lilac"><div className="mini-label">This week</div><div className="stats-number">{complete}</div><div className="stats-caption">small wins recorded</div></div>
      <div className="card stats-card accent-sage"><div className="mini-label">Next deadline</div><div className="stats-number">{upcoming[0] ? Math.max(0, Math.ceil((new Date(`${upcoming[0].date}T12:00:00`).getTime() - Date.now()) / 86400000)) : "—"}</div><div className="stats-caption">{upcoming[0]?.title || "Nothing urgent on the desk"}</div></div>
    </section>
    <div className="section-heading"><h2>On the desk today</h2><button className="outline-button" onClick={() => setModal("new")} data-testid="button-add-dashboard-task"><Plus size={14} /> Add block</button></div>
    <section className="grid grid-2">
      <div className="card">{todayTasks.length ? <div className="list">{todayTasks.map(task => <TaskRow key={task.id} task={task} onToggle={() => toggle(task.id)} onEdit={() => setModal(task)} onDelete={() => remove(task.id)} />)}</div> : <div className="empty-state"><ListTodo size={26} /><p>A quiet page is still a plan.</p><small>Add a block when something needs your attention.</small></div>}</div>
      <div className="grid">
        <div className="card accent-apricot"><div className="mini-label">Coming into view</div><div className="list" style={{ marginTop: 10 }}>{upcoming.map(t => <div key={t.id} className="task-row"><div className="task-copy"><div className="task-title">{t.title}</div><div className="task-meta">{prettyDate(t.date)} · {t.module}</div></div></div>)}</div></div>
        <CanvasCard links={canvasLinks} setLinks={setCanvasLinks} />
      </div>
    </section>
    {modal && <Modal title={modal === "new" ? "Add a study block" : "Edit study block"} onClose={() => setModal(null)}><TaskForm initial={modal === "new" ? undefined : modal} defaultDate={todayKey} onClose={() => setModal(null)} onSave={task => { setTasks(all => all.some(t => t.id === task.id) ? all.map(t => t.id === task.id ? task : t) : [...all, task]); setModal(null); }} /></Modal>}
  </div>;
}

function WeekPage({ tasks, setTasks }: { tasks: Task[]; setTasks: React.Dispatch<React.SetStateAction<Task[]>> }) {
  const [week, setWeek] = useState(startOfWeek(new Date()));
  const [editing, setEditing] = useState<{ task?: Task; date?: string } | null>(null);
  const [view, setView] = useState<"planner" | "timeline">("planner");
  const [activeModule, setActiveModule] = useState("All");
  const [weeklyCapacity, setWeeklyCapacity] = useStored<number>("study-bloom-weekly-capacity", 32);
  const days = Array.from({ length: 7 }, (_, i) => addDays(week, i));
  const weekStart = dateKey(week);
  const weekEnd = dateKey(addDays(week, 6));
  const weekTasks = tasks.filter(task => task.date >= weekStart && task.date <= weekEnd && (activeModule === "All" || task.module === activeModule));
  const weekMinutes = weekTasks.reduce((total, task) => total + (task.duration || 50), 0);
  const deadlines = weekTasks.filter(task => task.kind === "deadline").length;
  const capacityMinutes = Math.max(1, weeklyCapacity * 60);
  const cushionMinutes = capacityMinutes - weekMinutes;
  const cushionPercent = Math.min(100, Math.round((weekMinutes / capacityMinutes) * 100));
  const saveTask = (task: Task) => { setTasks(all => all.some(t => t.id === task.id) ? all.map(t => t.id === task.id ? task : t) : [...all, task]); setEditing(null); };
  const remove = (id: string) => setTasks(all => all.filter(t => t.id !== id));
  return <div className="page-enter"><div className="eyebrow">The week, in view</div><h1 className="page-title">A little <em>structure</em><br />for the days ahead.</h1><p className="page-description">Place the important things first. Leave enough white space for the thinking in between.</p>
    <div className="toolbar"><div className="switcher"><button className="icon-button" onClick={() => setWeek(addDays(week, -7))} aria-label="Previous week" data-testid="button-previous-week"><ChevronLeft size={17} /></button><div className="switcher-label">{prettyDate(dateKey(week), { day:"numeric", month:"short" })} — {prettyDate(dateKey(addDays(week, 6)), { day:"numeric", month:"short", year:"numeric" })}</div><button className="icon-button" onClick={() => setWeek(addDays(week, 7))} aria-label="Next week" data-testid="button-next-week"><ChevronRight size={17} /></button>{!days.some(day => dateKey(day) === todayKey) && <button className="outline-button" onClick={() => setWeek(startOfWeek(new Date()))} data-testid="button-jump-current-week">Today</button>}</div><button className="primary-button" onClick={() => setEditing({ date: days.some(day => dateKey(day) === todayKey) ? todayKey : weekStart })} data-testid="button-add-week-task"><Plus size={14} /> Add study block</button></div>
    <div className="week-summary"><div><span>PLANNED</span><b>{weekTasks.length}</b><small>blocks this week</small></div><div><span>TIME ON DESK</span><b>{Math.floor(weekMinutes / 60)}h {weekMinutes % 60}m</b><small>scheduled study time</small></div><div><span>DEADLINES</span><b>{deadlines}</b><small>dates to keep visible</small></div></div>
     <section className={`planning-check ${cushionMinutes < 0 ? "overloaded" : cushionMinutes < 120 ? "tight" : ""}`}><div className="planning-check-copy"><div className="mini-label">Planning health</div><h2>{cushionMinutes >= 0 ? "There is room to breathe." : "This week is asking too much."}</h2><p>{cushionMinutes >= 0 ? `${Math.floor(cushionMinutes / 60)}h ${cushionMinutes % 60}m of unplanned time is still available.` : `${Math.abs(Math.floor(cushionMinutes / 60))}h ${Math.abs(cushionMinutes % 60)}m over your current study capacity.`}</p><div className="capacity-meter"><span style={{ width: `${cushionPercent}%` }} /></div></div><label className="capacity-control"><span>STUDY TIME AVAILABLE</span><div><input aria-label="Study time available this week" type="range" min="4" max="40" step="1" value={weeklyCapacity} onChange={event => setWeeklyCapacity(Number(event.target.value))} /><b>{weeklyCapacity}h</b></div><small>Adjust this to include classes, work, meals, rest, and everything else.</small></label></section>
    <div className="week-tools"><div className="module-filter"><Filter size={14} /><span>Show</span><button className={activeModule === "All" ? "active" : ""} onClick={() => setActiveModule("All")}>Everything</button>{moduleFilters.map(module => <button key={module} className={activeModule === module ? `active ${colors[moduleFilters.indexOf(module) % colors.length]}` : ""} onClick={() => setActiveModule(module)}>{moduleShort(module)}</button>)}</div><div className="view-toggle" aria-label="Schedule view"><button className={view === "planner" ? "active" : ""} onClick={() => setView("planner")} aria-label="Planner columns view"><Grid2X2 size={14} /> Columns</button><button className={view === "timeline" ? "active" : ""} onClick={() => setView("timeline")} aria-label="Timetable view"><Rows3 size={14} /> Timetable</button></div></div>
    {view === "timeline" ? <ScheduleTimeline days={days} tasks={weekTasks} onAdd={date => setEditing({ date })} onEdit={task => setEditing({ task })} onToggle={id => setTasks(all => all.map(task => task.id === id ? { ...task, done: !task.done } : task))} onDelete={remove} /> : <div className="week-grid">{days.map(day => { const key = dateKey(day); const dayTasks = weekTasks.filter(t => t.date === key).sort((a,b) => (a.time || "").localeCompare(b.time || "")); return <div key={key} className={`day-column ${key === todayKey ? "today" : ""}`}><div className="day-header"><div className="day-name">{new Intl.DateTimeFormat("en-GB", { weekday:"short" }).format(day)}</div><div className="day-number">{day.getDate()}</div>{key === todayKey && <div className="today-label">today</div>}</div><div className="day-items">{dayTasks.map(t => <div key={t.id} className={`planner-item ${t.color} ${t.done ? "done" : ""}`}><div className="planner-item-title">{t.title}</div><div className="planner-item-meta"><span>{t.time || "open"}</span><span>{t.done ? "done" : `${t.duration || 50}m`}</span></div><div style={{ display:"flex", justifyContent:"flex-end", gap:2 }}><button className="tiny-button" onClick={() => setTasks(all => all.map(x => x.id === t.id ? { ...x, done: !x.done } : x))} aria-label={`${t.done ? "Reopen" : "Complete"} ${t.title}`} data-testid={`button-toggle-week-task-${t.id}`}>{t.done ? <RotateCcw size={12} /> : <Check size={12} />}</button><button className="tiny-button" onClick={() => setEditing({ task: t })} aria-label={`Edit ${t.title}`} data-testid={`button-edit-week-task-${t.id}`}><Pencil size={12} /></button><button className="tiny-button" onClick={() => remove(t.id)} aria-label={`Delete ${t.title}`} data-testid={`button-delete-week-task-${t.id}`}><Trash2 size={12} /></button></div></div>)}<button className="day-add" onClick={() => setEditing({ date: key })} data-testid={`button-add-day-${key}`}><Plus size={12} /> Add to {new Intl.DateTimeFormat("en-GB", { weekday:"short" }).format(day)}</button></div></div>; })}</div>}
    {editing && <Modal title={editing.task ? "Edit study block" : "Add a study block"} onClose={() => setEditing(null)}><TaskForm initial={editing.task} defaultDate={editing.date} onClose={() => setEditing(null)} onSave={saveTask} /></Modal>}
  </div>;
}

function MonthPage({ tasks, setTasks }: { tasks: Task[]; setTasks: React.Dispatch<React.SetStateAction<Task[]>> }) {
  const [month, setMonth] = useState(new Date());
  const [editingDate, setEditingDate] = useState<string | null>(null);
  const first = new Date(month.getFullYear(), month.getMonth(), 1, 12);
  const offset = (first.getDay() + 6) % 7;
  const cells = Array.from({ length: 42 }, (_, i) => new Date(month.getFullYear(), month.getMonth(), i - offset + 1, 12));
  return <div className="page-enter"><div className="eyebrow">The long view</div><h1 className="page-title">Keep an eye on<br /><em>what’s coming.</em></h1><p className="page-description">Deadlines, seminars, and the dates that give a month its shape.</p>
    <div className="toolbar"><div className="switcher"><button className="icon-button" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))} aria-label="Previous month" data-testid="button-previous-month"><ChevronLeft size={17} /></button><div className="switcher-label">{monthLabel(month)}</div><button className="icon-button" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))} aria-label="Next month" data-testid="button-next-month"><ChevronRight size={17} /></button></div><button className="outline-button" onClick={() => setMonth(new Date())} data-testid="button-jump-current-month">Back to this month</button></div>
    <div className="card calendar-wrap"><div className="calendar-head">{["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(day => <div key={day} className="calendar-day-label">{day.slice(0,3)}</div>)}</div><div className="calendar-grid">{cells.map(day => { const key = dateKey(day); const dayTasks = tasks.filter(t => t.date === key); const inMonth = day.getMonth() === month.getMonth(); return <button key={key} className={`calendar-cell ${!inMonth ? "muted-day" : ""} ${key === todayKey ? "today" : ""}`} onClick={() => inMonth && setEditingDate(key)} aria-label={`Add item on ${prettyDate(key, { weekday:"long", day:"numeric", month:"long" })}`} data-testid={`calendar-day-${key}`}><span className="calendar-number">{day.getDate()}</span><span className="calendar-events">{dayTasks.slice(0,3).map(t => <span key={t.id} className={`calendar-event ${t.kind === "deadline" ? "deadline" : ""}`}>{t.title}</span>)}</span></button>; })}</div></div>
    {editingDate && <Modal title={`Add to ${prettyDate(editingDate, { day:"numeric", month:"long" })}`} onClose={() => setEditingDate(null)}><TaskForm defaultDate={editingDate} onClose={() => setEditingDate(null)} onSave={task => { setTasks(all => [...all, task]); setEditingDate(null); }} /></Modal>}
  </div>;
}

function GoalsPage({ goals, setGoals }: { goals: Goal[]; setGoals: React.Dispatch<React.SetStateAction<Goal[]>> }) {
  const [adding, setAdding] = useState(false);
  const [title, setTitle] = useState(""); const [detail, setDetail] = useState(""); const [target, setTarget] = useState("5");
  const save = () => { if (!title.trim()) return; setGoals(all => [...all, { id: uid(), title: title.trim(), detail: detail.trim() || "A goal worth making space for.", current: 0, target: Number(target) || 5, color: colors[all.length % colors.length] }]); setTitle(""); setDetail(""); setTarget("5"); setAdding(false); };
  return <div className="page-enter"><div className="eyebrow">Small promises, kept</div><h1 className="page-title">Goals that feel<br /><em>doable.</em></h1><p className="page-description">SMART enough to guide you, soft enough to live alongside the rest of your life.</p>
    <div className="toolbar"><span className="mini-label">{goals.length} active intentions</span><button className="primary-button" onClick={() => setAdding(true)} data-testid="button-add-goal"><Plus size={14} /> New goal</button></div>
    <div className="goal-list">{goals.map(goal => { const percent = Math.min(100, goal.current / goal.target * 100); return <div key={goal.id} className={`card goal-card accent-${goal.color}`} data-testid={`card-goal-${goal.id}`}><div><div className="goal-title">{goal.title}</div><div className="goal-detail">{goal.detail}</div><div className="goal-actions"><button className="tiny-button" onClick={() => setGoals(all => all.map(g => g.id === goal.id ? { ...g, current: Math.max(0, g.current - 1) } : g))} aria-label={`Decrease progress for ${goal.title}`} data-testid={`button-decrease-goal-${goal.id}`}><Minus size={15} /></button><div className="progress-bar"><span style={{ width:`${percent}%` }} /></div><button className="tiny-button" onClick={() => setGoals(all => all.map(g => g.id === goal.id ? { ...g, current: Math.min(g.target, g.current + 1) } : g))} aria-label={`Increase progress for ${goal.title}`} data-testid={`button-increase-goal-${goal.id}`}><Plus size={15} /></button></div></div><div><div className="goal-score">{goal.current}<small>of {goal.target}</small></div><button className="tiny-button" onClick={() => setGoals(all => all.filter(g => g.id !== goal.id))} aria-label={`Delete ${goal.title}`} data-testid={`button-delete-goal-${goal.id}`}><Trash2 size={15} /></button></div></div>; })}</div>
    {adding && <Modal title="Start a new goal" onClose={() => setAdding(false)}><div className="form-grid"><div className="field"><label htmlFor="goal-title">Goal</label><input id="goal-title" autoFocus value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Read three papers this month" data-testid="input-goal-title" /></div><div className="field"><label htmlFor="goal-detail">How will you know it’s done?</label><textarea id="goal-detail" value={detail} onChange={e => setDetail(e.target.value)} placeholder="Make the finish line visible..." data-testid="input-goal-detail" /></div><div className="field"><label htmlFor="goal-target">Target steps</label><input id="goal-target" type="number" min="1" value={target} onChange={e => setTarget(e.target.value)} data-testid="input-goal-target" /></div><div className="modal-footer"><button className="outline-button" onClick={() => setAdding(false)} data-testid="button-cancel-goal">Cancel</button><button className="primary-button" onClick={save} disabled={!title.trim()} data-testid="button-save-goal"><Check size={14} /> Add goal</button></div></div></Modal>}
  </div>;
}

function NotesPage({ notes, setNotes }: { notes: Note[]; setNotes: React.Dispatch<React.SetStateAction<Note[]>> }) {
  const [editing, setEditing] = useState<Note | "new" | null>(null);
  const [title, setTitle] = useState(""); const [body, setBody] = useState("");
  const begin = (note: Note | "new") => { setEditing(note); setTitle(note === "new" ? "" : note.title); setBody(note === "new" ? "" : note.body); };
  const save = () => { if (!title.trim()) return; if (editing === "new") setNotes(all => [...all, { id: uid(), title: title.trim(), body: body.trim(), done:false, updated:"Just now", color: colors[all.length % colors.length] }]); else if (editing) setNotes(all => all.map(n => n.id === editing.id ? { ...n, title: title.trim(), body: body.trim(), updated:"Just now" } : n)); setEditing(null); };
  return <div className="page-enter"><div className="eyebrow">Things worth remembering</div><h1 className="page-title">Notes for a<br /><em>busy mind.</em></h1><p className="page-description">Keep the loose threads here. They’ll still be here when you’re ready to pick them up.</p>
    <div className="toolbar"><span className="mini-label">{notes.filter(n => !n.done).length} open notes</span><button className="primary-button" onClick={() => begin("new")} data-testid="button-add-note"><Plus size={14} /> New note</button></div>
    {notes.length ? <div className="notes-grid">{notes.map(note => <article key={note.id} className={`card note-card accent-${note.color} ${note.done ? "done" : ""}`} data-testid={`card-note-${note.id}`}><div className="mini-label">{note.updated}</div><h3>{note.title}</h3><p>{note.body}</p><div className="row-actions"><button className="tiny-button" onClick={() => setNotes(all => all.map(n => n.id === note.id ? { ...n, done: !n.done } : n))} aria-label={`${note.done ? "Reopen" : "Complete"} ${note.title}`} data-testid={`button-toggle-note-${note.id}`}>{note.done ? <RotateCcw size={15} /> : <CheckCircle2 size={15} />}</button><button className="tiny-button" onClick={() => begin(note)} aria-label={`Edit ${note.title}`} data-testid={`button-edit-note-${note.id}`}><Pencil size={15} /></button><button className="tiny-button" onClick={() => setNotes(all => all.filter(n => n.id !== note.id))} aria-label={`Delete ${note.title}`} data-testid={`button-delete-note-${note.id}`}><Trash2 size={15} /></button></div></article>)}</div> : <div className="card empty-state"><NotebookPen size={28} /><p>A blank page, for now.</p><small>Write down a reminder before it wanders away.</small></div>}
    {editing && <Modal title={editing === "new" ? "New note" : "Edit note"} onClose={() => setEditing(null)}><div className="form-grid"><div className="field"><label htmlFor="note-title">Title</label><input id="note-title" autoFocus value={title} onChange={e => setTitle(e.target.value)} placeholder="A thought to keep" data-testid="input-note-title" /></div><div className="field"><label htmlFor="note-body">Note</label><textarea id="note-body" value={body} onChange={e => setBody(e.target.value)} placeholder="Write it down..." data-testid="input-note-body" /></div><div className="modal-footer"><button className="outline-button" onClick={() => setEditing(null)} data-testid="button-cancel-note">Cancel</button><button className="primary-button" onClick={save} disabled={!title.trim()} data-testid="button-save-note"><Check size={14} /> Save note</button></div></div></Modal>}
  </div>;
}

function FocusPage({ sessions, setSessions }: { sessions: Session[]; setSessions: React.Dispatch<React.SetStateAction<Session[]>> }) {
  const [preset, setPreset] = useState(25); const [seconds, setSeconds] = useState(25 * 60); const [running, setRunning] = useState(false); const [label, setLabel] = useState("Dissertation · deep work");
  useEffect(() => { if (!running) return; const timer = window.setInterval(() => setSeconds(s => { if (s <= 1) { setRunning(false); setSessions(all => [{ id: uid(), label, minutes: preset, date: "Just now" }, ...all]); return 0; } return s - 1; }), 1000); return () => window.clearInterval(timer); }, [running, label, preset, setSessions]);
  const setPresetTime = (minutes: number) => { setPreset(minutes); setSeconds(minutes * 60); setRunning(false); };
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0"); const secs = String(seconds % 60).padStart(2, "0");
  return <div className="page-enter"><div className="eyebrow">One thing at a time</div><h1 className="page-title">Find your<br /><em>focus.</em></h1><p className="page-description">A small pocket of uninterrupted time. Choose a thread, press start, and let the rest wait.</p>
    <div className="timer-layout" style={{ marginTop: 35 }}><section className="card timer-card accent-lilac"><div className="timer-kicker mini-label">current session</div><div className="timer-presets">{[25,50,90].map(minutes => <button key={minutes} className={`preset ${preset === minutes ? "active" : ""}`} onClick={() => setPresetTime(minutes)} data-testid={`button-preset-${minutes}`}>{minutes} min</button>)}</div><div className="timer-number" aria-live="polite" data-testid="text-timer">{mins}:{secs}</div><div className="field" style={{ maxWidth: 300, margin:"0 auto 25px", position:"relative", zIndex:1 }}><label htmlFor="focus-label">This session is for</label><input id="focus-label" value={label} onChange={e => setLabel(e.target.value)} data-testid="input-focus-label" /></div><div className="timer-actions">{running ? <button className="primary-button" onClick={() => setRunning(false)} data-testid="button-pause-focus"><Pause size={15} /> Pause</button> : <button className="primary-button" onClick={() => setRunning(true)} data-testid="button-start-focus"><Play size={15} /> Start session</button>}<button className="outline-button" onClick={() => { setRunning(false); setSeconds(preset * 60); }} data-testid="button-reset-focus"><RotateCcw size={15} /> Reset</button></div></section><section className="card"><div className="section-heading" style={{ marginTop:0 }}><h2>Session log</h2><span>{sessions.length} held</span></div>{sessions.length ? <div className="session-list">{sessions.slice(0,7).map(session => <div className="session-row" key={session.id}><div className="session-name">{session.label}</div><div className="session-meta">{session.minutes}m · {session.date}</div></div>)}</div> : <div className="empty-state"><Clock3 size={25} /><p>Your first session starts here.</p></div>}</section></div>
  </div>;
}

function JournalPage({ entries, setEntries }: { entries: JournalEntry[]; setEntries: React.Dispatch<React.SetStateAction<JournalEntry[]>> }) {
  const [editing, setEditing] = useState<JournalEntry | "new" | null>(null);
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState(""); const [date, setDate] = useState(todayKey); const [body, setBody] = useState(""); const [tagsInput, setTagsInput] = useState(""); const [mood, setMood] = useState<JournalEntry["mood"]>("neutral");
  const begin = (entry: JournalEntry | "new") => {
    setEditing(entry);
    setTitle(entry === "new" ? "" : entry.title);
    setDate(entry === "new" ? todayKey : entry.date);
    setBody(entry === "new" ? "" : entry.body);
    setTagsInput(entry === "new" ? "" : entry.tags.join(", "));
    setMood(entry === "new" ? "neutral" : entry.mood || "neutral");
  };
  const save = () => {
    if (!title.trim()) return;
    const tags = tagsInput.split(",").map(t => t.trim()).filter(Boolean);
    if (editing === "new") setEntries(all => [{ id: uid(), title: title.trim(), date, body: body.trim(), tags, mood }, ...all]);
    else if (editing) setEntries(all => all.map(e => e.id === editing.id ? { ...e, title: title.trim(), date, body: body.trim(), tags, mood } : e));
    setEditing(null);
  };
  const filtered = entries.filter(e => !query.trim() || e.title.toLowerCase().includes(query.toLowerCase()) || e.body.toLowerCase().includes(query.toLowerCase()) || e.tags.some(t => t.toLowerCase().includes(query.toLowerCase())));
  const moodMark: Record<string, string> = { good: "sage", neutral: "lilac", tough: "coral" };
  return <div className="page-enter"><div className="eyebrow">A place to think out loud</div><h1 className="page-title">Your <em>journal.</em></h1><p className="page-description">Academic and professional reflection, kept in one place and searchable when you need it back.</p>
    <div className="toolbar"><div className="field" style={{ minWidth: 240 }}><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search entries or tags..." aria-label="Search journal entries" data-testid="input-journal-search" /></div><button className="primary-button" onClick={() => begin("new")} data-testid="button-add-journal"><Plus size={14} /> New entry</button></div>
    {filtered.length ? <div className="notes-grid">{filtered.map(entry => <article key={entry.id} className={`card note-card accent-${moodMark[entry.mood || "neutral"]}`} data-testid={`card-journal-${entry.id}`}>
      <div className="mini-label">{prettyDate(entry.date, { day: "numeric", month: "short", year: "numeric" })}</div>
      <h3>{entry.title}</h3>
      <p>{entry.body}</p>
      {entry.tags.length > 0 && <div className="tag-row">{entry.tags.map(tag => <span key={tag} className="tag-chip">{tag}</span>)}</div>}
      <div className="row-actions"><button className="tiny-button" onClick={() => begin(entry)} aria-label={`Edit ${entry.title}`} data-testid={`button-edit-journal-${entry.id}`}><Pencil size={15} /></button><button className="tiny-button" onClick={() => setEntries(all => all.filter(e => e.id !== entry.id))} aria-label={`Delete ${entry.title}`} data-testid={`button-delete-journal-${entry.id}`}><Trash2 size={15} /></button></div>
    </article>)}</div> : <div className="card empty-state"><BookOpen size={28} /><p>Your journal is empty.</p><small>Write your first reflection whenever something's worth remembering.</small></div>}
    {editing && <Modal title={editing === "new" ? "New journal entry" : "Edit entry"} onClose={() => setEditing(null)}><div className="form-grid">
      <div className="field"><label htmlFor="journal-title">Title</label><input id="journal-title" autoFocus value={title} onChange={e => setTitle(e.target.value)} placeholder="What's this entry about?" data-testid="input-journal-title" /></div>
      <div className="form-row"><div className="field"><label htmlFor="journal-date">Date</label><input id="journal-date" type="date" value={date} onChange={e => setDate(e.target.value)} data-testid="input-journal-date" /></div><div className="field"><label htmlFor="journal-mood">Feeling</label><select id="journal-mood" value={mood} onChange={e => setMood(e.target.value as JournalEntry["mood"])} data-testid="select-journal-mood"><option value="good">Good</option><option value="neutral">Neutral</option><option value="tough">Tough</option></select></div></div>
      <div className="field"><label htmlFor="journal-body">Reflection</label><textarea id="journal-body" value={body} onChange={e => setBody(e.target.value)} placeholder="Write it down..." data-testid="input-journal-body" /></div>
      <div className="field"><label htmlFor="journal-tags">Tags (comma separated)</label><input id="journal-tags" value={tagsInput} onChange={e => setTagsInput(e.target.value)} placeholder="dissertation, DASC503, wellbeing" data-testid="input-journal-tags" /></div>
      <div className="modal-footer"><button className="outline-button" onClick={() => setEditing(null)} data-testid="button-cancel-journal">Cancel</button><button className="primary-button" onClick={save} disabled={!title.trim()} data-testid="button-save-journal"><Check size={14} /> Save entry</button></div>
    </div></Modal>}
  </div>;
}

function ParaphraseGame({ stats, setStats }: { stats: SkillStats; setStats: React.Dispatch<React.SetStateAction<SkillStats>> }) {
  const [difficulty, setDifficulty] = useState<Difficulty | "All">("All");
  const [round, setRound] = useState<ParaphraseQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const pool = difficulty === "All" ? PARAPHRASE_BANK : PARAPHRASE_BANK.filter(q => q.difficulty === difficulty);
  const available = pool.filter(q => !stats.paraphraseCompleted.includes(q.id));
  const startRound = () => {
    const shuffled = [...available].sort(() => Math.random() - 0.5).slice(0, 5);
    setRound(shuffled); setIndex(0); setAnswer(""); setRevealed(false);
  };
  useEffect(() => { startRound(); }, [difficulty]);
  const current = round[index];
  const mark = (got: boolean) => {
    if (!current) return;
    setStats(s => ({ ...s, paraphraseCompleted: [...s.paraphraseCompleted, current.id], paraphraseGot: s.paraphraseGot + (got ? 1 : 0), paraphraseTotal: s.paraphraseTotal + 1, lastPlayed: todayKey }));
    if (index + 1 < round.length) { setIndex(index + 1); setAnswer(""); setRevealed(false); } else { setRound([]); }
  };
  return <div className="card game-card">
    <div className="game-header"><div><div className="mini-label">Paraphrasing</div><h2>Say it in your own words.</h2></div><div className="view-toggle" aria-label="Difficulty"><button className={difficulty === "All" ? "active" : ""} onClick={() => setDifficulty("All")}>All</button><button className={difficulty === "Beginner" ? "active" : ""} onClick={() => setDifficulty("Beginner")}>Beginner</button><button className={difficulty === "Intermediate" ? "active" : ""} onClick={() => setDifficulty("Intermediate")}>Intermediate</button><button className={difficulty === "Advanced" ? "active" : ""} onClick={() => setDifficulty("Advanced")}>Advanced</button></div></div>
    {!current ? (available.length === 0 ? <div className="empty-state"><Sparkles size={26} /><p>You've completed every sentence in this bank.</p><small>Reset your history below to play again from the top.</small><button className="outline-button" style={{ marginTop: 14 }} onClick={() => setStats(s => ({ ...s, paraphraseCompleted: [] }))} data-testid="button-reset-paraphrase">Reset paraphrase history</button></div> : <div className="empty-state"><Sparkles size={26} /><p>Ready for a new round?</p><small>{available.length} unseen sentence{available.length === 1 ? "" : "s"} left in this bank.</small><button className="primary-button" style={{ marginTop: 14 }} onClick={startRound} data-testid="button-new-round-paraphrase"><RefreshCw size={14} /> New round</button></div>) : <>
      <div className="game-progress">Question {index + 1} of {round.length} · {current.topic} · {current.difficulty}</div>
      <div className="game-prompt">{current.text}</div>
      <div className="field"><label htmlFor="paraphrase-answer">Your paraphrase</label><textarea id="paraphrase-answer" value={answer} onChange={e => setAnswer(e.target.value)} placeholder="Rewrite the sentence in your own words..." data-testid="input-paraphrase-answer" /></div>
      {!revealed ? <button className="primary-button" onClick={() => setRevealed(true)} disabled={!answer.trim()} data-testid="button-check-paraphrase"><Check size={14} /> Check my paraphrase</button> : <div className="game-reveal"><div className="mini-label">A tip for this one</div><p>{current.tips}</p><div className="modal-footer" style={{ marginTop: 14 }}><button className="outline-button" onClick={() => mark(false)} data-testid="button-needs-work-paraphrase">Needs work</button><button className="primary-button" onClick={() => mark(true)} data-testid="button-got-it-paraphrase"><Check size={14} /> Got it</button></div></div>}
    </>}
  </div>;
}

function PythonGame({ stats, setStats }: { stats: SkillStats; setStats: React.Dispatch<React.SetStateAction<SkillStats>> }) {
  const [difficulty, setDifficulty] = useState<Difficulty | "All">("All");
  const [round, setRound] = useState<PythonQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const pool = difficulty === "All" ? PYTHON_BANK : PYTHON_BANK.filter(q => q.difficulty === difficulty);
  const available = pool.filter(q => !stats.pythonCompleted.includes(q.id));
  const startRound = () => {
    const shuffled = [...available].sort(() => Math.random() - 0.5).slice(0, 5);
    setRound(shuffled); setIndex(0); setAnswer(""); setRevealed(false);
  };
  useEffect(() => { startRound(); }, [difficulty]);
  const current = round[index];
  const mark = (got: boolean) => {
    if (!current) return;
    setStats(s => ({ ...s, pythonCompleted: [...s.pythonCompleted, current.id], pythonGot: s.pythonGot + (got ? 1 : 0), pythonTotal: s.pythonTotal + 1, lastPlayed: todayKey }));
    if (index + 1 < round.length) { setIndex(index + 1); setAnswer(""); setRevealed(false); } else { setRound([]); }
  };
  return <div className="card game-card">
    <div className="game-header"><div><div className="mini-label">Python, in short bursts</div><h2>Two minutes, one idea.</h2></div><div className="view-toggle" aria-label="Difficulty"><button className={difficulty === "All" ? "active" : ""} onClick={() => setDifficulty("All")}>All</button><button className={difficulty === "Beginner" ? "active" : ""} onClick={() => setDifficulty("Beginner")}>Beginner</button><button className={difficulty === "Intermediate" ? "active" : ""} onClick={() => setDifficulty("Intermediate")}>Intermediate</button><button className={difficulty === "Advanced" ? "active" : ""} onClick={() => setDifficulty("Advanced")}>Advanced</button></div></div>
    {!current ? (available.length === 0 ? <div className="empty-state"><BrainCircuit size={26} /><p>You've completed every task in this bank.</p><small>Reset your history below to play again from the top.</small><button className="outline-button" style={{ marginTop: 14 }} onClick={() => setStats(s => ({ ...s, pythonCompleted: [] }))} data-testid="button-reset-python">Reset Python history</button></div> : <div className="empty-state"><BrainCircuit size={26} /><p>Ready for a new round?</p><small>{available.length} unseen task{available.length === 1 ? "" : "s"} left in this bank.</small><button className="primary-button" style={{ marginTop: 14 }} onClick={startRound} data-testid="button-new-round-python"><RefreshCw size={14} /> New round</button></div>) : <>
      <div className="game-progress">Question {index + 1} of {round.length} · {current.title} · {current.difficulty}</div>
      <div className="game-prompt">{current.prompt}</div>
      <pre className="code-block">{current.code}</pre>
      <div className="field"><label htmlFor="python-answer">Your answer</label><input id="python-answer" value={answer} onChange={e => setAnswer(e.target.value)} placeholder="Type your answer, then reveal to check..." data-testid="input-python-answer" /></div>
      {!revealed ? <button className="primary-button" onClick={() => setRevealed(true)} disabled={!answer.trim()} data-testid="button-reveal-python"><Check size={14} /> Reveal answer</button> : <div className="game-reveal">
        <div className="answer-compare"><div><div className="mini-label">Your answer</div><p>{answer}</p></div><div><div className="mini-label">Correct answer</div><p>{current.answer}</p></div></div>
        <div className="mini-label" style={{ marginTop: 12 }}>Explanation</div><p>{current.explanation}</p>
        <div className="modal-footer" style={{ marginTop: 14 }}><button className="outline-button" onClick={() => mark(false)} data-testid="button-needs-work-python">Needs work</button><button className="primary-button" onClick={() => mark(true)} data-testid="button-got-it-python"><Check size={14} /> Got it</button></div>
      </div>}
    </>}
  </div>;
}

function SkillGamesPage({ stats, setStats }: { stats: SkillStats; setStats: React.Dispatch<React.SetStateAction<SkillStats>> }) {
  const [mode, setMode] = useState<"paraphrase" | "python">("paraphrase");
  const paraphraseAccuracy = stats.paraphraseTotal ? Math.round((stats.paraphraseGot / stats.paraphraseTotal) * 100) : 0;
  const pythonAccuracy = stats.pythonTotal ? Math.round((stats.pythonGot / stats.pythonTotal) * 100) : 0;
  return <div className="page-enter"><div className="eyebrow">Small reps, real skill</div><h1 className="page-title">Skill <em>games.</em></h1><p className="page-description">A couple of minutes of deliberate practice — academic writing and Python, never the same question twice until you've seen them all.</p>
    <section className="grid grid-3">
      <div className="card stats-card"><div className="mini-label">Paraphrasing done</div><div className="stats-number">{stats.paraphraseCompleted.length}</div><div className="stats-caption">of {PARAPHRASE_BANK.length} in the bank · {paraphraseAccuracy}% got it</div></div>
      <div className="card stats-card accent-lilac"><div className="mini-label">Python done</div><div className="stats-number">{stats.pythonCompleted.length}</div><div className="stats-caption">of {PYTHON_BANK.length} in the bank · {pythonAccuracy}% got it</div></div>
      <div className="card stats-card accent-sage"><div className="mini-label">Last played</div><div className="stats-number" style={{ fontSize: 22 }}>{stats.lastPlayed ? prettyDate(stats.lastPlayed) : "—"}</div><div className="stats-caption">keep it light, keep it regular</div></div>
    </section>
    <div className="toolbar"><div className="view-toggle" aria-label="Game type"><button className={mode === "paraphrase" ? "active" : ""} onClick={() => setMode("paraphrase")} data-testid="button-mode-paraphrase"><NotebookPen size={14} /> Paraphrasing</button><button className={mode === "python" ? "active" : ""} onClick={() => setMode("python")} data-testid="button-mode-python"><BrainCircuit size={14} /> Python</button></div></div>
    {mode === "paraphrase" ? <ParaphraseGame stats={stats} setStats={setStats} /> : <PythonGame stats={stats} setStats={setStats} />}
  </div>;
}

function ResearchPage({ items, setItems, discovered, setDiscovered }: { items: ResearchItem[]; setItems: React.Dispatch<React.SetStateAction<ResearchItem[]>>; discovered: DiscoveredResearch[]; setDiscovered: React.Dispatch<React.SetStateAction<DiscoveredResearch[]>> }) {
  const [query, setQuery] = useState("");
  const [tagFilter, setTagFilter] = useState("All");
  const [adding, setAdding] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [title, setTitle] = useState(""); const [author, setAuthor] = useState(""); const [source, setSource] = useState(""); const [date, setDate] = useState(""); const [url, setUrl] = useState(""); const [description, setDescription] = useState(""); const [tagsInput, setTagsInput] = useState("");
  const allTags = Array.from(new Set(items.flatMap(i => i.tags)));
  const filtered = items.filter(i => (tagFilter === "All" || i.tags.includes(tagFilter)) && (!query.trim() || i.title.toLowerCase().includes(query.toLowerCase()) || i.description.toLowerCase().includes(query.toLowerCase())));
  const save = () => {
    if (!title.trim() || !url.trim()) return;
    const tags = tagsInput.split(",").map(t => t.trim()).filter(Boolean);
    const citation = `${author ? author + ". " : ""}(${date || "n.d."}). ${title}. ${source ? source + "." : ""} [online] Available at: ${url}`;
    setItems(all => [{ id: uid(), title: title.trim(), author: author.trim() || undefined, source: source.trim(), date: date.trim() || "n.d.", url: url.trim(), description: description.trim(), tags, citation, citationVerified: true, dateSaved: todayKey, read: false }, ...all]);
    setTitle(""); setAuthor(""); setSource(""); setDate(""); setUrl(""); setDescription(""); setTagsInput(""); setAdding(false);
  };
  const copyCitation = (item: ResearchItem) => { navigator.clipboard?.writeText(item.citation).then(() => { setCopied(item.id); setTimeout(() => setCopied(null), 1800); }); };
  const saveDiscovered = (item: DiscoveredResearch) => {
    const citation = `${item.authors}. (${item.publishedAt.slice(0, 4)}). ${item.title}. ${item.source}. [online] Available at: ${item.url}`;
    setItems(all => [{ id: uid(), title: item.title, author: item.authors, source: item.source, date: item.publishedAt.slice(0, 4), url: item.url, description: `Surfaced automatically from ${item.source} — check it's relevant before citing.`, tags: [item.source], citation, citationVerified: false, dateSaved: todayKey, read: false }, ...all]);
    setDiscovered(all => all.filter(d => d.id !== item.id));
  };
  return <div className="page-enter"><div className="eyebrow">For the dissertation, and beyond</div><h1 className="page-title">Research <em>library.</em></h1><p className="page-description">Save what's useful once, and it stays here — with citation details ready to copy in.</p>
    {discovered.length > 0 && <div className="card accent-sage" style={{ marginBottom: 18 }}>
      <div className="section-heading" style={{ marginTop: 0 }}><h2><Sparkles size={16} style={{ verticalAlign: -2 }} /> Discovered automatically</h2></div>
      <p className="page-description" style={{ fontSize: 12.5, marginTop: -4 }}>Pulled daily from arXiv and PubMed's own free APIs — real papers, checked once a day, never repeated once you've seen them.</p>
      <div className="list" style={{ marginTop: 8 }}>{discovered.slice(0, 8).map(item => <div key={item.id} className="task-row" data-testid={`row-discovered-research-${item.id}`}>
        <div className="task-copy"><a href={item.url} target="_blank" rel="noreferrer" className="task-title">{item.title}</a><small style={{ display: "block", opacity: 0.7 }}>{item.source} · {item.authors}</small></div>
        <button className="tiny-button" onClick={() => saveDiscovered(item)} aria-label={`Save ${item.title} to library`} data-testid={`button-save-discovered-${item.id}`}><Plus size={14} /></button>
        <button className="tiny-button" onClick={() => setDiscovered(all => all.filter(d => d.id !== item.id))} aria-label={`Dismiss ${item.title}`}><X size={14} /></button>
      </div>)}</div>
    </div>}
    <div className="toolbar"><div className="field" style={{ minWidth: 220 }}><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search saved research..." aria-label="Search research library" data-testid="input-research-search" /></div><div className="module-filter"><Filter size={14} /><span>Tag</span><button className={tagFilter === "All" ? "active" : ""} onClick={() => setTagFilter("All")}>All</button>{allTags.map(tag => <button key={tag} className={tagFilter === tag ? "active" : ""} onClick={() => setTagFilter(tag)}>{tag}</button>)}</div><button className="primary-button" onClick={() => setAdding(true)} data-testid="button-add-research"><Plus size={14} /> Save a source</button></div>
    {filtered.length ? <div className="research-grid">{filtered.map(item => <article key={item.id} className="card research-card" data-testid={`card-research-${item.id}`}>
      <div className="research-head"><div className="mini-label">{item.source} · {item.date}</div><button className="tiny-button" onClick={() => setItems(all => all.map(i => i.id === item.id ? { ...i, read: !i.read } : i))} aria-label={item.read ? "Mark unread" : "Mark read"} data-testid={`button-toggle-read-${item.id}`}>{item.read ? <CheckCircle2 size={16} /> : <RotateCcw size={16} />}</button></div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      {item.tags.length > 0 && <div className="tag-row">{item.tags.map(tag => <span key={tag} className="tag-chip">{tag}</span>)}</div>}
      <div className="citation-box">{item.citation}{!item.citationVerified && <span className="verify-flag"> — verify full details before citing</span>}</div>
      <div className="research-actions">
        <a className="outline-button" href={item.url} target="_blank" rel="noreferrer" data-testid={`link-open-research-${item.id}`}><ExternalLink size={13} /> Open</a>
        <button className="outline-button" onClick={() => copyCitation(item)} data-testid={`button-copy-citation-${item.id}`}><Copy size={13} /> {copied === item.id ? "Copied!" : "Copy citation"}</button>
        <button className="tiny-button" onClick={() => setItems(all => all.filter(i => i.id !== item.id))} aria-label={`Remove ${item.title}`} data-testid={`button-delete-research-${item.id}`}><Trash2 size={15} /></button>
      </div>
    </article>)}</div> : <div className="card empty-state"><Bookmark size={28} /><p>Your research library is empty.</p><small>Save sources as you find them — they'll stay here with citations ready.</small></div>}
    {adding && <Modal title="Save a source" onClose={() => setAdding(false)}><div className="form-grid">
      <div className="field"><label htmlFor="research-title">Title</label><input id="research-title" autoFocus value={title} onChange={e => setTitle(e.target.value)} data-testid="input-research-title" /></div>
      <div className="form-row"><div className="field"><label htmlFor="research-author">Author (optional)</label><input id="research-author" value={author} onChange={e => setAuthor(e.target.value)} data-testid="input-research-author" /></div><div className="field"><label htmlFor="research-date">Year</label><input id="research-date" value={date} onChange={e => setDate(e.target.value)} placeholder="2026" data-testid="input-research-date" /></div></div>
      <div className="form-row"><div className="field"><label htmlFor="research-source">Source / publisher</label><input id="research-source" value={source} onChange={e => setSource(e.target.value)} data-testid="input-research-source" /></div><div className="field"><label htmlFor="research-tags">Tags (comma separated)</label><input id="research-tags" value={tagsInput} onChange={e => setTagsInput(e.target.value)} placeholder="Cybersecurity, Dissertation" data-testid="input-research-tags" /></div></div>
      <div className="field"><label htmlFor="research-url">Link</label><input id="research-url" value={url} onChange={e => setUrl(e.target.value)} placeholder="https://..." data-testid="input-research-url" /></div>
      <div className="field"><label htmlFor="research-description">Why it's useful</label><textarea id="research-description" value={description} onChange={e => setDescription(e.target.value)} data-testid="input-research-description" /></div>
      <div className="modal-footer"><button className="outline-button" onClick={() => setAdding(false)} data-testid="button-cancel-research">Cancel</button><button className="primary-button" onClick={save} disabled={!title.trim() || !url.trim()} data-testid="button-save-research"><Check size={14} /> Save</button></div>
    </div></Modal>}
  </div>;
}

function JobsPage({ jobs, setJobs, discovered, setDiscovered }: { jobs: Job[]; setJobs: React.Dispatch<React.SetStateAction<Job[]>>; discovered: DiscoveredJob[]; setDiscovered: React.Dispatch<React.SetStateAction<DiscoveredJob[]>> }) {
  const [editing, setEditing] = useState<Job | "new" | null>(null);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<JobStatus | "All">("All");
  const [company, setCompany] = useState(""); const [jobTitle, setJobTitle] = useState(""); const [field, setField] = useState<Job["field"]>("Data Science"); const [location, setLocation] = useState(""); const [salary, setSalary] = useState(""); const [deadline, setDeadline] = useState(""); const [link, setLink] = useState(""); const [status, setStatus] = useState<JobStatus>("Not Started"); const [dateApplied, setDateApplied] = useState(""); const [notes, setNotes] = useState("");
  const begin = (job: Job | "new") => {
    setEditing(job);
    setCompany(job === "new" ? "" : job.company); setJobTitle(job === "new" ? "" : job.title); setField(job === "new" ? "Data Science" : job.field); setLocation(job === "new" ? "" : job.location); setSalary(job === "new" ? "" : job.salary || ""); setDeadline(job === "new" ? "" : job.deadline || ""); setLink(job === "new" ? "" : job.link || ""); setStatus(job === "new" ? "Not Started" : job.status); setDateApplied(job === "new" ? "" : job.dateApplied || ""); setNotes(job === "new" ? "" : job.notes || "");
  };
  const save = () => {
    if (!company.trim() || !jobTitle.trim()) return;
    const payload = { company: company.trim(), title: jobTitle.trim(), field, location: location.trim(), salary: salary.trim() || undefined, deadline: deadline || undefined, link: link.trim() || undefined, status, dateApplied: dateApplied || undefined, notes: notes.trim() || undefined };
    if (editing === "new") setJobs(all => [{ id: uid(), ...payload }, ...all]);
    else if (editing) setJobs(all => all.map(j => j.id === editing.id ? { ...j, ...payload } : j));
    setEditing(null);
  };
  const filtered = jobs.filter(j => (statusFilter === "All" || j.status === statusFilter) && (!query.trim() || j.company.toLowerCase().includes(query.toLowerCase()) || j.title.toLowerCase().includes(query.toLowerCase())));
  const addDiscovered = (job: DiscoveredJob) => {
    const field: Job["field"] = job.tag === "cybersecurity" ? "Cybersecurity" : job.tag === "data-science" ? "Data Science" : "Other";
    setJobs(all => [{ id: uid(), company: job.company, title: job.title, field, location: job.geo, link: job.url, status: "Not Started" }, ...all]);
    setDiscovered(all => all.filter(d => d.id !== job.id));
  };
  return <div className="page-enter"><div className="eyebrow">Cybersecurity & data science</div><h1 className="page-title">Job <em>tracker.</em></h1><p className="page-description">Every application, one page — status, dates and links you can come back to.</p>
    {discovered.length > 0 && <div className="card accent-sage" style={{ marginBottom: 18 }}>
      <div className="section-heading" style={{ marginTop: 0 }}><h2><Sparkles size={16} style={{ verticalAlign: -2 }} /> Discovered automatically</h2></div>
      <p className="page-description" style={{ fontSize: 12.5, marginTop: -4 }}>Checked daily against Jobicy's free remote-jobs listings for cybersecurity and data science — real, live roles, but remote-only, so keep using "Add job" for the graduate schemes and placements you find yourself.</p>
      <div className="list" style={{ marginTop: 8 }}>{discovered.slice(0, 8).map(job => <div key={job.id} className="task-row" data-testid={`row-discovered-job-${job.id}`}>
        <div className="task-copy"><a href={job.url} target="_blank" rel="noreferrer" className="task-title">{job.title}</a><small style={{ display: "block", opacity: 0.7 }}>{job.company} · {job.geo}</small></div>
        <button className="tiny-button" onClick={() => addDiscovered(job)} aria-label={`Add ${job.title} to tracker`} data-testid={`button-add-discovered-${job.id}`}><Plus size={14} /></button>
        <button className="tiny-button" onClick={() => setDiscovered(all => all.filter(d => d.id !== job.id))} aria-label={`Dismiss ${job.title}`}><X size={14} /></button>
      </div>)}</div>
    </div>}
    <div className="toolbar"><div className="field" style={{ minWidth: 200 }}><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search company or role..." aria-label="Search jobs" data-testid="input-job-search" /></div><div className="field"><select value={statusFilter} onChange={e => setStatusFilter(e.target.value as JobStatus | "All")} aria-label="Filter by status" data-testid="select-job-status-filter"><option value="All">All statuses</option>{JOB_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}</select></div><button className="primary-button" onClick={() => begin("new")} data-testid="button-add-job"><Plus size={14} /> Add job</button></div>
    {filtered.length ? <div className="job-table">
      <div className="job-row job-row-head"><span>Company / role</span><span>Field</span><span>Location</span><span>Deadline</span><span>Status</span><span></span></div>
      {filtered.map(job => <div key={job.id} className="job-row" data-testid={`row-job-${job.id}`}>
        <span className="job-primary"><b>{job.company}</b><small>{job.title}</small></span>
        <span data-label="Field">{job.field}</span>
        <span data-label="Location">{job.location || "—"}</span>
        <span data-label="Deadline">{job.deadline ? prettyDate(job.deadline) : "—"}</span>
        <span data-label="Status"><select className={`status-select tone-${jobStatusTone(job.status)}`} value={job.status} onChange={e => setJobs(all => all.map(j => j.id === job.id ? { ...j, status: e.target.value as JobStatus } : j))} aria-label={`Status for ${job.company}`} data-testid={`select-job-status-${job.id}`}>{JOB_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}</select></span>
        <span className="job-actions">{job.link && <a className="tiny-button" href={job.link} target="_blank" rel="noreferrer" aria-label={`Open ${job.company} listing`}><ExternalLink size={14} /></a>}<button className="tiny-button" onClick={() => begin(job)} aria-label={`Edit ${job.company}`} data-testid={`button-edit-job-${job.id}`}><Pencil size={14} /></button><button className="tiny-button" onClick={() => setJobs(all => all.filter(j => j.id !== job.id))} aria-label={`Delete ${job.company}`} data-testid={`button-delete-job-${job.id}`}><Trash2 size={14} /></button></span>
      </div>)}
    </div> : <div className="card empty-state"><Briefcase size={28} /><p>You haven't added any applications yet.</p><small>Add graduate roles, internships or placements as you find them.</small></div>}
    {editing && <Modal title={editing === "new" ? "Add a job" : "Edit job"} onClose={() => setEditing(null)}><div className="form-grid">
      <div className="form-row"><div className="field"><label htmlFor="job-company">Company</label><input id="job-company" autoFocus value={company} onChange={e => setCompany(e.target.value)} data-testid="input-job-company" /></div><div className="field"><label htmlFor="job-title">Role</label><input id="job-title" value={jobTitle} onChange={e => setJobTitle(e.target.value)} data-testid="input-job-title" /></div></div>
      <div className="form-row"><div className="field"><label htmlFor="job-field">Field</label><select id="job-field" value={field} onChange={e => setField(e.target.value as Job["field"])} data-testid="select-job-field"><option>Cybersecurity</option><option>Data Science</option><option>Both</option><option>Other</option></select></div><div className="field"><label htmlFor="job-location">Location</label><input id="job-location" value={location} onChange={e => setLocation(e.target.value)} placeholder="London / Remote / Hybrid" data-testid="input-job-location" /></div></div>
      <div className="form-row"><div className="field"><label htmlFor="job-salary">Salary (optional)</label><input id="job-salary" value={salary} onChange={e => setSalary(e.target.value)} data-testid="input-job-salary" /></div><div className="field"><label htmlFor="job-deadline">Deadline</label><input id="job-deadline" type="date" value={deadline} onChange={e => setDeadline(e.target.value)} data-testid="input-job-deadline" /></div></div>
      <div className="field"><label htmlFor="job-link">Application link</label><input id="job-link" value={link} onChange={e => setLink(e.target.value)} placeholder="https://..." data-testid="input-job-link" /></div>
      <div className="form-row"><div className="field"><label htmlFor="job-status">Status</label><select id="job-status" value={status} onChange={e => setStatus(e.target.value as JobStatus)} data-testid="select-job-status">{JOB_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}</select></div><div className="field"><label htmlFor="job-applied">Date applied</label><input id="job-applied" type="date" value={dateApplied} onChange={e => setDateApplied(e.target.value)} data-testid="input-job-applied" /></div></div>
      <div className="field"><label htmlFor="job-notes">Notes</label><textarea id="job-notes" value={notes} onChange={e => setNotes(e.target.value)} data-testid="input-job-notes" /></div>
      <div className="modal-footer"><button className="outline-button" onClick={() => setEditing(null)} data-testid="button-cancel-job">Cancel</button><button className="primary-button" onClick={save} disabled={!company.trim() || !jobTitle.trim()} data-testid="button-save-job"><Check size={14} /> Save job</button></div>
    </div></Modal>}
  </div>;
}

function CanvasCard({ links, setLinks }: { links: CanvasLink[]; setLinks: React.Dispatch<React.SetStateAction<CanvasLink[]>> }) {
  const [adding, setAdding] = useState(false);
  const [module, setModule] = useState(""); const [url, setUrl] = useState("");
  const [live, setLive] = useState<{ status: "loading" | "configured" | "not-configured" | "error"; items: CanvasAssignment[]; error?: string }>({ status: "loading", items: [] });
  useEffect(() => {
    fetch("/api/canvas", { credentials: "include" }).then(r => r.json()).then((data: { configured: boolean; items?: CanvasAssignment[]; error?: string }) => {
      if (!data.configured) return setLive({ status: "not-configured", items: [] });
      if (data.error) return setLive({ status: "error", items: [], error: data.error });
      setLive({ status: "configured", items: data.items || [] });
    }).catch(() => setLive({ status: "not-configured", items: [] }));
  }, []);
  const save = () => { if (!module.trim() || !url.trim()) return; setLinks(all => [...all, { id: uid(), module: module.trim(), url: url.trim() }]); setModule(""); setUrl(""); setAdding(false); };
  return <div className="card accent-lilac">
    <div className="section-heading" style={{ marginTop: 0 }}><h2>Canvas</h2><button className="tiny-button" onClick={() => setAdding(a => !a)} aria-label="Add Canvas link" data-testid="button-add-canvas-link"><Plus size={16} /></button></div>
    {live.status === "configured" && (live.items.length ? <div className="list" style={{ marginTop: 6 }} data-testid="list-canvas-live">{live.items.map((item, i) => <div key={i} className="task-row"><div className="task-copy"><span className="task-title">{item.title}</span><small style={{ display: "block", opacity: 0.7 }}>{item.courseName}{item.dueAt ? ` · due ${prettyDate(item.dueAt.slice(0, 10))}` : ""}</small></div>{item.url && <a className="tiny-button" href={item.url} target="_blank" rel="noreferrer" aria-label={`Open ${item.title} in Canvas`}><ExternalLink size={14} /></a>}</div>)}</div> : <p className="page-description" style={{ fontSize: 13, marginTop: 6 }}>Connected to Canvas — nothing due in the next couple of weeks.</p>)}
    {live.status === "error" && <p className="verify-flag" style={{ fontSize: 12, marginTop: 6 }}>{live.error}</p>}
    {(live.status === "not-configured" || live.status === "loading") && (links.length ? <div className="list" style={{ marginTop: 6 }}>{links.map(l => <div key={l.id} className="task-row"><div className="task-copy"><a href={l.url} target="_blank" rel="noreferrer" className="task-title" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Link2 size={13} /> {l.module}</a></div><button className="tiny-button" onClick={() => setLinks(all => all.filter(x => x.id !== l.id))} aria-label={`Remove ${l.module} link`}><Trash2 size={14} /></button></div>)}</div> : <p className="page-description" style={{ fontSize: 13, marginTop: 6 }}>No direct Canvas API access is set up yet, so add your module links here for quick access to deadlines and announcements.</p>)}
    {adding && <div className="form-grid" style={{ marginTop: 12 }}><div className="field"><input value={module} onChange={e => setModule(e.target.value)} placeholder="Module name" aria-label="Module name" data-testid="input-canvas-module" /></div><div className="field"><input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://canvas..." aria-label="Canvas link" data-testid="input-canvas-url" /></div><button className="primary-button" onClick={save} data-testid="button-save-canvas-link"><Check size={14} /> Add link</button></div>}
  </div>;
}

function RouterView({ tasks, setTasks, goals, setGoals, notes, setNotes, sessions, setSessions, journal, setJournal, jobs, setJobs, research, setResearch, skillStats, setSkillStats, canvasLinks, setCanvasLinks, discoveredResearch, setDiscoveredResearch, discoveredJobs, setDiscoveredJobs }: { tasks: Task[]; setTasks: React.Dispatch<React.SetStateAction<Task[]>>; goals: Goal[]; setGoals: React.Dispatch<React.SetStateAction<Goal[]>>; notes: Note[]; setNotes: React.Dispatch<React.SetStateAction<Note[]>>; sessions: Session[]; setSessions: React.Dispatch<React.SetStateAction<Session[]>>; journal: JournalEntry[]; setJournal: React.Dispatch<React.SetStateAction<JournalEntry[]>>; jobs: Job[]; setJobs: React.Dispatch<React.SetStateAction<Job[]>>; research: ResearchItem[]; setResearch: React.Dispatch<React.SetStateAction<ResearchItem[]>>; skillStats: SkillStats; setSkillStats: React.Dispatch<React.SetStateAction<SkillStats>>; canvasLinks: CanvasLink[]; setCanvasLinks: React.Dispatch<React.SetStateAction<CanvasLink[]>>; discoveredResearch: DiscoveredResearch[]; setDiscoveredResearch: React.Dispatch<React.SetStateAction<DiscoveredResearch[]>>; discoveredJobs: DiscoveredJob[]; setDiscoveredJobs: React.Dispatch<React.SetStateAction<DiscoveredJob[]>> }) {
  return <Switch><Route path="/"><Dashboard tasks={tasks} setTasks={setTasks} canvasLinks={canvasLinks} setCanvasLinks={setCanvasLinks} /></Route><Route path="/week"><WeekPage tasks={tasks} setTasks={setTasks} /></Route><Route path="/month"><MonthPage tasks={tasks} setTasks={setTasks} /></Route><Route path="/goals"><GoalsPage goals={goals} setGoals={setGoals} /></Route><Route path="/notes"><NotesPage notes={notes} setNotes={setNotes} /></Route><Route path="/journal"><JournalPage entries={journal} setEntries={setJournal} /></Route><Route path="/games"><SkillGamesPage stats={skillStats} setStats={setSkillStats} /></Route><Route path="/research"><ResearchPage items={research} setItems={setResearch} discovered={discoveredResearch} setDiscovered={setDiscoveredResearch} /></Route><Route path="/jobs"><JobsPage jobs={jobs} setJobs={setJobs} discovered={discoveredJobs} setDiscovered={setDiscoveredJobs} /></Route><Route path="/focus"><FocusPage sessions={sessions} setSessions={setSessions} /></Route><Route><Dashboard tasks={tasks} setTasks={setTasks} canvasLinks={canvasLinks} setCanvasLinks={setCanvasLinks} /></Route></Switch>;
}

type GateStatus = "checking" | "needs-setup" | "needs-login" | "ready";

function LoginGate({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<GateStatus>("checking");
  const [passcode, setPasscode] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    fetch("/api/auth", { credentials: "include" })
      .then(r => r.json())
      .then((data: { hasPasscode: boolean; authenticated: boolean }) => {
        if (data.authenticated) setStatus("ready");
        else setStatus(data.hasPasscode ? "needs-login" : "needs-setup");
      })
      .catch(() => setError("Couldn't reach Study Bloom's server. Check your connection and try refreshing."));
  }, []);

  const submit = async () => {
    setError("");
    if (passcode.trim().length < 4) { setError("Use at least 4 characters."); return; }
    if (status === "needs-setup" && passcode !== confirm) { setError("Passcodes don't match."); return; }
    setBusy(true);
    try {
      const r = await fetch("/api/auth", { method: "POST", credentials: "include", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ passcode }) });
      const data = await r.json();
      if (!r.ok) { setError(data.error || "Something went wrong."); setBusy(false); return; }
      setStatus("ready");
    } catch {
      setError("Couldn't reach Study Bloom's server. Check your connection and try again.");
    }
    setBusy(false);
  };

  if (status === "ready") return <>{children}</>;

  return <div className="login-screen">
    <div className="card login-card accent-lilac">
      <span className="brand-mark" style={{ marginBottom: 16 }}><Flower2 size={21} strokeWidth={1.7} /></span>
      <div className="eyebrow">Study Bloom</div>
      {status === "checking" ? <h1 className="page-title" style={{ fontSize: 30 }}>One moment...</h1> : <>
        <h1 className="page-title" style={{ fontSize: 32 }}>{status === "needs-setup" ? <>Set your <em>passcode.</em></> : <>Welcome <em>back.</em></>}</h1>
        <p className="page-description" style={{ fontSize: 13 }}>{status === "needs-setup" ? "Choose a passcode you'll remember — you'll use this to sync Study Bloom across your devices." : "Enter your passcode to sync your tasks, jobs, journal and more."}</p>
        <div className="form-grid" style={{ marginTop: 18 }}>
          <div className="field"><label htmlFor="login-passcode">Passcode</label><input id="login-passcode" type="password" autoFocus value={passcode} onChange={e => setPasscode(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && status !== "needs-setup") submit(); }} data-testid="input-login-passcode" /></div>
          {status === "needs-setup" && <div className="field"><label htmlFor="login-confirm">Confirm passcode</label><input id="login-confirm" type="password" value={confirm} onChange={e => setConfirm(e.target.value)} onKeyDown={e => { if (e.key === "Enter") submit(); }} data-testid="input-login-confirm" /></div>}
          {error && <p className="verify-flag" style={{ fontSize: 12, margin: 0 }}>{error}</p>}
          <button className="primary-button" onClick={submit} disabled={busy || !passcode.trim()} data-testid="button-login-submit"><Check size={14} /> {status === "needs-setup" ? "Create passcode" : "Unlock"}</button>
        </div>
      </>}
    </div>
  </div>;
}

// Everything that reads/writes synced data lives here rather than in App() directly, so none of
// it — and none of its /api/data fetches — mounts until LoginGate has a valid session in hand.
function AuthedApp() {
  const [tasks, setTasks] = useStored<Task[]>("study-bloom-tasks", seedTasks());
  const [goals, setGoals] = useStored<Goal[]>("study-bloom-goals", seedGoals());
  const [notes, setNotes] = useStored<Note[]>("study-bloom-notes", seedNotes());
  const [sessions, setSessions] = useStored<Session[]>("study-bloom-sessions", []);
  const [journal, setJournal] = useStored<JournalEntry[]>("study-bloom-journal", []);
  const [jobs, setJobs] = useStored<Job[]>("study-bloom-jobs", []);
  const [research, setResearch] = useStored<ResearchItem[]>("study-bloom-research", RESEARCH_SEED);
  const [skillStats, setSkillStats] = useStored<SkillStats>("study-bloom-skill-stats", seedSkillStats());
  const [canvasLinks, setCanvasLinks] = useStored<CanvasLink[]>("study-bloom-canvas-links", []);
  const [discoveredResearch, setDiscoveredResearch] = useStored<DiscoveredResearch[]>("study-bloom-research-discovered", []);
  const [discoveredJobs, setDiscoveredJobs] = useStored<DiscoveredJob[]>("study-bloom-jobs-discovered", []);
  return <Shell><RouterView tasks={tasks} setTasks={setTasks} goals={goals} setGoals={setGoals} notes={notes} setNotes={setNotes} sessions={sessions} setSessions={setSessions} journal={journal} setJournal={setJournal} jobs={jobs} setJobs={setJobs} research={research} setResearch={setResearch} skillStats={skillStats} setSkillStats={setSkillStats} canvasLinks={canvasLinks} setCanvasLinks={setCanvasLinks} discoveredResearch={discoveredResearch} setDiscoveredResearch={setDiscoveredResearch} discoveredJobs={discoveredJobs} setDiscoveredJobs={setDiscoveredJobs} /></Shell>;
}

function App() {
  return <Router base={import.meta.env.BASE_URL.replace(/\/$/, "")}><LoginGate><AuthedApp /></LoginGate></Router>;
}

export default App;
