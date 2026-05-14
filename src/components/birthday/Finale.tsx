import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import { Particles } from "./Particles";

export function Finale() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30%" });

  const confetti = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 4,
        rotate: Math.random() * 360,
        color: ["bg-rose", "bg-gold", "bg-lavender", "bg-blush"][i % 4],
      })),
    [],
  );

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32"
             style={{ background: "var(--gradient-night)" }}>
      <Particles count={50} variant="stars" />
      <Particles count={30} variant="embers" />

      {/* confetti */}
      {inView &&
        confetti.map((c) => (
          <motion.span
            key={c.id}
            initial={{ y: -50, opacity: 0, rotate: c.rotate }}
            animate={{ y: "110vh", opacity: [0, 1, 1, 0], rotate: c.rotate + 720 }}
            transition={{ duration: c.duration, delay: c.delay, ease: "easeIn", repeat: Infinity, repeatDelay: 3 }}
            className={`absolute top-0 h-2 w-2 ${c.color}`}
            style={{ left: `${c.x}%` }}
          />
        ))}

      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="font-script text-3xl text-gold-soft md:text-4xl"
        >
          and finally…
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          animate={inView ? { opacity: 1, letterSpacing: "0.02em" } : {}}
          transition={{ delay: 0.8, duration: 2.4, ease: "easeOut" }}
          className="mt-6 font-serif text-6xl font-light leading-none text-cream md:text-9xl"
        >
          Happy <span className="italic text-gradient-gold">Birthday</span>
        </motion.h2>

        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 2, type: "spring", stiffness: 120 }}
          className="mt-6 text-5xl"
        >
          ❤
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 2.6, duration: 1.6 }}
          className="mx-auto mt-10 max-w-xl text-lg font-light leading-relaxed text-cream/80 md:text-xl"
        >
          Thank you for making life feel lighter, warmer, and more beautiful.
          <br />
          Tumhari hansi, tumhari softness, aur tum hone ki quiet magic ke liye.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 3.4, duration: 1.4 }}
          className="mt-12 font-script text-2xl text-gold-soft"
        >
          This year is yours — tumhari roshni, tumhare sapne, tumhari poori kahaani.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 4, duration: 1.4 }}
          className="mt-16 flex items-center justify-center gap-4 text-cream/40"
        >
          <span className="h-px w-16 bg-gold/40" />
          <span className="text-xs tracking-[0.4em] uppercase">made with pure dil se</span>
          <span className="h-px w-16 bg-gold/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
