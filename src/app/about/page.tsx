import React from "react";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTASection from "@/components/CTASection";

const STATS = [
  { value: "5000+", label: "Active Members" },
  { value: "15+", label: "Elite Trainers" },
  { value: "10", label: "Years of Excellence" },
];

const TRAINERS = [
  { name: "Vikram Singh", role: "Head Coach", img: "/PT.webp" },
  { name: "Aryan Desai", role: "Strength Specialist", img: "/PT.webp" },
  { name: "Rohit Sharma", role: "Endurance Expert", img: "/PT.webp" },
];

export default function AboutPage() {
  return (
    <main className="w-full relative flex flex-col bg-[var(--color-bg)]">
      <PageHero title="Our Legacy" subtitle="About Us" image="/bg2.webp" />

      {/* Story Section */}
      <section className="py-24 sm:py-32 w-full max-w-7xl mx-auto px-8 lg:px-14 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] uppercase leading-tight tracking-[0.05em] text-white">
              Built on <span className="text-[var(--color-accent)]">Discipline</span>
            </h2>
            <p className="font-body text-white/50 leading-[1.8] tracking-wider text-[1rem]">
              Om Sai The Fitness House isn't just a gym; it's an institution dedicated to human transformation. We exist to forge stronger bodies and unbreakable mindsets. Since our inception, we have championed proper biomechanics, relentless effort, and pure discipline. 
              <br/><br/>
              No gimmicks. No shortcuts. Just state-of-the-art machinery and an environment engineered to eliminate your excuses. 
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="relative h-[400px] w-full glass-dark p-2 border border-white/5 shadow-2xl">
          <img src="/gym/interiar.webp" className="w-full h-full object-cover opacity-80" alt="Gym Interior" />
        </AnimatedSection>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-[#0A0A0A] relative z-10 w-full overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[radial-gradient(ellipse,rgba(255,60,0,0.05)_0%,transparent_60%)] pointer-events-none blur-[90px]" />
        
        <div className="max-w-7xl mx-auto px-8 lg:px-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-center relative z-20">
          {STATS.map((stat, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.15} className="flex flex-col gap-2">
              <span className="font-display text-[clamp(3.5rem,6vw,5rem)] tracking-[0.02em] text-white group-hover:text-[var(--color-accent)] transition-colors text-shadow-md">
                {stat.value}
              </span>
              <span className="font-body text-[0.8rem] tracking-[0.3em] uppercase text-[var(--color-accent)] font-bold">
                {stat.label}
              </span>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-32 w-full max-w-7xl mx-auto px-8 lg:px-14">
        <AnimatedSection className="flex flex-col gap-4 items-center text-center mb-20">
          <span className="font-body text-[0.6rem] tracking-[0.5em] text-[var(--color-accent)] uppercase">The Experts</span>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] uppercase leading-tight tracking-[0.05em] text-white">
            Meet the Team
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.2} className="group relative w-full h-[400px] cursor-pointer overflow-hidden bg-[#111] glass-dark border border-white/5">
              <img src={trainer.img} alt={trainer.name} className="absolute inset-0 w-full h-[110%] object-cover object-top opacity-60 group-hover:scale-105 transition-transform duration-[1.2s] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-[2.2rem] uppercase tracking-wide text-white">{trainer.name}</h3>
                <span className="font-body text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-accent)] mt-1">{trainer.role}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
