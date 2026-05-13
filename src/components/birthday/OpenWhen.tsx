import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const letters = [
  {
    key: "sad",
    label: "Open when you're sad",
    icon: "☁",
    body: "Hey. Breathe. This feeling is a visitor — not a tenant. You've survived every single bad day so far. That's a 100% record. Cry if you need to. Then come back. The world still wants you in it.",
  },
  {
    key: "stressed",
    label: "Open when you're stressed",
    icon: "✿",
    body: "Close your eyes. One thing at a time. You don't have to carry everything today. The to-do list will still be there tomorrow — and so will you, stronger, softer, ready.",
  },
  {
    key: "miss",
    label: "Open when you miss me",
    icon: "❀",
    body: "I'm thinking about you too. Right now. Even as you're reading this. Distance is just a technicality — the thread between us doesn't break. I'm a call away. Always.",
  },
  {
    key: "motivation",
    label: "Open when you need motivation",
    icon: "✦",
    body: "Look at everything you've already done. The version of you from five years ago would be in awe. Keep going. The world is quietly rooting for you — and so am I, loudly.",
  },
];

export function OpenWhen() {
  const [open, setOpen] = useState<string | null>(null);
  const active = letters.find((l) => l.key === open);

  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-14 text-center"
        >
          <p className="font-script text-2xl text-rose">little envelopes</p>
          <h2 className="mt-3 font-serif text-5xl font-light md:text-6xl">
            Open <span className="italic text-gradient-rose">when…</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-foreground/60">
            For the days when words feel heavy. Tap one — I'll be there.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {letters.map((l, i) => (
            <motion.button
              key={l.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -6, rotate: -1 }}
              onClick={() => setOpen(l.key)}
              className="group relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-cream to-blush p-6 text-left shadow-elegant transition-all hover:shadow-[0_20px_60px_-15px_oklch(0.7_0.15_20_/_0.4)]"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/30 blur-2xl transition-opacity group-hover:opacity-80" />
              <span className="text-3xl text-gold">{l.icon}</span>
              <p className="mt-6 font-serif text-xl font-light">{l.label}</p>
              <span className="mt-4 inline-block text-xs font-medium tracking-[0.3em] text-rose uppercase">
                tap to open →
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-night/70 px-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg overflow-hidden rounded-3xl bg-gradient-to-br from-cream via-blush to-cream p-10 shadow-elegant"
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-6xl text-gold">{active.icon}</div>
              <p className="mt-2 text-center font-script text-2xl text-rose">{active.label}</p>
              <div className="my-6 mx-auto h-px w-24 bg-gold/40" />
              <p className="text-center text-lg font-light leading-relaxed text-foreground/85">
                {active.body}
              </p>
              <p className="mt-8 text-center font-script text-xl text-foreground/60">— always yours</p>
              <button
                onClick={() => setOpen(null)}
                className="mx-auto mt-6 block text-xs tracking-[0.3em] text-foreground/40 uppercase hover:text-rose"
              >
                close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
