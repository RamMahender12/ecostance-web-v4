import { assets } from "./assets";

export const SHOP_URL = "https://shop.ecostance.com/";
export const APP_URL = "https://dev.ecostance.com/";
export const CONTACT_EMAIL = "hello@ecostance.com";

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "AI", href: "/ai" },
  { label: "Compliance", href: "/compliance" },
  { label: "Media", href: "/media" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type HeroSlide = {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image: string;
  chips: { label: string; value: string }[];
  flagship?: boolean;
};

export const heroSlides: HeroSlide[] = [
  {
    title: "Digital Product Passports for fashion that can prove every fibre",
    subtitle:
      "Give every wool sweater, garment, and SKU a living identity — materials, farm origin, carbon, and chain of custody — one scan away for customers and regulators.",
    cta: "Explore Digital Product Passport",
    href: "/products/digital-product-passport",
    image: assets.dpp_featured,
    flagship: true,
    chips: [
      { label: "Material", value: "Merino wool · RWS" },
      { label: "Origin", value: "Farm → mill → brand" },
      { label: "ESG", value: "No child labour · Fair wage" },
      { label: "Footprint", value: "1.2 kg CO₂e / unit" },
    ],
  },
  {
    title: "Supply chain & product traceability brands can share with customers",
    subtitle:
      "Bring suppliers and distributors onto one graph. Surface ESG evidence, Scope 3 foundations, and end-to-end custody from raw fibre to finished apparel.",
    cta: "See supply chain traceability",
    href: "/products/supply-chain-traceability",
    image: assets.supply,
    chips: [
      { label: "Suppliers", value: "Multi-tier mapped" },
      { label: "Confirm", value: "Two-way partner verify" },
      { label: "Custody", value: "Raw wool → sweater" },
    ],
  },
];

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  hero: string;
  image: string;
  secondaryImage?: string;
  icon?: string;
  flagship?: boolean;
  bullets: string[];
};

