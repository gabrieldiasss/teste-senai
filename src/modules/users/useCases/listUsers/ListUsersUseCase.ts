import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute() {
    const listUser = await this.usersRepository.listAll();
    return listUser;
  }
}

export { ListUsersUseCase };
