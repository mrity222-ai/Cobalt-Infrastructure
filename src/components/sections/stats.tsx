'use client';

import { AnimatedCounter } from "@/components/animated-counter";
import { ScrollReveal } from "../scroll-reveal";
import { Award, GanttChartSquare, Users } from "lucide-react";

const stats = [
  { value: 6, label: "Years Experience", icon: Award, suffix: "+" },
  { value: 50, label: "Projects Completed", icon: GanttChartSquare, suffix: "+" },
  { value: 50, label: "Satisfied Clients", icon: Users, suffix: "+" },
];

export function StatsSection() {
  return (
    <section className="py-24 bg-white border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 150} className="w-full">
              <div className="flex items-center gap-6 group">
                <div className="p-5 bg-primary/5 rounded-2xl group-hover:bg-primary/10 transition-colors">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
                    <AnimatedCounter to={stat.value} />
                    {stat.suffix}
                  </p>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
