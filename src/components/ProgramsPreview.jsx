import React, { useEffect, useRef, useState } from "react";

const programs = [
  {
    title: "Strength Training",
    desc: "Progressive workouts focused on building real strength.",
    link: "/services",
  },
  {
    title: "Fat Loss",
    desc: "Structured training to burn fat and improve endurance.",
    link: "/services",
  },
  {
    title: "Zumba Fitness",
    desc: "High-energy group sessions that make cardio enjoyable.",
    link: "/services",
  },
  {
    title: "Personal Training",
    desc: "1-on-1 coaching for serious transformation.",
    link: "/personal-training",
  },
  {
    title: "Swimming Pool",
    desc: "Low-impact full-body workouts and recovery sessions.",
    link: "/services",
  },
];

const ProgramsPreview = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const directionRef = useRef(1);
  const timeoutRef = useRef(null);

  const [bgLoaded, setBgLoaded] = useState(false);

  /* 🔥 Lazy-load background trigger */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBgLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* 🔁 Auto scroll (DESKTOP ONLY) */
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const container = scrollRef.current;
    if (!container) return;

    const scrollStep = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 0) return;

      const target = directionRef.current === 1 ? maxScroll : 0;
      container.scrollTo({ left: target, behavior: "smooth" });
      directionRef.current *= -1;

      timeoutRef.current = setTimeout(scrollStep, 4500);
    };

    timeoutRef.current = setTimeout(scrollStep, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative text-white py-28 overflow-hidden bg-neutral-950"
    >
      {/* Background image layer (fade-in) */}
      <div
        className={`
          absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out
          ${bgLoaded ? "opacity-100" : "opacity-0"}
        `}
        style={{ backgroundImage: "url('/bg1.webp')" }}
      />

      {/* Dark overlay (always present) */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="text-red-500 tracking-widest text-sm mb-3">
            OUR OFFERINGS
          </p>
          <h2 className="text-4xl md:text-5xl font-heading italic ">
            Programs Designed to 
             Fit Every Goal
          </h2>
          <p className="text-gray-300 mt-4">
            Explore our training programs and facilities inside our gym.
          </p>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar"
        >
          {programs.map((program, index) => (
            <div
              key={index}
              className="
                min-w-[380px]
                rounded-2xl p-8
                bg-black/70 backdrop-blur-sm
                border border-white/15
                hover:border-red-500/50 transition
              "
            >
              <h3 className="text-xl font-heading italic mb-3">
                {program.title}
              </h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {program.desc}
              </p>
              <a
                href={program.link}
                className="text-sm font-semibold text-red-400 hover:text-red-300"
              >
                View Details →
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="/services"
            className="inline-block text-sm font-semibold text-white border border-white/30 px-6 py-3 rounded-full hover:border-red-500 transition"
          >
            Explore All Programs
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProgramsPreview;
