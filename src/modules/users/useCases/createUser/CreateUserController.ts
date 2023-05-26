import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { z } from "zod";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const createUserSchema = z.object({
      name: z.string().max(14, "Name exceeds the 14-character limit.").nonempty("Name cannot be empty."),
    });

    const { name } = createUserSchema.parse(request.body)

    await this.createUserUseCase.execute({ name });

    return response.status(201).send();
  }
}

export { CreateUserController };
