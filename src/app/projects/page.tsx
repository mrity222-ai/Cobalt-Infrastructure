
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  ArrowRight, 
  MapPin, 
  Sparkles, 
  X,
  PhoneCall,
  Rocket
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from '@/components/ui/scroll-area';

type Project = {
    name: string;
    location: string;
    status: string;
    category: string;
    imageId: string;
    description: string;
    year: string;
    technologies: string[];
    features: string[];
    stats: { label: string; value: string }[];
};

const allProjects: Project[] = [
    { 
        name: "528 Bedded Capacity Hostel, MMMUT", 
        location: "Gorakhpur", 
        status: "Ongoing", 
        category: "Government", 
        imageId: "project-mmmut-hostel",
        year: "2024 - Present",
        description: "A major residential infrastructure project within the Madan Mohan Malaviya University of Technology (MMMUT) campus. This 528-bedded hostel is designed to meet the growing housing needs of students with modern facilities and robust architectural integrity.",
        technologies: ["RC Frame Construction", "High-Efficiency MEP", "Sustainable Material Usage"],
        features: ["528 Bed Capacity", "Student Common Areas", "Modern Kitchen & Dining"],
        stats: [{ label: "Capacity", value: "528 Beds" }, { label: "Site", value: "MMMUT Campus" }]
    },
    { 
        name: "State Institute of Hotel Management", 
        location: "Gorakhpur", 
        status: "Completed", 
        category: "Government", 
        imageId: "project-gorakhpur",
        year: "2023",
        description: "The project features construction of modern training kitchens and hospitality labs, ensuring students gain hands-on practical experience. We implemented industrial-grade HVAC systems and specialized ergonomic layouts for high-volume culinary training.",
        technologies: ["Pre-cast Concrete", "Advanced HVAC", "Eco-friendly Insulation"],
        features: ["Commercial Grade Kitchens", "Modern Academic Blocks", "Sustainable Labs"],
        stats: [{ label: "Area", value: "45,000 sqft" }, { label: "Capacity", value: "500+ Students" }]
    },
    { 
        name: "Chittaura Lake & Raja Suhaildev Memorial", 
        location: "Bahraich", 
        status: "Completed", 
        category: "Government", 
        imageId: "project-bahraich",
        year: "2022",
        description: "A holistic development of Chittaura Lake and the Raja Suhaildev Memorial site, preserving immense historical and cultural importance in Bahraich. The project integrated landscape architecture with site preservation techniques to honor local heritage.",
        technologies: ["Landscape Engineering", "Heritage Restoration", "Waterfront Development"],
        features: ["Heritage Memorial", "Lakefront Walkways", "Integrated Lighting"],
        stats: [{ label: "Site Size", value: "25 Acres" }, { label: "Heritage Zones", value: "4" }]
    },
    { 
        name: "Kalyan Mandap Mau", 
        location: "Mau", 
        status: "Completed", 
        category: "Government", 
        imageId: "project-mau",
        year: "2023",
        description: "A multi-purpose community hall providing a well-equipped space for social, cultural, and religious events supporting local community bonding. Designed with superior acoustics and modular space management.",
        technologies: ["Acoustic Engineering", "Modular Roofing", "HVAC Design"],
        features: ["1000+ Capacity Hall", "Banquet Facilities", "Green Spaces"],
        stats: [{ label: "Hall Capacity", value: "1200 Pax" }, { label: "Parking Space", value: "200 Slots" }]
    },
    { 
        name: "Multi Level Parking Ayodhya", 
        location: "Ayodhya", 
        status: "Completed", 
        category: "Infrastructure", 
        imageId: "project-ayodhya",
        year: "2024",
        description: "Constructed to address the growing demand for organized parking and to support the increasing influx of pilgrims and tourists in the holy city. Features automated guidance systems and sustainable ramp designs.",
        technologies: ["Ramp Engineering", "Smart Parking Sensors", "High-Durability Flooring"],
        features: ["8 Floors", "EV Charging Stations", "Smart Guidance System"],
        stats: [{ label: "Vehicle Slots", value: "1500+" }, { label: "Safety Rating", value: "A+" }]
    },
    { 
        name: "Baikunthdham Ayodhya", 
        location: "Ayodhya", 
        status: "Completed", 
        category: "Infrastructure", 
        imageId: "project-ayodhya-2",
        year: "2023",
        description: "A spiritually significant project aimed at creating a serene and dignified final resting place that aligns with the sacred atmosphere of the holy city. Uses traditional stone aesthetics with modern structural integrity.",
        technologies: ["Traditional Stonework", "Landscaping", "Seismic Resistance"],
        features: ["Prayer Halls", "Riverside Access", "Memorial Gardens"],
        stats: [{ label: "Durability", value: "100+ Years" }, { label: "Material", value: "Red Sandstone" }]
    },
    { 
        name: "Pakka Ghat, River Ganga", 
        location: "Mirzapur", 
        status: "Completed", 
        category: "Infrastructure", 
        imageId: "project-vindhyachal",
        year: "2024",
        description: "Developing a durable and beautifully designed pakka ghat along the sacred River Ganga to enhance public access and safety. Focuses on riverbank stabilization and flood-resistant structural design.",
        technologies: ["Riverbank Stabilization", "Hydraulic Engineering", "Reinforced Concrete"],
        features: ["Bathing Steps", "Public Utilities", "Artistic Murals"],
        stats: [{ label: "Length", value: "500m" }, { label: "Safety Zones", value: "12" }]
    },
    { 
        name: "Family Court Lucknow", 
        location: "Lucknow", 
        status: "Completed", 
        category: "Government", 
        imageId: "project-lucknow-court",
        year: "2024",
        description: "Providing a modern, accessible space for family-related legal matters, including courtrooms, mediation rooms, and child-friendly areas. Designed with privacy and accessibility as core pillars.",
        technologies: ["Glass Partitioning", "Modern Connectivity", "Universal Access Design"],
        features: ["Child-Friendly Zones", "Secure Courtrooms", "Mediation Suites"],
        stats: [{ label: "Courts", value: "10" }, { label: "Public Area", value: "10,000 sqft" }]
    },
];

