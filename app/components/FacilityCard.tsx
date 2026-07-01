import { MapPin } from 'lucide-react';
import type { FACILITIES } from '../lib/site';

type Facility = (typeof FACILITIES)[number];

export default function FacilityCard({ facility }: { facility: Facility }) {
  return (
    <div className="facility-detail-body flex h-full flex-1 flex-col">
      <h3 className="font-serif text-[0.9375rem] sm:text-base lg:text-lg leading-tight text-apex-ink">
        {facility.name}
      </h3>
      <div className="mt-2 flex items-center gap-1.5 text-apex-teal">
        <MapPin className="h-4 w-4 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
        <span className="text-sm sm:text-[15px]">{facility.location}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {facility.tags.map((tag) => (
          <span key={tag} className="program-tag">
            {tag}
          </span>
        ))}
      </div>

      <p className="body-copy mt-4 flex-1 text-[14px] sm:text-[15px] leading-relaxed">
        {facility.description}
      </p>
    </div>
  );
}
