import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Bonanza & Sons Mart',
  description: 'Your One Stop Supermarket in AkwaIbom',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
