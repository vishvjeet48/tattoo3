import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ArtisticBackground } from "@/components/backgrounds/ArtisticBackground"
import { ArtisticSketchBg } from "@/components/backgrounds/ArtisticSketchBg"
import { BEFORE_AFTER } from "@/data/siteData"

function ComparisonSlider({
  before,
  after,
  title,
}: {
  before: string
  after: string
  title: string
}) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(5, Math.min(95, x)))
  }, [])

  const handleMove = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!isDragging.current) return
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
      updatePosition(clientX)
    },
    [updatePosition]
  )

  return (
    <div className="space-y-4">
      <h3 className="font-display text-lg font-semibold text-center text-foreground">{title}</h3>
      <div
        ref={containerRef}
        className="relative rounded-xl overflow-hidden border border-border aspect-[4/3] cursor-col-resize select-none"
        onMouseDown={() => { isDragging.current = true }}
        onMouseUp={() => { isDragging.current = false }}
        onMouseLeave={() => { isDragging.current = false }}
        onMouseMove={handleMove}
        onTouchStart={() => { isDragging.current = true }}
        onTouchEnd={() => { isDragging.current = false }}
        onTouchMove={handleMove}
      >
        <img src={after} alt={`${title} after`} className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img src={before} alt={`${title} before`} className="absolute inset-0 w-full h-full object-cover" />
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 bg-gold z-10"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold border-4 border-background flex items-center justify-center shadow-lg">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-primary-foreground rounded" />
              <div className="w-0.5 h-4 bg-primary-foreground rounded" />
            </div>
          </div>
        </div>

        <span className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-medium text-foreground">
          Before
        </span>
        <span className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-medium text-foreground">
          After
        </span>
      </div>
    </div>
  )
}

export function BeforeAfterSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      <ArtisticBackground variant="section" />
      <ArtisticSketchBg variant="ornament" intensity="light" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          label="Transformations"
          title="Before & After"
          description="Drag the slider to see the incredible transformations our artists create."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {BEFORE_AFTER.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <ComparisonSlider {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
