'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import AuroraBackground from '@/components/AuroraBackground';
import { TextScramble } from '@/components/ui/text-scramble';

export default function NotFound() {
  const [countdown, setCountdown] = useState(10);
  const [triggerScramble, setTriggerScramble] = useState(true);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      window.location.href = '/';
    }
  }, [countdown]);

  const handleScrambleComplete = () => {
    setTriggerScramble(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden relative z-10">
      <AuroraBackground speed={0.2} />
      
      <div className="container mx-auto text-center relative z-20 fade-in">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-blue-500/30 rounded-full -translate-y-4"></div>
            <Image
              src="/AuroraLogo.svg"
              alt="Aurora N&N Business Solution Inc."
              width={400}
              height={400}
              priority
              className="h-auto w-64 md:w-96 relative z-10 drop-shadow-2xl"
            />
          </div>
        </div>
        
        {/* 404 Error */}
        <div className="mb-8">
          <TextScramble 
            as="div" 
            className="text-8xl md:text-9xl font-bold gradient-text mb-4 tracking-tight" 
            trigger={triggerScramble}
            onScrambleComplete={handleScrambleComplete}
            duration={1.5}
          >
            404
          </TextScramble>
          <h1 className="text-4xl md:text-6xl font-bold text-white/90 mb-6">Oops! Page Not Found</h1>
        </div>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        {/* Countdown */}
        <div className="glass-strong rounded-3xl p-8 md:p-12 mb-12 max-w-md mx-auto slide-in">
          <p className="text-slate-400 mb-6 text-lg md:text-xl font-medium">Redirecting to homepage in</p>
          <div className="text-6xl md:text-7xl font-black gradient-text-aurora mb-2 aurora-shimmer">
            {countdown}
          </div>
          <p className="text-sm text-slate-500">seconds...</p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            href="/"
            className="group relative px-8 py-4 rounded-full font-semibold text-white text-lg overflow-hidden glow-hover bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 -skew-x-3 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative flex items-center gap-2">
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Go Home
            </span>
          </Link>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
            }}
            className="glass px-8 py-4 rounded-full font-semibold text-white text-lg hover:bg-white/20 transition-all border border-white/30 glow-hover"
          >
            Skip Wait
          </Link>
        </div>
      </div>
    </main>
  );
}
