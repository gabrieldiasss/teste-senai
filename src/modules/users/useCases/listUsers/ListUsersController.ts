import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  constructor(private listUserUseCase: ListUsersUseCase) {}

  async handle(request: Request, response: Response) {
    const allUsers = await this.listUserUseCase.execute();

    return response.status(200).json({ allUsers });
  }
}

export { ListUsersController };
