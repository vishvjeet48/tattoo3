import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { InstagramIcon } from "@/components/icons/SocialIcons"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ArtisticBackground } from "@/components/backgrounds/ArtisticBackground"
import { INSTAGRAM_POSTS } from "@/data/siteData"

export function InstagramSection() {
  const posts = [...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS]

  return (
    <section className="relative section-padding overflow-hidden">
      <ArtisticBackground variant="section" />

      <div className="relative max-w-7xl mx-auto mb-12">
        <SectionHeading
          label="Follow Us"
          title="Instagram & Reels"
          description="Watch our artists at work and explore our latest creations on social media."
        />
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-4 px-4"
          animate={{ x: [0, -50 * INSTAGRAM_POSTS.length * 4.2] }}
          transition={{
            x: { duration: 30, repeat: Infinity, ease: "linear" },
          }}
        >
          {posts.map((post, i) => (
            <motion.div
              key={`${post.id}-${i}`}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex-shrink-0 w-56 md:w-64 group relative rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={post.image}
                alt={`Instagram ${post.type}`}
                className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {post.type === "reel" || post.type === "video" ? (
                  <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center">
                    <Play className="h-5 w-5 text-primary-foreground ml-0.5" />
                  </div>
                ) : (
                  <InstagramIcon className="h-8 w-8 text-gold" />
                )}
              </div>
              <div className="absolute top-3 left-3">
                <span className="glass px-2 py-1 rounded text-xs capitalize text-foreground">
                  {post.type}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-10">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
        >
          <InstagramIcon className="h-5 w-5" />
          @inkgodstudio
        </a>
      </div>
    </section>
  )
}
