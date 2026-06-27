import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ExperiencesSection } from '@/components/experiences-section'
import { OfferingsSection } from '@/components/offerings-section'
import { JourneySection } from '@/components/journey-section'
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
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import {
  experiences as fallbackExperiences,
  guides as fallbackGuides,
  gallery as fallbackGallery,
  testimonials as fallbackTestimonials,
  INSTAGRAM_URL,
  TELEGRAM_URL,
  type Experience,
  type ExperienceCategory,
} from '@/lib/data'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const TIAMAT_HOMEPAGE_QUERY = `*[_type == "homepage" && _id == "homepage"][0]{
  headerTitle,
  heroTitle,
  heroSubtitle,
  experiencesTitle,
  experiencesDescription,
  experiences[]{
    title,
    type,
    location,
    dateText,
    duration,
    capacity,
    description,
    level
  },
  guidesTitle,
  guidesDescription,
  guides[]{
    name,
    role,
    image,
    bio,
    tags
  },
  galleryTitle,
  galleryDescription,
  gallery[]{
    image,
    caption,
    alt
  },
  testimonialsTitle,
  testimonialsDescription,
  testimonials[]{
    name,
    role,
    text
  },
  footerTitle,
  footerDescription,
  telegramUrl,
  instagramUrl
}`

type HomepageExperience = {
  title?: string
  type?: string
  location?: string
  dateText?: string
  duration?: string
  capacity?: string
  description?: string
  level?: string
}

type HomepageGuide = {
  name?: string
  role?: string
  image?: unknown
  bio?: string
  tags?: string[]
}

type HomepageGalleryItem = {
  image?: unknown
  caption?: string
  alt?: string
}

type HomepageTestimonial = {
  name?: string
  role?: string
  text?: string
}

type HomepageData = {
  headerTitle?: string
  heroTitle?: string
  heroSubtitle?: string
  experiencesTitle?: string
  experiencesDescription?: string
  experiences?: HomepageExperience[]
  guidesTitle?: string
  guidesDescription?: string
  guides?: HomepageGuide[]
  galleryTitle?: string
  galleryDescription?: string
  gallery?: HomepageGalleryItem[]
  testimonialsTitle?: string
  testimonialsDescription?: string
  testimonials?: HomepageTestimonial[]
  footerTitle?: string
  footerDescription?: string
  telegramUrl?: string
  instagramUrl?: string
}

type GuideCard = {
  name: string
  role: string
  image: string
  bio: string
  tags: string[]
}

type GalleryCard = {
  image: string
  caption: string
  alt: string
}

type TestimonialCard = {
  name: string
  role: string
  text: string
}

const experienceTypeLabels: Record<string, ExperienceCategory> = {
  journey: 'سفرها',
  workshop: 'کارگاه نجوم',
  retreat: 'یوگا و تنفس',
  event: 'رصد شب',
}

async function getHomepageData() {
  try {
    return await client.fetch<HomepageData | null>(
      TIAMAT_HOMEPAGE_QUERY,
      {},
      {
        cache: 'no-store',
        next: { revalidate: 0 },
      },
    )
  } catch (error) {
    console.error('Failed to fetch TIAMAT homepage content from Sanity:', error)
    return null
  }
}

function cleanExperiences(items?: HomepageExperience[]): Experience[] | undefined {
  const cleaned = items
    ?.filter((item) => item.title || item.description)
    .map((item, index) => {
      const category = item.type
        ? experienceTypeLabels[item.type] ?? 'سفرها'
        : 'سفرها'
      const fallback = fallbackExperiences[index % fallbackExperiences.length]

      return {
        id: `${item.type || 'experience'}-${index}`,
        title: item.title || fallback.title,
        category,
        date: item.dateText || fallback.date,
        location: item.location || fallback.location,
        duration: item.duration || fallback.duration,
        capacity: item.capacity || fallback.capacity,
        description: item.description || fallback.description,
        level: item.level || fallback.level,
      }
    })

  return cleaned && cleaned.length > 0 ? cleaned : undefined
}

function cleanGuides(items?: HomepageGuide[]): GuideCard[] | undefined {
  const cleaned = items
    ?.filter((item) => item.name || item.bio)
    .map((item, index) => {
      const fallback = fallbackGuides[index % fallbackGuides.length]

      return {
        name: item.name || fallback.name,
        role: item.role || fallback.role,
        image:
          item.image != null
            ? urlFor(item.image as any).width(900).url()
            : fallback.image,
        bio: item.bio || fallback.bio,
        tags: item.tags && item.tags.length > 0 ? item.tags : [...fallback.tags],
      }
    })

  return cleaned && cleaned.length > 0 ? cleaned : undefined
}

