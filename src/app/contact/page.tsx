'use client';

import { useState, useEffect } from 'react';
import { ContactForm } from '@/components/sections/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { ContactInfo } from '@/components/contact-info';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ContactHero = () => {
    return (
        <section className="relative pt-32 md:pt-44 pb-20 min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-center overflow-hidden">
            {/* Premium SaaS Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#fffcf0_0%,_#fff5ed_40%,_#fdf2f8_100%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/5 blur-[120px] rounded-full opacity-40"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                <ScrollReveal className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.25em] backdrop-blur-xl shadow-sm">
                        <Sparkles className="h-3.5 w-3.5" />
                        Connect With Us
                    </div>

                    <h1 className="text-[40px] md:text-[56px] lg:text-[68px] font-bold tracking-tight text-[#1A1A1A] leading-[1.1] text-balance">
                        Let's Build Your <span className="text-primary italic">Vision</span> <br className="hidden md:block" /> Together
                    </h1>

                    <p className="text-[15px] md:text-[18px] text-[#666] leading-relaxed max-w-2xl mx-auto font-normal text-balance">
                        Reach out for inquiries or to start your next high-impact infrastructure project with precision, excellence, and dedicated engineering.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                        <Button size="lg" asChild className="relative group rounded-full px-10 h-14 text-[15px] font-bold shadow-xl bg-[#1A1A1A] text-white hover:scale-105 transition-all">
                            <Link href="#contact-form" className="flex items-center">
                                Send Message
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen">
      <ContactHero />
      <section id="contact-form" className="py-20 md:py-32 bg-background scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-10">
              <ScrollReveal>
                <Card className="shadow-2xl rounded-[40px] border-none bg-background p-6 md:p-10 border border-border/50">
                  <CardHeader className="p-0 mb-10">
                    <CardTitle className="text-[32px] font-bold text-[#1A1A1A] mb-3">Get a Consultation</CardTitle>
                    <CardDescription className="text-[15px] font-medium text-[#666]">Tell us about your project requirements and we'll get back to you with an expert strategy.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ContactForm />
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
            <div className="space-y-10">
                <ScrollReveal delay={200}>
                    <ContactInfo />
                </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
