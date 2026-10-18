'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import {
  FileText,
  Download,
  ArrowUpRight,
  ShieldCheck,
  Eye,
} from 'lucide-react';
import { LinkedinIcon } from '@/components/Icons';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export default function ResumeSection({ onOpenResume }: ResumeSectionProps) {
  return (
    <section id="resume" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 text-center space-y-6 relative overflow-hidden shadow-sm">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 mx-auto shadow-xs">
            <FileText className="w-7 h-7" />
          </div>

          {/* Heading & Text */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-semibold text-blue-600 tracking-widest uppercase">
              Curriculum Vitae &amp; Credentials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Interested in My Engineering Journey?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore my education, technical skills, internships, projects, and engineering interests in a concise resume.
            </p>
          </div>

          {/* Summary Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-600 pt-2">
            <span className="px-3 py-1 rounded bg-slate-50 border border-slate-200 font-medium">
              AIET ECE Student
            </span>
            <span className="px-3 py-1 rounded bg-blue-50 border border-blue-200 text-blue-700 font-bold">
              CGPA: {PORTFOLIO_DATA.personal.currentCGPA}
            </span>
            <span className="px-3 py-1 rounded bg-slate-50 border border-slate-200 font-medium">
              VLSI &amp; Embedded Systems
            </span>
            <span className="px-3 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold">
              Internship Ready
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={PORTFOLIO_DATA.personal.resumePath}
              download="Tirtha_Rudra_Shettigar_Resume.pdf"
              className="px-6 py-3 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>

            <button
              onClick={onOpenResume}
              className="px-6 py-3 rounded-lg text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:border-blue-400 hover:text-blue-600 transition-all flex items-center gap-2 active:scale-95 cursor-pointer shadow-xs"
            >
              <Eye className="w-4 h-4" />
              <span>Preview Data Sheet</span>
            </button>

            <a
              href={PORTFOLIO_DATA.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all flex items-center gap-2 active:scale-95"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-600" />
              <span>View LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
