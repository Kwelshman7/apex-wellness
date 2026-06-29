import Image from 'next/image';
import Link from 'next/link';
import { LOGO } from '../../lib/site';

type LogoProps = {
  variant?: 'default' | 'white';
  className?: string;
  priority?: boolean;
  href?: string;
};

export default function Logo({ variant = 'default', className = 'h-12 w-auto', priority = false, href = '#' }: LogoProps) {
  const src = variant === 'white' ? LOGO.white : LOGO.default;

  const image = (
    <Image
      src={src}
      alt={LOGO.alt}
      width={LOGO.width}
      height={LOGO.height}
      className={`object-contain ${className}`}
      priority={priority}
    />
  );

  return (
    <Link href={href} className="inline-flex flex-shrink-0" aria-label={`${LOGO.alt} home`}>
      {image}
    </Link>
  );
}
