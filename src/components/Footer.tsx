import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { Smartphone, ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian-950 border-t border-slate-800/80 py-12 text-slate-400 text-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-white text-sm block">Aquib Rashid Shaikh</span>
            <span className="text-[11px] text-slate-500 font-mono">Senior Android Lead & AI Mobile Architect</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
          <a href="#about" className="hover:text-emerald-400">About</a>
          <a href="#experience" className="hover:text-emerald-400">Experience</a>
          <a href="#projects" className="hover:text-emerald-400">Projects</a>
          <a href="#ai-engineering" className="hover:text-emerald-400">AI Workflows</a>
          <a href="#skills" className="hover:text-emerald-400">Skills</a>
          <a href="#contact" className="hover:text-emerald-400">Contact</a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <span>© {new Date().getFullYear()} Aquib Rashid Shaikh. Built with React, TypeScript & AI-driven workflows.</span>
        <span>Hosted on GitHub Pages</span>
      </div>
    </footer>
  );
};
