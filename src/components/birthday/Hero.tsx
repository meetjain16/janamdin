import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Particles } from "./Particles";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* layered gradient backdrop */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0" style={{ background: "var(--gradient-dawn)" }} />
        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
             style={{ background: "radial-gradient(circle, oklch(0.9 0.12 30 / 0.7), transparent 60%)" }} />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl animate-pulse-glow"
             style={{ background: "radial-gradient(circle, oklch(0.85 0.08 305 / 0.6), transparent 60%)" }} />
      </motion.div>

      <Particles count={45} variant="petals" />
      <Particles count={20} variant="stars" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-script text-3xl text-rose md:text-4xl"
        >
          happy birthday, my dearest
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
          className="mt-6 font-serif text-5xl font-light leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
        >
          Today the world celebrates{" "}
          <span className="italic text-gradient-rose">someone truly special.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.4 }}
          className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-foreground/70 md:text-lg"
        >
          Scroll slowly. Every section was made by hand, by heart — a little universe
          stitched together from the moments that make you, <em>you</em>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <a
            href="#message"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm font-medium tracking-wide text-night-foreground transition-transform hover:scale-105"
            style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-glow)" }}
          >
            <span className="relative z-10">Begin the Journey</span>
            <span className="relative z-10 transition-transform group-hover:translate-x-1">✨</span>
            <div className="absolute inset-0 animate-shimmer opacity-50" />
          </a>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="mt-8 text-xs tracking-[0.4em] text-foreground/40 uppercase"
          >
            scroll
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
