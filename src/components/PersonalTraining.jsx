import React from "react";

const PersonalTraining = () => {
  return (
    <section className="bg-white text-neutral-900 py-24">
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div className="max-w-xl mx-auto text-center md:text-left">
          <p className="tracking-widest text-sm mb-4 text-neutral-500">
            PERSONAL TRAINING
          </p>

          <h2 className="text-4xl md:text-5xl font-heading italic text-red-600 mb-6 leading-tight">
            Expert Coaching <br /> Built Around You
          </h2>

          <p className="text-neutral-600 mb-8">
            Your body and fitness goals are unique. Our personal training
            programs are designed to help you train safely, stay consistent,
            and achieve real results with proper guidance.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/personal-training"
              className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-3 font-semibold rounded-md hover:bg-red-700 transition"
            >
              Book a Free Session
            </a>

            <a
              href="/personal-training"
              className="inline-flex items-center text-sm font-semibold text-neutral-800 underline underline-offset-4"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center md:justify-end">
          <div className="max-w-md transform scale-90">
            <img
              src="/PT.webp"
              alt="Personal training session"
              className="w-full object-contain rounded-2xl shadow-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default PersonalTraining;
