import { Building2, Heart, Users, Scale, ArrowRight } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { PHONE_HREF } from '../lib/site';

const PARTNERS = [
  {
    icon: Building2,
    title: 'Hospitals & ERs',
    text: 'Rapid discharge planning and direct admissions coordination for acute behavioral health cases.',
  },
  {
    icon: Heart,
    title: 'Therapists & Psychiatrists',
    text: 'Step-up placements for clients who need a higher level of care than outpatient therapy can provide.',
  },
  {
    icon: Users,
    title: 'Employee Assistance Programs',
    text: 'Confidential, expedited placements for employees and their family members in need of behavioral health services.',
  },
  {
    icon: Scale,
    title: 'Court & Legal Systems',
    text: 'Court-ordered treatment placements with thorough documentation, progress reporting, and compliance support.',
  },
];

export default function ReferralPartnersSection() {
  return (
    <section id="for-referrals" className="section bg-apex-tealSoft">
      <div className="container px-4 sm:px-6">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Refer A Client"
              title="Partnering with Providers Across the Continuum"
              subtitle="We work closely with hospitals, physicians, therapists, employee assistance programs, and court systems to provide seamless, timely placements for patients in need of behavioral healthcare services."
            />
            <p className="body-copy mt-6 text-[15px] leading-relaxed">
              Our professional admissions team is available 24 hours a day to assist with clinical consultations,
              level-of-care determinations, and expedited admissions for your patients.
            </p>
            <a href={PHONE_HREF} className="btn-gold mt-8">
              Refer a Client
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PARTNERS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-apex-tealLight/50">
                  <Icon className="h-5 w-5 text-apex-teal" strokeWidth={1.8} />
                </div>
                <h3 className="heading text-base mb-2">{title}</h3>
                <p className="body-copy text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
