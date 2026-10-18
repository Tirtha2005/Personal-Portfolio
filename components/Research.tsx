'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import {
  FileText,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Download,
  Info,
  Layers,
} from 'lucide-react';

export default function Research() {
  const paper = PORTFOLIO_DATA.researchPublication;

  return (
    <section id="research" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-mono font-semibold text-indigo-800">
            <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
            <span>SECTION 07 // RESEARCH &amp; SCHOLARLY INQUIRY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Research &amp;{' '}
            <span className="bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Technical Publications
            </span>
          </h2>

          <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
            Academic contributions exploring sensor integration, multi-channel data acquisition, and machine learning models for environmental telemetry.
          </p>
        </div>

        {/* Featured Research Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-md relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 relative z-10">
            
            {/* Left Content */}
            <div className="space-y-6 flex-1">
              
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                  {paper.status}
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-100 text-blue-700 border border-slate-200 font-medium">
                  PAPER ID: {paper.paperId}
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200 font-medium">
                  YEAR: {paper.year}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-2">
                  "{paper.title}"
                </h3>
                <p className="text-sm font-mono text-indigo-600 font-semibold">
                  {paper.conference}
                </p>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {paper.description}
              </p>

              {/* Key Themes Covered */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-900 tracking-wider">
                  Survey Investigation Dimensions:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {paper.keyThemes.map((theme, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>{theme}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scientific Rigor Disclaimer */}
              <div className="p-3.5 rounded-lg bg-blue-50/70 border border-blue-200/80 flex items-start gap-2.5 text-xs text-slate-700">
                <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{paper.disclaimer}</span>
              </div>

            </div>

            {/* Right Action / Metadata Column */}
            <div className="lg:w-80 flex flex-col justify-between p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs font-mono font-bold text-slate-900">
                    PAPER METRICS
                  </span>
                </div>

                <div className="space-y-2.5 text-xs font-mono">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Conference</span>
                    <span className="text-slate-800 font-medium">IEEE ICIET 2026</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Submission Identifier</span>
                    <span className="text-blue-600 font-bold">#1062</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Investigation Scope</span>
                    <span className="text-slate-800 font-medium">IoT Telemetry &amp; Machine Learning</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Hardware Focus</span>
                    <span className="text-slate-800 font-medium">ADS1115 16-bit ADC, Physical Probes</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                {paper.paperUrl ? (
                  <a
                    href={paper.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-mono text-xs font-bold transition-all shadow-md shadow-blue-600/20 group"
                  >
                    <span>Read on IEEE Xplore</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : null}
                <div className="text-[11px] font-mono text-emerald-800 text-center flex items-center justify-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Published on IEEE Xplore (Doc #11712891)</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
