import express from 'express'

const app = express()

app.get("/", (request, response) => {
    console.log("oi")
    return response.json({ message: "Hello boiiii" })
})

app.listen(3333, () => console.log("Server is running!"))