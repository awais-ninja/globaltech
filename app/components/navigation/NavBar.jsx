"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "../primitives/Link";
import NavData from "@/app/data/navData";
import Logo from "../primitives/Logo";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-slate-100  w-full z-20 top-0 left-0 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            href="/contact"
            className="text-white hidden md:inline focus:outline-none bg-red-900 hover:bg-red-700  font-medium rounded-md text-sm px-5 py-2.5 "
          >
            Call Now
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-red-900"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <RxHamburgerMenu className="w-5 h-5 text-black fill-red-900" />
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto ${
            isOpen ? "block" : "hidden"
          } md:block`}
          id="navbar-sticky"
        >
          <ul className="text-black flex flex-col p-4 md:p-0 mt-2 font-medium rounded-md md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            {NavData.map(({ title, href, id }) => (
              <li key={id}>
                <Link
                  href={href}
                  className="block py-2 px-3 rounded hover:text-red-900 md:hover:bg-transparent md:p-0 text-black"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
