'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import {
  Trophy,
  Award,
  FileCheck,
  Cpu,
  Bot,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

export default function Achievements() {
  const achievements = PORTFOLIO_DATA.achievements;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Competition':
        return <Trophy className="w-5 h-5 text-amber-600" />;
      case 'Research':
        return <FileCheck className="w-5 h-5 text-indigo-600" />;
      case 'Hackathon':
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'Robotics':
        return <Bot className="w-5 h-5 text-emerald-600" />;
      default:
        return <Award className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono font-semibold text-amber-800">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>SECTION 06 // HONORS &amp; MILESTONES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Achievements &amp;{' '}
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-600 bg-clip-text text-transparent">
              Verified Recognition
            </span>
          </h2>

          <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
            Competition awards, national robotics initiatives, research paper contributions, and competitive engineering hackathons.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-300 relative group overflow-hidden transition-all"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all pointer-events-none" />

              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-50/50 transition-colors">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-blue-600 uppercase tracking-wider block">
                        {item.subtitle}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200 whitespace-nowrap">
                    {item.rankOrRole}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-medium">{item.projectOrScope}</span>
                </div>

                {item.verifiedLink ? (
                  <a
                    href={item.verifiedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-2 transition-colors group/link"
                  >
                    <span>View IEEE Paper</span>
                    <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Verified Milestone
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
