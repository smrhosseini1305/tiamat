import { Info, ShieldCheck } from 'lucide-react'
import { AccordionList } from '@/components/accordion-list'
import { faqs, practicalNotes } from '@/lib/data'

type AccordionItem = {
  question: string
  answer: string
}

type PracticalNotesSectionProps = {
  eyebrowText?: string
  title?: string
  subtitle?: string
  items?: AccordionItem[]
}

type FaqSectionProps = {
  sectionTitle?: string
  sectionSubtitle?: string
  items?: AccordionItem[]
}

export function PracticalNotesSection({
  eyebrowText = 'قبل از آمدن بدانید',
  title = 'هرچه برای یک تجربه آرام لازم است',
  subtitle = 'مناسب برای مبتدی‌ها و با تمرکز بر مشارکت ایمن.',
  items,
}: PracticalNotesSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-sm font-medium text-primary">
            <Info className="size-4" />
            {eyebrowText}
          </span>
          <h2 className="mt-5 text-balance text-3xl font-bold text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 flex items-center justify-center gap-2 text-pretty leading-relaxed text-muted-foreground">
            <ShieldCheck className="size-4 text-accent" />
            {subtitle}
          </p>
        </div>

        <div className="mt-10">
          <AccordionList items={items && items.length > 0 ? items : practicalNotes} />
        </div>
      </div>
    </section>
  )
}

export function FaqSection({
  sectionTitle = 'پرسش‌های پرتکرار',
  sectionSubtitle = 'اگر هنوز پرسشی داری، از تلگرام بپرس؛ با خوشحالی پاسخ می‌دهیم.',
  items,
}: FaqSectionProps) {
  return (
    <section id="faq" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {sectionTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {sectionSubtitle}
          </p>
        </div>

        <div className="mt-10">
          <AccordionList items={items && items.length > 0 ? items : faqs} />
        </div>
      </div>
    </section>
  )
}
