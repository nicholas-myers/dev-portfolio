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
        <div className="main-container">
          <div className="wing">
            <a href="">bulb</a>
            <a href="">hand</a>
            <a href="">linked in</a>
            <a href="">email</a>
          </div>
          <div className="content-container">
            <div className="content-top">
              <a href="/about">o</a>
              <a href="/projects">o</a>
              <a href="/skills">o</a>
            </div>
            <div className="content">
              {children}
            </div>
            <div className="content-bottom">
              <a href="/about">o</a>
              <a href="/projects">o</a>
              <a href="/skills">o</a>
            </div>
          </div>
          <div className="wing">
            <a href="">bulb</a>
            <a href="">hand</a>
            <a href="">linked in</a>
            <a href="">email</a>
          </div>
        </div>
      </body>
    </html>
  )
}
