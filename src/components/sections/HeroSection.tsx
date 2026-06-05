import { motion } from "framer-motion"
import { Calendar, ImageIcon, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroBackground } from "@/components/backgrounds/HeroBackground"
import { AnimatedCounter } from "@/components/shared/AnimatedCounter"
import { STATS } from "@/data/siteData"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative frame around content */}
          <div className="absolute -inset-6 sm:-inset-10 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/30" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold/30" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold/30" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/30" />
          </div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block text-gold text-xs sm:text-sm font-medium tracking-[0.35em] uppercase mb-8"
          >
            Premium Tattoo Artistry
          </motion.span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.08] mb-6">
            Your Story.{" "}
            <span className="text-gradient-gold">Your Ink.</span>
            <br className="hidden sm:block" />
            {" "}Your Legacy.
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Professional custom tattoos in Pune, crafted by experienced artists with passion, precision, and creativity.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <Button size="lg" asChild className="shadow-artistic">
              <a href="#booking">
                <Calendar className="h-5 w-5" />
                Book Consultation
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="backdrop-blur-sm bg-white/40">
              <a href="#gallery">
                <ImageIcon className="h-5 w-5" />
                Explore Gallery
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={"decimals" in stat ? stat.decimals : 0}
                  label={stat.label}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-gold transition-colors"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.a>
    </section>
  )
}
