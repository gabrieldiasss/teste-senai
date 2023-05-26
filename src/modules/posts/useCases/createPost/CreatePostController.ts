import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";

class CreatePostController {
  constructor(private createPostUseCase: CreatePostUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;
    const { user } = request.params as any

    this.createPostUseCase.execute({ title, description, user});

    return response.status(201).json();
  }
}

export { CreatePostController };
