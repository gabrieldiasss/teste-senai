import { DeepPartial } from "typeorm";
import { Post } from "../../entities/Post";
import { IPostsRepository } from "../../repositories/IPostsRepository";

interface IRequest {
  title: string;
  description: string;
  user: DeepPartial<Post>
}

class CreatePostUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  execute({ title, description, user }: IRequest): void {
    this.postsRepository.create({ title, description, user });
  }
}

export { CreatePostUseCase };
