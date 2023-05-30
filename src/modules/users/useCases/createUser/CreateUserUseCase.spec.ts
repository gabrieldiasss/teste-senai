import { AppError } from "../../../../errors/AppError";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe("Create user", () => {
  beforeAll(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to create a new user", async () => {
    const user = {
      name: "User test",
    };

    await createUserUseCase.execute({
      name: user.name,
    });

    const userCreated = await usersRepositoryInMemory.findByName(user.name);

    expect(userCreated).toHaveProperty("id");
  });

  it("should be able to create user already exists", async () => {
    expect(async () => {
      const user = {
        name: "User test",
      };

      await createUserUseCase.execute({
        name: user.name,
      });

      await createUserUseCase.execute({
        name: user.name,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
