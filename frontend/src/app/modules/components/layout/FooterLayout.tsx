import { GithubIcon, LinkedInIcon } from '../../assets'
import { Footer } from '../templates'
import { FooterLink } from './FooterLink'

const PAGE_ALIGN_BREAKPOINT = 'py-8 px-14 sm:px-10 lg:px-16 xl:px-24 mt-5'

export const FooterLayout = (): JSX.Element => {
  return (
    <Footer
      ariaLabel='footer'
      className='absolute top-full w-full bg-gray-100 border-t border-gray-200'
    >
      <div
        className={`${PAGE_ALIGN_BREAKPOINT} w-full flex flex-col sm:flex-row space-around items-center border-t bg-black border-gray-200`}
      >
        <p className='sm:w-full sm:order-none order-2 text-sm text-white'>
          © 2023 AstraDev™ Copyright
        </p>

        <div className='flex flex-nowrap sm:justify-end justify-center gap-0 space-x-2 mb-4 w-full sm:my-0 sm:order-none order-1'>
          <FooterLink
            ariaLabel='Go to my LinkedIn'
            href='https://www.linkedin.com/in/federico-gonzalia/'
            className='text-white hover:bg-gray-50 hover:text-black rounded-md active:bg-black active:text-white'
          >
            <LinkedInIcon className='fill-current' />
          </FooterLink>
          <FooterLink
            ariaLabel='Go to my Github'
            href='https://github.com/FedMG'
            className='text-white hover:bg-gray-50 hover:text-black rounded-md active:bg-black active:text-white'
          >
            <GithubIcon className='fill-current' />
          </FooterLink>
        </div>
      </div>
    </Footer>
  )
}

export default FooterLayout
