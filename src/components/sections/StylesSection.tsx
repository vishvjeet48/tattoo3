import { motion } from "framer-motion"
import {
  Eye, Moon, Anchor, Flower2, Waves, Pencil, Hexagon, Flame, User, Palette,
  type LucideIcon,
} from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ArtisticBackground } from "@/components/backgrounds/ArtisticBackground"
import { ArtisticSketchBg } from "@/components/backgrounds/ArtisticSketchBg"
import { TATTOO_STYLES } from "@/data/siteData"
import { cn } from "@/lib/utils"

const ICON_MAP: Record<string, LucideIcon> = {
  eye: Eye,
  moon: Moon,
  anchor: Anchor,
  flower2: Flower2,
  waves: Waves,
  pencil: Pencil,
  hexagon: Hexagon,
  flame: Flame,
  user: User,
  palette: Palette,
}

const COL_SPAN: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-2",
}
const ROW_SPAN: Record<number, string> = {
  1: "row-span-1",
  2: "row-span-2",
}

export function StylesSection() {
  return (
    <section id="services" className="relative section-padding overflow-hidden">
      <ArtisticBackground variant="section" />
      <ArtisticSketchBg variant="flash" intensity="light" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          label="Our Expertise"
          title="Featured Tattoo Styles"
          description="From photorealistic portraits to intricate fine line work — our Pune artists master every style with precision."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[180px] md:auto-rows-[200px] gap-3 sm:gap-4">
          {TATTOO_STYLES.map((style, i) => {
            const Icon = ICON_MAP[style.icon] ?? Eye
            const { cols, rows } = style.bento

            return (
              <motion.article
                key={style.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={cn(
                  "group relative rounded-2xl overflow-hidden cursor-default",
                  COL_SPAN[cols] ?? "col-span-1",
                  ROW_SPAN[rows] ?? "row-span-1",
                  style.featured && "ring-1 ring-gold/30"
                )}
              >
                <img
                  src={style.image}
                  alt={`${style.name} tattoo style example`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-opacity duration-500 group-hover:from-black/90" />

                {/* Ink splatter accent on featured card */}
                {style.featured && (
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gold/20 blur-2xl pointer-events-none" />
                )}

                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 group-hover:border-gold/40 transition-colors">
                          <Icon className="h-4 w-4 text-gold" />
                        </div>
                        {style.featured && (
                          <span className="text-[10px] uppercase tracking-widest text-gold/90 font-medium">
                            Signature
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold text-white truncate">
                        {style.name}
                      </h3>
                      <p
                        className={cn(
                          "text-xs sm:text-sm text-white/70 leading-relaxed mt-1 transition-all duration-300",
                          cols === 1 && rows === 1
                            ? "line-clamp-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-16"
                            : "line-clamp-2 sm:line-clamp-none"
                        )}
                      >
                        {style.description}
                      </p>
                    </div>

                    {cols >= 2 && (
                      <span className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-gold/50 shrink-0 self-end pb-1">
                        Pune
                      </span>
                    )}
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-gold/30 transition-colors duration-500 pointer-events-none" />
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
