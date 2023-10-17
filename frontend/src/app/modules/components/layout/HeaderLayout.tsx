import { isValidArray } from '../../utils'
import { Header, Navigation } from '../templates'
import { HeaderLogo } from './HeaderLogo'

const PAGE_ALIGN_BREAKPOINT = 'px-6 sm:px-10 lg:px-16 xl:px-24 py-2.5'

export interface HeaderLayoutProps {
  path: string
  label: 'Home' | 'About me' | 'Contact'
}

export const HeaderLayout: React.FC<{ pages: HeaderLayoutProps[] }> = ({ pages }) => {
  return (
    <Header labelledby='header-title' className='bg-gray-100 sticky top-0 z-50'>
      <Navigation
        ariaLabel='Main navigation'
        className={`border-b border-gray-200 ${PAGE_ALIGN_BREAKPOINT}`}>
        <div className='flex flex-wrap justify-center items-center mx-auto max-w-screen-xl gap-2 sm:gap-16'>
          <HeaderLogo id='header-title' src='/icon.ico'>
            <span className='text-[#764EF3] font-medium'>Astra</span>
            <span className='font-semibold text-gray-800'>Dev</span>
          </HeaderLogo>

          <ul className='bg-inherit flex flex-row justify-end items-center'>
            {isValidArray(pages) &&
              pages.map(({ path, label }) => (
                <li
                  key={label}
                  className='text-center bg-inherit hover:bg-gray-300 active:bg-gray-200 rounded-md'>
                  <a
                    href={path}
                    className='py-3 px-5 sm:px-7 whitespace-nowrap block text-gray-800 hover:text-[#764EF3] text-md font-medium border-b border-gray-100 lg:border-0'>
                    {label}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </Navigation>
    </Header>
  )
}

export default HeaderLayout
