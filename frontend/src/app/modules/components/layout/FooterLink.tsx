import type { AriaAttributes, FC } from 'react'
import type { BaseComponentProps } from '../../schemas'
import type { DropUndefined } from '@/utilities'

export interface FooterLinkProps extends BaseComponentProps {
  href: string
  ariaLabel: DropUndefined<AriaAttributes, 'aria-label'>
}

export const FooterLink: FC<FooterLinkProps> = ({ children, href = '#', ariaLabel, className }) => (
  <a
    href={href}
    aria-label={ariaLabel}
    className={`w-full h-full max-h-[35px] max-w-[35px] p-1 ${className}`}>
    {children}
  </a>
)

export default FooterLink
