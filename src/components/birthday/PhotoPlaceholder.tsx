interface PhotoPlaceholderProps {
  label?: string;
  className?: string;
  aspect?: string;
}

export function PhotoPlaceholder({
  label = "Add your photo here",
  className = "",
  aspect = "aspect-[4/5]",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-[inherit] ${className}`}
      style={{
        background:
          "linear-gradient(135deg, oklch(0.93 0.04 20), oklch(0.95 0.03 75), oklch(0.91 0.05 305))",
      }}
    >
      <div className="absolute inset-0 opacity-40 mix-blend-overlay"
           style={{ background: "radial-gradient(circle at 30% 30%, white, transparent 60%)" }} />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="1" className="text-foreground/40">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.5-3.5L9 21" />
        </svg>
        <p className="font-script text-base text-foreground/50">{label}</p>
      </div>
    </div>
  );
}
