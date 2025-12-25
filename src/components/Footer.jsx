import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-gray-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Footer */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* Gym Info */}
          <div>
            <h3 className="text-xl font-heading italic text-white mb-4">
              OM Sai Fitness House
            </h3>
            <p className="text-sm leading-relaxed max-w-sm">
              A complete fitness destination focused on strength, cardio,
              and personal training for real results.
            </p>
          </div>

          {/* Address & Timings */}
          <div>
            <h4 className="text-sm font-heading italic text-white mb-4 tracking-wide">
              VISIT US
            </h4>
            <p className="text-sm leading-relaxed mb-4">
              Shop No. XX, XYZ Road,<br />
              Your Area, Your City,<br />
              Maharashtra, India
            </p>

            <p className="text-sm">
              <span className="text-white font-semibold">Timings:</span><br />
              Mon – Sat: 5:30 AM – 10:30 PM<br />
              Sunday: Closed
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-heading italic text-white mb-4 tracking-wide">
              CONTACT
            </h4>

            <p className="text-sm mb-3">
              📞 <a href="tel:+91XXXXXXXXXX" className="hover:text-white">
                +91 XXXXXXXXXX
              </a>
            </p>

            <p className="text-sm mb-6">
              💬 <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp Us
              </a>
            </p>

            <div className="flex gap-4">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-sm"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-sm"
              >
                Facebook
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} OM Sai Fitness House. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
