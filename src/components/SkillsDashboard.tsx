import React, { useState } from 'react';
import { SKILL_GROUPS } from '../data/resumeData';
import { Cpu, Search } from 'lucide-react';

export const SkillsDashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredGroups = SKILL_GROUPS.map((group) => ({
    ...group,
    items: group.items.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((group) => group.items.length > 0);

  return (
    <section id="skills" className="py-20 border-b border-charcoal-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-accent-400 uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Skills</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Skills & Tooling Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Comprehensive breakdown of languages, Android frameworks, architecture patterns, testing, and CI/CD tools.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Kotlin)..."
              className="w-full bg-charcoal-900 border border-charcoal-700 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-accent-500 font-mono"
            />
          </div>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.category}
              className="dev-card p-5 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3 className="text-xs font-mono font-bold text-accent-400 uppercase tracking-wider border-b border-charcoal-750 pb-2">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded bg-charcoal-900 border border-charcoal-700 text-xs font-mono text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
