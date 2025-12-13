const Card = ({ children, width, title, icon }) => {
  return (
    <>
      <div className={`w-${width} bg-white px-4 pt-6 pb-4 rounded-4xl`}>
        <p className="text-display-s text-deep-violet px-4 mb-4">
          {title}
          {icon}
        </p>
        {children}
      </div>
    </>
  );
};

export default Card;
