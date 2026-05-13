import { motion } from "framer-motion";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

const moments = [
  { year: "the beginning", title: "A tiny universe arrived", text: "Soft hands, a softer heart. The world had no idea what was coming." },
  { year: "childhood", title: "Endless summers", text: "Scraped knees, ice-cream evenings, secrets whispered to the stars." },
  { year: "growing up", title: "Becoming you", text: "Books, late-night calls, first dreams written in glittery notebooks." },
  { year: "the bright years", title: "Finding your light", text: "You discovered what makes your soul move — and the world noticed." },
  { year: "today", title: "Right here, right now", text: "Beautiful, brilliant, becoming. And we get a front-row seat." },
];

export function Timeline() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <p className="font-script text-2xl text-rose">our little time machine</p>
          <h2 className="mt-3 font-serif text-5xl font-light md:text-6xl">
            A timeline of <span className="italic text-gradient-rose">you</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* center line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-24">
            {moments.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`relative flex flex-col items-start gap-8 md:flex-row md:items-center ${isLeft ? "" : "md:flex-row-reverse"}`}
                >
                  {/* dot */}
                  <span className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_20px_rgba(255,200,120,0.9)] md:left-1/2" />

                  {/* photo polaroid */}
                  <div className="ml-10 w-full max-w-sm md:ml-0 md:w-1/2 md:px-12">
                    <motion.div
                      whileHover={{ rotate: isLeft ? -2 : 2, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="bg-cream p-3 pb-12 shadow-elegant"
                      style={{ transform: `rotate(${isLeft ? -1.5 : 1.5}deg)` }}
                    >
                      <PhotoPlaceholder label={`Add a "${m.year}" photo`} />
                      <p className="mt-3 text-center font-script text-xl text-foreground/70">{m.year}</p>
                    </motion.div>
                  </div>

                  {/* text */}
                  <div className={`ml-10 w-full md:ml-0 md:w-1/2 md:px-12 ${isLeft ? "md:text-left" : "md:text-right"}`}>
                    <p className="text-xs font-medium tracking-[0.3em] text-gold uppercase">{m.year}</p>
                    <h3 className="mt-3 font-serif text-3xl font-light md:text-4xl">{m.title}</h3>
                    <p className="mt-4 text-base font-light leading-relaxed text-foreground/70">{m.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
