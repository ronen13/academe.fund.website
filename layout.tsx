import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Rubik, Assistant } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
  subsets: ['latin', 'hebrew'],
  variable: '--font-rubik',
  display: 'swap',
})

const assistant = Assistant({
  subsets: ['latin', 'hebrew'],
  variable: '--font-assistant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AcadeMe.Fund — התאמת מלגות וסיוע כלכלי | Scholarship & Aid Matching',
  description:
    'AcadeMe.Fund מלווה סטודנטים בתהליך התאמה אישית למלגות וסיוע כלכלי — בביטחון, בשקיפות ובליווי אישי. Personalized scholarship and financial-aid matching for students.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2f5bd0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable} ${assistant.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
