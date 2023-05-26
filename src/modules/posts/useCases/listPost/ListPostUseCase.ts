import { IPostsRepository } from "../../repositories/IPostsRepository";

class ListPostUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  async execute() {
    const posts = await this.postsRepository.list();
    return posts;
  }

  async executeByDate(startDate: string, endDate?: string) {
    const posts = await this.postsRepository.listByQuery(startDate, endDate);
    return posts;
  }
}

export { ListPostUseCase };
