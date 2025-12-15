import React from "react";
import LinearGradient from "@/components/icon/LinearGradient";
import HeroContent from "@/features/landing/Hero/components/HeroContent";
import { HeroVisuals } from "@/features/landing/Hero/components/HeroVisuals";

export const HeroSection = () => {
  return (
    <section className="relative pt-30 pb-40 md:pb-50 md:pt-50 md:min-h-screen flex flex-col items-center md:justify-between gap-20 px-4 md:px-18.75 md:flex-row border-amber-300">
      {/* Background Decoration */}
      <div className="absolute top-35 right-0 z-0 pointer-events-none">
        <LinearGradient />
      </div>
      {/* Main Container */}
      <HeroContent />
      <HeroVisuals />
    </section>
  );
};
