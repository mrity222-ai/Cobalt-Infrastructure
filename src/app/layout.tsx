import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { LoadingScreen } from '@/components/loading-screen';
import { Inter, Oswald } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Cobalt Infrastructure Pvt. Ltd. | Premier Construction in Uttar Pradesh',
    template: '%s | Cobalt Infrastructure Pvt. Ltd.'
  },
  description: 'Cobalt Infrastructure Pvt. Ltd. provides modern, innovative, and premium infrastructure solutions. Expert construction and design services in Lucknow, UP.',
  keywords: ['Construction Company Lucknow', 'Infrastructure Solutions UP', 'Commercial Building Contractors', 'Residential Development Uttar Pradesh', 'Cobalt Infrastructure'],
  authors: [{ name: 'Cobalt Infrastructure' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://cobaltinfra.in',
    siteName: 'Cobalt Infrastructure Pvt. Ltd.',
    title: 'Cobalt Infrastructure Pvt. Ltd. | Engineering the Future',
    description: 'Specializing in innovative, premium, and futuristic infrastructure solutions across Uttar Pradesh.',
    images: [
      {
        url: 'https://picsum.photos/seed/cobalt-og/1200/630',
        width: 1200,
        height: 630,
        alt: 'Cobalt Infrastructure Pvt. Ltd. - Engineering Excellence',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cobalt Infrastructure Pvt. Ltd.",
    "url": "https://cobaltinfra.in",
    "logo": "https://picsum.photos/seed/cobalt-logo/400/120",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-522-4005093",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5/270, Vipul Khand, Gomti Nagar",
      "addressLocality": "Lucknow",
      "addressRegion": "UP",
      "postalCode": "226010",
      "addressCountry": "IN"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} scroll-smooth`}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-foreground bg-background overflow-x-hidden w-full">
        <LoadingScreen />
        <Header />
        <main className="relative w-full overflow-hidden">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
