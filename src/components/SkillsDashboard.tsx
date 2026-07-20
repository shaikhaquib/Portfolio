import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/resumeData';
import { Cpu, Search, Sparkles, Smartphone, Layers, Database, ShieldCheck } from 'lucide-react';

export const SkillsDashboard: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...SKILL_CATEGORIES.map((cat) => cat.name)];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-emerald-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyber-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-cyber-400" />;
      default: return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-obsidian-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Categorized Skills & <span className="text-gradient-emerald">Proficiency Matrix</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            Deep technical capability across modern Android SDK, Clean Architecture, and AI engineering workflows.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-500 text-obsidian-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-obsidian-950 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Kotlin)..."
              className="w-full bg-obsidian-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.filter(cat => activeCategory === 'All' || cat.name === activeCategory).map((cat) => {
            const filteredSkills = cat.skills.filter(s =>
              s.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredSkills.length === 0) return null;

            return (
              <div
                key={cat.name}
                className="glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6"
              >
                {/* Category Title Header */}
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="p-2 rounded-xl bg-obsidian-950 border border-slate-800">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{cat.name}</h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {filteredSkills.length} Core Competencies
                    </span>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {filteredSkills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-slate-200 flex items-center gap-1.5">
                          {skill.name}
                          {skill.badge && (
                            <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                              {skill.badge}
                            </span>
                          )}
                        </span>
                        <span className="font-mono text-slate-400 text-[11px]">{skill.level}%</span>
                      </div>

                      {/* Progress Meter Bar */}
                      <div className="w-full h-1.5 rounded-full bg-obsidian-950 border border-slate-800 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${
                            skill.featured
                              ? 'bg-gradient-to-r from-emerald-500 to-cyber-400'
                              : 'bg-slate-600'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
