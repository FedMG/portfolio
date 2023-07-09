import Link from 'next/link'

import type { AriaAttributes } from 'react'
import type { DropUndefined } from '@/utilities'
import type { BaseComponentProps } from '../schemas'

export interface LinkButtonProps extends BaseComponentProps {
  href: string
  ariaLabel: DropUndefined<AriaAttributes, 'aria-label'>
}

export const LinkButton: React.FC<LinkButtonProps> = ({ children, href, className, ariaLabel }) => {
  return (
    <Link href={href} className={className} role='button' aria-label={ariaLabel}>
      {children}
    </Link>
  )
}
