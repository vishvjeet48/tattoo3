import { motion } from "framer-motion"

interface ArtisticSketchBgProps {
  variant?: "swirl" | "flash" | "ornament" | "flowing"
  className?: string
  intensity?: "light" | "medium" | "heavy"
}

export function ArtisticSketchBg({
  variant = "swirl",
  className = "",
  intensity = "light",
}: ArtisticSketchBgProps) {
  const opacityMap = {
    light: 0.08,
    medium: 0.12,
    heavy: 0.18,
  }

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
      {/* Swirling ink design */}
      {variant === "swirl" && (
        <motion.svg
          className="absolute w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          animate={{ rotate: [0, 1, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Main spiral */}
          <path
            d="M 600 400 Q 650 350, 700 400 Q 750 450, 700 500 Q 650 550, 600 500 Q 550 450, 600 400"
            stroke="#2a2a2a"
            strokeWidth="2"
            fill="none"
            opacity={opacityMap[intensity]}
          />
          <path
            d="M 600 400 Q 700 300, 800 400 Q 900 500, 800 600 Q 700 700, 600 600 Q 500 500, 600 400"
            stroke="#2a2a2a"
            strokeWidth="1.5"
            fill="none"
            opacity={opacityMap[intensity] * 0.7}
          />
          <path
            d="M 600 400 Q 750 250, 900 350 Q 1000 450, 850 650 Q 700 800, 550 700 Q 400 600, 400 400 Q 400 200, 600 400"
            stroke="#2a2a2a"
            strokeWidth="1"
            fill="none"
            opacity={opacityMap[intensity] * 0.5}
          />

          {/* Decorative circles */}
          {[...Array(12)].map((_, i) => (
            <circle
              key={i}
              cx={600 + Math.cos((i / 12) * Math.PI * 2) * 250}
              cy={400 + Math.sin((i / 12) * Math.PI * 2) * 200}
              r={3}
              fill="#2a2a2a"
              opacity={opacityMap[intensity] * 0.6}
            />
          ))}
        </motion.svg>
      )}

      {/* Flash art scattered design */}
      {variant === "flash" && (
        <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          {/* Rose */}
          <g opacity={opacityMap[intensity]} transform="translate(100, 150)">
            <circle cx="20" cy="20" r="8" stroke="#2a2a2a" strokeWidth="0.8" fill="none" />
            {[...Array(6)].map((_, i) => (
              <ellipse
                key={i}
                cx="20"
                cy="10"
                rx="6"
                ry="12"
                stroke="#2a2a2a"
                strokeWidth="0.6"
                fill="none"
                transform={`rotate(${i * 60} 20 20)`}
              />
            ))}
            <path d="M 20 32 Q 18 45 20 55" stroke="#a89968" strokeWidth="0.5" fill="none" />
          </g>

          {/* Knife */}
          <g opacity={opacityMap[intensity]} transform="translate(950, 200)">
            <rect x="5" y="5" width="8" height="35" rx="1" stroke="#2a2a2a" strokeWidth="0.8" fill="none" />
            <path d="M 9 40 L 5 50 L 13 50 Z" stroke="#2a2a2a" strokeWidth="0.7" fill="none" />
            <circle cx="9" cy="2" r="2" stroke="#2a2a2a" strokeWidth="0.6" fill="none" />
          </g>

          {/* Snake */}
          <g opacity={opacityMap[intensity]} transform="translate(800, 500)">
            <path d="M 10 5 Q 15 10, 20 5 Q 25 10, 30 5 Q 35 10, 40 15" stroke="#2a2a2a" strokeWidth="0.8" fill="none" />
            <circle cx="42" cy="15" r="2" stroke="#2a2a2a" strokeWidth="0.6" fill="none" />
            <path d="M 43 12 L 45 10 L 44 14" stroke="#2a2a2a" strokeWidth="0.5" fill="none" />
          </g>

          {/* Diamond */}
          <g opacity={opacityMap[intensity]} transform="translate(150, 600)">
            <polygon points="15,5 25,15 15,25 5,15" stroke="#2a2a2a" strokeWidth="0.8" fill="none" />
            <line x1="15" y1="10" x2="15" y2="20" stroke="#2a2a2a" strokeWidth="0.5" opacity="0.5" />
          </g>

          {/* Angel wings */}
          <g opacity={opacityMap[intensity]} transform="translate(500, 100)">
            <path d="M 15 10 Q 10 5, 5 8 Q 8 15, 15 12 Z" stroke="#2a2a2a" strokeWidth="0.6" fill="none" />
            <path d="M 15 10 Q 20 5, 25 8 Q 22 15, 15 12 Z" stroke="#2a2a2a" strokeWidth="0.6" fill="none" />
            <line x1="15" y1="12" x2="15" y2="20" stroke="#2a2a2a" strokeWidth="0.5" />
          </g>

          {/* Butterfly */}
          <g opacity={opacityMap[intensity]} transform="translate(300, 700)">
            <ellipse cx="15" cy="12" rx="5" ry="8" stroke="#2a2a2a" strokeWidth="0.6" fill="none" />
            <ellipse cx="15" cy="28" rx="5" ry="8" stroke="#2a2a2a" strokeWidth="0.6" fill="none" />
            <ellipse cx="25" cy="12" rx="5" ry="8" stroke="#2a2a2a" strokeWidth="0.6" fill="none" />
            <ellipse cx="25" cy="28" rx="5" ry="8" stroke="#2a2a2a" strokeWidth="0.6" fill="none" />
            <line x1="20" y1="5" x2="20" y2="35" stroke="#2a2a2a" strokeWidth="0.5" />
          </g>
        </svg>
      )}

      {/* Ornamental flowing design */}
      {variant === "ornament" && (
        <motion.svg
          className="absolute w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          animate={{ pathOffset: [0, 100] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {/* Ornate flowing lines */}
          <path
            d="M 0 100 Q 300 50, 600 100 T 1200 100"
            stroke="#2a2a2a"
            strokeWidth="1"
            fill="none"
            opacity={opacityMap[intensity]}
          />
          <path
            d="M 0 200 Q 200 150, 400 200 T 800 200 T 1200 200"
            stroke="#2a2a2a"
            strokeWidth="0.8"
            fill="none"
            opacity={opacityMap[intensity] * 0.7}
          />

          {/* Decorative dots along path */}
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={(i / 20) * 1200}
              cy={100 + Math.sin((i / 20) * Math.PI * 2) * 30}
              r="1.5"
              fill="#2a2a2a"
              opacity={opacityMap[intensity] * 0.6}
            />
          ))}

          {/* Flourishes */}
          {[...Array(5)].map((_, i) => (
            <path
              key={i}
              d={`M ${200 + i * 200} 400 Q ${220 + i * 200} 380, ${240 + i * 200} 400 Q ${220 + i * 200} 420, ${200 + i * 200} 400`}
              stroke="#2a2a2a"
              strokeWidth="0.6"
              fill="none"
              opacity={opacityMap[intensity] * 0.5}
            />
          ))}
        </motion.svg>
      )}

      {/* Flowing artistic design */}
      {variant === "flowing" && (
        <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          {/* Main flowing organic shapes */}
          <path
            d="M 0 300 Q 300 250, 600 300 Q 900 350, 1200 300 L 1200 500 Q 900 550, 600 500 Q 300 450, 0 500 Z"
            stroke="#2a2a2a"
            strokeWidth="1"
            fill="none"
            opacity={opacityMap[intensity]}
          />

          {/* Smaller flowing lines */}
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M 0 ${200 + i * 60} Q 300 ${180 + i * 60}, 600 ${200 + i * 60} T 1200 ${200 + i * 60}`}
              stroke="#2a2a2a"
              strokeWidth="0.5"
              fill="none"
              opacity={opacityMap[intensity] * (0.7 - i * 0.05)}
            />
          ))}

          {/* Organic circles */}
          {[...Array(15)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1200}
              cy={Math.random() * 800}
              r={2 + Math.random() * 3}
              stroke="#2a2a2a"
              strokeWidth="0.6"
              fill="none"
              opacity={opacityMap[intensity] * 0.4}
            />
          ))}
        </svg>
      )}
    </div>
  )
}
