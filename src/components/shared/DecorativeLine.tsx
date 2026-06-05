import { motion } from "framer-motion"

interface DecorativeLineProps {
  orientation?: "horizontal" | "vertical"
  variant?: "solid" | "dashed" | "dotted" | "wave"
  className?: string
  animated?: boolean
}

export function DecorativeLine({
  orientation = "horizontal",
  variant = "solid",
  className = "",
  animated = false,
}: DecorativeLineProps) {
  return (
    <div className={`relative ${orientation === "horizontal" ? "w-full h-1" : "w-1 h-full"} ${className}`} aria-hidden="true">
      {variant === "solid" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/40 to-transparent"
          animate={
            animated && {
              opacity: [0.3, 0.6, 0.3],
            }
          }
          transition={
            animated
              ? {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : undefined
          }
        />
      )}

      {variant === "dashed" && (
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 4">
          <line
            x1="0"
            y1="2"
            x2="100"
            y2="2"
            stroke="#a89968"
            strokeWidth="1"
            strokeDasharray="8,4"
            opacity="0.4"
          />
        </svg>
      )}

      {variant === "dotted" && (
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 4">
          <line
            x1="0"
            y1="2"
            x2="100"
            y2="2"
            stroke="#a89968"
            strokeWidth="1.5"
            strokeDasharray="3,5"
            opacity="0.3"
          />
        </svg>
      )}

      {variant === "wave" && (
        <motion.svg
          className="w-full h-full text-gold/40"
          preserveAspectRatio="none"
          viewBox="0 0 1200 40"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <motion.path
            d="M 0 20 Q 150 5, 300 20 T 600 20 T 900 20 T 1200 20"
            stroke="currentColor"
            strokeWidth="0.8"
            animate={
              animated && {
                strokeDashoffset: [0, 200],
              }
            }
            transition={
              animated
                ? {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }
                : undefined
            }
          />
        </motion.svg>
      )}
    </div>
  )
}