function cleanGallery(items?: HomepageGalleryItem[]): GalleryCard[] | undefined {
  const cleaned = items
    ?.filter((item) => item.caption || item.alt || item.image)
    .map((item, index) => {
      const fallback = fallbackGallery[index % fallbackGallery.length]

      return {
        image:
          item.image != null
            ? urlFor(item.image as any).width(1400).url()
            : fallback.src,
        caption: item.caption || fallback.caption,
        alt: item.alt || item.caption || fallback.caption,
      }
    })

  return cleaned && cleaned.length > 0 ? cleaned : undefined
}

function cleanTestimonials(items?: HomepageTestimonial[]): TestimonialCard[] | undefined {
  const cleaned = items
    ?.filter((item) => item.name || item.text)
    .map((item, index) => {
      const fallback = fallbackTestimonials[index % fallbackTestimonials.length]

      return {
        name: item.name || fallback.name,
        role: item.role || fallback.role,
        text: item.text || fallback.text,
      }
    })

  return cleaned && cleaned.length > 0 ? cleaned : undefined
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'تیامات | سفرهایی میان آسمان و بدن',
    description:
      'تیامات تجربه‌هایی برای دیدن آسمان، فهمیدن ریتم طبیعت و بازگشت به سکوت درون می‌سازد؛ با نجوم مقدماتی، رصد آسمان شب، یوگا، تنفس و سفرهای آگاهانه.',
  }
}

export default async function Page() {
  const data = await getHomepageData()
  const telegramUrl = data?.telegramUrl || TELEGRAM_URL
  const instagramUrl = data?.instagramUrl || INSTAGRAM_URL
  const experiences = cleanExperiences(data?.experiences)
  const guides = cleanGuides(data?.guides)
  const gallery = cleanGallery(data?.gallery)
  const testimonials = cleanTestimonials(data?.testimonials)
  const firstExperience = experiences?.[0] ?? fallbackExperiences[0]

  return (
    <div className="relative min-h-screen">
      <StarryBackground />
      <SiteHeader
        logoText={data?.headerTitle || 'TIAMAT'}
        telegramHref={telegramUrl}
      />
      <main>
        <HeroSection
          title={data?.heroTitle || 'سفرهایی میان آسمان و بدن'}
          subtitle={
            data?.heroSubtitle ||
            'تیامات تجربه‌هایی برای دیدن آسمان، فهمیدن ریتم طبیعت، و بازگشت به سکوت درون می‌سازد؛ با نجوم مقدماتی، رصد آسمان شب، یوگا، تنفس و سفرهای آگاهانه.'
          }
          cardTitle={firstExperience.title}
          cardSubtitle={firstExperience.description}
          cardDate={firstExperience.date}
          cardLocation={firstExperience.location}
          cardCapacity={firstExperience.capacity}
          secondaryButtonHref={telegramUrl}
        />
        <ExperiencesSection
          sectionTitle={data?.experiencesTitle}
          sectionSubtitle={data?.experiencesDescription}
          items={experiences}
        />
        <OfferingsSection />
        <JourneySection />
        <GuidesSection
          sectionTitle={data?.guidesTitle}
          sectionSubtitle={data?.guidesDescription}
          items={guides}
        />
        <GallerySection
          sectionTitle={data?.galleryTitle}
          sectionSubtitle={data?.galleryDescription}
          items={gallery}
        />
        <TestimonialsSection
          sectionTitle={data?.testimonialsTitle}
          sectionSubtitle={data?.testimonialsDescription}
          items={testimonials}
        />
        <PracticalNotesSection />
        <FaqSection />
        <FinalCta
          primaryButtonHref={telegramUrl}
          secondaryButtonHref={telegramUrl}
        />
      </main>
      <SiteFooter
        companyName={data?.footerTitle || 'TIAMAT'}
        shortText={
          data?.footerDescription ||
          'میان آسمان و بدن؛ سفرهایی برای دیدن ستاره‌ها، شنیدن سکوت و بازگشت به ریتم طبیعت.'
        }
        telegramHref={telegramUrl}
        instagramHref={instagramUrl}
      />
      <FloatingTelegram href={telegramUrl} />
    </div>
  )
}
