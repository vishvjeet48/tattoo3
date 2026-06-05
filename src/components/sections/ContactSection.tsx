import { motion } from "framer-motion"
import { MapPin, Phone, Mail, MessageCircle, Navigation, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ArtisticBackground } from "@/components/backgrounds/ArtisticBackground"
import { ADDRESS, PHONE, EMAIL, WHATSAPP_URL, BUSINESS_HOURS, MAP_EMBED_URL } from "@/data/siteData"

export function ContactSection() {
  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <ArtisticBackground variant="section" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          label="Get In Touch"
          title="Contact Us"
          description="Visit our Koregaon Park studio or reach out — we're here to help bring your vision to life."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Address</h3>
                  <p className="text-sm text-muted-foreground">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Phone</h3>
                  <a href={`tel:${PHONE}`} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Email</h3>
                  <a href={`mailto:${EMAIL}`} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Business Hours</h3>
                  <div className="space-y-1">
                    {BUSINESS_HOURS.map((bh) => (
                      <div key={bh.day} className="flex justify-between gap-8 text-sm">
                        <span className="text-muted-foreground">{bh.day}</span>
                        <span className="text-foreground">{bh.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="whatsapp" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={`tel:${PHONE}`}>
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              title="INK GOD Tattoo Studio — Koregaon Park, Pune"
              src={MAP_EMBED_URL}
              className="w-full h-full border-0 grayscale opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
