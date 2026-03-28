import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import BranchesSection from "@/components/BranchesSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="w-full relative flex flex-col bg-[var(--color-bg)] min-h-screen">
      <HeroSection />
      <ExperienceSection />
      <BranchesSection />
      <CTASection />
    </main>
  );
}
