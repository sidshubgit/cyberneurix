"use client";
import React, { useState, useEffect } from "react";
import { motion, Transition } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  href,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  href?: string;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  if (href) {
    return (
      <Link href={href} className="relative">
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          {item}
        </motion.p>
      </Link>
    );
  }

  return (
    <div onMouseEnter={() => !isMobile && setActive(item)} onClick={() => isMobile && setActive(active === item ? null : item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active === item && (
        <motion.div
          transition={transition}
          className={isMobile ? "relative top-auto left-auto transform-none pt-0 w-full" : "absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4"}
        >
          <motion.div
            transition={transition}
            layoutId="active" // layoutId ensures smooth animation
            className={isMobile ? "bg-black dark:bg-black overflow-hidden" : "bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"}
          >
            <motion.div
              layout // layout ensures smooth animation
              className={isMobile ? "w-full h-full p-4 flex flex-col bg-black dark:bg-black" : "w-max h-full p-4"}
            >
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <nav
      onMouseLeave={() => !isMobile && setActive(null)} // resets the state only on desktop
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 px-4 md:px-8 py-2 md:py-6 "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <Link href={href} className={isMobile ? "flex space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md" : "flex space-x-2"}>
      <div className={isMobile ? "flex-shrink-0 w-[30px] h-[30px] flex items-center justify-center" : "flex-shrink-0 w-[50px] h-[50px] flex items-center justify-center"}>
        {icon}
      </div>
      <div>
        <h4 className={isMobile ? "text-md font-bold mb-1 text-black dark:text-white" : "text-xl font-bold mb-1 text-black dark:text-white"}>
          {title}
        </h4>
        <p className={isMobile ? "text-neutral-700 text-sm dark:text-neutral-300" : "text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300"}>
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = rest.href || "#"; // Provide a default href if it's undefined
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <Link
      {...rest}
      href={href}
      className={isMobile ? "text-neutral-700 dark:text-neutral-200 hover:text-black p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" : "text-neutral-700 dark:text-neutral-200 hover:text-black "}
    >
      {children}
    </Link>
  );
};
