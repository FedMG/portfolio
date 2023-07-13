import Link from 'next/link'

import { HeaderLogo } from './HeaderLogo'
import { Header, Navigation } from '../templates'
import { isValidArray } from '../../utils'

const PAGE_ALIGN_BREAKPOINT = 'px-6 sm:px-10 lg:px-16 xl:px-24 py-2.5'
const PAGE_BG_COLOR = 'bg-gray-100'

export interface HeaderLayoutProps {
  path: string
  label: 'Home' | 'About me' | 'Contact'
}

export const HeaderLayout: React.FC<{ pages: HeaderLayoutProps[] }> = ({ pages }) => {
  return (
    <Header labelledby='header-title' className={`${PAGE_BG_COLOR} sticky top-0 z-20`}>
      <Navigation
        ariaLabel='Main navigation'
        className={`border-b border-gray-200 ${PAGE_ALIGN_BREAKPOINT}`}
      >
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl gap-2'>
          <HeaderLogo id='header-title' src='/icon.ico'>
            <span className='text-[#764EF3] font-medium'>Astra</span>
            <span className='font-semibold'>Dev</span>
          </HeaderLogo>

          {isValidArray(pages) &&
            pages.map(({ path, label }) => (
              <Link key={label} href={path}>
                {label}
              </Link>
            ))}
        </div>
      </Navigation>
    </Header>
  )
}

export default HeaderLayout
