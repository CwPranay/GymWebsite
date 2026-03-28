import React from "react";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Mail, Phone, MapPin, Map } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="w-full relative flex flex-col bg-[var(--color-bg)]">
      <PageHero title="Contact Us" subtitle="Start Now" image="/heroImage.webp" />

      <section className="py-24 sm:py-32 w-full max-w-7xl mx-auto px-8 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10">
        
        {/* Contact Form */}
        <AnimatedSection className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-white text-[clamp(2.5rem,5vw,4rem)] uppercase leading-tight tracking-[0.05em]">
              Send A <span className="text-[var(--color-accent)]">Message</span>
            </h2>
            <p className="font-body text-white/50 text-[1rem] leading-relaxed max-w-md">
              Have questions about our memberships or personal training programs? Reach out directly and our team will be in touch.
            </p>
          </div>

          <form className="flex flex-col gap-8 w-full max-w-md">
            <div className="flex flex-col gap-2 relative group">
              <label className="font-body text-[0.65rem] tracking-[0.2em] uppercase text-white/40 group-focus-within:text-[var(--color-accent)] transition-colors">Full Name</label>
              <input 
                type="text" 
                required 
                className="w-full bg-transparent border-b border-white/20 text-white font-body text-[1.1rem] py-2 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2 relative group">
              <label className="font-body text-[0.65rem] tracking-[0.2em] uppercase text-white/40 group-focus-within:text-[var(--color-accent)] transition-colors">Phone Number</label>
              <input 
                type="tel" 
                required 
                className="w-full bg-transparent border-b border-white/20 text-white font-body text-[1.1rem] py-2 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                placeholder="+91"
              />
            </div>

            <div className="flex flex-col gap-2 relative group">
              <label className="font-body text-[0.65rem] tracking-[0.2em] uppercase text-white/40 group-focus-within:text-[var(--color-accent)] transition-colors">Message</label>
              <textarea 
                rows={4}
                required 
                className="w-full bg-transparent border-b border-white/20 text-white font-body text-[1.1rem] py-2 focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                placeholder="How can we help you crush your goals?"
              />
            </div>

            <button 
              type="button" 
              className="mt-4 font-body text-[0.75rem] tracking-[0.2em] uppercase font-bold text-white bg-[var(--color-accent)] py-5 hover:-translate-y-1 transition-transform duration-300 shadow-[0_0_20px_rgba(255,60,0,0.3)] hover:shadow-[0_0_30px_rgba(255,60,0,0.5)]"
            >
              Submit Request
            </button>
          </form>
        </AnimatedSection>

        {/* Info & Map Details */}
        <AnimatedSection delay={0.2} className="flex flex-col gap-12 lg:pl-16 relative">
          <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-white/10 to-transparent hidden lg:block" />
          
          <div className="flex flex-col gap-8">
            <h3 className="font-display text-[2rem] tracking-[0.05em] uppercase text-white border-b border-white/5 pb-4">
              Direct Contact
            </h3>
            
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <span className="font-body text-[0.7rem] uppercase tracking-[0.15em] text-[var(--color-accent)] flex items-center gap-2 mb-1"><MapPin size={14}/> Primary Location</span>
                <p className="font-body text-white/80 text-[1.05rem] leading-relaxed">
                  Om Sai Fitness House<br/>
                  Bhal Gaon, Kalyan, Maharashtra, India
                </p>
                <a href="https://maps.app.goo.gl/eac1ynCtUGZj19d27" target="_blank" rel="noopener noreferrer" className="mt-2 text-[0.75rem] text-[var(--color-accent)] hover:text-white transition-colors underline underline-offset-4 flex items-center gap-2">
                  <Map size={14} /> View Primary Branch on Maps
                </a>
              </div>

              <div className="flex flex-col gap-1 mt-2">
                <span className="font-body text-[0.7rem] uppercase tracking-[0.15em] text-[var(--color-accent)] flex items-center gap-2 mb-1"><MapPin size={14}/> Secondary Location</span>
                <p className="font-body text-white/80 text-[1.05rem] leading-relaxed">
                  Om Sai Fitness Pro<br/>
                  Bhal Gaon, Kalyan, Maharashtra, India
                </p>
                <a href="https://maps.app.goo.gl/bX8RWeSgvuVc7iat6" target="_blank" rel="noopener noreferrer" className="mt-2 text-[0.75rem] text-[var(--color-accent)] hover:text-white transition-colors underline underline-offset-4 flex items-center gap-2">
                  <Map size={14} /> View Pro Branch on Maps
                </a>
              </div>

              <div className="flex flex-col gap-1 mt-4">
                <span className="font-body text-[0.7rem] uppercase tracking-[0.15em] text-[var(--color-accent)] flex items-center gap-2 mb-1"><Phone size={14}/> Phone</span>
                <p className="font-body text-white/80 text-[1.05rem] leading-relaxed">
                  +91 90226 21151
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-body text-[0.7rem] uppercase tracking-[0.15em] text-[var(--color-accent)] flex items-center gap-2 mb-1"><Mail size={14}/> Email Address</span>
                <p className="font-body text-white/80 text-[1.05rem] leading-relaxed">
                  info@omsaifitness.com
                </p>
              </div>
            </div>
          </div>

        </AnimatedSection>
      </section>
    </main>
  );
}
