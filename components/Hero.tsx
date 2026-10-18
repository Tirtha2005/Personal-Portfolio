'use client';

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  Cpu,
  Layers,
  Sparkles,
  Radio,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  const roles = PORTFOLIO_DATA.personal.roles;

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFadeState(true);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center bg-white circuit-grid overflow-hidden"
    >
      {/* Background ambient lighting orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none ambient-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none ambient-pulse" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Introduction & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 shadow-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>{PORTFOLIO_DATA.personal.statusIndicator}</span>
            </div>

            {/* Small Introduction Label */}
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-blue-600" />
              <p className="text-xs font-mono tracking-widest text-blue-600 uppercase font-bold">
                {PORTFOLIO_DATA.personal.introductionLabel}
              </p>
            </div>

            {/* Main Heading & Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  {PORTFOLIO_DATA.personal.fullName}
                </span>
                .
              </h1>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
                {PORTFOLIO_DATA.personal.tagline}
              </h2>

              {/* Dynamic Role Subtitle */}
              <div className="flex items-center gap-2 pt-1 font-mono text-base sm:text-lg">
                <span className="text-blue-600 font-bold">&gt;</span>
                <span
                  className={`text-blue-700 font-semibold transition-opacity duration-300 ${
                    fadeState ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                  }`}
                >
                  {roles[roleIndex]}
                </span>
                <span className="w-2 h-5 bg-blue-600 animate-pulse ml-0.5 inline-block" />
              </div>
            </div>

            {/* Supporting Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              {PORTFOLIO_DATA.personal.aboutBio}
            </p>

            {/* Academic pill indicator */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono text-slate-600">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 font-medium">
                Alva's Institute of Engg &amp; Tech (AIET)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 font-medium">
                B.E. in ECE (2023–Present)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 font-bold">
                CGPA: {PORTFOLIO_DATA.personal.currentCGPA}
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 group active:scale-95 cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.resumePath}
                download="Tirtha_Rudra_Shettigar_Resume.pdf"
                className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 hover:text-blue-600 transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer shadow-xs"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors py-2 px-1"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-blue-600" />
              </a>
            </div>

            {/* Compact Social & Contact Links */}
            <div className="flex items-center gap-4 pt-3 border-t border-slate-200 w-full text-slate-600 text-xs">
              <span className="font-mono text-slate-400 font-medium">PROFILES:</span>
              <a
                href={PORTFOLIO_DATA.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium"
              >
                <GithubIcon className="w-4 h-4 text-slate-700" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={PORTFOLIO_DATA.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-700" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium"
              >
                <Mail className="w-4 h-4 text-slate-700" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Semiconductor & Circuit Visual */}
          {/* Right Column: Interactive Semiconductor & Circuit Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl bg-slate-50 border border-slate-200 p-6 shadow-xl laser-trace">
              
              {/* Corner Registration Marks (Engineering Board Style) */}
              <div className="absolute top-2 left-2 text-[9px] font-mono font-bold text-slate-400">+ TP_VCC</div>
              <div className="absolute top-2 right-2 text-[9px] font-mono font-bold text-slate-400">GND_PLANE +</div>
              <div className="absolute bottom-2 left-2 text-[9px] font-mono font-bold text-slate-400">+ SIG_CLK</div>
              <div className="absolute bottom-2 right-2 text-[9px] font-mono font-bold text-slate-400">BUS_SYNC +</div>

              {/* Silicon Core IC Illustration with Animated SVG */}
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                
                {/* SVG Circuit Traces & Bus Rings */}
                <svg
                  viewBox="0 0 360 360"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Concentric Circuit Rings */}
                  <circle
                    cx="180"
                    cy="180"
                    r="150"
                    stroke="#cbd5e1"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx="180"
                    cy="180"
                    r="120"
                    stroke="rgba(37,99,235,0.25)"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="180"
                    cy="180"
                    r="90"
                    stroke="rgba(79,70,229,0.25)"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                  />

                  {/* Horizontal & Vertical Signal Bus Lines */}
                  <line x1="30" y1="180" x2="110" y2="180" stroke="#2563eb" strokeWidth="2" strokeDasharray="6 2" />
                  <line x1="250" y1="180" x2="330" y2="180" stroke="#2563eb" strokeWidth="2" strokeDasharray="6 2" />
                  <line x1="180" y1="30" x2="180" y2="110" stroke="#4f46e5" strokeWidth="2" strokeDasharray="6 2" />
                  <line x1="180" y1="250" x2="180" y2="330" stroke="#4f46e5" strokeWidth="2" strokeDasharray="6 2" />

                  {/* Diagonal Traces with Soldered Pads */}
                  <path d="M 60 60 L 100 100 L 120 100" stroke="#3b82f6" strokeWidth="1.5" />
                  <circle cx="60" cy="60" r="3.5" fill="#2563eb" />

                  <path d="M 300 60 L 260 100 L 240 100" stroke="#6366f1" strokeWidth="1.5" />
                  <circle cx="300" cy="60" r="3.5" fill="#4f46e5" />

                  <path d="M 60 300 L 100 260 L 120 260" stroke="#3b82f6" strokeWidth="1.5" />
                  <circle cx="60" cy="300" r="3.5" fill="#2563eb" />

                  <path d="M 300 300 L 260 260 L 240 260" stroke="#6366f1" strokeWidth="1.5" />
                  <circle cx="300" cy="300" r="3.5" fill="#4f46e5" />

                  {/* Waveform Trace */}
                  <path
                    d="M 125 70 H 135 V 58 H 145 V 70 H 155 V 58 H 165 V 70 H 175 V 58 H 185 V 70 H 195 V 58 H 205 V 70 H 215 V 58 H 225 V 70"
                    stroke="#2563eb"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>

                {/* Central Silicon Microchip (Center Piece) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-44 h-44 rounded-xl bg-slate-900 border-2 border-blue-500 p-3 shadow-2xl flex flex-col items-center justify-between text-center relative pointer-events-auto hover:scale-105 transition-transform duration-300">
                    
                    {/* Chip Top Status */}
                    <div className="flex items-center justify-between w-full px-1">
                      <span className="text-[8px] font-mono font-bold text-blue-400">CORE_SYS</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                      <span className="text-[8px] font-mono font-bold text-indigo-400">SILICON</span>
                    </div>

                    {/* Central Processor Monogram & Symbol */}
                    <div className="flex flex-col items-center my-auto">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-500/50 flex items-center justify-center mb-1.5 shadow-[0_0_12px_rgba(37,99,235,0.3)]">
                        <Cpu className="w-6 h-6 text-blue-400" />
                      </div>
                      <span className="font-mono font-bold text-xs text-white tracking-widest">
                        TRS_SOC-2026
                      </span>
                      <span className="text-[9px] font-mono text-blue-300/90 font-medium">
                        ECE HARDWARE AGENT
                      </span>
                    </div>

                    {/* Technical Domain Badges inside the chip */}
                    <div className="w-full grid grid-cols-2 gap-1 pt-1 border-t border-slate-800 text-[8px] font-mono">
                      <span className="text-blue-300 bg-blue-950/80 border border-blue-800/80 rounded px-1 py-0.5">RTL DESIGN</span>
                      <span className="text-indigo-300 bg-indigo-950/80 border border-indigo-800/80 rounded px-1 py-0.5">EMBEDDED</span>
                      <span className="text-emerald-300 bg-emerald-950/80 border border-emerald-800/80 rounded px-1 py-0.5">AI / ML</span>
                      <span className="text-sky-300 bg-sky-950/80 border border-sky-800/80 rounded px-1 py-0.5">DIGITAL</span>
                    </div>
                  </div>
                </div>

                {/* Floating Technical Node Badges around the chip */}
                <div className="absolute top-4 left-6 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-mono font-bold text-blue-700 shadow-xs">
                  FSM / VERILOG
                </div>
                <div className="absolute top-4 right-6 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-mono font-bold text-indigo-700 shadow-xs">
                  ARM / ESP32
                </div>
                <div className="absolute bottom-4 left-6 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-mono font-bold text-emerald-700 shadow-xs">
                  ADS1115 / I2C
                </div>
                <div className="absolute bottom-4 right-6 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-mono font-bold text-sky-700 shadow-xs">
                  EDGE ML / SCIKIT
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
