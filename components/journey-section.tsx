import {
  Heart,
  MapPin,
  Moon,
  Telescope,
  Wind,
  type LucideIcon,
} from 'lucide-react'
import { journeySteps, toPersianDigits } from '@/lib/data'

const icons: Record<string, LucideIcon> = {
  MapPin,
  Wind,
  Moon,
  Telescope,
  Heart,
}

export function JourneySection() {
  return (
    <section id="journey" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            مسیر یک تجربه تیامات
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            هر سفر ریتمی آرام دارد؛ از رسیدن و آشنا شدن تا سکوت و جمع‌بندی پایانی.
          </p>
        </div>

        <ol className="relative mt-12 space-y-6 before:absolute before:bottom-6 before:top-6 before:right-6 before:w-px before:bg-border md:before:right-1/2">
          {journeySteps.map((step, index) => {
            const Icon = icons[step.icon]
            return (
              <li key={step.title} className="relative">
                <div className="flex items-start gap-5">
                  <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-5 md:flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-primary">
                        {toPersianDigits(index + 1)}
                      </span>
                      <h3 className="text-lg font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
