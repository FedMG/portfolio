import { cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CoverCarousel } from '@/app/home/components'
import type { Children } from '@/app/modules/schemas'

jest.mock('@/app/home/components/CoverImage.home.tsx', () => ({
  CoverImage: () => <img data-testid='mocked-cover-image' />
}))

jest.mock('@/app/modules/components/carousel/TrackedCarousel.tsx', () => ({
  TrackedCarousel: ({ children }: Children) => (
    <div data-testid='mocked-tracked-carousel'>{children} Mocked TrackedCarousel Component</div>
  )
}))

afterEach(cleanup)

describe('CoverCarousel Component', () => {
  describe('WHEN is mounted', () => {
    it('SHOULD be rendered correctly', () => {
      // Arrange
      const items = [
        {
          id: 0,
          url: 'image-url',
          alt: 'alt-text'
        }
      ]

      // Act
      const { container } = render(<CoverCarousel items={items} />)

      // Assert
      expect(container).toBeInTheDocument()
    })

    it('SHOULD match mocked components', () => {
      // Arrange
      const items = [
        {
          id: 0,
          url: 'image-url',
          alt: 'alt-text'
        },
        {
          id: 1,
          url: 'image-url',
          alt: 'alt-text'
        }
      ]

      // Act
      const { getByTestId, getAllByTestId } = render(<CoverCarousel items={items} />)
      const trackedCarousel = getByTestId('mocked-tracked-carousel')
      const images = getAllByTestId('mocked-cover-image')
      const [firstImage, secondImage] = images

      // Assert
      expect(trackedCarousel).toBeInTheDocument()

      expect(firstImage).toBeInTheDocument()
      expect(secondImage).toBeInTheDocument()
      expect(images).toHaveLength(2)
    })
  })
})
