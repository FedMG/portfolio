import { FooterLayout, HeaderLayout, headerPages } from './modules/components/layout'

import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
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
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <HeaderLayout pages={headerPages} />
          {children}
          <FooterLayout />
        </Providers>
      </body>
    </html>
  )
}