export const products: Product[] = [
  {
    slug: "digital-product-passport",
    name: "Digital Product Passport",
    tagline: "Lifecycle data, QR-linked product pages, compliance-ready DPP for apparel.",
    blurb:
      "Empower customers with product-level transparency through AI-structured Digital Product Passports — materials, provenance, carbon, and care in one verified record. Built for fashion, wool, and textile brands that need proof.",
    hero: "A passport for every sweater, garment, and SKU you put into the world.",
    image: "/products/dpp.png",
    secondaryImage: "/products/dpp-secondary.png",
    icon: "/products/icon-dpp.png",
    flagship: true,
    bullets: [
      "QR-linked public product pages with lifecycle data",
      "Materials, farm origin, repair and end-of-life guidance",
      "Structured for ESPR / EU DPP requirements",
      "Chain-of-custody for raw wool and fibres surfaced in the passport",
      "Versioned records so claims stay traceable over time",
    ],
  },
  {
    slug: "supply-chain-traceability",
    name: "Supply Chain & Product Traceability",
    tagline: "Map suppliers and distributors. Confirm partners. Prove the chain.",
    blurb:
      "Invite partners, confirm relationships, and build the verified supplier graph your Scope 3 accounting and customer transparency depend on — from farm and mill to brand and retailer.",
    hero: "Know exactly who is in your apparel chain — and prove it.",
    image: "/products/supply-secondary.png",
    secondaryImage: "/from-ebcopen/hero-bg-1.webp",
    icon: "/products/icon-supply.png",
    bullets: [
      "Multi-tier supplier and distributor mapping",
      "Two-way partner confirmation, not self-declared lists",
      "Foundation data model for Scope 3 categories",
      "Exportable chain-of-custody views into Digital Product Passports",
      "ESG signals across farming, manufacturing, and logistics",
    ],
  },
  {
    slug: "cross-border-commerce",
    name: "Cross-Border Commerce",
    tagline: "Trade raw materials across borders with traceable, auditable compliance.",
    blurb:
      "For businesses selling and purchasing raw material across borders: transaction traceability, logistics traceability, verified identity, governed data, and full auditability — so cross-border disclosures hold up to scrutiny.",
    hero: "Move fibres and materials across borders with evidence, not paperwork.",
    image: "/from-ebcopen/hero-bg-3.webp",
    secondaryImage: "/from-ebcopen/product-mv4.webp",
    icon: "/products/icon-supply.png",
    bullets: [
      "Transaction traceability — every buy and sell event recorded and linkable",
      "Logistics traceability — shipment, route, and custody handoffs",
      "Verified identity for buyers, sellers, and intermediaries",
      "Governed data layer with secure observability and access controls",
      "Auditability by design — tamper-evident records for cross-border disclosures",
      "Supports customs, sanctions screening, and origin declarations",
    ],
  },
  {
    slug: "offsets-and-reporting",
    name: "Carbon Offsets & Neutral Disclosure",
    tagline: "Purchase offsets on our exchange. Become carbon neutral. Disclose with trust.",
    blurb:
      "Buy verified carbon offsets through EcoStance’s exchange, retire them with immutable certificates, and publish ESG-ready disclosure pages automatically.",
    hero: "Certified offsets with a paper trail that survives scrutiny.",
    image: "/products/offsets.png",
    icon: "/products/icon-offsets.png",
    bullets: [
      "Full-capability carbon exchange for verified projects",
      "Machine-generated certificates backed by an immutable ledger",
      "Automatic retirement records with serial-level evidence",
      "Disclosure pages formatted for CSRD, GHG Protocol, and investor packs",
      "Shareable EcoStance page for every purchase",
    ],
  },
  {
    slug: "emission-calculators",
    name: "Emission Calculators",
    tagline: "Individuals, businesses, events — footprints in minutes, not months.",
    blurb:
      "AI-accelerated calculators that estimate carbon footprints for people, enterprises, and events in minutes — then route straight into offsetting and disclosure.",
    hero: "Rapid carbon footprint. No months of data collection.",
    image: "/products/calculators.png",
    icon: "/products/icon-supply.png",
    bullets: [
      "Household, business, and event methodologies",
      "Minutes instead of months of manual data collection",
      "Plain-language assumptions and emission factors",
      "One path from result to matched offset portfolio",
      "Embeddable for campaigns and registration flows",
    ],
  },
  {
    slug: "employee-engagement",
    name: "Employee Engagement",
    tagline: "Teams measure footprints and join your sustainability initiatives.",
    blurb:
      "Let employees calculate their emission footprint and participate in company sustainability programmes — ESG performance from the inside out.",
    hero: "Climate strategy your people actually take part in.",
    image: "/products/engagement.png",
    icon: "/products/icon-engagement.png",
    bullets: [
      "Business Code onboarding — no seat-management overhead",
      "Per-employee footprint with privacy-respecting rollups",
      "Team dashboards and participation milestones",
      "Company-matched offsetting programmes",
      "Internal engagement assets included",
    ],
  },
  {
    slug: "green-events",
    name: "Green Events",
    tagline: "Make conferences and events carbon-aware with attendee offsetting.",
    blurb:
      "Enable participants to calculate and purchase carbon offsets so events, conferences, and gatherings leave a verified impact record.",
    hero: "Events that leave a record, not just a footprint.",
    image: "/products/events.png",
    icon: "/products/icon-events.png",
    bullets: [
      "Per-event codes and branded attendee flows",
      "Travel, accommodation, and venue estimation",
      "Attendee offset purchase to reduce event footprint",
      "Live organiser dashboard of offset coverage",
      "Post-event impact certificate and public page",
    ],
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);

export type Advantage = {
  title: string;
  text: string;
};

export const aiAdvantages: Advantage[] = [
  {
    title: "AI-native, trained LLM",
    text: "Purpose-built models and pre-built end-to-end workflows deliver product and supply-chain transparency at speed and lower cost than manual programmes. Ask our on-site AI assistant anytime.",
  },
  {
    title: "Rapid carbon footprint",
    text: "Calculate enterprise or product emissions in minutes — not months or years of spreadsheet collection.",
  },
  {
    title: "Automated disclosure reporting",
    text: "Pre-built workflows produce disclosure-ready reports with nothing manual in the critical path — resulting in trust.",
  },
  {
    title: "Immutable, machine-generated certificates",
    text: "Every transaction is backed by untampered certificates, further authenticated on an immutable ledger — critical to creating trust.",
  },
  {
    title: "Secure data layer",
    text: "Observability and data controls drive end-to-end supply-chain transactions. Brands surface the same data in Digital Product Passports and sustainability use cases.",
  },
];

export type Regulation = {
  abbr: string;
  name: string;
  summary: string;
};

export const regulations: Regulation[] = [
  {
    abbr: "EUDR",
    name: "EU Deforestation Regulation",
    summary:
      "Due diligence and geolocation evidence for cattle, cocoa, coffee, palm oil, rubber, soy, wood, and derived products.",
  },
  {
    abbr: "ESPR / DPP",
    name: "Ecodesign & Digital Product Passport",
    summary:
      "Product-level passports for materials, footprint, and circularity under the Ecodesign for Sustainable Products Regulation — critical for textiles and apparel.",
  },
  {
    abbr: "CSRD",
    name: "Corporate Sustainability Reporting Directive",
    summary:
      "Structured value-chain sustainability disclosures for in-scope companies under ESRS standards.",
  },
  {
    abbr: "CSDDD",
    name: "Corporate Sustainability Due Diligence Directive",
    summary:
      "Mandatory human-rights and environmental due diligence across supply chains for large undertakings.",
  },
  {
    abbr: "CBAM",
    name: "Carbon Border Adjustment Mechanism",
    summary:
      "Embedded-emissions reporting and certificates for carbon-intensive imports into the EU.",
  },
  {
    abbr: "Forced Labour",
    name: "EU Forced Labour Regulation",
    summary:
      "Horizontal ban on products made with forced labour — requires supply-chain visibility and evidence.",
  },
  {
    abbr: "PPWR",
    name: "Packaging & Packaging Waste Regulation",
    summary:
      "Packaging recyclability, recycled content, and labelling obligations tied to product data.",
  },
  {
    abbr: "UFLPA",
    name: "US Uyghur Forced Labor Prevention Act",
    summary:
      "Cross-border import controls requiring traceable evidence that goods are free of forced labour in the supply chain.",
  },
  {
    abbr: "Customs & Origin",
    name: "Cross-border trade declarations",
    summary:
      "Origin declarations, sanctions and denied-party screening, and shipment-level disclosures for goods moving between jurisdictions.",
  },
];

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "dpp-pilot-launch",
    name: "DPP Pilot Launch",
    tagline: "Digital Product Passports for a small SKU set",
    description:
      "Deploy Digital Product Passports as a pilot for a limited number of apparel products — prove the workflow, QR experience, and compliance shape before you scale.",
    duration: "~1 week",
    image: "/heroes/hero-2.webp",
  },
  {
    slug: "carbon-neutral-kickstart",
    name: "Carbon Neutral Kickstart",
    tagline: "Footprint → offsets → public disclosure",
    description:
      "We calculate your enterprise or product emission footprint, use carbon offsets to make you carbon neutral, and give you a disclosure page stakeholders can trust.",
    duration: "~1 week",
    image: "/industries/energy.jpg",
  },
  {
    slug: "eudr-quickstart",
    name: "EUDR QuickStart Disclosures",
    tagline: "Due-diligence-ready disclosures, fast",
    description:
      "Create disclosures compatible with EUDR requirements — a fast entry point into the broader compliance stack (ESPR/DPP, CSRD, CSDDD, and more).",
    duration: "~1 week",
    image: "/industries/agriculture.jpg",
  },
  {
    slug: "supply-chain-proof-pack",
    name: "Supply Chain Proof Pack",
    tagline: "Few suppliers. Full transparency demo.",
    description:
      "Build your supply chain with a small set of suppliers so you can see how data and transparency work end-to-end — from partner confirm to custody views on the passport.",
    duration: "~1 week",
    image: "/industries/logistics.jpg",
  },
  {
    slug: "engagement-starter",
    name: "Engagement Starter",
    tagline: "Partners, suppliers, and employees — activated",
    description:
      "Engage partners and suppliers alongside your employees so sustainability and traceability programmes land with people, not just dashboards.",
    duration: "~1 week",
    image: "/industries/recycling.jpg",
  },
];

