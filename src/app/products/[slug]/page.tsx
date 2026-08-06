import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "../../../components/ButtonLink";
import { FinaleCTA } from "../../../components/FinaleCTA";
import { FadeUp, ParallaxFrame } from "../../../components/Motion";
import { productBySlug, products, trustPillars, trustStatement } from "../../../content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <section className="relative overflow-hidden surface-chalk">
        <div className="container-wide grid items-center gap-14 py-28 md:grid-cols-12 md:py-32">
          <FadeUp className="md:col-span-6">
            <p className="chapter-label mb-5">
              {product.flagship ? "Flagship · Lookbook" : "Platform · Lookbook"}
            </p>
            <h1 className="font-display text-[clamp(3rem,6vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.03em]">
              {product.name}
            </h1>
            <p className="mt-6 font-display text-2xl italic leading-snug text-ink/65 md:text-3xl">
              {product.hero}
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">{product.blurb}</p>
            <div className="mt-12 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="secondary" showArrow>
                Request demo
              </ButtonLink>
              <ButtonLink href="/services" variant="ghost">
                See Quick Start Services
              </ButtonLink>
            </div>
          </FadeUp>
          <FadeUp delay={0.1} className="md:col-span-6">
            <div className="overlap-frame">
              <ParallaxFrame className="relative aspect-[4/5] bg-white md:aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 50vw"
                  priority
                />
              </ParallaxFrame>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="editorial-band bg-white">
        <div className="container-wide">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="chapter-label mb-4">What you get</p>
              <h2 className="font-display text-3xl font-medium md:text-4xl">In this chapter</h2>
              <ul className="mt-10 space-y-5">
                {product.bullets.map((b) => (
                  <li key={b} className="flex gap-4 text-muted">
                    <span className="mt-3 h-px w-8 shrink-0 bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            {product.secondaryImage ? (
              <div className="relative aspect-[4/3] overflow-hidden bg-mint-soft shadow-[var(--shadow-lift)] lg:col-span-7">
                <Image
                  src={product.secondaryImage}
                  alt={`${product.name} detail`}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 58vw"
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {product.slug === "offsets-and-reporting" ? (
        <section className="editorial-band pastel-wash">
          <div className="container-wide">
            <h2 className="font-display text-3xl font-medium md:text-4xl">Offset with confidence</h2>
            <div className="mt-12 grid gap-px bg-ink/8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { img: "/products/offset-step-1.png", label: "Offset with confidence" },
                { img: "/products/offset-step-2.png", label: "Auto-generate reports" },
                { img: "/products/offset-step-3.png", label: "Personalise your message" },
                { img: "/products/offset-step-4.png", label: "Share your impact" },
              ].map((step) => (
                <div key={step.label} className="bg-white p-8 text-center">
                  <div className="relative mx-auto mb-5 h-24 w-24">
                    <Image src={step.img} alt="" fill className="object-contain" />
                  </div>
                  <p className="text-sm font-medium text-ink">{step.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="editorial-band bg-white">
        <div className="container-wide">
          <p className="chapter-label mb-4">Trust layer</p>
          <h2 className="max-w-2xl font-display text-3xl font-medium md:text-4xl">
            {trustStatement}
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map((pillar) => (
              <div key={pillar.title} className="border-t border-ink/12 pt-6">
                <h3 className="font-display text-xl font-medium">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinaleCTA
        title={`Talk to us about ${product.name}`}
        text="Book a demo or start with a one-week pilot service tailored to this product."
      />
    </>
  );
}
