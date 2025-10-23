import React from 'react';
import StickyTabs, { StickyTabItem } from '@/components/ui/sticky-section-tabs';
const PlaceholderSvg = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 60 60"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Placeholder Logo"
    className="text-gray-700"
  >
    <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.5 35.5 20 40H40C40 51.0457 31.0457 60 20 60C8.95431 60 0 51.0457 0 40C0 28.9543 9.5 22 20 20H0Z" fill="currentColor"></path>
    <path d="M40 60C51.7324 55.0977 60 43.5117 60 30C60 16.4883 51.7324 4.90234 40 0V60Z" fill="currentColor"></path>
  </svg>
);

const PlaceholderContent: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex flex-col items-center justify-center text-center py-16 h-[50vh]">
    <PlaceholderSvg />
    <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-200">
      Content Area: {title}
    </h3>
    <p className="text-gray-500 max-w-xl">
      This is where the detailed content for the &apos;{title}&apos; section would normally appear. For this demo, we&apos;re using this placeholder.
    </p>
  </div>
);

export const StickyTabsDemoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <div>
        <div className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 flex flex-col items-center text-center">
            <img src="/blog-image.png" alt="Blogs" className="mb-8 w-full h-auto" />
          </div>
          </div>
        </div>
        <StickyTabs
          mainNavHeight="4rem"
          rootClassName="bg-black text-white"
          navSpacerClassName="border-b border-white/15 bg-black"
          sectionClassName="bg-[#131313]"
          stickyHeaderContainerClassName="shadow-lg"
          headerContentWrapperClassName="border-b border-t border-white/15 bg-black"
          headerContentLayoutClassName="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8"
          titleClassName="my-0 text-2xl font-medium leading-none md:text-3xl lg:text-4xl"
          contentLayoutClassName="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <StickyTabItem title="Cybersecurity — Defend the Digital Frontier" id="concept">
            <div className="flex flex-col items-center justify-center text-center py-16 h-[50vh]">
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-200">
                Cybersecurity Insights
              </h3>
              <p className="text-gray-500 max-w-xl text-lg md:text-xl">
                In this section, expect deep insights into the evolving landscape of digital defense — from the latest threat intelligence and security frameworks to case studies on how organizations are turning protection into strategy. Each article translates complexity into clarity, helping leaders understand not just how to respond to cyber risks, but how to stay three steps ahead.
              </p>
            </div>
          </StickyTabItem>
          <StickyTabItem title="NeuroTechnology — Where Mind Meets Machine" id="design">
            <div className="flex flex-col items-center justify-center text-center py-16 h-[50vh]">
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-200">
                Neurotechnology Breakthroughs
              </h3>
              <p className="text-gray-500 max-w-xl text-lg md:text-xl">
                Here, technology becomes human. Discover how neurotech, brain-computer interfaces, and cognitive computing are reshaping how we think, work, and secure digital systems. These articles bridge neuroscience and innovation, exploring the frontier where biological intelligence and artificial systems begin to merge.
              </p>
            </div>
          </StickyTabItem>
          <StickyTabItem title="Featured Articles — Ideas That Shape the Future" id="development">
            <div className="flex flex-col items-center justify-center text-center py-16 h-[50vh]">
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-200">
                In-depth Analysis
              </h3>
              <p className="text-gray-500 max-w-xl text-lg md:text-xl">
                A curated space for thought leadership and breakthrough ideas from CyberNeurix and the wider industry. Expect long-form reads that challenge conventional thinking — exploring how technology, ethics, and cognition will define the next decade of cybersecurity and neuro-intelligence.
              </p>
            </div>
          </StickyTabItem>
          <StickyTabItem title="Quick Watch / Read — Stay Sharp, Stay Informed" id="launch">
            <div className="flex flex-col items-center justify-center text-center py-16 h-[50vh]">
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-200">
                Stay Updated
              </h3>
              <p className="text-gray-500 max-w-xl text-lg md:text-xl">
                Designed for fast minds and busy schedules, this section delivers concise, high-impact insights. From rapid reads and short explainers to visual summaries and podcast snippets — stay informed, inspired, and ahead of the curve in minutes, not hours.
              </p>
            </div>
          </StickyTabItem>
        </StickyTabs>
      </div>
    </div>
  );
};