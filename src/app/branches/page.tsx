import React from "react";
import PageHero from "@/components/ui/PageHero";
import BranchesSection from "@/components/BranchesSection";
import CTASection from "@/components/CTASection";

export default function BranchesPage() {
  return (
    <main className="w-full relative flex flex-col bg-[var(--color-bg)] min-h-screen">
      <PageHero 
        title="Our Locations" 
        subtitle="Find Your Arena" 
        image="/gym/interiar.webp" 
      />
      <div className="pt-20 pb-10">
        <BranchesSection />
      </div>
      <CTASection />
    </main>
  );
}
