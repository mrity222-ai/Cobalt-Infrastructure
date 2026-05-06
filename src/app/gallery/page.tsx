'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Button } from '@/components/ui/button';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const galleryCategories = ["All", "Infrastructure", "Industrial", "Residential", "Public Works"];

const galleryImages = [
  { id: "gallery-1", category: "Infrastructure", title: "Bridge Framework" },
  { id: "gallery-2", category: "Industrial", title: "Steel Structure" },
  { id: "gallery-3", category: "Infrastructure", title: "Ghat Development" },
  { id: "gallery-4", category: "Residential", title: "Modern Facade" },
  { id: "gallery-5", category: "Public Works", title: "Civic Landmark" },
  { id: "gallery-6", category: "Industrial", title: "Production Hub" },
  { id: "project-lucknow", category: "Residential", title: "Urban Living" },
  { id: "project-ayodhya", category: "Infrastructure", title: "Parking Complex" },
  { id: "project-gorakhpur", category: "Industrial", title: "Manufacturing Site" },
  { id: "project-bahraich", category: "Public Works", title: "Lakefront View" },
  { id: "project-mau", category: "Public Works", title: "Community Hall" },
  { id: "project-vindhyachal", category: "Infrastructure", title: "River Access" },
];

const GalleryHero = () => {
  return (
    <section className="relative pt-32 md:pt-48 pb-20 min-h-[50vh] flex items-center justify-center text-center overflow-hidden w-full">
      {/* Premium SaaS Background Effects (Synced with Contact Hero) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#fffcf0_0%,_#fff5ed_40%,_#fdf2f8_100%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/5 blur-[120px] rounded-full opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <ScrollReveal className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.25em] backdrop-blur-xl shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Visual Excellence
          </div>

          <h1 className="text-[40px] md:text-[64px] font-bold tracking-tight text-foreground leading-tight uppercase">
            Project <span className="text-primary italic">Gallery</span>
          </h1>

          <p className="text-[16px] md:text-[18px] text-muted-foreground leading-relaxed max-w-2xl mx-auto font-normal text-balance">
            A photographic journey through our most significant infrastructure landmarks and architectural achievements.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{ id: string; title: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredImages = galleryImages.filter(img => 
    filter === "All" || img.category === filter
  );

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background">
      <GalleryHero />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="flex items-center justify-center gap-3 overflow-x-auto no-scrollbar py-4 mb-16">
            {galleryCategories.map(cat => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full px-8 h-11 text-[13px] font-bold transition-all",
                  filter === cat ? "shadow-lg" : "hover:bg-primary/5"
                )}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((img, index) => {
              const imageData = PlaceHolderImages.find(p => p.id === img.id);
              return (
                <ScrollReveal key={img.id} delay={index * 50}>
                  <div 
                    className="group relative aspect-[4/3] rounded-[30px] overflow-hidden cursor-pointer shadow-soft hover:shadow-2xl transition-all duration-700"
                    onClick={() => setSelectedImage(img)}
                  >
                    {imageData && (
                      <Image
                        src={imageData.imageUrl}
                        alt={img.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{img.category}</p>
                      <h3 className="text-white text-xl font-bold">{img.title}</h3>
                      <div className="mt-4 h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <Maximize2 className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-6xl p-0 overflow-hidden border-none bg-black/90 backdrop-blur-xl">
          <DialogHeader className="sr-only">
            <DialogTitle>{selectedImage?.title || 'Gallery Image'}</DialogTitle>
          </DialogHeader>
          <div className="relative aspect-[16/10] w-full">
            {selectedImage && (
              <>
                <Image
                  src={PlaceHolderImages.find(p => p.id === selectedImage.id)?.imageUrl || ''}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
                </div>
              </>
            )}
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
