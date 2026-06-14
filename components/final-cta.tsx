import { MessageCircle, Send } from 'lucide-react'
import { TELEGRAM_URL } from '@/lib/data'

export function FinalCta() {
  return (
    <section id="contact" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/25 bg-cosmic px-6 py-16 text-center md:px-12 md:py-24">
          <div className="star-field-dense absolute inset-0 animate-twinkle opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-5xl">
              آماده‌ای آسمان را دوباره ببینی؟
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
              برای دیدن برنامه‌های جدید، پرسش درباره سفرها یا ثبت‌نام، از تلگرام
              با ما در ارتباط باشید.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
              >
                <Send className="size-4" />
                عضویت در کانال تلگرام
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-primary sm:w-auto"
              >
                <MessageCircle className="size-4" />
                ارسال پیام برای ثبت‌نام
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
