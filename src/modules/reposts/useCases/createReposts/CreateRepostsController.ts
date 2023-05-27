import { Request, Response } from "express";
import { CreateRepostsUseCase } from "./CreateRepostsUseCase";
import { z } from "zod";

class CreateRepostsController {
  constructor(private createRepostsUseCase: CreateRepostsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { post, user } = request.params

    const createUserSchema = z.object({
      description: z.string().max(777, "Description repost exceeds the 777-character limit.").nonempty("Description cannot be empty."),
    });

    const { description } = createUserSchema.parse(request.body)

    await this.createRepostsUseCase.execute({description, post, user})

    return response.status(201).send()
  }
}

export { CreateRepostsController };
