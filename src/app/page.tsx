import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { FeatureSection } from "@/components/sections/feature";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CtaSection } from "@/components/sections/cta";
import { SisterConcernsSection } from "@/components/sections/sister-concerns";
import { JobBannerSection } from "@/components/sections/job-banner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div id="about" className="scroll-mt-20">
        <CtaSection />
      </div>
      <div id="services" className="scroll-mt-20">
        <ServicesSection />
      </div>
      <FeatureSection />
      <SisterConcernsSection />
      <TestimonialsSection />
      <JobBannerSection />
    </>
  );
}
