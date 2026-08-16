import React from 'react';
import { PERSONAL_INFO, EDUCATIONS, CERTIFICATIONS } from '../data/resumeData';
import { Smartphone, GraduationCap, Award, CheckCircle2, Code2, Layers, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const coreCompetencies = [
    { title: 'Kotlin & Jetpack Compose', desc: 'Modern declarative UI development, state management with StateFlow, custom layouts, and UI performance optimization.' },
    { title: 'High-Scale Banking & Payments', desc: 'Delivered 99.9% crash-free stability across 50M+ users for ICICI iMobile and engineered payment modules for GCash Super App.' },
    { title: 'Hybrid & JavaScript Bridge', desc: 'Building custom native JS Plugin architectures binding WebView components to native Android camera, biometrics, and storage.' },
    { title: 'Location & Adaptive Media', desc: 'Google Maps SDK, geofencing proximity triggers with debouncing, and ExoPlayer HLS adaptive bitrate streaming.' },
  ];

  return (
    <section id="about" className="py-20 border-b border-charcoal-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-accent-400 uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Senior Android Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            About Aquib Rashid Shaikh
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            8+ years building native Android applications, leading developer pods, migrating legacy architectures, and maintaining high-uptime production systems.
          </p>
        </div>

        {/* Narrative & Competencies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Card */}
          <div className="lg:col-span-6 dev-card p-6 sm:p-8 space-y-4">
            <h3 className="text-base font-bold text-white font-mono">
              Engineering Background
            </h3>

            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3">
              <p>
                I am a Senior Android Developer with 8+ years of experience building and maintaining high-scale mobile applications in banking, payments, and enterprise domains.
              </p>
              <p>
                My work includes architecting feature modules for <strong className="text-white">GCash Super App</strong> (GTourist, Digital Tax Refund, Request Payment), publishing the reusable <strong className="text-white">DFF Maven Design Library</strong> across 15+ pods for <strong className="text-white">ICICI iMobile (50M+ users)</strong>, modernizing the Scandinavian credit card app <strong className="text-white">EnterCard (re:member)</strong>, and developing on-device <strong className="text-white">TensorFlow Lite</strong> computer vision tools.
              </p>
              <p>
                I have strong hands-on expertise in Kotlin, Jetpack Compose, Clean Architecture, MVVM, JavaScript Bridge integrations for hybrid flows, Google Maps geofencing, and ExoPlayer video streaming.
              </p>
            </div>

            {/* Quick Summary Tags */}
            <div className="pt-4 border-t border-charcoal-750 grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-charcoal-900 border border-charcoal-700 rounded-lg">
                <span className="text-[11px] font-mono text-slate-400 block">Primary Languages</span>
                <span className="font-bold text-white mt-0.5 block font-mono">Kotlin & Java</span>
              </div>
              <div className="p-3 bg-charcoal-900 border border-charcoal-700 rounded-lg">
                <span className="text-[11px] font-mono text-slate-400 block">Core Architecture</span>
                <span className="font-bold text-white mt-0.5 block font-mono">Clean Arch / MVVM / UDF</span>
              </div>
            </div>
          </div>

          {/* Core Pillars 2x2 */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreCompetencies.map((comp, idx) => (
              <div
                key={idx}
                className="dev-card p-5 space-y-2 flex flex-col justify-between"
              >
                <div className="w-8 h-8 rounded-lg bg-charcoal-900 border border-charcoal-700 flex items-center justify-center text-accent-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-1">{comp.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Academic & Certifications Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Education */}
          <div className="dev-card p-6 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono">
              <GraduationCap className="w-4 h-4 text-accent-400" />
              <span>Education</span>
            </h3>
            <div className="space-y-3">
              {EDUCATIONS.map((edu, idx) => (
                <div key={idx} className="p-3 bg-charcoal-900 border border-charcoal-750 rounded-lg flex items-start justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">{edu.degree}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{edu.institution}</div>
                  </div>
                  <span className="text-[11px] font-mono text-accent-400">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="dev-card p-6 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono">
              <Award className="w-4 h-4 text-accent-400" />
              <span>Certifications</span>
            </h3>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-3 bg-charcoal-900 border border-charcoal-750 rounded-lg flex items-start justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">{cert.title}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Issuer: {cert.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
