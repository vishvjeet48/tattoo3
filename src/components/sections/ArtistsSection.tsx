import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import { InstagramIcon } from "@/components/icons/SocialIcons"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ArtisticBackground } from "@/components/backgrounds/ArtisticBackground"
import { ArtisticSketchBg } from "@/components/backgrounds/ArtisticSketchBg"
import { ARTISTS } from "@/data/siteData"

export function ArtistsSection() {    
  return (
    <section id="artists" className="relative section-padding overflow-hidden">
      <ArtisticBackground variant="section" />
      <ArtisticSketchBg variant="ornament" intensity="light" />

      <div className="relative max-w-7xl mx-auto">
      </div>
    </section>
  )
}
