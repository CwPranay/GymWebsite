"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

// Particle subtle effect
const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const pts = Array.from({ length: 30 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.2 + 0.3,
      vy: Math.random() * 0.2 + 0.05,
      vx: (Math.random() - 0.5) * 0.15,
      o: Math.random() * 0.3 + 0.05,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.y -= p.vy;
        p.x += p.vx;
        if (p.y < -5) {
          p.y = canvas.height + 5;
          p.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,100,20,${p.o})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-10"
    />
  );
};

// Motion variants
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden bg-[var(--color-bg)]">
      
      {/* ── BACKGROUND STACK ── */}
      
      {/* 1. Underlying Base Background */}
      <div className="absolute inset-0 bg-[#060606] z-0" />
      
      {/* 2. Right Side Image with Parallax & Split Layout mask */}
      <div
        className="absolute inset-y-0 right-0 w-[65%] sm:w-[55%] h-full z-0 overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
          willChange: "transform",
        }}
      >
        <img
          src="/gym/hero.webp"
          alt="Gym Cinematic Background"
          className="w-full h-[115%] object-cover object-center scale-105"
        />
        {/* Soft edge fade mask for split design */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060606] via-[#060606]/60 to-transparent left-0 w-full z-10" />
      </div>

      {/* 3. Global Edge Vignette */}
      <div className="absolute inset-0 vignette z-20" />

      {/* 4. Radial Glow Behind Headline (Cinematic Lighting) */}
      <div
        className="absolute top-[40%] left-[10%] w-[50%] h-[60%] blur-[90px] rounded-full z-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,60,0,0.18) 0%, rgba(255,40,0,0.05) 50%, transparent 80%)",
          transform: "translate(-30%, -50%)",
        }}
      />

      {/* 5. Bottom Fade into next sections */}
      <div className="absolute bottom-0 w-full h-[18rem] bg-gradient-to-t from-[var(--color-bg)] to-transparent z-20 pointer-events-none" />

      {/* 6. Grain Noise Texture */}
      <div className="grain z-30 pointer-events-none" />

      {/* 7. Particles */}
      <Particles />

      {/* ── CONTENT (LEFT SIDE FOCUS) ── */}
      <div className="relative z-40 w-full max-w-7xl mx-auto px-8 lg:px-14 flex items-center h-full pt-16">
        <motion.div variants={container} initial="hidden" animate="show" className="w-[85%] md:w-[60%] max-w-3xl">
          
          {/* Eyebrow Label */}
          <motion.div variants={item} className="flex items-center gap-3 mb-6 opacity-80">
            <span className="inline-block w-[30px] h-[1px] bg-[var(--color-accent)] opacity-60" />
            <span className="font-body text-[0.6rem] tracking-[0.6em] text-[var(--color-accent)] uppercase">
              Om Sai Fitness House
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={item} className="font-heading uppercase flex flex-col items-start leading-[0.9] text-left">
            {/* Small / Spaced */}
            <span className="text-white/60 text-[clamp(1.7rem,4vw,3rem)] tracking-[0.2em] mb-1 pl-1">
              Train Like
            </span>
            
            {/* Massive / Accent / Glow */}
            <span className="text-transparent bg-clip-text italic text-[clamp(4.8rem,13vw,11rem)] tracking-tight glow-text-accent pr-6" 
                  style={{ backgroundImage: "linear-gradient(95deg, #FF3C00 10%, #FF7A00 80%)" }}>
              A Beast.
            </span>
            
            {/* Medium / Clean */}
            <span className="text-white/90 text-[clamp(1.8rem,4.5vw,3.5rem)] tracking-[0.05em] mt-2 pl-1">
              Live Like A Champion.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={item} className="font-body text-white/40 text-[clamp(0.85rem,1.2vw,1.1rem)] leading-relaxed tracking-wide pt-7 max-w-md pl-1">
            Elite strength training. Professional guidance. Relentless progression. Experience the premium standard of fitness.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-10 pl-1">
            <button
              onClick={() => window.location.href = '/contact'}
              className="group flex items-center justify-center gap-3 font-body text-[0.7rem] font-bold tracking-[0.2em] text-white uppercase bg-[var(--color-accent)] px-8 py-4 transition-all duration-300 scale-100 hover:scale-105 glow-accent overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-2">Join Now <ArrowRight size={15} strokeWidth={2.5} /></span>
              <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
            </button>
            <button
               onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })}
               className="group font-body text-[0.7rem] font-bold tracking-[0.2em] text-white/70 uppercase border border-white/20 px-8 py-4 bg-transparent hover:bg-white/5 hover:border-white/50 hover:text-white transition-all duration-300 relative flex items-center justify-center"
            >
              Explore
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-40"
      >
        <span className="text-[0.5rem] tracking-[0.5em] text-white/20 uppercase">Scroll</span>
        <div className="scroll-pulse w-[1px] h-[40px] bg-gradient-to-b from-[var(--color-accent)] to-transparent opacity-60" />
        <ChevronDown size={14} className="text-[var(--color-accent)] opacity-40 scroll-pulse" style={{ animationDelay: "0.4s" }} />
      </motion.div>
    </section>
  );
}
