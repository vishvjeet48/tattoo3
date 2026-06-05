import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { StylesSection } from "@/components/sections/StylesSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ArtistsSection } from "@/components/sections/ArtistsSection"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { GallerySection } from "@/components/sections/GallerySection"
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection"
import { ReviewsSection } from "@/components/sections/ReviewsSection"
import { WhyChooseSection } from "@/components/sections/WhyChooseSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { BookingSection } from "@/components/sections/BookingSection"
import { InstagramSection } from "@/components/sections/InstagramSection"
import { StudioSection } from "@/components/sections/StudioSection"
import { ContactSection } from "@/components/sections/ContactSection"

function App() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StylesSection />
        <AboutSection />
        <ArtistsSection />
        <ProcessSection />
        <GallerySection />
        <BeforeAfterSection />
        <ReviewsSection />
        <WhyChooseSection />
        <FAQSection />
        <BookingSection />
        <InstagramSection />
        <StudioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
