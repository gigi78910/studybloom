import type { VercelRequest, VercelResponse } from "@vercel/node";
import { ensureSchema, sql } from "./_db.js";
import {
  clearSessionCookie,
  getSessionFromRequest,
  hashPasscode,
  passcodesMatch,
  readJsonBody,
  setSessionCookie,
  signSession,
} from "./_auth.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    await ensureSchema();

    if (req.method === "GET") {
      const rows = await sql`SELECT passcode_hash FROM app_auth WHERE id = 1`;
      const hasPasscode = rows.length > 0 && !!rows[0].passcode_hash;
      return res.status(200).json({ hasPasscode, authenticated: getSessionFromRequest(req) });
    }

    if (req.method === "POST") {
      const body = readJsonBody<{ action?: string; passcode?: string }>(req);

      if (body.action === "logout") {
        clearSessionCookie(res);
        return res.status(200).json({ ok: true });
      }

      const passcode = String(body.passcode || "").trim();
      if (passcode.length < 4) {
        return res.status(400).json({ error: "Passcode must be at least 4 characters." });
      }

      const rows = await sql`SELECT passcode_hash, passcode_salt FROM app_auth WHERE id = 1`;

      if (rows.length === 0 || !rows[0].passcode_hash) {
        // First time Study Bloom has ever been used: whatever passcode is entered becomes the one going forward.
        const { hash, salt } = hashPasscode(passcode);
        await sql`
          INSERT INTO app_auth (id, passcode_hash, passcode_salt) VALUES (1, ${hash}, ${salt})
          ON CONFLICT (id) DO UPDATE SET passcode_hash = EXCLUDED.passcode_hash, passcode_salt = EXCLUDED.passcode_salt
        `;
        setSessionCookie(res, signSession());
        return res.status(200).json({ ok: true, created: true });
      }

      const { hash } = hashPasscode(passcode, rows[0].passcode_salt);
      if (!passcodesMatch(hash, rows[0].passcode_hash)) {
        return res.status(401).json({ error: "Incorrect passcode." });
      }
      setSessionCookie(res, signSession());
      return res.status(200).json({ ok: true });
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    console.error("auth handler error", err);
    return res.status(500).json({ error: "Study Bloom couldn't reach its server right now. Please try again." });
  }
}
