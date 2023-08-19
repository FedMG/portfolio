import { StatusCodes } from 'http-status-codes'
import type { Request, Response } from 'express'

export const notFound = (_req: Request, res: Response) =>
  res.status(StatusCodes.NOT_FOUND).send('This route does not exist')
