import { UsersRepository } from "../../repositories/UsersRepository";

class ListUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute() {
    const listUser = await this.usersRepository.listAll();
    return listUser;
  }
}

export { ListUsersUseCase };
