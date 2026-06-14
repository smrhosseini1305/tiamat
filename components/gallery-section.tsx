import Image from 'next/image'
import { gallery } from '@/lib/data'
import { cn } from '@/lib/utils'

// Varying spans for a masonry-like rhythm
const spans = [
  'sm:row-span-2',
  '',
  '',
  '',
  'sm:row-span-2',
  '',
]

export function GallerySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            لحظه‌هایی از سفر
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            تکه‌هایی از شب‌های پرستاره، سکوت طبیعت و حضورِ آرام در کنار هم.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-3 md:auto-rows-[200px]">
          {gallery.map((item, i) => (
            <figure
              key={item.src}
              className={cn(
                'group relative overflow-hidden rounded-2xl border border-border',
                spans[i],
              )}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-foreground">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
