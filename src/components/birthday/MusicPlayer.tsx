import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const happyBirthdayMelody = [
  { freq: 264, dur: 0.34 },
  { freq: 264, dur: 0.34 },
  { freq: 297, dur: 0.7 },
  { freq: 264, dur: 0.7 },
  { freq: 352, dur: 0.7 },
  { freq: 330, dur: 1.4 },
  { freq: 264, dur: 0.34 },
  { freq: 264, dur: 0.34 },
  { freq: 297, dur: 0.7 },
  { freq: 264, dur: 0.7 },
  { freq: 396, dur: 0.7 },
  { freq: 352, dur: 1.4 },
  { freq: 264, dur: 0.34 },
  { freq: 264, dur: 0.34 },
  { freq: 528, dur: 0.7 },
  { freq: 440, dur: 0.7 },
  { freq: 352, dur: 0.7 },
  { freq: 330, dur: 0.7 },
  { freq: 297, dur: 1.4 },
  { freq: 466, dur: 0.34 },
  { freq: 466, dur: 0.34 },
  { freq: 440, dur: 0.7 },
  { freq: 352, dur: 0.7 },
  { freq: 396, dur: 0.7 },
  { freq: 352, dur: 1.4 },
];

function getAudioContext() {
  return (window.AudioContext || (window as any).webkitAudioContext) as typeof AudioContext | undefined;
}

export function MusicPlayer() {
  const [playing, setPlaying] = useState(true);
  const audioContextRef = useRef<AudioContext | null>(null);
  const loopTimerRef = useRef<number | null>(null);

  const stopSong = () => {
    if (loopTimerRef.current !== null) {
      window.clearTimeout(loopTimerRef.current);
      loopTimerRef.current = null;
    }

    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => undefined);
      audioContextRef.current = null;
    }
  };

  const playSong = () => {
    const AudioCtx = getAudioContext();
    if (!AudioCtx) return;

    const ctx = new AudioCtx();
    const gain = ctx.createGain();
    gain.gain.value = 0.12;
    gain.connect(ctx.destination);
    audioContextRef.current = ctx;

    let time = ctx.currentTime + 0.1;
    happyBirthdayMelody.forEach(({ freq, dur }) => {
      const osc = ctx.createOscillator();
      osc.type = "triangle";
      osc.frequency.value = freq;
      osc.connect(gain);
      osc.start(time);
      osc.stop(time + dur);
      time += dur;
    });

    const songLength = (time - ctx.currentTime) * 1000;
    loopTimerRef.current = window.setTimeout(() => {
      if (playing) {
        stopSong();
        playSong();
      }
    }, songLength + 100);
  };

  useEffect(() => {
    if (playing) {
      playSong();
    } else {
      stopSong();
    }

    return () => {
      stopSong();
    };
  }, [playing]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 5, duration: 1 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <div className="glass flex items-center gap-4 rounded-full p-2 pr-5 ">
        <motion.button
          onClick={() => setPlaying((p) => !p)}
          whileTap={{ scale: 0.92 }}
          className="relative h-1 w-1  "
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
        {/* <div className="hidden flex-col sm:flex">
          <p className="font-script text-base text-rose leading-none">Happy Birthday, jaan</p>
          <p className="text-xs font-medium text-foreground/70">gaana chalane ke liye tap karo</p>
        </div> */}
      </div>
    </motion.div>
  );
}
