type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHead({ eyebrow, title, text, align = "left", light }: Props) {
  return (
    <div className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className={`chapter-label mb-4 ${light ? "text-accent" : ""}`}>{eyebrow}</p>
      ) : null}
      <h2
        className={`font-display text-[clamp(2rem,4vw,3.25rem)] font-medium tracking-[-0.025em] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`editorial-band ${className}`}>
      <div className="container-wide">{children}</div>
    </section>
  );
}
