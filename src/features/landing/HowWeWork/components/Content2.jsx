import groupSocialMedia from "@/assets/group-img-social-media.png";
import { Button } from "@/components/ui/Button";

const Content2 = () => {
  return (
    <div className="p-6 bg-white w-full rounded-3xl shadow-xl ">
      <img src={groupSocialMedia} alt="" className="mx-auto mb-5" />
      <Button variant={"secondary"} size={"lg"} className={"w-full pl-13"}>
        Just one click and promote your Ads
      </Button>
    </div>
  );
};

export default Content2;
