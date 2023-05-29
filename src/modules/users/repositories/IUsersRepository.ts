import { ICreateUserDto } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  listOne(id: string): Promise<User>;
  listAll(): Promise<User[]>
  findByName(name: string): Promise<User>
  create(data: ICreateUserDto): Promise<void>
}

export { IUsersRepository, ICreateUserDto };
