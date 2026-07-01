import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, DM_Serif_Display } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });
const dmSerif = DM_Serif_Display({ weight: '400', subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Apex Wellness | South Florida Behavioral Health Organization',
  description:
    'One organization. Three programs. Apex Wellness manages detox, residential, and outpatient behavioral health care across South Florida.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
