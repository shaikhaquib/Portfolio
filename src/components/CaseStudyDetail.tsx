import React, { useState, useEffect } from 'react';
import { Project, ProjectScreenshot } from '../data/projectsData';
import { ArrowLeft, CheckCircle2, ShieldAlert, Terminal, Building2, ChevronRight, X, ZoomIn } from 'lucide-react';
import { trackPageView, trackEvent } from '../utils/analytics';
import { resolveAsset } from '../utils/assets';

interface CaseStudyDetailProps {
  project: Project;
  onBack: () => void;
  onSelectOtherProject: (route: string) => void;
}

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({
  project,
  onBack,
  onSelectOtherProject,
}) => {
  const [activeScreenshot, setActiveScreenshot] = useState<ProjectScreenshot | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    trackPageView(project.route);
  }, [project]);

  return (
    <div className="min-h-screen bg-charcoal-950 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Navigation Bar */}
        <div className="flex items-center justify-between border-b border-charcoal-800 pb-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-accent-400" />
            <span>Back to All Projects & Experience</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Case Study</span>
            <span>/</span>
            <span className="text-accent-400 font-bold">{project.slug}</span>
          </div>
        </div>

        {/* Header Block */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="tech-tag bg-accent-950/60 text-accent-300 border-accent-600/30">
              {project.category}
            </span>
            <span className="tech-tag">
              {project.company}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.period}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>

          {/* Metadata Grid */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="dev-card p-3">
              <span className="text-[11px] font-mono text-slate-400 block">Role</span>
              <span className="text-xs font-bold text-white mt-0.5 block">{project.role}</span>
            </div>
            <div className="dev-card p-3">
              <span className="text-[11px] font-mono text-slate-400 block">Scale</span>
              <span className="text-xs font-bold text-white mt-0.5 block">{project.userScale}</span>
            </div>
            <div className="dev-card p-3">
              <span className="text-[11px] font-mono text-slate-400 block">Impact</span>
              <span className="text-xs font-bold text-accent-400 font-mono mt-0.5 block">{project.impactMetric}</span>
            </div>
            <div className="dev-card p-3">
              <span className="text-[11px] font-mono text-slate-400 block">Team Scope</span>
              <span className="text-xs font-bold text-white mt-0.5 block truncate" title={project.teamSize}>
                {project.teamSize?.split(';')[0] || 'Pod Lead'}
              </span>
            </div>
          </div>
        </div>

        {/* Quantified Impact Numbers */}
        <div className="dev-card p-6 space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
            Key Quantified Outcomes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.impactStats.map((stat, idx) => (
              <div key={idx} className="p-3.5 bg-charcoal-900 border border-charcoal-700 rounded-xl space-y-1">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-accent-400">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-white">{stat.label}</div>
                <div className="text-[11px] text-slate-400 leading-snug">{stat.context}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Production Screenshots Gallery */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">
                Application Screenshots & Visual Walkthrough
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Click any screen to view high-resolution details.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {project.screenshots.length} Screens
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.screenshots.map((screen, idx) => (
              <div
                key={idx}
                onClick={() => {
                  trackEvent('view_screenshot', { project: project.slug, title: screen.title });
                  setActiveScreenshot(screen);
                }}
                className="dev-card dev-card-hover overflow-hidden cursor-pointer group flex flex-col justify-between"
              >
                <div className="aspect-[9/16] bg-charcoal-900 overflow-hidden relative border-b border-charcoal-750 flex items-center justify-center p-2">
                  <img
                    src={resolveAsset(screen.url)}
                    alt={screen.title}
                    className="w-full h-full object-contain object-center rounded group-hover:scale-105 transition-transform duration-200"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2 rounded-full bg-charcoal-900 text-white border border-charcoal-700">
                      <ZoomIn className="w-4 h-4 text-accent-400" />
                    </span>
                  </div>
                </div>

                <div className="p-3 space-y-1">
                  <h4 className="text-xs font-bold text-white line-clamp-1 group-hover:text-accent-400 transition-colors">
                    {screen.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {screen.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Problem Statement & Role Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Problem */}
          <div className="md:col-span-6 dev-card p-6 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-accent-400" />
              <span>The Engineering Problem</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Role */}
          <div className="md:col-span-6 dev-card p-6 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Building2 className="w-4 h-4 text-accent-400" />
              <span>My Role & Ownership</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.myRole}
            </p>
          </div>
        </div>

        {/* Technical Architecture & Decisions */}
        <div className="dev-card p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-white">
            Architecture Decisions & Trade-Offs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            {/* Architecture Patterns */}
            <div className="space-y-3">
              <h3 className="font-mono text-accent-400 font-bold uppercase tracking-wider">
                Architecture Patterns
              </h3>
              <ul className="space-y-2 text-slate-300">
                {project.technicalApproach.architecture.map((arch, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-400 shrink-0 mt-0.5" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Decisions */}
            <div className="space-y-3">
              <h3 className="font-mono text-accent-400 font-bold uppercase tracking-wider">
                Key Decisions Made
              </h3>
              <ul className="space-y-2 text-slate-300">
                {project.technicalApproach.decisions.map((dec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-400 shrink-0 mt-0.5" />
                    <span>{dec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trade-offs */}
            <div className="space-y-3">
              <h3 className="font-mono text-accent-400 font-bold uppercase tracking-wider">
                Trade-offs & Constraints
              </h3>
              <ul className="space-y-2 text-slate-300">
                {project.technicalApproach.tradeOffs.map((trade, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-400 shrink-0 mt-0.5" />
                    <span>{trade}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="pt-4 border-t border-charcoal-700 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2">Tech Stack:</span>
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Deep Dive: Hard Challenge & Solution */}
        <div className="dev-card p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 border-b border-charcoal-700 pb-4">
            <Terminal className="w-5 h-5 text-accent-400" />
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase">Technical Challenge & Solution</span>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                {project.challengeAndSolution.challengeTitle}
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="p-4 bg-charcoal-900 border border-charcoal-700 rounded-xl space-y-1.5">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                The Engineering Bottleneck
              </span>
              <p>{project.challengeAndSolution.challengeDetails}</p>
            </div>

            <div className="p-4 bg-charcoal-900 border border-accent-600/30 rounded-xl space-y-1.5">
              <span className="text-xs font-mono font-bold text-accent-400 uppercase tracking-wider block">
                Implemented Solution: {project.challengeAndSolution.solutionTitle}
              </span>
              <p>{project.challengeAndSolution.solutionDetails}</p>
            </div>
          </div>
        </div>

        {/* Other Case Studies Switcher */}
        <div className="pt-8 border-t border-charcoal-800 space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
            Explore Other Case Studies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.slug !== 'gcash' && (
              <button
                onClick={() => onSelectOtherProject('/projects/gcash')}
                className="dev-card dev-card-hover p-4 text-left flex items-center justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-accent-400 block">GCash Super App</span>
                  <span className="text-xs font-bold text-white">GTourist & Tax Refund Architecture</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            )}
            {project.slug !== 'icici-imobile' && (
              <button
                onClick={() => onSelectOtherProject('/projects/icici-imobile')}
                className="dev-card dev-card-hover p-4 text-left flex items-center justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-accent-400 block">ICICI iMobile Banking</span>
                  <span className="text-xs font-bold text-white">DFF Design System for 50M+ Users</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            )}
            {project.slug !== 're-member' && (
              <button
                onClick={() => onSelectOtherProject('/projects/re-member')}
                className="dev-card dev-card-hover p-4 text-left flex items-center justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-accent-400 block">EnterCard (re:member)</span>
                  <span className="text-xs font-bold text-white">Geofencing & FigmaToken Pipelines</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Screenshot Lightbox Modal */}
      {activeScreenshot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85"
          onClick={() => setActiveScreenshot(null)}
        >
          <div
            className="dev-card w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col bg-charcoal-950 border-charcoal-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-charcoal-900 border-b border-charcoal-750 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white font-mono">{activeScreenshot.title}</h3>
                <p className="text-xs text-slate-400">{activeScreenshot.caption}</p>
              </div>
              <button
                onClick={() => setActiveScreenshot(null)}
                className="p-1.5 rounded-lg bg-charcoal-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-charcoal-950 flex items-center justify-center overflow-auto max-h-[75vh]">
              <img
                src={resolveAsset(activeScreenshot.url)}
                alt={activeScreenshot.title}
                className="max-h-[70vh] object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
