import { Request, Response } from "express";
import { CreateCommentUseCase } from "./CreateCommentUseCase";
import { Comment } from "../../entities/Comment";
import { DeepPartial } from "typeorm";

class CreateCommentController {
  constructor(private createCommentUseCase: CreateCommentUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { text } = request.body;
    const { post } = request.params

    await this.createCommentUseCase.execute({ text, post });

    return response.status(201).json();
  }
}

export { CreateCommentController };
