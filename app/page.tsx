import Image from "next/image";
import { Navbar1Demo } from "@/components/ui/shadcnblocks-com-navbar1-demo";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { AboutSection } from "@/components/ui/about-section";
import { CtaSectionDemo } from "@/components/ui/cta-section";
import { AnimatedFooterDemo } from "@/components/ui/animated-footer-demo";
import { HeroSectionBasic } from "@/components/blocks/galaxy-interactive-hero-section";
import { TimelineDemo } from "@/components/ui/timeline-demo";
import NeurotechnologyDemo from "@/components/ui/neurotechnology-demo";
import { StickyTabsDemoPage } from "@/components/ui/sticky-tabs-demo-page";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[auto_auto_1fr_auto] items-center min-h-screen">
      <div className="row-start-1 w-full mx-auto">
        {/* <Navbar1Demo /> */}
      </div>
      <main className="relative z-10 flex flex-col row-start-2 mx-auto">
        <HeroSectionBasic />
        <div id="cybersecurity-section">
          <TimelineDemo />
        </div>
        <div id="neurotechnology-section">
          <NeurotechnologyDemo />
        </div>
        <div id="blogs-section">
          <StickyTabsDemoPage />
        </div>
        <CtaSectionDemo />
        <AnimatedFooterDemo />
      </main>
    </div>
  );
}
