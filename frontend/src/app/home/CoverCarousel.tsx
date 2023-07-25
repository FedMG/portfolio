'use client'

import { CoverImage } from './CoverImage'
import { TrackedCarousel } from '@/application/components/carousel'
import { withTrackerPosition } from '@/application/hocs'

import { SquareIcon as IconComponent } from '@/application/assets'
import type { Slides } from './data.ref'

const positionColor = {
  default: 'text-gray-900 fill-gray-900 hover:text-gray-800 hover:fill-gray-800',
  active: 'text-white fill-white'
}

interface CoverCarouselProps {
  items: Slides[]
}

export const CoverCarousel: React.FC<CoverCarouselProps> = ({ items }): JSX.Element => {
  const carouselLength = items.length - 1
  const SquareIconsWihTrackerPosition = withTrackerPosition({
    IconComponent,
    carouselLength,
    positionColor
  })

  return (
    <TrackedCarousel className='h-[340px]' ItemsTracker={SquareIconsWihTrackerPosition}>
      {items.map(({ url, id, alt }) => (
        <CoverImage key={id} src={url} alt={alt} />
      ))}
    </TrackedCarousel>
  )
}
