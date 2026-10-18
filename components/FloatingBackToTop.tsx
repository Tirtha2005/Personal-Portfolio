'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function FloatingBackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of portfolio"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-300 text-slate-700 hover:text-blue-600 hover:border-blue-400 hover:shadow-lg transition-all duration-300 active:scale-90 cursor-pointer shadow-md"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
