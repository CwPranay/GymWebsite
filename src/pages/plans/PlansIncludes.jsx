import React from "react";

const items = [
  "Modern gym equipment",
  "Clean & hygienic environment",
  "Guidance from experienced trainers",
  "Flexible morning & evening batches",
  "Affordable personal training options",
];

const PlansIncludes = () => {
  return (
    <section className="bg-neutral-100 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          All Memberships Include
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansIncludes;
