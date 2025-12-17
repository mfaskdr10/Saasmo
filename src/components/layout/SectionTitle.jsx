const SectionTitle = ({ badge, title, description }) => {
  return (
    <header className="flex flex-col xl:flex-row justify-between xl:items-end relative">
      <div className="absolute xl:top-8 xl:left-30 right-10 top-5">
        <img src={badge} alt="" className="w-30 xl:w-37.5 shadow-2xs" />
      </div>
      <h1 className="text-display-m xl:text-display-xl w-full xl:w-2xl mb-4 xl:mb-0 text-deep-violet">{title}</h1>
      <p className="xl:w-73 text-body-s xl:text-body-l">{description}</p>
    </header>
  );
};

export default SectionTitle;
