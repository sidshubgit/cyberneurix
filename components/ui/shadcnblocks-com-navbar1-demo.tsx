import {
  Book,
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

import { Navbar1 } from "@/components/ui/shadcnblocks-com-navbar1";

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
          icon: <Image className="size-5 shrink-0" />,
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

function Navbar1Demo() {
  return <Navbar1 {...demoData} />;
}

export { Navbar1Demo };





