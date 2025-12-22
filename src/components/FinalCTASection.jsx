import React from "react";

const FinalCTASection = () => {
  return (
    <section className="bg-red-600 py-28">
      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-red-600 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
            Take the First Step Towards a Fitter You
          </h2>

          <p className="text-white/90 max-w-2xl mx-auto mb-12 text-base md:text-lg">
            Visit our gym to explore facilities, meet our trainers, and choose
            the right plan for your fitness goals. No online registration needed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Primary */}
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center justify-center min-w-[220px] bg-white text-red-600 px-8 py-4 text-base font-semibold rounded-md shadow-md hover:bg-neutral-100 transition"
            >
              Call & Enquire
            </a>

            {/* Secondary */}
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-w-[220px] border-2 border-white text-white px-8 py-4 text-base font-semibold rounded-md hover:bg-white hover:text-red-600 transition"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Sub action */}
          <div className="mt-8">
            <a
              href="/contact"
              className="text-sm font-semibold underline underline-offset-4 text-white/90 hover:text-white"
            >
              Visit the Gym for a Free Trial
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTASection;
