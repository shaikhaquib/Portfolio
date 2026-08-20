import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { ArrowUp, MessageCircle, Github, Linkedin, Mail, Activity } from 'lucide-react';
import { trackWhatsAppClick, trackOutboundClick } from '../utils/analytics';
import { AnalyticsReportModal } from './AnalyticsReportModal';

interface FooterProps {
  onNavigateToProject?: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToProject }) => {
  const [isReportOpen, setIsReportOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/918425918611?text=${encodeURIComponent(
    'Hi Aquib, I found your portfolio and would like to connect'
  )}`;

  return (
    <>
      <footer className="bg-charcoal-950 border-t border-charcoal-800 py-12 text-slate-400 text-xs no-print">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Brand */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-bold text-white text-sm">
                <span>Aquib Rashid Shaikh</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-charcoal-800 text-accent-400 border border-charcoal-700">
                  Senior Android Developer
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-mono">
                8+ Years Experience • Banking, FinTech & High-Scale Systems
              </p>
            </div>

            {/* Social & WhatsApp Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('footer')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-charcoal-900 hover:bg-charcoal-850 text-accent-400 border border-charcoal-750 transition-colors font-mono text-[11px]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Chat</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackOutboundClick('linkedin')}
                className="p-2 rounded-lg bg-charcoal-900 hover:bg-charcoal-850 text-slate-300 hover:text-white border border-charcoal-750 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackOutboundClick('github')}
                className="p-2 rounded-lg bg-charcoal-900 hover:bg-charcoal-850 text-slate-300 hover:text-white border border-charcoal-750 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-charcoal-850 hover:bg-charcoal-800 text-slate-300 hover:text-white border border-charcoal-700 transition-colors"
                title="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Links Navigation Row */}
          <div className="pt-6 border-t border-charcoal-900 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
            <div className="flex flex-wrap items-center gap-4">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-white transition-colors">Case Studies</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#resume" className="hover:text-white transition-colors">Resume</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Recommendations</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-1.5 text-slate-500">
              {/* Interactive Secret Copyright Trigger for Telemetry Dashboard */}
              <button
                type="button"
                onClick={() => setIsReportOpen(true)}
                className="hover:text-accent-400 focus:outline-none transition-colors cursor-pointer select-none font-bold"
                title="Visitor Telemetry Report"
              >
                ©
              </button>

              {/* Invisible Zero-Config Hits Tracker attached directly to © */}
              <img
                src="https://hits.sh/shaikhaquib.github.io/Portfolio.svg?color=0b0c0e&labelColor=0b0c0e"
                alt=""
                className="w-0 h-0 opacity-0 absolute pointer-events-none"
                loading="lazy"
              />

              <span>{new Date().getFullYear()} Aquib Rashid Shaikh. All rights reserved.</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Analytics Telemetry Report Modal */}
      <AnalyticsReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
      />
    </>
  );
};
