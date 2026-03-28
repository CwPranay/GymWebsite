"use client";

import React from "react";
import AnimatedSection from "./ui/AnimatedSection";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="w-full relative bg-[#060606] border-y border-white/5 overflow-hidden z-40 flex items-center justify-center min-h-[70vh]">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] md:w-[50%] h-[70%] bg-[radial-gradient(circle,rgba(255,60,0,0.12)_0%,rgba(255,40,0,0.02)_40%,transparent_70%)] pointer-events-none blur-[90px] z-0" />
      
      {/* Grain Texture Over Glow */}
      <div className="grain z-10 pointer-events-none" />

      <AnimatedSection className="relative z-20 max-w-4xl mx-auto px-8 lg:px-14 flex flex-col items-center justify-center text-center gap-10" yOffset={40}>
        
        {/* Main CTA Text */}
        <h2 className="font-heading text-white text-[clamp(3.5rem,8vw,6.5rem)] uppercase leading-[0.9] tracking-[0.02em] glow-text-accent text-shadow-xl" style={{ textShadow: "0 0 40px rgba(255,60,0,0.25)" }}>
          No Excuses. <br />
          <span className="text-transparent bg-clip-text italic pr-4" style={{ backgroundImage: "linear-gradient(95deg, #FF3C00 10%, #FF7A00 80%)" }}>
            Just Results.
          </span>
        </h2>
        
        {/* Subtext */}
        <p className="font-body text-white/40 max-w-lg text-[clamp(0.95rem,1.2vw,1.1rem)] leading-[1.8] tracking-[0.05em] px-4">
          The only thing standing between you and your ultimate physique is the decision to start. Join the ranks of champions today.
        </p>

        {/* Primary CTA Button */}
        <button
          onClick={() => window.location.href = '/contact'}
          className="group mt-6 flex items-center justify-center gap-4 font-body text-[0.8rem] font-bold tracking-[0.25em] text-white uppercase bg-[var(--color-accent)] px-12 py-5 transition-all duration-500 hover:-translate-y-2 glow-accent relative overflow-hidden rounded-none"
        >
          <span className="relative z-10 flex items-center gap-3">
            Start Your Journey <ArrowRight size={18} strokeWidth={2.5} />
          </span>
          <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
        </button>
      </AnimatedSection>
    </section>
  );
}
