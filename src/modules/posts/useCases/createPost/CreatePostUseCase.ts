import { IPostsRepository } from "../../repositories/IPostsRepository";

interface IRequest {
  title: string;
  description: string;
  content: string;
  author: string;
}

class CreatePostUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  execute({ title, description, content, author }: IRequest): void {
    this.postsRepository.create({ title, description, content, author });
  }
}

export { CreatePostUseCase };
