'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '../scroll-reveal';
import { Badge } from '@/components/ui/badge';

export function CtaSection() {
    const engineersImage = PlaceHolderImages.find(img => img.id === 'about-trust-engineers');

    return (
        <section className="py-24 md:py-32 bg-saas-gradient relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <ScrollReveal>
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
                            {engineersImage && (
                                <Image
                                    src={engineersImage.imageUrl}
                                    alt="Cobalt Infrastructure engineers at a construction site"
                                    fill
                                    className="object-cover"
                                    data-ai-hint={engineersImage.imageHint}
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/95 backdrop-blur-md rounded-[20px] shadow-lg border border-white/20">
                                <div className="flex items-center gap-2 text-primary text-sm font-bold mb-2">
                                    <Star className="h-4 w-4 fill-primary" />
                                    6+ Years of Excellence
                                </div>
                                <p className="text-lg text-foreground italic leading-relaxed font-bold">
                                    "Cobalt Infrastructure is transforming ambitious ideas into reality with uncompromised precision."
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className="space-y-8">
                            <Badge variant="outline" className="rounded-full bg-primary/5 text-primary border-primary/10 px-4 py-1 text-[10px] font-bold uppercase tracking-widest">About Our Vision</Badge>
                            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-normal leading-tight tracking-tight text-foreground">
                                Your Vision, Our <span className="text-primary italic font-bold">Reality</span> Since 2021
                            </h2>
                            <p className="text-[16px] md:text-[18px] text-muted-foreground leading-relaxed font-normal">
                                Cobalt Infrastructure Pvt. Ltd. is a leading company in Uttar Pradesh specializing in innovative, premium, and futuristic infrastructure solutions. We bridge the gap between architectural vision and structural engineering.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <p className="text-xl font-bold text-foreground">Sustainable</p>
                                    <p className="text-muted-foreground leading-relaxed text-sm">Eco-friendly materials and energy-efficient building practices for Uttar Pradesh's future.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xl font-bold text-foreground">Precise</p>
                                    <p className="text-muted-foreground leading-relaxed text-sm">Micron-level accuracy in architectural planning and structural execution.</p>
                                </div>
                            </div>
                            <div className="pt-4">
                                <Button size="lg" asChild className="rounded-full w-full sm:w-auto px-10 bg-secondary text-white">
                                    <Link href="/about">
                                        About Cobalt Infrastructure <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
