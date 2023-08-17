// later update it
export interface ValidationError extends Error {
  name: 'ValidationError'
  errors: { [field: string]: { message: string } }
}

export interface DuplicateKeyError extends Error {
  code: number
  keyValue: { [field: string]: string }
}

export interface CastError extends Error {
  name: 'CastError'
  value: string
}
