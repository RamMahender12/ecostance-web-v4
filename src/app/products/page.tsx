import type { Metadata } from "next";
import { ProductCard } from "../../components/ProductCard";
import { FinaleCTA } from "../../components/FinaleCTA";
import { FadeUp } from "../../components/Motion";
import { products } from "../../content/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Digital Product Passport, supply-chain traceability, cross-border commerce, carbon offsets, calculators, employee engagement, and green events for fashion brands.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="editorial-band surface-chalk pb-10 pt-28 md:pt-32">
        <div className="container-wide">
          <FadeUp>
            <p className="chapter-label mb-5">Products · Lookbook</p>
            <h1 className="max-w-3xl font-display text-[clamp(3rem,6vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.03em]">
              A product platform for transparency and trust
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Seven SaaS products that fashion and apparel brands use to prove sourcing, ESG
              compliance, cross-border trade, carbon claims, and product identity — not a consulting
              catalogue.
            </p>
          </FadeUp>
          <div className="mt-16 grid gap-px bg-ink/8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} featured={i === 0} />
            ))}
          </div>
        </div>
      </section>
      <FinaleCTA />
    </>
  );
}
