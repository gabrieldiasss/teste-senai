import { Router } from "express";
import { createRepostsController } from "../modules/reposts/useCases/createReposts";

const repostsRoutes = Router();

repostsRoutes.post("/", (request, response) => {
  return createRepostsController.handle(request, response)
});

export { repostsRoutes };
