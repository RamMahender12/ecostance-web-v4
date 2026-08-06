"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { MediaItem, MediaKind } from "../content/site";

const filters: { id: "all" | MediaKind; label: string }[] = [
  { id: "all", label: "All" },
  { id: "article", label: "Articles" },
  { id: "video", label: "Videos" },
];

export function MediaGrid({ items }: { items: MediaItem[] }) {
  const [filter, setFilter] = useState<"all" | MediaKind>("all");
  const visible = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.kind === filter)),
    [filter, items],
  );

  return (
    <div>
      <div className="mb-12 flex flex-wrap gap-2 border-b border-ink/8 pb-7">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition duration-500 ${
              filter === f.id
                ? "bg-ink text-white shadow-[var(--shadow-soft)]"
                : "border border-ink/10 bg-white text-ink hover:bg-mint-soft"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <Link
            key={item.slug}
            href={`/media/${item.slug}`}
            className="group flex flex-col overflow-hidden bg-white shadow-[var(--shadow-soft)] transition duration-500 hover:shadow-[var(--shadow-lift)]"
          >
            <div className="relative h-52 w-full overflow-hidden bg-mint-soft">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover transition duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                sizes="(max-width:768px) 100vw, 33vw"
              />
              <span className="absolute left-3 top-3 bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink">
                {item.kind === "video" ? "Video" : "Article"}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="chapter-label text-ink/35">{item.date}</p>
              <h2 className="mt-3 font-display text-2xl font-medium text-ink">{item.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.excerpt}</p>
              <span className="mt-6 text-sm font-semibold tracking-wide text-ink underline-offset-4 transition group-hover:text-accent-dim group-hover:underline">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
