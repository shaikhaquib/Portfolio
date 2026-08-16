import React, { useState } from 'react';
import { WORK_EXPERIENCES, INDEPENDENT_PROJECTS } from '../data/resumeData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Tv } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');

  const domains = ['All', 'FinTech', 'Banking', 'AI / ML', 'Enterprise', 'Social'];

  const filteredExperiences = WORK_EXPERIENCES.filter((exp) => {
    if (selectedDomain === 'All') return true;
    return exp.domain === selectedDomain;
  });

  return (
    <section id="experience" className="py-20 border-b border-charcoal-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-accent-400 uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career History</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Work Experience
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Chronological track record of development roles, technical decisions, pod leadership, and production stability.
            </p>
          </div>

          {/* Domain Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-charcoal-900 border border-charcoal-750 rounded-lg text-xs font-mono">
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-2.5 py-1 rounded transition-colors ${
                  selectedDomain === domain
                    ? 'bg-charcoal-750 text-white font-bold border border-charcoal-600'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="dev-card p-6 sm:p-8 space-y-4"
            >
              {/* Header inside Card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-charcoal-750 pb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <span className="tech-tag text-accent-300">
                      {exp.company}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      • {exp.domain}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-accent-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-accent-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {exp.impactMetric && (
                  <div className="px-3 py-1.5 rounded-lg bg-charcoal-900 border border-accent-600/30 text-accent-400 text-xs font-mono font-bold self-start sm:self-auto">
                    {exp.impactMetric}
                  </div>
                )}
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Highlights Bullet List */}
              <div className="space-y-2 pt-1">
                {exp.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-3 border-t border-charcoal-800 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-slate-500 mr-1">Stack:</span>
                {exp.techStack.map((tech) => (
                  <span key={tech} className="tech-tag text-[11px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Independent Projects Section */}
          <div className="pt-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-2">
              <Tv className="w-4 h-4 text-accent-400" />
              <span>Independent Technical Projects</span>
            </h3>

            {INDEPENDENT_PROJECTS.map((proj, idx) => (
              <div key={idx} className="dev-card p-6 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-charcoal-750 pb-3">
                  <div>
                    <h4 className="text-base font-bold text-white">{proj.title}</h4>
                    <span className="text-xs font-mono text-accent-400">{proj.role}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-charcoal-750">
                  {proj.techStack.map((tech) => (
                    <span key={tech} className="tech-tag text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
