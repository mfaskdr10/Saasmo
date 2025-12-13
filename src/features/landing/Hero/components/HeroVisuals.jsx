import React from "react";
import { Button } from "@/components/ui/Button";
import IconChevronRight from "@/components/icon/IconChevronRight";
import GrowUp from "@/components/icon/GrowUp";
import Menu from "@/components/icon/Menu";
import Download from "@/components/icon/Download";
import interviewsImg from "@/assets/interviews.svg";
import avatar from "@/assets/avatar.svg";

export const HeroVisuals = () => {
  return (
    <div className="flex-1/3 z-10 relative">
      <PerformanceCard />
      <OfferedCard />
      <DownloadCard />
      <ContributionCard />
    </div>
  );
};

// --- Sub-Components (Bisa dipisah ke file lain jika mau lebih rapi lagi) ---

const PerformanceCard = () => (
  <div className="w-129.75 bg-white px-4 pt-6 pb-4 rounded-4xl absolute top-30 shadow-2xl">
    <p className="text-display-s text-deep-violet px-4 mb-4">Performance</p>
    <div className="flex justify-between items-center py-2 pl-2 pr-7.5">
      <div className="p-5 bg-aliceblue rounded-3xl">
        <p className="text-title-m mb-3 text-twilight-blue">
          Total New Interviews
        </p>
        <img src={interviewsImg} alt="Graph" className="mb-6" />
        <p className="text-display-l text-deep-violet">5256.00</p>
      </div>
      <div className="h-33.75 flex flex-col">
        <p className="text-title-s text-twilight-blue mb-2.5">Last Month</p>
        <p className="text-display-xs text-deep-violet font-medium flex gap-1.5 items-center mb-auto">
          <GrowUp /> 8.20%
        </p>
        <Button size="md" variant="primary">
          View All <IconChevronRight />
        </Button>
      </div>
    </div>
  </div>
);

const OfferedCard = () => (
  <div className="bg-white p-5 rounded-4xl absolute -left-20 top-85 shadow-2xl">
    <div className="flex justify-between mb-5 items-center">
      <p className="text-display-s text-deep-violet">Offered</p>
      <Menu />
    </div>
    <div className="flex flex-col gap-5">
      <CandidateRow name="Sandra Elliot" location="London, UK" status="F" />
      <hr className="border-2 border-aliceblue" />
      <CandidateRow name="Sandra Elliot" location="London, UK" status="L" />
    </div>
  </div>
);

const CandidateRow = ({ name, location, status }) => (
  <div className="flex gap-5 items-end">
    <img
      src={avatar}
      alt={name}
      className="bg-twilight-blue rounded-full w-10 h-10"
    />
    <div className="flex flex-col">
      <p className="text-display-xs">{name}</p>
      <p className="text-body-m text-gray-500">{location}</p>
    </div>
    <span className="ml-auto font-bold">{status}</span>
  </div>
);

const DownloadCard = () => (
  <div className="bg-yellow-green rounded-2xl p-6 flex gap-10 border-8 border-white absolute top-108 left-55 shadow-2xl">
    <div className="flex flex-col">
      <p className="text-title-s mb-auto">Total Download</p>
      <p className="text-display-s">1.2m</p>
    </div>
    <div className="flex flex-col items-end gap-4">
      <div className="p-2.75 bg-white rounded-full">
        <Download />
      </div>
      {/* Visual Dots */}
      <div className="flex gap-1">
        <span className="w-1 h-1 bg-black rounded-full"></span>
        <span className="w-1 h-1 bg-black rounded-full"></span>
        <span className="w-1 h-1 bg-black rounded-full"></span>
      </div>
    </div>
  </div>
);

const ContributionCard = () => (
  <div className="bg-white rounded-2xl p-6 flex gap-10 absolute top-15 left-60 w-80 shadow-xl">
    <div className="flex flex-col">
      <p className="text-title-s mb-auto">Total Download</p>
      <p className="text-display-s">1.2m</p>
    </div>
    <div className="flex flex-col items-end gap-4">
      <div className="p-2.75 bg-white rounded-full">
        <Download />
      </div>
      {/* Visual Dots */}
      <div className="flex gap-1">
        <span className="w-1 h-1 bg-black rounded-full"></span>
        <span className="w-1 h-1 bg-black rounded-full"></span>
        <span className="w-1 h-1 bg-black rounded-full"></span>
      </div>
    </div>
  </div>
);
