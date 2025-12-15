import GrowUp from "@/components/icon/GrowUp";
import IconChevronRight from "@/components/icon/IconChevronRight";
import { Button } from "@/components/ui/Button";
import interviewsImg from "@/assets/interviews.svg";

const PerformanceCard = () => {
  return (
    <div className="w-full md:w-129.75 bg-white px-4 pt-6 pb-4 rounded-4xl md:top-30 left-[50%] shadow-2xl">
      <p className="md:text-display-s text-title-s text-deep-violet px-4 mb-4">
        Performance
      </p>
      <div className="flex justify-between items-center md:py-2 md:pl-2 md:pr-7.5">
        <div className="md:p-5 p-2.75 bg-aliceblue rounded-3xl">
          <p className="md:text-title-m text-body-xs mb-3 text-twilight-blue">
            Total New Interviews
          </p>
          <img src={interviewsImg} alt="Graph" className="mb-6" />
          <p className="md:text-display-l text-display-s text-deep-violet">
            5256.00
          </p>
        </div>
        <div className="h-33.75 flex flex-col">
          <p className="md:text-title-s text-body-xs text-twilight-blue mb-2.5">
            Last Month
          </p>
          <p className="text-display-xs text-deep-violet font-medium flex gap-1.5 items-center mb-auto">
            <GrowUp /> 8.20%
          </p>
          <Button size="md" variant="primary" to={"/view-all"} className={""}>
            View All <IconChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;
