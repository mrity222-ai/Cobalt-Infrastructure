'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/scroll-reveal';
import {
  ArrowRight,
  Users,
  BadgeCheck,
  Clock,
  HardHat,
  ClipboardList,
  PenTool,
  Rocket,
  GanttChartSquare,
  MapPin,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutHero = () => {
    return (
        <section className="relative pt-32 md:pt-48 pb-20 min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-center overflow-hidden w-full">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#fff9f5_0%,_#fff1f1_40%,_#f8fafc_100%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/5 blur-[120px] rounded-full opacity-40"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                <ScrollReveal className="space-y-8 md:space-y-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-primary/20 text-primary text-[10px] font-normal uppercase tracking-[0.25em] backdrop-blur-xl shadow-sm">
                        <Sparkles className="h-3.5 w-3.5" />
                        Infrastructure Redefined
                    </div>

                    <h1 className="text-[36px] md:text-[56px] lg:text-[72px] font-normal tracking-tight text-foreground leading-[1.1] text-balance">
                        Building the <span className="text-primary font-bold italic">Legacy</span> <br className="hidden md:block" /> of Cobalt Infrastructure
                    </h1>

                    <p className="text-[15px] md:text-[18px] text-muted-foreground leading-relaxed max-w-2xl mx-auto font-normal text-balance px-4 md:px-0">
                        Cobalt Infrastructure Pvt. Ltd. delivers high-quality construction and architectural design solutions with precision across Uttar Pradesh.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 px-6 md:px-0">
                        <Button size="lg" asChild className="relative group rounded-full px-10 h-14 text-[15px] font-normal shadow-xl bg-secondary text-white hover:scale-105 transition-all">
                            <Link href="/contact" className="flex items-center">
                                Start Your Project
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

const CompanyOverviewSection = () => {
    const overviewImage = PlaceHolderImages.find(img => img.id === 'about-trust-engineers');
    return (
        <section className="py-20 md:py-32 bg-background w-full overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <ScrollReveal>
                        <div className="space-y-8 text-center lg:text-left">
                            <h2 className="text-[32px] md:text-[48px] font-normal text-foreground leading-tight">
                                Who <span className="text-primary font-bold">We Are</span>
                            </h2>
                            <p className="text-muted-foreground text-[15px] md:text-[17px] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Cobalt Infrastructure Pvt. Ltd. is a leading construction and design company based in Gomti Nagar, Lucknow. We specialize in delivering high-impact infrastructure projects across Uttar Pradesh with a strong focus on innovation and durable design.
                            </p>
                            <div className="flex items-start p-6 bg-primary/5 rounded-[25px] w-full sm:w-fit mx-auto lg:mx-0 border border-primary/10 shadow-sm">
                                <MapPin className="h-6 w-6 mr-4 text-primary shrink-0 mt-0.5" />
                                <span className="font-normal text-foreground/80 text-[14px] md:text-[16px] leading-snug">5/270, Vipul Khand, Gomti Nagar, Lucknow, 226010</span>
                            </div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                         <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white aspect-video md:aspect-[16/10] w-full">
                            {overviewImage && (
                                <Image
                                    src={overviewImage.imageUrl}
                                    alt="Cobalt Infrastructure engineers discussing blueprints"
                                    fill
                                    className="object-cover transition-transform duration-1000 hover:scale-110"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            )}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

const GrowthSection = () => {
  const supportingStats = [
    { icon: GanttChartSquare, text: "10+ Projects Delivered" },
    { icon: Calendar, text: "Established in 2021" },
    { icon: BadgeCheck, text: "Government Approved" },
    { icon: Users, text: "High Client Satisfaction" },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary/5 w-full overflow-hidden">
        <div className="container mx-auto px-6">
            <ScrollReveal className="text-center mb-16">
                <h2 className="text-[32px] md:text-[48px] font-normal text-foreground">
                    Growth & <span className="text-primary font-bold">Success</span>
                </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {supportingStats.map((stat, index) => (
                    <ScrollReveal key={index} delay={index * 150} className="h-full">
                        <Card className="p-6 md:p-10 text-center h-full flex flex-col items-center justify-center rounded-[30px] bg-background border-none shadow-soft hover:shadow-xl transition-all group">
                            <div className="p-4 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary transition-colors">
                                <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-[14px] md:text-[18px] font-normal text-foreground leading-tight">{stat.text}</h3>
                        </Card>
                    </ScrollReveal>
                ))}
            </div>
        </div>
  </section>
  );
};

const registrations = [
    {
        title: "U.P Jal Nigam",
        class: "“AA Class” Contractor",
        details: "Reg. No: 314/CGM(HO)/Category AA-40/2023"
    },
    {
        title: "U.P Project Corporation Ltd.",
        class: "A+ Category",
        details: "Fully registered and compliant."
    }
];

const RegistrationsSection = () => (
    <section className="py-20 md:py-32 bg-background w-full overflow-hidden">
        <div className="container mx-auto px-6">
            <ScrollReveal className="text-center mb-16">
                <h2 className="text-[32px] md:text-[48px] font-normal text-foreground">
                    Company <span className="text-primary font-bold">Certifications</span>
                </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {registrations.map((reg, index) => (
                    <ScrollReveal key={index} delay={index * 100} className="h-full">
                        <Card className="h-full p-8 md:p-12 text-center flex flex-col items-center justify-start rounded-[35px] shadow-soft border-none bg-secondary/5 hover:shadow-2xl transition-all border border-transparent hover:border-primary/20">
                             <div className="inline-block p-5 bg-primary/10 rounded-2xl mb-8">
                                <BadgeCheck className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="text-[20px] md:text-[24px] font-normal text-foreground">{reg.title}</h3>
                            <p className="font-bold text-primary mt-4 text-[18px] md:text-[20px] italic">{reg.class}</p>
                            <p className="text-muted-foreground mt-6 text-[11px] font-normal tracking-[0.3em] uppercase opacity-50">{reg.details}</p>
                        </Card>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    </section>
);

const workProcessSteps = [
    { step: "01", title: "Analysis", description: "Understanding project needs and site conditions.", icon: ClipboardList },
    { step: "02", title: "Planning", description: "Detailed strategy and roadmap.", icon: GanttChartSquare },
    { step: "03", title: "Design", description: "Sustainable and modern designs.", icon: PenTool },
    { step: "04", title: "Execution", description: "High-quality construction and safety.", icon: HardHat },
    { step: "05", title: "Quality", description: "Ensuring compliance and durability.", icon: BadgeCheck },
    { step: "06", title: "Delivery", description: "On-time delivery and support.", icon: Rocket },
];

const WorkProcessSection = () => {
    return (
        <section className="py-20 md:py-32 bg-background w-full overflow-hidden">
            <div className="container mx-auto px-6">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-[32px] md:text-[48px] font-normal text-foreground">
                        Our Work <span className="text-primary font-bold">Process</span>
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {workProcessSteps.map((item, index) => (
                        <ScrollReveal key={item.step} delay={index * 100}>
                            <Card className="bg-white p-8 md:p-12 rounded-[30px] shadow-soft border-none h-full hover:shadow-2xl transition-all group border-b-4 border-transparent hover:border-primary">
                                <p className="text-[36px] md:text-[48px] font-normal text-primary/10 mb-4 group-hover:text-primary/30 transition-colors leading-none">{item.step}</p>
                                <h3 className="text-[18px] md:text-[22px] font-normal text-foreground mb-3">{item.title}</h3>
                                <p className="text-muted-foreground text-[13px] md:text-[15px] leading-relaxed">{item.description}</p>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function AboutPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <main className="min-h-screen w-full">
            <AboutHero />
            <CompanyOverviewSection />
            <GrowthSection />
            <RegistrationsSection />
            <WorkProcessSection />
        </main>
    );
}
