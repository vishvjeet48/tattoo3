import { motion, useScroll, useTransform } from "framer-motion"
import { FloatingParticles } from "./FloatingParticles"

interface ArtisticBackgroundProps {
  variant?: "hero" | "section" | "footer"
  className?: string
}

export function ArtisticBackground({ variant = "section", className = "" }: ArtisticBackgroundProps) {
  const { scrollY } = useScroll()
  const y3 = useTransform(scrollY, [0, 1000], [0, 80])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Subtle gradient light overlays */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/4 rounded-full blur-[150px]" />

      {/* Elegant mandala pattern - lighter aesthetic */}
      <motion.svg
        style={{ y: y3 }}
        className="absolute top-20 right-10 w-64 h-64 opacity-[0.06]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="90" stroke="#a89968" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="70" stroke="#a89968" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="50" stroke="#a89968" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="30" stroke="#a89968" strokeWidth="0.5" />
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="10"
            x2="100"
            y2="190"
            stroke="#a89968"
            strokeWidth="0.3"
            transform={`rotate(${i * 30} 100 100)`}
          />
        ))}
      </motion.svg>

      {/* Dragon outline - minimalist style */}
      <svg className="absolute bottom-20 left-10 w-80 h-80 opacity-[0.05]" viewBox="0 0 200 200" fill="none">
        <path
          d="M30 150 Q50 80 100 60 Q150 40 170 80 Q180 100 160 120 Q140 140 100 130 Q60 120 40 150 Z"
          stroke="#2a2a2a"
          strokeWidth="1"
        />
        <path d="M160 80 Q180 60 190 70 Q195 80 185 90" stroke="#2a2a2a" strokeWidth="0.8" />
        <circle cx="155" cy="75" r="3" fill="#a89968" opacity="0.6" />
      </svg>

      {/* Rose line art */}
      <svg className="absolute top-1/3 left-20 w-48 h-48 opacity-[0.06]" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="15" stroke="#2a2a2a" strokeWidth="0.5" />
        {[...Array(8)].map((_, i) => (
          <ellipse
            key={i}
            cx="50"
            cy="35"
            rx="12"
            ry="20"
            stroke="#2a2a2a"
            strokeWidth="0.4"
            transform={`rotate(${i * 45} 50 50)`}
          />
        ))}
        <path d="M50 65 Q48 80 50 95" stroke="#a89968" strokeWidth="0.5" />
      </svg>

      {/* Minimalist geometric shapes */}
      <svg className="absolute top-40 right-1/4 w-40 h-40 opacity-[0.05]" viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="45" rx="30" ry="35" stroke="#2a2a2a" strokeWidth="0.6" />
        <ellipse cx="38" cy="42" rx="8" ry="10" stroke="#2a2a2a" strokeWidth="0.5" />
        <ellipse cx="62" cy="42" rx="8" ry="10" stroke="#2a2a2a" strokeWidth="0.5" />
        <path d="M42 58 Q50 65 58 58" stroke="#2a2a2a" strokeWidth="0.5" />
        <path d="M40 75 L40 90 M50 72 L50 90 M60 75 L60 90" stroke="#2a2a2a" strokeWidth="0.4" />
      </svg>

      {/* Elegant waves pattern */}
      <svg className="absolute bottom-0 left-0 w-full h-32 opacity-[0.05]" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M0 60 Q150 20 300 60 T600 60 T900 60 T1200 60 V120 H0 Z"
          fill="none"
          stroke="#a89968"
          strokeWidth="1"
        />
        <path
          d="M0 80 Q150 50 300 80 T600 80 T900 80 T1200 80"
          fill="none"
          stroke="#a89968"
          strokeWidth="0.5"
        />
      </svg>

      {/* Artistic ink splatter */}
      <svg className="absolute top-1/2 right-10 w-32 h-32 opacity-[0.06]" viewBox="0 0 100 100">
        {[...Array(12)].map((_, i) => (
          <circle
            key={i}
            cx={50 + Math.cos(i * 0.8) * (15 + i * 2)}
            cy={50 + Math.sin(i * 0.8) * (15 + i * 2)}
            r={2 + Math.random() * 4}
            fill="#2a2a2a"
            stroke="#a89968"
            strokeWidth="0.3"
            opacity="0.7"
          />
        ))}
      </svg>

      {/* Geometric line symbols */}
      <svg className="absolute bottom-1/3 right-20 w-24 h-24 opacity-[0.05]" viewBox="0 0 100 100" fill="none">
        <polygon points="50,5 95,75 5,75" stroke="#a89968" strokeWidth="0.5" />
        <polygon points="50,25 75,65 25,65" stroke="#a89968" strokeWidth="0.3" />
      </svg>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background/20 to-transparent" />

      {variant === "hero" && (
        <>
          {/* Elegant tattoo machine illustration */}
          <motion.svg
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 right-1/3 w-24 h-32 opacity-[0.07]"
            viewBox="0 0 60 80"
            fill="none"
          >
            <rect x="25" y="5" width="10" height="30" rx="2" stroke="#a89968" strokeWidth="0.8" />
            <line x1="30" y1="35" x2="30" y2="55" stroke="#a89968" strokeWidth="0.8" />
            <rect x="20" y="55" width="20" height="8" rx="1" stroke="#a89968" strokeWidth="0.6" />
            <line x1="30" y1="63" x2="30" y2="75" stroke="#a89968" strokeWidth="0.5" />
            <circle cx="30" cy="3" r="3" stroke="#a89968" strokeWidth="0.5" />
          </motion.svg>

          {/* Floating artistic sketches */}
          <motion.svg
            animate={{ rotate: [0, 5, 0], y: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-1/3 w-56 h-56 opacity-[0.05]"
            viewBox="0 0 200 200"
            fill="none"
          >
            <path d="M60 120 Q80 60 120 50 Q160 40 140 100 Q120 160 80 140 Z" stroke="#2a2a2a" strokeWidth="0.6" />
            <path d="M100 50 Q110 30 130 40" stroke="#2a2a2a" strokeWidth="0.4" />
          </motion.svg>
        </>
      )}

      <FloatingParticles count={variant === "hero" ? 40 : 20} />
    </div>
  )
}

