import React from "react";

const plans = [
  {
    title: "Normal Gym",
    desc: "Ideal for strength training and general fitness.",
    prices: [
      { label: "1 Month", value: "₹700" },
      { label: "3 Months", value: "₹1800" },
    ],
    cta: "Join Normal Gym",
  },
  {
    title: "Gym + Cardio",
    desc: "Includes treadmill, cycling, and cardio workouts.",
    prices: [
      { label: "1 Month", value: "₹1100" },
    ],
    highlight: true,
    cta: "Join with Cardio",
  },
  {
    title: "Personal Training",
    desc: "1-on-1 coaching for faster and focused results.",
    prices: [
      { label: "Custom Plan", value: "Visit Gym" },
    ],
    cta: "Book Free Session",
  },
];

const PlansSection = () => {
  return (
    <section className="bg-neutral-50 text-neutral-900 py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-20 text-center md:text-left">
          <p className="tracking-widest text-sm text-neutral-500 mb-3">
            MEMBERSHIP PLANS
          </p>
          <h2 className="text-4xl md:text-5xl font-heading italic mb-4">
            Clear Pricing. Simple Choices.
          </h2>
          <p className="text-neutral-600">
            Choose between normal gym access or gym with cardio based on your
            fitness goals.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-10 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                flex flex-col justify-between
                rounded-2xl border bg-white p-8
                ${
                  plan.highlight
                    ? "border-red-600 shadow-xl"
                    : "border-neutral-200"
                }
              `}
            >
              {/* Top Content */}
              <div>
                {plan.highlight && (
                  <span className="inline-block mb-4 text-xs font-semibold tracking-wide text-red-600">
                    MOST POPULAR
                  </span>
                )}

                <h3 className="text-xl font-heading italic mb-2">
                  {plan.title}
                </h3>

                <p className="text-neutral-600 mb-8">
                  {plan.desc}
                </p>

                {/* Prices */}
                <div className="space-y-4 mb-10">
                  {plan.prices.map((price, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-b border-neutral-100 pb-2"
                    >
                      <span className="text-sm text-neutral-500">
                        {price.label}
                      </span>
                      <span className="text-lg font-bold">
                        {price.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href="/plans"
                className={`
                  w-full text-center py-3 rounded-md font-semibold transition
                  ${
                    plan.highlight
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "border border-neutral-300 hover:border-red-600"
                  }
                `}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlansSection;
