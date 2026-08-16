import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare, CheckCircle2, MessageCircle } from 'lucide-react';
import { trackContactFormSubmit, trackWhatsAppClick, trackOutboundClick } from '../utils/analytics';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = `https://wa.me/918425918611?text=${encodeURIComponent(
    'Hi Aquib, I found your portfolio and would like to connect'
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    trackContactFormSubmit();

    // Trigger pre-filled mailto directly to Aquib's verified inbox
    const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('contact_section');
  };

  return (
    <section id="contact" className="py-20 border-t border-charcoal-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-accent-400 uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiries & Collaboration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Available for Senior Mobile Lead positions, Android architecture consulting, and high-impact FinTech engineering discussions.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards & WhatsApp */}
          <div className="lg:col-span-5 space-y-3">
            
            {/* Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onClick={() => trackOutboundClick('email')}
              className="dev-card dev-card-hover p-4 flex items-center gap-3.5 block"
            >
              <div className="w-10 h-10 rounded-lg bg-charcoal-900 border border-charcoal-700 flex items-center justify-center text-accent-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-slate-400 font-mono block">Direct Email</span>
                <span className="text-xs font-bold text-white truncate block">{PERSONAL_INFO.email}</span>
              </div>
            </a>

            {/* WhatsApp Direct Chat Card (Prominent & Verified) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="dev-card dev-card-hover p-4 flex items-center justify-between gap-3.5 block border-accent-600/30 bg-accent-950/20"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-accent-950 border border-accent-600/40 flex items-center justify-center text-accent-400 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-accent-300 font-mono font-bold block">WhatsApp Click-to-Chat</span>
                  </div>
                  <span className="text-xs font-bold text-white truncate block">{PERSONAL_INFO.phone}</span>
                </div>
              </div>
              <span className="px-2 py-1 rounded bg-accent-600 hover:bg-accent-500 text-white text-[10px] font-mono font-bold shrink-0">
                Chat Now →
              </span>
            </a>

            {/* Location Card */}
            <div className="dev-card p-4 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-charcoal-900 border border-charcoal-700 flex items-center justify-center text-slate-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-mono block">Location</span>
                <span className="text-xs font-bold text-white">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Social Outbound Links */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackOutboundClick('linkedin')}
                className="dev-card dev-card-hover p-3 flex items-center justify-center gap-2 text-xs font-mono font-bold text-slate-200"
              >
                <Linkedin className="w-4 h-4 text-accent-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackOutboundClick('github')}
                className="dev-card dev-card-hover p-3 flex items-center justify-center gap-2 text-xs font-mono font-bold text-slate-200"
              >
                <Github className="w-4 h-4 text-accent-400" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 dev-card p-6 sm:p-8">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-accent-950 border border-accent-600/40 text-accent-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Opening Email Client...</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                  Your inquiry message has been prepared for transmission to <strong className="text-white">Shaikhaquib119@gmail.com</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-charcoal-700 pb-3">
                  <h3 className="text-sm font-bold text-white font-mono">Send Direct Message</h3>
                  <span className="text-[11px] font-mono text-accent-400">→ Shaikhaquib119@gmail.com</span>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Your Name / Title</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Engineering Lead / Recruiter"
                    className="w-full bg-charcoal-900 border border-charcoal-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-accent-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. name@company.com"
                    className="w-full bg-charcoal-900 border border-charcoal-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-accent-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Message / Scope</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, team opportunity, or engineering question..."
                    className="w-full bg-charcoal-900 border border-charcoal-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-accent-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-accent-600 hover:bg-accent-500 text-white font-mono font-bold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email to Aquib</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
