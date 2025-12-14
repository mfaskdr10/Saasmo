import React from "react";
import LinearGradient from "@/components/icon/LinearGradient";
import HeroContent from "@/features/landing/Hero/components/HeroContent";
import { HeroVisuals } from "@/features/landing/Hero/components/HeroVisuals";

export const HeroSection = () => {
  return (
    <section className="relative pb-10 md:h-screen md:pb-0 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-35 -right-15 z-0 pointer-events-none">
        <LinearGradient />
      </div>

      {/* Main Container */}
      <div className="flex flex-col justify-between gap-20 min-h-screen pt-35 md:pt-30 px-4 md:px-18.75 md:flex-row">
        <HeroContent />
        <HeroVisuals />
      </div>
    </section>
  );
};
