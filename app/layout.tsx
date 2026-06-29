import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, DM_Serif_Display } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });
const dmSerif = DM_Serif_Display({ weight: '400', subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Apex Wellness | Premier Behavioral Healthcare Organization',
  description:
    'Apex Wellness is the parent organization behind three world-class Intrepid treatment facilities in South Florida — Detox & Residential, Holistic Health Services, and Mental Health.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
