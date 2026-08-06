"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { HeroVideo } from "./HeroVideo";
import { heroSlides, trustStatement } from "../content/site";

export function Hero() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];
  const reduce = useReducedMotion();

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 9000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-mint-soft text-ink">
      {/* Full-bleed fashion film */}
      <div className="absolute inset-0">
        <HeroVideo />
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 0.42 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Soft mint washes — editorial, not dark SaaS */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-chalk/95 via-mint-soft/70 to-mint-soft/20"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-chalk/90 via-transparent to-mint-soft/50"
        />
      </div>

      <div className="container-wide relative flex min-h-[100dvh] flex-col justify-end pb-20 pt-32 md:justify-center md:pb-28 md:pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.href}
            initial={reduce ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -16 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="chapter-label mb-6">
              {slide.flagship ? "Vol. 01 · Flagship" : "Vol. 02 · Traceability"}
              <span className="mx-3 text-ink/20">—</span>
              {String(index + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
            </p>
            <h1 className="font-display text-[clamp(3.25rem,7.5vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.03em] text-ink md:text-[clamp(3.5rem,7vw,4.5rem)]">
              {slide.title}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ink/65 md:text-lg">
              {slide.subtitle}
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-5">
              <Link
                href={slide.href}
                className="group inline-flex items-center gap-3 border-b border-ink/80 pb-1.5 text-sm font-semibold tracking-wide text-ink transition duration-500 hover:border-accent-dim hover:text-accent-dim"
              >
                {slide.cta}
                <ArrowRight className="size-4 transition duration-500 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-white/70 px-6 py-3 text-sm font-semibold text-ink shadow-[var(--shadow-soft)] backdrop-blur-sm transition duration-500 hover:border-ink/25 hover:bg-white hover:shadow-[var(--shadow-lift)]"
              >
                Request demo
              </Link>
            </div>
            <p className="mt-14 max-w-md font-display text-xl italic leading-snug text-ink/50">
              {trustStatement}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 flex max-w-3xl items-center justify-between border-t border-ink/10 pt-7">
          <div className="flex gap-3">
            {heroSlides.map((s, i) => (
              <button
                key={s.href}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-px transition-all duration-700 ${
                  i === index ? "w-14 bg-ink" : "w-7 bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              className="inline-flex size-11 items-center justify-center rounded-full border border-ink/10 bg-white/60 shadow-[var(--shadow-soft)] transition duration-500 hover:bg-white hover:shadow-[var(--shadow-lift)]"
              onClick={() => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length)}
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              className="inline-flex size-11 items-center justify-center rounded-full border border-ink/10 bg-white/60 shadow-[var(--shadow-soft)] transition duration-500 hover:bg-white hover:shadow-[var(--shadow-lift)]"
              onClick={() => setIndex((i) => (i + 1) % heroSlides.length)}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
