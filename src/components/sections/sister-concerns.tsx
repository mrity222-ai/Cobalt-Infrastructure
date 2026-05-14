
'use client';

import { Card } from "@/components/ui/card";
import { ScrollReveal } from "../scroll-reveal";
import { ArrowUpRight, BadgeCheck, Clock, Construction } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const featuredProjects = [
  {
    title: "Chief Minister Composite Vidhyalaya",
    location: "Madhuban, Mau",
    imageId: "project-vidhyalaya-mau",
    status: "Ongoing",
    statusColor: "bg-amber-500",
    icon: Construction
  },
  {
    title: "Pakka Ghat at Ganga River",
    location: "Vindhyachal, Mirzapur",
    imageId: "project-ghat-vindhyachal-new",
    status: "Almost Complete",
    statusColor: "bg-cyan-500",
    icon: Clock
  },
  {
    title: "State Institute of Hotel Management (Phase-2)",
    location: "GIDA, Gorakhpur",
    imageId: "project-sihm-phase2",
    status: "Ongoing",
    statusColor: "bg-amber-500",
    icon: Construction
  }
];

export function SisterConcernsSection() {
  return (
    <section className="py-24 md:py-32 bg-background w-full overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-[32px] md:text-[48px] font-bold leading-tight tracking-tight text-foreground">
            Featured <span className="text-primary italic">Projects</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-[15px] md:text-[18px] font-normal max-w-2xl mx-auto">
            Showcasing our high-impact infrastructure developments currently shaping the landscape of Uttar Pradesh.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featuredProjects.map((project, index) => {
            const image = PlaceHolderImages.find(img => img.id === project.imageId);
            return (
              <ScrollReveal key={project.title} delay={index * 100} className="w-full h-full">
                <Card className="group relative overflow-hidden rounded-[30px] border-none shadow-soft hover:shadow-2xl transition-all duration-700 bg-white flex flex-col h-full">
                  <div className="relative aspect-square overflow-hidden shrink-0">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-colors duration-500"></div>
                    <div className="absolute top-6 right-6">
                      <Badge className={cn("text-white border-none px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg", project.statusColor)}>
                        <project.icon className="w-3 h-3 mr-1.5" />
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-4">
                      <p className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{project.location}</p>
                      <h3 className="text-[20px] font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                      <Link 
                        href="/projects" 
                        className="text-[13px] font-bold text-foreground group-hover:text-primary flex items-center gap-2 transition-all"
                      >
                        View Project Details
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
