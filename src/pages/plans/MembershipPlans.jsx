import React from "react";

const plans = [
  {
    title: "1 Month – Gym",
    price: "₹700",
    features: [
      "Full gym access",
      "Strength & weight training",
      "Flexible workout timings",
    ],
  },
  {
    title: "3 Months – Gym",
    price: "₹1800",
    features: [
      "Full gym access",
      "Better value plan",
      "Consistency-focused training",
    ],
    highlight: true,
  },
  {
    title: "1 Month – Gym + Cardio",
    price: "₹1100",
    features: [
      "Gym + cardio access",
      "Treadmill, cycling & more",
      "Ideal for fat loss",
    ],
  },
];

const MembershipPlans = () => {
  return (
    <section className="bg-white text-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading italic mb-4">
            Membership Options
          </h2>
          <p className="text-neutral-600">
            Transparent pricing with no hidden charges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                rounded-2xl p-8 border
                ${plan.highlight
                  ? "border-red-600 shadow-xl scale-105"
                  : "border-neutral-200"}
              `}
            >
              <h3 className="text-xl font-heading italic mb-4">
                {plan.title}
              </h3>

              <p className="text-4xl font-extrabold text-red-600 mb-6">
                {plan.price}
              </p>

              <ul className="space-y-3 text-sm text-neutral-700 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <p className="text-sm text-neutral-500">
                Visit the gym to enroll
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MembershipPlans;
