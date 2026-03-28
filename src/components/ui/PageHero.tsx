"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHero({
  title,
  subtitle,
  image = "/gym/hero.webp",
}: PageHeroProps) {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[var(--color-bg)] mt-[60px]">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        />
        {/* Deep dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[#0B0B0B]/80 to-transparent z-10" />
      </div>

      {/* Cinematic Lighting */}
      <div className="absolute inset-0 vignette z-20 pointer-events-none" />
      <div className="grain z-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(255,60,0,0.15)_0%,transparent_60%)] blur-[80px] z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-40 w-full max-w-5xl mx-auto px-8 lg:px-14 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {subtitle && (
            <div className="flex items-center gap-4 justify-center mb-6">
              <span className="w-8 h-[1px] bg-[var(--color-accent)] opacity-60 inline-block" />
              <span className="font-body text-[0.6rem] tracking-[0.5em] text-[var(--color-accent)] uppercase">
                {subtitle}
              </span>
              <span className="w-8 h-[1px] bg-[var(--color-accent)] opacity-60 inline-block" />
            </div>
          )}
          
          <h1 className="font-heading uppercase text-white text-[clamp(3.5rem,8vw,6rem)] leading-[0.9] tracking-tight glow-text-accent text-shadow-xl" style={{ textShadow: "0 0 30px rgba(255,60,0,0.3)" }}>
            {title}
          </h1>
        </motion.div>
      </div>

      {/* Bottom transition blend */}
      <div className="absolute bottom-0 w-full h-[8rem] bg-gradient-to-t from-[var(--color-bg)] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
