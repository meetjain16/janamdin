import { motion } from "framer-motion";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

const items = [
  { caption: "the golden hour", date: "summer", h: "tall" },
  { caption: "that one trip", date: "spring", h: "short" },
  { caption: "midnight laughs", date: "always", h: "medium" },
  { caption: "soft evenings", date: "october", h: "tall" },
  { caption: "your favorite cafe", date: "weekends", h: "short" },
  { caption: "us, again", date: "anytime", h: "medium" },
  { caption: "city lights", date: "december", h: "tall" },
  { caption: "a quiet day", date: "march", h: "short" },
];

const heights: Record<string, string> = {
  tall: "aspect-[3/4]",
  medium: "aspect-square",
  short: "aspect-[4/3]",
};

export function Gallery() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 text-center"
        >
          <p className="font-script text-2xl text-rose">the photo album</p>
          <h2 className="mt-3 font-serif text-5xl font-light md:text-6xl">
            Moments, in <span className="italic text-gradient-rose">colour</span>
          </h2>
        </motion.div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-5">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.1 }}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl shadow-elegant"
            >
              <div className="overflow-hidden">
                <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.7, ease: "easeOut" }}>
                  <PhotoPlaceholder label={it.caption} aspect={heights[it.h]} />
                </motion.div>
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-night/90 to-transparent p-5 text-cream transition-transform duration-500 group-hover:translate-y-0">
                <p className="font-script text-xl">{it.caption}</p>
                <p className="text-xs tracking-[0.2em] text-cream/70 uppercase">{it.date}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
