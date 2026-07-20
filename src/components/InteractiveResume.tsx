import React from 'react';
import { PERSONAL_INFO, WORK_EXPERIENCES, EDUCATIONS, CERTIFICATIONS, SKILL_CATEGORIES } from '../data/resumeData';
import { FileText, Download, Printer, ExternalLink, Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

export const InteractiveResume: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 no-print">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>Interactive Curriculum Vitae</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">
              Recruiter-Ready <span className="text-gradient-emerald">Resume View</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors flex items-center gap-2"
            >
              <Printer className="w-4 h-4 text-slate-400" />
              <span>Print CV</span>
            </button>

            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="AQUIB-SHAIKH-RESUME.pdf"
              className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Resume White-Paper Container */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 text-slate-200 shadow-2xl space-y-8 bg-obsidian-950/90">
          
          {/* Header Block */}
          <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base font-semibold text-emerald-400 mt-1">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {PERSONAL_INFO.location}
              </p>
            </div>

            {/* Contact Grid */}
            <div className="text-xs space-y-1.5 font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-4 pt-1 text-[11px] text-emerald-400">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <Linkedin className="w-3 h-3" /> LinkedIn
                </a>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <Github className="w-3 h-3" /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs uppercase font-mono font-bold text-emerald-400 tracking-wider mb-2">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Technical Skills Overview */}
          <div>
            <h3 className="text-xs uppercase font-mono font-bold text-emerald-400 tracking-wider mb-3">
              Core Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.name} className="p-3 bg-obsidian-900/60 rounded-xl border border-slate-800">
                  <span className="font-bold text-white block mb-1">{cat.name}:</span>
                  <span className="text-slate-400 leading-relaxed">
                    {cat.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-xs uppercase font-mono font-bold text-emerald-400 tracking-wider mb-4">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {WORK_EXPERIENCES.map((exp) => (
                <div key={exp.id} className="border-l-2 border-slate-800 pl-4 space-y-2">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-white">{exp.role}</h4>
                      <span className="text-xs text-emerald-400 font-semibold">{exp.company}</span>
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

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
            <div>
              <h3 className="text-xs uppercase font-mono font-bold text-emerald-400 tracking-wider mb-3">
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
              <h3 className="text-xs uppercase font-mono font-bold text-emerald-400 tracking-wider mb-3">
                Certifications
              </h3>
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="mb-2">
                  <div className="text-xs font-bold text-white">{cert.title}</div>
                  <div className="text-[11px] text-slate-400">{cert.issuer} ({cert.date})</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
