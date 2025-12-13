import React from "react";
import LinearGradient from "@/components/icon/LinearGradient";
import HeroContent from "@/features/landing/Hero/components/HeroContent";
import { HeroVisuals } from "@/features/landing/Hero/components/HeroVisuals";

export const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-35 -right-15 z-0 pointer-events-none">
        <LinearGradient />
      </div>

      {/* Main Container */}

      <div className="flex justify-between pt-30 gap-20 h-full px-18.75">
        <HeroContent />
        <HeroVisuals />
      </div>
    </section>
  );
};
