'use client'

import { CoverImage } from './CoverImage'
import { TrackedCarousel } from '@/application/components/carousel'
import { withTrackerPosition } from '@/application/hocs'

import { SquareIcon } from '@/application/assets'
import { slides } from './data.ref'

const positionColor = {
  default: 'text-gray-900 fill-gray-900 hover:text-gray-800 hover:fill-gray-800',
  active: 'text-white fill-white'
}

export const CoverCarousel = (): JSX.Element => {
  const SquareIconsWihTrackerPosition = withTrackerPosition({
    IconComponent: SquareIcon,
    carouselLength: slides.length - 1,
    positionColor
  })

  return (
    <TrackedCarousel className='h-[340px]' ItemsTracker={SquareIconsWihTrackerPosition}>
      {slides.map(({ url, id, alt }) => (
        <CoverImage key={id} url={url} alt={alt} />
      ))}
    </TrackedCarousel>
  )
}
