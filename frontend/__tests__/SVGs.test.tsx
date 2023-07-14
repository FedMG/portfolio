import { SVGElement } from '@/app/application/components'

import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

afterEach(cleanup)

describe('SVGElement Compound Component', () => {
  describe('WHEN is mounted and props are passed', () => {
    it('SHOULD renders a SVG correctly', async () => {
      // Arrange
      const value = 'null'
      const role = 'img'

      // Act
      render(
        <SVGElement className={value} role={role} viewBox={value}>
          {value}
        </SVGElement>
      )
      const svg = screen.getByRole(role)

      // Assert
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('class', value)
      expect(svg).toHaveAttribute('role', role)
      expect(svg).toHaveAttribute('viewBox', value)
    })
  })

  describe('WHEN Path is mounted', () => {
    it('SHOULD renders a SVG with a Path correctly', async () => {
      // Arrange
      const value = 'null'
      const role = 'img'

      // Act
      render(
        <SVGElement className={value} role={role} viewBox={value}>
          <SVGElement.Path d={value} />
        </SVGElement>
      )
      const svg = screen.getByRole(role)
      const path = svg.querySelector('path')

      // Assert
      expect(path).toBeInTheDocument()
      expect(path).toHaveAttribute('d', value)
    })
  })

  describe('WHEN Title is mounted and prop is passed', () => {
    it('SHOULD renders a SVG with a Title correctly', async () => {
      // Arrange
      const value = 'null'
      const role = 'img'
      const titleText = 'SVG Title'

      // Act
      render(
        <SVGElement className={value} role={role} viewBox={value}>
          <SVGElement.Title title={titleText} />
        </SVGElement>
      )
      const title = screen.getByTitle(titleText)

      // Assert
      expect(title).toHaveTextContent(titleText)
    })
  })
})
