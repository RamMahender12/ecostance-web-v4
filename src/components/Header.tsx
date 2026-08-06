"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight, ShieldCheck, FileCheck2, Globe2, Leaf, Calculator, Users, Calendar } from "lucide-react";
import { SHOP_URL } from "../content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  const productLinks = [
    { name: "Digital Product Passport", desc: "Flagship passport for clothing & wool", href: "/products/digital-product-passport", icon: ShieldCheck, badge: "Flagship" },
    { name: "Supply Chain Traceability", desc: "Multi-tier supplier mapping & custody", href: "/products/supply-chain-traceability", icon: Leaf },
    { name: "Cross-Border Commerce", desc: "Transaction & logistics disclosures", href: "/products/cross-border-commerce", icon: Globe2 },
    { name: "Offsets & Reporting", desc: "Carbon exchange & immutable certificates", href: "/products/offsets-and-reporting", icon: FileCheck2 },
    { name: "Emission Calculators", desc: "Rapid footprint calculations", href: "/products/emission-calculators", icon: Calculator },
    { name: "Employee Engagement", desc: "Individual footprint & sustainability", href: "/products/employee-engagement", icon: Users },
    { name: "Green Events", desc: "Offset emissions for conferences", href: "/products/green-events", icon: Calendar },
  ];

  const serviceLinks = [
    { name: "DPP Pilot", desc: "Deploy passports for small SKU count (1 week)", href: "/services" },
    { name: "Carbon Footprint & Offsets", desc: "Footprint calculation + disclosure page", href: "/services" },
    { name: "Quick Start EUDR Compliance", desc: "EUDR compatible disclosures (1 week)", href: "/services" },
    { name: "Supply Chain Onboarding", desc: "Connect initial suppliers & graph", href: "/services" },
    { name: "Partner & Employee Engagement", desc: "Engage partners and staff", href: "/services" },
    { name: "Free Strategy Session", desc: "Up to 3 hours free consultation", href: "/services", badge: "Free" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white/95 backdrop-blur-md transition-all duration-300">
      <div className="container-wide flex h-18 items-center justify-between gap-6 px-4 md:px-8">
        {/* Brand Logo - Lezada Style */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="EcoStance home">
          <div className="relative h-8 w-[140px]">
            <Image
              src="/brand/logo.png"
              alt="EcoStance"
              fill
              sizes="140px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Lezada-style Navigation Bar */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {/* Products Dropdown */}
          <div className="relative group py-5">
            <Link
              href="/products"
              className="flex items-center gap-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-gray-700 transition duration-200 hover:text-emerald-800"
            >
              Products
              <ChevronDown className="size-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
            </Link>

            {/* Mega Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[640px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out pt-2">
              <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-2xl ring-1 ring-black/5 grid grid-cols-2 gap-3">
                {productLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50/60 transition group/item"
                  >
                    <div className="p-2 rounded-lg bg-emerald-100/70 text-emerald-800 group-hover/item:bg-emerald-800 group-hover/item:text-white transition duration-200 shrink-0">
                      <item.icon className="size-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-900 group-hover/item:text-emerald-800 transition">
                          {item.name}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-700 text-white px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative group py-5">
            <Link
              href="/services"
              className="flex items-center gap-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-gray-700 transition duration-200 hover:text-emerald-800"
            >
              Services
              <ChevronDown className="size-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
            </Link>

            <div className="absolute top-full left-0 w-[420px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out pt-2">
              <div className="rounded-2xl border border-gray-200/80 bg-white p-5 shadow-2xl ring-1 ring-black/5 space-y-2">
                <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                  Quick Start 1-Week Pilots
                </div>
                {serviceLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-emerald-50/70 transition group/item"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-gray-900 group-hover/item:text-emerald-800">
                          {item.name}
                        </span>
                        {item.badge && (
                          <span className="text-[9px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-1.5 py-0.5 rounded">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-gray-500">{item.desc}</p>
                    </div>
                    <ArrowRight className="size-3.5 text-gray-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/compliance"
            className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-gray-700 transition duration-200 hover:text-emerald-800"
          >
            Compliance
          </Link>
          <Link
            href="/media"
            className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-gray-700 transition duration-200 hover:text-emerald-800"
          >
            Media
          </Link>
          <Link
            href="/about"
            className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-gray-700 transition duration-200 hover:text-emerald-800"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-gray-700 transition duration-200 hover:text-emerald-800"
          >
            Contact
          </Link>
        </nav>

        {/* Lezada Right Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-gray-600 transition hover:text-emerald-800 hover:underline underline-offset-4"
          >
            Shop Offsets
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-5 py-2.5 text-[0.75rem] font-semibold uppercase tracking-wider text-white shadow-md transition duration-300 hover:bg-emerald-900 hover:shadow-lg"
          >
            Request Demo
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-800 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-gray-200 bg-white px-6 py-6 lg:hidden max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            <div className="font-semibold text-xs uppercase tracking-wider text-emerald-800">Navigation</div>
            <Link href="/" className="text-sm font-medium text-gray-900" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/products" className="text-sm font-medium text-gray-900" onClick={() => setOpen(false)}>Products</Link>
            <Link href="/services" className="text-sm font-medium text-gray-900" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/compliance" className="text-sm font-medium text-gray-900" onClick={() => setOpen(false)}>Compliance</Link>
            <Link href="/media" className="text-sm font-medium text-gray-900" onClick={() => setOpen(false)}>Media & Knowledge Base</Link>
            <Link href="/about" className="text-sm font-medium text-gray-900" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" className="text-sm font-medium text-gray-900" onClick={() => setOpen(false)}>Contact</Link>
            
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-emerald-800">
                Shop Offsets →
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-emerald-800 py-3 text-xs font-bold uppercase tracking-wider text-white" onClick={() => setOpen(false)}>
                Request Demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
