'use client';
import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from './ui/Logo';
import { NAV_LINKS, PHONE, PHONE_HREF } from '../lib/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <div className="sticky top-0 z-50">
        <header
          className={`bg-white border-b border-apex-border/70 transition-shadow duration-300 ${
            scrolled ? 'shadow-[0_4px_24px_rgba(15,50,84,0.10)]' : ''
          }`}
        >
          <div className="container px-4 sm:px-6">
            <div className="flex h-[76px] items-center justify-between gap-6">
              <Logo priority />

              <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
                {NAV_LINKS.map(({ label, href }) => (
                  <a key={label} href={href} className="nav-link px-4 py-2">{label}</a>
                ))}
              </nav>

              <div className="hidden lg:flex flex-shrink-0">
                <a href={PHONE_HREF} className="btn-gold btn-sm">
                  <Phone className="h-4 w-4" strokeWidth={2} />
                  Call Now
                </a>
              </div>

              <button
                className="flex lg:hidden flex-col gap-[5px] p-2 rounded-lg hover:bg-apex-tealLight/30"
                onClick={() => setOpen(!open)}
                aria-label="Toggle navigation"
                aria-expanded={open}
              >
                <span className={`block h-0.5 w-6 bg-apex-navy rounded transition-all ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
                <span className={`block h-0.5 w-6 bg-apex-navy rounded transition-all ${open ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-6 bg-apex-navy rounded transition-all ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
              </button>
            </div>
          </div>
        </header>
      </div>

      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={close} />
        <nav className={`absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl flex flex-col pt-24 pb-8 px-6 gap-1 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} onClick={close} className="nav-link block py-4 text-lg border-b border-apex-border/50">
              {label}
            </a>
          ))}
          <a href={PHONE_HREF} onClick={close} className="btn-gold mt-6 justify-center">
            <Phone className="h-4 w-4" />
            Call {PHONE}
          </a>
        </nav>
      </div>
    </>
  );
}
