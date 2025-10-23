"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Book, Newspaper, Mic, FlaskConical, Brain, Shield, Scale, PenTool, TrendingUp, LineChart, Image as LucideImage, Briefcase } from "lucide-react";

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
      url: "#",
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

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
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
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
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
  );
}

export function NewNavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}
