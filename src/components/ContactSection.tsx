import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Download, Sparkles, CheckCircle2, Inbox } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // fallback
    }

    // Launch mailto link so message is sent directly to Shaikhaquib119@gmail.com
    const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Extraordinary <span className="text-gradient-emerald">Mobile Products</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            Open for Senior Mobile Lead opportunities, architecture consulting, or technical discussions.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Inbox Notice Card */}
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-300 flex items-start gap-3">
              <Inbox className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block mb-0.5">Direct Inbox Delivery</span>
                <span>Messages sent via this form trigger an instant email directly to <strong className="text-white">Shaikhaquib119@gmail.com</strong>.</span>
              </div>
            </div>

            {/* Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex items-center gap-4 block"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono">Email Direct</span>
                <h4 className="text-sm font-bold text-white mt-0.5">{PERSONAL_INFO.email}</h4>
              </div>
            </a>

            {/* Phone / WhatsApp Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyber-500/10 border border-cyber-500/20 flex items-center justify-center text-cyber-400 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono">Phone / WhatsApp</span>
                <h4 className="text-sm font-bold text-white mt-0.5">{PERSONAL_INFO.phone}</h4>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono">Current Location</span>
                <h4 className="text-sm font-bold text-white mt-0.5">{PERSONAL_INFO.location}</h4>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="pt-2 flex gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-emerald-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4 text-emerald-400" />
                <span>GitHub Repos</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-slate-800">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Opening Email Client...</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you! Your inquiry has been pre-filled for direct transmission to <strong className="text-emerald-400">Shaikhaquib119@gmail.com</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
                  <span className="text-[11px] font-mono text-emerald-400">→ Shaikhaquib119@gmail.com</span>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins (Engineering Recruiter)"
                    className="w-full bg-obsidian-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@company.com"
                    className="w-full bg-obsidian-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your role, project, or technical inquiry..."
                    className="w-full bg-obsidian-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-bold text-xs transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Email to Aquib</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
