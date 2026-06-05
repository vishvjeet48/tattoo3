import { motion } from "framer-motion"
import {
  MessageCircle, PenTool, CheckCircle, Sparkles, HeartPulse,
  type LucideIcon,
} from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ArtisticBackground } from "@/components/backgrounds/ArtisticBackground"
import { ArtisticSketchBg } from "@/components/backgrounds/ArtisticSketchBg"
import { PROCESS_STEPS } from "@/data/siteData"

const ICON_MAP: Record<string, LucideIcon> = {
  "message-circle": MessageCircle,
  "pen-tool": PenTool,
  "check-circle": CheckCircle,
  sparkles: Sparkles,
  "heart-pulse": HeartPulse,
}

export function ProcessSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      <ArtisticBackground variant="section" />
      <ArtisticSketchBg variant="flowing" intensity="light" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          label="How It Works"
          title="The Tattoo Process"
          description="From first consultation to final aftercare, we guide you through every step of your tattoo journey."
        />

        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon] ?? MessageCircle
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative mx-auto w-16 h-16 rounded-full glass-gold flex items-center justify-center mb-6 group-hover:glow-gold transition-shadow duration-300"
                  >
                    <Icon className="h-7 w-7 text-gold" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </motion.div>

                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
