import { Shield, Users } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const VALUES = [
  {
    icon: Shield,
    title: 'Clinical Excellence',
    text: 'Evidence-based protocols, credentialed clinicians, and rigorous quality standards across every program we operate.',
  },
  {
    icon: Users,
    title: 'Community Commitment',
    text: 'Deeply rooted in South Florida, we serve our community with culturally competent, accessible care — in English and Spanish.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section bg-apex-cream">
      <div className="container px-4 sm:px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Who We Are"
              title="A Healthcare Organization Built on Integrity"
              subtitle="Apex Wellness is the parent organization behind the Intrepid family of treatment programs — committed to clinical quality, ethical practice, and patient dignity."
            />
            <p className="body-copy mt-6 text-[15px] leading-relaxed">
              Our team works across three South Florida facilities to ensure consistent, compassionate care.
              Trained recovery specialists are available 24/7 to guide individuals and families to the right program.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card flex gap-5 p-6 border-l-4 border-l-apex-teal">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-apex-tealLight/50">
                  <Icon className="h-6 w-6 text-apex-teal" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="heading text-lg mb-2">{title}</h3>
                  <p className="body-copy text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
