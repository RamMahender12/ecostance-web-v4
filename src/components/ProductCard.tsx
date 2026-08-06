import Image from "next/image";
import Link from "next/link";
import type { Product } from "../content/site";

export function ProductCard({
  product,
  featured,
}: {
  product: Product;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group relative flex flex-col overflow-hidden bg-white transition duration-500 hover:bg-mint-soft/50 ${
        featured ? "md:col-span-2 md:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-mint-soft ${
          featured ? "aspect-[16/10] md:w-[55%] md:aspect-auto md:min-h-[320px]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          sizes={featured ? "(max-width:768px) 100vw, 55vw" : "(max-width:768px) 100vw, 33vw"}
        />
        {product.flagship ? (
          <span className="absolute left-4 top-4 bg-ink/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur-sm">
            Flagship
          </span>
        ) : null}
      </div>
      <div
        className={`flex flex-1 flex-col justify-center p-6 ${featured ? "md:p-10" : "p-6"}`}
      >
        <p className="chapter-label mb-3 text-ink/35">Lookbook</p>
        <h3
          className={`font-display font-medium text-ink ${featured ? "text-3xl md:text-4xl" : "text-2xl"}`}
        >
          {product.name}
        </h3>
        <p className={`mt-3 text-muted ${featured ? "text-base" : "text-sm"}`}>{product.tagline}</p>
        {featured ? (
          <p className="mt-4 hidden text-sm leading-relaxed text-muted md:block">{product.blurb}</p>
        ) : null}
        <span className="mt-6 text-sm font-semibold tracking-wide text-ink underline-offset-4 transition group-hover:text-accent-dim group-hover:underline">
          Open entry →
        </span>
      </div>
    </Link>
  );
}
