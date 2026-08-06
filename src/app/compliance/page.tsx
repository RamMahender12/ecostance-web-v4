import type { Metadata } from "next";
import Image from "next/image";
import { ComplianceStrip } from "../../components/ComplianceStrip";
import { FinaleCTA } from "../../components/FinaleCTA";
import { FadeUp, ParallaxFrame } from "../../components/Motion";
import { ButtonLink } from "../../components/ButtonLink";
import { assets } from "../../content/assets";
import { regulations } from "../../content/site";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "EUDR, ESPR/DPP, CSRD, CSDDD, CBAM, Forced Labour Regulation, PPWR, UFLPA — product and supply-chain evidence for fashion brands.",
};

export default function CompliancePage() {
  return (
    <>
      <section className="editorial-band surface-chalk pb-12 pt-28 md:pt-32">
        <div className="container-wide">
          <FadeUp>
            <div className="grid items-end gap-14 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-6">
                <p className="chapter-label mb-5">Compliance</p>
                <h1 className="font-display text-[clamp(3rem,6vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.03em]">
                  Prove sourcing, ESG, and product identity across the rulebook
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                  Product, supply-chain, and cross-border obligations go far beyond a single
                  regulation. EcoStance helps apparel brands collect trusted data once and use it
                  for disclosure, passports, and due diligence.
                </p>
              </div>
              <ParallaxFrame className="relative min-h-[280px] md:min-h-[380px] lg:col-span-6">
                <Image
                  src={assets.compliance_hero}
                  alt="Apparel supply-chain compliance imagery"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                  priority
                />
              </ParallaxFrame>
            </div>
          </FadeUp>
          <div className="mt-16">
            <ComplianceStrip />
          </div>
        </div>
      </section>

      <section className="editorial-band bg-white">
        <div className="container-wide">
          <FadeUp>
            <div className="grid items-start gap-14 lg:grid-cols-12">
              <div className="border border-ink/8 bg-mint-soft p-9 shadow-[var(--shadow-soft)] md:p-12 lg:col-span-5">
                <p className="chapter-label mb-5">Side product</p>
                <p className="font-display text-2xl font-medium italic leading-snug md:text-3xl">
                  Cross-border raw-material trade needs the same evidence discipline as a hang-tag —
                  transaction, logistics, identity, and auditability on one record.
                </p>
              </div>
              <div className="lg:col-span-7">
                <p className="chapter-label mb-4">Cross-border disclosures</p>
                <h2 className="font-display text-3xl font-medium md:text-4xl">
                  Trade across borders on records that hold up
                </h2>
                <p className="mt-5 text-muted">
                  Whether you are selling or purchasing raw material internationally, the
                  obligation follows the shipment. We give both sides the same evidence base.
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      title: "Transaction traceability",
                      text: "Buy and sell events recorded with counterparty, origin, and volume.",
                    },
                    {
                      title: "Logistics traceability",
                      text: "Routes, carriers, and custody handoffs across jurisdictions.",
                    },
                    {
                      title: "Identity & data",
                      text: "Verified counterparties and a governed data layer with access controls.",
                    },
                    {
                      title: "Auditability",
                      text: "Tamper-evident records so a cross-border disclosure can be re-verified later.",
                    },
                  ].map((c) => (
                    <div key={c.title} className="border-t border-ink/10 pt-5">
                      <h3 className="font-display text-xl font-medium">{c.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <ButtonLink href="/products/cross-border-commerce" variant="secondary" showArrow>
                    Cross-Border Commerce
                  </ButtonLink>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="editorial-band pastel-wash">
        <div className="container-wide">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 className="font-display text-3xl font-medium md:text-4xl">
                  Why fashion brands come to EcoStance
                </h2>
                <ul className="mt-10 space-y-6 text-muted">
                  <li>
                    <strong className="text-ink">Customer transparency</strong> — shoppers and B2B
                    buyers expect material origin and ESG proof for wool, fibres, and finished
                    garments.
                  </li>
                  <li>
                    <strong className="text-ink">Regulatory readiness</strong> — EUDR, ESPR/DPP,
                    CSRD, CSDDD, CBAM, Forced Labour, PPWR, UFLPA and related regimes keep expanding.
                  </li>
                  <li>
                    <strong className="text-ink">One data layer</strong> — custody and sustainability
                    data feed Digital Product Passports and disclosure workflows without re-keying.
                  </li>
                  <li>
                    <strong className="text-ink">Auditable, immutable, tamper-evident</strong> —
                    every disclosure is machine-generated and anchored. That is what creates trust.
                  </li>
                </ul>
              </div>
              <div className="border border-ink/8 bg-white p-9 shadow-[var(--shadow-lift)] md:p-11 lg:col-span-5">
                <p className="chapter-label mb-4">Quick start</p>
                <h3 className="font-display text-2xl font-medium md:text-3xl">
                  EUDR QuickStart Disclosures
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  Need a fast entry? Our one-week EUDR QuickStart creates disclosures compatible
                  with deforestation due-diligence expectations — then expands into the broader
                  stack listed above.
                </p>
                <div className="mt-10">
                  <ButtonLink href="/services" variant="secondary" showArrow>
                    View Quick Start Services
                  </ButtonLink>
                </div>
              </div>
            </div>
            <p className="mt-14 text-sm tracking-wide text-muted">
              Covered here: {regulations.map((r) => r.abbr).join(" · ")}.
            </p>
          </FadeUp>
        </div>
      </section>

      <FinaleCTA
        title="Map your compliance path"
        text="Book a free strategy session and we’ll identify which obligations apply to your categories — and which EcoStance pilot gets you live first."
      />
    </>
  );
}
