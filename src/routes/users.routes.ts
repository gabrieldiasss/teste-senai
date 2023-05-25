import { Router } from "express";
import { createUserController } from "../modules/users/useCases/createUser";
import { listUsersController } from "../modules/users/useCases/listUsers";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response)
});

usersRoutes.get("/", (request, response) => {
  return listUsersController.handle(request, response)
});

export { usersRoutes };
