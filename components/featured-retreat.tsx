import Image from 'next/image'
import { Clock, Package, Send, Signal } from 'lucide-react'
import { TELEGRAM_URL } from '@/lib/data'

const details = [
  { icon: Clock, label: 'مدت', value: 'یک‌روزه یا آخرهفته' },
  { icon: Signal, label: 'سطح', value: 'بدون نیاز به پیش‌زمینه' },
  {
    icon: Package,
    label: 'شامل',
    value: 'آموزش نجوم مقدماتی، رصد، یوگا، تنفس، چای و گفت‌وگو',
  },
]

export function FeaturedRetreat() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/25 bg-cosmic">
          <div className="absolute inset-0">
            <Image
              src="/images/retreat.png"
              alt=""
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-background/60 via-background/85 to-background" />
            <div className="star-field absolute inset-0 opacity-40" />
          </div>

          <div className="relative grid gap-8 p-8 md:p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-primary/15 px-4 py-1.5 text-sm font-medium text-primary">
                تجربه شاخص
              </span>
              <h2 className="mt-5 text-balance text-3xl font-bold text-foreground md:text-4xl">
                آسمان، بدن، سکوت
              </h2>
              <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
                یک برنامه ترکیبی برای کسانی که می‌خواهند هم آسمان شب را بهتر
                بشناسند و هم با تمرین‌های ساده یوگا و تنفس، حضور آرام‌تری در طبیعت
                تجربه کنند.
              </p>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Send className="size-4" />
                درخواست اطلاعات
              </a>
            </div>

            <dl className="space-y-3">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card/70 p-4 backdrop-blur-sm"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <d.icon className="size-5" />
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground">{d.label}</dt>
                    <dd className="mt-0.5 text-sm font-medium leading-relaxed text-foreground">
                      {d.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
