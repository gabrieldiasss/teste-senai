import { Router } from "express";
import { createPostController } from "../modules/posts/useCases/createPost";
import { listPostsController } from "../modules/posts/useCases/listPost";

const postsRoutes = Router();

postsRoutes.post("/", (request, response) => {
  return createPostController.handle(request, response)
});

postsRoutes.get("/", (request, response) => {
  return listPostsController.handle(request, response)
});

postsRoutes.get("/date", (request, response) => {
  return listPostsController.handleByDate(request, response)
});

export { postsRoutes };
