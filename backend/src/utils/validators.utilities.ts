export const isNumber = (num: number) => typeof num === 'number' && !isNaN(num)
export const isObject = (value: unknown) => typeof value === 'object' && value !== null
export const isArrayOfObjects = (value: unknown[]) =>
  Array.isArray(value) && value.length > 0 && isObject(value[0])
