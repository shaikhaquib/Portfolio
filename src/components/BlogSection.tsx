import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogPostsData';
import { BookOpen, Clock, ChevronRight, X } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <section id="articles" className="py-20 border-b border-charcoal-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-accent-400 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Publications & Notes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Engineering Insights & Articles
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Technical reflections on Jetpack Compose migrations, on-device AI integration, and Android memory optimization.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="dev-card dev-card-hover p-6 sm:p-8 flex flex-col justify-between space-y-4 cursor-pointer"
              onClick={() => setActiveArticle(post)}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="tech-tag text-accent-300">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tech-tag text-[10px]">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-charcoal-750 flex items-center justify-between text-xs font-mono font-bold text-accent-400">
                <span>Read Article</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="dev-card w-full max-w-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col bg-charcoal-950 border-charcoal-700">
            
            {/* Header */}
            <div className="p-5 bg-charcoal-900 border-b border-charcoal-750 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-accent-400 uppercase">
                  {activeArticle.category} • {activeArticle.readTime}
                </span>
                <h3 className="text-base font-bold text-white mt-0.5">
                  {activeArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1.5 rounded-lg bg-charcoal-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-4 overflow-y-auto font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeArticle.content.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 bg-charcoal-900 border-t border-charcoal-750 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 rounded-lg bg-accent-600 text-white text-xs font-mono font-bold"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
