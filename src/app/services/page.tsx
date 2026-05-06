'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Building, Paintbrush, Landmark, ArrowRight, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const services = [
    {
        icon: Home,
        title: "Residential Construction",
        points: ["Smart Homes & Villas", "Architectural Planning", "Sustainable Living"],
        tagline: "Visionary designs for your dream residence.",
        imageId: "project-lucknow",
        color: "bg-primary/10 text-primary"
    },
    {
        icon: Building,
        title: "Commercial Development",
        points: ["Next-Gen Offices", "Premium Retail Malls", "Business Hubs"],
        tagline: "Corporate environments that drive growth.",
        imageId: "project-ayodhya",
        color: "bg-secondary/10 text-secondary"
    },
    {
        icon: Landmark,
        title: "Public Infrastructure",
        points: ["Government Landmarks", "Public Works", "Urban Transformation"],
        tagline: "Building lasting impact for the community.",
        imageId: "project-vindhyachal",
        color: "bg-emerald-50 text-emerald-600"
    },
    {
        icon: Paintbrush,
        title: "Futuristic Renovation",
        points: ["Heritage Restoration", "Modernization", "High-End Redesign"],
        tagline: "Revitalizing spaces with modern concepts.",
        imageId: "project-ayodhya-2",
        color: "bg-primary/10 text-primary"
    }
];

const ServicesHero = () => {
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
                        Our Expert Capabilities
                    </div>

                    <h1 className="text-[40px] md:text-[56px] lg:text-[68px] font-bold tracking-tight text-foreground leading-[1.1] text-balance">
                        Advanced <span className="text-primary italic">Engineering</span> <br className="hidden md:block" /> Solutions
                    </h1>

                    <p className="text-[15px] md:text-[18px] text-muted-foreground leading-relaxed max-w-2xl mx-auto font-normal text-balance">
                        We provide comprehensive business solutions across the construction lifecycle, integrating technology and sustainability for the next generation.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                        <Button size="lg" asChild className="relative group rounded-full px-10 h-14 text-[15px] font-bold shadow-xl bg-secondary text-white hover:scale-105 transition-all">
                            <Link href="/contact" className="flex items-center">
                                Get Quote
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default function ServicesPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <main className="min-h-screen">
            <ServicesHero />

            <section className="py-20 md:py-32 bg-background">
                <div className="container mx-auto px-4 space-y-20">
                    {services.map((service, index) => (
                        <ScrollReveal key={service.title} delay={index * 100}>
                            <Card className="rounded-[40px] overflow-hidden border-none shadow-soft hover:shadow-2xl transition-all duration-1000 bg-card group">
                                <div className={cn(
                                    "grid grid-cols-1 md:grid-cols-2 gap-0",
                                    index % 2 !== 0 && "md:flex-row-reverse"
                                )}>
                                    <div className={cn("relative h-[300px] md:h-auto min-h-[450px]", index % 2 !== 0 && "md:order-2")}>
                                        {PlaceHolderImages.find(img => img.id === service.imageId) && (
                                            <Image
                                                src={PlaceHolderImages.find(img => img.id === service.imageId)!.imageUrl}
                                                alt={service.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-foreground/10 backdrop-blur-[1px]"></div>
                                    </div>
                                    <div className={cn("p-10 md:p-16 lg:p-20 flex flex-col justify-center space-y-8", index % 2 !== 0 && "md:order-1")}>
                                        <div className={cn("h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform group-hover:rotate-6", service.color)}>
                                            <service.icon className="h-8 w-8" />
                                        </div>
                                        <div className="space-y-4">
                                            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-tight text-foreground">{service.title}</h2>
                                            <p className="text-[16px] md:text-[18px] text-primary font-bold italic">"{service.tagline}"</p>
                                        </div>
                                        <ul className="space-y-4">
                                            {service.points.map(point => (
                                                <li key={point} className="flex items-center gap-3 text-[14px] md:text-[16px] text-muted-foreground font-medium">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="pt-6">
                                            <Button size="lg" asChild className="w-full sm:w-auto rounded-full font-bold shadow-xl bg-secondary text-white h-14 px-10">
                                                <Link href="/contact">Consult Now</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </section>
        </main>
    );
}