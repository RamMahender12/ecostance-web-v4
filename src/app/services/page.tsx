import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "../../components/ButtonLink";
import { FinaleCTA } from "../../components/FinaleCTA";
import { FadeUp, ParallaxFrame } from "../../components/Motion";
import { assets } from "../../content/assets";
import { freeOffer, services } from "../../content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "One-week pilot services: DPP Pilot Launch, Carbon Neutral Kickstart, EUDR QuickStart, Supply Chain Proof Pack, Engagement Starter — plus a free strategy session.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="editorial-band surface-chalk pb-12 pt-28 md:pt-32">
        <div className="container-wide">
          <FadeUp>
            <div className="grid items-end gap-14 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-6">
                <p className="chapter-label mb-5">Quick Start Services</p>
                <h1 className="font-display text-[clamp(3rem,6vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.03em]">
                  Five one-week pilots. One product platform.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                  We are a product company. These short engagements help fashion and apparel brands
                  experience EcoStance end-to-end — typically about one week — before you scale on
                  the platform.
                </p>
              </div>
              <ParallaxFrame className="relative min-h-[280px] md:min-h-[380px] lg:col-span-6">
                <Image
                  src={assets.services_hero}
                  alt="Textile and apparel lookbook — Quick Start Services"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                  priority
                />
              </ParallaxFrame>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-white pb-8">
        <div className="container-wide">
          {services.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <FadeUp key={s.slug} delay={i * 0.04}>
                <article
                  className={`grid items-stretch gap-0 border-t border-ink/8 md:grid-cols-2 ${
                    reverse ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative min-h-[260px] overflow-hidden md:min-h-[360px]">
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      className="object-cover transition duration-1000 hover:scale-[1.03]"
                      sizes="(max-width:768px) 100vw, 50vw"
                    />
                  </div>
                  <div
                    className={`flex flex-col justify-center px-7 py-12 md:px-14 md:py-16 ${
                      reverse ? "pastel-wash" : "bg-white"
                    }`}
                  >
                    <div className="mb-6 flex items-center gap-5">
                      <span className="chapter-label text-ink/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="chapter-label">{s.duration}</span>
                    </div>
                    <h2 className="font-display text-3xl font-medium md:text-4xl">{s.name}</h2>
                    <p className="mt-3 text-sm font-medium text-ink/75">{s.tagline}</p>
                    <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
                      {s.description}
                    </p>
                    <div className="mt-10">
                      <ButtonLink href="/contact" variant="ghost" showArrow>
                        Start this pilot
                      </ButtonLink>
                    </div>
                  </div>
                </article>
              </FadeUp>
            );
          })}
        </div>
      </section>

      <section className="editorial-band pastel-wash">
        <div className="container-wide">
          <FadeUp>
            <div className="grid items-center gap-0 overflow-hidden bg-white shadow-[var(--shadow-lift)] md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[260px] md:min-h-[400px]">
                <Image
                  src="/from-ebcopen/hero-bg-2.webp"
                  alt="Strategy session for fashion brands"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 40vw"
                />
              </div>
              <div className="p-9 md:p-14 lg:p-16">
                <p className="chapter-label mb-4">Complimentary</p>
                <h2 className="font-display text-3xl font-medium md:text-4xl">{freeOffer.name}</h2>
                <p className="mt-3 font-display text-xl italic text-ink/70">{freeOffer.tagline}</p>
                <p className="mt-5 text-muted">{freeOffer.description}</p>
                <div className="mt-10">
                  <ButtonLink href="/contact" variant="secondary" showArrow>
                    Book free strategy session
                  </ButtonLink>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <FinaleCTA />
    </>
  );
}
