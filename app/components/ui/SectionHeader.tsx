interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }: SectionHeaderProps) {
  const isCenter = align === 'center';
  return (
    <div className={`${isCenter ? 'mx-auto max-w-4xl text-center' : 'max-w-2xl'}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`heading mt-4 sm:mt-6 text-[clamp(1.75rem,5vw,3.25rem)] ${isCenter ? '' : 'text-left'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`body-copy mt-6 text-base sm:text-lg leading-relaxed ${isCenter ? 'mx-auto max-w-3xl' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
