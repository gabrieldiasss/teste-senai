import { RepostsRepository } from "../../repositories/RepostsRepository";
import { CreateRepostsController } from "./CreateRepostsController";
import { CreateRepostsUseCase } from "./CreateRepostsUseCase";

const repostRepository = new RepostsRepository()
const createRepostsUseCase = new CreateRepostsUseCase(repostRepository)
const createRepostsController = new CreateRepostsController(createRepostsUseCase)

export { createRepostsController }