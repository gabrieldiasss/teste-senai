import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string) {
    const listUser = await this.usersRepository.list(id);
    return listUser;
  }
}

export { ListUsersUseCase };
