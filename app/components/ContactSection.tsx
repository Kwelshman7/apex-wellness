import { Phone, Mail, MapPin } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import InsuranceVerificationForm from './InsuranceVerificationForm';
import { PHONE, PHONE_HREF, EMAIL, HQ_LOCATION } from '../lib/site';

export default function ContactSection() {
  return (
    <section id="contact" className="section bg-apex-cream">
      <div className="container px-4 sm:px-6">
        <SectionHeader
          eyebrow="Get Help Now"
          title="Verify Your Insurance Benefits"
          subtitle="Complete the form below and a recovery specialist will contact you within 30 minutes — confidential, free, and at no obligation."
        />

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 mb-10 sm:mb-12">
          {[
            { icon: Phone, label: 'Phone', value: PHONE, href: PHONE_HREF, sub: 'Available 24/7' },
            { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, sub: 'Response within 1 business day' },
            { icon: MapPin, label: 'Headquarters', value: HQ_LOCATION, href: null, sub: 'Serving patients nationwide' },
          ].map(({ icon: Icon, label, value, href, sub }) => (
            <div key={label} className="flex items-center gap-4 w-full sm:w-auto sm:min-w-[200px] justify-center sm:justify-start text-center sm:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-apex-tealLight/50">
                <Icon className="h-5 w-5 text-apex-teal" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-apex-teal">{label}</p>
                {href ? (
                  <a href={href} className="font-bold text-apex-navy hover:text-apex-teal transition-colors">{value}</a>
                ) : (
                  <p className="font-bold text-apex-navy">{value}</p>
                )}
                <p className="text-sm text-apex-muted">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-[520px]">
          <div className="card overflow-hidden border-t-4 border-t-apex-gold shadow-card">
            <InsuranceVerificationForm />
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-apex-muted">
          Confidential · English &amp; Spanish · HIPAA Protected
        </p>
      </div>
    </section>
  );
}
