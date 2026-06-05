
import { ArtisticBackground } from "@/components/backgrounds/ArtisticBackground"
import { ArtisticSketchBg } from "@/components/backgrounds/ArtisticSketchBg"

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
