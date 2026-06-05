import { motion } from "framer-motion"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ArtisticBackground } from "@/components/backgrounds/ArtisticBackground"
import { STUDIO_SPACES } from "@/data/siteData"

export function StudioSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      <ArtisticBackground variant="section" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          label="Our Space"
          title="Studio Environment"
          description="Step into our premium studio — where artistry meets luxury comfort."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STUDIO_SPACES.map((space, i) => (
            <motion.div
              key={space.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-2xl overflow-hidden ${
                i === 0 ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={space.image}
                alt={space.title}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  i === 0 ? "h-full min-h-[400px]" : "h-64"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {space.title}
                </h3>
                <p className="text-sm text-muted-foreground">{space.description}</p>
              </div>
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
