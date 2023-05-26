import { Request, Response } from "express";
import { ListPostUseCase } from "./ListPostUseCase";

class ListPostController {
  constructor(private listPostsUseCase: ListPostUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const users = await this.listPostsUseCase.execute();

    return response.json({users})
  }
}

export { ListPostController };
