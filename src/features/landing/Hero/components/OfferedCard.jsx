import Menu from "@/components/icon/Menu";
import avatar from "@/assets/avatar.svg";

const OfferedCard = () => {
  return (
    <div className="bg-white p-5 rounded-4xl static md:absolute -left-20 top-85 shadow-2xl text-deep-violet">
      <div className="flex justify-between mb-5 items-center">
        <p className="text-display-s text-deep-violet">Offered</p>
        <div className="p-2.5 bg-yellow-green rounded-full">
          <Menu />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <CandidateRow name="Sandra Elliot" location="London, UK" status="F" />
        <hr className="border-2 border-aliceblue" />
        <CandidateRow name="Sandra Elliot" location="London, UK" status="L" />
      </div>
    </div>
  );
};

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

export default OfferedCard;
