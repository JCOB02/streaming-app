import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
app.use(cors({ origin: true, credentials: true }))
app.use(express.json())

app.use(morgan("dev"))

export default app;