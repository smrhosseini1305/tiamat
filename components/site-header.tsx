'use client'

import { useEffect, useState } from 'react'
import { Menu, Send, X } from 'lucide-react'
import { TELEGRAM_URL } from '@/lib/data'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'تجربه‌ها', href: '#experiences' },
  { label: 'درباره تیامات', href: '#about' },
  { label: 'مسیر سفر', href: '#journey' },
  { label: 'راهنماها', href: '#guides' },
  { label: 'پرسش‌ها', href: '#faq' },
  { label: 'تماس', href: '#contact' },
]

type SiteHeaderProps = {
  logoText?: string
  logoSecondaryText?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  telegramText?: string
  telegramHref?: string
}

export function SiteHeader({
  logoText = 'TIAMAT',
  logoSecondaryText = 'تیامات',
  primaryButtonText = 'مشاهده برنامه‌ها',
  primaryButtonHref = '#experiences',
  telegramText = 'تلگرام',
  telegramHref = TELEGRAM_URL,
}: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
        <a href="#" className="flex items-center gap-2 font-semibold">
          {logoText && (
            <span className="text-lg tracking-tight text-primary md:text-xl">
              {logoText}
            </span>
          )}
          {logoText && logoSecondaryText && (
            <span className="text-sm text-muted-foreground">/</span>
          )}
          {logoSecondaryText && (
            <span className="text-lg text-foreground md:text-xl">
              {logoSecondaryText}
            </span>
          )}
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telegramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-primary sm:flex"
          >
            <Send className="size-4" />
            {telegramText}
          </a>
          <a
            href={primaryButtonHref}
            className="hidden items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            {primaryButtonText}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'بستن منو' : 'باز کردن منو'}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={primaryButtonHref}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {primaryButtonText}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
