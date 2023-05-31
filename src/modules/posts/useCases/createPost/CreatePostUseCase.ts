import { DeepPartial } from "typeorm";
import { IPostsRepository } from "../../repositories/IPostsRepository";
import { Post } from "../../entities/Post";

interface IRequest {
  title: string;
  description: string;
  user: DeepPartial<Post>;
}

class CreatePostUseCase {
  constructor(private postsRepository: IPostsRepository) {}
  async execute({ title, description, user }: IRequest): Promise<void> {

    await this.postsRepository.create({ title, description, user });
  }
}

export { CreatePostUseCase };
