import { User } from "../model/User";
import { ICreateUserDto, IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[] = [];

  private static INSTANCE: UsersRepository

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if(!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository()
    }

    return UsersRepository.INSTANCE
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
