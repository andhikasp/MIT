import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { LanguageProvider } from '@/components/LanguageProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PT MOXELE INDO GROUP - Multi-Industry Technology Solution Architect',
  description: 'PT MOXELE INDO GROUP adalah penyedia solusi teknologi yang didedikasikan untuk melayani beragam industri, dengan keahlian inti dalam sistem Jaringan Sinyal dan ISP (Internet Service Protocol).',
  icons: {
    icon: '/logo-mhg.png',
    shortcut: '/logo-mhg.png',
    apple: '/logo-mhg.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  )
}


