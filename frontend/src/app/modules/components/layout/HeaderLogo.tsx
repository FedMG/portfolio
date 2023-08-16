import Image from 'next/image'
import { LinkButton } from '../LinkButton'

import type { FC } from 'react'
import type { BaseComponentProps } from '../../schemas'

export interface HeaderLogoProps extends Pick<BaseComponentProps, 'children'> {
  src: string
  id: string
}

export const HeaderLogo: FC<HeaderLogoProps> = ({ children, src, id }) => (
  <LinkButton href='/' className='flex items-center' ariaLabel='Go to Homepage'>
    <Image
      priority
      src={src}
      className='mr-3 h-9 w-auto select-none'
      width={45}
      height={45}
      alt='Personal portfolio logo. A white rocket with some violet tints.'
      draggable='false'
      role='img'
    />
    <div id={id} className='self-center text-xl whitespace-nowrap hidden sm:block'>
      {children}
    </div>
  </LinkButton>
)

export default HeaderLogo
