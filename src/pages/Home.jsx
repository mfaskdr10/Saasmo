import { Navbar } from "@/components/common/Navbar";
import { HeroSection } from "@/features/landing/Hero";
import Trusted from "@/features/landing/Trsuted";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="gradient-2 border-0">
        <HeroSection />
      </div>
      <Trusted />
    </>
  );
};
