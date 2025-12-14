import avatar2 from "@/assets/avatar2.svg";

const ContributionCard = () => {
  return (
    <div className="bg-white rounded-2xl p-3 md:p-6 flex gap-1.5 absolute right-5 top-125 md:top-15 md:right-0 shadow-xl animate-float">
      <div
        className="border-4 border-aliceblue rounded-full border-b-twilight-blue"
        dir="ttl"
      >
        <img
          src={avatar2}
          alt="avatar-contribution"
          className="rounded-full md:w-full md:h-full w-7.5 h-7.5"
        />
      </div>
      <div
        className="border-4 border-aliceblue rounded-full border-b-twilight-blue"
        dir="ttl"
      >
        <img
          src={avatar2}
          alt=""
          className="rounded-full md:w-full md:h-full w-7.5 h-7.5"
        />
      </div>
      <div
        className="border-4 border-aliceblue rounded-full border-b-twilight-blue"
        dir="ttl"
      >
        <img
          src={avatar2}
          alt=""
          className="rounded-full md:w-full md:h-full w-7.5 h-7.5"
        />
      </div>
      <div
        className="border-4 border-aliceblue rounded-full border-b-twilight-blue"
        dir="ttl"
      >
        <img
          src={avatar2}
          alt=""
          className="rounded-full md:w-full md:h-full w-7.5 h-7.5"
        />
      </div>
    </div>
  );
};

export default ContributionCard;
