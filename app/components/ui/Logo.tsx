import Image from 'next/image';
import Link from 'next/link';
import { LOGO } from '../../lib/site';

type LogoProps = {
  variant?: 'default' | 'white' | 'hero';
  className?: string;
  priority?: boolean;
  href?: string;
  linked?: boolean;
};

export default function Logo({
  variant = 'default',
  className = 'h-12 w-auto',
  priority = false,
  href = '#',
  linked = true,
}: LogoProps) {
  const src =
    variant === 'hero' ? LOGO.hero : variant === 'white' ? LOGO.white : LOGO.default;

  const width = variant === 'hero' ? LOGO.heroWidth : variant === 'white' ? LOGO.whiteWidth : LOGO.width;
  const height = variant === 'hero' ? LOGO.heroHeight : variant === 'white' ? LOGO.whiteHeight : LOGO.height;

  const image = (
    <Image
      src={src}
      alt={LOGO.alt}
      width={width}
      height={height}
      className={`object-contain ${className}`}
      priority={priority}
      quality={100}
    />
  );

  if (!linked) {
    return <span className="inline-flex flex-shrink-0">{image}</span>;
  }

  return (
    <Link href={href} className="inline-flex flex-shrink-0" aria-label={`${LOGO.alt} home`}>
      {image}
    </Link>
  );
}
