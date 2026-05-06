'use client';

import { useState, useEffect } from 'react';
import { Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Premium loading sequence
    const fadeTimeout = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    const removeTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-all duration-1000 ease-in-out",
        isFading ? "opacity-0 invisible scale-110" : "opacity-100 visible scale-100"
      )}
    >
      {/* Background layer with subtle branding and depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute inset-0 z-0">
        <Image 
          src="/pro/logo.png" 
          alt="Loading Background" 
          fill 
          className="opacity-[0.03] mix-blend-overlay object-cover pointer-events-none"
          priority
        />
      </div>
      
      <div className="relative flex flex-col items-center text-center z-10">
        {/* Pulsing Animated Icon Container */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-primary/30 blur-[60px] rounded-full animate-pulse" />
          <div className="relative bg-white/80 dark:bg-card/80 backdrop-blur-2xl p-8 rounded-[3rem] shadow-3xl border border-white/40">
            <Building2 className="h-16 w-16 text-primary animate-bounce-slow" />
          </div>
        </div>
        
        {/* Branding & Progress */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter text-foreground uppercase">
              COBALT <span className="text-primary italic">INFRASTRUCTURE</span>
            </h2>
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.5em] opacity-50 font-headline">
              Engineering the Future
            </p>
          </div>
          
          {/* Animated Progress Bar */}
          <div className="relative w-64 h-1.5 bg-secondary rounded-full mx-auto overflow-hidden shadow-inner">
            <div className="absolute top-0 left-0 h-full bg-primary animate-loading-bar rounded-full" style={{ width: '40%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
