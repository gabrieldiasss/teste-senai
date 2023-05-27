import { Router } from "express";
import { createCommentController } from "../modules/comment/useCases/createComment";

const commentsRoutes = Router();

commentsRoutes.post("/:post/create/:user", (request, response) => {
  return createCommentController.handle(request, response)
});

export { commentsRoutes };
