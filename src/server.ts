import "reflect-metadata"
import express from 'express'
import { usersRoutes } from './routes/users.routes'

const app = express()

import { createConnection } from './database/data-source'

createConnection()

app.use(express.json())

app.use('/users', usersRoutes)

app.get("/", (request, response) => {
    console.log("ffcff")
    return response.json({ message: "Hello zubiru" })
})

app.listen(3333, () => console.log("Server is running!"))