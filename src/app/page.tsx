"use client";

import { useState, useEffect } from "react";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurWorks from "@/components/OurWorks";
import WhatWeDo from "@/components/WhatWeDo";
import HowWeWork from "@/components/HowWeWork";
import OurValues from "@/components/OurValues";
import Footer from "@/components/Footer";
import TelegramBanner from "@/components/TelegramBanner";

export default function Home() {
  const [showTelegramBanner, setShowTelegramBanner] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Show banner after 5 seconds
    const timer = setTimeout(() => {
      setShowTelegramBanner(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F6F7F9" }}>
      <Header />
      <Hero />
      <OurWorks />
      <WhatWeDo />
      <HowWeWork />
      <OurValues />
      <Footer />
      <ProgressiveBlur
        height={isMobile ? "8%" : "10%"}
        className="fixed bottom-0 left-0 right-0"
        position="bottom"
      />
      {showTelegramBanner && (
        <TelegramBanner onClose={() => setShowTelegramBanner(false)} />
      )}
    </div>
  );
}
