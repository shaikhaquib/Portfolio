import React from 'react';
import { PERSONAL_INFO, WORK_EXPERIENCES, EDUCATIONS, CERTIFICATIONS, SKILL_GROUPS, INDEPENDENT_PROJECTS } from '../data/resumeData';
import { FileText, Download, Printer, Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';
import { trackResumeDownload } from '../utils/analytics';
import { resolveAsset } from '../utils/assets';

export const InteractiveResume: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    trackResumeDownload('resume_section');
  };

  return (
    <section id="resume" className="py-20 border-b border-charcoal-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 no-print">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-accent-400 uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Resume View
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-lg bg-charcoal-900 hover:bg-charcoal-850 text-slate-300 border border-charcoal-750 font-mono text-xs transition-colors flex items-center gap-2"
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              <span>Print Resume</span>
            </button>

            <a
              href={resolveAsset(PERSONAL_INFO.resumePdfUrl)}
              download="AQUIB-SHAIKH-RESUME.pdf"
              onClick={handleDownload}
              className="px-3.5 py-2 rounded-lg bg-accent-600 hover:bg-accent-500 text-white font-mono text-xs font-bold transition-colors flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Solid Resume White-Paper Container */}
        <div className="dev-card p-6 sm:p-10 text-slate-200 space-y-8 font-sans">
          
          {/* Header Block */}
          <div className="border-b border-charcoal-750 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-semibold text-accent-400 mt-1 font-mono">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1 font-mono">
                <MapPin className="w-3.5 h-3.5 text-accent-400" />
                {PERSONAL_INFO.location}
              </p>
            </div>

            {/* Contact Details */}
            <div className="text-xs font-mono space-y-1 text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3 pt-1 text-[11px] text-accent-400">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <Linkedin className="w-3 h-3" /> LinkedIn
                </a>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <Github className="w-3 h-3" /> GitHub
                </a>
                <a href={PERSONAL_INFO.portfolio} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <Globe className="w-3 h-3" /> Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs uppercase font-mono font-bold text-accent-400 tracking-wider mb-2">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Technical Skills Overview */}
          <div>
            <h3 className="text-xs uppercase font-mono font-bold text-accent-400 tracking-wider mb-3">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_GROUPS.map((group) => (
                <div key={group.category} className="p-3 bg-charcoal-900 border border-charcoal-750 rounded-lg">
                  <span className="font-bold text-white block mb-1 font-mono">{group.category}:</span>
                  <span className="text-slate-400 leading-relaxed font-mono text-[11px]">
                    {group.items.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-xs uppercase font-mono font-bold text-accent-400 tracking-wider mb-4">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {WORK_EXPERIENCES.map((exp) => (
                <div key={exp.id} className="border-l-2 border-charcoal-750 pl-4 space-y-1.5">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-white">{exp.role}</h4>
                      <span className="text-xs text-accent-400 font-mono font-semibold">{exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Independent Projects */}
          <div>
            <h3 className="text-xs uppercase font-mono font-bold text-accent-400 tracking-wider mb-3">
              Independent Projects
            </h3>
            {INDEPENDENT_PROJECTS.map((proj, idx) => (
              <div key={idx} className="border-l-2 border-charcoal-750 pl-4 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">{proj.title}</h4>
                  <span className="text-xs font-mono text-accent-400">{proj.role}</span>
                </div>
                <p className="text-xs text-slate-300">{proj.description}</p>
                <div className="text-[11px] font-mono text-slate-400 pt-1">
                  Stack: {proj.techStack.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-charcoal-750">
            <div>
              <h3 className="text-xs uppercase font-mono font-bold text-accent-400 tracking-wider mb-2">
                Education
              </h3>
              {EDUCATIONS.map((edu, idx) => (
                <div key={idx} className="mb-2">
                  <div className="text-xs font-bold text-white">{edu.degree}</div>
                  <div className="text-[11px] text-slate-400">{edu.institution} ({edu.period})</div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xs uppercase font-mono font-bold text-accent-400 tracking-wider mb-2">
                Certifications
              </h3>
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="mb-2">
                  <div className="text-xs font-bold text-white">{cert.title}</div>
                  <div className="text-[11px] text-slate-400">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
