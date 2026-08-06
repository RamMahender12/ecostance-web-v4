import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "../../components/ContactForm";
import { FadeUp } from "../../components/Motion";
import { assets } from "../../content/assets";
import { APP_URL, CONTACT_EMAIL, SHOP_URL } from "../../content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a demo, book a free strategy session, or start a one-week EcoStance pilot for fashion and apparel brands.",
};

export default function ContactPage() {
  return (
    <section className="editorial-band surface-chalk pt-28 md:pt-32">
      <div className="container-wide">
        <FadeUp>
          <div className="mb-14 overflow-hidden shadow-[var(--shadow-lift)]">
            <div className="relative h-48 w-full md:h-64">
              <Image
                src={assets.contact}
                alt="Start your EcoStance journey"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-chalk/95 via-mint-soft/55 to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <p className="chapter-label mb-3">Get started</p>
                <p className="font-display text-2xl font-medium text-ink md:text-4xl">
                  Demo · Free strategy session · One-week pilots
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
        <div className="grid gap-14 lg:grid-cols-12">
          <FadeUp className="lg:col-span-5">
            <p className="chapter-label mb-5">Contact</p>
            <h1 className="font-display text-[clamp(2.5rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.025em]">
              Request a demo or book your free strategy session
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Tell us about your apparel products, suppliers, and compliance priorities. We’ll
              recommend the right pilot — DPP, supply chain, carbon neutral, or engagement.
            </p>
            <ul className="mt-10 space-y-4 text-sm text-muted">
              <li>
                Email:{" "}
                <a
                  className="font-medium text-ink underline-offset-2 hover:underline"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                Platform:{" "}
                <a
                  className="font-medium text-ink underline-offset-2 hover:underline"
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dev.ecostance.com
                </a>
              </li>
              <li>
                Offset shop:{" "}
                <a
                  className="font-medium text-ink underline-offset-2 hover:underline"
                  href={SHOP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  shop.ecostance.com
                </a>
              </li>
            </ul>
          </FadeUp>
          <FadeUp delay={0.1} className="lg:col-span-7">
            <ContactForm />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
