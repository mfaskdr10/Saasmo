import { Navbar } from "@/components/common/Navbar";
import { DesktopLayout } from "@/components/layout";
import { HeroSection } from "@/features/landing/HeroSection";
import React from "react";

export const Home = () => {
  return (
    <div className="gradient-2 w-full h-screen px-8 py-6">
      <Navbar />
      <DesktopLayout>
        <HeroSection />
      </DesktopLayout>
    </div>
  );
};
