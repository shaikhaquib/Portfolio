import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { CaseStudyDetail } from './components/CaseStudyDetail';
import { SkillsDashboard } from './components/SkillsDashboard';
import { InteractiveResume } from './components/InteractiveResume';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CASE_STUDIES } from './data/projectsData';
import { trackPageView } from './utils/analytics';
import { initVisitorTracker, isOwnerMode } from './utils/visitorTracker';
import { BellOff, CheckCircle2 } from 'lucide-react';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [showOwnerToast, setShowOwnerToast] = useState<boolean>(false);

  // Initialize Visitor Telemetry & Routing
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('owner') === 'true' || window.location.hash === '#owner') {
      setShowOwnerToast(true);
      const timer = setTimeout(() => setShowOwnerToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Fire non-blocking visitor alert telemetry
    initVisitorTracker();

    const handleLocationChange = () => {
      let path = window.location.pathname;
      
      // Handle GitHub Pages SPA redirection query parameter if present: /?p=/projects/gcash
      const searchParams = new URLSearchParams(window.location.search);
      const redirectPath = searchParams.get('p');
      if (redirectPath) {
        path = redirectPath;
        window.history.replaceState(null, '', redirectPath);
      }

      // Normalize base path for GitHub Pages subfolder (if any)
      if (path.startsWith('/Portfolio')) {
        path = path.replace('/Portfolio', '') || '/';
      }

      setCurrentPath(path);
      trackPageView(path);
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (route: string) => {
    const base = window.location.pathname.startsWith('/Portfolio') ? '/Portfolio' : '';
    const fullPath = base + route;

    window.history.pushState(null, '', fullPath);
    setCurrentPath(route);
    trackPageView(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = () => {
    const base = window.location.pathname.startsWith('/Portfolio') ? '/Portfolio' : '';
    window.history.pushState(null, '', base + '/');
    setCurrentPath('/');
    trackPageView('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find active project if on a case study route
  const activeCaseStudy = CASE_STUDIES.find(
    (cs) => cs.route === currentPath || `/projects/${cs.slug}` === currentPath
  );

  return (
    <div className="min-h-screen bg-charcoal-950 text-slate-200 selection:bg-accent-600 selection:text-white font-sans antialiased">
      {/* Top Header */}
      <Navbar
        currentRoute={currentPath}
        onNavigateHome={navigateHome}
      />

      {/* Main View Router */}
      <main>
        {activeCaseStudy ? (
          <CaseStudyDetail
            project={activeCaseStudy}
            onBack={navigateHome}
            onSelectOtherProject={(route) => navigateTo(route)}
          />
        ) : (
          <>
            <Hero
              onNavigateToProject={(route) => navigateTo(route)}
            />
            <About />
            <ProjectsShowcase
              onSelectProject={(route) => navigateTo(route)}
            />
            <ExperienceTimeline />
            <SkillsDashboard />
            <InteractiveResume />
            <TestimonialsSection />
            <BlogSection />
            <ContactSection />
          </>
        )}
      </main>

      {/* Owner Mode Activated Toast */}
      {showOwnerToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce-in bg-charcoal-900 border border-accent-500/40 text-slate-200 p-4 rounded-xl shadow-2xl flex items-center gap-3 font-mono text-xs max-w-sm">
          <div className="w-8 h-8 rounded-lg bg-accent-950 border border-accent-600/30 flex items-center justify-center text-accent-400 shrink-0">
            <BellOff className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-white">
              <span>Owner Mode Activated</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-400" />
            </div>
            <p className="text-[11px] text-slate-400 font-sans mt-0.5">
              Visits from this device are now muted and will not trigger Telegram alerts.
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer onNavigateToProject={(route) => navigateTo(route)} />
    </div>
  );
};

export default App;
