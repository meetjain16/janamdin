import { useMemo } from "react";
import { motion } from "framer-motion";

interface ParticlesProps {
  count?: number;
  variant?: "stars" | "petals" | "embers";
  className?: string;
}

export function Particles({ count = 40, variant = "stars", className = "" }: ParticlesProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        delay: Math.random() * 5,
        duration: 6 + Math.random() * 8,
        drift: (Math.random() - 0.5) * 80,
      })),
    [count],
  );

  const colors = {
    stars: "bg-gold/80 shadow-[0_0_12px_rgba(255,215,150,0.9)]",
    petals: "bg-rose/70 shadow-[0_0_10px_rgba(255,180,180,0.7)]",
    embers: "bg-accent/80 shadow-[0_0_14px_rgba(255,200,120,0.9)]",
  };

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className={`absolute rounded-full ${colors[variant]}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -120, 0],
            x: [0, p.drift, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
