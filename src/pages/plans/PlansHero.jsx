import React from "react";

const PlansHero = () => {
  return (
    <section className="bg-neutral-950 text-white py-28">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="tracking-widest text-sm text-red-500 mb-4">
          MEMBERSHIP PLANS
        </p>
        <h1 className="text-4xl md:text-5xl font-heading italic mb-6">
          Simple Pricing. Real Results.
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Choose a plan that fits your fitness goals. No online registration —
          visit the gym and get started.
        </p>
      </div>
    </section>
  );
};

export default PlansHero;
