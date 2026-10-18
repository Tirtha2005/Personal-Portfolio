'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { GraduationCap, Award, BookOpen, MapPin, Calendar } from 'lucide-react';

export default function Education() {
  const educationList = PORTFOLIO_DATA.education;

  return (
    <section id="education" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>SECTION 05 // ACADEMIC FOUNDATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education &amp;{' '}
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Academic Background
            </span>
          </h2>

          <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
            Rigorous undergraduate studies in Electronics &amp; Communication Engineering complemented by foundational science and analytical training.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationList.map((item, index) => (
            <div
              key={item.institution}
              className={`bg-white rounded-xl p-6 flex flex-col justify-between relative border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all ${
                index === 0 ? 'ring-1 ring-blue-500/20' : ''
              }`}
            >
              <div>
                {/* Top Badge & Year */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold ${
                      item.badge === 'In Progress'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1 font-medium">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {item.period}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {item.degree}
                </h3>

                <p className="text-xs font-mono text-blue-700 font-semibold mb-2">
                  {item.field}
                </p>

                <p className="text-xs font-semibold text-slate-800 mb-1">
                  {item.institution}
                </p>

                <p className="text-[11px] font-mono text-slate-500 flex items-center gap-1 mb-4">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  {item.location}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.details}
                </p>
              </div>

              {/* Score / CGPA Box */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500 font-medium">
                  {item.scoreLabel}
                </span>
                <span className="text-sm font-bold font-mono text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  {item.score}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
