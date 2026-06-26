import { Send } from 'lucide-react'
import { TELEGRAM_URL } from '@/lib/data'

type FloatingTelegramProps = {
  buttonText?: string
  href?: string
  ariaLabel?: string
}

export function FloatingTelegram({
  buttonText = 'تلگرام',
  href = TELEGRAM_URL,
  ariaLabel = 'ارتباط از طریق تلگرام',
}: FloatingTelegramProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-black/40 transition-transform hover:scale-105 sm:hidden"
    >
      <Send className="size-5" />
      {buttonText}
    </a>
  )
}
