import { Router } from 'express'
import { UsersRepository } from '../repositories/UsersRepository'
import { CreateUserService } from '../services/CreateUserService'

const usersRoutes = Router()
const usersRepository = new UsersRepository()

usersRoutes.post("/", (request, response) => {
    const { name } = request.body

    const createUserService = new CreateUserService(usersRepository)

    createUserService.execute(name)

    return response.status(201).send()
})

usersRoutes.get("/", (request, response) => {
    const all = usersRepository.list()

    return response.json(all)
})

export { usersRoutes }