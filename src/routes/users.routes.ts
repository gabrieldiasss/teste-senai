import { Router } from 'express'
import { UsersRepository } from '../repositories/UsersRepository'

const usersRoutes = Router()
const usersRepository = new UsersRepository()

usersRoutes.post("/", (request, response) => {
    const { name } = request.body

    const userAlreadyExists = usersRepository.findByName(name)

    if(userAlreadyExists) {
        return response.status(400).json({ error: "User already exists!" })
    }

    usersRepository.create({ name })

    return response.status(201).send()
})

usersRoutes.get("/", (request, response) => {
    const all = usersRepository.list()

    return response.json(all)
})

export { usersRoutes }