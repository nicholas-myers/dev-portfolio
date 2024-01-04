import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import '../styles/wing.css'
import Wing from '@/components/Wing'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nick Myers Profolio',
  description: 'Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
