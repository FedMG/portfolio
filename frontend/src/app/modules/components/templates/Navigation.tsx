import type { AriaAttributes, FC } from 'react'
import type { BaseComponentProps } from '../../schemas'
import type { DropUndefined } from '@/utilities'

interface NavigationProps extends BaseComponentProps {
  ariaLabel: DropUndefined<AriaAttributes, 'aria-label'>
}

export const Navigation: FC<NavigationProps> = ({ children, ariaLabel, className }) => (
  <nav role='navigation' aria-label={ariaLabel} className={className}>
    {children}
  </nav>
)

export default Navigation
