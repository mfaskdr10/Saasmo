import IconChevronRight from "@/components/icon/IconChevronRight";
import { Button } from "@/components/ui/Button";

const HeaderCard = ({ number, desc, title }) => {
  return (
    <div className="flex flex-col items-start gap-9.5">
      <header className="flex justify-between items-start gap-14 pl-4">
        <p className=" text-display-xs opacity-[0.3]">{number}</p>
        <p className="">{desc}</p>
      </header>
      <h1 className="text-display-s pl-4">{title}</h1>
      <Button className={"border"} size={"md"}>
        Learn More
        <IconChevronRight />
      </Button>
    </div>
  );
};

export default HeaderCard;
