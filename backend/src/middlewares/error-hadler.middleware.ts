import { StatusCodes } from 'http-status-codes'
import { ServiceUnvailableError } from '@/errors'
import type { Request, Response } from 'express'
import type { ValidationError, CastError, DuplicateKeyError } from './errors.schemas'

// later update it
export const errorHandlerMiddleware = (err: Error, _req: Request, res: Response) => {
  if (err.name === 'ValidationError') {
    return res.status(StatusCodes.BAD_REQUEST).json(
      Object.values((err as ValidationError).errors)
        .map(item => item.message)
        .join(',')
    )
  }

  if ((err as DuplicateKeyError).code === 11000) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: `The ${Object.keys(
        (err as DuplicateKeyError).keyValue
      )} is already in use, please choose another`
    })
  }

  if (err.name === 'CastError') {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `No item found with id : ${(err as CastError).value}` })
  }

  return res
    .status(
      (err instanceof ServiceUnvailableError && err.statusCode) || StatusCodes.INTERNAL_SERVER_ERROR
    )
    .json({
      msg: err.message || 'Internal Server Error, please try again'
    })
}
