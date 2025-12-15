import TrustedLine from "@/components/icon/TrustedLine";
import trusted1 from "@/assets/trusted-1.svg";
import trusted2 from "@/assets/trusted-2.svg";
import trusted3 from "@/assets/trusted-3.svg";
import trusted4 from "@/assets/trusted-4.svg";
import trusted5 from "@/assets/trusted-5.svg";

const Trusted = () => {
  return (
    <section className="md:p-16 mx-auto w-full relative bg-white overflow-hidden border">
      <p className="text-center text-display-m text-deep-violet mb-20">
        Trusted by <span className="text-display-l">20,000+</span> customers
        across Europe
      </p>
      <TrustedLine className={"md:w-full"} />

      <div className="flex flex-col md:flex-row justify-between px-35 absolute w-full right-0 bottom-20">
        <img
          src={trusted1}
          alt=""
          className="sepia filter-none hover:filter-[sepia(1)_hue-rotate(30deg)_saturate(12)_brightness(1.1)]"
        />
        <img src={trusted2} alt="" />
        <img src={trusted3} alt="" />
        <img src={trusted4} alt="" />
        <img src={trusted5} alt="" />
      </div>
    </section>
  );
};

export default Trusted;
