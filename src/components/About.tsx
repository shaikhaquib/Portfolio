import React from 'react';
import { PERSONAL_INFO, EDUCATIONS, CERTIFICATIONS } from '../data/resumeData';
import { Shield, Smartphone, Cpu, GraduationCap, Award, CheckCircle2, Code2, Layers } from 'lucide-react';

export const About: React.FC = () => {
  const coreCompetencies = [
    { title: 'Kotlin & Jetpack Compose Specialist', desc: 'Expert in modern declarative UIs, state management, custom layouts, and UI performance optimization.' },
    { title: 'High-Traffic FinTech Architect', desc: 'Proven capability delivering 99.9% crash-free banking systems for 50M+ users (ICICI iMobile & GCash).' },
    { title: 'AI-Driven Development Pioneer', desc: 'Integrating AI tools (Cursor, ChatGPT, Claude) to accelerate code migrations, unit testing, and architecture planning.' },
    { title: 'On-Device Computer Vision', desc: 'Deploying TensorFlow Lite models for low-latency offline machine learning inferencing directly on mobile edge devices.' },
  ];

  return (
    <section id="about" className="py-20 bg-obsidian-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Senior Mobile Lead with 8+ Years of <span className="text-gradient-emerald">High-Scale Delivery</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Bridging native Android engineering excellence with cutting-edge AI software engineering workflows.
          </p>
        </div>

        {/* Top Grid: Bio Card & Core Competencies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Card */}
          <div className="lg:col-span-6 glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={PERSONAL_INFO.profileImageUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-14 h-14 rounded-2xl object-cover object-top border-2 border-emerald-500/50 shadow-md"
                />
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-emerald-400" />
                    <span>Engineering Leadership</span>
                  </h3>
                  <span className="text-xs text-emerald-400 font-mono font-semibold">
                    Aquib Rashid Shaikh
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed space-y-3">
                <span>
                  With over 8 years in the Android ecosystem, I have led cross-functional teams delivering high-volume mobile solutions across <strong className="text-white">banking, payments, and enterprise domains</strong>.
                </span>
                <br /><br />
                <span>
                  My experience spans directing Android feature development for <strong className="text-emerald-400">ICICI iMobile (50M+ users)</strong>, building reusable Maven UI libraries that saved 40% dev time, spearheading feature modules for <strong className="text-emerald-400">GCash</strong> (GTourist, Digital Tax Refund, Request Payment), and building on-device <strong className="text-cyber-400">TensorFlow Lite AI apps</strong> from scratch.
                </span>
              </p>
            </div>

            {/* Quick Highlights */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-obsidian-950/60 rounded-xl border border-slate-800">
                <span className="text-slate-400">Primary Stack</span>
                <div className="font-bold text-white mt-1">Kotlin • Jetpack Compose</div>
              </div>
              <div className="p-3 bg-obsidian-950/60 rounded-xl border border-slate-800">
                <span className="text-slate-400">Architecture</span>
                <div className="font-bold text-white mt-1">MVVM • Clean Architecture</div>
              </div>
            </div>
          </div>

          {/* Core Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreCompetencies.map((comp, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1.5">{comp.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Academic & Certifications Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Education */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              <span>Academic Background</span>
            </h3>
            <div className="space-y-3">
              {EDUCATIONS.map((edu, idx) => (
                <div key={idx} className="p-4 bg-obsidian-950/60 rounded-xl border border-slate-800/80 flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{edu.institution}</p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-cyber-400" />
              <span>Agile Certifications</span>
            </h3>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-4 bg-obsidian-950/60 rounded-xl border border-slate-800/80 flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Issuer: {cert.issuer}</p>
                  </div>
                  <span className="text-xs font-mono text-cyber-400 bg-cyber-500/10 px-2 py-1 rounded">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
