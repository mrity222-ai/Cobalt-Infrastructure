'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  distance?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  distance = 30,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else {
          if (!triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      { 
        threshold: isMobile ? 0.05 : threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, triggerOnce, isMobile]);

  const revealDistance = isMobile ? 10 : distance;

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out will-change-transform duration-[800ms]',
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : `opacity-0 translate-y-[${revealDistance}px] scale-[0.98]`,
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}