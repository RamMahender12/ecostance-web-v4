"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
  external?: boolean;
  showArrow?: boolean;
};

const styles = {
  primary:
    "bg-accent text-ink-2 shadow-[var(--shadow-soft)] hover:bg-sage hover:shadow-[var(--shadow-lift)]",
  secondary:
    "bg-ink text-white shadow-[var(--shadow-soft)] hover:bg-ink-2 hover:shadow-[var(--shadow-lift)]",
  ghost:
    "bg-transparent text-ink border border-ink/12 hover:border-ink/25 hover:bg-mint-soft/80",
  light:
    "bg-white/90 text-ink border border-ink/8 shadow-[var(--shadow-soft)] hover:bg-white hover:shadow-[var(--shadow-lift)]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external,
  showArrow,
}: Props) {
  const reduce = useReducedMotion();
  const cls = `group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold tracking-wide ${styles[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {showArrow ? (
        <span className="inline-flex size-7 items-center justify-center rounded-full bg-black/5 transition duration-500 group-hover:bg-black/10 dark:bg-white/10">
          <ArrowRight className="size-3.5 transition duration-500 group-hover:translate-x-0.5" aria-hidden />
        </span>
      ) : null}
    </>
  );

  const motionProps = reduce
    ? {}
    : {
        whileHover: { y: -1 },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
      };

  if (external) {
    return (
      <motion.a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div className="inline-flex" {...motionProps}>
      <Link href={href} className={cls}>
        {content}
      </Link>
    </motion.div>
  );
}
