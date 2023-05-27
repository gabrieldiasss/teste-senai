import { IPostsRepository } from "../../repositories/IPostsRepository";

class ListPostUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  async execute(startDate?: string, endDate?: string, myPosts?: string) {
    const posts = await this.postsRepository.list(startDate, endDate, myPosts);
    return posts;
  }
}

export { ListPostUseCase };
