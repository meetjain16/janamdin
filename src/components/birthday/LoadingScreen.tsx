import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Particles } from "./Particles";

export function LoadingScreen({ name = "Pyari" }: { name?: string }) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 4200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: "var(--gradient-night)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Particles count={60} variant="stars" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />

          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          >
            <p className="font-script text-2xl text-gold-soft md:text-3xl">for</p>
            <motion.h1
              className="mt-2 font-serif text-6xl font-light tracking-wide text-cream md:text-8xl"
              initial={{ letterSpacing: "0.5em", opacity: 0 }}
              animate={{ letterSpacing: "0.05em", opacity: 1 }}
              transition={{ duration: 2.4, ease: "easeOut" }}
            >
              {name}
            </motion.h1>
            <motion.p
              className="mt-6 text-sm font-light tracking-[0.4em] text-gold-soft/80 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 1.4 }}
            >
              A little universe, made with case - just for you
            </motion.p>

            <motion.div
              className="mx-auto mt-10 h-px w-48 overflow-hidden bg-gold/20"
              initial={{ width: 0 }}
              animate={{ width: 192 }}
              transition={{ delay: 0.4, duration: 3 }}
            >
              <div className="h-full w-1/3 animate-shimmer" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
