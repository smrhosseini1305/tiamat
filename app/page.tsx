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
import { client } from '@/sanity/lib/client'
import {
  INSTAGRAM_URL,
  TELEGRAM_URL,
  type Experience,
  type ExperienceCategory,
} from '@/lib/data'
import type { Metadata } from 'next'

export const revalidate = 60

const TIAMAT_HOMEPAGE_QUERY = `*[_type == "homepage"][0]{
  heroEyebrow,
  heroTitle,
  heroSubtitle,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  aboutTitle,
  aboutText,
  offerings,
  experiences,
  faq,
  telegramUrl,
  instagramUrl,
  contactEmail,
  seoTitle,
  seoDescription
}`

type HomepageOffering = {
  title?: string
  description?: string
}

type HomepageExperience = {
  title?: string
  type?: string
  location?: string
  dateText?: string
  description?: string
}

type HomepageFaq = {
  question?: string
  answer?: string
}

type HomepageData = {
  heroEyebrow?: string
  heroTitle?: string
  heroSubtitle?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  aboutTitle?: string
  aboutText?: string
  offerings?: HomepageOffering[]
  experiences?: HomepageExperience[]
  faq?: HomepageFaq[]
  telegramUrl?: string
  instagramUrl?: string
  contactEmail?: string
  seoTitle?: string
  seoDescription?: string
}

const experienceTypeLabels: Record<string, ExperienceCategory> = {
  journey: 'سفرها',
  workshop: 'کارگاه نجوم',
  retreat: 'یوگا و تنفس',
  event: 'رصد شب',
}

async function getHomepageData() {
  try {
    return await client.fetch<HomepageData | null>(TIAMAT_HOMEPAGE_QUERY)
  } catch (error) {
    console.error('Failed to fetch TIAMAT homepage content from Sanity:', error)
    return null
  }
}

function cleanOfferings(items?: HomepageOffering[]) {
  const cleaned = items?.filter((item) => item.title || item.description)
  return cleaned && cleaned.length > 0 ? cleaned : undefined
}

function cleanFaq(items?: HomepageFaq[]) {
  const cleaned = items
    ?.filter((item) => item.question && item.answer)
    .map((item) => ({
      question: item.question || '',
      answer: item.answer || '',
    }))

  return cleaned && cleaned.length > 0 ? cleaned : undefined
}

function cleanExperiences(items?: HomepageExperience[]): Experience[] | undefined {
  const cleaned = items
    ?.filter((item) => item.title || item.description)
    .map((item, index) => {
      const category = item.type
        ? experienceTypeLabels[item.type] ?? 'سفرها'
        : 'سفرها'

      return {
        id: `${item.type || 'experience'}-${index}`,
        title: item.title || 'تجربه تیامات',
        category,
        date: item.dateText || 'به‌زودی',
        location: item.location || 'اعلام می‌شود',
        duration: 'اعلام می‌شود',
        capacity: 'اعلام می‌شود',
        description: item.description || '',
        level: 'مبتدی',
      }
    })

  return cleaned && cleaned.length > 0 ? cleaned : undefined
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomepageData()

  return {
    title: data?.seoTitle || 'تیامات | سفرهایی میان آسمان و بدن',
    description:
      data?.seoDescription ||
      'تیامات تجربه‌هایی برای دیدن آسمان، فهمیدن ریتم طبیعت و بازگشت به سکوت درون می‌سازد؛ با نجوم مقدماتی، رصد آسمان شب، یوگا، تنفس و سفرهای آگاهانه.',
  }
}

export default async function Page() {
  const data = await getHomepageData()
  const telegramUrl = data?.telegramUrl || TELEGRAM_URL
  const instagramUrl = data?.instagramUrl || INSTAGRAM_URL
  const experiences = cleanExperiences(data?.experiences)
  const firstExperience = experiences?.[0]

  return (
    <div className="relative min-h-screen">
      <StarryBackground />
      <SiteHeader
        primaryButtonText={data?.primaryCtaText || 'مشاهده برنامه‌ها'}
        primaryButtonHref={data?.primaryCtaHref || '#experiences'}
        telegramHref={telegramUrl}
      />
      <main>
        <HeroSection
          eyebrow={data?.heroEyebrow || 'تیامات / TIAMAT'}
          title={data?.heroTitle || 'سفرهایی میان آسمان و بدن'}
          subtitle={
            data?.heroSubtitle ||
            'تیامات تجربه‌هایی برای دیدن آسمان، فهمیدن ریتم طبیعت، و بازگشت به سکوت درون می‌سازد؛ با نجوم مقدماتی، رصد آسمان شب، یوگا، تنفس و سفرهای آگاهانه.'
          }
          primaryButtonText={data?.primaryCtaText || 'برنامه‌های پیش رو'}
          primaryButtonHref={data?.primaryCtaHref || '#experiences'}
          secondaryButtonText={data?.secondaryCtaText || 'عضویت در کانال تلگرام'}
          secondaryButtonHref={data?.secondaryCtaHref || telegramUrl}
          cardTitle={firstExperience?.title}
          cardSubtitle={firstExperience?.description}
          cardDate={firstExperience?.date}
          cardLocation={firstExperience?.location}
        />
        <ExperiencesSection items={experiences} />
        <OfferingsSection
          sectionTitle={data?.aboutTitle}
          sectionSubtitle={data?.aboutText}
          items={cleanOfferings(data?.offerings)}
        />
        <JourneySection />
        <FeaturedRetreat />
        <GuidesSection />
        <GallerySection />
        <TestimonialsSection />
        <PracticalNotesSection />
        <FaqSection items={cleanFaq(data?.faq)} />
        <FinalCta
          primaryButtonHref={telegramUrl}
          secondaryButtonHref={telegramUrl}
        />
      </main>
      <SiteFooter
        telegramHref={telegramUrl}
        instagramHref={instagramUrl}
        contactEmail={data?.contactEmail}
      />
      <FloatingTelegram href={telegramUrl} />
    </div>
  )
}
