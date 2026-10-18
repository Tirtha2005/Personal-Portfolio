'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import {
  Cpu,
  Microchip,
  BrainCircuit,
  Wifi,
  Sparkles,
  Compass,
  CheckCircle,
  Code2,
  Binary,
} from 'lucide-react';

export default function About() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Microchip':
        return <Microchip className="w-5 h-5 text-violet-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-sky-400" />;
      case 'Wifi':
        return <Wifi className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>SECTION 01 // IDENTITY &amp; CORE FOCUS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering Curiosity.{' '}
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Practical Innovation.
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            {PORTFOLIO_DATA.personal.detailedAbout.split('\n\n')[0]}
          </p>
        </div>

        {/* 4 Core Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PORTFOLIO_DATA.focusCards.map((card) => (
            <div
              key={card.index}
              className="bg-white border border-slate-200/90 rounded-xl p-6 relative flex flex-col justify-between group overflow-hidden shadow-xs hover:shadow-md hover:border-blue-300 transition-all"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-100/60 transition-colors">
                    {getIcon(card.icon)}
                  </div>
                  <span className="font-mono text-xs text-slate-400 group-hover:text-blue-600 font-semibold transition-colors">
                    {card.index}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500 font-medium">
                <span>ACTIVE FOCUS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Philosophy & What Drives Me */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Engineering Philosophy Narrative */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xs">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500" />
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-700 uppercase tracking-wider font-bold">
                <Binary className="w-4 h-4" />
                <span>The Hands-On Approach</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                "Engineering is more than understanding theory. It is about designing, testing, debugging, and improving systems that solve real-world problems."
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                Whether simulating finite state machines in ModelSim, routing I2C buses with 16-bit analog-to-digital converters on a Raspberry Pi, or training scikit-learn models on sensory datasets, my core motivation is understanding how electrical signals and digital bits converge to create tangible, reliable solutions.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block font-medium">Education</span>
                  <span className="text-xs font-semibold text-slate-800">AIET Moodabidri</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block font-medium">Discipline</span>
                  <span className="text-xs font-semibold text-blue-700">ECE (2023–Present)</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block font-medium">Resume CGPA</span>
                  <span className="text-xs font-bold text-emerald-700">{PORTFOLIO_DATA.personal.currentCGPA}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono font-medium">
              <span>SEEKING: SEMICONDUCTOR &amp; EMBEDDED INTERNSHIPS</span>
              <span className="text-blue-700 font-bold">READY TO CONTRIBUTE</span>
            </div>
          </div>

          {/* What Drives Me Card */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-700 uppercase tracking-wider mb-3 font-bold">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>What Drives Me</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Core Engineering Principles
              </h3>

              <ul className="space-y-3.5">
                {PORTFOLIO_DATA.whatDrivesMe.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-indigo-600" />
              <span className="font-medium">Theory + Hardware + Iteration = Working Systems</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
