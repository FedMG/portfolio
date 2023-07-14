import { HeaderLayout, headerPages } from './application/components'

import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AstraDev'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <HeaderLayout pages={headerPages} />
        {children}
      </body>
    </html>
  )
}
