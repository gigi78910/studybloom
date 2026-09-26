import type { VercelRequest, VercelResponse } from "@vercel/node";
import { ensureSchema, sql } from "./_db";

// Runs automatically once a day (see vercel.json's "crons" entry) and pulls genuinely new
// papers from two real, free, keyless academic APIs — arXiv and PubMed — for search terms
// matching your dissertation areas (cybersecurity + data science / AI-in-healthcare).
// Nothing here is invented: every title, author list, date and link comes straight from
// arXiv's or PubMed's own API response. Anything already seen (matched by URL) is skipped,
// so the list only ever grows with items you haven't been shown before.
//
// You never need to run this by hand — Vercel's scheduler calls it. It's also safe to open
// the URL yourself if you want to force an immediate check.

type DiscoveredItem = {
  id: string;
  source: "arXiv" | "PubMed";
  title: string;
  authors: string;
  url: string;
  publishedAt: string;
  discoveredAt: string;
};

const KEY = "study-bloom-research-discovered";
const MAX_KEPT = 60;

function isAuthorized(req: VercelRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return true; // no secret configured yet — allow (still only reachable by URL)
  return req.headers.authorization === `Bearer ${secret}`;
}

async function fetchArxiv(query: string, max: number): Promise<DiscoveredItem[]> {
  const url = `https://export.arxiv.org/api/query?search_query=${encodeURIComponent(
    query
  )}&sortBy=submittedDate&sortOrder=descending&max_results=${max}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`arXiv responded ${res.status}`);
  const xml = await res.text();

  const entries = xml.split("<entry>").slice(1);
  return entries.map((chunk) => {
    const grab = (tag: string) => {
      const m = chunk.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
      return m ? m[1].trim().replace(/\s+/g, " ") : "";
    };
    const idUrl = grab("id");
    const title = grab("title");
    const published = grab("published");
    const authorNames = Array.from(chunk.matchAll(/<name>([\s\S]*?)<\/name>/g)).map((m) => m[1].trim());
    return {
      id: idUrl,
      source: "arXiv" as const,
      title,
      authors: authorNames.join(", ") || "Unknown authors",
      url: idUrl,
      publishedAt: published || new Date().toISOString(),
      discoveredAt: new Date().toISOString(),
    };
  });
}

async function fetchPubMed(query: string, max: number): Promise<DiscoveredItem[]> {
  const searchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&sort=date&retmax=${max}&term=${encodeURIComponent(
    query
  )}`;
  const searchRes = await fetch(searchUrl);
  if (!searchRes.ok) throw new Error(`PubMed esearch responded ${searchRes.status}`);
  const searchJson = (await searchRes.json()) as { esearchresult?: { idlist?: string[] } };
  const ids = searchJson.esearchresult?.idlist || [];
  if (ids.length === 0) return [];

  const summaryUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=${ids.join(
    ","
  )}`;
  const summaryRes = await fetch(summaryUrl);
  if (!summaryRes.ok) throw new Error(`PubMed esummary responded ${summaryRes.status}`);
  const summaryJson = (await summaryRes.json()) as { result?: Record<string, any> };
  const result = summaryJson.result || {};

  return ids
    .filter((id) => result[id])
    .map((id) => {
      const item = result[id];
      const authors = Array.isArray(item.authors) ? item.authors.map((a: any) => a.name).join(", ") : "Unknown authors";
      return {
        id: `pubmed-${id}`,
        source: "PubMed" as const,
        title: item.title || "Untitled",
        authors: authors || "Unknown authors",
        url: `https://pubmed.ncbi.nlm.nih.gov/${id}/`,
        publishedAt: item.pubdate || new Date().toISOString(),
        discoveredAt: new Date().toISOString(),
      };
    });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!isAuthorized(req)) {
    return res.status(401).json({ error: "Not authorized." });
  }

  try {
    await ensureSchema();

    const [arxivCyber, arxivData, pubmedHealth] = await Promise.all([
      fetchArxiv("cat:cs.CR AND (abs:cybersecurity OR abs:threat OR abs:vulnerability)", 5).catch((err) => {
        console.error("arXiv cybersecurity fetch failed", err);
        return [] as DiscoveredItem[];
      }),
      fetchArxiv("cat:cs.LG AND (abs:reproducibility OR abs:data science OR abs:evaluation)", 5).catch((err) => {
        console.error("arXiv data-science fetch failed", err);
        return [] as DiscoveredItem[];
      }),
      fetchPubMed("artificial intelligence AND (NHS OR healthcare) AND diagnosis", 5).catch((err) => {
        console.error("PubMed fetch failed", err);
        return [] as DiscoveredItem[];
      }),
    ]);

    const fresh = [...arxivCyber, ...arxivData, ...pubmedHealth];

    const rows = await sql`SELECT value FROM app_data WHERE key = ${KEY}`;
    const existing: DiscoveredItem[] = rows.length ? rows[0].value : [];
    const seenUrls = new Set(existing.map((item) => item.url));

    const newOnes = fresh.filter((item) => item.url && !seenUrls.has(item.url));
    const merged = [...newOnes, ...existing].slice(0, MAX_KEPT);

    await sql`
      INSERT INTO app_data (key, value, updated_at) VALUES (${KEY}, ${JSON.stringify(merged)}::jsonb, now())
      ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = now()
    `;

    return res.status(200).json({ ok: true, added: newOnes.length, total: merged.length });
  } catch (err) {
    console.error("research-refresh handler error", err);
    return res.status(500).json({ error: "Refresh failed." });
  }
}
