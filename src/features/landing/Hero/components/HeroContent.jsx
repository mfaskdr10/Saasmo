import Award from "@/components/icon/Award";
import IconChevronRight from "@/components/icon/IconChevronRight";
import { Button } from "@/components/ui/Button";

const HeroContent = () => {
  return (
    <div className="flex-1/2 my-auto z-10">
      {/* Badge / Tag */}
      <div className="flex items-center gap-3 w-full p-1 mb-4">
        <div className="p-2.75 bg-white rounded-full">
          <Award className="text-deep-violet" />
        </div>
        <p className="text-title-s font-normal text-deep-violet">
          Number <span className="font-medium">1 Platform</span>
        </p>
      </div>

      {/* Heading */}
      <h1 className="text-display-xl text-deep-violet mb-8">
        Recruiting software that helps you hire faster for free
      </h1>

      {/* Description */}
      <p className="max-w-125 w-full text-body-m mb-14 text-twilight-blue">
        Attract great talent to your open roles to take your business to the
        next level. Build, promote and manage your jobs with our free to use
        recruitment software.
      </p>

      {/* CTA */}
      <div className="flex gap-4">
        <Button variant="primary" size="lg" to="/get-started-free">
          Get Started Free
        </Button>
        <Button
          variant="secondary"
          className="bg-white"
          size="lg"
          to="/learn-more"
        >
          Learn more
          <IconChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
