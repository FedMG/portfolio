import 'express-async-errors'

// core
import path from 'path'
import favicon from 'serve-favicon'
import express from 'express'

// security
import cors from 'cors'
import helmet from 'helmet'

import rateLimiter from 'express-rate-limit'
import { errorHandlerMiddleware, notFound } from '@/middlewares'

// application
import { projects } from '@/routes'

// development
import morgan from 'morgan'

const app = express()

app.set('trust proxy', 1)
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100
  })
)

// https://???.vercel.app
const corsConfig = {
  origin: [''],
  optionsSuccessStatus: 200
}

app.use(favicon(path.join(__dirname, './public', 'rocket-logo.ico')))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors(corsConfig))
app.use(helmet())

app.use('/', express.static(path.join(__dirname, './public')))
app.use('/api/v1/projects', projects)

app.use(notFound)
app.use(errorHandlerMiddleware)

const PORT = process.env.SERVER_PORT || 5500
app.listen(PORT, () => console.log(`Listening port ${PORT}...`))
