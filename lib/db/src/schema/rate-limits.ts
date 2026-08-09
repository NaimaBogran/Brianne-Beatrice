import { pgTable, text, integer, bigint } from "drizzle-orm/pg-core";

/**
 * Persistent rate-limit counters for the contact form.
 * Each row tracks one IP address. `resetAt` is a Unix-epoch millisecond
 * timestamp; when the current time exceeds it the window has expired and
 * the count resets.
 */
export const rateLimitsTable = pgTable("rate_limits", {
  ip: text("ip").primaryKey(),
  count: integer("count").notNull().default(1),
  resetAt: bigint("reset_at", { mode: "number" }).notNull(),
});
