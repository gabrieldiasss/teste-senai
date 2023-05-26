import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(id: string) {
    const users = this.usersRepository.list(id);

    return users;
  }
}

export { ListUsersUseCase };
