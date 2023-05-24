import { User } from "../model/User";

interface ICreateUserDto {
  name: string;
}

interface IUsersRepository {
  findByName(name: string): User;
  list(): User[];
  create({ name }: ICreateUserDto): void;
}

export { IUsersRepository, ICreateUserDto };
