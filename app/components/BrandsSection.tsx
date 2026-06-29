import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import FacilityGallery from './FacilityGallery';
import { FACILITIES } from '../lib/site';

export default function BrandsSection() {
  return (
    <section id="facilities" className="section bg-white">
      <div className="container px-4 sm:px-6">
        <SectionHeader
          eyebrow="Our Intrepid Facilities"
          title="Three Programs. One Standard of Excellence."
          subtitle="Each facility operates with its own dedicated team and specialized programming — united under Apex Wellness."
        />

        <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((facility) => (
            <article key={facility.id} className="card card-hover flex flex-col overflow-hidden">
              <FacilityGallery photos={facility.photos} name={facility.name} />

              <div className="flex flex-1 flex-col p-5 sm:p-7">
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <Image
                    src={facility.logo}
                    alt={facility.logoAlt}
                    width={160}
                    height={44}
                    className="h-9 w-auto max-w-[150px] object-contain"
                  />
                  <span className="level-badge w-fit">{facility.level}</span>
                </div>

                <h3 className="heading text-lg sm:text-xl leading-snug">{facility.name}</h3>
                <p className="mt-1 text-sm font-semibold text-apex-teal">{facility.location}</p>
                <p className="body-copy mt-3 sm:mt-4 flex-1 text-[14px] sm:text-[15px]">{facility.hook}</p>

                {facility.phone && facility.phoneHref && (
                  <a href={facility.phoneHref} className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-apex-navy hover:text-apex-teal">
                    <Phone className="h-4 w-4" />
                    {facility.phone}
                  </a>
                )}

                <a href={facility.href} className="btn-secondary btn-block mt-5 sm:mt-6">
                  Visit Website
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
