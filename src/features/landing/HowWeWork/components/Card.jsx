import HeaderCard from "@/features/landing/HowWeWork/components/HeaderCard";

const Card = ({ theme, layout, number, title, desc, content }) => {
  return (
    <div
      className={`${theme} ${layout} py-8 px-5 rounded-[40px] flex gap-9.5 items-start`}
    >
      <HeaderCard number={number} title={title} desc={desc} />
      {content}
    </div>
  );
};

export default Card;
