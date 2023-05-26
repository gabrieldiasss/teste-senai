import { IPostsRepository } from "../../repositories/IPostsRepository";

class ListPostUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  async execute(startDate: string, endDate: string) {
    const posts = await this.postsRepository.list(startDate, endDate);
    return posts;
  }
}

export { ListPostUseCase };
