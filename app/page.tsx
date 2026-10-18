'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Research from '@/components/Research';
import EngineeringWorkflow from '@/components/EngineeringWorkflow';
import ResumeSection from '@/components/ResumeSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ResumeModal from '@/components/ResumeModal';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import FloatingBackToTop from '@/components/FloatingBackToTop';
import CursorGlow from '@/components/CursorGlow';

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-600/15 selection:text-blue-900">
      {/* Top Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Subtle Desktop Interactive Cursor Lighting */}
      <CursorGlow />

      {/* Fixed Sticky Header Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Portfolio Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Research />
        <EngineeringWorkflow />
        <ResumeSection onOpenResume={() => setIsResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Engineering Footer */}
      <Footer />

      {/* Floating Return to Top */}
      <FloatingBackToTop />

      {/* Interactive Resume Data Sheet & Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
