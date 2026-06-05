import { motion } from "framer-motion"

interface ArtisticCornerProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  size?: "sm" | "md" | "lg"
  animated?: boolean
}

const sizeMap = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
}

const positionMap = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
}

export function ArtisticCorner({
  position,
  size = "md",
  animated = true,
}: ArtisticCornerProps) {
  const isTopLeft = position === "top-left"
  const isTopRight = position === "top-right"
  const isBottomLeft = position === "bottom-left"
  const isBottomRight = position === "bottom-right"

  const Svg = () => (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full text-gold/30"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* Corner lines */}
      {isTopLeft && (
        <>
          <path d="M 10 90 L 10 10 L 90 10" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="10" cy="10" r="3" fill="currentColor" opacity="0.6" />
          <path d="M 20 20 L 20 30 M 20 20 L 30 20" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        </>
      )}

      {isTopRight && (
        <>
          <path d="M 90 90 L 90 10 L 10 10" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="90" cy="10" r="3" fill="currentColor" opacity="0.6" />
          <path d="M 80 20 L 80 30 M 80 20 L 70 20" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        </>
      )}

      {isBottomLeft && (
        <>
          <path d="M 10 10 L 10 90 L 90 90" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="10" cy="90" r="3" fill="currentColor" opacity="0.6" />
          <path d="M 20 80 L 20 70 M 20 80 L 30 80" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        </>
      )}

      {isBottomRight && (
        <>
          <path d="M 90 10 L 90 90 L 10 90" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="90" cy="90" r="3" fill="currentColor" opacity="0.6" />
          <path d="M 80 80 L 80 70 M 80 80 L 70 80" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        </>
      )}

      {/* Decorative dots */}
      {[...Array(3)].map((_, i) => (
        <circle
          key={i}
          cx={isTopLeft || isBottomLeft ? 15 + i * 10 : 85 - i * 10}
          cy={isTopLeft || isTopRight ? 20 : 80}
          r="1.5"
          fill="currentColor"
          opacity="0.3"
        />
      ))}
    </svg>
  )

  return (
    <motion.div
      className={`absolute ${positionMap[position]} ${sizeMap[size]} pointer-events-none`}
      animate={
        animated && {
          opacity: [0.3, 0.5, 0.3],
        }
      }
      transition={
        animated
          ? {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : undefined
      }
      aria-hidden="true"
    >
      <Svg />
    </motion.div>
  )
}
