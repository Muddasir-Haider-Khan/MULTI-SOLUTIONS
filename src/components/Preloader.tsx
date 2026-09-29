"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If reduced motion is requested, close immediately
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-brand-dark overflow-hidden pointer-events-auto"
        >
          {/* Subtle background architectural line */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center px-6">
            {/* Logo image reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-64 md:w-80 h-28 md:h-36 mb-6"
            >
              <Image
                src="/logo.png"
                alt="MS Multi Solution Logo"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </motion.div>

            {/* Red progress line animation */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative mb-4">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
                className="w-full h-full bg-brand-red"
              />
            </div>

            {/* Tagline reveal */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-mono text-xs uppercase tracking-[0.25em] text-brand-muted"
            >
              Guarantor of Your Hopes
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
