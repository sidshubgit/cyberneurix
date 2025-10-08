"use client";

import * as React from "react";
import {
  Book,
  Menu,
  Newspaper,
  Mic,
  FlaskConical,
  Brain,
  Shield,
  Scale,
  PenTool,
  TrendingUp,
  LineChart,
  Image,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "/cyberneurix-logo.png",
    alt: "CyberNeurix logo",
    title: "CyberNeurix",
  },
  menu = [
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
          title: "Mind & Machine Security",
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
      title: "Signals",
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
          icon: <Image className="size-5 shrink-0" />,
          url: "/signals/infographics-visuals",
        },
      ],
    },
    {
      title: "About CyberNeurix",
      url: "/about",
    },
  ],
  mobileExtraLinks = [
    { name: "Press", url: "#" },
    { name: "Contact", url: "#" },
    { name: "Imprint", url: "#" },
    { name: "Sitemap", url: "#" },
  ],
  auth = {
    login: { text: "Log in", url: "#" },
    signup: { text: "Sign up", url: "#" },
  },
}: Navbar1Props) => {
  return (
    <section className="py-4">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <a href={logo.url} className="flex items-center gap-3">
              <img src={logo.src} className="h-[108px] w-auto" alt={logo.alt} />
              <span className="sr-only">{logo.title}</span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-3">
              <img src={logo.src} className="h-[108px] w-auto" alt={logo.alt} />
              <span className="sr-only">{logo.title}</span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-3">
                      <img src={logo.src} className="h-[108px] w-auto" alt={logo.alt} />
                      <span className="sr-only">{logo.title}</span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="border-t py-4">
                    <div className="grid grid-cols-2 justify-start">
                      {mobileExtraLinks.map((link, idx) => (
                        <a
                          key={idx}
                          className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                          href={link.url}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-80 p-3">
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <NavigationMenuLink
                              href={subItem.url}
                              className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            >
                              {subItem.icon}
                              <div>
                                <div className="text-sm font-semibold">
                                  {subItem.title}
                                </div>
                                {subItem.description && (
                                  <p className="text-sm leading-snug text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                )}
                              </div>
                            </NavigationMenuLink>
                          </li>
                        ))}          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <a
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      {item.title}
    </a>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <a
              key={subItem.title}
              className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
              href={subItem.url}
            >
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-muted-foreground">
                    {subItem.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="font-semibold">
      {item.title}
    </a>
  );
};

export { Navbar1 };



