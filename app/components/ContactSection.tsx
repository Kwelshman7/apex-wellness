import { Phone, Mail, MapPin } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import InsuranceVerificationForm from './InsuranceVerificationForm';
import { PHONE, PHONE_HREF, EMAIL, HQ_LOCATION } from '../lib/site';

const CONTACT_ITEMS = [
  { icon: Phone, label: 'Phone', value: PHONE, href: PHONE_HREF, sub: 'Available 24/7' },
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, sub: 'Response within 1 business day' },
  { icon: MapPin, label: 'Headquarters', value: HQ_LOCATION, href: null, sub: 'Serving patients nationwide' },
] as const;

export default function ContactSection() {
  return (
    <section id="contact" className="section bg-apex-cream">
      <div className="container px-4 sm:px-6">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Get Help Now"
              title="We're Here When You're Ready to Talk"
              subtitle="Whether you are seeking support for yourself, a loved one, or a referral partner, our team is available to answer questions and help guide the next step."
            />

            <div className="mt-10 flex flex-col gap-8">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href, sub }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-apex-tealLight/50">
                    <Icon className="h-5 w-5 text-apex-teal" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-apex-teal">{label}</p>
                    {href ? (
                      <a href={href} className="font-bold text-apex-navy hover:text-apex-teal transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="font-bold text-apex-navy">{value}</p>
                    )}
                    <p className="text-sm text-apex-muted">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="card overflow-hidden border-t-4 border-t-apex-gold shadow-card">
              <InsuranceVerificationForm />
            </div>
            <p className="mt-6 text-center text-sm text-apex-muted lg:text-left">
              100% confidential, No Obligation to enter treatment,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
