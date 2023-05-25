import { Router } from "express";
import { CreatePostService } from "../modules/posts/services/CreatePostService";
import { PostsRepository } from "../modules/posts/repositories/PostsRepository";

const postsRoutes = Router();
const postsRepository = new PostsRepository();

postsRoutes.post("/", (request, response) => {
  const { title, description, content, author } = request.body;
  const createPostService = new CreatePostService(postsRepository);

  createPostService.execute({ title, description, content, author });

  return response.status(201).send();
});

postsRoutes.get("/", (request, response) => {
  const allPosts = postsRepository.list();

  return response.status(200).json(allPosts);
});

export { postsRoutes };
