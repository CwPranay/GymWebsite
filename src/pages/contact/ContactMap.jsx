import React from "react";

const ContactMap = () => {
  return (
    <section className="bg-neutral-100 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-10 text-center">
          <h2 className="text-2xl text-[#B11226] md:text-3xl font-heading italic">
            Visit Our Gym
          </h2>
          <p className="text-neutral-600 mt-3">
            Easily accessible location
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="Gym Location"
            src="https://www.google.com/maps?q=OM+SAI+THE+FITNESS+HOUSE+(JERAI+EQUIPMENT)&output=embed"
            className="w-full h-[400px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactMap;
