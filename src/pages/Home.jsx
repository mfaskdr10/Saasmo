import { Navbar } from "@/components/common/Navbar";
import { HeroSection } from "@/features/landing/Hero";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="gradient-2 border-0">
        <HeroSection />
      </div>
      <p className="bg-amber-200 h-screen">HAlo Semuanya</p>
    </>
  );
};
