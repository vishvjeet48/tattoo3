import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ArtisticBackground } from "@/components/backgrounds/ArtisticBackground"
import { ArtisticSketchBg } from "@/components/backgrounds/ArtisticSketchBg"
import { REVIEWS } from "@/data/siteData"

function ReviewCard({
  review,
  index,
}: {
  review: (typeof REVIEWS)[number]
  index: number
}) {
  const rotations = [-3, 2, -2, 4, -1, 3]
  const yOffsets = [0, -10, 5, -5, 10, 0]

  return (
    <div
      className="flex-shrink-0 w-[320px] md:w-[360px]"
      style={{
        transform: `rotate(${rotations[index % rotations.length]}deg) translateY(${yOffsets[index % yOffsets.length]}px)`,
      }}
    >
      <div className="glass-gold rounded-2xl p-6 h-full hover:shadow-xl hover:shadow-gold/5 transition-shadow duration-500">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={review.image}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-gold/30"
          />
          <div>
            <h4 className="font-medium text-foreground">{review.name}</h4>
            <div className="flex gap-0.5">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed italic">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>
    </div>
  )
}

export function ReviewsSection() {
  const duplicated = [...REVIEWS, ...REVIEWS]

  return (
    <section id="reviews" className="relative section-padding overflow-hidden">
      <ArtisticBackground variant="section" />
      <ArtisticSketchBg variant="swirl" intensity="light" />

      <div className="relative max-w-7xl mx-auto mb-12">
        <SectionHeading
          label="Testimonials"
          title="Client Reviews"
          description="Stories from Pune clients who trusted our artists with their skin."
        />
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-6 py-8"
          animate={{ x: [0, -50 * REVIEWS.length * 7.2] }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicated.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
