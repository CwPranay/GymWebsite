import React from "react";

const points = [
  "Beginners who want proper guidance",
  "People focused on fat loss",
  "Muscle & strength building goals",
  "Those recovering from injuries",
  "Anyone stuck without progress",
];

const PTFor = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Personal Training Is Best For
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {points.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-6"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PTFor;
