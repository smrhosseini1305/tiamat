import Image from 'next/image'
import { guides } from '@/lib/data'

type GuideItem = {
  name: string
  role: string
  image: string
  bio: string
  tags: string[]
}

type GuidesSectionProps = {
  sectionTitle?: string
  sectionSubtitle?: string
  items?: GuideItem[]
}

export function GuidesSection({
  sectionTitle = 'راهنماها و همراهان',
  sectionSubtitle = 'کسانی که آسمان، بدن و طبیعت را می‌شناسند و سفر را آرام و امن همراهی می‌کنند.',
  items,
}: GuidesSectionProps) {
  const visibleGuides =
    items && items.length > 0
      ? items
      : guides.map((guide) => ({
          name: guide.name,
          role: guide.role,
          image: guide.image,
          bio: guide.bio,
          tags: [...guide.tags],
        }))

  return (
    <section id="guides" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {sectionTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {sectionSubtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleGuides.map((guide) => (
            <div
              key={guide.name}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={guide.image}
                  alt={guide.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">
                  {guide.name}
                </h3>
                <p className="mt-1 text-sm text-primary">{guide.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {guide.bio}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {guide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
