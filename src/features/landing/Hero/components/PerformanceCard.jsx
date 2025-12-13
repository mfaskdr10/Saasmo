import GrowUp from "@/components/icon/GrowUp";
import IconChevronRight from "@/components/icon/IconChevronRight";
import { Button } from "@/components/ui/Button";
import interviewsImg from "@/assets/interviews.svg";

const PerformanceCard = () => {
  return (
    <div className="static w-full md:w-129.75 bg-white px-4 pt-6 pb-4 rounded-4xl md:absolute top-30 shadow-2xl animate-float">
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
          <Button size="md" variant="primary" to={"/view-all"}>
            View All <IconChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;
