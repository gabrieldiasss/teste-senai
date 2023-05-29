import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListOneUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string) {
    const listUser = await this.usersRepository.listOne(id);
    return listUser;
  }
}

export { ListOneUserUseCase };
