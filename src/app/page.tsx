import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Hero } from "../components/Hero";
import { ComplianceStrip } from "../components/ComplianceStrip";
import { FinaleCTA } from "../components/FinaleCTA";
import { FadeUp, ParallaxFrame } from "../components/Motion";
import { ButtonLink } from "../components/ButtonLink";
import { assets } from "../content/assets";
import {
  aiAdvantages,
  custodySteps,
  freeOffer,
  productBySlug,
  services,
  trustPillars,
  trustStatement,
} from "../content/site";

const dpp = productBySlug("digital-product-passport")!;
const supply = productBySlug("supply-chain-traceability")!;
const offsets = productBySlug("offsets-and-reporting")!;
const calculators = productBySlug("emission-calculators")!;
const engagement = productBySlug("employee-engagement")!;
const events = productBySlug("green-events")!;

const lookbook = [
  { product: offsets, image: assets.offsets, chapter: "03" },
  { product: calculators, image: assets.calculators, chapter: "04" },
  { product: engagement, image: assets.engagement, chapter: "05" },
  { product: events, image: assets.events, chapter: "06" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Magazine intro — asymmetric editorial spread */}
      <section className="editorial-band surface-chalk">
        <div className="container-wide">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-7">
                <p className="chapter-label mb-7">EcoStance · Fashion editorial</p>
                <h2 className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.025em]">
                  Product transparency that connects you to customers — and proves compliance.
                </h2>
              </div>
              <div className="flex flex-col justify-end lg:col-span-5 lg:pl-8">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  Customers want to know where wool, fibres, and materials come from — and that your
                  supply chain meets ESG standards: no child labour, fair wages, environmental
                  stewardship in farming and manufacturing. Regulators want evidence. EcoStance is
                  the product platform that delivers both.
                </p>
                <p className="mt-8 border-l-2 border-accent/60 pl-5 font-display text-xl italic leading-snug text-ink/55">
                  {trustStatement}
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Chapter I — DPP hang-tag with overlapping image */}
      <section className="editorial-band bg-white">
        <div className="container-wide">
          <FadeUp>
            <div className="mb-16 flex flex-wrap items-end justify-between gap-6 border-b border-ink/8 pb-10">
              <div>
                <p className="chapter-label mb-4">Chapter 01 · Flagship</p>
                <h2 className="font-display text-[clamp(2.5rem,4.5vw,3.5rem)] font-medium leading-[1.05]">
                  {dpp.name}
                </h2>
              </div>
              <Link
                href={`/products/${dpp.slug}`}
                className="text-sm font-semibold tracking-wide text-ink underline-offset-4 transition hover:text-accent-dim hover:underline"
              >
                Read the passport story →
              </Link>
            </div>
          </FadeUp>

          <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
            <FadeUp className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-md lg:mx-0">
                <div className="hang-tag">
                  <p className="chapter-label mb-5">Scan · Verify · Trust</p>
                  <h3 className="font-display text-3xl font-medium leading-tight md:text-[2.15rem]">
                    The hang-tag that proves every fibre
                  </h3>
                  <dl className="mt-9 space-y-4 border-t border-ink/8 pt-7">
                    {[
                      { k: "Material", v: "Merino wool · RWS" },
                      { k: "Origin", v: "Farm → mill → brand" },
                      { k: "ESG", v: "No child labour · Fair wage" },
                      { k: "Footprint", v: "1.2 kg CO₂e / unit" },
                    ].map((row) => (
                      <div key={row.k} className="flex justify-between gap-4 text-sm">
                        <dt className="text-muted">{row.k}</dt>
                        <dd className="font-medium text-ink">{row.v}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-9 text-sm leading-relaxed text-muted">{dpp.tagline}</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.12} className="lg:col-span-7 lg:pl-8">
              <p className="font-display text-3xl font-medium leading-snug md:text-4xl">
                {dpp.hero}
              </p>
              <p className="mt-7 text-base leading-relaxed text-muted md:text-lg">{dpp.blurb}</p>
              <ul className="mt-9 space-y-4">
                {dpp.bullets.slice(0, 3).map((b) => (
                  <li key={b} className="flex gap-4 text-sm text-muted md:text-base">
                    <span className="mt-3 h-px w-8 shrink-0 bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12">
                <ButtonLink href={`/products/${dpp.slug}`} variant="secondary" showArrow>
                  Explore Digital Product Passport
                </ButtonLink>
              </div>
            </FadeUp>
          </div>

          {/* Custody ribbon — overlapping image + text */}
          <FadeUp className="mt-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-0">
              <ParallaxFrame className="relative min-h-[320px] lg:col-span-5 lg:min-h-[420px]">
                <Image
                  src={assets.custody}
                  alt="Chain of custody from raw fibre to passport"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 42vw"
                />
              </ParallaxFrame>
              <div className="relative z-10 bg-mint-soft p-8 shadow-[var(--shadow-lift)] md:p-12 lg:col-span-7 lg:-ml-16 lg:mt-12">
                <p className="chapter-label mb-4">From fibre to passport</p>
                <h3 className="font-display text-3xl font-medium md:text-4xl">
                  Chain of custody, surfaced in the passport
                </h3>
                <ol className="mt-10 grid gap-6 sm:grid-cols-2">
                  {custodySteps.map((step, i) => (
                    <li key={step.title} className="border-l-2 border-accent/40 pl-4">
                      <span className="chapter-label text-ink/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-2 font-display text-xl font-medium">{step.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Chapter II — Supply, image right / text left alternating */}
      <section className="editorial-band pastel-wash">
        <div className="container-wide">
          <FadeUp>
            <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
              <div className="order-2 lg:order-1 lg:col-span-5">
                <p className="chapter-label mb-5">Chapter 02 · Traceability</p>
                <h2 className="font-display text-[clamp(2.5rem,4.5vw,3.5rem)] font-medium leading-[1.05]">
                  {supply.name}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">{supply.blurb}</p>
                <div className="mt-10">
                  <ButtonLink href={`/products/${supply.slug}`} variant="secondary" showArrow>
                    See supply chain traceability
                  </ButtonLink>
                </div>
              </div>
              <div className="order-1 overlap-frame flex aspect-[4/5] flex-col justify-between bg-white p-8 shadow-[var(--shadow-lift)] md:p-12 lg:order-2 lg:col-span-7 lg:ml-8">
                <p className="chapter-label">Lookbook note</p>
                <p className="font-display text-3xl font-medium italic leading-snug text-ink md:text-[2.75rem]">
                  {supply.hero}
                </p>
                <ul className="space-y-3 border-t border-ink/8 pt-7">
                  {supply.bullets.slice(0, 3).map((b) => (
                    <li key={b} className="text-sm text-muted">
                      — {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>

          {/* Cross-border — side reference only */}
          <FadeUp className="mt-20">
            <aside className="grid gap-6 border border-ink/8 bg-white/80 p-6 shadow-[var(--shadow-soft)] md:grid-cols-[120px_1fr] md:p-8">
              <div className="relative aspect-square overflow-hidden md:aspect-auto md:min-h-[110px]">
                <Image
                  src={assets.cross_border}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>
              <div>
                <p className="chapter-label mb-2">Also available · Side product</p>
                <h3 className="font-display text-xl font-medium md:text-2xl">
                  Cross-Border Commerce
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  Transaction and logistics traceability, verified identity, and tamper-evident
                  records for raw-material trade across borders — a companion to the flagship
                  passport and supply graph, not the homepage lead.
                </p>
                <Link
                  href="/products/cross-border-commerce"
                  className="mt-4 inline-block text-sm font-semibold text-ink underline-offset-4 transition hover:text-accent-dim hover:underline"
                >
                  Cross-Border Commerce →
                </Link>
              </div>
            </aside>
          </FadeUp>
        </div>
      </section>

      {/* Chapters 03–06 — alternating left/right magazine spreads */}
      <section className="bg-white">
        {lookbook.map(({ product, image, chapter }, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={product.slug}
              className={`editorial-band ${reverse ? "pastel-wash" : "bg-white"}`}
            >
              <div className="container-wide">
                <FadeUp>
                  <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
                    <ParallaxFrame
                      className={`relative aspect-[5/4] lg:col-span-6 ${
                        reverse ? "lg:order-2 lg:col-start-7" : ""
                      } ${reverse ? "" : "lg:-mr-4"} ${reverse ? "lg:-ml-4" : ""}`}
                    >
                      <Image
                        src={image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width:1024px) 100vw, 50vw"
                      />
                    </ParallaxFrame>
                    <div
                      className={`lg:col-span-5 ${
                        reverse
                          ? "lg:order-1 lg:col-start-1 lg:pr-8"
                          : "lg:col-start-8 lg:pl-4"
                      }`}
                    >
                      <p className="chapter-label mb-4">Chapter {chapter}</p>
                      <h2 className="font-display text-3xl font-medium md:text-4xl">
                        {product.name}
                      </h2>
                      <p className="mt-3 text-sm font-medium text-ink/70">{product.tagline}</p>
                      <p className="mt-6 text-base leading-relaxed text-muted">{product.blurb}</p>
                      <Link
                        href={`/products/${product.slug}`}
                        className="mt-10 inline-flex border-b border-ink/70 pb-1.5 text-sm font-semibold tracking-wide transition duration-500 hover:border-accent-dim hover:text-accent-dim"
                      >
                        Open lookbook entry →
                      </Link>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          );
        })}
      </section>

      {/* AI chapter — light pastel editorial, not dark SaaS */}
      <section className="editorial-band bg-mint">
        <div className="container-wide">
          <FadeUp>
            <p className="chapter-label mb-5">Chapter · AI-native</p>
            <div className="mb-14 grid gap-10 lg:grid-cols-12">
              <h2 className="font-display text-[clamp(2.5rem,4.5vw,3.5rem)] font-medium leading-[1.05] lg:col-span-7">
                Speed, lower cost, and trust — by design
              </h2>
              <p className="self-end text-base leading-relaxed text-muted md:text-lg lg:col-span-5">
                We are an AI-native product company. Pre-built end-to-end workflows simplify the
                experience from data to disclosure — and a conversational AI assistant on this site
                helps you explore the platform.
              </p>
            </div>
            <div className="mb-12 flex items-start gap-4 border border-ink/8 bg-white/70 p-6 shadow-[var(--shadow-soft)]">
              <MessageCircle className="mt-0.5 size-5 shrink-0 text-accent-dim" strokeWidth={1.5} />
              <p className="text-sm leading-relaxed text-muted md:text-base">
                Use the <strong className="font-semibold text-ink">Ask EcoStance</strong> assistant
                (bottom right) for instant answers on Digital Product Passports, traceability,
                compliance, and pilots.
              </p>
            </div>
            <div className="grid gap-px bg-ink/8 md:grid-cols-2 lg:grid-cols-3">
              {aiAdvantages.map((a) => (
                <div key={a.title} className="bg-mint-soft/90 p-7 md:p-8">
                  <h3 className="font-display text-xl font-medium md:text-2xl">{a.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{a.text}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Trust */}
      <section className="editorial-band bg-white">
        <div className="container-wide">
          <FadeUp>
            <p className="chapter-label mb-5">Trust layer</p>
            <h2 className="max-w-3xl font-display text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-[1.05]">
              Auditable. Immutable. Tamper-evident.
            </h2>
            <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">{trustStatement}</p>
            <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {trustPillars.map((pillar) => (
                <div key={pillar.title} className="border-t border-ink/12 pt-6">
                  <h3 className="font-display text-2xl font-medium">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{pillar.text}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Compliance */}
      <section className="editorial-band pastel-wash">
        <div className="container-wide">
          <FadeUp>
            <p className="chapter-label mb-5">Compliance</p>
            <h2 className="max-w-3xl font-display text-[clamp(2.5rem,4.5vw,3.5rem)] font-medium leading-[1.05]">
              Not just EUDR — the full evidence stack
            </h2>
            <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">
              Fashion and apparel brands selling into Europe and beyond face overlapping product and
              supply-chain rules. EcoStance helps you collect once and prove many times.
            </p>
            <div className="mt-14">
              <ComplianceStrip compact />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Quick Start lookbook strips */}
      <section className="editorial-band bg-white">
        <div className="container-wide">
          <FadeUp>
            <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
              <div>
                <p className="chapter-label mb-4">Quick Start Services</p>
                <h2 className="font-display text-[clamp(2.5rem,4.5vw,3.5rem)] font-medium leading-[1.05]">
                  One-week pilots. Product-first.
                </h2>
                <p className="mt-5 max-w-xl text-muted">
                  Five focused pilots help you experience EcoStance fast — plus a free strategy
                  session to map the right first move.
                </p>
              </div>
              <ButtonLink href="/services" variant="ghost" showArrow>
                Full lookbook
              </ButtonLink>
            </div>
          </FadeUp>

          <div className="flex flex-col">
            {services.map((s, i) => (
              <FadeUp key={s.slug} delay={i * 0.04}>
                <Link
                  href="/services"
                  className="group lookbook-strip grid items-center gap-6 border-t border-ink/8 py-7 md:grid-cols-[110px_1fr_auto] md:gap-12"
                >
                  <span className="chapter-label text-ink/30">
                    {String(i + 1).padStart(2, "0")} · {s.duration}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium transition duration-500 group-hover:text-accent-dim md:text-3xl">
                      {s.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted">{s.tagline}</p>
                  </div>
                  <span className="hidden text-sm font-semibold tracking-wide md:inline">
                    View →
                  </span>
                </Link>
              </FadeUp>
            ))}
            <FadeUp>
              <div className="lookbook-strip grid items-center gap-6 border-y border-ink/8 bg-mint-soft/90 py-10 md:grid-cols-[110px_1fr_auto] md:gap-12 md:px-4">
                <span className="chapter-label text-accent-dim">Free</span>
                <div>
                  <h3 className="font-display text-2xl font-medium md:text-3xl">{freeOffer.name}</h3>
                  <p className="mt-1.5 text-sm text-muted">{freeOffer.tagline}</p>
                </div>
                <ButtonLink href="/contact" variant="secondary" showArrow>
                  Book session
                </ButtonLink>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <FinaleCTA />
    </>
  );
}
