'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out",
      isScrolled 
        ? "py-4 px-4 md:px-8" 
        : "py-6 px-4 md:px-8"
    )}>
      <div className={cn(
        "container flex items-center justify-between px-8 py-3 mx-auto rounded-[15px] transition-all duration-500",
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl border border-secondary/10 shadow-xl" 
          : "bg-white/60 backdrop-blur-md border border-white/20"
      )}>
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-6 py-2 rounded-lg text-[14px] font-bold transition-all duration-300 uppercase tracking-wide",
                  isActive 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-secondary/70 hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" variant="default" className="hidden md:inline-flex rounded-lg">
            <Link href="/contact">Get Quote</Link>
          </Button>

          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                  <Menu className="h-6 w-6 text-secondary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-none w-[300px] bg-white/95 backdrop-blur-xl">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">Navigation</SheetDescription>
                <div className="flex flex-col py-10 gap-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "text-[18px] py-2 border-b border-secondary/5 transition-colors uppercase font-bold",
                        pathname === item.href ? "text-primary" : "text-secondary"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button asChild variant="default" className="mt-4 rounded-lg">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get Quote</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}