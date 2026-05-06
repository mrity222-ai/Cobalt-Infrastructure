'use client';

import { Card } from "@/components/ui/card";
import { Landmark, ArrowRight, Building2, Paintbrush, Home } from 'lucide-react';
import { ScrollReveal } from "../scroll-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Home,
    title: "Residential Development",
    description: "Bespoke high-end residences and sustainable housing solutions designed for the modern lifestyle.",
    color: "text-primary",
  },
  {
    icon: Building2,
    title: "Commercial Spaces",
    description: "Corporate headquarters and retail hubs that integrate technology, efficiency, and futuristic aesthetics.",
    color: "text-primary",
  },
  {
    icon: Landmark,
    title: "Public Infrastructure",
    description: "Strategic government projects and civic landmarks delivering long-term value to communities.",
    color: "text-primary",
  },
  {
    icon: Paintbrush,
    title: "Modern Renovation",
    description: "Revitalizing existing urban spaces with contemporary design concepts and structural modernization.",
    color: "text-primary",
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
          <ScrollReveal className="max-w-2xl">
            <p className="text-primary font-bold uppercase tracking-widest text-[12px] mb-4">Our Expertise</p>
            <h2 className="text-secondary">
              Strategic Infrastructure <span className="text-primary italic">Solutions</span>
            </h2>
            <p className="text-[17px] text-foreground/70 mt-4 font-medium">
              We provide comprehensive engineering and design services tailored for the evolving needs of modern infrastructure.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Button asChild variant="outline" className="rounded-xl px-10 h-14 border-secondary/20 text-secondary">
              <Link href="/services">
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 150} className="h-full">
              <Card className="h-full rounded-[25px] p-10 flex flex-col group transition-all duration-500 border border-secondary/5 shadow-soft bg-white hover:shadow-2xl hover:-translate-y-2">
                <div className={cn(
                  "w-16 h-16 rounded-2xl bg-secondary/5 flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white shadow-sm",
                  service.color
                )}>
                  <service.icon className="w-8 h-8" />
                </div>
                <div className="flex-grow mt-10">
                    <h3 className="text-[22px] text-secondary mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-[15px] text-foreground/60 leading-relaxed font-medium">
                        {service.description}
                    </p>
                </div>
                <div className="mt-10 pt-8 border-t border-secondary/5">
                   <Link href="/services" className="inline-flex items-center text-[12px] uppercase text-primary font-bold tracking-widest hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                   </Link>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}