import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "crypto";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const COOKIE_NAME = "sb_session";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 180; // 180 days — this is a single-user personal app, so a long-lived session is fine.

function getSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "SESSION_SECRET environment variable is not set. Add a random string as SESSION_SECRET in Vercel's project environment variables."
    );
  }
  return secret;
}

export function signSession(): string {
  const exp = Date.now() + SESSION_TTL_SECONDS * 1000;
  const payload = String(exp);
  const sig = createHmac("sha256", getSecret()).update(payload).digest("hex");
  return `${payload}.${sig}`;
}

export function verifySession(token: string | undefined): boolean {
  if (!token) return false;
  const dot = token.indexOf(".");
  if (dot === -1) return false;
  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  if (!payload || !sig) return false;
  const expected = createHmac("sha256", getSecret()).update(payload).digest("hex");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
  const exp = Number(payload);
  return Number.isFinite(exp) && Date.now() < exp;
}

export function hashPasscode(passcode: string, salt?: string): { hash: string; salt: string } {
  const useSalt = salt || randomBytes(16).toString("hex");
  const hash = scryptSync(passcode, useSalt, 64).toString("hex");
  return { hash, salt: useSalt };
}

export function passcodesMatch(candidateHash: string, storedHash: string): boolean {
  const a = Buffer.from(candidateHash);
  const b = Buffer.from(storedHash);
  return a.length === b.length && timingSafeEqual(a, b);
}

function parseCookies(header: string | undefined): Record<string, string> {
  const out: Record<string, string> = {};
  if (!header) return out;
  header.split(";").forEach((part) => {
    const idx = part.indexOf("=");
    if (idx === -1) return;
    const key = part.slice(0, idx).trim();
    const value = part.slice(idx + 1).trim();
    out[key] = decodeURIComponent(value);
  });
  return out;
}

export function getSessionFromRequest(req: VercelRequest): boolean {
  const cookies = parseCookies(req.headers.cookie);
  return verifySession(cookies[COOKIE_NAME]);
}

export function setSessionCookie(res: VercelResponse, token: string) {
  const isProd = process.env.VERCEL_ENV === "production" || process.env.VERCEL_ENV === "preview";
  res.setHeader(
    "Set-Cookie",
    `${COOKIE_NAME}=${token}; Max-Age=${SESSION_TTL_SECONDS}; Path=/; HttpOnly; SameSite=Lax${isProd ? "; Secure" : ""}`
  );
}

export function clearSessionCookie(res: VercelResponse) {
  res.setHeader("Set-Cookie", `${COOKIE_NAME}=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax`);
}

export function readJsonBody<T = any>(req: VercelRequest): T {
  if (!req.body) return {} as T;
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body) as T;
    } catch {
      return {} as T;
    }
  }
  return req.body as T;
}
