import { motion } from "framer-motion"

interface SketchPatternsProps {
  variant?: "hero" | "section" | "footer"
  className?: string
}

export function ArtisticSketchPatterns({ variant = "section", className = "" }: SketchPatternsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Decorative line elements */}
      <svg
        className="absolute top-10 left-10 w-32 h-32 opacity-[0.08]"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Geometric lines - top left corner */}
        <path d="M 10 50 Q 50 30, 100 50 T 190 50" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
        <path d="M 20 70 L 180 70" stroke="#1a1a1a" strokeWidth="1" opacity="0.5" />
        <path d="M 15 100 Q 100 80, 185 110" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
        <circle cx="50" cy="120" r="15" stroke="#1a1a1a" strokeWidth="1" fill="none" />
        <circle cx="140" cy="130" r="10" stroke="#1a1a1a" strokeWidth="1" fill="none" />
      </svg>

      {/* Right side sketch elements */}
      <svg
        className="absolute top-32 right-8 w-40 h-40 opacity-[0.07]"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Botanical-inspired design */}
        <path d="M 100 20 Q 110 50, 120 100 Q 130 150, 140 180" stroke="#1a1a1a" strokeWidth="1.5" />
        <path d="M 100 20 Q 90 50, 80 100 Q 70 150, 60 180" stroke="#1a1a1a" strokeWidth="1.5" />
        <path d="M 85 60 Q 70 70, 60 85" stroke="#1a1a1a" strokeWidth="1" />
        <path d="M 115 60 Q 130 70, 140 85" stroke="#1a1a1a" strokeWidth="1" />
        <path d="M 80 110 Q 65 120, 55 135" stroke="#1a1a1a" strokeWidth="1" />
        <path d="M 120 110 Q 135 120, 145 135" stroke="#1a1a1a" strokeWidth="1" />
      </svg>

      {/* Bottom left artistic element */}
      <svg
        className="absolute bottom-20 left-12 w-48 h-48 opacity-[0.06]"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Minimalist linework pattern */}
        <circle cx="100" cy="100" r="80" stroke="#1a1a1a" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" stroke="#1a1a1a" strokeWidth="0.8" />
        <circle cx="100" cy="100" r="40" stroke="#1a1a1a" strokeWidth="0.8" />
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="20"
            x2="100"
            y2="180"
            stroke="#1a1a1a"
            strokeWidth="0.5"
            transform={`rotate(${i * 30} 100 100)`}
            opacity="0.6"
          />
        ))}
      </svg>

      {/* Bottom right corner decoration */}
      <svg
        className="absolute bottom-12 right-16 w-44 h-44 opacity-[0.07]"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Abstract geometric */}
        <path d="M 20 100 L 180 100" stroke="#1a1a1a" strokeWidth="1.5" />
        <path d="M 100 20 L 100 180" stroke="#1a1a1a" strokeWidth="1.5" />
        <polygon points="100,50 140,100 100,150 60,100" stroke="#1a1a1a" strokeWidth="1" fill="none" />
        <path d="M 50 75 Q 100 50, 150 75" stroke="#1a1a1a" strokeWidth="1" />
        <path d="M 50 125 Q 100 150, 150 125" stroke="#1a1a1a" strokeWidth="1" />
      </svg>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/20 opacity-20 pointer-events-none" />
      
      {/* Animated accent elements for hero variant */}
      {variant === "hero" && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/3 w-64 h-64 border border-gold/10 rounded-full"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-gold/8 rounded-full"
            animate={{
              scale: [1.05, 1, 1.05],
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </>
      )}
    </div>
  )
}
