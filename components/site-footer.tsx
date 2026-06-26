import { Camera, Mail, Send } from 'lucide-react'
import { INSTAGRAM_URL, TELEGRAM_URL, toPersianDigits } from '@/lib/data'

const footerLinks = [
  { label: 'تجربه‌ها', href: '#experiences' },
  { label: 'درباره تیامات', href: '#about' },
  { label: 'مسیر سفر', href: '#journey' },
  { label: 'راهنماها', href: '#guides' },
  { label: 'پرسش‌ها', href: '#faq' },
  { label: 'تماس', href: '#contact' },
]

type FooterLink = {
  label: string
  href: string
}

type SiteFooterProps = {
  companyName?: string
  brandText?: string
  shortText?: string
  linksHeading?: string
  links?: FooterLink[]
  contactHeading?: string
  telegramHref?: string
  telegramAriaLabel?: string
  instagramHref?: string
  instagramAriaLabel?: string
  contactEmail?: string
  emailAriaLabel?: string
  copyrightYear?: string
  copyrightText?: string
}

export function SiteFooter({
  companyName = 'TIAMAT',
  brandText = 'تیامات',
  shortText = 'میان آسمان و بدن؛ سفرهایی برای دیدن ستاره‌ها، شنیدن سکوت و بازگشت به ریتم طبیعت.',
  linksHeading = 'پیوندها',
  links = footerLinks,
  contactHeading = 'در ارتباط باشید',
  telegramHref = TELEGRAM_URL,
  telegramAriaLabel = 'تلگرام تیامات',
  instagramHref = INSTAGRAM_URL,
  instagramAriaLabel = 'اینستاگرام تیامات',
  contactEmail,
  emailAriaLabel = 'ایمیل تیامات',
  copyrightYear = toPersianDigits(1404),
  copyrightText = 'تیامات — تمام حقوق محفوظ است.',
}: SiteFooterProps) {
  const emailHref = contactEmail ? `mailto:${contactEmail}` : undefined

  return (
    <footer className="border-t border-border bg-cosmic/40">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              {companyName && (
                <span className="text-lg text-primary">{companyName}</span>
              )}
              {companyName && brandText && (
                <span className="text-sm text-muted-foreground">/</span>
              )}
              {brandText && (
                <span className="text-lg text-foreground">{brandText}</span>
              )}
            </div>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              {shortText}
            </p>
          </div>

          <nav className="md:justify-self-center">
            <h3 className="text-sm font-bold text-foreground">{linksHeading}</h3>
            <ul className="mt-4 space-y-2.5">
              {links.map((link) => (
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
            <h3 className="text-sm font-bold text-foreground">{contactHeading}</h3>
            <div className="mt-4 flex gap-3">
              <a
                href={telegramHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={telegramAriaLabel}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Send className="size-5" />
              </a>
              <a
                href={instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={instagramAriaLabel}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Camera className="size-5" />
              </a>
              {emailHref && (
                <a
                  href={emailHref}
                  aria-label={emailAriaLabel}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Mail className="size-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {copyrightYear} {copyrightText}
        </div>
      </div>
    </footer>
  )
}
