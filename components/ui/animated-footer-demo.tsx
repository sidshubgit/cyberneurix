import Footer from "@/components/ui/animated-footer";

const AnimatedFooterDemo = () => {
  return  <Footer
          leftLinks={[
            { href: "/terms", label: "Terms & policies" },
            { href: "/privacy-policy", label: "Privacy policy" },
          ]}
          rightLinks={[
            { href: "/blog", label: "Blog" },
            { href: "/knowledgebase", label: "Knowledgebase" },
            { href: "/cybersecurity", label: "CyberSecurity" },
{ href: "/neurotechnology", label: "NeuroTechnology" },
            { href: "https://linkedin.com/taher_max_", label: "Linkedin" },
          ]}
          copyrightText="CyberNeurix 2025. All Rights Reserved"
          barCount={23}
        />;
};

export { AnimatedFooterDemo };