import { Brain, HeartPulse } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { CORE_PROGRAMS } from '../lib/site';

const ICONS = [HeartPulse, Brain] as const;

export default function CoreProgramsSection() {
  return (
    <section id="programs" className="section bg-apex-tealSoft">
      <div className="container px-4 sm:px-6">
        <SectionHeader
          eyebrow="Core Programs"
          title="Levels of Care We Operate"
          subtitle="Specialized treatment across substance use and primary mental health — delivered through our Intrepid facilities in South Florida."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {CORE_PROGRAMS.map(({ title, text }, i) => {
            const Icon = ICONS[i];
            return (
              <div key={title} className="card card-hover p-6 sm:p-8 border-t-4 border-t-apex-teal">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-apex-tealLight/50">
                  <Icon className="h-8 w-8 text-apex-teal" strokeWidth={1.6} />
                </div>
                <h3 className="heading text-2xl mb-4">{title}</h3>
                <p className="body-copy text-[15px] leading-relaxed">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
