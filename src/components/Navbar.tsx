"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Facilities", path: "/facilities" },
  { label: "Training", path: "/personal-training" },
  { label: "Pricing", path: "/pricing" },
  { label: "Branches", path: "/branches" },
  { label: "Contact", path: "/contact" },
];

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      scrollTo(path);
      setOpen(false);
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      {/* Main Desktop Navbar */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center h-[60px] ${
          scrolled
            ? "bg-black/40 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-14 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="#home" onClick={(e) => handleLink(e, "#home")} className="flex items-center gap-3 group select-none cursor-pointer">
            <div className="w-8 h-8 flex items-center justify-center border border-[var(--color-accent-mid)] transition-colors duration-300 group-hover:border-[var(--color-accent)]">
              <span className="font-display text-[var(--color-accent)] text-[1.05rem] leading-none">OS</span>
            </div>
            <div className="leading-none mt-1">
              <p className="font-display text-white text-[1.1rem] tracking-[0.25em] leading-none uppercase">
                OM SAI
              </p>
              <p className="text-[var(--color-accent)] text-[0.45rem] tracking-[0.4em] uppercase mt-[3px] leading-none opacity-80">
                The Fitness House
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <Link
                  href={path}
                  onClick={(e) => handleLink(e, path)}
                  className="group relative font-body text-[0.65rem] tracking-[0.2em] uppercase text-white/50 hover:text-white/95 transition-colors duration-400"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-accent)] opacity-70 group-hover:w-full transition-all duration-300 ease-out" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right CTA */}
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              onClick={(e) => handleLink(e, "/contact")}
              className="hidden md:inline-flex items-center justify-center font-body text-[0.65rem] tracking-[0.2em] uppercase font-bold text-white px-6 py-[10px] bg-[var(--color-accent)] relative overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(255,60,0,0.4)]"
            >
              Join Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white/60 hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-[18rem] z-50 flex flex-col glass-dark border-l border-white/5"
          >
            <div className="flex items-center justify-between px-8 h-[60px] border-b border-white/5">
              <span className="text-[0.6rem] tracking-[0.4em] text-white/30 uppercase">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            
            <nav className="flex flex-col px-8 mt-10 space-y-6">
              {NAV_LINKS.map(({ label, path }) => (
                <Link
                  key={path}
                  href={path}
                  onClick={(e) => handleLink(e, path)}
                  className="block font-body text-[0.85rem] tracking-[0.2em] uppercase text-white/60 hover:text-[var(--color-accent)] transition-colors border-b border-white/5 pb-4"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto px-8 pb-12">
              <Link
                href="/contact"
                onClick={(e) => handleLink(e, "/contact")}
                className="flex justify-center items-center w-full font-body text-[0.7rem] tracking-[0.2em] uppercase font-bold text-white py-4 bg-[var(--color-accent)] shadow-[0_0_20px_rgba(255,60,0,0.2)]"
              >
                Join Now
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
