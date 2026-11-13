import type { Metadata } from "next";
import {
  BadgeCheck,
  BarChart3,
  Calculator,
  CalendarDays,
  Globe2,
  Network,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { ButtonLink } from "../../components/ButtonLink";
import { FinaleCTA } from "../../components/FinaleCTA";
import { FadeUp } from "../../components/Motion";
import { APP_URL } from "../../content/site";

export const metadata: Metadata = {
  title: "EcoStance AI",
  description:
    "Run the EcoStance platform with AI — carbon footprints, event emissions, Digital Product Passports, supply-chain mapping, dashboards, and sustainability pages from a single prompt.",
};

// Each capability maps to a real module in the EcoStance app (dev.ecostance.com).
const capabilities = [
  {
    icon: Calculator,
    title: "Carbon footprint calculation",
    module: "Carbon Footprint · Work Carbon Footprint",
    prompt: "Calculate my household's annual footprint — 3 people, 2 flights a year, mostly vegetarian.",
    does: [
      "Fills the individual and work calculators from plain language",
      "Returns annual tCO2e per person and per household",
      "Suggests offsets and reduction actions to close the gap",
    ],
  },
  {
    icon: CalendarDays,
    title: "Event & conference emissions",
    module: "Business Event · Conference Calculator",
    prompt: "Set up our Paris fashion runway, 400 attendees, 3 days, and estimate its footprint.",
    does: [
      "Creates the event with venue, dates, and attendee groups",
      "Splits emissions into travel, lodging, food, waste, venue, and marketing",
      "Shares the event code / QR so attendees log travel, then tracks offsets",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Digital Product Passport pages",
    module: "Product Info · DPP",
    prompt: "Create a passport for our merino crew-neck — RWS certified, 4.2 kg CO2, farm to mill to brand.",
    does: [
      "Drafts product name, description, and highlights",
      "Structures CO2, energy, water, certifications, and chain of custody",
      "Picks a template and publishes the DPP page with its QR code",
    ],
  },
  {
    icon: Network,
    title: "Supply chain mapping",
    module: "Supply Chain",
    prompt: "Invite our spinner in Biella as a supplier and our EU wholesaler as a distributor.",
    does: [
      "Sends supplier and distributor invites with the right relationship",
      "Follows up on pending requests",
      "Explains the carbon footprint at each node of the supply-chain tree",
    ],
  },
  {
    icon: BarChart3,
    title: "Business dashboard & forecasting",
    module: "Business Dashboard",
    prompt: "What happens to our 5-year trajectory if we cut Scope 3 by 20%?",
    does: [
      "Reads emitted vs reduced, baseline vs actual, and offset purchases",
      "Models Scope 1, 2, and 3 reduction scenarios",
      "Summarises five-year projections in plain English",
    ],
  },
  {
    icon: Users,
    title: "Employee engagement",
    module: "Our Business Employees · Employer Account",
    prompt: "Invite the design team and show me who has completed their footprint.",
    does: [
      "Generates join codes and invite links for staff",
      "Manages roles — owners, admins, super admins",
      "Reports participation and tons per employee",
    ],
  },
  {
    icon: Globe2,
    title: "EcoStance sustainability page",
    module: "Business EcoStance Page",
    prompt: "Build our public sustainability page in the Elegant template using our About copy.",
    does: [
      "Writes the heading, description, and about-us copy",
      "Applies logo, contacts, socials, and a template",
      "Publishes the page with a shareable QR and referral link",
    ],
  },
  {
    icon: Plane,
    title: "Travel footprint",
    module: "Travel Calculator",
    prompt: "Our team takes 12 work flights and 40 train trips a year — what's the impact?",
    does: [
      "Estimates trip and work-travel emissions by mode",
      "Compares air, car, and rail alternatives",
      "Recommends offsets sized to the result",
    ],
  },
  {
    icon: BadgeCheck,
    title: "Offsets & certificate verification",
    module: "Shop · Certificates · Track",
    prompt: "Offset the remaining 18 tons from our runway event and send me the certificate.",
    does: [
      "Finds certified offset projects that match the remaining footprint",
      "Walks you through checkout",
      "Issues and verifies certificates by tracking number",
    ],
  },
];

const steps = [
  { title: "Ask", text: "Describe what you need in plain language — a product, an event, a supplier, a question." },
  { title: "AI does the work", text: "EcoStance AI fills the forms, runs the calculations, and drafts the pages inside the platform." },
  { title: "Review & publish", text: "You check the numbers, approve, and publish — with the evidence trail kept on record." },
];

export default function AiPage() {
  return (
    <>
      <section className="editorial-band surface-chalk pb-16 pt-28 md:pt-32">
        <div className="container-wide">
          <FadeUp>
            <p className="chapter-label mb-5 inline-flex items-center gap-2">
              <Sparkles className="size-4" /> EcoStance AI
            </p>
            <h1 className="max-w-4xl font-display text-[clamp(3rem,6vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.03em]">
              Everything on EcoStance, done with AI
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Carbon footprints, event emissions, Digital Product Passports, supplier mapping,
              dashboards, and sustainability pages — ask in plain language and EcoStance AI does
              the work across the platform.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="secondary" showArrow>
                Request AI demo
              </ButtonLink>
              <ButtonLink href={APP_URL} variant="ghost" external>
                Open the platform
              </ButtonLink>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="editorial-band bg-white">
        <div className="container-wide">
          <FadeUp>
            <p className="chapter-label mb-4">What AI can do</p>
            <h2 className="mb-12 max-w-3xl font-display text-[clamp(2rem,4vw,3.25rem)] font-medium tracking-[-0.025em]">
              One prompt for every module
            </h2>
          </FadeUp>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <FadeUp key={c.title} delay={(i % 3) * 0.05}>
                <article className="flex h-full flex-col border border-ink/8 bg-white p-7 shadow-[var(--shadow-soft)]">
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-mint-soft p-2 text-ink">
                      <c.icon className="size-5" />
                    </span>
                    <h3 className="font-display text-xl font-medium">{c.title}</h3>
                  </div>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-ink/45">
                    {c.module}
                  </p>
                  <p className="mt-5 rounded-xl bg-mint-soft/70 px-4 py-3 text-sm italic text-ink/80">
                    “{c.prompt}”
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-muted">
                    {c.does.map((d) => (
                      <li key={d} className="flex gap-2">
                        <Sparkles className="mt-0.5 size-3.5 shrink-0 text-ink/40" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-band pastel-wash">
        <div className="container-wide">
          <FadeUp>
            <p className="chapter-label mb-4">How it works</p>
            <div className="mt-6 grid gap-10 md:grid-cols-3">
              {steps.map((s, i) => (
                <div key={s.title}>
                  <span className="chapter-label text-ink/35">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-display text-2xl font-medium">{s.title}</h3>
                  <p className="mt-3 text-muted">{s.text}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <FinaleCTA
        title="Let AI run your sustainability workflow"
        text="See EcoStance AI calculate a footprint, set up an event, and publish a Digital Product Passport in one session."
      />
    </>
  );
}
