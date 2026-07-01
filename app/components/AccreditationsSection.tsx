import Image from 'next/image';
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
          {ACCREDITATIONS.map(({ name, logo, logoWidth, logoHeight, desc }) => (
            <div key={name} className="card card-hover flex flex-col p-7 text-center">
              <div className="mx-auto mb-5 flex h-20 w-full items-center justify-center">
                <Image
                  src={logo}
                  alt={name}
                  width={logoWidth}
                  height={logoHeight}
                  className="max-h-14 w-auto max-w-[120px] object-contain"
                />
              </div>
              <h3 className="heading text-lg mb-3">{name}</h3>
              <p className="body-copy flex-1 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
