'use client';
import Image from 'next/image';
import { useState } from 'react';

type Photo = { src: string; alt: string };

export default function FacilityGallery({ photos, name }: { photos: readonly Photo[]; name: string }) {
  const [active, setActive] = useState(0);

  if (photos.length === 0) return null;

  return (
    <div className="relative select-none">
      <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-apex-soft">
        {photos.map((p, i) => (
          <div
            key={p.src}
            className={`absolute inset-0 transition-opacity duration-500 ${i === active ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={i === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-apex-navy/40 to-transparent" />

        {photos.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 px-3">
            {photos.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`View photo ${i + 1} of ${photos.length} for ${name}`}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === active ? 'w-5 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {photos.length > 1 && (
        <div className="flex gap-2 overflow-x-auto px-4 py-3 bg-apex-soft/50 border-b border-apex-border scrollbar-thin">
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${p.alt}`}
              className={`relative h-12 w-16 sm:h-14 sm:w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                i === active ? 'border-apex-navy shadow-sm scale-105' : 'border-transparent opacity-60 hover:opacity-90'
              }`}
            >
              <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
