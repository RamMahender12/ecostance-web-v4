"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { APP_URL, SHOP_URL, nav } from "../content/site";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-5">
        <motion.div
          className={`pointer-events-auto flex w-full max-w-[1180px] items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-[background,box-shadow,border-color] duration-500 md:px-6 ${
            scrolled || open
              ? "border-ink/8 bg-chalk-warm/90 shadow-[var(--shadow-float)] backdrop-blur-xl"
              : "border-ink/6 bg-white/55 shadow-[var(--shadow-soft)] backdrop-blur-md"
          }`}
          initial={reduce ? false : { y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/" className="relative h-7 w-[128px] shrink-0" aria-label="EcoStance home">
            <Image
              src="/brand/logo.png"
              alt="EcoStance"
              fill
              sizes="128px"
              className="object-contain object-left"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-muted transition duration-300 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-muted transition hover:text-ink"
            >
              Shop offsets
            </a>
            <ButtonLink href="/contact" variant="secondary" showArrow>
              Request demo
            </ButtonLink>
          </div>

          <button
            type="button"
            className="relative inline-flex size-10 items-center justify-center rounded-full border border-ink/10 bg-white/80 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span
              className={`absolute h-px w-4 bg-ink transition duration-300 ${
                open ? "translate-y-0 rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute h-px w-4 bg-ink transition duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-px w-4 bg-ink transition duration-300 ${
                open ? "translate-y-0 -rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </motion.div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-chalk-warm/95 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <nav
              className="flex h-full flex-col justify-center gap-1 px-8 pt-20"
              aria-label="Mobile"
            >
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.45 }}
                >
                  <Link
                    href={item.href}
                    className="block py-3 font-display text-4xl font-medium text-ink transition hover:text-accent-dim"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 flex flex-col gap-3 border-t border-ink/10 pt-8">
                <a
                  href={SHOP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium uppercase tracking-[0.14em] text-muted"
                  onClick={() => setOpen(false)}
                >
                  Shop offsets
                </a>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium uppercase tracking-[0.14em] text-muted"
                  onClick={() => setOpen(false)}
                >
                  Open app
                </a>
                <ButtonLink href="/contact" variant="secondary" className="mt-2 w-full" showArrow>
                  Request demo
                </ButtonLink>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
