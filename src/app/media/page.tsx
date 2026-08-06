import type { Metadata } from "next";
import { FinaleCTA } from "../../components/FinaleCTA";
import { MediaGrid } from "../../components/MediaGrid";
import { FadeUp } from "../../components/Motion";
import { mediaItems } from "../../content/site";

export const metadata: Metadata = {
  title: "Media",
  description:
    "EcoStance knowledge base — articles and videos on Digital Product Passports, fashion transparency, compliance, and trust.",
};

export default function MediaPage() {
  return (
    <>
      <section className="editorial-band surface-chalk pb-10 pt-28 md:pt-32">
        <div className="container-wide">
          <FadeUp>
            <p className="chapter-label mb-5">Media · Knowledge base</p>
            <h1 className="max-w-3xl font-display text-[clamp(3rem,6vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.03em]">
              Blogs, videos, and product explainers
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Short reads and films on Digital Product Passports, fashion transparency, cross-border
              disclosures, carbon trust, and how to get started with a one-week pilot.
            </p>
          </FadeUp>
          <div className="mt-16">
            <MediaGrid items={mediaItems} />
          </div>
        </div>
      </section>
      <FinaleCTA
        title="Want a walkthrough live?"
        text="Book a demo and we’ll show how these ideas land on your SKUs and suppliers."
      />
    </>
  );
}
