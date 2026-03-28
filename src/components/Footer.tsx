"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Instagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Twitter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Facilities", path: "/facilities" },
  { label: "Personal Training", path: "/personal-training" },
  { label: "Pricing", path: "/pricing" },
  { label: "Branches", path: "/branches" },
  { label: "Contact", path: "/contact" },
];

const SOCIALS = [
  { icon: <Instagram />, href: "#" },
  { icon: <Facebook />, href: "#" },
  { icon: <Twitter />, href: "#" },
];

export default function Footer() {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      document.querySelector(path)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#111111] border-t border-white/5 pt-20 pb-10 z-50 relative">
      <div className="max-w-7xl mx-auto px-8 lg:px-14 flex flex-col">
        
        {/* Top Footers Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6 lg:col-span-1">
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
            <p className="font-body text-white/40 text-[0.85rem] leading-[1.8] max-w-sm pr-4">
              Push your limits surrounded by elite coaching and top-tier equipment. The ultimate destination for physical excellence.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              {SOCIALS.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,60,0,0.5)]"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-6 lg:ml-10">
            <h4 className="font-body text-[0.7em] font-bold tracking-[0.3em] uppercase text-white/90">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.path}
                    onClick={(e) => handleLink(e, link.path)}
                    className="font-body text-[0.8rem] tracking-[0.1em] text-white/40 hover:text-[var(--color-accent)] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <h4 className="font-body text-[0.7em] font-bold tracking-[0.3em] uppercase text-white/90">Contact & Info</h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-[var(--color-accent)] shrink-0 mt-1" />
                <span className="font-body text-[0.85rem] text-white/50 leading-relaxed max-w-[15rem]">
                  Bhal Gaon, Kalyan, Maharashtra, India
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-[var(--color-accent)] shrink-0" />
                <span className="font-body text-[0.85rem] text-white/50">
                  +91 XXXXX XXXXX
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-[var(--color-accent)] shrink-0" />
                <span className="font-body text-[0.85rem] text-white/50">
                  info@omsaifitness.com
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-8 gap-4">
          <p className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-white/30 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Om Sai The Fitness House. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-white/30 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-white/30 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
