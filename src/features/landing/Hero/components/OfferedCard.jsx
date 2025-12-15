import Menu from "@/components/icon/Menu";
import avatar from "@/assets/avatar.svg";

const OfferedCard = () => {
  return (
    <div className="bg-white p-2.75 md:p-5 rounded-2xl md:rounded-4xl absolute md:-left-30 md:top-45 top-30 -left-3 xs:-left-5 shadow-2xl text-deep-violet z-10">
      <div className="flex justify-between md:mb-5 mb-2.75 items-center">
        <p className="md:text-display-s text-title-s text-deep-violet">
          Offered
        </p>
        <div className="md:p-2.5 px-1.25 bg-yellow-green rounded-full">
          <Menu className={"md:w-7.25 md:h-7.25 w-3.5 h-7.25"} />
        </div>
      </div>
      <div className="flex flex-col md:gap-5 gap-2.75">
        <CandidateRow name="Sandra Elliot" location="London, UK" status="F" />
        <hr className="border-2 border-aliceblue" />
        <CandidateRow name="Sandra Elliot" location="London, UK" status="L" />
      </div>
    </div>
  );
};

const CandidateRow = ({ name, location, status }) => (
  <div className="flex md:gap-5 gap-1.5 items-end">
    <img
      src={avatar}
      alt={name}
      className="bg-twilight-blue rounded-full w-6 h-6 md:w-10 md:h-10"
    />
    <div className="flex flex-col">
      <p className="md:text-display-xs text-title-s">{name}</p>
      <p className="md:text-body-m text-body-xs text-gray-500">{location}</p>
    </div>
    <span className="ml-auto font-bold">{status}</span>
  </div>
);

export default OfferedCard;
