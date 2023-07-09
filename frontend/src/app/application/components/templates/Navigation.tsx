import type { AriaAttributes, FC } from 'react'
import { DropUndefined } from '@/utilities'
import { BaseComponentProps } from '../../schemas'

interface NavigationProps extends BaseComponentProps {
  ariaLabel: DropUndefined<AriaAttributes, 'aria-label'>
}

export const Navigation: FC<NavigationProps> = ({ children, ariaLabel, className }) => (
  <nav role='navigation' aria-label={ariaLabel} className={className}>
    {children}
  </nav>
)
