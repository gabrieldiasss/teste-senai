import { IUsersRepository } from "../../repositories/IUsersRepository";

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(name: string): void {
    const userAlreadyExists = this.usersRepository.findByName(name);

    if (userAlreadyExists) {
      throw new Error("Name already exists!");
    }

    this.usersRepository.create({ name });
  }
}

export { CreateUserUseCase };
