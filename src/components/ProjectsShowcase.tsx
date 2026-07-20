import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/projectsData';
import { FolderGit2, Sparkles, Terminal, CheckCircle2, ChevronRight, X, ExternalLink, Code2, Users, ShieldAlert } from 'lucide-react';

export const ProjectsShowcase: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-obsidian-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            High-Impact Mobile & <span className="text-gradient-emerald">AI Engineering</span> Projects
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            Detailed breakdown of architectural decisions, scaling challenges, and measurable results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between transition-all hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 group"
            >
              {/* Card Banner / Header */}
              <div className={`p-6 sm:p-8 bg-gradient-to-br ${project.imageGradient} border-b border-slate-800/80`}>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-300 bg-obsidian-950/80 px-2.5 py-1 rounded-lg border border-slate-800">
                    {project.company}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300 font-medium mt-1">
                  {project.subtitle}
                </p>

                {/* Impact Metric & Scale */}
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono">
                  <div className="px-2.5 py-1 rounded-md bg-obsidian-950/90 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{project.impactMetric}</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-obsidian-950/90 text-cyber-400 border border-cyber-500/30 flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{project.userScale}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Architecture Tags */}
                  <div className="mt-4">
                    <span className="text-xs text-slate-400 font-mono block mb-2">Architecture Highlights:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.architecture.map((arch) => (
                        <span key={arch} className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/80 text-[11px] text-slate-200">
                          {arch}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[11px] font-mono text-slate-400">
                        #{tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 hover:text-emerald-300 text-xs font-bold transition-all flex items-center gap-1.5 border border-slate-700"
                  >
                    <span>Inspect Specs</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Code & Specs Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/80 backdrop-blur-md">
          <div className="glass-panel w-full max-w-3xl rounded-3xl border border-slate-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 bg-obsidian-900 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  {activeModalProject.category} • {activeModalProject.company}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 space-y-6 overflow-y-auto">
              
              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30">
                  <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Engineering Challenge</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeModalProject.challenges}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Architectural Solution</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeModalProject.solution}
                  </p>
                </div>
              </div>

              {/* Key Contributions */}
              <div>
                <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  <span>Key Engineering Contributions</span>
                </h4>
                <div className="space-y-2">
                  {activeModalProject.keyContributions.map((contrib, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{contrib}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Snippet Viewer if available */}
              {activeModalProject.codeSnippet && (
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{activeModalProject.codeSnippet.filename}</span>
                    </span>
                    <span className="uppercase">{activeModalProject.codeSnippet.language}</span>
                  </div>
                  <pre className="p-4 rounded-2xl bg-obsidian-950 border border-slate-800 text-xs font-mono text-slate-200 overflow-x-auto">
                    <code>{activeModalProject.codeSnippet.code}</code>
                  </pre>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-obsidian-900 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2 rounded-xl bg-emerald-500 text-obsidian-950 text-xs font-bold"
              >
                Close Specs
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
