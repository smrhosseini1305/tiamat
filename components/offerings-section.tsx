import { Compass, Stars, Telescope, Wind, type LucideIcon } from 'lucide-react'
import { offerings } from '@/lib/data'

const icons: Record<string, LucideIcon> = {
  Telescope,
  Stars,
  Wind,
  Compass,
}

type Offering = {
  title?: string
  description?: string
}

type OfferingsSectionProps = {
  sectionTitle?: string
  sectionSubtitle?: string
  items?: Offering[]
}

export function OfferingsSection({
  sectionTitle = 'تیامات چه تجربه‌ای می‌سازد؟',
  sectionSubtitle = 'ترکیبی از کیهانِ بیرون و آگاهیِ درون؛ جایی که علم، طبیعت و آرامش به هم می‌رسند.',
  items,
}: OfferingsSectionProps) {
  const visibleOfferings =
    items && items.length > 0
      ? items.map((item, index) => ({
          icon: offerings[index]?.icon ?? 'Stars',
          title: item.title || offerings[index]?.title || '',
          description: item.description || offerings[index]?.description || '',
        }))
      : offerings

  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden py-16 md:py-24"
    >
      <div className="star-field-dense pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {sectionTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            {sectionSubtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleOfferings.map((item) => {
            const Icon = icons[item.icon]
            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
