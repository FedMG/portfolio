// core
import express from 'express'

// security
// import cors from 'cors'

// application
import { projects } from './routes'

// development
import morgan from 'morgan'

const app = express()

// https://astradev.vercel.app
// const corsConfig = {
//   origin: [ '' ],
//   optionsSuccessStatus: 200
// }

app.use(express.json())
app.use(morgan('dev'))
// app.use(cors(corsConfig))

app.use('/api/v1/projects', projects)

const PORT = process.env.SERVER_PORT || 5500
app.listen(PORT, () => console.log(`Listening port ${PORT}...`))
