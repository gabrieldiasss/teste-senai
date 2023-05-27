import { Request, Response } from "express";
import { CreateRepostsUseCase } from "./CreateRepostsUseCase";

class CreateRepostsController {
  constructor(private createRepostsUseCase: CreateRepostsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;
    const { post, user } = request.params

    await this.createRepostsUseCase.execute({description, post, user})

    return response.status(201).send()
  }
}

export { CreateRepostsController };
