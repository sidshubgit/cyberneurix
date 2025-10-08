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
  <h1 className="text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Blogs</h1><br/>
            <h2 className="text-lg font-bold tracking-tight sm:text-xl lg:text-2xl">
              Welcome to the CyberNeurix Insights Hub — where technology meets thought.<br/>
  Explore conversations, ideas, and innovations shaping the future of security, cognition, and human intelligence.
            </h2>
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
              <img src="/cybersecurity-services.png" alt="Cybersecurity Services" className="mb-4 w-32 h-32" />
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-200">
                Cybersecurity Insights
              </h3>
              <p className="text-gray-500 max-w-xl">
                Explore the latest threats, defense strategies, and best practices to secure your digital assets.
              </p>
            </div>
          </StickyTabItem>
          <StickyTabItem title="NeuroTechnology — Where Mind Meets Machine" id="design">
            <div className="flex flex-col items-center justify-center text-center py-16 h-[50vh]">
              <img src="/neural-frontier.png" alt="NeuroTechnology Breakthroughs" className="mb-4 w-32 h-32" />
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-200">
                Neurotechnology Breakthroughs
              </h3>
              <p className="text-gray-500 max-w-xl">
                Dive into the convergence of neuroscience and technology, and its implications for security and human potential.
              </p>
            </div>
          </StickyTabItem>
          <StickyTabItem title="Knowledge Base — Deep Dive into Digital Defense" id="knowledgebase">
            <div className="flex flex-col items-center justify-center text-center py-16 h-[50vh]">
              <img src="/knowledgebase.png" alt="Knowledge Base" className="mb-4 w-32 h-32" />
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-200">
                Knowledge Base
              </h3>
              <p className="text-gray-500 max-w-xl">
                Access a comprehensive library of articles, whitepapers, and case studies on cybersecurity and neurotechnology.
              </p>
            </div>
          </StickyTabItem>
          <StickyTabItem title="News & Trends — Stay Ahead of the Curve" id="news-trends">
            <div className="flex flex-col items-center justify-center text-center py-16 h-[50vh]">
              <img src="/news-and-trends.png" alt="News & Trends" className="mb-4 w-32 h-32" />
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-200">
                News & Trends
              </h3>
              <p className="text-gray-500 max-w-xl">
                Get the latest updates, analyses, and expert opinions on the evolving landscape of digital security and brain-computer interfaces.
              </p>
            </div>
          </StickyTabItem>
          <StickyTabItem title="Threat Reports — Uncover the Digital Underbelly" id="threat-reports">
            <div className="flex flex-col items-center justify-center text-center py-16 h-[50vh]">
              <img src="/threat-reports.png" alt="Threat Reports" className="mb-4 w-32 h-32" />
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-200">
                Threat Reports
              </h3>
              <p className="text-gray-500 max-w-xl">
                Detailed reports on emerging cyber threats, vulnerabilities, and attack vectors, providing actionable intelligence for defense.
              </p>
            </div>
          </StickyTabItem>
          <StickyTabItem title="Tutorials & Labs — Hands-on Learning" id="tutorials-labs">
            <div className="flex flex-col items-center justify-center text-center py-16 h-[50vh]">
              <img src="/tutorials-and-labs.png" alt="Tutorials & Labs" className="mb-4 w-32 h-32" />
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-200">
                Tutorials & Labs
              </h3>
              <p className="text-gray-500 max-w-xl">
                Engage in practical exercises and guided tutorials to enhance your skills in cybersecurity and neurotechnology.
              </p>
            </div>
          </StickyTabItem>
          <StickyTabItem title="Podcasts & Webinars — Listen & Learn" id="podcasts-webinars">
            <div className="flex flex-col items-center justify-center text-center py-16 h-[50vh]">
              <img src="/podcasts-and-webinars.png" alt="Podcasts & Webinars" className="mb-4 w-32 h-32" />
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-200">
                Podcasts & Webinars
              </h3>
              <p className="text-gray-500 max-w-xl">
                Tune into expert discussions, interviews, and presentations on the latest advancements and challenges in our fields.
              </p>
            </div>
          </StickyTabItem>
          <StickyTabItem title="Featured Articles — Ideas That Shape the Future" id="development">
            <div className="flex flex-col items-center justify-center text-center py-16 h-[50vh]">
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-200">
                In-depth Analysis
              </h3>
              <p className="text-gray-500 max-w-xl">
                Read our curated articles on cutting-edge research and thought leadership in cybersecurity and neurotechnology.
              </p>
            </div>
          </StickyTabItem>
          <StickyTabItem title="Quick Watch / Read — Stay Sharp, Stay Informed" id="launch">
            <div className="flex flex-col items-center justify-center text-center py-16 h-[50vh]">
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-200">
                Stay Updated
              </h3>
              <p className="text-gray-500 max-w-xl">
                Designed for fast minds and busy schedules, this section delivers concise, high-impact insights. From rapid reads and short explainers to visual summaries and podcast snippets — stay informed, inspired, and ahead of the curve in minutes, not hours.
              </p>
            </div>
          </StickyTabItem>
        </StickyTabs>
      </div>
    </div>
  );
};