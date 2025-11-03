"use client";

import { useMemo } from "react";
import { TextAnimate } from "@/components/ui/text-animate";

export default function Hero() {
  const heroText = useMemo(
    () => (
      <>
        <TextAnimate
          className="text-4xl md:text-6xl lg:text-8xl font-regular leading-tight"
          style={{ color: "#161617", letterSpacing: "-0.04em" }}
          animation="blurInDown"
          by="character"
          once
        >
          less talk. more launch.
        </TextAnimate>

        <TextAnimate
          className="text-4xl md:text-6xl lg:text-8xl font-light leading-tight mb-4 mt-[-10px] md:mt-[-20px]"
          style={{ color: "#C9CDD2", letterSpacing: "-0.04em" }}
          animation="blurInDown"
          by="character"
          once
          delay={0.3}
        >
          mobile · web3 · ai
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
            dm → prototype → prod. weeks, not quarters.
          </p>
          <p
            className="text-base md:text-xl font-medium"
            style={{ color: "#C9CDD2" }}
          >
            minimal design, sharp engineering. you own the IP.
          </p>
        </div>
      </div>
    </main>
  );
}
