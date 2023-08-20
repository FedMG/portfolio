import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CoverCarousel } from '@/app/home/components'
import type { Children } from '@/app/modules/schemas'

jest.mock('@/app/home/components/CoverImage.home.tsx', () => ({
  CoverImage: () => <div data-testid='mocked-cover-image' />
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
      render(<CoverCarousel items={items} />)

      // Assert
      expect(screen.getByTestId('mocked-tracked-carousel')).toBeInTheDocument()
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
      render(<CoverCarousel items={items} />)
      const trackedCarousel = screen.getByTestId('mocked-tracked-carousel')
      const images = screen.getAllByTestId('mocked-cover-image')
      const [firstImage, secondImage] = images

      // Assert
      expect(trackedCarousel).toBeInTheDocument()

      expect(firstImage).toBeInTheDocument()
      expect(secondImage).toBeInTheDocument()
      expect(images).toHaveLength(2)
    })
  })
})
