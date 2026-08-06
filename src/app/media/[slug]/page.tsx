import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "../../../components/ButtonLink";
import { FinaleCTA } from "../../../components/FinaleCTA";
import { Section } from "../../../components/Section";
import { mediaBySlug, mediaItems } from "../../../content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return mediaItems.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = mediaBySlug(slug);
  if (!item) return { title: "Media" };
  return { title: item.title, description: item.excerpt };
}

export default async function MediaDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = mediaBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <Section className="surface-chalk pb-10 pt-28 md:pt-32">
        <Link
          href="/media"
          className="text-sm font-semibold tracking-wide text-accent-dim transition hover:text-ink"
        >
          ← All media
        </Link>
        <p className="chapter-label mt-8">
          {item.kind} · {item.date}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.05] tracking-[-0.025em]">
          {item.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{item.excerpt}</p>

        <div className="mt-12 overflow-hidden bg-ink-2 shadow-[var(--shadow-lift)]">
          {item.videoSrc ? (
            <video
              className="aspect-video w-full object-cover"
              src={item.videoSrc}
              poster={item.image}
              controls
              playsInline
              preload="metadata"
            />
          ) : (
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          )}
        </div>

        {item.body?.length ? (
          <div className="mx-auto mt-14 max-w-2xl space-y-6 text-base leading-relaxed text-muted">
            {item.body.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>
        ) : null}

        <div className="mt-12">
          <ButtonLink href="/contact" variant="secondary" showArrow>
            Talk to EcoStance
          </ButtonLink>
        </div>
      </Section>
      <FinaleCTA />
    </>
  );
}
