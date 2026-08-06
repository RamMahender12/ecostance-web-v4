import type { Metadata } from "next";
import Image from "next/image";
import { FinaleCTA } from "../../components/FinaleCTA";
import { FadeUp, ParallaxFrame } from "../../components/Motion";
import { assets } from "../../content/assets";
import { aiAdvantages, trustPillars, trustStatement } from "../../content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "EcoStance is an AI-native product company delivering Digital Product Passports, supply-chain traceability, and trusted carbon disclosure for fashion brands.",
};

const lookbookNotes = [
  {
    title: "Product focus",
    text: "Digital Product Passport is our flagship. Traceability, carbon, engagement, and events feed the same trust layer.",
  },
  {
    title: "Built for fashion brands",
    text: "Customer connection through transparency on wool, fibres, and garments. Regulatory proof for EUDR, ESPR/DPP, CSRD, and more.",
  },
  {
    title: "Trust by design",
    text: "Immutable, machine-generated certificates on an immutable ledger — every transaction backed by evidence that cannot be quietly rewritten.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="editorial-band surface-chalk pb-12 pt-28 md:pt-32">
        <div className="container-wide">
          <FadeUp>
            <div className="grid items-end gap-14 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-6">
                <p className="chapter-label mb-5">About EcoStance</p>
                <h1 className="font-display text-[clamp(3rem,6vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.03em]">
                  AI-native product infrastructure for fashion &amp; supply-chain trust
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                  We are a product company — SaaS platform access, not a consulting firm. We help
                  brands prove what their products are made of, where they came from, and that the
                  supply chain meets ESG and regulatory expectations — with speed that only native
                  AI and pre-built workflows can deliver.
                </p>
              </div>
              <div className="overlap-frame lg:col-span-6">
                <ParallaxFrame className="relative min-h-[300px] md:min-h-[420px]">
                  <Image
                    src={assets.about_hero}
                    alt="Apparel lookbook — EcoStance about"
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 50vw"
                    priority
                  />
                </ParallaxFrame>
              </div>
            </div>
          </FadeUp>

          <div className="mt-20 grid gap-10 border-t border-ink/8 pt-14 md:grid-cols-3">
            {lookbookNotes.map((card, i) => (
              <FadeUp key={card.title} delay={i * 0.08}>
                <div className="border-t-2 border-accent/50 pt-6">
                  <span className="chapter-label text-ink/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-medium md:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{card.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-band bg-white">
        <div className="container-wide">
          <FadeUp>
            <p className="chapter-label mb-5">Trust layer</p>
            <h2 className="max-w-3xl font-display text-[clamp(2.5rem,5vw,3.5rem)] font-medium leading-[1.05]">
              Auditable. Immutable. Tamper-evident.
            </h2>
            <p className="mt-5 max-w-2xl text-muted">{trustStatement}</p>
            <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {trustPillars.map((pillar) => (
                <div key={pillar.title} className="border-t border-ink/12 pt-6">
                  <h3 className="font-display text-xl font-medium md:text-2xl">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{pillar.text}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="editorial-band pastel-wash">
        <div className="container-wide">
          <FadeUp>
            <div className="mb-14 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="chapter-label mb-5">How we win</p>
                <h2 className="font-display text-[clamp(2.5rem,4.5vw,3.5rem)] font-medium leading-[1.05]">
                  Trained LLM. Pre-built workflows. Lower cost.
                </h2>
              </div>
              <p className="self-end text-muted lg:col-span-5">
                Manual sustainability programmes take months. EcoStance compresses footprint
                calculation, disclosure, and passport deployment into workflows your team can run —
                with a conversational AI assistant on this site to explore the platform.
              </p>
            </div>
            <div className="grid gap-px bg-ink/8 md:grid-cols-2">
              {aiAdvantages.map((a) => (
                <div key={a.title} className="bg-white/80 p-7 md:p-9">
                  <h3 className="font-display text-xl font-medium md:text-2xl">{a.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{a.text}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <FinaleCTA />
    </>
  );
}
