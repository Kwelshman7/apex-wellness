import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { ACCREDITATIONS } from '../lib/site';

export default function AccreditationsSection() {
  return (
    <section id="accreditations" className="section bg-white">
      <div className="container px-4 sm:px-6">
        <SectionHeader
          eyebrow="Our Credentials"
          title="Verified. Accredited. Held to the Highest Standard."
          subtitle="Every Apex Wellness facility maintains the most rigorous certifications and accreditations in behavioral healthcare — so you can trust the care you receive."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ACCREDITATIONS.map(({ name, logo, logoWidth, logoHeight, desc, tag }) => (
            <div key={name} className="card card-hover flex flex-col p-7 text-center">
              <div className="mx-auto mb-5 flex h-20 w-full max-w-[140px] items-center justify-center">
                {logo ? (
                  <Image
                    src={logo}
                    alt={name}
                    width={logoWidth}
                    height={logoHeight}
                    className="h-14 w-auto max-w-[120px] object-contain"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-apex-teal/30 bg-apex-tealLight/30">
                    <ShieldCheck className="h-8 w-8 text-apex-teal" strokeWidth={1.6} />
                  </div>
                )}
              </div>
              <h3 className="heading text-lg mb-3">{name}</h3>
              <p className="body-copy flex-1 text-sm leading-relaxed">{desc}</p>
              <span className="mt-5 inline-block rounded-full bg-apex-tealLight/50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-apex-teal">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
