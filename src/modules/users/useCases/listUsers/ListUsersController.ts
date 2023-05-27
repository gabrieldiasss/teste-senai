import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";
import { formattedDate } from "../../../../utils/format";

class ListUsersController {
  constructor(private listUserUseCase: ListUsersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listUserUseCase.execute(request.params.id);

    const countPost = all.posts.length;

    return response.json({
      ...all,
      created_at: formattedDate(all.created_at),
      amountPosts: countPost,
    });
  }
}

export { ListUsersController };
