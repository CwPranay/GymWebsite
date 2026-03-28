"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  yOffset = 50,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // cinematic smooth ease
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
