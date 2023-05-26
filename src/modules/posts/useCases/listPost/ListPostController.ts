import { Request, Response } from "express";
import { ListPostUseCase } from "./ListPostUseCase";

class ListPostController {
  constructor(private listPostsUseCase: ListPostUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {

    const { startDate, endDate } = request.query

    const users = await this.listPostsUseCase.execute(startDate as string, endDate as string);

    return response.json({users})
  }
}

export { ListPostController };
