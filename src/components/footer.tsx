'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const servicesLinks = [
  { href: "/services", label: "Residential Development" },
  { href: "/services", label: "Commercial Infrastructure" },
  { href: "/services", label: "Modern Renovation" },
  { href: "/services", label: "Interior Planning" },
  { href: "/services", label: "Public Projects" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Our Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  const logoImage = PlaceHolderImages.find(img => img.id === 'company-logo');

  return (
    <footer className="relative bg-secondary text-white pt-24 pb-12 overflow-hidden rounded-t-[40px] shadow-2xl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-20">
          
          <ScrollReveal className="space-y-8">
            <div className="space-y-6">
              <Link href="/" className="inline-block transition-transform hover:scale-105 duration-300">
                {logoImage ? (
                  <Image 
                    src={logoImage.imageUrl} 
                    alt="Cobalt Infrastructure Pvt. Ltd. Logo" 
                    width={200} 
                    height={60} 
                    className="h-10 w-auto brightness-0 invert opacity-90"
                  />
                ) : (
                  <span className="text-2xl font-black uppercase italic tracking-tighter">Cobalt <span className="text-primary">Infrastructure</span></span>
                )}
              </Link>
              <p className="text-white/50 leading-relaxed text-[15px] max-w-sm font-medium">
                Cobalt Infrastructure Pvt. Ltd. is redefining modern infrastructure with visionary engineering and premium design solutions in Uttar Pradesh.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100} className="space-y-8">
            <h3 className="text-[14px] font-bold text-primary uppercase tracking-[0.25em]">Quick Links</h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-all duration-300 text-[15px] font-bold inline-block hover:translate-x-2">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={200} className="space-y-8">
            <h3 className="text-[14px] font-bold text-primary uppercase tracking-[0.25em]">Our Services</h3>
            <ul className="space-y-4">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-all duration-300 text-[15px] font-bold inline-block hover:translate-x-2">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={300} className="space-y-8">
            <h3 className="text-[14px] font-bold text-primary uppercase tracking-[0.25em]">Get in Touch</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="p-2.5 rounded-xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <span className="block text-[11px] text-white/30 uppercase tracking-widest font-bold">Call Us</span>
                  <span className="text-white/80 group-hover:text-white text-[15px] font-bold">+91 522-4005093</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="p-2.5 rounded-xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <span className="block text-[11px] text-white/30 uppercase tracking-widest font-bold">Location</span>
                  <span className="text-white/80 group-hover:text-white text-[15px] font-bold truncate block max-w-[200px]">Gomti Nagar, Lucknow</span>
                </div>
              </li>
            </ul>
          </ScrollReveal>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-white/20 text-[11px] uppercase tracking-[0.4em] font-bold">
              © 2024 Cobalt Infrastructure Pvt. Ltd. | All Rights Reserved.
            </p>
            <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold">
              Website Design by <a href="https://itlc.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ITLC INDIA PVT LTD</a>
            </p>
          </div>
          <div className="flex items-center gap-8">
             <Link href="#" className="text-white/20 hover:text-white/50 text-[11px] uppercase tracking-widest transition-colors font-bold">Privacy Policy</Link>
             <Link href="#" className="text-white/20 hover:text-white/50 text-[11px] uppercase tracking-widest transition-colors font-bold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
