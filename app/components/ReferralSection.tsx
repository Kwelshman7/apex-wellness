import { Globe, Phone, Heart, ArrowRight } from 'lucide-react';
import { PHONE_HREF } from '../lib/site';

const FEATURES = [
  {
    icon: Globe,
    title: 'Nationwide Referral Network',
    text: 'Trusted partner programs across all 50 states, vetted for clinical quality and ethical practice.',
  },
  {
    icon: Phone,
    title: 'Warm Handoffs — Not Just Referrals',
    text: "We personally connect you with the right team at the right facility — not just a phone number.",
  },
  {
    icon: Heart,
    title: 'No One Turned Away',
    text: 'If an Intrepid program is not the right fit, we will always help you find a next step.',
  },
];

export default function ReferralSection() {
  return (
    <section id="referrals" className="relative overflow-hidden bg-apex-navy text-white">
      <div className="section relative z-10 !py-20">
        <div className="container px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-apex-tealLight">Our Commitment</p>
              <span className="gold-bar mt-4 block" />
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight text-white">
                We Will Always Help You Find the Right Care.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/80">
                Whether the issue is level of care, geography, insurance, or personal preference — our team connects
                you with trusted providers anywhere in the United States when an Intrepid facility is not the right fit.
              </p>
              <a href={PHONE_HREF} className="btn-gold mt-8">
                Speak With Our Team
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-col gap-5">
              {FEATURES.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-5 rounded-2xl border border-white/10 p-6" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-apex-teal/30">
                    <Icon className="h-6 w-6 text-apex-tealLight" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{title}</h3>
                    <p className="text-sm leading-relaxed text-white/75">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
