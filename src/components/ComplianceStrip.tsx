import { regulations } from "../content/site";
import Link from "next/link";

export function ComplianceStrip({ compact }: { compact?: boolean }) {
  return (
    <div className="grid gap-px bg-ink/8 sm:grid-cols-2 lg:grid-cols-4">
      {regulations.slice(0, compact ? 4 : regulations.length).map((reg) => (
        <div
          key={reg.abbr}
          className="bg-white p-6 shadow-[var(--shadow-soft)] transition duration-500 hover:bg-mint-soft"
        >
          <p className="chapter-label text-accent-dim">{reg.abbr}</p>
          <h3 className="mt-4 font-display text-xl font-medium text-ink">{reg.name}</h3>
          {!compact ? (
            <p className="mt-3 text-sm leading-relaxed text-muted">{reg.summary}</p>
          ) : null}
        </div>
      ))}
      {compact ? (
        <Link
          href="/compliance"
          className="flex items-center justify-center bg-mint p-6 text-sm font-semibold tracking-wide text-ink transition duration-500 hover:bg-sage"
        >
          View full compliance map →
        </Link>
      ) : null}
    </div>
  );
}
