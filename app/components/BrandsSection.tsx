import { Phone } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import FacilityGallery from './FacilityGallery';
import FacilityCard from './FacilityCard';
import { FACILITIES, PHONE, PHONE_HREF } from '../lib/site';

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
            <article key={facility.id} className="facility-card card card-hover flex flex-col overflow-hidden h-full">
              <FacilityGallery photos={facility.photos} name={facility.name} />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <FacilityCard facility={facility} />
              </div>
            </article>
          ))}
        </div>

        <div className="facility-section-cta mt-12 sm:mt-16 mx-auto max-w-2xl rounded-2xl border border-apex-border bg-apex-soft/40 px-6 py-8 sm:px-10 sm:py-10 text-center">
          <p className="body-copy text-base sm:text-lg leading-relaxed">
            To learn more about our programs, speak to one of our recovery specialists.
          </p>
          <a href={PHONE_HREF} className="btn-gold mt-6 inline-flex w-full sm:w-auto justify-center">
            <Phone className="h-4 w-4" strokeWidth={2} />
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
