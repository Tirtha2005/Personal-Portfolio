'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import {
  Mail,
  Send,
  Phone,
  Copy,
  Check,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  Info,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [statusNotice, setStatusNotice] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatusNotice('Please fill out the name, email, and message fields.');
      return;
    }

    // Compose working mailto fallback URL
    const subjectLine = encodeURIComponent(
      formData.subject || `Engineering Opportunity / Inquiry from ${formData.name}`
    );
    const bodyContent = encodeURIComponent(
      `Hi Tirtha,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subjectLine}&body=${bodyContent}`;
    
    // Open user's default email client
    window.location.href = mailtoUrl;

    setStatusNotice(
      'Opening your email client with the pre-filled message. If it did not open, you can email directly at ' +
        PORTFOLIO_DATA.personal.email
    );
  };

  return (
    <section id="contact" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-blue-800">
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span>SECTION 09 // COMMUNICATION DISPATCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Build{' '}
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Something Meaningful
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            I'm always interested in connecting with engineers, recruiters, researchers, and technology enthusiasts working across semiconductor engineering, embedded systems, digital design, and intelligent technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Action Links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>Direct Contact Channels</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </h3>

              <div className="space-y-4">
                
                {/* Email Box */}
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-md bg-white border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0 shadow-2xs">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-mono font-semibold text-slate-500 block">EMAIL ADDRESS</span>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                        className="text-xs font-mono font-medium text-slate-900 group-hover:text-blue-600 transition-colors truncate block"
                      >
                        {PORTFOLIO_DATA.personal.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-md bg-white text-slate-600 hover:text-blue-600 border border-slate-200 shadow-2xs transition-colors flex-shrink-0 cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-md bg-white border border-indigo-200 flex items-center justify-center text-indigo-600 flex-shrink-0 shadow-2xs">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-mono font-semibold text-slate-500 block">PHONE / WHATSAPP</span>
                      <a
                        href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                        className="text-xs font-mono font-medium text-slate-900 group-hover:text-blue-600 transition-colors truncate block"
                      >
                        {PORTFOLIO_DATA.personal.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-md bg-white text-slate-600 hover:text-blue-600 border border-slate-200 shadow-2xs transition-colors flex-shrink-0 cursor-pointer"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-white border border-sky-200 flex items-center justify-center text-sky-600 flex-shrink-0 shadow-2xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-slate-500 block">CURRENT BASE</span>
                    <span className="text-xs font-mono font-medium text-slate-900">
                      {PORTFOLIO_DATA.personal.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Functional Quick Action Buttons */}
              <div className="pt-2 border-t border-slate-100 space-y-2.5">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me Directly</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-600" />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
                >
                  <GithubIcon className="w-4 h-4 text-slate-800" />
                  <span>Explore GitHub (@Tirtha2005)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Message Form with Mailto Fallback */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-600 uppercase">
                  <MessageSquare className="w-4 h-4" />
                  <span>Send a Direct Message</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 font-medium">
                  Mailto Dispatch Fallback
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-700 block">
                      Your Name <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-700 block">
                      Your Email <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. s.jenkins@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors shadow-2xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-700 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. VLSI / Embedded Systems Internship Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-700 block">
                    Message <span className="text-blue-600">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, role opening, or technical inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors resize-none shadow-2xs"
                  />
                </div>

                {statusNotice && (
                  <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-800 font-mono">
                    {statusNotice}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Dispatch Message (Email Client Fallback)</span>
                </button>

                {/* Honest Backend Disclaimer */}
                <div className="flex items-start gap-2 pt-2 text-[11px] font-mono text-slate-500">
                  <Info className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Note: This static portfolio utilizes a client-side mailto dispatch fallback that launches your system email client with your message pre-populated, preventing backend server dependencies or credentials exposure.
                  </span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
