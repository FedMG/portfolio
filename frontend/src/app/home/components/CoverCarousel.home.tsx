'use client'

import { TrackedCarousel } from "@/app/modules/components/carousel"
import { withTrackerPosition } from "@/app/modules/hocs"
import { SquareIcon as IconComponent } from "@/app/modules/assets"
import { CoverImage } from "./CoverImage.home"
import { Slides } from "../data.ref"

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
