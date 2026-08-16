import React from 'react';
import { CASE_STUDIES } from '../data/projectsData';
import { FolderGit2, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { resolveAsset } from '../utils/assets';

interface ProjectsShowcaseProps {
  onSelectProject: (route: string) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onSelectProject }) => {
  const handleOpenCaseStudy = (route: string, title: string) => {
    trackEvent('case_study_click', { route, title });
    onSelectProject(route);
  };

  return (
    <section id="projects" className="py-20 border-b border-charcoal-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-accent-400 uppercase tracking-wider">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Production Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Case Studies & Work
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Breakdown of architecture, actual screens, hard challenges solved, and production outcomes across 50M+ users.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500">
            3 Deep Case Studies with Real App Screens
          </div>
        </div>

        {/* Projects Showcase Cards with Real Thumbnails */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: GCash Super App (7 Columns) */}
          <div className="lg:col-span-7 dev-card dev-card-hover p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="tech-tag bg-accent-950/60 text-accent-300 border-accent-600/30">
                  FinTech Ecosystem
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Perennial Systems • 2024 - Present
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  GCash: GTourist, Digital Tax Refund & Payment Flows
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Led Android feature development for GTourist, Digital Tax Refund, and Request Payment modules. Migrated legacy MVP presenter code to Kotlin MVVM and Jetpack Compose, reducing tech debt by 30% and building native-web JavaScript Bridge plugins.
                </p>
              </div>

              {/* Real App Screenshot Preview Row */}
              <div className="grid grid-cols-3 gap-2.5 pt-2">
                {CASE_STUDIES[0].screenshots.slice(0, 3).map((screen, idx) => (
                  <div key={idx} className="aspect-[9/16] bg-charcoal-900 rounded-lg overflow-hidden border border-charcoal-750 p-1">
                    <img
                      src={resolveAsset(screen.url)}
                      alt={screen.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                <div className="p-3 bg-charcoal-900 border border-charcoal-700 rounded-xl">
                  <div className="text-base font-mono font-bold text-accent-400">-30%</div>
                  <div className="text-[11px] text-slate-400">Tech Debt Reduction</div>
                </div>
                <div className="p-3 bg-charcoal-900 border border-charcoal-700 rounded-xl">
                  <div className="text-base font-mono font-bold text-white">100%</div>
                  <div className="text-[11px] text-slate-400">On-Time Sprints</div>
                </div>
                <div className="p-3 bg-charcoal-900 border border-charcoal-700 rounded-xl col-span-2 sm:col-span-1">
                  <div className="text-base font-mono font-bold text-white">Millions</div>
                  <div className="text-[11px] text-slate-400">Daily Active Users</div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Kotlin', 'Jetpack Compose', 'MVVM Clean Arch', 'StateFlow', 'JavaScript Bridge'].map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-charcoal-700 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                /projects/gcash
              </span>
              <button
                onClick={() => handleOpenCaseStudy('/projects/gcash', 'GCash Super App')}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-accent-400 hover:text-accent-300 transition-colors"
              >
                <span>Read Full Case Study & All Screens</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: ICICI iMobile (5 Columns) */}
          <div className="lg:col-span-5 dev-card dev-card-hover p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="tech-tag">
                  Banking Platform
                </span>
                <span className="text-xs font-mono text-slate-400">
                  TCS • 2023 - 2024
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  ICICI iMobile: DFF Design System for 50M+ Users
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Engineered and published reusable Design Framework Foundation (DFF) Maven packages used across 15+ engineering pods for 400+ banking services.
                </p>
              </div>

              {/* Real App Screenshot Preview Row */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {CASE_STUDIES[1].screenshots.slice(0, 2).map((screen, idx) => (
                  <div key={idx} className="aspect-[9/16] bg-charcoal-900 rounded-lg overflow-hidden border border-charcoal-750 p-1">
                    <img
                      src={resolveAsset(screen.url)}
                      alt={screen.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <div className="p-3 bg-charcoal-900 border border-charcoal-700 rounded-xl">
                  <div className="text-base font-mono font-bold text-accent-400">+40%</div>
                  <div className="text-[11px] text-slate-400">UI Dev Speedup</div>
                </div>
                <div className="p-3 bg-charcoal-900 border border-charcoal-700 rounded-xl">
                  <div className="text-base font-mono font-bold text-white">50M+</div>
                  <div className="text-[11px] text-slate-400">Active Customers</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Multi-Module Gradle', 'Maven AAR', 'RoomDB', 'GitLab CI/CD'].map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-charcoal-700 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                /projects/icici-imobile
              </span>
              <button
                onClick={() => handleOpenCaseStudy('/projects/icici-imobile', 'ICICI iMobile')}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-accent-400 hover:text-accent-300 transition-colors"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: EnterCard (re:member) (Full 12 Columns) */}
          <div className="lg:col-span-12 dev-card dev-card-hover p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="tech-tag">
                  Credit Card Platform
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Capgemini • 2021 - 2023 • 500,000+ Active Cardholders (Nordics)
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                EnterCard (re:member): Geofenced Location Offers & FigmaToken Sync
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Led Android pod responsible for Scandinavian credit card operations across Sweden, Norway, and Denmark. Refactored Java/MVP to Kotlin/MVVM (boosting launch speed by 20%), created debounced geofencing location algorithms to eliminate battery drain, and automated FigmaTokens design sync.
              </p>

              {/* Real App Screenshot Preview Row */}
              <div className="grid grid-cols-4 gap-2.5 pt-1 max-w-lg">
                {CASE_STUDIES[2].screenshots.map((screen, idx) => (
                  <div key={idx} className="aspect-[9/16] bg-charcoal-900 rounded-lg overflow-hidden border border-charcoal-750 p-1">
                    <img
                      src={resolveAsset(screen.url)}
                      alt={screen.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Kotlin Migration', 'Google Maps SDK', 'Geofencing', 'JavaScript Bridge', 'Figma Tokens'].map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-start md:items-end gap-3">
              <div className="text-left md:text-right">
                <span className="text-xl font-mono font-bold text-accent-400 block">+20%</span>
                <span className="text-[11px] font-mono text-slate-400">Cold App Launch Speed</span>
              </div>

              <button
                onClick={() => handleOpenCaseStudy('/projects/re-member', 'EnterCard (re:member)')}
                className="px-4 py-2 rounded-lg bg-charcoal-800 hover:bg-charcoal-750 text-accent-400 border border-charcoal-700 font-mono text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <span>Inspect Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
