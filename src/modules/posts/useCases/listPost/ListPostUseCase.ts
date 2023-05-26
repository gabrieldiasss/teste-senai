import { IPostsRepository } from "../../repositories/IPostsRepository";

class ListPostUseCase {
    constructor(private postsRepository: IPostsRepository) {}

    async execute() {
        const posts = await this.postsRepository.list()

        return posts
    }
}

export { ListPostUseCase }