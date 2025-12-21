import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="bg-neutral-50 text-neutral-900 py-28">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-[color:#B11226] tracking-[0.3em] text-sm font-medium mb-5">
            WHY CHOOSE US
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Built for Consistency, <br />
            Not Quick Motivation.
          </h2>
        </div>

        {/* Reasons */}
        <div className="grid md:grid-cols-3 gap-16">
          {/* Reason 1 */}
          <div>
            <span className="text-[color:#B11226] text-sm font-medium">
              01
            </span>
            <h3 className="mt-4 text-xl font-semibold">
              Serious Training Environment
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A focused atmosphere designed for people who want to train
              properly — without distractions, gimmicks, or crowd chaos.
            </p>
          </div>

          {/* Reason 2 */}
          <div>
            <span className="text-[color:#B11226] text-sm font-medium">
              02
            </span>
            <h3 className="mt-4 text-xl font-semibold">
              Guidance That Prioritizes Form
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We emphasize correct technique, injury prevention, and structured
              progression — especially important for long-term results.
            </p>
          </div>

          {/* Reason 3 */}
          <div>
            <span className="text-[color:#B11226] text-sm font-medium">
              03
            </span>
            <h3 className="mt-4 text-xl font-semibold">
              Suitable for All Levels
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether you’re just starting out or already experienced, our
              environment supports steady improvement at your own pace.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
