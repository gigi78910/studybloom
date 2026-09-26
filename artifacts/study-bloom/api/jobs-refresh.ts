import type { VercelRequest, VercelResponse } from "@vercel/node";
import { ensureSchema, sql } from "./_db";

// Runs automatically once a day (see vercel.json) and pulls genuinely new listings from
// Jobicy's free, keyless jobs API (https://jobicy.com/jobs-rss-feed) for the cybersecurity
// and data-science tags. Every title, company, and link comes straight from Jobicy's own
// response — nothing here is invented. Already-seen listings (matched by URL) are skipped.
//
// Honest limitation: Jobicy only lists remote roles, and it isn't graduate-scheme specific,
// so this surfaces real openings but won't be a complete picture of UK graduate/placement
// schemes — those still belong on your manually curated Jobs tracker page. Think of this as
// "one more real place to look automatically," not a replacement for it.

type DiscoveredJob = {
  id: string;
  title: string;
  company: string;
  url: string;
  geo: string;
  tag: string;
  postedAt: string;
  discoveredAt: string;
};

const KEY = "study-bloom-jobs-discovered";
const MAX_KEPT = 80;

function isAuthorized(req: VercelRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return true;
  return req.headers.authorization === `Bearer ${secret}`;
}

async function fetchJobicy(tag: string, count: number): Promise<DiscoveredJob[]> {
  const url = `https://jobicy.com/api/v2/remote-jobs?count=${count}&tag=${encodeURIComponent(tag)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Jobicy responded ${res.status}`);
  const json = (await res.json()) as { jobs?: any[] };
  const jobs = json.jobs || [];
  return jobs.map((job) => ({
    id: `jobicy-${job.id}`,
    title: job.jobTitle || "Untitled role",
    company: job.companyName || "Unknown company",
    url: job.url,
    geo: job.jobGeo || "Remote",
    tag,
    postedAt: job.pubDate || new Date().toISOString(),
    discoveredAt: new Date().toISOString(),
  }));
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!isAuthorized(req)) {
    return res.status(401).json({ error: "Not authorized." });
  }

  try {
    await ensureSchema();

    const [cyberJobs, dataJobs] = await Promise.all([
      fetchJobicy("cybersecurity", 10).catch((err) => {
        console.error("Jobicy cybersecurity fetch failed", err);
        return [] as DiscoveredJob[];
      }),
      fetchJobicy("data-science", 10).catch((err) => {
        console.error("Jobicy data-science fetch failed", err);
        return [] as DiscoveredJob[];
      }),
    ]);

    const fresh = [...cyberJobs, ...dataJobs];

    const rows = await sql`SELECT value FROM app_data WHERE key = ${KEY}`;
    const existing: DiscoveredJob[] = rows.length ? rows[0].value : [];
    const seenUrls = new Set(existing.map((job) => job.url));

    const newOnes = fresh.filter((job) => job.url && !seenUrls.has(job.url));
    const merged = [...newOnes, ...existing].slice(0, MAX_KEPT);

    await sql`
      INSERT INTO app_data (key, value, updated_at) VALUES (${KEY}, ${JSON.stringify(merged)}::jsonb, now())
      ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = now()
    `;

    return res.status(200).json({ ok: true, added: newOnes.length, total: merged.length });
  } catch (err) {
    console.error("jobs-refresh handler error", err);
    return res.status(500).json({ error: "Refresh failed." });
  }
}
