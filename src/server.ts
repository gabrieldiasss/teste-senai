import "reflect-metadata"
import express from 'express'

const app = express()

import { createConnection } from './database'

createConnection()

app.get("/", (request, response) => {
    console.log("oi")
    return response.json({ message: "Hello boiiii" })
})

app.listen(3333, () => console.log("Server is running!"))