import { HeroSection } from "@/components/ui/hero-section";
import { CpuArchitectureDemo } from "@/components/ui/cpu-architecture-demo";
import { RetroTestimonialDemo } from "@/components/ui/retro-testimonial-demo";
import { AnimatedFooterDemo } from "@/components/ui/animated-footer-demo";

export default function CybersecurityPage() {
  return (
    <>
      <HeroSection />
      <CpuArchitectureDemo />
      <RetroTestimonialDemo />
      <AnimatedFooterDemo />
    </>
  );
}
