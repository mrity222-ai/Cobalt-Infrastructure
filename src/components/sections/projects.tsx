'use client';

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollReveal } from '../scroll-reveal';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    id: "project-lucknow",
    year: "2022 - 2024",
    title: "Premium Residential Project in Lucknow",
    description: "A modern residential development designed with durability, comfort, and elegant living standards."
  },
  {
    id: "project-ayodhya",
    year: "2023 - 2025",
    title: "Luxury Housing Project in Ayodhya",
    description: "A high-end housing project with advanced infrastructure and premium lifestyle features."
  },
  {
    id: "project-gorakhpur",
    year: "2021 - 2023",
    title: "Gorakhpur Industrial Hub",
    description: "A state-of-the-art industrial park designed to boost manufacturing and economic growth in the region."
  },
  {
    id: "project-lucknow", // Reusing image for demo
    year: "2024 - 2026",
    title: "Eco-Friendly Apartments, Lucknow",
    description: "Sustainable and green apartment complex with modern amenities and a smaller carbon footprint."
  },
];

export function ProjectsSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
        >
            <ScrollReveal>
                <div className="flex flex-col md:flex-row justify-between md:items-end mb-12">
                    <div className="max-w-2xl">
                        <p className="text-sm font-medium text-muted-foreground mb-2">/ OUR PROJECTS</p>
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-balance">Achieving Greatness with Every Project We Complete</h2>
                        <p className="mt-4 text-base text-muted-foreground">
                            Achieving greatness in every project is our journey of passion. Each endeavor is an opportunity to innovate and inspire our clients.
                        </p>
                    </div>
                    <div className="hidden md:flex gap-3 mt-6 md:mt-0">
                        <CarouselPrevious className="relative translate-y-0 -left-0 -right-0 top-0 h-12 w-12 rounded-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300" />
                        <CarouselNext className="relative translate-y-0 -left-0 -right-0 top-0 h-12 w-12 rounded-full border-accent/50 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300" />
                    </div>
                </div>
            </ScrollReveal>

            <CarouselContent className="-ml-4">
                {projects.map((project, index) => {
                    const image = PlaceHolderImages.find(img => img.id === project.id);
                    return (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2">
                           <ScrollReveal delay={index * 100}>
                             <div className="group h-full">
                                <Card className="overflow-hidden h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 rounded-2xl bg-background border-none">
                                    <div className="relative h-72 overflow-hidden rounded-t-2xl image-zoom-container">
                                    {image && (
                                        <Image
                                          src={image.imageUrl}
                                          alt={project.title}
                                          fill
                                          className="object-cover"
                                          data-ai-hint={image.imageHint}
                                        />
                                    )}
                                    </div>
                                    <CardContent className="p-6">
                                        <p className="text-sm text-muted-foreground mb-2">{project.year}</p>
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-muted-foreground text-sm mb-4 min-h-[40px]">{project.description}</p>
                                        <Button variant="link" className="px-0 font-semibold text-primary link-underline group-hover:text-accent">
                                            Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </CardContent>
                                </Card>
                             </div>
                           </ScrollReveal>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
             <div className="flex md:hidden gap-3 mt-8 justify-center">
                <CarouselPrevious className="relative translate-y-0 -left-0 -right-0 top-0 h-12 w-12 rounded-full border-primary/50 text-primary" />
                <CarouselNext className="relative translate-y-0 -left-0 -right-0 top-0 h-12 w-12 rounded-full border-accent/50 bg-accent text-accent-foreground" />
            </div>
        </Carousel>
      </div>
    </section>
  );
}
