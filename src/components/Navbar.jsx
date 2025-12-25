import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "PLANS", path: "/plans" },
  { label: "SERVICES", path: "/services" },
  { label: "PERSONAL TRAINING", path: "/personalTraining" },
  { label: "CONTACT", path: "/contact" },

];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setAtTop(currentY < 40);

      if (currentY > lastScrollY && currentY > 80) {
        setVisible(false);
      } else {
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
        ${atTop ? "bg-neutral-950" : "bg-neutral-950 backdrop-blur-md"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          {/* Logo */}
          <Link className="flex " to="/">

            <svg className="relative" fill="#B11226" width="40px" height="40px" viewBox="0 0 50 50" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit"><path d="M17.962 44.874c.374.403.352 1.041-.05 1.416l-2.172 2.031c-.402.375-1.037.353-1.411-.051l-12.649-13.632c-.374-.403-.351-1.04.051-1.416l2.175-2.028c.402-.376 1.037-.353 1.411.051l12.645 13.629zm16.14-25.65c.374.403.351 1.041-.051 1.416l-13.67 12.77c-.402.375-1.037.353-1.411-.051l-3.263-3.521c-.374-.403-.351-1.041.051-1.416l13.667-12.77c.401-.375 1.036-.353 1.41.051l3.267 3.521zm-11.489 21.303c.374.403.351 1.04-.051 1.416l-2.175 2.03c-.402.376-1.037.353-1.411-.051l-12.642-13.632c-.374-.403-.352-1.041.05-1.416l2.171-2.029c.402-.375 1.037-.353 1.411.051l12.647 13.631zm21.063-20.814c.374.403.351 1.041-.052 1.416l-2.174 2.03c-.402.375-1.037.353-1.412-.05l-12.644-13.629c-.375-.403-.352-1.04.05-1.416l2.18-2.035c.401-.375 1.036-.353 1.41.051l12.642 13.633zm4.644-4.34c.374.403.351 1.041-.051 1.417l-2.17 2.029c-.401.376-1.036.353-1.41-.05l-12.642-13.635c-.374-.403-.352-1.041.05-1.417l2.172-2.033c.401-.376 1.035-.354 1.409.05l12.642 13.639z" /></svg>
            <div className="  text-[#B11226]">
              <h3 className="font-heading text-[20px] text-start text-white italic ">OM SAI </h3>
              <p className=" font-heading relative right-4 text-xs italic">The Fitness House</p>
            </div>

          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
            {navLinks.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition ${isActive
                      ? "text-[#B11226]"
                      : "text-gray-200 hover:text-[#B11226]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
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

        {/* Mobile Links */}
        <ul className="mt-10 flex flex-col gap-6 px-6 text-lg font-medium">
          {navLinks.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block transition ${isActive
                    ? "text-[#B11226]"
                    : "text-gray-200 hover:text-[#B11226]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
