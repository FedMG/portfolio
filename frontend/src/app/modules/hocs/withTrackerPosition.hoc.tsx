import { generateRange } from '../utils'

import type { BaseComponentProps } from '../schemas'
import type { AddReactComponent } from '@/utilities'
import type { FC } from 'react'

interface IconComponentProps extends Pick<BaseComponentProps, 'className'> {}

interface WithTrackerPositionParams {
  IconComponent: AddReactComponent<IconComponentProps>
  carouselLength: number
  positionColor: {
    default: string
    active: string
  }
}

export interface EnhancedIconComponentProps {
  position: number
}

enum COLORSCHEME {
  DEFAULT = 'default',
  ACTIVE = 'active'
}

export function withTrackerPosition ({ IconComponent, carouselLength, positionColor }: WithTrackerPositionParams): FC<EnhancedIconComponentProps> {
  const range = generateRange(0, carouselLength)
  const EnhancedIconComponent: FC<EnhancedIconComponentProps> = ({ position }) => (
    <div className='flex justify-center absolute top-[90%] w-full'>
      {range.map(id => (
        <IconComponent
          key={id}
          className={`${id === position ? positionColor[COLORSCHEME.ACTIVE] : positionColor[COLORSCHEME.DEFAULT]} w-4 h-4`}
        />
      ))}
    </div>
  )
  return EnhancedIconComponent
}
