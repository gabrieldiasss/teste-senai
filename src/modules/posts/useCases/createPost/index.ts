import { PostsRepository } from "../../repositories/PostsRepository";
import { CreatePostController } from "./CreatePostController";
import { CreatePostUseCase } from "./CreatePostUseCase";

const postsRepository = new PostsRepository()
const createPostsUseCase = new CreatePostUseCase(postsRepository)
const createPostController = new CreatePostController(createPostsUseCase)

export { createPostController }