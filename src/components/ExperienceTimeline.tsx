import React, { useState } from 'react';
import { WORK_EXPERIENCES, WorkExperience } from '../data/resumeData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, Sparkles, Code2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string>('perennial');

  const domains = ['All', 'FinTech', 'Banking', 'AI / ML', 'Enterprise', 'Social'];

  const filteredExperiences = WORK_EXPERIENCES.filter((exp) => {
    if (selectedDomain === 'All') return true;
    return exp.domain === selectedDomain;
  });

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive Experience <span className="text-gradient-emerald">Timeline</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            8+ years directing Android feature delivery, architecture overhauls, and team leadership.
          </p>
        </div>

        {/* Domain Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedDomain === domain
                  ? 'bg-emerald-500 text-obsidian-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-obsidian-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 lg:ml-32 space-y-10">
          {filteredExperiences.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div key={exp.id} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-obsidian-950 border-2 border-emerald-500 group-hover:scale-125 group-hover:bg-emerald-500 transition-all flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>

                {/* Left Date Label (on desktop) */}
                <div className="hidden lg:block absolute -left-36 top-1.5 text-right w-28 text-xs font-mono text-slate-400 font-semibold">
                  {exp.period}
                </div>

                {/* Card Container */}
                <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 transition-all hover:border-emerald-500/40">
                  
                  {/* Top Bar inside Card */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                          {exp.company}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300">
                          {exp.domain}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-xs text-slate-400 mt-2 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Impact Metric Badge if available */}
                    {exp.impactMetric && (
                      <div className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyber-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-mono shadow-sm flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{exp.impactMetric}</span>
                      </div>
                    )}
                  </div>

                  {/* Summary */}
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed font-normal">
                    {exp.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 space-y-2">
                    {exp.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-400 font-mono mr-1">Stack:</span>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-obsidian-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
