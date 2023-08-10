import type { AriaAttributes } from 'react'
import type { BaseComponentProps } from '../schemas'
import type { AddVoidCallback, DropUndefined } from '@/utilities'

interface ButtonProps extends BaseComponentProps {
  onClick: AddVoidCallback<undefined>
  ariaLabel?: DropUndefined<AriaAttributes, 'aria-label'>
  ariaLabelledby?: DropUndefined<AriaAttributes, 'aria-labelledby'>
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className, ariaLabel, ariaLabelledby }) => (
  <button
    onClick={onClick}
    className={`${className}`}
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledby}
  >
    {children}
  </button>
)
