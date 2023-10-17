import { FooterLayout, HeaderLayout, headerPages } from './modules/components/layout'

import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  icons: {
    icon: '/icon.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 h-full relative pb-16`}>
        <HeaderLayout pages={headerPages} />
        <main className='h-full min-h-screen max-h-full space-y-[20]'>{children}</main>
        <FooterLayout />
      </body>
    </html>
  )
}
