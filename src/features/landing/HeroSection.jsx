import { Button } from "@/components/ui/Button";

export const HeroSection = () => {
  return (
    <div className="flex justify-between items-center pt-10.5 pb-20">
      <Left />
      <Right />
    </div>
  );
};

const Left = () => {
  return (
    <div className="flex-1/2">
      <p></p>
      <h1 className="text-display-xl text-deep-violet mb-8">
        Recruiting software <br />
        that helps you hire <br /> faster for free
      </h1>
      <p className="max-w-125 w-full text-body-m mb-14">
        Attract great talent to your open roles to take your business to the
        next level. Build, promote and manage your jobs with our free to use
        recruitment software.
      </p>
      <div className="flex gap-4">
        <Button variant="primary" size="lg" to="/get-started-free">
          Get Started Free
        </Button>
        <Button variant="secondary" size="lg" to="/sign-in">
          Learn more
        </Button>
      </div>
    </div>
  );
};

const Right = () => {
  return (
    <div className="flex-1/2">
      <div>Right</div>
    </div>
  );
};
