import type { AriaAttributes, FC } from 'react'
import type { DropUndefined } from '@/utilities'
import type { BaseComponentProps } from '../../schemas'

interface FooterProps extends BaseComponentProps {
  ariaLabel: DropUndefined<AriaAttributes, 'aria-label'>
}

export const Footer: FC<FooterProps> = ({ children, className, ariaLabel }) => {
  return (
    <footer role='contentinfo' aria-label={ariaLabel} className={className}>
      {children}
    </footer>
  )
}

export default Footer
