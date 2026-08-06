import Image from "next/image";
import Link from "next/link";
import { nav, products, APP_URL, SHOP_URL, trustStatement } from "../content/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink-2 text-white">
      <div className="container-wide grid gap-14 py-20 md:grid-cols-4 md:gap-12">
        <div className="md:col-span-1">
          <div className="relative mb-6 h-8 w-[150px]">
            <Image
              src="/brand/logo-white.png"
              alt="EcoStance"
              fill
              sizes="150px"
              className="object-contain object-left"
            />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            AI-native product platform for fashion transparency — Digital Product Passports,
            supply-chain traceability, and trusted carbon disclosure.
          </p>
          <p className="mt-6 max-w-xs font-display text-xl italic leading-snug text-mint">
            {trustStatement}
          </p>
        </div>

        <div>
          <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/40">
            Navigate
          </p>
          <ul className="space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/70 transition duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/40">
            Products
          </p>
          <ul className="space-y-3 text-sm">
            {products.slice(0, 4).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="text-white/70 transition duration-300 hover:text-white"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/40">
            Platform
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition duration-300 hover:text-white"
              >
                Open EcoStance app
              </a>
            </li>
            <li>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition duration-300 hover:text-white"
              >
                Carbon offset shop
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white/70 transition duration-300 hover:text-white"
              >
                Request a demo
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container-wide flex flex-col gap-2 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} EcoStance. All rights reserved.</p>
          <p className="tracking-wide">Product platform · Auditable · Immutable · Tamper-evident</p>
        </div>
      </div>
    </footer>
  );
}
