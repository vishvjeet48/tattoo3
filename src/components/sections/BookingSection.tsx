import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Upload, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ArtisticBackground } from "@/components/backgrounds/ArtisticBackground"
import { ArtisticSketchBg } from "@/components/backgrounds/ArtisticSketchBg"
import { ARTISTS, TATTOO_STYLES } from "@/data/siteData"

export function BookingSection() {
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="booking" className="relative section-padding overflow-hidden">
      <ArtisticBackground variant="section" />
      <ArtisticSketchBg variant="flash" intensity="light" />

      <div className="relative max-w-4xl mx-auto">
        <SectionHeading
          label="Get Started"
          title="Book Your Appointment"
          description="Fill out the form below and we'll get back to you within 24 hours to schedule your consultation."
        />

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-gold rounded-2xl p-6 md:p-10 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Artist Ayush" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="arjun@gmail.com" required />
            </div>
            <div className="space-y-2">
              <Label>Tattoo Style</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  {TATTOO_STYLES.map((s) => (
                    <SelectItem key={s.name} value={s.name}>{s.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Preferred Artist</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any available artist" />
                </SelectTrigger>
                <SelectContent>
                  {ARTISTS.map((a) => (
                    <SelectItem key={a.name} value={a.name}>{a.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range</Label>
              <Input id="budget" placeholder="e.g. ₹5,000 – ₹15,000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="placement">Placement Area</Label>
              <Input id="placement" placeholder="e.g. Left forearm" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Preferred Date</Label>
              <Input id="date" type="date" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea id="notes" placeholder="Describe your tattoo idea, size, and any reference details..." rows={4} />
          </div>

          <div className="space-y-2">
            <Label>Reference Image</Label>
            <div
              className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-gold/40 transition-colors"
              onClick={() => fileRef.current?.click()}
              onKeyDown={(e) => e.key === "Enter" && fileRef.current?.click()}
              role="button"
              tabIndex={0}
            >
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">
                {fileName ?? "Click to upload reference image (PNG, JPG up to 10MB)"}
              </p>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={submitted}>
            {submitted ? (
              <>
                <CheckCircle className="h-5 w-5" />
                Request Sent!
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Submit Booking Request
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
