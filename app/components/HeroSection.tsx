import Image from 'next/image';
import { ArrowRight, Layers, Globe } from 'lucide-react';
import { HERO_FACILITY_IMAGE, HERO_LION_IMAGE, PHONE_HREF } from '../lib/site';

export default function HeroSection() {
  return (
    <section className="hero-section relative overflow-hidden bg-apex-navy text-white">
      {/* Facility walkway — fades in from center/right */}
      <div className="hero-facility-layer absolute inset-0" aria-hidden="true">
        <div className="absolute inset-y-0 right-0 w-full sm:w-[88%] md:w-[72%] lg:w-[62%]">
          <Image
            src={HERO_FACILITY_IMAGE}
            alt=""
            fill
            className="object-cover object-center sm:object-[center_40%]"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 62vw"
          />
        </div>
      </div>

      {/* Lion watermark — enters from left, full head visible, fades toward facility */}
      <div className="hero-lion-layer absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="hero-lion-inner relative h-full w-full max-w-[min(110vw,680px)]">
          <Image
            src={HERO_LION_IMAGE}
            alt=""
            fill
            className="object-contain object-left-bottom"
            priority
            sizes="(max-width: 640px) 95vw, 680px"
          />
        </div>
      </div>

      {/* Blend overlays */}
      <div className="hero-blend-overlay absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-apex-navy/50 via-transparent to-apex-navy/30 pointer-events-none md:hidden" aria-hidden="true" />

      <div className="container relative z-10 px-4 sm:px-6 py-16 sm:py-20 md:py-28 lg:py-36">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="eyebrow text-apex-tealLight mb-3 sm:mb-4 text-[11px] sm:text-xs">Premier Behavioral Healthcare Organization</p>

          <h1 className="font-serif text-[clamp(1.85rem,6.5vw,3.75rem)] leading-[1.1] text-white">
            Life-Changing Care Across{' '}
            <em className="not-italic text-apex-tealLight">3 Trusted Programs.</em>
          </h1>
          <p className="mt-2 sm:mt-3 font-serif text-xl sm:text-2xl md:text-3xl text-white/90">One United Mission.</p>

          <p className="mt-5 sm:mt-8 max-w-xl text-[15px] sm:text-base md:text-lg leading-relaxed text-white/85">
            Apex Wellness is the parent organization behind three accredited Intrepid facilities in South Florida —
            delivering detox, residential, and intensive outpatient care when it matters most.
          </p>

          <div className="mt-7 sm:mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a href="#contact" className="btn-gold w-full sm:w-auto justify-center">
              Get Help Now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#facilities" className="btn-secondary btn-on-dark w-full sm:w-auto justify-center">
              Explore Our Facilities
            </a>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 max-w-xl sm:max-w-2xl">
          {[
            { icon: Layers, num: '3', label: 'Levels of care across South Florida' },
            { icon: Globe, num: '50+', label: 'States in our referral network' },
          ].map(({ icon: Icon, num, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/15 px-4 py-4 sm:px-5 sm:py-5"
              style={{ background: 'rgba(255,255,255,0.07)' }}
            >
              <Icon className="h-5 w-5 text-apex-tealLight mb-2" strokeWidth={1.8} />
              <p className="font-serif text-2xl sm:text-3xl text-white">{num}</p>
              <p className="mt-1 text-xs sm:text-sm text-white/70 leading-snug">{label}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 sm:mt-10">
          <a href={PHONE_HREF} className="text-sm font-semibold text-apex-tealLight hover:text-white transition-colors">
            Call our recovery specialists — available 24/7.
          </a>
        </p>
      </div>
    </section>
  );
}
