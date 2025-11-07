import Footer from "@/components/ui/animated-footer";

const AnimatedFooterDemo = () => {
  return  <Footer
          leftLinks={[
            { href: "/terms", label: "Terms & policies" },
            { href: "/privacy-policy", label: "Privacy policy" },
          ]}
          rightLinks={[
            { href: "/blog", label: "Blog" },
            { href: "/news-trends", label: "News & Trends" },
            { href: "/threat-reports", label: "Threat Reports" },
            { href: "/tutorials-labs", label: "Tutorials & Labs" },
            { href: "/podcasts-webinars", label: "Podcasts & Webinars" },
            { href: "/consulting-services", label: "Consulting Services" },
            { href: "/knowledgebase", label: "Knowledgebase" },
            { href: "https://linkedin.com/taher_max_", label: "Linkedin" },
          ]}
          copyrightText="CyberNeurix 2025. All Rights Reserved"
          barCount={23}
        />;
};

export { AnimatedFooterDemo };