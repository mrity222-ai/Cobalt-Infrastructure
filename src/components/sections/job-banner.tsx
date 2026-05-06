'use client';

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "../scroll-reveal";
import { Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function JobBannerSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          {/* Premium Icon Header */}
          <div className="inline-flex items-center justify-center p-5 rounded-[2rem] bg-white shadow-soft mb-12 group transition-transform hover:scale-110">
            <Building2 className="h-10 w-10 text-primary" />
          </div>

          {/* Heading with Signature Highlight */}
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground mb-8">
            Build the Future With <span className="text-accent italic">Cobalt</span>
          </h2>

          {/* Elegant Subheading */}
          <p className="text-[16px] md:text-[20px] text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12 font-medium">
            We are always looking for visionary architects, precision engineers, and dedicated project managers. Send us your portfolio today to join our mission.
          </p>

          {/* Luxury SaaS Button */}
          <div className="flex justify-center pt-4">
            <Button 
              size="lg" 
              asChild 
              className="rounded-full px-12 h-16 text-base font-bold bg-gradient-to-r from-primary to-accent text-white border-none shadow-xl hover:shadow-glow-blue hover:-translate-y-1 transition-all group"
            >
              <Link href="/contact" className="flex items-center">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}