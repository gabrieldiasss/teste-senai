import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  constructor(private listUserUseCase: ListUsersUseCase) {}

  async handle(request: Request, response: Response): Response {
    const all = await this.listUserUseCase.execute(request.params.id);
    console.log(all)
    return response.json(all);
  }
}

export { ListUsersController };
