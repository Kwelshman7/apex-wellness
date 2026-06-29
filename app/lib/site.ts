export const PHONE = '(833) 453-2739';
export const PHONE_HREF = 'tel:+18334532739';
export const EMAIL = 'info@apexwellness.com';
export const HQ_LOCATION = 'South Florida';

export const HERO_FACILITY_IMAGE = '/images/facilities/detox-courtyard.jpg';
export const HERO_LION_IMAGE = '/images/apex-lion-gold.png';

export const LOGO = {
  default: '/images/apex-wellness-logo-transparent.png',
  white: '/images/apex-wellness-logo-white.png',
  alt: 'Apex Wellness',
  width: 220,
  height: 82,
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
    logoAlt: 'Intrepid Detox & Residential',
    name: 'Intrepid Detox & Residential',
    location: 'Delray Beach, FL',
    phone: '561-763-9414',
    phoneHref: 'tel:+15617639414',
    hook: 'Medically supervised detox and 24/7 residential care for individuals who need the highest level of clinical support.',
    level: 'Detox + Residential',
    href: '#',
    photo: '/images/facilities/detox-courtyard.jpg',
    photos: [
      { src: '/images/facilities/detox-courtyard.jpg', alt: 'Intrepid Detox courtyard walkway between buildings' },
      { src: '/images/facilities/detox-exterior.jpg', alt: 'Intrepid Detox exterior campus' },
      { src: '/images/facilities/detox-entrance.jpg', alt: 'Intrepid Detox entrance' },
      { src: '/images/facilities/detox-lounge.jpg', alt: 'Intrepid Detox resident lounge' },
      { src: '/images/facilities/detox-medical.jpg', alt: 'Intrepid Detox medical area' },
      { src: '/images/facilities/detox-aerial.jpg', alt: 'Intrepid Detox aerial campus view' },
      { src: '/images/facilities/detox-office.png', alt: 'Intrepid Detox office space' },
    ],
  },
  {
    id: 'holistic',
    logo: '/images/ihhs-logo.png',
    logoAlt: 'Intrepid Holistic Health Services',
    name: 'Intrepid Holistic Health Services',
    location: 'Lake Worth, FL',
    phone: null,
    phoneHref: null,
    hook: 'Intensive PHP for substance use disorder integrating evidence-based treatment with holistic healing modalities.',
    level: 'Partial Hospitalization',
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
    location: 'West Palm Beach, FL',
    phone: null,
    phoneHref: null,
    hook: 'Standalone primary mental health PHP for depression, anxiety, trauma, and bipolar disorder.',
    level: 'Mental Health PHP',
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
    tag: 'State of Florida',
  },
  {
    name: 'JCAHO Accredited',
    logo: '/images/joint-commission.png',
    logoWidth: 56,
    logoHeight: 56,
    desc: 'Accredited by The Joint Commission — the gold standard in healthcare quality and patient safety nationwide.',
    tag: 'Gold Seal of Approval™',
  },
  {
    name: 'FARR Certified',
    logo: '/images/farr-logo.svg',
    logoWidth: 100,
    logoHeight: 36,
    desc: 'Certified by the Florida Association of Recovery Residences for ethical, safe, recovery-focused residential care.',
    tag: 'Florida Certified',
  },
  {
    name: 'LegitScript Certified',
    logo: null,
    logoWidth: 0,
    logoHeight: 0,
    desc: 'Verified by LegitScript for legitimacy with insurers, advertising platforms, and patients seeking trusted care.',
    tag: 'Verified Provider',
  },
] as const;
