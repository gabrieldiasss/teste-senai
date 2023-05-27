import { Request, Response } from "express";
import { CreateCommentUseCase } from "./CreateCommentUseCase";
import { Comment } from "../../entities/Comment";
import { DeepPartial } from "typeorm";
import { z } from "zod";

class CreateCommentController {
  constructor(private createCommentUseCase: CreateCommentUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { post, user } = request.params as DeepPartial<Comment>

    const createUserSchema = z.object({
      text: z.string().max(777, "Comment exceeds the 777-character limit.").nonempty("Comment cannot be empty."),
    });

    const { text } = createUserSchema.parse(request.body)

    await this.createCommentUseCase.execute({ text, post, user });

    return response.status(201).json();
  }
}

export { CreateCommentController };
