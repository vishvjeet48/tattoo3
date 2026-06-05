import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ZoomIn } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ArtisticBackground } from "@/components/backgrounds/ArtisticBackground"
import { ArtisticSketchBg } from "@/components/backgrounds/ArtisticSketchBg"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "@/data/siteData"
import { cn } from "@/lib/utils"

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [lightboxItem, setLightboxItem] = useState<typeof GALLERY_ITEMS[number] | null>(null)

  const filtered =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="relative section-padding overflow-hidden">
      <ArtisticBackground variant="section" />
      <ArtisticSketchBg variant="flowing" intensity="light" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          label="Portfolio"
          title="Our Gallery"
          description="Custom tattoo artistry from our Koregaon Park studio — every style, every size."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                activeCategory === cat
                  ? "bg-gold/10 border-gold/50 text-gold"
                  : "border-border text-muted-foreground hover:border-gold/30 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setLightboxItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                    <ZoomIn className="h-5 w-5 text-gold" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Badge variant="outline" className="mb-2">{item.category}</Badge>
                  <h3 className="text-foreground font-medium text-sm">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={!!lightboxItem} onOpenChange={() => setLightboxItem(null)}>
        <DialogContent className="p-0 border-gold/20 bg-card max-w-3xl">
          {lightboxItem && (
            <>
              <DialogTitle className="sr-only">{lightboxItem.title}</DialogTitle>
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold">{lightboxItem.title}</h3>
                  <Badge className="mt-1">{lightboxItem.category}</Badge>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
