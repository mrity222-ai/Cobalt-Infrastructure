'use client';
import React from 'react';
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "../scroll-reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from 'next/link';
import { cn } from '@/lib/utils';

const testimonials = [
    {
        id: "testimonial-1",
        name: "James Son",
        role: "Senior Entrepreneur",
        avatar: "https://picsum.photos/seed/user1/100/100",
        review: "Cobalt Infrastructure delivered our new office building ahead of schedule and under budget. Their professionalism and quality of work are second to none.",
        rating: 5,
        isHighlighted: false
    },
    {
        id: "testimonial-2",
        name: "Priya Sharma",
        role: "Product Director",
        avatar: "https://picsum.photos/seed/user2/100/100",
        review: "Building our dream vision with Cobalt was a seamless experience. They listened to our needs and created a space that is both beautiful and functional.",
        rating: 5,
        isHighlighted: true
    },
    {
        id: "testimonial-3",
        name: "Anil Kumar",
        role: "Operations Head",
        avatar: "https://picsum.photos/seed/user3/100/100",
        review: "The industrial facility they constructed for us has significantly improved our operational efficiency. The build quality is exceptional.",
        rating: 5,
        isHighlighted: false
    },
    {
        id: "testimonial-4",
        name: "Sarah Jenkins",
        role: "Creative Lead",
        avatar: "https://picsum.photos/seed/user4/100/100",
        review: "Their attention to detail and commitment to deadlines are impressive. The project management was transparent throughout the process.",
        rating: 5,
        isHighlighted: false
    },
];

export function TestimonialsSection() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);
    
    const plugin = React.useRef(
      Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    React.useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => setCurrent(api.selectedScrollSnap()));
    }, [api]);

    return (
        <section className="py-24 md:py-32 bg-muted/20 overflow-hidden">
            <div className="container mx-auto px-4">
                <Carousel
                    setApi={setApi}
                    plugins={[plugin.current]}
                    opts={{ align: "start", loop: true }}
                    className="w-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
                        <ScrollReveal className="text-center md:text-left max-w-2xl">
                            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-foreground leading-tight uppercase">
                                WHAT OUR <span className="text-accent italic">SATISFIED</span> CLIENT SAY
                            </h2>
                            <p className="mt-4 text-muted-foreground text-[15px] md:text-[17px] font-medium">
                                Trusted by visionaries across the construction and design industry.
                            </p>
                        </ScrollReveal>
                        
                        <div className="flex items-center gap-3">
                            <CarouselPrevious className="relative translate-y-0 -left-0 -right-0 top-0 h-12 w-12 rounded-full border-border bg-white text-foreground hover:bg-primary hover:text-white shadow-sm transition-all" />
                            <CarouselNext className="relative translate-y-0 -left-0 -right-0 top-0 h-12 w-12 rounded-full bg-primary text-white border-none hover:bg-accent shadow-md transition-all" />
                        </div>
                    </div>

                    <CarouselContent className="-ml-6 py-10">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                                <ScrollReveal delay={index * 100} className="h-full">
                                    <Card className={cn(
                                        "h-full flex flex-col p-[30px] rounded-[25px] transition-all duration-500 group relative border-none shadow-soft bg-white",
                                        testimonial.isHighlighted 
                                            ? "border-2 border-primary ring-4 ring-primary/5 scale-105 shadow-xl z-10" 
                                            : "hover:shadow-xl hover:-translate-y-2"
                                    )}>
                                        <div className="flex-grow space-y-6">
                                            <div className="flex items-center gap-4">
                                                <Avatar className="h-12 w-12 border-2 border-primary/20 shadow-sm">
                                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                                                </Avatar>
                                                <div className="space-y-0.5">
                                                    <h4 className="text-[17px] font-bold text-foreground leading-tight uppercase">{testimonial.name}</h4>
                                                    <p className="text-[13px] font-medium tracking-wider text-muted-foreground">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star 
                                                        key={i} 
                                                        className="h-4 w-4 fill-accent text-accent" 
                                                    />
                                                ))}
                                            </div>

                                            <p className="text-[15px] md:text-[16px] italic leading-[1.6] font-medium text-muted-foreground">
                                                "{testimonial.review}"
                                            </p>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-border/50">
                                            <Link 
                                                href="#" 
                                                className="inline-flex items-center text-[12px] font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors group-hover:translate-x-2 transition-transform"
                                            >
                                                LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </div>
                                    </Card>
                                </ScrollReveal>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    <div className="flex justify-center items-center gap-3 mt-8">
                        {Array.from({ length: count }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => api?.scrollTo(i)}
                                className={cn(
                                    "h-2 rounded-full transition-all duration-300",
                                    i === current ? 'w-10 bg-primary' : 'w-2 bg-border'
                                )}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </Carousel>
            </div>
        </section>
    );
}