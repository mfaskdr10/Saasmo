import SectionTitle from "@/components/layout/SectionTitle";
import overlayTitleSection from "@/assets/Badge.png";
import Card from "@/features/landing/HowWeWork/components/Card";
import Content1 from "@/features/landing/HowWeWork/components/Content1";
import Content2 from "@/features/landing/HowWeWork/components/Content2";
import Content3 from "@/features/landing/HowWeWork/components/Content3";

const HowWeWork = () => {
  return (
    <section className="px-4 xl:px-18.75 py-8 xl:py-16">
      <SectionTitle
        badge={overlayTitleSection}
        title={
          "User -Friendly Recruiing software that delivers immediate results"
        }
        description={
          "Attract great talent to your open roles to take your business to the next leve"
        }
      />
      <div className="mt-16 flex justify-between flex-col xl:flex-row gap-5">
        <Card
          theme={"gradient-1 text-white"}
          layout={"flex-col"}
          number={"001"}
          desc={"Get expert advice on how to attract more top candidates."}
          title={"Build compelling job ads"}
          content={<Content1 />}
        />
        <Card
          theme={"bg-ghost-white text-deep-violet"}
          layout={"flex-col-reverse"}
          number={"002"}
          desc={"Get expert advice on how to attract more top candidates."}
          title={"Promote your ads on 250+ job search sites"}
          content={<Content2 />}
        />
        <Card
          theme={"bg-ghost-white text-deep-violet"}
          layout={"flex-col"}
          number={"003"}
          desc={"Get expert advice on how to attract more top candidates."}
          title={"Promote your ad on 250+ job search sites"}
          content={<Content3 />}
        />
      </div>
    </section>
  );
};

export default HowWeWork;
