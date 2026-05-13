import { motion } from "framer-motion";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

const rowOne = [
  { caption: "soft mornings" },
  { caption: "golden hours" },
  { caption: "wild laughs" },
  { caption: "quiet magic" },
];

const rowTwo = [
  { caption: "starlit nights" },
  { caption: "little wonders" },
  { caption: "dreamy days" },
  { caption: "forever you" },
];

function CurtainRow({
  photos,
  direction = "left",
  delay = 0,
}: {
  photos: { caption: string }[];
  direction?: "left" | "right";
  delay?: number;
}) {
  const x = direction === "left" ? -120 : 120;
  return (
    <div className="relative overflow-hidden py-6">
      <motion.div
        initial={{ opacity: 0, x }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay }}
        className="flex gap-5 md:gap-8"
      >
        {photos.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, scale: 1.04, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="group relative flex-1 min-w-0"
          >
            <div
              className="bg-cream p-3 pb-10 shadow-elegant"
              style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (0.6 + (i % 3) * 0.4)}deg)` }}
            >
              <PhotoPlaceholder label={p.caption} aspect="aspect-[3/4]" />
              <p className="mt-2 text-center font-script text-base md:text-lg text-foreground/70">
                {p.caption}
              </p>
            </div>
            {/* glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-70"
                 style={{ background: "radial-gradient(circle, oklch(0.85 0.12 25 / 0.6), transparent 70%)" }} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function Timeline() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <p className="font-script text-2xl text-rose">a little gallery of</p>
          <h2 className="mt-3 font-serif text-5xl font-light md:text-6xl">
            Beautiful <span className="italic text-gradient-rose">You</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-foreground/60">
            Every frame, a heartbeat. Every smile, a whole universe.
          </p>
        </motion.div>

        <div className="space-y-4 md:space-y-8">
          <CurtainRow photos={rowOne} direction="left" delay={0} />
          <CurtainRow photos={rowTwo} direction="right" delay={0.2} />
        </div>
      </div>
    </section>
  );
}
