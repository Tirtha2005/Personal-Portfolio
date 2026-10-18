'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolio';
import Image from 'next/image';
import {
  ExternalLink,
  Layers,
  Cpu,
  Microchip,
  Sparkles,
  ChevronRight,
  Filter,
  CheckCircle,
  AlertCircle,
  X,
  Code,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'vlsi', label: 'VLSI & Digital Design' },
    { id: 'embedded', label: 'Embedded Systems' },
    { id: 'iot-robotics', label: 'IoT & Robotics' },
    { id: 'ai-ml', label: 'AI & Machine Learning' },
    { id: 'software', label: 'Software & Data Analytics' },
  ];

  const projects = PORTFOLIO_DATA.projects;

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === 'all') return true;
    return project.category === selectedFilter;
  });

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Completed
          </span>
        );
      case 'In Progress':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-50 text-blue-800 border border-blue-200 flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            In Progress
          </span>
        );
      case 'Prototype':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-50 text-indigo-800 border border-indigo-200 flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
            Prototype
          </span>
        );
      case 'Academic Exploration':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-800 border border-slate-200 flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
            Exploration
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>SECTION 03 // ENGINEERING PORTFOLIO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              From Engineering Concepts to{' '}
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Working Systems
              </span>
            </h2>

            <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
              Explore projects where electronics, digital design, embedded systems, and intelligent software come together to solve practical problems.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 font-medium">
            Showing <span className="text-blue-700 font-bold">{filteredProjects.length}</span> of {projects.length} verified projects
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-blue-600 text-white shadow-xs font-semibold'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl flex flex-col justify-between overflow-hidden group border border-slate-200 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all"
            >
              <div>
                {/* Technical Illustration / Visual Header */}
                <div className="relative w-full h-48 bg-slate-950 border-b border-slate-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} technical illustration`}
                    className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Top Badges Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-mono text-slate-800 font-semibold shadow-xs">
                      {project.categoryLabel}
                    </span>
                    {getStatusBadge(project.status)}
                  </div>

                  {project.metricsOrHighlight && (
                    <div className="absolute bottom-2 left-3 right-3 px-2 py-1 rounded bg-slate-900/90 backdrop-blur-md border border-slate-800 text-[10px] font-mono text-cyan-300 truncate">
                      {project.metricsOrHighlight}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-blue-700 bg-blue-50 font-semibold">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer py-1"
                >
                  <span>Technical Deep Dive</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 hover:text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                      title="View GitHub Repository"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 hover:text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                      title="Live Demo / Publication"
                      aria-label={`${project.title} live preview`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Technical Deep Dive Project Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-3xl my-8 bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-slate-900">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-mono font-semibold">
                    {activeProjectModal.categoryLabel}
                  </span>
                  {getStatusBadge(activeProjectModal.status)}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {activeProjectModal.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 border border-slate-200 transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Schematic Illustration */}
            <div className="w-full h-48 sm:h-64 rounded-xl bg-slate-950 border border-slate-200 overflow-hidden">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Problem Statement */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-700 uppercase font-bold">
                <AlertCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>Problem Addressed</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeProjectModal.problem}
              </p>
            </div>

            {/* Technical Approach */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-blue-700 uppercase tracking-wider font-bold">
                Technical Approach &amp; Implementation
              </h4>
              <ul className="space-y-2">
                {activeProjectModal.technicalApproach.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0 mt-1.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-blue-700 uppercase tracking-wider font-bold">
                Technologies &amp; EDA Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProjectModal.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* My Contribution */}
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-1">
              <span className="text-[10px] font-mono text-blue-800 uppercase font-bold">
                Tirtha's Direct Contribution
              </span>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                {activeProjectModal.contribution}
              </p>
            </div>

            {/* Key Learning Outcomes */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-blue-700 uppercase tracking-wider font-bold">
                Engineering Insights &amp; Learning Outcomes
              </h4>
              <ul className="space-y-1.5">
                {activeProjectModal.learningOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {activeProjectModal.githubUrl && (
                  <a
                    href={activeProjectModal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>
                )}
                {activeProjectModal.demoUrl && (
                  <a
                    href={activeProjectModal.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo / Paper</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
