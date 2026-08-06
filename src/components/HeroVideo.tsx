import { assets } from "../content/assets";

/** Continuous fashion/clothing hero film — no food/CPG frames. */
export function HeroVideo() {
  return (
    <video
      className="hero-film absolute inset-0 size-full object-cover opacity-60"
      src="/video/hero-fashion-live.mp4"
      poster={assets.hero_video_poster}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden
    />
  );
}
