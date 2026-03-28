import React from "react";
import AnimatedSection from "./ui/AnimatedSection";
import { MapPin, Clock } from "lucide-react";

const BRANCHES = [
  {
    id: 1,
    name: "Om Sai Fitness House",
    location: "Bhal Gaon, Kalyan",
    timing: "Open till 10 PM",
    isNew: false,
  },
  {
    id: 2,
    name: "Om Sai Fitness Pro",
    location: "Bhal Gaon, Kalyan",
    timing: "Open till 10 PM",
    isNew: true,
  },
];

export default function BranchesSection() {
  return (
    <section id="branches" className="w-full py-28 relative bg-[var(--color-bg)] z-30">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-[radial-gradient(ellipse_at_right,rgba(255,60,0,0.02)_0%,transparent_60%)] pointer-events-none blur-[60px]" />

      <div className="max-w-7xl mx-auto px-8 lg:px-14">
        
        {/* Header */}
        <AnimatedSection className="flex flex-col items-center justify-center text-center gap-4 mb-20" yOffset={30}>
          <div className="flex items-center gap-4">
            <span className="w-5 h-[1px] bg-[var(--color-accent)] opacity-60 inline-block" />
            <span className="font-body text-[0.65rem] tracking-[0.5em] uppercase text-[var(--color-accent)]">
              Our Locations
            </span>
            <span className="w-5 h-[1px] bg-[var(--color-accent)] opacity-60 inline-block" />
          </div>
          <h2 className="font-heading text-white text-[clamp(2.5rem,5vw,3.5rem)] uppercase leading-tight tracking-[0.05em]">
            Find Your <span className="text-[var(--color-accent)]">Arena</span>
          </h2>
        </AnimatedSection>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 w-full">
          {BRANCHES.map((branch, idx) => (
            <AnimatedSection
              key={branch.id}
              delay={idx * 0.2}
              yOffset={40}
              className={`relative flex flex-col p-10 lg:p-14 rounded-none transition-all duration-500 hover:-translate-y-2 group cursor-pointer ${
                branch.isNew
                  ? "glass-dark border-[var(--color-accent-mid)] hover:border-[var(--color-accent)] hover:shadow-[0_0_40px_rgba(255,60,0,0.15)] bg-gradient-to-br from-[#121212] to-[#0A0A0A]"
                  : "glass-dark border-white/5 hover:border-white/15 bg-[#0D0D0D]"
              }`}
            >
              {/* Subtle inner dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000]/60 to-transparent opacity-50 z-0 pointer-events-none" />

              {/* Badges / Name */}
              <div className="flex items-center justify-between mb-8 z-10">
                <h3 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] uppercase tracking-[0.08em] leading-none text-white/95 group-hover:text-white transition-colors duration-300">
                  {branch.name}
                </h3>
                {branch.isNew && (
                  <span className="animate-pulse flex items-center justify-center px-3 py-1 bg-[var(--color-accent)] text-[0.55rem] tracking-[0.2em] font-body text-white uppercase font-bold shadow-[0_0_15px_rgba(255,60,0,0.4)]">
                    New
                  </span>
                )}
              </div>

              {/* Details List */}
              <div className="flex flex-col gap-5 z-10 mt-auto pt-6 border-t border-white/5">
                <div className="flex items-center gap-4 text-white/50 group-hover:text-white/70 transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                    <MapPin size={14} className="text-[var(--color-accent)]" />
                  </div>
                  <span className="font-body text-[0.85rem] tracking-[0.1em] uppercase">
                    {branch.location}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-white/50 group-hover:text-white/70 transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                    <Clock size={14} className="text-[var(--color-accent)]" />
                  </div>
                  <span className="font-body text-[0.85rem] tracking-[0.1em] uppercase">
                    {branch.timing}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
