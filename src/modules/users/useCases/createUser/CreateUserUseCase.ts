import { AppError } from "../../../../errors/AppError";
import {
  ICreateUserDto,
  IUsersRepository,
} from "../../repositories/IUsersRepository";

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name }: ICreateUserDto) {
    const userAlreadyExists = await this.usersRepository.findByName(name);

    if (userAlreadyExists) {
      throw new AppError("Name already exists!");
    }

    await this.usersRepository.create({ name });
  }
}

export { CreateUserUseCase };
