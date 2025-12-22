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
    <section className="bg-neutral-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16 text-center md:text-left">
          <p className="tracking-widest text-sm text-red-500 mb-3">
            MEMBER FEEDBACK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Members Say
          </h2>
          <p className="text-gray-400">
            Real experiences from people who train with us every day.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl p-8 bg-neutral-900"
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
