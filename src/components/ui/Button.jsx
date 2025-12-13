import clsx from "clsx";
import { Link } from "react-router";

export const Button = ({
  children,
  variant = "primary",
  size,
  className,
  to,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-between gap-2.5 font-medium text-body-s xs:text-title-l md:text-base rounded-3xl";
  const variants = {
    primary: "gradient-1 text-white",
    secondary: "bg-aliceblue text-deep-violet border border-periwinkle",
  };
  const sizes = {
    lg: "px-6 py-4",
    md: "px-6 py-3.5",
  };

  const combinedClasses = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <>
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};
