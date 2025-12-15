import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-black text-white relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">

          {/* Logo */}
          <div className="flex flex-col text-center leading-none">
            <span className="text-2xl md:text-xl font-extrabold text-yellow-400 tracking-wide uppercase">
              Om Sai
            </span>
            <span className="text-sm font-semibold tracking-widest text-white">
            The Fitness House
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">Services</li>
            <li className="hover:text-yellow-400 cursor-pointer">Plans</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden focus:outline-none"
          >
            <div className="space-y-1">
              <span className="block w-7 h-0.5 bg-yellow-400"></span>
              <span className="block w-7 h-0.5 bg-yellow-400"></span>
              <span className="block w-7 h-0.5 bg-yellow-400"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out z-50
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Sidebar Header */}
        <div className="px-6 py-6 border-b border-yellow-400/20 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-yellow-400 uppercase">
              Om Sai
            </span>
            <span className="text-xs tracking-widest">
              Fitness House
            </span>
          </div>

          <button onClick={() => setOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col gap-6 px-6 py-8 text-lg font-medium">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Services</li>
          <li className="hover:text-yellow-400 cursor-pointer">Plans</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
