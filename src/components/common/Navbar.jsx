import { Link, NavLink } from "react-router";
import logoGambar from "@/assets/logo.svg";
import { Button } from "@/components/ui/Button";
import Hamburger from "@/components/icon/Hamburger";
import { useEffect, useState } from "react";

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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 20px, ubah state menjadi true
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function (PENTING: hapus listener saat komponen di-unmount)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` py-4 fixed ${
        isScrolled
          ? "px-13 right-0 left-0 top-0 rounded-none transition-all duration-300 shadow-2xl"
          : "px-6.5 right-4 left-4 top-6 md:right-8 md:left-8 transition-all duration-300"
      }  z-100 flex justify-between items-center bg-white rounded-3xl`}
    >
      <Link to={"/"}>
        <img src={logoGambar} alt="logo-saasmo" />
      </Link>

      <div
        className={`${
          active ? "hidden" : "block"
        } absolute top-25 w-[90%] left-5 bg-white py-6 lg:py-0 text-center text-deep-violet flex flex-col shadow-2xl rounded-2xl gap-2.5 xl:w-auto xl:flex xl:flex-row xl:static xl:gap-10.5 xl:shadow-none`}
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

      <div className={`hidden md:flex md:gap-3 md:ml-auto xl:ml-0 md:mr-3`}>
        <Button variant="primary" size="lg" to="/get-started-free">
          Get Started Free
        </Button>
        <Button variant="secondary" size="lg" to="/sign-in">
          Sign In
        </Button>
      </div>
      <Button
        className={"p-1.75 rounded-[15px] block xl:hidden"}
        onClick={() => setActive(!active)}
        variant={"primary"}
      >
        <Hamburger />
      </Button>
    </nav>
  );
};
