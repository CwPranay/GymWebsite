import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/heroImage.png')" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-xl">
          {/* Brand Line */}
          <p className="text-[color:#B11226] tracking-[0.3em] text-sm font-medium mb-4">
            OM SAI • THE FITNESS HOUSE
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Build Strength. <br />
            Build Discipline.
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-gray-300 text-base leading-relaxed">
            A serious training environment with modern equipment and focused
            coaching — built for people who want real results.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex gap-4">
            {/* Call CTA */}
            <a
              href="tel:+91XXXXXXXXXX"
              className="bg-[#B11226] text-white px-6 py-3 font-semibold rounded-md
                         hover:bg-[#D21F3C] transition"
            >
              Call Now
            </a>

            {/* Visit CTA */}
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-white/40 text-white px-6 py-3 font-semibold rounded-md
                         hover:bg-white/10 transition"
            >
              Visit the Gym
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
