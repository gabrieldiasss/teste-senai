import { DeepPartial, QueryFailedError } from "typeorm";
import { Post } from "../../entities/Post";
import { IPostsRepository } from "../../repositories/IPostsRepository";
import { AppError, ErrorTypeOrm } from "../../../../errors/AppError";
import { Response } from "express";

interface IRequest {
  title: string;
  description: string;
  user: string;
}

class CreatePostUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  async execute({ title, description, user }: IRequest): Promise<void> {
    await this.postsRepository.create({ title, description, user });
  }
}

export { CreatePostUseCase };
