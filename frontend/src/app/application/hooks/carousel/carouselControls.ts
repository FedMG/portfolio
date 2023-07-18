import type { CarouselItemsResult as CarouselItems } from './useCarouselEffect.hook'
import type { AddCallback } from '@/utilities'

type CarouselItemsParameter = AddCallback<CarouselItems>

export const nextControl = (carouselItems: CarouselItemsParameter): void => {
  const { items, container } = carouselItems()
  const style = container.style

  const firstItem = items[0] as HTMLElement
  style.transition = '550ms ease-in-out all'
  style.transform = `translateX(-${firstItem.offsetWidth}px)`

  container.addEventListener('transitionend', function updatePosition () {
    style.transition = 'none'
    style.transform = 'translateX(0)'

    container.appendChild(firstItem)
    container.removeEventListener('transitionend', updatePosition)
  })
}

export const previousControl = (carouselItems: CarouselItemsParameter): void => {
  const { items, container } = carouselItems()
  const lastItem = items[items.length - 1]
  container.insertBefore(lastItem, container.firstChild)
}
