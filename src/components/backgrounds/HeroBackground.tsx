import { motion, useScroll, useTransform } from "framer-motion"
import { FloatingParticles } from "./FloatingParticles"

export function HeroBackground() {
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 800], [0, 120])
  const overlayOpacity = useTransform(scrollY, [0, 400], [1, 0.6])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[8%] -bottom-[8%]">
        <img
          src="/images/hero-bg.png"
          alt=""
          className="w-full h-full object-cover object-center scale-105"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* Soft vignette — keeps center readable while art frames the edges */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,rgba(250,250,248,0.92)_0%,rgba(250,250,248,0.55)_45%,rgba(250,250,248,0.15)_100%)]"
      />

      {/* Ink wash accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20" />

      {/* Subtle animated ink shimmer */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(168,153,104,0.06) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <FloatingParticles count={24} />
    </div>
  )
}
