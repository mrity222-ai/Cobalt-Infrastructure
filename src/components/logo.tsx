import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  const logoImage = PlaceHolderImages.find(img => img.id === 'company-logo');

  return (
    <Link href="/" className={cn("flex items-center group", className)}>
      {logoImage ? (
        <Image
          src={logoImage.imageUrl}
          alt="Cobalt Infrastructure"
          width={180}
          height={54}
          className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
          priority
        />
      ) : (
        <span className="text-xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors whitespace-nowrap uppercase">
          Cobalt <span className="text-primary italic">Infrastructure</span>
        </span>
      )}
    </Link>
  );
}
