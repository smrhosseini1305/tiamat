import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'

const vazirmatn = Vazirmatn({
  variable: '--font-vazirmatn',
  subsets: ['arabic', 'latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'تیامات | سفرهایی میان آسمان و بدن',
  description:
    'تیامات تجربه‌هایی برای دیدن آسمان، فهمیدن ریتم طبیعت و بازگشت به سکوت درون می‌سازد؛ با نجوم مقدماتی، رصد آسمان شب، یوگا، تنفس و سفرهای آگاهانه.',
  generator: 'movawerk.de',
}

export const viewport: Viewport = {
  themeColor: '#080D1F',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`dark ${vazirmatn.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