const galleryIds = ["gallery-1", "gallery-2", "gallery-3", "gallery-4", "gallery-5", "gallery-6"];

const ProjectsHero = () => {
    return (
        <section className="relative pt-32 md:pt-48 pb-20 min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-center overflow-hidden w-full">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#fffcf0_0%,_#fff5ed_40%,_#fdf2f8_100%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/5 blur-[120px] rounded-full opacity-40"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                <ScrollReveal className="space-y-8 md:space-y-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.25em] backdrop-blur-xl shadow-sm">
                        <Sparkles className="h-3.5 w-3.5" />
                        Our Portfolio
                    </div>

                    <h1 className="text-[36px] md:text-[56px] lg:text-[72px] font-normal tracking-tight text-[#1E293B] leading-[1.1] text-balance">
                        Landmark <span className="text-[#FF7A30] font-bold italic">Infrastructure</span> <br className="hidden md:block" /> Excellence
                    </h1>

                    <p className="text-[15px] md:text-[18px] text-[#64748B] leading-relaxed max-w-2xl mx-auto font-normal text-balance px-4 md:px-0">
                        Showcasing our journey of engineering precision and architectural innovation across major urban and rural development sites.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 px-6 md:px-0">
                        <Button size="lg" asChild className="relative group rounded-full px-10 h-14 text-[15px] font-normal shadow-xl bg-[#1E293B] text-white hover:scale-105 transition-all">
                            <Link href="#portfolio" className="flex items-center">
                                View Projects
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default function ProjectsPage() {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [mounted, setMounted] = useState(false);
    const filters = ['All', 'Ongoing', 'Completed', 'Government', 'Infrastructure'];

    useEffect(() => {
        setMounted(true);
    }, []);

    const filteredProjects = allProjects.filter(p => {
        if (filter === 'All') return true;
        if (filter === 'Government') return p.category === 'Government';
        if (filter === 'Infrastructure') return p.category === 'Infrastructure';
        return p.status === filter;
    });

    if (!mounted) return null;

    return (
        <main className="min-h-screen">
            <ProjectsHero />

            <section id="portfolio" className="py-20 md:py-32 bg-background scroll-mt-20">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto no-scrollbar py-4 mb-12">
                        {filters.map(f => (
                            <Button
                                key={f}
                                variant={filter === f ? "default" : "outline"}
                                onClick={() => setFilter(f)}
                                size="sm"
                                className={cn(
                                    "rounded-full px-8 min-w-fit h-11 text-[13px] font-normal transition-all duration-300",
                                    filter === f ? "shadow-xl bg-[#1E293B] text-white" : "hover:bg-secondary/10"
                                )}
                            >
                                {f}
                            </Button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {filteredProjects.map((project, index) => {
                            const image = PlaceHolderImages.find(img => img.id === project.imageId);
                            return (
                                <ScrollReveal key={project.name} delay={index * 100}>
                                    <Card className="group h-full flex flex-col rounded-[25px] overflow-hidden border-none shadow-soft hover:shadow-2xl transition-all duration-700 bg-card">
                                        <div className="relative aspect-square overflow-hidden shrink-0">
                                            {image && (
                                                <Image
                                                    src={image.imageUrl}
                                                    alt={project.name}
                                                    fill
                                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                />
                                            )}
                                            <div className="absolute top-5 right-5">
                                                <Badge className={cn(
                                                    "text-white rounded-full px-4 py-1.5 text-[11px] font-bold border-none shadow-lg",
                                                    project.status === "Ongoing" ? "bg-amber-500" : "bg-emerald-500"
                                                )}>
                                                    {project.status}
                                                </Badge>
                                            </div>
                                        </div>
                                        <CardContent className="p-10 flex flex-col flex-grow">
                                            <div className="space-y-4 flex-grow">
                                                <div className="space-y-2">
                                                    <h3 className="text-[22px] font-normal text-[#1E293B] group-hover:text-primary transition-colors leading-tight">{project.name}</h3>
                                                    <p className="flex items-center text-[#64748B] text-[14px] font-normal">
                                                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                                                        {project.location}, UP
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="pt-6 border-t border-border/50 flex items-center justify-end mt-8">
                                                <Button 
                                                    size="icon" 
                                                    className="rounded-full h-12 w-12 shrink-0 bg-[#1E293B] text-white hover:bg-primary transition-all duration-500 shadow-lg"
                                                    onClick={() => setSelectedProject(project)}
                                                >
                                                    <ArrowRight className="h-6 w-6" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Project Details Modal */}
            <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
                <DialogContent className="max-w-5xl h-[90vh] p-0 overflow-hidden border-none rounded-[30px] shadow-3xl bg-white">
                    <DialogHeader className="sr-only">
                        <DialogTitle>{selectedProject?.name || 'Project Details'}</DialogTitle>
                        <DialogDescription>Detailed information about the {selectedProject?.name} project.</DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="h-full">
                        {selectedProject && (
                            <div className="flex flex-col">
                                {/* Modal Header / Image */}
                                <div className="relative h-[40vh] md:h-[50vh] w-full">
                                    <Image
                                        src={PlaceHolderImages.find(img => img.id === selectedProject.imageId)?.imageUrl || ''}
                                        alt={selectedProject.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <Badge className="mb-4 rounded-full px-4 bg-[#FF7A30] text-white border-none font-bold uppercase tracking-widest text-[10px]">
                                            {selectedProject.category}
                                        </Badge>
                                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                            {selectedProject.name}
                                        </h2>
                                    </div>
                                    <Button 
                                        variant="ghost" 
                                        size="icon" 
                                        className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white"
                                        onClick={() => setSelectedProject(null)}
                                    >
                                        <X className="h-5 w-5" />
                                    </Button>
                                </div>

                                {/* Simplified Content */}
                                <div className="p-8 md:p-16 space-y-16">
                                    <section className="space-y-6 max-w-4xl">
                                        <h3 className="text-2xl font-bold text-[#1E293B] flex items-center gap-3">
                                            <Sparkles className="h-6 w-6 text-[#FF7A30]" />
                                            Project Overview
                                        </h3>
                                        <p className="text-lg text-[#64748B] leading-relaxed">
                                            {selectedProject.description}
                                        </p>
                                    </section>

                                    {/* Project Gallery - 6 Images */}
                                    <section className="space-y-8">
                                        <h3 className="text-2xl font-bold text-[#1E293B]">Project Gallery</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                                            {galleryIds.map((id, index) => {
                                                const galleryImg = PlaceHolderImages.find(img => img.id === id);
                                                return (
                                                    <div key={index} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-500 group">
                                                        {galleryImg && (
                                                            <Image
                                                                src={galleryImg.imageUrl}
                                                                alt={`Gallery View ${index + 1}`}
                                                                fill
                                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                            />
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </section>

                                    {/* Action Footer */}
                                    <div className="pt-12 border-t border-border flex flex-col sm:flex-row gap-4">
                                        <Button asChild className="h-14 rounded-full bg-[#1E293B] text-white px-10 hover:scale-[1.02] transition-transform">
                                            <Link href="/contact" className="flex items-center justify-center gap-2">
                                                <PhoneCall className="h-4 w-4" />
                                                Contact Us
                                            </Link>
                                        </Button>
                                        <Button variant="outline" asChild className="h-14 rounded-full border-primary text-primary px-10 hover:bg-primary/5 hover:scale-[1.02] transition-transform">
                                            <Link href="/contact" className="flex items-center justify-center gap-2">
                                                <Rocket className="h-4 w-4" />
                                                Start Similar Project
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </ScrollArea>
                </DialogContent>
            </Dialog>
        </main>
    );
}
