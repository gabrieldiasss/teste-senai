import { ICreateUserDto, IUsersRepository } from "../../repositories/IUsersRepository";
import { UsersRepository } from "../../repositories/UsersRepository";

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, username }: ICreateUserDto): void {
   /*  const userAlreadyExists = this.usersRepository.findByName(name);

    if (userAlreadyExists) {
      throw new Error("Name already exists!");
    } */

    this.usersRepository.create({ name, username });
  }
}

export { CreateUserUseCase };
