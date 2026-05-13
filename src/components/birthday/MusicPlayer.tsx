import { motion } from "framer-motion";
import { useState } from "react";

export function MusicPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 5, duration: 1 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <div className="glass flex items-center gap-4 rounded-full p-2 pr-5 shadow-elegant">
        <motion.button
          onClick={() => setPlaying((p) => !p)}
          whileTap={{ scale: 0.92 }}
          className="relative h-14 w-14 overflow-hidden rounded-full"
          aria-label={playing ? "Pause" : "Play"}
        >
          {/* vinyl */}
          <motion.div
            animate={{ rotate: playing ? 360 : 0 }}
            transition={{ duration: 6, ease: "linear", repeat: playing ? Infinity : 0 }}
            className="h-full w-full rounded-full"
            style={{
              background:
                "radial-gradient(circle, oklch(0.3 0.02 30) 0 12%, oklch(0.85 0.12 78) 13% 20%, oklch(0.18 0.02 30) 21% 100%)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-night-foreground">
              {playing ? (
                <span className="text-xs">❚❚</span>
              ) : (
                <span className="ml-1 text-xs">▶</span>
              )}
            </div>
          </motion.div>
        </motion.button>
        <div className="hidden flex-col sm:flex">
          <p className="font-script text-base text-rose leading-none">now playing</p>
          <p className="text-xs font-medium text-foreground/70">a song that reminds me of you</p>
        </div>
      </div>
    </motion.div>
  );
}
