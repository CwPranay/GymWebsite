import React from "react";

const services = [
  {
    title: "Strength Training",
    desc: "Modern equipment and structured workouts to help you build muscle and strength safely.",
  },
  {
    title: "Fat Loss Training",
    desc: "Workout routines designed to burn calories, improve endurance, and reduce body fat.",
  },
  {
    title: "Cardio Zone",
    desc: "Treadmills, cycling machines, and cardio equipment for heart health and stamina.",
  },
  {
    title: "Zumba & Group Workouts",
    desc: "High-energy group sessions that make fitness fun and engaging.",
  },
  {
    title: "Swimming Pool",
    desc: "Low-impact full-body workouts, recovery sessions, and fitness swimming.",
  },
];

const ServicesList = () => {
  return (
    <section className="bg-white text-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-neutral-200 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-red-600">
                {service.title}
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesList;
