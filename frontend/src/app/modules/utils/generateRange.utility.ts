export const generateRange = (start: number, end: number): number[] => {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
}
