import React from "react";

const PTCTA = () => {
  return (
    <section className="bg-red-600 text-white py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Serious About Results?
        </h2>
        <p className="text-white/90 mb-10">
          Visit the gym and talk to our trainers for personal training guidance.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="tel:+91XXXXXXXXXX"
            className="bg-white text-red-600 px-8 py-4 font-semibold rounded-md"
          >
            Call for PT
          </a>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="border border-white px-8 py-4 font-semibold rounded-md"
          >
            WhatsApp Enquiry
          </a>
        </div>
      </div>
    </section>
  );
};

export default PTCTA;