export const freeOffer = {
  name: "Free Strategy Session",
  tagline: "Up to 3 hours. Get off the ground.",
  description:
    "A complimentary strategic meeting — up to three hours — to map your product, supply-chain, and compliance priorities and leave with a clear first step.",
};

export type TrustPillar = {
  title: string;
  text: string;
};

export const trustPillars: TrustPillar[] = [
  {
    title: "Auditable",
    text: "Every record carries its own evidence trail — who submitted it, when, and from which source — so an auditor can reconstruct any claim end to end without chasing spreadsheets.",
  },
  {
    title: "Immutable",
    text: "Once written, records are never quietly rewritten. Certificates and transactions are anchored to an immutable ledger, so history stays history.",
  },
  {
    title: "Tamper-evident",
    text: "Any attempt to alter a certificate, disclosure, or custody event is detectable. If something changed, you can see it — and so can your regulator and your customer.",
  },
  {
    title: "Machine-generated",
    text: "Certificates are produced by workflows, not by hand. Nothing manual in the critical path means nothing to quietly adjust before it is published.",
  },
];

export const trustStatement =
  "Auditable, immutable, and tamper-evident by design — that is what creates trust.";

export const custodySteps = [
  { title: "Raw material", text: "Farm, fibre, or feedstock with origin and ESG evidence." },
  { title: "Processing", text: "Mills and manufacturers confirm custody and process data." },
  { title: "Brand assembly", text: "SKU-level rollup of materials, footprint, and partners." },
  { title: "Digital Product Passport", text: "Customer- and regulator-ready product identity." },
];

