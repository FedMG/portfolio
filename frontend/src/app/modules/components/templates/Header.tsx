import type { AriaAttributes, FC } from 'react'
import type { DropUndefined } from '@/utilities'
import type { BaseComponentProps } from '../../schemas'

interface HeaderProps extends BaseComponentProps {
  labelledby: DropUndefined<AriaAttributes, 'aria-labelledby'>
}

export const Header: FC<HeaderProps> = ({ children, labelledby, className }) => {
  return (
    <header role='banner' aria-labelledby={labelledby} className={className}>
      {children}
    </header>
  )
}

export default Header
