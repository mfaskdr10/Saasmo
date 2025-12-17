import TrustedLine from "@/components/icon/TrustedLine";
import trusted1 from "@/assets/trusted-1.svg";
import trusted2 from "@/assets/trusted-2.svg";
import trusted3 from "@/assets/trusted-3.svg";
import trusted4 from "@/assets/trusted-4.svg";
import trusted5 from "@/assets/trusted-5.svg";

const Trusted = () => {
  return (
    <section className="py-8 px-10.5 md:p-16 mx-auto w-full relative bg-white">
      <p className="text-center text-display-xs xl:text-display-m text-deep-violet mb-10.5 xl:mb-20">
        Trusted by{" "}
        <span className="text-display-xs xl:text-display-l">20,000+</span>{" "}
        customers across Europe
      </p>
      <div
        className="relative overflow-scroll py-5 xl:overflow-visible"
        style={{ overflowX: "moz-sxrollbars-none", scrollbarWidth: "none" }}
      >
        <TrustedLine className={"w-5xl xl:w-full mx-auto"} />
        <div className="flex gap-27 justify-between absolute top-0 left-0 xl:left-15 xl:right-15">
          <img
            src={trusted1}
            alt=""
            className="sepia filter-none hover:filter-[sepia(1)_hue-rotate(30deg)_saturate(12)_brightness(1.1)]"
          />
          <img src={trusted2} alt="" className=""/>
          <img src={trusted3} alt="" />
          <img src={trusted4} alt="" />
          <img src={trusted5} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Trusted;
