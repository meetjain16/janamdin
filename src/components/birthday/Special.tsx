import { motion } from "framer-motion";

const traits = [
  { title: "Your smile", text: "It rearranges entire rooms. Quietly, instantly, completely.", icon: "✿" },
  { title: "Your kindness", text: "The kind that doesn't announce itself — it just shows up.", icon: "❀" },
  { title: "Your beauty", text: "Not the obvious kind. The kind people remember years later.", icon: "✦" },
  { title: "Your talent", text: "Effortless to watch, hard-earned to live. We see it.", icon: "✺" },
  { title: "Your energy", text: "A whole season. Warm light wrapped in laughter.", icon: "❋" },
  { title: "Your personality", text: "Half magnet, half mystery. Always, always you.", icon: "✿" },
  { title: "Your intelligence", text: "Sharp, soft, curious. The rare kind that listens.", icon: "✦" },
];

export function Special() {
  return (
    <section className="relative overflow-hidden px-6 py-32" style={{ background: "var(--gradient-night)" }}>
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-glow)" }} />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <p className="font-script text-2xl text-gold-soft">a quick reminder</p>
          <h2 className="mt-3 font-serif text-5xl font-light text-cream md:text-6xl">
            Things that make <span className="italic text-gradient-gold">you, you</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {traits.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass-dark group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_0_60px_oklch(0.85_0.12_70_/_0.4)]"
            >
              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                   style={{ background: "linear-gradient(135deg, oklch(0.95 0.15 70 / 0.15), transparent)" }} />
              <span className="text-3xl text-gold">{t.icon}</span>
              <h3 className="mt-4 font-serif text-2xl font-light text-cream">{t.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-cream/70">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
