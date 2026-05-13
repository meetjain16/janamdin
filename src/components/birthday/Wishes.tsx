import { motion } from "framer-motion";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

const wishes = [
  { from: "Mom", note: "From the very first day, you were our whole sky. Happy birthday, my love.", type: "voice" },
  { from: "Best Friend", note: "You're the chaos and the calm. I'd choose you in every lifetime.", type: "video" },
  { from: "Dad", note: "Watching you become you has been the greatest privilege of my life.", type: "voice" },
  { from: "Sister", note: "I'd fight a dragon for you. Probably. Happy birthday, brat.", type: "video" },
];

export function Wishes() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 text-center"
        >
          <p className="font-script text-2xl text-rose">from the people who love you</p>
          <h2 className="mt-3 font-serif text-5xl font-light md:text-6xl">
            Wishes, <span className="italic text-gradient-rose">delivered</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {wishes.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass relative rounded-3xl p-6"
            >
              <div className="flex gap-5">
                <div className="relative h-28 w-24 flex-shrink-0 overflow-hidden rounded-2xl shadow-soft">
                  <PhotoPlaceholder label={w.from} aspect="aspect-[3/4]" />
                  <div className="absolute right-1 top-1 rounded-full bg-night/80 px-2 py-0.5 text-[10px] font-medium tracking-wider text-cream uppercase">
                    {w.type}
                  </div>
                </div>

                <div className="relative flex-1">
                  <div className="rounded-2xl rounded-tl-sm bg-gradient-to-br from-blush/80 to-cream p-4 shadow-soft">
                    <p className="font-light leading-relaxed text-foreground/85">{w.note}</p>
                  </div>
                  <p className="mt-3 font-script text-xl text-rose">— {w.from}</p>
                </div>
              </div>

              {w.type === "voice" && (
                <div className="mt-4 flex items-center gap-2 rounded-full bg-night/5 px-4 py-2">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gold to-rose text-night-foreground">
                    ▶
                  </button>
                  <div className="flex flex-1 items-center gap-1">
                    {Array.from({ length: 24 }).map((_, k) => (
                      <motion.span
                        key={k}
                        animate={{ height: [4, 6 + ((k * 3) % 14), 4] }}
                        transition={{ duration: 1.2 + (k % 5) * 0.2, repeat: Infinity, delay: k * 0.05 }}
                        className="w-0.5 rounded-full bg-rose/60"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-foreground/50">0:42</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
