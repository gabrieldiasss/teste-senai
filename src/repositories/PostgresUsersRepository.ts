import { User } from "../model/User";
import { ICreateUserDto, IUsersRepository } from "./IUsersRepository";

class PostgresUsersRepository implements IUsersRepository {
  findByName(name: string): User {
    console.log(this.findByName);
    return null;
  }
  list(): User[] {
    return null;
  }
  create({ name }: ICreateUserDto): void {
    console.log(name);
  }
}

export { PostgresUsersRepository }