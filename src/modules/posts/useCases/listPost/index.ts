import { PostsRepository } from "../../repositories/PostsRepository";
import { ListPostController } from "./ListPostController";
import { ListPostUseCase } from "./ListPostUseCase";

const listPostRepository = new PostsRepository()
const listPostsUseCase = new ListPostUseCase(listPostRepository)
const listPostsController = new ListPostController(listPostsUseCase)

export { listPostsController }