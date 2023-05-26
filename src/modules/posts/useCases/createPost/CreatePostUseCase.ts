import { IPostsRepository } from "../../repositories/IPostsRepository";

interface IRequest {
  title: string;
  description: string;
  user: string
}

class CreatePostUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  execute({ title, description, user }: IRequest): void {
    this.postsRepository.create({ title, description, user });
  }
}

export { CreatePostUseCase };
