import React from "react";

const testimonials = [
  {
    name: "Rohit",
    text: "The gym environment is very positive and motivating. Trainers guide properly and the equipment is well maintained.",
  },
  {
    name: "Sneha",
    text: "I joined mainly for fitness and cardio. The pricing is reasonable and the gym never feels overcrowded.",
  },
  {
    name: "Amit",
    text: "Good trainers, clean space, and flexible plans. I feel more consistent with my workouts since joining.",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      className="relative text-white py-28 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg2.webp')" }}
    >
      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Radial vignette (edges) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0) 38%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* Top vignette fade */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0))",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16 text-center md:text-left">
          <p className="tracking-widest text-sm text-red-500 mb-3">
            MEMBER FEEDBACK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Members Say
          </h2>
          <p className="text-gray-300">
            Real experiences from people who train with us every day.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                rounded-2xl p-8
                bg-black/70 backdrop-blur-md
                border border-white/15
              "
            >
              <p className="text-gray-300 leading-relaxed mb-6">
                “{item.text}”
              </p>
              <span className="text-sm font-semibold text-white">
                — {item.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
