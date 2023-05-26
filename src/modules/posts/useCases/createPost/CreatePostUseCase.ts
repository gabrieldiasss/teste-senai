import { IPostsRepository } from "../../repositories/IPostsRepository";

interface IRequest {
  title: string;
  description: string;
}

class CreatePostUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  execute({ title, description }: IRequest): void {
    this.postsRepository.create({ title, description });
  }
}

export { CreatePostUseCase };
