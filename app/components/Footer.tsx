import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './ui/Logo';
import { PHONE, PHONE_HREF, EMAIL, HQ_LOCATION, FACILITIES, FOOTER_LINKS } from '../lib/site';

export default function Footer() {
  return (
    <footer className="bg-apex-navy text-white">
      <div className="container px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo variant="white" className="h-11 w-auto mb-6" />
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-apex-tealLight mb-4">Corporate Office</p>
            <div className="flex flex-col gap-3 text-sm text-white/75">
              <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-apex-tealLight transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-apex-tealLight transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                {EMAIL}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                {HQ_LOCATION}
              </span>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-apex-tealLight">Our Programs</h4>
            <ul className="flex flex-col gap-3">
              {FACILITIES.map((f) => (
                <li key={f.id}>
                  <a href="#facilities" className="text-sm text-white/70 hover:text-white transition-colors">
                    {f.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-apex-tealLight">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Apex Wellness. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-5 text-xs text-white/40">
            {['Privacy Policy', 'Terms of Use', 'HIPAA Notice'].map((link) => (
              <a key={link} href="#" className="hover:text-white/70 transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
