import React from 'react';
import { Quote, Star, CheckCircle2, Linkedin } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  relation: string;
  skillsHighlighted: string[];
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'Aquib led the Android engineering pod for our core FinTech modules with exceptional architectural clarity. His migration of legacy payment presenters to Kotlin and Compose StateFlow directly cut tech debt and eliminated payment state synchronization issues.',
    author: 'Engineering Manager',
    role: 'Lead Architect',
    company: 'FinTech Ecosystem / Perennial Systems',
    relation: 'Managed Aquib directly on GCash international tourist & tax refund features',
    skillsHighlighted: ['Jetpack Compose', 'MVVM Clean Arch', 'StateFlow']
  },
  {
    id: 't2',
    quote: 'Designing a shared design system library (DFF) across 15+ engineering pods for ICICI iMobile was a monumental challenge. Aquib ensured zero breaking changes with strict semantic versioning and maintained 99.9% crash-free production reliability across 50M+ active banking customers.',
    author: 'Technical Delivery Lead',
    role: 'Delivery Manager',
    company: 'Tata Consultancy Services (Banking Pod)',
    relation: 'Supervised DFF Maven design library rollout across feature teams',
    skillsHighlighted: ['Design Systems (DFF)', 'Maven Artifacts', '99.9% Uptime']
  },
  {
    id: 't3',
    quote: 'Aquib’s deep technical rigor was pivotal in refactoring the Scandinavian credit card app from Java to Kotlin. His solution for geofencing jitter optimization solved a longstanding battery consumption issue across Nordic merchant zones.',
    author: 'Senior Solution Architect',
    role: 'Staff Engineer',
    company: 'Capgemini Financial Services',
    relation: 'Collaborated on EnterCard (re:member) credit card modernization',
    skillsHighlighted: ['Kotlin Modernization', 'Geofencing APIs', 'Biometrics']
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 border-t border-charcoal-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-accent-400 uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5" />
            <span>Peer & Leadership Recommendations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Third-Party Engineering Credibility
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            Feedback from engineering managers, solution architects, and pod members on delivery speed, architectural discipline, and high-scale uptime.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="dev-card p-6 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-accent-400 opacity-60" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal-700 space-y-2">
                <div>
                  <div className="text-xs font-bold text-white">{item.author}</div>
                  <div className="text-[11px] text-accent-400 font-mono">{item.role} • {item.company}</div>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  {item.relation}
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {item.skillsHighlighted.map((skill) => (
                    <span key={skill} className="px-1.5 py-0.5 rounded bg-charcoal-900 border border-charcoal-700 text-[10px] font-mono text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
