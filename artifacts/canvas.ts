import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getSessionFromRequest } from "./_auth";

// Real, live Canvas integration — but entirely optional. If you never add a Canvas token,
// this endpoint just says so and the Dashboard falls back to the manual-link widget.
//
// To turn this on:
//   1. In Canvas: Account -> Settings -> "+ New Access Token" -> copy the token it gives you.
//   2. In Vercel: add two environment variables —
//        CANVAS_BASE_URL   e.g. https://yourinstitution.instructure.com
//        CANVAS_API_TOKEN  the token you generated
//   3. Redeploy. The Dashboard will then show real upcoming Canvas items automatically.
//
// No token is ever sent to the browser — this endpoint calls Canvas server-side and only
// returns the normalized list of items.

type PlannerItem = {
  plannable_type?: string;
  plannable?: { title?: string; name?: string; due_at?: string };
  plannable_date?: string;
  context_name?: string;
  html_url?: string;
};

type CanvasAssignment = {
  courseName: string;
  title: string;
  dueAt: string | null;
  url: string | null;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!getSessionFromRequest(req)) {
    return res.status(401).json({ error: "Not signed in." });
  }
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const baseUrl = process.env.CANVAS_BASE_URL;
  const token = process.env.CANVAS_API_TOKEN;

  if (!baseUrl || !token) {
    return res.status(200).json({ configured: false, items: [] });
  }

  try {
    const url = `${baseUrl.replace(/\/$/, "")}/api/v1/planner/items?per_page=25&start_date=${new Date(
      Date.now() - 2 * 24 * 60 * 60 * 1000
    ).toISOString()}`;

    const canvasRes = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!canvasRes.ok) {
      console.error("Canvas API responded with", canvasRes.status, await canvasRes.text());
      return res.status(200).json({
        configured: true,
        error: "Canvas didn't accept the request — the token may have expired or been revoked.",
        items: [],
      });
    }

    const raw = (await canvasRes.json()) as PlannerItem[];

    const items: CanvasAssignment[] = raw
      .filter((item) => item.plannable_type === "assignment" || item.plannable_type === "quiz")
      .map((item) => ({
        courseName: item.context_name || "Canvas",
        title: item.plannable?.title || item.plannable?.name || "Untitled item",
        dueAt: item.plannable?.due_at || item.plannable_date || null,
        url: item.html_url ? `${baseUrl.replace(/\/$/, "")}${item.html_url}` : null,
      }))
      .sort((a, b) => (a.dueAt || "").localeCompare(b.dueAt || ""))
      .slice(0, 15);

    return res.status(200).json({ configured: true, items });
  } catch (err) {
    console.error("canvas handler error", err);
    return res.status(200).json({
      configured: true,
      error: "Couldn't reach Canvas just now. Please try again shortly.",
      items: [],
    });
  }
}
