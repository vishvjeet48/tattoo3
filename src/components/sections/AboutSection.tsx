import { motion } from "framer-motion"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ArtisticBackground } from "@/components/backgrounds/ArtisticBackground"
import { ArtisticSketchBg } from "@/components/backgrounds/ArtisticSketchBg"
import { TIMELINE, ABOUT_IMAGE } from "@/data/siteData"

export function AboutSection() {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <ArtisticBackground variant="section" />
      <ArtisticSketchBg variant="ornament" intensity="light" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-gold/10 to-transparent rounded-2xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEP6X6i--InbdEH01c0JQ-gti-mU_TCXTlA2Eiq_GwK9OJMx1UQ0AHFnpn4YM81HsstEmgpu9I6Yg8mXCr1_tYMZseyU0ixMhgzd2IoqPOt8IKwd5153vyazyZRhRkaGanaG5glaA=s1360-w1360-h1020-rw"
                alt="INK GOD Tattoo Studio interior in Koregaon Park, Pune"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-gold rounded-xl p-6 hidden md:block">
              <div className="font-display text-3xl font-bold text-gradient-gold">10+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              label="Our Story"
              title="Where Art Meets Skin"
              align="left"
            />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2014 in Koregaon Park, INK GOD Tattoo Studio was born from a passion to elevate tattoo artistry to fine art status. Our Pune studio has become a sanctuary for those seeking meaningful, custom-designed tattoos that tell their unique stories.
              </p>
              <p>
                <strong className="text-foreground">Our Mission:</strong> To create extraordinary tattoo experiences through artistic excellence, uncompromising hygiene standards, and genuine client connection — right in the heart of Pune.
              </p>
              <p>
                <strong className="text-foreground">Our Experience:</strong> With over 5,000 completed tattoos and a team of nationally recognised artists, we've earned our place among India's premier tattoo studios. Clients visit us from Baner, Kalyani Nagar, and across Maharashtra.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div>
          <SectionHeading
            label="Our Journey"
            title="Studio Timeline"
            description="Milestones that shaped our legacy in the tattoo world."
          />

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent md:-translate-x-px" />

            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                    <div className="glass rounded-xl p-6 inline-block">
                      <span className="text-gold font-display text-2xl font-bold">{item.year}</span>
                      <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold border-4 border-background md:-translate-x-1/2 z-10" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
