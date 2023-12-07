import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Bonanza & Sons Mart',
  description: 'Your One Stop Supermarket in AkwaIbom, Offering Quality Products at Affordable Prices, Official Website of Bonanza & Sons Mart',
  verification: {
    google: 'UdrzRq61TgFaNobwzyd9a-2UePaxuk6ADK-GjwaXvz8'
  },
  keywords: 'Official Website of Bonanza & Sons Mart, Bonanza & Sons Mart, Bonanza and Sons Mart, Bonanza and Sons, Bonanza and Sons Mart, Bonanza and Sons Mart Uyo, Bonanza and Sons Mart Uyo AkwaIbom, Bonanza and Sons Mart Uyo AkwaIbom State, Bonanza and Sons Mart Uyo AkwaIbom State Nigeria, Bonanza and Sons Mart Uyo'  
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
