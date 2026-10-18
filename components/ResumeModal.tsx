'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import {
  X,
  Download,
  Copy,
  Check,
  FileText,
  AlertCircle,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Cpu,
  Trophy,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const summary = `
TIRTHA RUDRA SHETTIGAR
Location: Karnataka, India | Phone: +91 9380145315 | Email: tirthashettigar@gmail.com
LinkedIn: https://www.linkedin.com/in/tirtha-shettigar/ | GitHub: https://github.com/Tirtha2005

EDUCATION:
- Bachelor of Engineering (ECE), Alva's Institute of Engineering & Technology, Moodabidri (2023–Present) | CGPA: 8.0
- PUC (Science), Basaveshwar Science College, Bagalkot (2022–2023) | 75%
- SSLC, Basaveshwara New High School, Bagalkot (2020–2021) | 78%

CORE TECHNICAL SKILLS:
- Hardware & HDL: Verilog HDL, Digital Logic Design, RTL Simulation, Finite State Machines, FPGA Fundamentals
- Physical Design: Netlist-to-GDSII flow, Floorplanning, Placement, CTS, Routing, STA, DRC/LVS
- Embedded Systems: Arduino, ESP32, Raspberry Pi, STM32 (ARM Cortex-M4), I2C, SPI, UART, PWM, ADC
- EDA Tools: Intel Quartus Prime, ModelSim, Arduino IDE, MATLAB, Cadence Virtuoso & Innovus (Learning)
- AI & Data: Python, Scikit-Learn, Pandas, NumPy, OpenCV, K-Means, SVM, Regression

PRACTICAL INTERNSHIPS & TRAINING:
- Physical Design (PD) Training — VLSI Minds (2026)
- IoT & Embedded Systems Intern — Upskill Campus / UniConverge Technologies (2026)
- Machine Learning Intern — Prodigy InfoTech (2026)
- Embedded C / ARM Cortex-M4 Training — Pantech.AI (2025)
- Python Full Stack — MicroDegree (2024–2025)

KEY PROJECTS & HONORS:
- TECHNOVATE 2K25 1st Place: Smart Attendance System with RFID & Camera Verification
- Verilog-Based Traffic Light Controller (FSM in ModelSim & Quartus Prime)
- Water Quality Monitoring & Risk Telemetry (Raspberry Pi, ADS1115, MQTT, IEEE ICIET 2026 Paper #1062)
    `.trim();

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Tirtha Rudra Shettigar — Resume Profile
              </h3>
              <p className="text-xs font-mono font-medium text-blue-600">
                Verified Candidate Profile &amp; Curriculum Vitae Data Sheet
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200 cursor-pointer transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Real PDF status notice banner */}
        {!PORTFOLIO_DATA.personal.resumeAvailable ? (
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-800">
              <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span className="font-bold">RESUME PDF INTEGRATION READY</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              This interactive summary displays all verified resume records (Education, CGPA 8.0, Internships, Technical Skills, and Projects).
              To download a direct PDF document, drop your <code className="text-blue-700 bg-white border border-blue-200 px-1 py-0.5 rounded font-mono">resume.pdf</code> into <code className="text-blue-700 bg-white border border-blue-200 px-1 py-0.5 rounded font-mono">/public/resume/resume.pdf</code> and set <code className="text-blue-700 bg-white border border-blue-200 px-1 py-0.5 rounded font-mono">resumeAvailable: true</code> in <code className="text-blue-700 bg-white border border-blue-200 px-1 py-0.5 rounded font-mono">data/portfolio.ts</code>.
            </p>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
            <div className="text-xs text-emerald-800 font-medium">
              Official PDF Resume is available and ready for download.
            </div>
            <a
              href={PORTFOLIO_DATA.personal.resumePath}
              download
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </a>
          </div>
        )}

        {/* Resume Data Sheet Content */}
        <div className="space-y-6 text-xs text-slate-700">

          {/* Header Info */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4 font-mono">
            <div>
              <span className="text-slate-500 block text-[10px] font-semibold">CANDIDATE</span>
              <span className="text-sm font-bold text-slate-900">{PORTFOLIO_DATA.personal.fullName}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] font-semibold">OBJECTIVE</span>
              <span className="text-blue-700 font-semibold">VLSI / Embedded Systems Internship</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] font-semibold">CURRENT CGPA</span>
              <span className="text-emerald-700 font-bold text-sm">{PORTFOLIO_DATA.personal.currentCGPA} / 10.0</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] font-semibold">LOCATION</span>
              <span className="text-slate-800 font-medium">{PORTFOLIO_DATA.personal.location}</span>
            </div>
          </div>

          {/* Education Summary */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-blue-700 uppercase text-[11px] font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <div className="space-y-2">
              {PORTFOLIO_DATA.education.map((edu) => (
                <div key={edu.institution} className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-slate-900 block">{edu.degree} — {edu.field}</span>
                    <span className="text-slate-600 text-[11px]">{edu.institution} ({edu.period})</span>
                  </div>
                  <span className="font-mono text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded border border-blue-200 text-[11px] font-bold">
                    {edu.scoreLabel}: {edu.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Technical Skills */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-blue-700 uppercase text-[11px] font-bold">
              <Cpu className="w-4 h-4" />
              <span>Key Technical Competencies</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px]">
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                <span className="text-blue-700 font-bold block mb-1">Hardware / HDL:</span>
                <span className="text-slate-700">Verilog HDL, FSM Design, RTL Simulation, ModelSim, Quartus Prime</span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                <span className="text-blue-700 font-bold block mb-1">Embedded Systems:</span>
                <span className="text-slate-700">ESP32, Raspberry Pi, Arduino, STM32 (Cortex-M4), I2C, SPI, UART, PWM</span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                <span className="text-blue-700 font-bold block mb-1">AI &amp; Data:</span>
                <span className="text-slate-700">Python, Scikit-Learn, Pandas, NumPy, OpenCV, K-Means, SVM, Regression</span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                <span className="text-blue-700 font-bold block mb-1">IoT &amp; Telemetry:</span>
                <span className="text-slate-700">ADS1115 16-bit ADC, MQTT, Grafana, Sensor Calibrations</span>
              </div>
            </div>
          </div>

          {/* Honors & Key Achievements */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-amber-700 uppercase text-[11px] font-bold">
              <Trophy className="w-4 h-4" />
              <span>Honors &amp; Research</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-slate-900 font-medium">TECHNOVATE 2K25 — 1st Place Winner</span>
                <span className="text-amber-700 font-mono text-[10px] font-semibold">Smart Attendance System</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-900 font-medium">IEEE ICIET 2026 Survey Paper (Paper ID: 1062)</span>
                <span className="text-indigo-700 font-mono text-[10px] font-semibold">IoT &amp; AI Water Quality</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-300 hover:border-blue-500 hover:text-blue-600 transition-colors cursor-pointer shadow-2xs"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Profile Copied!' : 'Copy Summary Text'}</span>
            </button>

            {PORTFOLIO_DATA.personal.resumeAvailable && (
              <a
                href={PORTFOLIO_DATA.personal.resumePath}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
