import { Link, NavLink } from "react-router";
import logoGambar from "@/assets/logo.svg";
import { Button } from "@/components/ui/Button";
import Hamburger from "@/components/icon/Hamburger";
import { useState } from "react";

const navMenus = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About Us",
  },
  {
    path: "/inner-pages",
    title: "Inner Pages",
  },
  {
    path: "/features",
    title: "Features",
  },
  {
    path: "/pricing",
    title: "Pricing",
  },
  {
    path: "/contact-us",
    title: "Contact Us",
  },
];

export const Navbar = () => {
  const [active, setActive] = useState(true);

  return (
    <nav className="px-6.5 py-4 my-6 fixed right-4 left-4 md:right-8 md:left-8 z-100 flex justify-between items-center bg-white rounded-3xl shadow-xs md:shadow-xl">
      <Link to={"/"}>
        <img src={logoGambar} alt="logo-saasmo" />
      </Link>

      <div
        className={`${
          active ? "hidden" : "block"
        } absolute top-25 right-0 bg-white py-4 px-4 text-deep-violet flex flex-col shadow-2xl rounded-2xl gap-2.5 md:flex md:flex-row md:static md:gap-10.5 md:shadow-none`}
      >
        {navMenus.map((navMenu, index) => (
          <NavLink
            to={navMenu.path}
            key={index}
            className={({ isActive }) =>
              `text-[14px] ${
                isActive
                  ? "text-[#1E0A52] font-bold"
                  : "text-[#7A7782] font-normal"
              }`
            }
          >
            {navMenu.title}
          </NavLink>
        ))}
      </div>

      <div className={`hidden md:flex md:gap-3`}>
        <Button variant="primary" size="lg" to="/get-started-free">
          Get Started Free
        </Button>
        <Button variant="secondary" size="lg" to="/sign-in">
          Sign In
        </Button>
      </div>

      <Button
        className={"p-1.75 rounded-[15px] block md:hidden"}
        onClick={() => setActive(!active)}
      >
        <Hamburger />
      </Button>
    </nav>
  );
};
