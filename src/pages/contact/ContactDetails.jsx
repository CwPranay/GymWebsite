import React from "react";

const ContactDetails = () => {
  return (
    <section className="bg-white text-neutral-900 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10 text-center">

          <div className="border rounded-2xl p-8">
            <h3 className="text-xl font-heading italic text-[#B11226] mb-3">Call Us</h3>
            <p className="text-neutral-600 mb-4">
              Talk directly with our team
            </p>
            <a
              href="tel:+91XXXXXXXXXX"
              className="text-red-600 font-semibold"
            >
              +91 XXXXXXXXXX
            </a>
          </div>

          <div className="border rounded-2xl p-8">
            <h3 className="text-xl font-heading italic text-[#B11226] mb-3">WhatsApp</h3>
            <p className="text-neutral-600 mb-4">
              Quick queries & timings
            </p>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="text-red-600 font-semibold"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="border rounded-2xl p-8">
            <h3 className="text-xl font-heading italic text-[#B11226] mb-3">Working Hours</h3>
            <p className="text-neutral-600">
              Mon – Sat: 5:30 AM – 10:30 PM<br />
              Sunday: Closed
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactDetails;
