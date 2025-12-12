import { Link, NavLink } from "react-router";
import logoGambar from "@/assets/logo.svg";
import { Button } from "@/components/ui/Button";

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
  return (
    <nav className="px-6.5 py-4 flex justify-between items-center bg-white rounded-3xl">
      <Link to={"/"}>
        <img src={logoGambar} alt="logo-saasmo" />
      </Link>

      <div className="flex gap-10.5">
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

      <div className="flex gap-3">
        <Button variant="primary" size="lg" to="/get-started-free">
          Get Started Free
        </Button>
        <Button variant="secondary" size="lg" to="/sign-in">
          Sign In
        </Button>
      </div>
    </nav>
  );
};
