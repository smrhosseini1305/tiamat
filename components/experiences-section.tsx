'use client'

import { useState } from 'react'
import { Calendar, Clock, MapPin, Signal, Users } from 'lucide-react'
import { experiences, filters } from '@/lib/data'
import { cn } from '@/lib/utils'

const categoryColors: Record<string, string> = {
  'سفرها': 'bg-accent/20 text-accent',
  'کارگاه نجوم': 'bg-primary/15 text-primary',
  'یوگا و تنفس': 'bg-sage/20 text-sage',
  'رصد شب': 'bg-primary/15 text-primary',
}

export function ExperiencesSection() {
  const [active, setActive] = useState<(typeof filters)[number]>('همه')

  const visible = experiences.filter(
    (e) => active === 'همه' || e.category === active,
  )

  return (
    <section id="experiences" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            برنامه‌های پیش رو
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            تجربه‌ای را انتخاب کن که با ریتم این روزهایت هماهنگ است؛ از رصد آرام
            تا کارگاه‌های نجوم.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition-colors',
                active === filter
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card/50 text-muted-foreground hover:border-primary/50 hover:text-primary',
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {visible.map((exp) => (
            <article
              key={exp.id}
              className="group flex cursor-pointer flex-col rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-black/40"
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    'rounded-full px-3 py-1 text-xs font-medium',
                    categoryColors[exp.category],
                  )}
                >
                  {exp.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Signal className="size-3.5 text-primary" />
                  سطح: {exp.level}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                {exp.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              <dl className="mt-5 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4 text-primary" />
                  <dd>{exp.date}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-primary" />
                  <dd>{exp.location}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" />
                  <dd>{exp.duration}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-primary" />
                  <dd>{exp.capacity}</dd>
                </div>
              </dl>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-primary/40 px-5 py-2.5 text-sm font-medium text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
              >
                جزئیات
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
