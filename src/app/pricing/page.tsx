import React from "react";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTASection from "@/components/CTASection";
import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Basic",
    price: "₹1,499",
    period: "/month",
    features: [
      "Access to Gym Floor",
      "Standard Equipment",
      "Locker Room Access",
      "Free Parking",
    ],
    isPopular: false,
  },
  {
    name: "Pro",
    price: "₹2,999",
    period: "/month",
    features: [
      "Everything in Basic",
      "Group Classes Access",
      "1 PT Session / Month",
      "Dietary Consultation",
      "Sauna Access",
    ],
    isPopular: true,
  },
  {
    name: "Elite",
    price: "₹5,499",
    period: "/month",
    features: [
      "Everything in Pro",
      "Unlimited PT Sessions",
      "Priority Booking",
      "Custom Macro Plan",
      "Free Guest Pass",
    ],
    isPopular: false,
  },
];

export default function PricingPage() {
  return (
    <main className="w-full relative flex flex-col bg-[var(--color-bg)]">
      <PageHero title="Membership" subtitle="Join the Elite" />

      <section className="py-24 sm:py-32 w-full max-w-7xl mx-auto px-8 lg:px-14">
        <AnimatedSection className="flex flex-col items-center justify-center text-center gap-4 mb-20" yOffset={30}>
          <span className="font-body text-[0.65rem] tracking-[0.5em] uppercase text-[var(--color-accent)]">Investment</span>
          <h2 className="font-heading text-white text-[clamp(2.5rem,5vw,4rem)] uppercase leading-tight tracking-[0.05em]">
            Choose Your <span className="text-[var(--color-accent)]">Tier</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {PLANS.map((plan, idx) => (
            <AnimatedSection
              key={plan.name}
              delay={idx * 0.15}
              className={`relative flex flex-col p-10 lg:p-12 transition-all duration-500 hover:-translate-y-3 cursor-default h-full ${
                plan.isPopular
                  ? "glass-dark border-[var(--color-accent)] shadow-[0_0_50px_rgba(255,60,0,0.15)] bg-gradient-to-br from-[#121010] to-[#0A0A0A] scale-100 md:scale-105 z-10"
                  : "bg-[#0D0D0D] border border-white/5 hover:border-white/15 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-white font-body text-[0.6rem] tracking-[0.2em] font-bold uppercase py-2 px-6 shadow-[0_0_20px_rgba(255,60,0,0.5)] z-20">
                  Most Popular
                </div>
              )}

              <div className="flex flex-col border-b border-white/5 pb-8 mb-8">
                <h3 className="font-display text-[2.5rem] uppercase tracking-wide text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-[3.5rem] tracking-tight text-[var(--color-accent)] glow-text-accent">
                    {plan.price}
                  </span>
                  <span className="font-body text-[0.8rem] text-white/40 tracking-wider">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-5 flex-grow mb-12">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Check size={18} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span className="font-body text-[0.95rem] text-white/70 leading-relaxed tracking-wider">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 font-body text-[0.7rem] uppercase tracking-[0.2em] font-bold transition-all duration-300 mt-auto ${
                  plan.isPopular
                    ? "bg-[var(--color-accent)] text-white hover:bg-white hover:text-[var(--color-bg)] hover:shadow-xl"
                    : "border border-white/20 text-white/80 hover:bg-white/5 hover:border-white/50 hover:text-white"
                }`}
              >
                Select Plan
              </button>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
