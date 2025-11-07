import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Knowledge Base",
      content: (
        <div key="Knowledge Base">
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mb-4">
            A continuously evolving repository of insights, whitepapers, and playbooks designed to strengthen every layer of digital defense. From fundamental concepts to advanced frameworks, the Knowledge Base helps professionals bridge understanding with real-world application. It’s where learning transforms into capability.
          </p>
          <div className="relative h-60 max-w-sm">
            <Image
              src="./kb.png"
              alt="startup template"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "News & Trends",
      content: (
        <div key="News & Trends">
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mb-4">
            Stay ahead of emerging cyber threats, technologies, and policies reshaping the security ecosystem. Each update connects global developments with actionable context, helping you anticipate what’s next rather than react to what’s already happened.
          </p>
          <div className="relative h-60 max-w-sm">
            <Image
              src="./newtre.png"
              alt="hero template"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Threat Reports",
      content: (
        <div key="Threat Reports">
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mb-4">
            Access in-depth analyses of the latest cyberattacks, vulnerabilities, and incident responses. These reports decode complex events into strategic lessons, giving organizations the foresight to adapt before exposure. Each insight is drawn from data, but designed for decision.
          </p>
          <div className="relative h-60 max-w-sm">
            <Image
              src="./threpo.png"
              alt="hero template"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Tutorials & Labs",
      content: (
        <div key="Tutorials & Labs">
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mb-4">
            Hands-on learning meets simulation. Explore guided labs, real-time exercises, and practical tutorials that turn theoretical understanding into operational mastery. From SOC operations to cloud hardening, this is where cyber knowledge becomes muscle memory.
          </p>
          <div className="relative h-60 max-w-sm">
            <Image
              src="./tutlabs.png"
              alt="hero template"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Podcasts & Webinars",
      content: (
        <div key="Podcasts & Webinars">
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mb-4">
            Listen to thought leaders, practitioners, and innovators discuss what’s next in cybersecurity. Each session connects human experience with technological evolution — decoding global challenges through dialogue, not jargon.
          </p>
          <div className="relative h-60 max-w-sm">
            <Image
              src="./podweb.png"
              alt="hero template"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Consulting Services",
      content: (
        <div key="Consulting Services">
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mb-4">
            Discover how CyberNeurix translates intelligence into tailored security architectures, governance frameworks, and managed defense. We don’t just secure systems — we evolve them.
          </p>
          <div className="relative h-60 max-w-sm">
            <Image
              src="./cons.png"
              alt="cybersecurity services"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full">
      <div>
        <Timeline data={data} />
      </div>
    </div>
  );
}