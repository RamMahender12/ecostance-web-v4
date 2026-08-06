import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ChatWidget } from "../components/ChatWidget";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ecostance.com"),
  title: {
    default: "EcoStance — AI-native product & supply-chain transparency",
    template: "%s · EcoStance",
  },
  description:
    "AI-native SaaS for fashion brands: Digital Product Passports, supply-chain traceability, cross-border commerce, carbon offsets, and compliance workflows — auditable, immutable, tamper-evident.",
  openGraph: {
    title: "EcoStance — Product & supply-chain transparency",
    description:
      "Digital Product Passports, fashion traceability, and trusted carbon disclosure — powered by AI-native workflows.",
    images: ["/products/dpp.png"],
  },
  icons: {
    icon: "/brand/mark.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-chalk font-sans text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
