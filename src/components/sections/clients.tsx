'use client';
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ScrollReveal } from "../scroll-reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const clientLogos = [
    { id: "client-logo-1" },
    { id: "client-logo-2" },
    { id: "client-logo-3" },
    { id: "client-logo-4" },
    { id: "client-logo-5" },
    { id: "client-logo-6" },
    { id: "client-logo-1" },
    { id: "client-logo-2" },
    { id: "client-logo-3" },
    { id: "client-logo-4" },
];

export function ClientsSection() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <h3 className="text-center text-lg font-semibold text-muted-foreground">Trusted by industry leaders and visionary partners</h3>
                    <div className="mt-8">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 2000,
                                    stopOnInteraction: false,
                                })
                            ]}
                        >
                            <CarouselContent>
                                {clientLogos.map((logo, index) => {
                                    const image = PlaceHolderImages.find(img => img.id === logo.id);
                                    return (
                                        <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/6">
                                            <div className="p-4 flex items-center justify-center">
                                                {image && (
                                                    <Image
                                                        src={image.imageUrl}
                                                        alt={image.description}
                                                        width={140}
                                                        height={70}
                                                        className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                                                        data-ai-hint={image.imageHint}
                                                    />
                                                )}
                                            </div>
                                        </CarouselItem>
                                    )
                                })}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