export type MediaKind = "article" | "video";

export type MediaItem = {
  slug: string;
  kind: MediaKind;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  videoSrc?: string;
  body?: string[];
};

export const mediaItems: MediaItem[] = [
  {
    slug: "what-is-a-digital-product-passport",
    kind: "article",
    title: "What is a Digital Product Passport?",
    excerpt:
      "How a DPP turns materials, origin, carbon, and custody into a QR-linked record customers and regulators can trust — especially for fashion and wool.",
    date: "2026-03-12",
    image: assets.media_1,
    body: [
      "A Digital Product Passport is a living product identity — materials, provenance, carbon, and care — linked to a physical SKU by QR or NFC.",
      "EcoStance structures that data so it serves ESPR / EU DPP expectations and customer transparency from the same record.",
      "Chain-of-custody for raw wool and fibres surfaces in the passport, so a claim can be re-verified years later.",
    ],
  },
  {
    slug: "product-supply-chain-film",
    kind: "video",
    title: "Product & supply-chain transparency — film",
    excerpt:
      "A short look across textiles, apparel, agriculture, logistics, and product identity — the industries EcoStance was built for.",
    date: "2026-04-02",
    image: "/video/hero-fashion-poster.jpg",
    videoSrc: "/video/hero-fashion-live.mp4",
  },
  {
    slug: "cross-border-disclosures-explained",
    kind: "article",
    title: "Cross-border disclosures, explained",
    excerpt:
      "Transaction and logistics traceability, verified identity, and tamper-evident records for raw-material trade.",
    date: "2026-04-18",
    image: "/industries/cpg.jpg",
    body: [
      "Cross-border raw-material trade brings origin declarations, forced-labour screening, sanctions checks, and shipment-level disclosures.",
      "EcoStance records buy/sell events, logistics handoffs, and counterparty identity so both sides of the transaction share the same evidence base.",
      "Auditability is built in: records are tamper-evident, so a disclosure can be re-verified later.",
    ],
  },
  {
    slug: "fashion-transparency-customers",
    kind: "article",
    title: "Why fashion customers demand material transparency",
    excerpt:
      "Shoppers and wholesale buyers want proof of sourcing, ESG compliance, and custody — not marketing claims.",
    date: "2026-04-28",
    image: assets.media_2,
    body: [
      "Clothing and wool brands win trust when they can show farm origin, fair wages, and environmental stewardship in farming and manufacturing.",
      "A Digital Product Passport turns that evidence into something a customer can scan — and a regulator can audit.",
      "EcoStance connects supply-chain data to the passport so transparency is operational, not a one-off campaign.",
    ],
  },
  {
    slug: "trust-layer-walkthrough",
    kind: "video",
    title: "Auditable. Immutable. Tamper-evident.",
    excerpt:
      "Why machine-generated certificates on an immutable ledger are what creates trust — not marketing claims.",
    date: "2026-05-01",
    image: "/from-ebcopen/hero-bg-4.webp",
    videoSrc: "/video/hero-fashion-live.mp4",
  },
  {
    slug: "eudr-and-beyond",
    kind: "article",
    title: "The Full Evidence Stack for EUDR and Beyond",
    excerpt:
      "How one data layer serves EUDR, ESPR/DPP, CSRD, CSDDD, CBAM, Forced Labour, PPWR, and UFLPA.",
    date: "2026-05-20",
    image: "/industries/electronics.jpg",
    body: [
      "Brands selling into Europe and beyond face overlapping product and supply-chain rules — collecting evidence once is the only scalable path.",
      "EcoStance helps you gather custody and sustainability data, then reuse it for disclosure, passports, and due diligence.",
      "Start with a one-week EUDR QuickStart if you need a fast entry, then expand into the broader stack.",
    ],
  },
  {
    slug: "pilot-week-in-review",
    kind: "video",
    title: "One-week pilots — what you leave with",
    excerpt:
      "DPP Pilot Launch, Carbon Neutral Kickstart, Supply Chain Proof Pack, and more — Quick Start Services.",
    date: "2026-06-08",
    image: assets.media_3,
    videoSrc: "/video/hero-fashion-live.mp4",
  },
];

