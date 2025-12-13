import Download from "@/components/icon/Download";
import avatar2 from "@/assets/avatar2.svg";

const ContributionCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 flex gap-1.5 static md:absolute top-15 left-60 shadow-xl animate-float">
      <div
        className="border-4 border-aliceblue rounded-full border-b-twilight-blue"
        dir="ttl"
      >
        <img src={avatar2} alt="avatar-contribution" className="rounded-full" />
      </div>
      <div
        className="border-4 border-aliceblue rounded-full border-b-twilight-blue"
        dir="ttl"
      >
        <img src={avatar2} alt="" className="rounded-full" />
      </div>
      <img src={avatar2} alt="" />
      <img src={avatar2} alt="" />
    </div>
  );
};

export default ContributionCard;
