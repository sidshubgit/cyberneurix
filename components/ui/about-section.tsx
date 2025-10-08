"use client"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import Lottie from 'lottie-react';
import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const AboutSection = () => {
  const [lottieAnimationData, setLottieAnimationData] = useState(null);

  useEffect(() => {
    fetch("https://lottie.host/8cf4ba71-e5fb-44f3-8134-178c4d389417/0CCsdcgNIP.json")
      .then((response) => response.json())
      .then((data) => {
        setLottieAnimationData(data);
        console.log("Lottie Animation Data:", data);
      })
      .catch((error) => {
        console.error("Error fetching Lottie animation:", error);
        setLottieAnimationData(null); // Ensure it's null on error
      });
  }, []);

  console.log("Rendering Lottie with data:", lottieAnimationData);

  return (
    <div id="about-section" className="relative w-full overflow-hidden">
      {/* Gradient Background */}
      <AnimatedGradientBackground />

      <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 pt-32 text-center">
        <div className="text-center text-xl font-bold mb-4">
          Look what the cat has dragged us into
        </div>
        <div style={{ width: 200, height: 200 }}>
          {lottieAnimationData && (
            <Lottie
              animationData={lottieAnimationData}
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </div>
          <p className="mt-4 text-lg text-gray-300 md:text-xl max-w-lg text-center pb-8">
            We believe the future of security lies where technology meets the human mind.<br/>
At CyberNeurix, we explore the intersection of cybersecurity and neurotechnology, delivering insights that help people and businesses stay ahead in a world where digital and human intelligence converge.
          </p>
      </div>
    </div>
  );
};

export { AboutSection };
