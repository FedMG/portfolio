import { act, cleanup, render, renderHook, screen } from '@testing-library/react'
import { useCarouselEffect } from '@/app/modules/hooks'
import { ForwardedRef, forwardRef } from 'react'

afterEach(cleanup)

describe('useCarouselEffect hook', () => {
  describe('WHEN is called', () => {
    it('SHOULD returns variables intialized with default values', () => {
      // Arrange
      // Act
      const { result } = renderHook(() => useCarouselEffect())
      const { ref, position, next, prev } = result.current

      // Assert
      expect(ref).toBeDefined()
      expect(typeof next).toBe('function')
      expect(typeof prev).toBe('function')
      expect(position).toBe(0)
    })
  })
  describe('WHEN "ref" is not set correctly and a click event is triggered', () => {
    it('SHOULD throw an error', () => {
      // Arrange
      const errorMessage = 'Carousel reference was not provided. Check ref property'

      // Act
      const { result } = renderHook(() => useCarouselEffect())
      const { next, prev } = result.current

      const eventNextResponse = (): void => act(() => next())
      const eventPrevResponse = (): void => act(() => prev())

      // Assert
      expect(eventNextResponse).toThrow(errorMessage)
      expect(eventPrevResponse).toThrow(errorMessage)
    })
  })

  describe('WHEN "ref" is set correctly', () => {
    it('SHOULD returns a reference of a HTMLElement', () => {
      // Arrange
      const MockedComponent = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
        return <div ref={ref} data-testid='container'></div>
      })
      MockedComponent.displayName = 'MockedComponent'

      // Act
      const { result } = renderHook(() => useCarouselEffect())
      const { ref } = result.current
      render(<MockedComponent ref={ref} />)
      const container = screen.getByTestId('container')

      // Assert
      expect(ref.current).toContainElement(container)
    })
  })

  describe('WHEN a "prev" or "next" click Events are triggered', () => {
    it('SHOULD decrement or increment correctly in a loop the "position" variable', () => {
      // Arrange
      const position = ['position 0', 'position 1']

      const MockedComponent = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
        return (
          <div ref={ref}>
            <span>{position[0]}</span>
            <span>{position[1]}</span>
          </div>
        )
      })
      MockedComponent.displayName = 'MockedComponent'

      // Act
      const { result } = renderHook(() => useCarouselEffect())
      render(<MockedComponent ref={result.current.ref} />)

      // Assert
      expect(result.current.position).toBe(0)

      act(() => result.current.next())
      expect(result.current.position).toBe(1)

      act(() => result.current.next())
      expect(result.current.position).toBe(0)

      act(() => result.current.prev())
      expect(result.current.position).toBe(1)
    })
  })

  describe('WHEN the user triggers a "prev" or "next" click events', () => {
    it('SHOULD slide correctly the first item to subsequent position', () => {
      // Arrange
      const position = ['position 0', 'position 1']

      const MockedComponent = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
        return (
          <div ref={ref}>
            <span data-testid='child-items'>{position[0]}</span>
            <span data-testid='child-items'>{position[1]}</span>
          </div>
        )
      })
      MockedComponent.displayName = 'MockedComponent'

      // Act
      const { result } = renderHook(() => useCarouselEffect())
      render(<MockedComponent ref={result.current.ref} />)

      // Assert
      expect(result.current.position).toBe(0)
      expect(screen.getAllByTestId('child-items')[0]).toHaveTextContent(position[0])

      act(() => result.current.next())
      expect(result.current.position).toBe(1)
      expect(screen.getAllByTestId('child-items')[1]).toHaveTextContent(position[1])

      act(() => result.current.next())
      expect(result.current.position).toBe(0)
      expect(screen.getAllByTestId('child-items')[0]).toHaveTextContent(position[0])

      act(() => result.current.prev())
      expect(result.current.position).toBe(1)
      expect(screen.getAllByTestId('child-items')[0]).toHaveTextContent(position[1])
    })
  })
})
