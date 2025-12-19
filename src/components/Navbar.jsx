import { Menu } from "lucide-react";
import { useState } from "react";
import React from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = ["Home", "Services", "Plans", "Contact"];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-16 bg-neutral-950/95 backdrop-blur-md text-white z-50 border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center shrink-0">
            <img
              src="./OMSAILOGO.png"
              alt="OM Sai The Fitness House"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10 text-[15px] font-medium tracking-[0.08em]">
            {navLinks.map((item) => (
              <li
                key={item}
                className="relative cursor-pointer text-gray-300 hover:text-yellow-400 transition
                after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0
                after:bg-yellow-400 after:transition-all hover:after:w-full"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open Menu"
            className="md:hidden cursor-pointer text-gray-300 hover:text-yellow-400 transition"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300"
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-neutral-950 z-50
        transform transition-transform duration-300 ease-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-400/20">
          <span className="text-lg font-semibold tracking-wide text-white">
            Menu
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close Menu"
            className="text-xl cursor-pointer text-gray-300 hover:text-yellow-400 transition"
          >
            ✕
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col gap-6 px-6 py-10 text-base font-medium tracking-wide">
          {navLinks.map((item) => (
            <li
              key={item}
              onClick={() => setOpen(false)}
              className="cursor-pointer text-gray-300 hover:text-yellow-400 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
