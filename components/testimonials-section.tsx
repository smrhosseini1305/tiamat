import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="star-field-dense pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            تجربه همراهان
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            چند روایت کوتاه از کسانی که شبی را با تیامات زیر آسمان گذرانده‌اند.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-border bg-card p-6"
            >
              <Quote className="size-7 text-primary/60" />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                {t.text}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <div className="text-sm font-bold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
