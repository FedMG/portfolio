import { Button } from '../Button'

import type { AriaAttributes } from 'react'
import type { BaseComponentProps } from '../../schemas'
import type { AddVoidCallback, DropUndefined } from '@/utilities'

interface CarouselButtonProps extends BaseComponentProps {
  onClick: AddVoidCallback<undefined>
  ariaLabel: DropUndefined<AriaAttributes, 'aria-label'>
}

export const CarouselButton: React.FC<CarouselButtonProps> = ({ onClick, ariaLabel, className, children }) => (
  <div
    className={`text-white ${className} group/boxleft cursor-pointer hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%]`}
  >
    <Button onClick={onClick} className='group/left group/right' ariaLabel={ariaLabel}>{children}</Button>
  </div>
)
