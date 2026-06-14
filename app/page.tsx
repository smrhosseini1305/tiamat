import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ExperiencesSection } from '@/components/experiences-section'
import { OfferingsSection } from '@/components/offerings-section'
import { JourneySection } from '@/components/journey-section'
import { FeaturedRetreat } from '@/components/featured-retreat'
import { GuidesSection } from '@/components/guides-section'
import { GallerySection } from '@/components/gallery-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import {
  FaqSection,
  PracticalNotesSection,
} from '@/components/notes-faq-section'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { FloatingTelegram } from '@/components/floating-telegram'
import { StarryBackground } from '@/components/starry-background'

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <StarryBackground />
      <SiteHeader />
      <main>
        <HeroSection />
        <ExperiencesSection />
        <OfferingsSection />
        <JourneySection />
        <FeaturedRetreat />
        <GuidesSection />
        <GallerySection />
        <TestimonialsSection />
        <PracticalNotesSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingTelegram />
    </div>
  )
}
