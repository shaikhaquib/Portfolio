import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { AIEngineering } from './components/AIEngineering';
import { AIChatAssistant } from './components/AIChatAssistant';
import { SkillsDashboard } from './components/SkillsDashboard';
import { InteractiveResume } from './components/InteractiveResume';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [aiChatOpen, setAiChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 selection:bg-emerald-500 selection:text-obsidian-950">
      {/* Top Fixed Header */}
      <Navbar onOpenAIChat={() => setAiChatOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero onOpenAIChat={() => setAiChatOpen(true)} />
        <About />
        <ExperienceTimeline />
        <ProjectsShowcase />
        <AIEngineering />
        <SkillsDashboard />
        <InteractiveResume />
        <BlogSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive AI Drawer */}
      <AIChatAssistant isOpen={aiChatOpen} onClose={() => setAiChatOpen(false)} />
    </div>
  );
};

export default App;
