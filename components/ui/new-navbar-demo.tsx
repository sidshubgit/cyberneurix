"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Book, Newspaper, Mic, FlaskConical, Brain, Shield, Scale, PenTool, TrendingUp, LineChart, Image as LucideImage, Briefcase, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const demoData = {
  logo: {
    url: "/",
    src: "/cyberneurix-logo.png",
    alt: "CyberNeurix logo",
    title: "CyberNeurix",
  },
  menu: [
    { title: "Home", url: "/" },
    {
      title: "Cybersecurity",
      url: "/cybersecurity",
      items: [
        {
          title: "Knowledge Base",
          description: "Guides, fundamentals, and best practices",
          icon: <Book className="size-5 shrink-0" />,
          url: "/cybersecurity/knowledge-base",
        },
        {
          title: "News & Trends",
          description: "Latest vulnerabilities and security trends",
          icon: <Newspaper className="size-5 shrink-0" />,
          url: "/cybersecurity/news-trends",
        },
        {
          title: "Podcasts",
          description: "Conversations with industry leaders",
          icon: <Mic className="size-5 shrink-0" />,
          url: "/cybersecurity/podcasts",
        },
        {
          title: "Tutorials & Labs",
          description: "Hands-on labs and walkthroughs",
          icon: <FlaskConical className="size-5 shrink-0" />,
          url: "/cybersecurity/tutorials-labs",
        },
        {
          title: "Consulting services",
          description: "Expert guidance for your cybersecurity needs",
          icon: <Briefcase className="size-5 shrink-0" />,
          url: "/consulting-services",
        },
      ],
    },
    {
      title: "Neurotechnology",
      url: "#",
      items: [
        {
          title: "Research & Breakthroughs",
          description: "New discoveries at the intersection of neuro + AI",
          icon: <Brain className="size-5 shrink-0" />,
          url: "/neurotechnology/research-breakthroughs",
        },
        {
          title: "Brain-Computer Interfaces",
          description: "Securing BCIs and neural interfaces",
          icon: <Shield className="size-5 shrink-0" />,
          url: "/neurotechnology/mind-machine-security",
        },
        {
          title: "AI & Neural Ethics",
          description: "Governance, ethics, and safety",
          icon: <Scale className="size-5 shrink-0" />,
          url: "/neurotechnology/ai-neural-ethics",
        },
        {
          title: "Neural Frontier",
          description: "Exploring the cutting edge of neural technology",
          icon: <Brain className="size-5 shrink-0" />,
          url: "/neurotechnology/neural-frontier",
        },
      ],
    },
    {
      title: "Blogs",
      url: "#",
      items: [
        {
          title: "Cybersecurity",
          description: "Insights from our security editors",
          icon: <PenTool className="size-5 shrink-0" />,
          url: "/blogs/cybersecurity",
        },
        {
          title: "Neurotechnology",
          description: "Perspectives on brain-tech and AI",
          icon: <PenTool className="size-5 shrink-0" />,
          url: "/blogs/neurotechnology",
        },
      ],
    },
    {
      title: "Pulse",
      url: "#",
      items: [
        {
          title: "Market Trends",
          description: "Funding, M&A, and ecosystem changes",
          icon: <TrendingUp className="size-5 shrink-0" />,
          url: "/signals/market-trends",
        },
        {
          title: "Prediction & Forecasts",
          description: "Outlooks and scenario planning",
          icon: <LineChart className="size-5 shrink-0" />,
          url: "/signals/predictions-forecasts",
        },
        {
          title: "Infographics and Visuals",
          description: "Charts, visuals, and explainer graphics",
          icon: <LucideImage className="size-5 shrink-0" />,
          url: "/signals/infographics-visuals",
        },
      ],
    },
  ],
  mobileExtraLinks: [
    { name: "Press", url: "/press" },
    { name: "Contact", url: "/contact" },
    { name: "Imprint", url: "/imprint" },
    { name: "Sitemap", url: "/sitemap" },
  ],
  auth: {
    login: { text: "Log in", url: "/login" },
    signup: { text: "Sign up", url: "/signup" },
  },
};

function Navbar({ className, top = "top-0" }: { className?: string; top?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className={cn("fixed inset-x-0 w-full z-50 px-4", top, className)}
    >
              <div className="flex justify-between items-center py-2">
                {/* Mobile Logo */}
                <Link href={demoData.logo.url} className="md:hidden flex items-center">
                  <Image
                    src={demoData.logo.src}
                    alt={demoData.logo.alt}
                    width={30}
                    height={30}
                    className="h-8 w-8"
                  />
                  <span className="ml-2 text-lg font-bold text-black dark:text-white">
                    {demoData.logo.title}
                  </span>
                </Link>
      
                {/* Desktop Logo */}
                <Link href={demoData.logo.url} className="hidden md:flex items-center">
                  <Image
                    src={demoData.logo.src}
                    alt={demoData.logo.alt}
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                  <span className="ml-2 text-xl font-bold text-black dark:text-white">
                    {demoData.logo.title}
                  </span>
                </Link>
      
                {/* Hamburger icon for mobile */}
                <div className="md:hidden flex-grow flex justify-end">
                  <button onClick={() => {
                    setIsMobileMenuOpen(!isMobileMenuOpen);
                    if (isMobileMenuOpen) {
                      setActive(null); // Reset active state when closing mobile menu
                    }
                  }}>
                    {isMobileMenuOpen ? (
                      <XIcon className="h-6 w-6 text-white" />
                    ) : (
                      <MenuIcon className="h-6 w-6 text-white" />
                    )}
                  </button>
                </div>
              </div>
      {/* Menu */}
      <div
        className={cn(
          "md:flex md:items-center md:justify-center",
          { hidden: !isMobileMenuOpen, flex: isMobileMenuOpen },
          "flex-col md:flex-row absolute md:relative top-full md:top-auto left-0 md:left-auto w-full md:w-auto bg-black md:bg-transparent border-t md:border-t-0 border-white/[0.2] md:border-transparent py-4 md:py-0"
        )}
      >
        <Menu setActive={setActive}>
          {demoData.menu.map((item) => (
            <MenuItem
              key={item.title}
              setActive={setActive}
              active={active}
              item={item.title}
              href={item.items ? undefined : item.url}
            >
              {item.items ? (
                <div className="text-sm flex flex-col gap-2 p-2">
                  {item.items.map((subItem) => (
                    subItem.icon ? (
                      <ProductItem
                        key={subItem.url}
                        title={subItem.title}
                        href={subItem.url}
                        icon={subItem.icon}
                        description={subItem.description}
                      />
                    ) : (
                      <HoveredLink key={subItem.url} href={subItem.url}>{subItem.title}</HoveredLink>
                    )
                  ))}
                </div>
              ) : null}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
}

export function NewNavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar />
    </div>
  );
}
