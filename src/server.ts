import "reflect-metadata"
import express from 'express'
import { usersRoutes } from './routes/users.routes'

const app = express()

import { createConnection } from './database/data-source'
import { router } from "./routes"

createConnection()

app.use(express.json())

app.use(router)

app.listen(3333, () => console.log("Server is running!"))