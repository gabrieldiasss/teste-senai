import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";

class CreatePostController {
  constructor(private createPostUseCase: CreatePostUseCase) {}

  handle(request: Request, response: Response): Response {
    const { title, description } = request.body;

    this.createPostUseCase.execute({ title, description });

    return response.status(201).send();
  }
}

export { CreatePostController };
