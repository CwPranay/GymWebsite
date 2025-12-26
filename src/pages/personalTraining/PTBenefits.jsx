import React from "react";

const benefits = [
  "Personalized workout plans",
  "Correct form & injury prevention",
  "Faster strength & fat-loss results",
  "Motivation & accountability",
  "Progress tracking & guidance",
];

const PTBenefits = () => {
  return (
    <section className="bg-white text-neutral-900 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl text-[#B11226] font-heading italic text-center mb-14">
          Why Choose Personal Training?
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 text-center"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PTBenefits;
