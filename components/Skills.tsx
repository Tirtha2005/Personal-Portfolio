'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, SkillCategory } from '@/data/portfolio';
import {
  Code,
  Cpu,
  Microchip,
  Wrench,
  Brain,
  Radio,
  Search,
  CheckCircle2,
  BookOpen,
  Sparkles,
} from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const categories = PORTFOLIO_DATA.skillsCategories;

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming-hdl':
        return <Code className="w-4 h-4 text-blue-600" />;
      case 'vlsi-digital':
        return <Cpu className="w-4 h-4 text-indigo-600" />;
      case 'embedded-systems':
        return <Microchip className="w-4 h-4 text-emerald-600" />;
      case 'eda-tools':
        return <Wrench className="w-4 h-4 text-amber-600" />;
      case 'ai-ml-data':
        return <Brain className="w-4 h-4 text-sky-600" />;
      case 'iot-communication':
        return <Radio className="w-4 h-4 text-blue-700" />;
      default:
        return <Cpu className="w-4 h-4 text-blue-600" />;
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Practical Experience':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
            Practical
          </span>
        );
      case 'Familiarity':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200">
            <BookOpen className="w-2.5 h-2.5 text-blue-600" />
            Familiar
          </span>
        );
      case 'Learning Interest':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-amber-50 text-amber-800 border border-amber-200">
            <Sparkles className="w-2.5 h-2.5 text-amber-600" />
            Learning
          </span>
        );
      default:
        return null;
    }
  };

  // Filter categories and skills based on search and selected category/level
  const filteredCategories = categories
    .map((category) => {
      if (selectedCategory !== 'all' && category.id !== selectedCategory) {
        return null;
      }

      const filteredSkills = category.skills.filter((skill) => {
        const matchesSearch =
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (skill.tag && skill.tag.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesLevel =
          selectedLevel === 'all' || skill.level === selectedLevel;

        return matchesSearch && matchesLevel;
      });

      if (filteredSkills.length === 0) return null;

      return {
        ...category,
        skills: filteredSkills,
      };
    })
    .filter(Boolean) as SkillCategory[];

  return (
    <section id="skills" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold">
              <Cpu className="w-3.5 h-3.5" />
              <span>SECTION 02 // TECHNICAL TOOLKIT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Categorized Technical Skills &amp;{' '}
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Learning Areas
              </span>
            </h2>

            <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
              Transparent breakdown of current engineering proficiencies, verified coursework tools, and forward-looking study domains without inflated percentages.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Verilog, I2C, Quartus)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors shadow-xs"
            />
          </div>
        </div>

        {/* Competency Level Legend & Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 mb-8 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-500 font-semibold mr-1">LEVEL FILTER:</span>
            <button
              onClick={() => setSelectedLevel('all')}
              className={`px-3 py-1 rounded-md text-xs transition-colors cursor-pointer ${
                selectedLevel === 'all'
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              All Levels
            </button>
            <button
              onClick={() => setSelectedLevel('Practical Experience')}
              className={`px-3 py-1 rounded-md text-xs transition-colors flex items-center gap-1.5 cursor-pointer ${
                selectedLevel === 'Practical Experience'
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold'
                  : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              Practical Experience
            </button>
            <button
              onClick={() => setSelectedLevel('Familiarity')}
              className={`px-3 py-1 rounded-md text-xs transition-colors flex items-center gap-1.5 cursor-pointer ${
                selectedLevel === 'Familiarity'
                  ? 'bg-blue-100 text-blue-800 border border-blue-300 font-semibold'
                  : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              <BookOpen className="w-3 h-3 text-blue-600" />
              Familiarity
            </button>
            <button
              onClick={() => setSelectedLevel('Learning Interest')}
              className={`px-3 py-1 rounded-md text-xs transition-colors flex items-center gap-1.5 cursor-pointer ${
                selectedLevel === 'Learning Interest'
                  ? 'bg-amber-100 text-amber-900 border border-amber-300 font-semibold'
                  : 'text-slate-600 hover:text-amber-800 hover:bg-amber-50'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-600" />
              Learning Interest
            </button>
          </div>

          <span className="text-[11px] text-slate-500 font-medium">
            {filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} Skills Displayed
          </span>
        </div>

        {/* Skills Grid by Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-blue-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-blue-50 border border-blue-200">
                      {getCategoryIcon(cat.id)}
                    </div>
                    <h3 className="font-bold text-sm text-slate-900">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-semibold">
                    {cat.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills List */}
                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-lg bg-slate-50/80 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-center justify-between group"
                    >
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {skill.name}
                        </span>
                        {skill.tag && (
                          <span className="text-[10px] font-mono text-slate-500">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                      <div>{getLevelBadge(skill.level)}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>{cat.skills.length} competencies listed</span>
                <span className="text-blue-700 font-medium">Academic / Hands-on</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-sm text-slate-600 font-mono">
              No matching skills found for "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLevel('all');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-blue-600 underline hover:text-blue-700 font-medium cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
