import { MapPin, Phone, Mail } from "lucide-react"
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/icons/SocialIcons"
import { ArtisticBackground } from "@/components/backgrounds/ArtisticBackground"
import { NAV_LINKS, FOOTER_SERVICES, EMAIL, PHONE, ADDRESS } from "@/data/siteData"

const SOCIAL_LINKS = [
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-charcoal overflow-hidden">
      <ArtisticBackground variant="footer" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center">
                <span className="font-display text-gold text-sm font-bold">IG</span>
              </div>
              <div>
                <span className="font-display text-xl font-semibold text-foreground">Ink Signia</span>
                <span className="block text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
                  Pune · Koregaon Park
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Premium custom tattoo artistry in the heart of Pune. Where your story becomes permanent art — crafted with passion, precision, and creativity.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                {ADDRESS}
              </li>
              <li>
                <a href={`tel:${PHONE}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-gold transition-colors">
                  <Phone className="h-4 w-4 text-gold shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-gold transition-colors">
                  <Mail className="h-4 w-4 text-gold shrink-0" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ink Signia Tattoo Studio, Pune. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Crafted with ink, passion, and precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
