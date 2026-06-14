import Image from 'next/image'
import {
  Calendar,
  MapPin,
  Moon,
  Send,
  Sparkles,
  Stars,
  Telescope,
  Users,
  Wind,
} from 'lucide-react'
import { TELEGRAM_URL } from '@/lib/data'

const badges = [
  { icon: Stars, label: 'مناسب برای مبتدی‌ها' },
  { icon: Telescope, label: 'رصد با راهنمایی علمی' },
  { icon: Wind, label: 'یوگا و تنفس در طبیعت' },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image + cosmic overlays */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-sky.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-60"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/80 to-background" />
      <div className="star-field absolute inset-0 -z-10 animate-twinkle opacity-70" />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-28 pb-16 md:px-6 md:pt-36 md:pb-24 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-10">
        {/* Copy */}
        <div className="text-center lg:text-right">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-primary backdrop-blur-sm">
            <Sparkles className="size-4" />
            تیامات / TIAMAT
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight text-foreground md:text-6xl">
            سفرهایی میان آسمان و بدن
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
            تیامات تجربه‌هایی برای دیدن آسمان، فهمیدن ریتم طبیعت، و بازگشت به سکوت
            درون می‌سازد؛ با نجوم مقدماتی، رصد آسمان شب، یوگا، تنفس و سفرهای
            آگاهانه.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#experiences"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
            >
              <Stars className="size-4" />
              برنامه‌های پیش رو
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-primary sm:w-auto"
            >
              <Send className="size-4" />
              عضویت در کانال تلگرام
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm"
              >
                <badge.icon className="size-3.5 text-primary" />
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* Next journey card */}
        <div className="relative mx-auto w-full max-w-sm animate-float-slow">
          <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                <Moon className="size-3.5" />
                نزدیک‌ترین برنامه
              </span>
              <Telescope className="size-5 text-primary/70" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-foreground">
              شب رصد و یوگای آرامش
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              یک شب آرام برای تماشای ستاره‌ها، یوگای ملایم و تنفس آگاهانه دور از
              نور شهر.
            </p>

            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="size-4 text-primary" />
                <dt className="sr-only">تاریخ</dt>
                <dd>۲۲ خرداد ۱۴۰۴</dd>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-4 text-primary" />
                <dt className="sr-only">مکان</dt>
                <dd>کویر مرنجاب</dd>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Users className="size-4 text-primary" />
                <dt className="sr-only">ظرفیت</dt>
                <dd>۱۸ نفر</dd>
              </div>
            </dl>

            <a
              href="#experiences"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              جزئیات و ثبت‌نام
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
