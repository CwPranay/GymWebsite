import React from "react";

const points = [
  "Beginners starting their fitness journey",
  "People focused on fat loss and cardio",
  "Strength & muscle-building enthusiasts",
  "Anyone looking for group workouts like Zumba",
  "Members wanting swimming for fitness or recovery",
];

const ServicesFor = () => {
  return (
    <section className="bg-neutral-100 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-heading italic mb-10">
          Our Services Are Perfect For
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {points.map((item, index) => (
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

export default ServicesFor;
