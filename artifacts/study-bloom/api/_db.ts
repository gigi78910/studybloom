import { neon } from "@neondatabase/serverless";

// Vercel's Postgres (Neon) storage integration sets several env vars; POSTGRES_URL is the
// pooled connection string meant for exactly this kind of short-lived serverless query.
const connectionString =
  process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.POSTGRES_PRISMA_URL;

if (!connectionString) {
  throw new Error(
    "No database connection string found. Expected DATABASE_URL or POSTGRES_URL to be set by the Vercel Postgres integration."
  );
}

export const sql = neon(connectionString);

let schemaReady: Promise<void> | null = null;

/** Creates the two tables Study Bloom needs, if they don't already exist. Safe to call every request. */
export function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    schemaReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS app_data (
          key TEXT PRIMARY KEY,
          value JSONB NOT NULL,
          updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
        )
      `;
      await sql`
        CREATE TABLE IF NOT EXISTS app_auth (
          id INT PRIMARY KEY DEFAULT 1,
          passcode_hash TEXT,
          passcode_salt TEXT
        )
      `;
    })();
  }
  return schemaReady;
}
