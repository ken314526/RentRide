import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  {
    name: "Fleet",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
  {
    name: "Career",
    href: "/career",
  },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="bg-white shadow-md fixed w-full top-0 left-0 z-50"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold text-purple-600">RentRide</h1>

        <div className="md:hidden mr-3">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes className="text-2xl text-purple-600" />
            ) : (
              <FaBars className="text-2xl text-purple-600" />
            )}
          </button>
        </div>

        <ul
          className={`md:flex space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex-row items-center justify-center transition-transform duration-300 ease-in-out ${
            menuOpen ? "flex flex-col space-y-4" : "hidden"
          } md:flex`}
        >
          {navLinks.map((link) => (
            <li key={link.href} className="relative group">
              <Link
                to={link.href}
                className={`text-gray-600 text-xl relative inline-block pb-2 transition-all duration-300 ${
                  pathname === link.href
                    ? "font-bold text-purple-800"
                    : "hover:text-purple-600"
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-purple-600 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${
                    pathname === link.href ? "scale-x-100" : ""
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
