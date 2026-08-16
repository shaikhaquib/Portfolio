import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowLeft, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';
import { trackResumeDownload, trackWhatsAppClick } from '../utils/analytics';
import { resolveAsset } from '../utils/assets';

interface NavbarProps {
  currentRoute?: string;
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute = '/',
  onNavigateHome
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Case Studies', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  const isCaseStudy = currentRoute.startsWith('/projects/');

  const whatsappUrl = `https://wa.me/918425918611?text=${encodeURIComponent(
    'Hi Aquib, I found your portfolio and would like to connect'
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-150 ${
        scrolled
          ? 'bg-charcoal-950/95 border-b border-charcoal-800 py-3 shadow-md'
          : 'bg-charcoal-950/80 border-b border-charcoal-850 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand / Home Link */}
          {isCaseStudy && onNavigateHome ? (
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-accent-400" />
              <span className="font-bold">Aquib Shaikh</span>
              <span className="text-slate-500">/ portfolio</span>
            </button>
          ) : (
            <a href="#" className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-accent-500" />
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-tight text-white">
                  Aquib Rashid Shaikh
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-charcoal-800 text-slate-400 border border-charcoal-700">
                  Sr. Android
                </span>
              </div>
            </a>
          )}

          {/* Desktop Nav Links (Only on Home) */}
          {!isCaseStudy && (
            <nav className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('navbar')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-charcoal-900 hover:bg-charcoal-850 border border-charcoal-750 text-accent-400 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={resolveAsset(PERSONAL_INFO.resumePdfUrl)}
              download="AQUIB-SHAIKH-RESUME.pdf"
              onClick={() => trackResumeDownload('navbar')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-accent-600 hover:bg-accent-500 text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            {!isCaseStudy && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg bg-charcoal-900 text-slate-300 hover:text-white border border-charcoal-700"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && !isCaseStudy && (
        <div className="lg:hidden bg-charcoal-950 border-b border-charcoal-800 px-4 pt-3 pb-5 mt-2 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-mono text-slate-300 hover:text-white py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-charcoal-800 flex gap-2">
            <a
              href={resolveAsset(PERSONAL_INFO.resumePdfUrl)}
              download="AQUIB-SHAIKH-RESUME.pdf"
              onClick={() => trackResumeDownload('mobile_menu')}
              className="w-full text-center py-2 rounded-lg text-xs font-mono font-bold bg-accent-600 text-white"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
