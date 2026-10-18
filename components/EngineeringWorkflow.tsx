'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import {
  Workflow,
  Search,
  Layers,
  Wrench,
  Sparkles,
  ChevronRight,
  ArrowRight,
  GitBranch,
} from 'lucide-react';

export default function EngineeringWorkflow() {
  const steps = PORTFOLIO_DATA.workflowSteps;

  const getStepIcon = (name: string) => {
    switch (name) {
      case 'Search':
        return <Search className="w-5 h-5 text-blue-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-cyan-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-600" />;
      default:
        return <Workflow className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="workflow" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-blue-800">
            <Workflow className="w-3.5 h-3.5 text-blue-600" />
            <span>SECTION 08 // METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How I Approach{' '}
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Engineering Problems
            </span>
          </h2>

          <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
            A disciplined four-phase engineering framework applied across hardware prototyping, RTL state verification, and data-driven intelligence.
          </p>
        </div>

        {/* 4-Step Workflow Grid with Circuit Trace Connectors */}
        <div className="relative">
          
          {/* Desktop Horizontal Connecting Bus Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-emerald-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-xl p-6 flex flex-col justify-between border border-slate-200 shadow-xs hover:shadow-lg hover:border-blue-300 relative group transition-all"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-50/50 transition-colors shadow-xs">
                      {getStepIcon(step.icon)}
                    </div>
                    
                    <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono uppercase text-blue-600 font-semibold block mb-1">
                    {step.subtitle}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {step.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Sub-items */}
                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] font-mono text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
