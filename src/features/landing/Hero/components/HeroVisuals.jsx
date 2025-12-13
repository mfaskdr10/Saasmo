import ContributionCard from "@/features/landing/Hero/components/ContributionCard";
import DownloadCard from "@/features/landing/Hero/components/DownloadCard";
import OfferedCard from "@/features/landing/Hero/components/OfferedCard";
import PerformanceCard from "@/features/landing/Hero/components/PerformanceCard";

export const HeroVisuals = () => {
  return (
    <div className="flex flex-col gap-10 md:flex-1/3 flex-1 z-10 md:relative">
      <PerformanceCard />
      <OfferedCard />
      <DownloadCard />
      <ContributionCard />
    </div>
  );
};