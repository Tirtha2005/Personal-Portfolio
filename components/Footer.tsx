'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import {
  Cpu,
  Mail,
  ArrowUp,
  Heart,
  Terminal,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 relative overflow-hidden text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center font-mono font-bold text-blue-700 text-xs shadow-2xs">
                TS
              </div>
              <div>
                <span className="font-bold text-sm text-slate-900 block">
                  {PORTFOLIO_DATA.personal.fullName}
                </span>
                <span className="text-[11px] font-mono text-blue-600 font-medium">
                  ECE • VLSI &amp; Embedded Systems
                </span>
              </div>
            </div>

            <p className="text-slate-600 max-w-sm leading-relaxed text-xs">
              Undergraduate engineering portfolio bridging digital logic, microcontrollers, sensor telemetry, and practical machine learning applications.
            </p>

            <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500">
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              <span>SYS_ENV: ALVA'S INSTITUTE OF ENGG &amp; TECH (AIET)</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <span className="font-mono text-[11px] uppercase text-slate-900 font-bold block mb-3">
                Sections
              </span>
              <ul className="space-y-2 text-slate-600 font-mono text-xs">
                <li><a href="#about" className="hover:text-blue-600 transition-colors">01. About Me</a></li>
                <li><a href="#skills" className="hover:text-blue-600 transition-colors">02. Skills</a></li>
                <li><a href="#projects" className="hover:text-blue-600 transition-colors">03. Projects</a></li>
                <li><a href="#experience" className="hover:text-blue-600 transition-colors">04. Experience</a></li>
                <li><a href="#education" className="hover:text-blue-600 transition-colors">05. Education</a></li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-[11px] uppercase text-slate-900 font-bold block mb-3">
                Domains
              </span>
              <ul className="space-y-2 text-slate-600 font-mono text-xs">
                <li><a href="#achievements" className="hover:text-blue-600 transition-colors">06. Honors</a></li>
                <li><a href="#research" className="hover:text-blue-600 transition-colors">07. Research Paper</a></li>
                <li><a href="#workflow" className="hover:text-blue-600 transition-colors">08. Workflow</a></li>
                <li><a href="#resume" className="hover:text-blue-600 transition-colors">09. Resume</a></li>
                <li><a href="#contact" className="hover:text-blue-600 transition-colors">10. Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Connect & Top Button */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end space-y-4">
            <span className="font-mono text-[11px] uppercase text-slate-900 font-bold block">
              Profiles &amp; Repositories
            </span>

            <div className="flex items-center gap-2">
              <a
                href={PORTFOLIO_DATA.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 shadow-2xs transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 shadow-2xs transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-600" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 shadow-2xs transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-blue-600" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 shadow-2xs transition-all font-mono text-[11px] cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-blue-600" />
            </button>
          </div>

        </div>

        {/* Bottom Bar with Engineering Copyright */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-mono text-[11px]">
          <div>
            © 2026 Tirtha Rudra Shettigar. All engineering rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <span className="text-blue-600 font-medium">Next.js App Router</span>
            <span>•</span>
            <span className="text-indigo-600 font-medium">TypeScript</span>
            <span>•</span>
            <span className="text-slate-600 font-medium">Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
