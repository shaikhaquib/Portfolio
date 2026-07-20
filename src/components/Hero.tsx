import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { Smartphone, Download, Sparkles, Shield, Cpu, Layers, ChevronRight, CheckCircle2, Terminal } from 'lucide-react';

interface HeroProps {
  onOpenAIChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAIChat }) => {
  const [activeAppTab, setActiveAppTab] = useState<'gcash' | 'icici' | 'vision'>('gcash');

  const appPreviews = {
    gcash: {
      name: 'GCash Super App',
      role: 'Senior Android Lead',
      tech: 'GTourist • Digital Tax • Compose',
      stats: '30% Tech Debt Reduced',
      screenTitle: 'GCash App Ecosystem',
      status: 'Verified Refund Approved',
      snippet: 'val gcashState = StateFlow<GCashUiState>()',
      colorClass: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-400'
    },
    icici: {
      name: 'ICICI iMobile Banking',
      role: 'I.T. Analyst (TCS)',
      tech: 'Design System DFF • Maven',
      stats: '50M+ Active Users',
      screenTitle: '400+ Banking Services',
      status: '99.9% Crash-Free Production',
      snippet: 'dffDesignLibrary.publishMaven()',
      colorClass: 'from-cyber-500/20 to-blue-500/20 border-cyber-500/40 text-cyber-400'
    },
    vision: {
      name: 'Vision Sense (TFLite)',
      role: 'Sole Android Dev',
      tech: 'TensorFlow Lite • CameraX',
      stats: '>50% Crash Rate Cut',
      screenTitle: 'On-Device ML Inference',
      status: 'Real-Time Edge Detection',
      snippet: 'tfliteInterpreter.detect(bitmap)',
      colorClass: 'from-purple-500/20 to-pink-500/20 border-purple-500/40 text-purple-400'
    }
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-emerald-600/15 via-cyber-500/10 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-kotlin-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Profile Avatar + Huge Name & Headline + CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Senior Android Lead • 8+ Years Experience</span>
            </div>

            {/* Profile Avatar + Prominent Name Header */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-1">
              
              {/* Profile Image Frame */}
              <div className="relative group shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-emerald-400 via-cyber-400 to-purple-500 p-[2.5px] shadow-xl shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-[13.5px] bg-obsidian-950 overflow-hidden relative">
                    <img
                      src={PERSONAL_INFO.profileImageUrl}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                {/* Android Badge on Avatar */}
                <div className="absolute -bottom-1.5 -right-1.5 bg-obsidian-950 p-1.5 rounded-xl border border-emerald-500/50 shadow-md">
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              {/* Un-missable Prominent Display Name */}
              <div className="text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-base sm:text-lg font-bold text-gradient-emerald mt-2">
                  {PERSONAL_INFO.title}
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 mt-1 text-xs font-mono text-slate-400">
                  <span>Mumbai, India</span>
                  <span>•</span>
                  <span className="text-emerald-400">Kotlin & Jetpack Compose Expert</span>
                </div>
              </div>

            </div>

            {/* Headline Thesis */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Building Scalable Android Apps with <span className="text-gradient-kotlin">AI-Driven Engineering</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Spearheading high-impact mobile features for <span className="text-emerald-400 font-semibold">GCash Super App</span> (GTourist, Digital Tax), <span className="text-white font-semibold">ICICI iMobile (50M+ users)</span>, and on-device <span className="text-cyber-400 font-semibold">TensorFlow Lite AI</span> with modern AI workflows (Cursor, Claude, TFLite).
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-2 group"
              >
                <span>View Featured Projects</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenAIChat}
                className="px-6 py-3.5 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 border border-emerald-500/40 text-emerald-300 text-sm font-semibold shadow-md flex items-center gap-2 transition-all hover:border-emerald-500/70"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Ask AI Resume Assistant</span>
              </button>

              <a
                href={PERSONAL_INFO.resumePdfUrl}
                download="AQUIB-SHAIKH-RESUME.pdf"
                className="px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Key Metrics Counter Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PERSONAL_INFO.metrics.map((metric, idx) => (
                <div key={idx} className="bg-obsidian-900/60 p-3 rounded-xl border border-slate-800/60 text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight font-mono text-emerald-400">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Android Device Frame Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* App Tab Selectors */}
            <div className="flex items-center gap-2 p-1.5 bg-obsidian-900/90 border border-slate-800 rounded-xl mb-4 text-xs font-semibold shadow-md">
              <button
                onClick={() => setActiveAppTab('gcash')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeAppTab === 'gcash' ? 'bg-emerald-500 text-obsidian-950 font-bold shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                GCash App
              </button>
              <button
                onClick={() => setActiveAppTab('icici')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeAppTab === 'icici' ? 'bg-cyber-500 text-obsidian-950 font-bold shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                ICICI (50M+)
              </button>
              <button
                onClick={() => setActiveAppTab('vision')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeAppTab === 'vision' ? 'bg-purple-500 text-white font-bold shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                TFLite ML
              </button>
            </div>

            {/* Android Device Mockup */}
            <div className="relative w-[280px] sm:w-[310px] h-[560px] bg-obsidian-950 rounded-[44px] p-3 border-4 border-slate-700/80 shadow-2xl shadow-emerald-500/10 flex flex-col">
              
              {/* Phone Speaker & Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-full flex items-center justify-center z-20">
                <div className="w-3 h-3 rounded-full bg-slate-950 border border-slate-800 mr-2" />
                <div className="w-10 h-1.5 rounded-full bg-slate-800" />
              </div>

              {/* Inner Screen */}
              <div className="w-full h-full bg-slate-950 rounded-[34px] overflow-hidden flex flex-col pt-8 pb-4 px-4 border border-slate-800/80 relative">
                
                {/* Header Status Bar */}
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-b border-slate-800 pb-2 mb-3">
                  <span>Android 15</span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>5G Active</span>
                  </span>
                </div>

                {/* App Screen Content */}
                <div className="flex-1 flex flex-col justify-between space-y-3">
                  
                  {/* Top Card */}
                  <div className={`p-3.5 rounded-2xl bg-gradient-to-br border ${appPreviews[activeAppTab].colorClass}`}>
                    <div className="text-[10px] uppercase font-mono tracking-wider font-semibold opacity-80">
                      {appPreviews[activeAppTab].role}
                    </div>
                    <div className="text-base font-extrabold text-white mt-1">
                      {appPreviews[activeAppTab].screenTitle}
                    </div>
                    <div className="text-xs font-semibold mt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{appPreviews[activeAppTab].status}</span>
                    </div>
                  </div>

                  {/* App Stats Pill */}
                  <div className="bg-obsidian-900/80 p-3 rounded-xl border border-slate-800/80">
                    <div className="text-xs text-slate-400">Impact Metric</div>
                    <div className="text-sm font-bold text-white font-mono text-emerald-400 mt-0.5">
                      ⚡ {appPreviews[activeAppTab].stats}
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1">
                      Tech: {appPreviews[activeAppTab].tech}
                    </div>
                  </div>

                  {/* Simulated Code Snippet Preview */}
                  <div className="bg-obsidian-950 p-2.5 rounded-xl border border-slate-800 text-[10px] font-mono text-slate-300 space-y-1">
                    <div className="text-slate-500 flex items-center justify-between">
                      <span>// Kotlin Snippet</span>
                      <Terminal className="w-3 h-3 text-emerald-400" />
                    </div>
                    <div className="text-emerald-400 truncate">
                      {appPreviews[activeAppTab].snippet}
                    </div>
                  </div>

                  {/* Interactive Button inside preview */}
                  <button
                    onClick={onOpenAIChat}
                    className="w-full py-2.5 rounded-xl bg-emerald-500 text-obsidian-950 text-xs font-bold shadow-md hover:bg-emerald-400 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Query Architecture Specs</span>
                  </button>
                </div>

                {/* Home Indicator Bar */}
                <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto mt-3" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
