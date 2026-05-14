import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FULL_TEXT = `Aaj ke din bahut hi khaas hai aaj bhagwan ne quietly tumhare naam ka ek beautiful ,smart ladki is duniya ko gift main di hai . Tere hone se , sab kuch thoda aur jagmag aur bright aur chamak uth ta hai. Yeh chhota sa page tere liye teri saari chote chote pal jaise jab tu hasti hai, jab tu thodi se nakhre karti hai, apna gam bat-ti hai aur jab bhi apni favourite baatein karti ho, aur sabko apne vash main kar leti ho, ye sab tujho bahut khaas banata hai, to issliye On your birthday, we celebrate every version of you - soft, strong, silly, and magical.`;

export function Message() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [text, setText] = useState("");

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setText(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <section id="message" className="relative flex min-h-screen items-center justify-center px-6 py-32">
      {/* soft glow backdrop */}
      <div className="absolute left-1/2 top-1/2 -z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
           style={{ background: "radial-gradient(circle, oklch(0.92 0.1 30 / 0.7), transparent 60%)" }} />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="glass relative mx-auto max-w-2xl rounded-3xl p-10 md:p-14"
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold to-rose px-6 py-1 text-xs font-medium tracking-[0.3em] text-night-foreground uppercase">
          a little note
        </div>
        <p className="mb-6 text-center font-script text-3xl text-rose md:text-4xl">tere liye, bahut sochne ke baad</p>
        <p className="min-h-[10em] text-center text-lg font-light leading-relaxed text-foreground/85 md:text-xl">
          {text}
          {inView && text.length < FULL_TEXT.length && (
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-rose align-middle" />
          )}
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gold/40" />
          <span className="font-script text-xl text-foreground/60">hamesha tere saath</span>
          <span className="h-px w-12 bg-gold/40" />
        </div>
      </motion.div>
    </section>
  );
}
