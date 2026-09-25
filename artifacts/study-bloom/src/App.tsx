import { useEffect, useMemo, useState } from "react";
import { Link, Route, Router, Switch, useLocation } from "wouter";
import {
  CalendarDays, Check, CheckCircle2, ChevronLeft, ChevronRight, Clock3, Flower2,
  Filter, Grid2X2, LayoutDashboard, ListTodo, Minus, NotebookPen, Pause, Pencil, Play, Plus,
  Rows3, RotateCcw, Target, Trash2, X
} from "lucide-react";
import { MODULES, buildClassTasks, buildStudyTasks, buildDeadlineTasks, buildStageTasks } from "./data/studyData";

type Task = { id: string; title: string; module: string; date: string; time?: string; duration?: number; done: boolean; color: string; kind?: "task" | "deadline" | "class" | "personal" };
type Goal = { id: string; title: string; detail: string; current: number; target: number; color: string };
type Note = { id: string; title: string; body: string; done: boolean; updated: string; color: string };
type Session = { id: string; label: string; minutes: number; date: string };

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

function useStored<T>(key: string, initial: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    try { const saved = localStorage.getItem(key); return saved ? JSON.parse(saved) as T : initial; } catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
}

const nav = [
  { href: "/", label: "Today", icon: LayoutDashboard },
  { href: "/week", label: "Week", icon: CalendarDays },
  { href: "/month", label: "Month", icon: CalendarDays },
  { href: "/goals", label: "Goals", icon: Target },
  { href: "/notes", label: "Notes", icon: NotebookPen },
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
      <div className="sidebar-foot"><p>Make room for good work.</p><small>Semester 01 · 2026</small></div>
    </aside>
    <main className="main">
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

function Dashboard({ tasks, setTasks }: { tasks: Task[]; setTasks: React.Dispatch<React.SetStateAction<Task[]>> }) {
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
        <div className="card"><div className="quote">“The work gets lighter when the next step is visible.”</div><div className="quote-by">A note for today</div></div>
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
    <div className="toolbar"><div className="switcher"><button className="icon-button" onClick={() => setWeek(addDays(week, -7))} aria-label="Previous week" data-testid="button-previous-week"><ChevronLeft size={17} /></button><div className="switcher-label">{prettyDate(dateKey(week), { day:"numeric", month:"short" })} — {prettyDate(dateKey(addDays(week, 6)), { day:"numeric", month:"short", year:"numeric" })}</div><button className="icon-button" onClick={() => setWeek(addDays(week, 7))} aria-label="Next week" data-testid="button-next-week"><ChevronRight size={17} /></button></div><button className="primary-button" onClick={() => setEditing({ date: days.some(day => dateKey(day) === todayKey) ? todayKey : weekStart })} data-testid="button-add-week-task"><Plus size={14} /> Add study block</button></div>
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

function RouterView({ tasks, setTasks, goals, setGoals, notes, setNotes, sessions, setSessions }: { tasks: Task[]; setTasks: React.Dispatch<React.SetStateAction<Task[]>>; goals: Goal[]; setGoals: React.Dispatch<React.SetStateAction<Goal[]>>; notes: Note[]; setNotes: React.Dispatch<React.SetStateAction<Note[]>>; sessions: Session[]; setSessions: React.Dispatch<React.SetStateAction<Session[]>> }) {
  return <Switch><Route path="/"><Dashboard tasks={tasks} setTasks={setTasks} /></Route><Route path="/week"><WeekPage tasks={tasks} setTasks={setTasks} /></Route><Route path="/month"><MonthPage tasks={tasks} setTasks={setTasks} /></Route><Route path="/goals"><GoalsPage goals={goals} setGoals={setGoals} /></Route><Route path="/notes"><NotesPage notes={notes} setNotes={setNotes} /></Route><Route path="/focus"><FocusPage sessions={sessions} setSessions={setSessions} /></Route><Route><Dashboard tasks={tasks} setTasks={setTasks} /></Route></Switch>;
}

function App() {
  const [tasks, setTasks] = useStored<Task[]>("study-bloom-tasks", seedTasks());
  const [goals, setGoals] = useStored<Goal[]>("study-bloom-goals", seedGoals());
  const [notes, setNotes] = useStored<Note[]>("study-bloom-notes", seedNotes());
  const [sessions, setSessions] = useStored<Session[]>("study-bloom-sessions", []);
  return <Router base={import.meta.env.BASE_URL.replace(/\/$/, "")}><Shell><RouterView tasks={tasks} setTasks={setTasks} goals={goals} setGoals={setGoals} notes={notes} setNotes={setNotes} sessions={sessions} setSessions={setSessions} /></Shell></Router>;
}

export default App;
