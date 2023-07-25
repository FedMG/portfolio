import { useRef, useEffect, useState, useCallback, MutableRefObject } from 'react'
import { nextControl, previousControl } from './carouselControls'
import type { AddVoidCallback } from '@/utilities'

const SLIDE_INTERVAL = 6000

type CarouselReferenceType = HTMLDivElement | null

interface CarouselEffectResult {
  next: AddVoidCallback<undefined>
  prev: AddVoidCallback<undefined>
  ref: MutableRefObject<CarouselReferenceType>
  position: number
}

export interface CarouselItemsResult {
  items: HTMLCollection
  container: HTMLDivElement
}

export const useCarouselEffect = (): CarouselEffectResult => {
  const carousel = useRef<CarouselReferenceType>(null)
  const [itemPosition, setItemPosition] = useState(0)

  const carouselItems = (): CarouselItemsResult => {
    if (carousel.current == null) throw new Error('Carousel reference was not provided. Check ref property')
    return ({
      items: carousel.current.children,
      container: carousel.current
    })
  }

  const prevItemHandler = (): void => {
    const { items } = carouselItems()
    const isFirstPosition = itemPosition === 0
    const newPosition = isFirstPosition ? items.length - 1 : itemPosition - 1

    setItemPosition(newPosition)
    previousControl(carouselItems)
  }

  const nextItemHadler = useCallback(() => {
    const { items } = carouselItems()
    const isLastPosition = itemPosition === items.length - 1
    const newPosition = isLastPosition ? 0 : itemPosition + 1

    setItemPosition(newPosition)
    nextControl(carouselItems)
  }, [itemPosition])

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextItemHadler()
    }, SLIDE_INTERVAL)

    return () => clearInterval(autoplay)
  }, [itemPosition, nextItemHadler])

  return { prev: prevItemHandler, next: nextItemHadler, ref: carousel, position: itemPosition }
}
