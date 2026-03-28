import React from "react";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTASection from "@/components/CTASection";
import { Target, Activity, Zap } from "lucide-react";

const BENEFITS = [
  { icon: <Target className="text-[var(--color-accent)]" size={32} />, title: "Personalized Plans", desc: "Every rep is tailored. A complete roadmap structured exclusively around your biology and goals." },
  { icon: <Activity className="text-[var(--color-accent)]" size={32} />, title: "Expert Coaching", desc: "Gain immediate access to elite techniques, flawless form correction, and relentless motivation." },
  { icon: <Zap className="text-[var(--color-accent)]" size={32} />, title: "Faster Results", desc: "Eliminate the guesswork. Push past plateaus and achieve profound physical transformations rapidly." },
];

const PROCESS = [
  { num: "01", step: "Consultation", desc: "In-depth analysis of your current physical state and ambitious goal setting." },
  { num: "02", step: "Plan Design", desc: "Developing a robust, scientifically backed training and nutrition protocol." },
  { num: "03", step: "Training", desc: "1-on-1 intensive floor sessions to execute the strategies perfectly." },
  { num: "04", step: "Results", desc: "Consistent tracking, adaptation, and breaking limits to secure the physique." },
];

export default function PersonalTrainingPage() {
  return (
    <main className="w-full relative flex flex-col bg-[var(--color-bg)]">
      <PageHero title="Train Smarter" subtitle="Results Faster" image="/PT.webp" />

      {/* Benefits */}
      <section className="py-24 sm:py-32 w-full max-w-7xl mx-auto px-8 lg:px-14">
        <AnimatedSection className="flex flex-col items-center justify-center text-center gap-4 mb-20" yOffset={30}>
          <span className="font-body text-[0.65rem] tracking-[0.5em] uppercase text-[var(--color-accent)]">The Framework</span>
          <h2 className="font-heading text-white text-[clamp(2.5rem,5vw,4rem)] uppercase leading-tight tracking-[0.05em]">
            Why 1-On-1 <span className="text-[var(--color-accent)]">Coaching?</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {BENEFITS.map((benefit, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.15} className="group glass-dark p-12 border border-white/5 hover:border-[var(--color-accent-mid)] transition-colors duration-500 rounded-none cursor-default flex flex-col items-start gap-6">
              <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-accent)]/10 transition-all duration-300">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-display text-[2rem] text-white/95 tracking-[0.05em] uppercase mb-3">{benefit.title}</h3>
                <p className="font-body text-white/50 text-[0.95rem] leading-[1.8] tracking-wider">{benefit.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 border-t border-white/5 bg-[#0C0C0C] relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-14">
          <AnimatedSection className="mb-20">
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] uppercase leading-tight tracking-[0.05em] text-white">
              The Protocol
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {PROCESS.map((proc, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} className="flex flex-col gap-4 relative">
                <span className="font-heading text-[4rem] text-[var(--color-bg-light)] leading-none -mb-8 -ml-4 pointer-events-none drop-shadow-md">
                  {proc.num}
                </span>
                <div className="relative z-10">
                  <h3 className="font-display text-[2rem] text-[var(--color-accent)] tracking-[0.05em] uppercase border-b border-white/10 pb-4 mb-4">
                    {proc.step}
                  </h3>
                  <p className="font-body text-white/50 text-[0.85rem] leading-relaxed tracking-wider">{proc.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
