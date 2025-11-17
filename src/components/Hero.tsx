"use client";

import { useMemo } from "react";
import { TextAnimate } from "@/components/ui/text-animate";

export default function Hero() {
  const heroText = useMemo(
    () => (
      <>
        <div className="flex items-center gap-2 justify-center">
          <TextAnimate
            className="text-4xl md:text-6xl lg:text-8xl font-regular leading-tight"
            style={{ color: "#161617", letterSpacing: "-0.04em" }}
            animation="blurInDown"
            by="character"
            once
          >
            from 0
          </TextAnimate>
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 md:w-15 md:h-15  transition-transform duration-300"
          >
            <path
              d="M3 8H15M15 8L10 3M15 8L10 13"
              className="group-hover:!stroke-white transition-colors duration-300"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <TextAnimate
            className="text-4xl md:text-6xl lg:text-8xl font-regular leading-tight"
            style={{ color: "#161617", letterSpacing: "-0.04em" }}
            animation="blurInDown"
            by="character"
            once
          >
            to 1
          </TextAnimate>
        </div>

        <TextAnimate
          className="text-4xl md:text-6xl lg:text-8xl font-light leading-tight mb-4 mt-[-10px] md:mt-[-20px]"
          style={{ color: "#C9CDD2", letterSpacing: "-0.04em" }}
          animation="blurInDown"
          by="character"
          once
          delay={0.3}
        >
          software partner
        </TextAnimate>
      </>
    ),
    []
  );

  return (
    <main className="mx-auto max-w-7xl px-6 md:px-8 pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-24">
      <div className="text-center">
        {heroText}

        <div className="mt-6">
          <p
            className="text-base md:text-xl font-normal"
            style={{ color: "#161617" }}
          >
            we build apps for web3 and ai startups
          </p>
          <p
            className="text-base md:text-xl font-medium"
            style={{ color: "#C9CDD2" }}
          >
            with taste - from idea to release.
          </p>
        </div>
      </div>
    </main>
  );
}
