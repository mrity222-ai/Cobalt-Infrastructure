'use client';

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ScrollReveal } from "../scroll-reveal";
import { ShieldCheck, Users, Zap, Headset } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
    { 
        icon: Zap,
        title: "Modern Technique",
        description: "Precision construction using advanced automated workflows."
    },
    { 
        icon: ShieldCheck,
        title: "Quality Materials",
        description: "Exclusively top-grade industrial materials for maximum safety."
    },
    { 
        icon: Users,
        title: "Expert Team",
        description: "Workmanship delivered by seasoned engineering professionals."
    },
    { 
        icon: Headset,
        title: "24/7 Priority Support",
        description: "Dedicated assistance for seamless project lifecycle management."
    },
];

export function FeatureSection() {
    const projectManagerImage = PlaceHolderImages.find(img => img.id === 'feature-video-thumb');

    return (
        <section className="py-24 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <ScrollReveal>
                        <div className="space-y-12">
                            <div className="text-center lg:text-left">
                                <p className="text-primary text-[11px] tracking-[0.3em] uppercase mb-4 font-bold">Why Choose Us</p>
                                <h2 className="text-[32px] md:text-[48px] text-foreground font-bold leading-tight">
                                    Quality Without <span className="text-accent">Compromise</span>
                                </h2>
                                <p className="mt-6 text-[15px] md:text-[18px] text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                                    We integrate sustainability, innovation, and transparency into every square foot we build, ensuring your vision is brought to life with precision.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 md:gap-8">
                                {features.map((feature, index) => (
                                    <Card key={index} className="bg-white p-6 md:p-8 rounded-[25px] border-none shadow-soft transition-all hover:shadow-xl group">
                                        <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <feature.icon className="h-6 w-6 transition-transform group-hover:rotate-12" />
                                        </div>
                                        <h3 className="text-[18px] text-foreground mb-2 font-bold group-hover:text-primary transition-colors">{feature.title}</h3>
                                        <p className="text-[13px] text-muted-foreground leading-relaxed">{feature.description}</p>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className="relative group hidden lg:block">
                            <div className="absolute -inset-10 bg-primary/5 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group-hover:scale-[1.02] transition-transform duration-700 aspect-[4/5]">
                                 {projectManagerImage && (
                                    <Image
                                        src={projectManagerImage.imageUrl}
                                        alt={projectManagerImage.description}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={projectManagerImage.imageHint}
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}