import React from "react";
import AnimatedSection from "./ui/AnimatedSection";
import { ArrowRight } from "lucide-react";

const EXPERIENCES = [
  {
    id: 1,
    title: "Strength Training",
    description: "Build raw power and muscle with industry-leading free weights and resistance machines.",
    img: "/gym/interiar.webp",
  },
  {
    id: 2,
    title: "Personal Coaching",
    description: "1-on-1 elite guidance tailored to shatter your limits and achieve your ultimate physique.",
    img: "/PT.webp",
  },
  {
    id: 3,
    title: "Premium Equipment",
    description: "Train with absolute precision using state-of-the-art bio-mechanically sound machinery.",
    img: "/omsaiEquipment.webp",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-[var(--color-bg)] w-full py-32 relative overflow-hidden z-20">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[40%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,60,0,0.03)_0%,transparent_70%)] pointer-events-none transform -translate-y-1/2 blur-[80px]" />

      <div className="max-w-7xl mx-auto px-8 lg:px-14">
        
        {/* Header */}
        <AnimatedSection className="mb-20 flex flex-col items-start gap-4" yOffset={40}>
          <div className="flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[var(--color-accent)] opacity-60 inline-block" />
            <span className="font-body text-[0.65rem] tracking-[0.5em] uppercase text-[var(--color-accent)]">
              The Experience
            </span>
          </div>
          <h2 className="font-heading text-white text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-[1.05] tracking-wide">
            Redefine <br /> Your Limits
          </h2>
          <p className="font-body text-white/40 max-w-sm mt-2 text-[0.95rem] leading-[1.8] tracking-wide">
            Step into a world-class environment designed exclusively for those who demand excellence.
          </p>
        </AnimatedSection>

        {/* Horizontal Cards */}
        <div className="flex flex-col gap-6 w-full">
          {EXPERIENCES.map((exp, idx) => (
            <AnimatedSection
              key={exp.id}
              delay={idx * 0.15}
              yOffset={60}
              className="group relative w-full h-[22rem] sm:h-[26rem] md:h-[30rem] overflow-hidden bg-[#111] border border-white/5 cursor-pointer glass-dark"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={exp.img}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[0.25,0.46,0.45,0.94] group-hover:scale-110 opacity-60"
                />
              </div>

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-[#0B0B0B]/10 opacity-90 transition-opacity duration-700 group-hover:opacity-75" />

              {/* Subtle hover accent glow behind the text */}
              <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-[radial-gradient(circle_at_bottom_left,rgba(255,60,0,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 blur-3xl" />

              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 sm:p-14 flex flex-col justify-end">
                <div className="flex flex-col gap-6 transform transition-transform duration-700 ease-[0.22,1,0.36,1] translate-y-6 group-hover:translate-y-0">
                  
                  <div className="flex items-center justify-between pointer-events-none">
                    <h3 className="font-display uppercase text-white/90 text-[clamp(2rem,4vw,3.5rem)] tracking-[0.05em] leading-none text-shadow-md">
                      {exp.title}
                    </h3>
                    {/* Expand icon appearing on hover */}
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-[800ms] -translate-x-4 group-hover:translate-x-0 bg-white/5 backdrop-blur-md">
                      <ArrowRight size={20} className="text-[var(--color-accent)]" />
                    </div>
                  </div>

                  {/* Description revealing on hover */}
                  <div className="overflow-hidden">
                    <p className="font-body text-white/50 text-[clamp(0.85rem,1.2vw,1.1rem)] max-w-2xl leading-relaxed tracking-wider opacity-0 transform translate-y-8 transition-all duration-700 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
