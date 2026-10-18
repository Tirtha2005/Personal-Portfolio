'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, Experience as ExperienceType } from '@/data/portfolio';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  Award,
  Layers,
} from 'lucide-react';

export default function Experience() {
  const [filterType, setFilterType] = useState<'all' | 'Internship' | 'Technical Training'>('all');

  const experiences = PORTFOLIO_DATA.experiences;

  const filteredExperiences = experiences.filter((exp) => {
    if (filterType === 'all') return true;
    return exp.type === filterType;
  });

  return (
    <section id="experience" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold">
              <Briefcase className="w-3.5 h-3.5" />
              <span>SECTION 04 // INTERNSHIPS &amp; TRAINING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Learning Through{' '}
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Practical Experience
              </span>
            </h2>

            <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
              Hands-on technical internships, specialized microcontroller architectures, physical design flows, and structured machine learning workflows.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-mono">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                filterType === 'all'
                  ? 'bg-white text-blue-700 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              All Programs
            </button>
            <button
              onClick={() => setFilterType('Internship')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                filterType === 'Internship'
                  ? 'bg-white text-blue-700 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              Internships
            </button>
            <button
              onClick={() => setFilterType('Technical Training')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                filterType === 'Technical Training'
                  ? 'bg-white text-blue-700 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              Technical Training
            </button>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-32 space-y-12">
          {filteredExperiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-blue-600 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(37,99,235,0.35)] shadow-xs transition-all" />

              {/* Left Date Label for Desktop */}
              <div className="md:absolute md:-left-32 md:top-1 text-xs font-mono text-blue-700 font-bold mb-2 md:mb-0 md:w-24 md:text-right">
                {exp.period}
              </div>

              {/* Experience Card */}
              <div className="bg-white rounded-xl p-6 relative border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all">
                
                {/* Card Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span
                        className={`px-2.5 py-0.5 rounded text-[10px] font-mono uppercase font-semibold ${
                          exp.type === 'Internship'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                        }`}
                      >
                        {exp.type}
                      </span>
                      <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {exp.duration}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {exp.role}
                    </h3>

                    <p className="text-xs font-mono text-blue-700 font-semibold">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{exp.mode}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                    Key Practical Deliverables &amp; Focus Areas:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {exp.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills tags */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
