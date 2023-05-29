import { Router } from "express";
import { createUserController } from "../modules/users/useCases/createUser";
import { listUsersController } from "../modules/users/useCases/listUsers";
import { listOneUsersController } from "../modules/users/useCases/listOneUser";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

usersRoutes.get("/:id", (request, response) => {
  return listOneUsersController.handle(request, response);
});

usersRoutes.get("/", (request, response) => {
  return listUsersController.handle(request, response);
});

export { usersRoutes };
