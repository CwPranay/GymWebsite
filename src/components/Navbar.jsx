import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);

  const navLinks = ["Home", "Services", "Plans", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setAtTop(currentY < 40);

      if (currentY > lastScrollY && currentY > 80) {
        // scrolling down
        setVisible(false);
      } else {
        // scrolling up
        setVisible(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full h-20 z-50
        transition-all duration-300 ease-out
        ${visible ? "translate-y-0" : "-translate-y-full"}
        ${atTop
          ? "bg-neutral-950"
          : "bg-neutral-950 backdrop-blur-md"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          {/* Logo */}
          <img
            src="./OMSAILOGO.webp"
            alt="OM Sai The Fitness House"
            className="h-10 w-auto object-contain"
          />

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-200">
            {navLinks.map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-[#B11226] transition"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-gray-200 hover:text-[#B11226] transition"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 z-40"
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-neutral-950 z-50
        transform transition-transform duration-300 ease-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-20">
          <span className="text-sm tracking-widest text-gray-400">MENU</span>
          <button
            onClick={() => setOpen(false)}
            className="text-xl text-gray-300 hover:text-[#B11226] transition"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <ul className="mt-10 flex flex-col gap-6 px-6 text-lg font-medium">
          {navLinks.map((item) => (
            <li
              key={item}
              onClick={() => setOpen(false)}
              className="cursor-pointer text-gray-200 hover:text-[#B11226] transition"
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
