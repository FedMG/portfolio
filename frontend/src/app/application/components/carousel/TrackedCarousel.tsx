'use client'

import { useCarouselEffect } from '@/application/hooks'
import { CarouselButton } from './CarouselButton'
import { LeftArrowIcon, RightArrowIcon } from '@/application/assets'

import type { BaseComponentProps } from '@/application/schemas'
import type { EnhancedIconComponentProps } from '@/application/hocs'
import type { AddReactComponent } from '@/utilities'

const defaultBtnIcons = {
  left: <LeftArrowIcon className='rounded-md w-8 h-8 p-1 stroke-4 group-active/left:bg-gray-800 fill-white group-hover/left:fill-gray-300 group-active/left:fill-white' />,
  right: <RightArrowIcon className='rounded-md w-8 h-8 p-1 stroke-4 group-active/right:bg-gray-800 fill-white group-hover/right:fill-gray-300 group-active/right:fill-white' />
}

interface TrackedCarouselProps extends BaseComponentProps {
  btnIcons?: typeof defaultBtnIcons
  ItemsTracker: AddReactComponent<EnhancedIconComponentProps>
}

export const TrackedCarousel: React.FC<TrackedCarouselProps> = ({ children, className, btnIcons = defaultBtnIcons, ItemsTracker }) => {
  const { prev, next, ref, position } = useCarouselEffect()
  return (
    <div className={`max-w-full h-[350px] ${className} w-full m-auto select-none relative group block overflow-x-hidden`}>
      <div className='h-full flex flex-nowrap' ref={ref}>
        {children}
      </div>

      <CarouselButton onClick={prev} className='left-5' ariaLabel='Slide item to the left'>
        {btnIcons.left}
      </CarouselButton>
      <CarouselButton onClick={next} className='right-5' ariaLabel='Slide item to the right'>
        {btnIcons.right}
      </CarouselButton>

      <ItemsTracker position={position} />
    </div>
  )
}
