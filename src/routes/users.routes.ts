import { Router } from 'express'

const usersRoutes = Router()

const users = []

usersRoutes.post("/users", (request, response) => {
    const { name } = request.body

    users.push({
        name
    })

    return response.status(201)
})

export { usersRoutes }