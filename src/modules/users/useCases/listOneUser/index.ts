import { UsersRepository } from "../../repositories/UsersRepository";
import { ListOneUserController } from "./ListOneUserController";
import { ListOneUserUseCase } from "./ListOneUserUseCase";

const usersRepository = new UsersRepository();
const listUsersUseCase = new ListOneUserUseCase(usersRepository);
const listOneUsersController = new ListOneUserController(listUsersUseCase);

export { listOneUsersController };
