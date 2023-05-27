import { Router } from "express";
import { createRepostsController } from "../modules/reposts/useCases/createReposts";

const repostsRoutes = Router();

repostsRoutes.post("/:post/create", (request, response) => {
  return createRepostsController.handle(request, response)
});

export { repostsRoutes };
