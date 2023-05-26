import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username } = request.body;

    await this.createUserUseCase.execute({ name, username });

    return response.status(201).send();
  }
}

export { CreateUserController };
