import { Camera, Send } from 'lucide-react'
import { INSTAGRAM_URL, TELEGRAM_URL, toPersianDigits } from '@/lib/data'

const footerLinks = [
  { label: 'تجربه‌ها', href: '#experiences' },
  { label: 'درباره تیامات', href: '#about' },
  { label: 'مسیر سفر', href: '#journey' },
  { label: 'راهنماها', href: '#guides' },
  { label: 'پرسش‌ها', href: '#faq' },
  { label: 'تماس', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cosmic/40">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="text-lg text-primary">TIAMAT</span>
              <span className="text-sm text-muted-foreground">/</span>
              <span className="text-lg text-foreground">تیامات</span>
            </div>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              میان آسمان و بدن؛ سفرهایی برای دیدن ستاره‌ها، شنیدن سکوت و بازگشت
              به ریتم طبیعت.
            </p>
          </div>

          <nav className="md:justify-self-center">
            <h3 className="text-sm font-bold text-foreground">پیوندها</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:justify-self-end">
            <h3 className="text-sm font-bold text-foreground">در ارتباط باشید</h3>
            <div className="mt-4 flex gap-3">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تلگرام تیامات"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Send className="size-5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="اینستاگرام تیامات"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Camera className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {toPersianDigits(1404)} تیامات — تمام حقوق محفوظ است.
        </div>
      </div>
    </footer>
  )
}
