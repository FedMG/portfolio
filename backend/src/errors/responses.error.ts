import { StatusCodes } from 'http-status-codes'

class NotFoundError extends Error {
  statusCode: number

  constructor(message: string) {
    super(message)
    this.statusCode = StatusCodes.NOT_FOUND
  }
}

class BadRequestError extends Error {
  statusCode: number

  constructor(message: string) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

class UnauthenticatedError extends Error {
  statusCode: number

  constructor(message: string) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

class ServiceUnvailableError extends Error {
  statusCode: number

  constructor(message: string) {
    super(message)
    this.statusCode = StatusCodes.SERVICE_UNAVAILABLE
  }
}

export { NotFoundError, BadRequestError, UnauthenticatedError, ServiceUnvailableError }
