import { motion } from "framer-motion";

const rowOne = [
  { caption: "sukoon bhara kunch", image: "/src/assets/h1.jpeg" },
  { caption: "soneri sham", image: "/src/assets/h2.jpeg" },
  { caption: "cute si tu", image: "/src/assets/h3.jpeg" },
  { caption: "thoda sa jaadu", image: "/src/assets/h4.jpeg" },
];

const rowTwo = [
  { caption: "dashing andaz", image: "/src/assets/h5.jpeg" },
  { caption: "khoobsurt you", image: "/src/assets/h6.jpeg" },
  { caption: "khwabon wale din", image: "/src/assets/h7.jpeg" },
  { caption: "sirf tum", image: "/src/assets/h8.jpeg" },
];

/** Horizontal landscape frame + curtain drape + hang string */
function CurtainFrame({
  caption,
  index,
  image,
  isMiddle = false,
}: {
  caption: string;
  index: number;
  image: string;
  isMiddle?: boolean;
}) {
  const sway = (index % 2 === 0 ? -1 : 1) * (0.5 + (index % 3) * 0.35);

  return (
    <div
      className="group relative flex min-w-0 flex-1 flex-col items-center"
      style={{ transform: `rotate(${sway}deg)` }}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02, rotate: sway * 1.2 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative flex w-full flex-col items-center"
      >
      {/* Black string from wire to curtain rod pocket */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-10 w-[2px] -translate-x-1/2 rounded-full bg-[#0a0a0a]"
        style={{
          height: isMiddle ? "2.5rem" : "3.5rem",
          background: "linear-gradient(180deg, #0a0a0a 0%, #1c1c1c 55%, #0a0a0a 100%)",
          boxShadow: "0 0 0 0.5px oklch(0.2 0 0 / 0.4)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 z-10 size-2 -translate-x-1/2 rounded-full border-[1.5px] border-[#0a0a0a] bg-[#141414]"
        style={{
          top: isMiddle ? "2.3rem" : "3.3rem",
        }}
        aria-hidden
      />

      <div
        className="relative w-full overflow-hidden shadow-elegant"
        style={{
          marginTop: isMiddle ? "2.75rem" : "2.05rem",
          borderRadius: "1.35rem 1.35rem 42% 42% / 1.35rem 1.35rem 10% 10%",
          background:
            "linear-gradient(95deg, oklch(0.22 0.03 305) 0%, oklch(0.32 0.05 295) 22%, oklch(0.26 0.04 300) 45%, oklch(0.34 0.055 288) 68%, oklch(0.24 0.035 302) 100%)",
          boxShadow:
            "inset 0 12px 28px oklch(0.15 0.02 300 / 0.55), inset 0 -6px 20px oklch(0.12 0.02 280 / 0.4), 0 18px 40px -12px oklch(0.25 0.04 300 / 0.45)",
        }}
      >
        {/* Pleats / fold lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            background:
              "repeating-linear-gradient(90deg, transparent 0px, transparent 11px, oklch(0.08 0 0 / 0.35) 12px, transparent 14px)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light"
          style={{
            background:
              "radial-gradient(ellipse 120% 80% at 50% -20%, oklch(0.55 0.06 25 / 0.25), transparent 55%)",
          }}
        />

        <div className="relative z-[1] px-1 pb-3 pt-2 md:px-2 md:pb-4 md:pt-3">
          <div
            className="overflow-hidden rounded-lg ring-1 ring-black/25"
            style={{
              boxShadow: "inset 0 2px 12px oklch(0.1 0.02 300 / 0.35)",
            }}
          >
            <img
              src={image}
              alt={caption}
              className="h-full w-full object-cover aspect-[3/3]"
              loading="lazy"
            />
          </div>
          <p className="mt-2 text-center font-script text-xs text-cream/85 md:text-sm">
            {caption}
          </p>
        </div>

        {/* Soft hem highlight */}
        <div
          className="pointer-events-none absolute inset-x-4 bottom-0 h-6 rounded-[100%] opacity-25 blur-md"
          style={{ background: "oklch(0.75 0.08 25 / 0.4)" }}
        />
      </div>
      </motion.div>
    </div>
  );
}

function CurtainRow({
  photos,
  direction = "left",
  delay = 0,
}: {
  photos: { caption: string; image: string }[];
  direction?: "left" | "right";
  delay?: number;
}) {
  const x = direction === "left" ? -120 : 120;
  return (
    <div className="relative overflow-x-clip overflow-y-visible py-4 md:py-6">
      <motion.div
        initial={{ opacity: 0, x }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay }}
        className="relative flex gap-4 pt-10 md:gap-7 md:pt-12"
      >
        {/* Curved tension wire with curtain drape */}
        <svg
          className="pointer-events-none absolute left-0 right-0 top-5 z-20 h-12 w-full md:top-6"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="wireGradient" x1="0%" x2="100%">
              <stop offset="0%" stopColor="#050505" />
              <stop offset="15%" stopColor="#1a1a1a" />
              <stop offset="50%" stopColor="#0a0a0a" />
              <stop offset="85%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
            <filter id="wireShadow">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
              <feOffset dx="0" dy="1" />
            </filter>
          </defs>
          {/* Main curved wire */}
          <path
            d="M 0,5 Q 400,38 600,36 Q 800,38 1200,5"
            stroke="url(#wireGradient)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            filter="url(#wireShadow)"
          />
          {/* Subtle secondary curve for depth */}
          <path
            d="M 0,6 Q 400,39 600,37 Q 800,39 1200,6"
            stroke="#1a1a1a"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            opacity="0.3"
          />
        </svg>

        {photos.map((p, i) => (
          <CurtainFrame 
            key={i} 
            caption={p.caption} 
            image={p.image} 
            index={i}
            isMiddle={i === 1 || i === 2}
          />
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
          <p className="font-script text-2xl text-rose">ek pyari si jhalak</p>
          <h2 className="mt-3 font-serif text-5xl font-light md:text-6xl">
           Ati Khoobsurat <span className="italic text-gradient-rose">Tum</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-foreground/60">
            Har frame ek dhadkan, har muskaan apni chhoti si duniya.
          </p>
        </motion.div>

        <div className="space-y-2 md:space-y-6">
          <CurtainRow photos={rowOne} direction="left" delay={0} />
          <CurtainRow photos={rowTwo} direction="right" delay={0.2} />
        </div>
      </div>
    </section>
  );
}
