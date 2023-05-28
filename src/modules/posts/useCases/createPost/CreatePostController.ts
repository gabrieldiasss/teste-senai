import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";
import { z } from "zod";
import { Post } from "../../entities/Post";
import { DeepPartial } from "typeorm";

class CreatePostController {
  constructor(private createPostUseCase: CreatePostUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { user } = request.params as DeepPartial<Post>;

    const createUserSchema = z.object({
      title: z
        .string()
        .max(777, "Title exceeds the 777-character limit.")
        .nonempty("Title cannot be empty."),
      description: z
        .string()
        .max(777, "Description exceeds the 777-character limit.")
        .nonempty("description cannot be empty."),
    });

    const { title, description } = createUserSchema.parse(request.body);

    await this.createPostUseCase.execute({ title, description, user });
    return response.status(201).json();
  }
}

export { CreatePostController };
