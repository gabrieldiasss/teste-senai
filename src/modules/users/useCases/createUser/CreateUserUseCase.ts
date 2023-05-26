import { AppError } from "../../../../errors/AppError";
import {
  ICreateUserDto,
  IUsersRepository,
} from "../../repositories/IUsersRepository";

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, username }: ICreateUserDto) {
    try {
      const userAlreadyExists = await this.usersRepository.findByName(name);

      if (!userAlreadyExists) {
        await this.usersRepository.create({ name, username });
      }
    } catch (err) {
      throw new AppError("Name already exists!");
    }
  }
}

export { CreateUserUseCase };
