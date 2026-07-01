import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { HERO_VIDEO, LOGO } from '../lib/site';

export default function HeroSection() {
  return (
    <section className="hero-section relative overflow-hidden bg-apex-navy text-white">
      <div className="hero-video-layer absolute inset-0" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero-video h-full w-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      </div>

      {/* Navy lion — clipped to left column only */}
      <div className="hero-lion-wrap absolute inset-y-0 left-0 pointer-events-none" aria-hidden="true">
        <div className="hero-lion-mask" />
      </div>

      {/* Dark overlays for text readability */}
      <div className="hero-blend-overlay absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="hero-text-scrim absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="hero-video-shade absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10 px-4 sm:px-6 pt-6 sm:pt-8 md:pt-12 lg:pt-14 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-xl lg:max-w-2xl text-left">
          <div className="hero-lockup mb-4 sm:mb-5">
            <Image
              src={LOGO.hero}
              alt={LOGO.alt}
              width={LOGO.heroWidth}
              height={LOGO.heroHeight}
              priority
              quality={100}
              className="h-auto w-full max-w-[min(100vw-2rem,320px)] sm:max-w-[360px] md:max-w-[400px]"
            />
            <p className="eyebrow hero-eyebrow mt-3 sm:mt-4 text-[11px] sm:text-xs normal-case tracking-[0.12em] max-w-md">
              A Behavioral Health Management Company
            </p>
          </div>

          <h1 className="font-serif text-[clamp(1.85rem,5.5vw,3.15rem)] leading-[1.08] text-white font-normal max-w-xl lg:max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            Raising the Standard for Addiction and Mental Health Care
          </h1>
          <p className="mt-4 sm:mt-5 text-[15px] sm:text-base md:text-lg text-white/92 leading-relaxed max-w-lg lg:max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
            Our facilities are built around compassionate care, strong clinical leadership, and a higher
            standard of support for every individual we serve.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="#contact" className="btn-gold w-full sm:w-auto justify-center">
              Get Help Now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#facilities" className="btn-secondary btn-on-dark w-full sm:w-auto justify-center">
              Explore Our Facilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
