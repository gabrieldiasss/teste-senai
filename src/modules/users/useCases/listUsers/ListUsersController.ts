import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";
import { formattedDate } from "../../../../utils/format";

class ListUsersController {
  constructor(private listUserUseCase: ListUsersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const all = await this.listUserUseCase.execute(id);
    
    const countPosts = all.posts.length;
    const countReposts = all.reposts?.length;
    const countComments = all.comments?.length;
    const amountPosts = countPosts + countReposts + countComments

    return response.json({
      ...all,
      created_at: formattedDate(all.created_at),
      amountPosts,
    });
  }
}

export { ListUsersController };
