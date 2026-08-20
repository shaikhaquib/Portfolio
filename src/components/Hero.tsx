import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { CASE_STUDIES } from '../data/projectsData';
import { ArrowRight, Download, MessageCircle, ShieldCheck, Smartphone, Layers, Globe } from 'lucide-react';
import { trackResumeDownload, trackWhatsAppClick } from '../utils/analytics';
import { resolveAsset, handleAssetError } from '../utils/assets';

interface HeroProps {
  onNavigateToProject: (route: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToProject }) => {
  const whatsappUrl = `https://wa.me/918425918611?text=${encodeURIComponent(
    'Hi Aquib, I found your portfolio and would like to connect'
  )}`;

  const handleDownloadCV = () => {
    trackResumeDownload('hero_cta');
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 border-b border-charcoal-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Senior Developer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Profile & Summary */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Developer Meta Header */}
            <div className="flex items-center gap-3.5">
              <div className="w-16 h-16 rounded-xl border border-charcoal-700 bg-charcoal-900 overflow-hidden shrink-0">
                <img
                  src={resolveAsset(PERSONAL_INFO.profileImageUrl)}
                  alt={PERSONAL_INFO.name}
                  onError={(e) => handleAssetError(e, PERSONAL_INFO.profileImageUrl)}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-accent-400">
                    Senior Android Developer
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  <span className="text-xs font-mono text-slate-400">8+ Years</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <div className="text-xs font-mono text-slate-400">
                  Mumbai, India • High-Scale FinTech & Mobile Architecture
                </div>
              </div>
            </div>

            {/* Core Summary */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
                Building scalable Android applications serving 50M+ users across banking, payments, and enterprise domains.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Specializing in <span className="text-white font-medium">Kotlin</span>, <span className="text-white font-medium">Jetpack Compose</span>, <span className="text-white font-medium">Clean Architecture</span>, <span className="text-white font-medium">JavaScript Bridge</span> hybrid flows, and <span className="text-white font-medium">reusable design systems</span>. Led developer pods on <span className="text-white font-medium">ICICI iMobile (50M+ users)</span>, Southeast Asia’s <span className="text-white font-medium">GCash Super App</span>, and Scandinavian credit card hub <span className="text-white font-medium">EnterCard (re:member)</span>.
              </p>
            </div>

            {/* Direct Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-4 py-2.5 rounded-lg bg-accent-600 hover:bg-accent-500 text-white font-mono text-xs font-bold transition-colors flex items-center gap-2"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={resolveAsset(PERSONAL_INFO.resumePdfUrl)}
                download="AQUIB-SHAIKH-RESUME.pdf"
                onClick={handleDownloadCV}
                className="px-4 py-2.5 rounded-lg bg-charcoal-850 hover:bg-charcoal-800 text-slate-200 border border-charcoal-700 font-mono text-xs font-medium transition-colors flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-slate-400" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('hero')}
                className="px-4 py-2.5 rounded-lg bg-charcoal-900 hover:bg-charcoal-850 text-accent-400 border border-charcoal-750 font-mono text-xs transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Chat</span>
              </a>
            </div>

            {/* Metrics Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-charcoal-800">
              {PERSONAL_INFO.metrics.map((metric, idx) => (
                <div key={idx} className="dev-card p-3">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-accent-400">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Platform & Engineering Leadership Overview */}
          <div className="lg:col-span-5">
            <div className="dev-card overflow-hidden space-y-4 p-5 sm:p-6 bg-charcoal-900/60 border-charcoal-750">
              
              <div className="flex items-center justify-between border-b border-charcoal-750 pb-3">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-accent-400" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Core Application Domains
                  </span>
                </div>
                <span className="text-[11px] font-mono text-accent-400">Production Impact</span>
              </div>

              {/* 3 Domain Feature Highlights */}
              <div className="space-y-3">
                
                {/* GCash */}
                <div
                  onClick={() => onNavigateToProject('/projects/gcash')}
                  className="p-3.5 bg-charcoal-950/80 border border-charcoal-750 hover:border-accent-600/40 rounded-xl transition-colors cursor-pointer group flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white group-hover:text-accent-400 transition-colors">
                        GCash Super App
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-charcoal-800 text-accent-300">
                        FinTech
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      GTourist onboarding, Digital Tax Refund, and multi-source PayQR cashier checkout.
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-accent-400 transition-colors shrink-0 mt-1" />
                </div>

                {/* ICICI */}
                <div
                  onClick={() => onNavigateToProject('/projects/icici-imobile')}
                  className="p-3.5 bg-charcoal-950/80 border border-charcoal-750 hover:border-accent-600/40 rounded-xl transition-colors cursor-pointer group flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white group-hover:text-accent-400 transition-colors">
                        ICICI iMobile Banking
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-charcoal-800 text-accent-300">
                        50M+ Users
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      Reusable DFF Maven design system library used across 15+ engineering pods for 400+ services.
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-accent-400 transition-colors shrink-0 mt-1" />
                </div>

                {/* EnterCard */}
                <div
                  onClick={() => onNavigateToProject('/projects/re-member')}
                  className="p-3.5 bg-charcoal-950/80 border border-charcoal-750 hover:border-accent-600/40 rounded-xl transition-colors cursor-pointer group flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white group-hover:text-accent-400 transition-colors">
                        EnterCard (re:member)
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-charcoal-800 text-accent-300">
                        Nordics
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      Scandinavian credit card platform with Swedish BankID login and Swish invoice payments.
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-accent-400 transition-colors shrink-0 mt-1" />
                </div>

              </div>

              {/* Stability Badge */}
              <div className="pt-2 border-t border-charcoal-750 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-accent-400" />
                  <span>Production Stability</span>
                </span>
                <span className="text-accent-400 font-bold">99.9% Crash-Free</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
