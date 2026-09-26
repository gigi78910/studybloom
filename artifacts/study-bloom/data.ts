import type { VercelRequest, VercelResponse } from "@vercel/node";
import { ensureSchema, sql } from "./_db.js";
import { getSessionFromRequest, readJsonBody } from "./_auth.js";

// Every key Study Bloom is allowed to read/write. Keeping an allow-list stops an unexpected
// request from writing an arbitrary row into the table.
const ALLOWED_KEYS = new Set([
  "study-bloom-tasks",
  "study-bloom-goals",
  "study-bloom-notes",
  "study-bloom-sessions",
  "study-bloom-journal",
  "study-bloom-jobs",
  "study-bloom-research",
  "study-bloom-skill-stats",
  "study-bloom-canvas-links",
  "study-bloom-weekly-capacity",
  "study-bloom-research-discovered",
  "study-bloom-jobs-discovered",
]);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!getSessionFromRequest(req)) {
    return res.status(401).json({ error: "Not signed in." });
  }

  try {
    await ensureSchema();

    if (req.method === "GET") {
      const key = String(req.query.key || "");
      if (!ALLOWED_KEYS.has(key)) return res.status(400).json({ error: "Unknown key." });
      const rows = await sql`SELECT value FROM app_data WHERE key = ${key}`;
      return res.status(200).json({ value: rows.length ? rows[0].value : null });
    }

    if (req.method === "PUT") {
      const body = readJsonBody<{ key?: string; value?: unknown }>(req);
      const key = String(body.key || "");
      if (!ALLOWED_KEYS.has(key)) return res.status(400).json({ error: "Unknown key." });
      await sql`
        INSERT INTO app_data (key, value, updated_at) VALUES (${key}, ${JSON.stringify(body.value)}::jsonb, now())
        ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = now()
      `;
      return res.status(200).json({ ok: true });
    }

    res.setHeader("Allow", "GET, PUT");
    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    console.error("data handler error", err);
    return res.status(500).json({ error: "Study Bloom couldn't sync just now. Please try again." });
  }
}
