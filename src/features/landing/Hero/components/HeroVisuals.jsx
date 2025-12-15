import ContributionCard from "@/features/landing/Hero/components/ContributionCard";
import DownloadCard from "@/features/landing/Hero/components/DownloadCard";
import OfferedCard from "@/features/landing/Hero/components/OfferedCard";
import PerformanceCard from "@/features/landing/Hero/components/PerformanceCard";

export const HeroVisuals = () => {
  return (
    <div className="relative flex-1/3">
      <PerformanceCard />
      <OfferedCard />
      <DownloadCard />
      <ContributionCard />
    </div>
  );
};
