import { useMemo, useState } from "react";
import { Link } from "wouter";
import { BookOpen, Filter } from "lucide-react";
import { READING_LIST, type ReadingStatusTag } from "../data/readingList";
import { ALL_ASSESSMENTS, SEMESTER1_MODULES } from "../data/assessments";

const STATUS_TAGS: ReadingStatusTag[] = ["Want to Read", "Currently Reading", "Completed", "Useful for Assessment"];

export default function ReadingListPage({
  readingStatus,
  setReadingStatus,
}: {
  readingStatus: Record<string, string>;
  setReadingStatus: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}) {
  const [query, setQuery] = useState("");
  const [moduleFilter, setModuleFilter] = useState("All");

  const filteredBooks = READING_LIST.filter((b) => {
    if (moduleFilter !== "All" && !b.relatedModules.includes(moduleFilter)) return false;
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      if (!`${b.title} ${b.author} ${b.topics.join(" ")}`.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  // Real, verbatim-extracted reading references already attached to assessment guides — these
  // are genuine citations pulled from the official module documents, shown here so the Reading
  // List isn't empty while no dedicated reading-list documents have been supplied yet.
  const assessmentReadings = useMemo(
    () =>
      ALL_ASSESSMENTS.filter((a) => a.readingRefs && a.readingRefs.length > 0).flatMap((a) =>
        (a.readingRefs || []).map((r) => ({ ref: r, assessment: a }))
      ),
    []
  );
  const filteredAssessmentReadings = assessmentReadings.filter(({ ref, assessment }) => {
    if (moduleFilter !== "All" && assessment.moduleCode !== moduleFilter) return false;
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      if (!`${ref.title} ${ref.author || ""} ${assessment.title}`.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  return (
    <div className="page-enter">
      <div className="eyebrow">Reading, tied to your assessments</div>
      <h1 className="page-title">
        Reading <em>List.</em>
      </h1>
      <p className="page-description">
        Books and articles relevant to your Semester 1 modules and assessments. No dedicated reading-list documents have
        been supplied yet, so this page is built and ready to fill in — nothing here is invented.
      </p>

      <div className="toolbar">
        <div className="field" style={{ minWidth: 220 }}>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search title, author or topic..." aria-label="Search reading list" data-testid="input-reading-search" />
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

      <div className="section-heading">
        <h2>Referenced in your assessment guides</h2>
        <span>{filteredAssessmentReadings.length} reference{filteredAssessmentReadings.length === 1 ? "" : "s"}</span>
      </div>
      {filteredAssessmentReadings.length ? (
        <div className="notes-grid">
          {filteredAssessmentReadings.map(({ ref, assessment }, i) => (
            <article key={i} className="card note-card accent-sage" data-testid={`card-reading-ref-${i}`}>
              <div className="mini-label">{assessment.moduleCode}</div>
              <h3>{ref.title}</h3>
              {ref.author && <p style={{ margin: "2px 0 6px", fontSize: 13, opacity: 0.8 }}>{ref.author}</p>}
              {ref.note && <p style={{ fontSize: 13 }}>{ref.note}</p>}
              <div className="tag-row">
                <span className="tag-chip">Relevant to</span>
                <Link href={`/deadlines/${assessment.id}`} className="tag-chip" style={{ textDecoration: "none" }}>
                  {assessment.title}
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="card empty-state">
          <BookOpen size={26} />
          <p>No reading references match these filters.</p>
        </div>
      )}

      <div className="section-heading">
        <h2>Full reading list</h2>
        <span>{filteredBooks.length} title{filteredBooks.length === 1 ? "" : "s"}</span>
      </div>
      {filteredBooks.length ? (
        <div className="notes-grid">
          {filteredBooks.map((book) => {
            const status = (readingStatus[book.id] as ReadingStatusTag) || undefined;
            return (
              <article key={book.id} className="card note-card accent-lilac" data-testid={`card-book-${book.id}`}>
                <div className="mini-label">{book.type} · {book.relatedModules.join(", ")}</div>
                <h3>{book.title}</h3>
                <p style={{ margin: "2px 0 6px", fontSize: 13, opacity: 0.8 }}>
                  {book.author}
                  {book.edition ? `, ${book.edition}` : ""}
                  {book.year ? ` (${book.year})` : ""}
                </p>
                <p>{book.description}</p>
                <p style={{ fontSize: 13 }}>
                  <strong>Why relevant:</strong> {book.whyRelevant}
                </p>
                <p style={{ fontSize: 13 }}>
                  <strong>How to use it:</strong> {book.howToUse}
                </p>
                {book.link ? (
                  <a href={book.link} target="_blank" rel="noreferrer" style={{ fontSize: 13 }}>
                    View source
                  </a>
                ) : (
                  <p style={{ fontSize: 12, opacity: 0.7 }}>Check your university library for access.</p>
                )}
                <div className="tag-row" style={{ marginTop: 8 }}>
                  {book.topics.map((t) => (
                    <span key={t} className="tag-chip">
                      {t}
                    </span>
                  ))}
                </div>
                <select
                  className="status-select"
                  style={{ marginTop: 10 }}
                  value={status || ""}
                  onChange={(e) => setReadingStatus((all) => ({ ...all, [book.id]: e.target.value }))}
                  aria-label={`Reading status for ${book.title}`}
                >
                  <option value="">Set status...</option>
                  {STATUS_TAGS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="card empty-state">
          <BookOpen size={26} />
          <p>Reading list not yet added.</p>
          <small>Once module reading lists are supplied, they'll appear here with links back to their modules and assessments.</small>
        </div>
      )}
    </div>
  );
}
