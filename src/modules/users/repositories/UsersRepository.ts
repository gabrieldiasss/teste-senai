import { User } from "../model/User";
import { ICreateUserDto } from "./IUsersRepository";

class UsersRepository {
  private users: User[] = [];

  constructor() {
    this.users = [];
  }

  create({ name }: ICreateUserDto): void {
    const user: User = new User();

    Object.assign(user, {
      name,
      created_at: new Date(),
      quantityPost: 0,
    });

    this.users.push(user);
  }

  findByName(name: string): User {
    const user = this.users.find((user) => user.name === name);
    return user;
  }

  list() {
    return this.users;
  }
}

export { UsersRepository };
