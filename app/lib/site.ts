export const PHONE = '(866) 591-9194';
export const PHONE_HREF = 'tel:+18665919194';
export const EMAIL = 'info@apexwellness.com';
export const HQ_ADDRESS = {
  line1: '1926 10th Ave N Suite 420',
  line2: 'Lake Worth, FL 33461',
} as const;

export const HERO_FACILITY_IMAGE = '/images/facilities/detox-courtyard.jpg';
export const HERO_VIDEO = '/videos/hero-drone-tour-polished.mp4';

export const LOGO = {
  default: '/images/apex-wellness-logo-transparent.png',
  white: '/images/apex-wellness-logo-white.png',
  hero: '/images/apex-wellness-logo-hero-light.png',
  alt: 'Apex Wellness Group',
  width: 220,
  height: 82,
  whiteWidth: 800,
  whiteHeight: 298,
  heroWidth: 800,
  heroHeight: 298,
} as const;

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Our Facilities', href: '#facilities' },
  { label: 'Programs', href: '#programs' },
  { label: 'For Referrals', href: '#for-referrals' },
  { label: 'Contact', href: '#contact' },
] as const;

export const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Our Facilities', href: '#facilities' },
  { label: 'Programs', href: '#programs' },
  { label: 'Accreditations', href: '#accreditations' },
  { label: 'For Referrals', href: '#for-referrals' },
  { label: 'Contact', href: '#contact' },
] as const;

export const FACILITIES = [
  {
    id: 'detox',
    logo: '/images/irc-logo-hires.webp',
    logoAlt: 'Intrepid Detox Residential',
    name: 'Intrepid Detox Residential',
    location: 'West Palm Beach, FL',
    tags: ['DETOX', 'RESIDENTIAL'],
    description:
      'Medically supervised detox and residential care for individuals who need 24/7 clinical support, safe stabilization, and a structured environment to begin recovery.',
    href: '#',
    photo: '/images/facilities/detox-courtyard.jpg',
    photos: [
      { src: '/images/facilities/detox-courtyard.jpg', alt: 'Intrepid Detox courtyard walkway between buildings' },
      { src: '/images/facilities/detox-exterior.jpg', alt: 'Intrepid Detox exterior campus' },
      { src: '/images/facilities/detox-entrance.jpg', alt: 'Intrepid Detox entrance' },
      { src: '/images/facilities/detox-lounge.jpg', alt: 'Intrepid Detox resident lounge' },
      { src: '/images/facilities/detox-aerial.jpg', alt: 'Intrepid Detox aerial campus view' },
      { src: '/images/facilities/detox-office.png', alt: 'Intrepid Detox office space' },
    ],
  },
  {
    id: 'holistic',
    logo: '/images/ihhs-logo.png',
    logoAlt: 'Intrepid Holistic Health',
    name: 'Intrepid Holistic Health',
    location: 'Lake Worth Beach, FL',
    tags: ['PHP', 'IOP'],
    description:
      'Substance abuse partial hospitalization program (PHP) offering structured day treatment, clinical therapy, and holistic support for individuals in active recovery.',
    href: '#',
    photo: '/images/facilities/ihhs-reception.jpg',
    photos: [
      { src: '/images/facilities/ihhs-reception.jpg', alt: 'IHHS reception and lobby' },
      { src: '/images/facilities/ihhs-lounge.jpg', alt: 'IHHS client lounge' },
      { src: '/images/facilities/ihhs-group-room.jpg', alt: 'IHHS group therapy room' },
    ],
  },
  {
    id: 'mental',
    logo: '/images/imh-logo.png',
    logoAlt: 'Intrepid Mental Health',
    name: 'Intrepid Mental Health',
    location: 'Delray Beach, FL',
    tags: ['PHP', 'IOP'],
    description:
      'Primary mental health partial hospitalization program (PHP) for depression, anxiety, trauma, and related conditions — standalone psychiatric care, not addiction-adjacent.',
    href: '#',
    photo: '/images/facilities/imh-lobby.jpg',
    photos: [
      { src: '/images/facilities/imh-lobby.jpg', alt: 'Intrepid Mental Health lobby' },
      { src: '/images/facilities/imh-therapy-room.jpg', alt: 'Private therapy room' },
      { src: '/images/facilities/imh-group-room.jpg', alt: 'Group therapy room' },
      { src: '/images/facilities/imh-yoga.jpg', alt: 'Yoga and mindfulness studio' },
      { src: '/images/facilities/imh-tech-lounge.jpg', alt: 'Life skills and wellness center' },
    ],
  },
] as const;

export const CORE_PROGRAMS = [
  {
    title: 'Substance Use Treatment',
    text: 'Safe, structured detox, residential care, and intensive PHP — with evidence-based therapies and holistic modalities for whole-person recovery.',
  },
  {
    title: 'Mental Health Treatment',
    text: 'Dedicated partial hospitalization for primary mental health — standalone programming, not addiction-adjacent, with psychiatric evaluation and trauma-informed care.',
  },
] as const;

export const ACCREDITATIONS = [
  {
    name: 'DCF Licensed',
    logo: '/images/dcf-logo.png',
    logoWidth: 56,
    logoHeight: 56,
    desc: 'Licensed by the Florida Department of Children and Families for substance abuse and mental health treatment providers.',
  },
  {
    name: 'JCAHO Accredited',
    logo: '/images/joint-commission.png',
    logoWidth: 56,
    logoHeight: 56,
    desc: 'Accredited by The Joint Commission — the gold standard in healthcare quality and patient safety nationwide.',
  },
  {
    name: 'FARR Certified',
    logo: '/images/farr-logo.png',
    logoWidth: 230,
    logoHeight: 100,
    desc: 'Certified by the Florida Association of Recovery Residences for ethical, safe, recovery-focused residential care.',
  },
  {
    name: 'AHCA Licensed',
    logo: '/images/ahca-logo.png',
    logoWidth: 100,
    logoHeight: 100,
    desc: 'Licensed by the Florida Agency for Health Care Administration, authorizing our facilities to serve primary mental health and substance use treatment clients.',
  },
] as const;
