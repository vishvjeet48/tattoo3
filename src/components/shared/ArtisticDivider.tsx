import { motion } from "framer-motion"

interface ArtisticDividerProps {
  variant?: "simple" | "decorated" | "ornamental"
  className?: string
}

export function ArtisticDivider({ variant = "simple", className = "" }: ArtisticDividerProps) {
  return (
    <div className={`relative h-12 flex items-center justify-center ${className}`} aria-hidden="true">
      {variant === "simple" && (
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      )}

      {variant === "decorated" && (
        <div className="flex items-center gap-4 w-full">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/20" />
          <svg className="w-6 h-6 text-gold/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
            <path d="M12 4 L12 6 M12 18 L12 20 M4 12 L6 12 M18 12 L20 12" stroke="currentColor" strokeWidth="0.5" />
          </svg>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/20" />
        </div>
      )}

      {variant === "ornamental" && (
        <div className="w-full flex items-center">
          <motion.svg
            className="w-full h-12 text-gold/15"
            viewBox="0 0 1200 50"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ pathLength: [0, 1] }}
            initial={{ pathLength: 0 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          >
            <path
              d="M 0 25 Q 150 5, 300 25 T 600 25 T 900 25 T 1200 25"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
            {[...Array(12)].map((_, i) => (
              <circle key={i} cx={100 + i * 100} cy="25" r="2" fill="currentColor" opacity="0.4" />
            ))}
          </motion.svg>
        </div>
      )}
    </div>
  )
}