export const mediaBySlug = (slug: string) => mediaItems.find((m) => m.slug === slug);

export type ChatFaq = { keys: string[]; answer: string };

export const chatFaqs: ChatFaq[] = [
  {
    keys: ["dpp", "passport", "digital product", "qr", "wool", "sweater", "fashion", "apparel"],
    answer:
      "Digital Product Passport is our flagship product. Every SKU — including wool sweaters and apparel — gets a QR-linked identity: materials, origin, carbon, and chain of custody, ready for customers and ESPR/EU DPP. Explore /products/digital-product-passport or book a DPP Pilot Launch.",
  },
  {
    keys: ["supply", "traceability", "supplier", "custody"],
    answer:
      "Supply Chain & Product Traceability maps suppliers and distributors with two-way partner confirmation, then surfaces custody into the Digital Product Passport. See /products/supply-chain-traceability.",
  },
  {
    keys: ["cross-border", "cross border", "customs", "origin", "raw material"],
    answer:
      "Cross-Border Commerce covers transaction and logistics traceability, verified identity, governed data, and tamper-evident records for cross-border disclosures. See /products/cross-border-commerce.",
  },
  {
    keys: ["carbon", "offset", "neutral", "footprint", "emission"],
    answer:
      "We calculate footprints in minutes, sell verified offsets on our exchange, and publish disclosure pages with immutable certificates. Products: Emission Calculators and Offsets & Reporting. Or try Carbon Neutral Kickstart (~1 week).",
  },
  {
    keys: ["eudr", "compliance", "csrd", "cbam", "espr", "regulation", "uflpa"],
    answer:
      "We cover EUDR, ESPR/DPP, CSRD, CSDDD, CBAM, Forced Labour, PPWR, UFLPA, and customs/origin. Collect evidence once, prove many times. See /compliance or EUDR QuickStart on /services.",
  },
  {
    keys: ["trust", "auditable", "immutable", "tamper", "ledger", "certificate"],
    answer:
      "Auditable, immutable, and tamper-evident by design — that is what creates trust. Certificates are machine-generated and anchored to an immutable ledger so history cannot be quietly rewritten.",
  },
  {
    keys: ["pilot", "service", "week", "kickstart", "strategy", "free"],
    answer:
      "Five ~1-week pilots: DPP Pilot Launch, Carbon Neutral Kickstart, EUDR QuickStart, Supply Chain Proof Pack, Engagement Starter — plus a free strategy session (up to 3 hours). See /services or /contact. We are a product company; pilots are how you get started fast.",
  },
  {
    keys: ["ai", "llm", "workflow", "chatbot", "assistant", "conversational"],
    answer:
      "EcoStance is an AI-native product platform: trained LLMs and pre-built workflows deliver passports, footprints, and disclosures faster and at lower cost. This on-site assistant answers from our public product knowledge — for a tailored plan, request a demo via /contact.",
  },
  {
    keys: ["price", "pricing", "cost", "demo", "contact", "saas", "product"],
    answer:
      "EcoStance is a product (SaaS) platform — not a consulting firm. Pricing depends on products and scale. The fastest next step is a demo or free strategy session — go to /contact.",
  },
  {
    keys: ["media", "blog", "video", "knowledge"],
    answer:
      "Our Media hub has articles and videos on DPPs, fashion transparency, cross-border disclosures, trust, and pilots. Browse /media.",
  },
];

/** Keyword FAQ matcher. Returns best answer or a handoff message. */
export function answerFromFaq(question: string): string {
  const q = question.toLowerCase().trim();
  if (!q) {
    return "Ask about Digital Product Passports, fashion traceability, compliance, carbon, or pilots — or visit /contact.";
  }
  let best: { score: number; answer: string } | null = null;
  for (const faq of chatFaqs) {
    let score = 0;
    for (const key of faq.keys) {
      if (q.includes(key)) score += key.length;
    }
    if (score > 0 && (!best || score > best.score)) best = { score, answer: faq.answer };
  }
  if (!best) {
    return "I don’t have a specific answer for that yet. Try asking about DPP, supply chain, cross-border, carbon, compliance, or pilots — or request a demo at /contact.";
  }
  return best.answer;
}
