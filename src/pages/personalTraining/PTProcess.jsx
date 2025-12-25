import React from "react";

const steps = [
  {
    step: "Assessment",
    desc: "We understand your goals, body condition, and fitness level.",
  },
  {
    step: "Customized Plan",
    desc: "Workout & training plan tailored specifically for you.",
  },
  {
    step: "Guided Training",
    desc: "One-on-one sessions with constant correction & motivation.",
  },
  {
    step: "Progress Review",
    desc: "Track improvements and adjust training as needed.",
  },
];

const PTProcess = () => {
  return (
    <section className="bg-neutral-100 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          How Personal Training Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-3">
                {item.step}
              </h3>
              <p className="text-neutral-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PTProcess;
