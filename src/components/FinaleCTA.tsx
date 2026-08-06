"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ButtonLink } from "./ButtonLink";

export function FinaleCTA({
  title = "Ready to prove your product story?",
  text = "Start with a Digital Product Passport pilot, map a few suppliers, or book a free strategy session — and leave with a path brands and regulators can trust.",
}: {
  title?: string;
  text?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-ink/8 bg-mint py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-sage/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-[280px] w-[280px] rounded-full bg-chalk-warm/50 blur-3xl"
      />
      <motion.div
        className="container-wide relative flex flex-col items-start justify-between gap-12 md:flex-row md:items-end"
        initial={reduce ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-2xl">
          <p className="chapter-label mb-5">Next chapter</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.025em] text-ink">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact" variant="secondary" showArrow>
            Request demo
          </ButtonLink>
          <Link
            href="/services"
            className="inline-flex items-center rounded-full border border-ink/12 bg-white/70 px-6 py-3 text-sm font-semibold text-ink shadow-[var(--shadow-soft)] transition duration-500 hover:bg-white hover:shadow-[var(--shadow-lift)]"
          >
            See Quick Start Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
