import { Router } from "express";
import { createPostController } from "../modules/posts/useCases/createPost";
import { listPostsController } from "../modules/posts/useCases/listPost";

const postsRoutes = Router();

postsRoutes.post("/:user/create", (request, response) => {
  return createPostController.handle(request, response)
});

postsRoutes.get("/", (request, response) => {
  return listPostsController.handle(request, response)
});

export { postsRoutes };
