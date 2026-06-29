import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './app/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        apex: {
          navy: '#0F3254',
          navy2: '#1A4A72',
          teal: '#2E9E8E',
          teal2: '#348582',
          tealLight: '#D5F4E7',
          tealSoft: '#EBF3FB',
          gold: '#C8963E',
          gold2: '#D4A84A',
          cream: '#F9F7F4',
          ink: '#1A2B3C',
          muted: '#53657D',
          soft: '#F4F8FC',
          border: '#C1DBE0',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(15, 50, 84, 0.10)',
        card: '0 16px 40px rgba(15, 50, 84, 0.08)',
      },
      borderRadius: { xl2: '1.5rem', pill: '100px' },
    },
  },
  plugins: [],
};
export default config;
