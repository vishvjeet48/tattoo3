import { motion } from "framer-motion"
import {
  Award, ShieldCheck, PenTool, Droplets, Sofa, Gift, RefreshCw, HeartPulse,
  type LucideIcon,
} from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ArtisticBackground } from "@/components/backgrounds/ArtisticBackground"
import { ArtisticSketchBg } from "@/components/backgrounds/ArtisticSketchBg"
import { WHY_CHOOSE } from "@/data/siteData"

const ICON_MAP: Record<string, LucideIcon> = {
  award: Award,
  "shield-check": ShieldCheck,
  "pen-tool": PenTool,
  droplets: Droplets,
  sofa: Sofa,
  gift: Gift,
  "refresh-cw": RefreshCw,
  "heart-pulse": HeartPulse,
}

export function WhyChooseSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      <ArtisticBackground variant="section" />
      <ArtisticSketchBg variant="flowing" intensity="light" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          label="Why Ink Signia Pune"
          title="Why Choose Us"
          description="We set the standard for premium tattoo experiences in Koregaon Park — uncompromising quality at every touchpoint."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(160px,auto)]">
          {WHY_CHOOSE.map((feature, i) => {
            const Icon = ICON_MAP[feature.icon] ?? Award
            const isLarge = i === 0 || i === 3

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className={`group glass rounded-xl p-6 transition-all duration-300 hover:border-gold/30 ${
                  isLarge ? "sm:col-span-2" : ""
                }`}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors"
                >
                  <Icon className="h-6 w-6 text-gold" />
                </motion.div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
