import { Router } from "express";
import { createPostController } from "../modules/posts/useCases/createPost";

const postsRoutes = Router();

postsRoutes.post("/", (request, response) => {
  return createPostController.handle(request, response)
});

/* postsRoutes.get("/", (request, response) => {
  const allPosts = postsRepository.list();

  return response.status(200).json(allPosts);
}); */

export { postsRoutes };
