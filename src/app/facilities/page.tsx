import React from "react";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTASection from "@/components/CTASection";
import { ArrowRight } from "lucide-react";

const FACILITIES = [
  { id: "01", title: "Strength Training", img: "/gym/interiar.webp", desc: "Top-of-the-line free weights and resistance machinery for raw power." },
  { id: "02", title: "Cardio Zone", img: "/bg1.webp", desc: "High-intensity cardio equipment offering endurance conditioning." },
  { id: "03", title: "Functional Training", img: "/omsaiEquipment.webp", desc: "Open space turf, plyo boxes, and kettlebells for athletic performance." },
  { id: "04", title: "Swimming Pool", img: "/gym/swimmingpool.webp", desc: "Olympic-sized temperature-controlled pool for aquatic conditioning." },
];

export default function FacilitiesPage() {
  return (
    <main className="w-full relative flex flex-col bg-[var(--color-bg)]">
      <PageHero title="Facilities" subtitle="The Arena" image="/gym/interiar.webp" />

      <section className="py-20 w-full max-w-7xl mx-auto px-8 lg:px-14 flex flex-col gap-14">
        {FACILITIES.map((facility, idx) => (
          <AnimatedSection
            key={facility.id}
            delay={0.1 * idx}
            className="group relative w-full h-[25rem] md:h-[35rem] overflow-hidden bg-[#111] glass-dark border border-white/5 cursor-pointer"
          >
            {/* Image Setup */}
            <div className="absolute inset-0 z-0">
              <img src={facility.img} alt={facility.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
            </div>

            {/* Gradient Dark Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-60" />

            {/* Content layout */}
            <div className="absolute inset-0 z-20 p-10 md:p-16 flex flex-col justify-between">
              <span className="font-heading text-[3rem] text-white/20 tracking-wide">{facility.id}</span>
              
              <div className="flex flex-col gap-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1]">
                <div className="flex items-center justify-between pointer-events-none">
                  <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-none text-white tracking-[0.05em] text-shadow-md">
                    {facility.title}
                  </h2>
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-[800ms] -translate-x-4 group-hover:translate-x-0 bg-white/5 backdrop-blur-md hidden sm:flex">
                    <ArrowRight size={22} className="text-[var(--color-accent)]" />
                  </div>
                </div>

                <div className="overflow-hidden">
                  <p className="font-body text-white/50 text-[1rem] max-w-2xl leading-relaxed tracking-wider opacity-0 transform translate-y-8 transition-all duration-700 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                    {facility.desc}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </section>

      <CTASection />
    </main>
  );
}
