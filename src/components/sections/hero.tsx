'use client';

import { ScrollReveal } from '../scroll-reveal';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-52 overflow-hidden min-h-screen flex items-center bg-background w-full">
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,107,0,0.06)_0%,_transparent_60%)]" />
         <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,58,138,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,58,138,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          
          <ScrollReveal className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white shadow-soft border border-secondary/10">
              <div className="flex -space-x-2 mr-1">
                {[1, 2, 3].map((i) => (
                  <Avatar key={i} className="h-7 w-7 border-2 border-white shadow-sm">
                    <AvatarImage src={`https://picsum.photos/seed/u-${i}/100/100`} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <span className="text-[12px] tracking-widest text-secondary/70 uppercase font-bold">50+ Infrastructure Projects Delivered</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100} className="space-y-6 md:space-y-10">
            <h1 className="text-secondary text-balance">
              Cobalt Infrastructure <br className="hidden md:block" />
              Engineering <span className="text-primary italic">Excellence</span>
            </h1>
            <p className="text-[16px] md:text-[19px] text-foreground/70 leading-relaxed max-w-2xl mx-auto font-medium px-4 md:px-0">
              Cobalt Infrastructure Pvt. Ltd. transforms ambitious visions into resilient infrastructure landmarks across Uttar Pradesh. We blend innovative design with precision engineering.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4 px-6 md:px-0">
               <Button size="lg" asChild className="rounded-xl shadow-glow-orange group">
                  <Link href="/projects" className="flex items-center">
                    Discover Portfolio
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
               </Button>
               <Button size="lg" variant="outline" asChild className="rounded-xl border-secondary/20 text-secondary hover:bg-secondary/5">
                  <Link href="/contact">Request Consultation</Link>
               </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 z-20">
        <Card className="bg-white/80 backdrop-blur-2xl border border-secondary/10 rounded-[20px] p-2 md:p-3 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="bg-primary rounded-xl p-5 flex flex-col justify-center text-center shadow-lg">
              <p className="text-[28px] text-white font-bold leading-none">6+</p>
              <p className="text-white/80 text-[10px] uppercase tracking-widest font-bold mt-2">Years Exp</p>
            </div>
            <div className="bg-secondary/5 rounded-xl p-5 flex flex-col justify-center text-center border border-secondary/10">
              <p className="text-[28px] text-secondary font-bold leading-none">50+</p>
              <p className="text-secondary/50 text-[10px] uppercase tracking-widest font-bold mt-2">Projects</p>
            </div>
            <div className="bg-secondary/5 rounded-xl p-5 flex flex-col justify-center text-center border border-secondary/10">
              <p className="text-[28px] text-secondary font-bold leading-none">50+</p>
              <p className="text-secondary/50 text-[10px] uppercase tracking-widest font-bold mt-2">Clients</p>
            </div>
            <div className="bg-secondary/5 rounded-xl p-5 flex flex-col justify-center text-center border border-secondary/10">
              <p className="text-[28px] text-secondary font-bold leading-none">100%</p>
              <p className="text-secondary/50 text-[10px] uppercase tracking-widest font-bold mt-2">Quality</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
