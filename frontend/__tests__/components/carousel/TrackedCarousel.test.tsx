import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { TrackedCarousel } from '@/app/application/components'
import { BaseComponentProps } from '@/app/application/schemas'

type Children = Pick<BaseComponentProps, 'children'>

jest.mock('@/app/application/components/carousel/CarouselButton.tsx', () => ({
  CarouselButton: ({ children }: Children) => (
    <button data-testid='mocked-carousel-button'>{children} Mocked CarouselButton Component</button>
  )
}))

jest.mock('@/app/application/assets', () => ({
  LeftArrowIcon: () => (
    <svg data-testid='mocked-left-arrow-icon'> Mocked LeftArrowIcon Component</svg>
  ),
  RightArrowIcon: () => (
    <svg data-testid='mocked-right-arrow-icon'> Mocked RightArrowIcon Component</svg>
  )
}))

jest.mock('@/app/application/hooks/carousel', () => ({
  useCarouselEffect: jest.fn(() => ({ increment: jest.fn() }))
}))

afterEach(cleanup)

describe('TrackedCarousel Component', () => {
  describe('WHEN is mounted and image element is passed as children', () => {
    it('SHOULD be rendered correctly and appears in the document', async () => {
      // Arrange
      const ItemsTracker = (): JSX.Element => <div />

      // Act
      render(
        <TrackedCarousel ItemsTracker={ItemsTracker} className=''>
          <img data-testid='stub-cover-image' />
        </TrackedCarousel>
      )

      // Assert
      expect(screen.getByTestId('stub-cover-image')).toBeInTheDocument()
    })
  })

  describe('WHEN is mounted and ItemsTracker is passed to props', () => {
    it('SHOULD be rendered correctly and it appears in the document', async () => {
      // Arrange
      const ItemsTracker = (): JSX.Element => <span data-testid='stub-items-tracker' />

      // Act
      render(
        <TrackedCarousel ItemsTracker={ItemsTracker} className=''>
          <img />
        </TrackedCarousel>
      )

      // Assert
      expect(screen.getByTestId('stub-items-tracker')).toBeInTheDocument()
    })
  })

  describe('WHEN is mounted and btnIcons property is not passed to props', () => {
    it('SHOULD be rendered correctly by using default values and appears in the document', async () => {
      // Arrange
      const ItemsTracker = (): JSX.Element => <span />

      // Act
      render(
        <TrackedCarousel ItemsTracker={ItemsTracker} className=''>
          <img />
        </TrackedCarousel>
      )
      const [prevButton, nextButton] = screen.getAllByTestId('mocked-carousel-button')

      // Assert
      expect(prevButton).toBeInTheDocument()
      expect(prevButton.firstChild?.nodeName).toBe('svg')
      expect(prevButton.children).toHaveLength(1)

      expect(nextButton).toBeInTheDocument()
      expect(nextButton.firstChild?.nodeName).toBe('svg')
      expect(nextButton.children).toHaveLength(1)
    })

    it('SHOULD match mocked CarouselButton, LeftArrowIcon, RightArrowIcon components', () => {
      // Arrange
      const ItemsTracker = (): JSX.Element => <span />

      // Act
      const { getAllByTestId, getByTestId } = render(
        <TrackedCarousel ItemsTracker={ItemsTracker} className=''>
          <img />
        </TrackedCarousel>
      )
      const [nextCarouselBtn, prevCarouselBtn] = getAllByTestId('mocked-carousel-button')
      const leftArrowIcon = getByTestId('mocked-left-arrow-icon')
      const rightArrowIcon = getByTestId('mocked-right-arrow-icon')

      // Assert
      expect(nextCarouselBtn).toBeInTheDocument()
      expect(prevCarouselBtn).toBeInTheDocument()

      expect(leftArrowIcon).toBeInTheDocument()
      expect(rightArrowIcon).toBeInTheDocument()
    })
  })
})
