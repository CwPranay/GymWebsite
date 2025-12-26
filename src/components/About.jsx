import React from "react";
import { motion as Motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-white text-neutral-900 py-28 overflow-hidden">
      <Motion.div
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* LEFT: Content */}
        <div>
          <p className=" tracking-[0.3em] text-sm font-medium mb-5">
            ABOUT US
          </p>

          <h1 className="text-4xl text-[#B11226] md:text-5xl font-heading italic leading-tight">
            More Than a Gym. <br />
            A Place to Train with Purpose.
          </h1>

          <p className="mt-6 text-gray-700 leading-relaxed max-w-xl">
            OM Sai – The Fitness House is built for people who are serious about
            training. We focus on discipline, consistency, and proper guidance —
            not shortcuts, trends, or gimmicks.
          </p>

          {/* Points */}
          <div className="mt-10 space-y-4">
            {[
              "Modern equipment and focused training environment",
              "Structured workouts with attention to form and safety",
              "Supportive atmosphere for beginners and experienced members",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#B11226]" />
                <p className="text-gray-800">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Image (Waves-style) */}
        <div className="relative">
          {/* Image bleed */}
          <div className="relative h-[420px] md:h-[480px] w-full">
            <img
              src="./omsaiEquipment.webp"
              alt="Training equipment at OM Sai Fitness House"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Subtle accent line */}
          <div className="absolute -bottom-8 left-0 h-[2px] w-24 bg-[#B11226]" />
        </div>
      </Motion.div>
    </section>
  );
};

export default AboutSection;
