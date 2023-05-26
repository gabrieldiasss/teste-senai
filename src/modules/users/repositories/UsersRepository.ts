import { Repository } from "typeorm";
import { User } from "../entities/User";
import { ICreateUserDto, IUsersRepository } from "./IUsersRepository";
import AppDataSource from "../../../database/data-source";

class UsersRepository implements IUsersRepository {
  private users: Repository<User>;

  constructor() {
    this.users = AppDataSource.getRepository(User);
  }

  async create({ name, username }: ICreateUserDto) {
    const user = await this.users.create({
      name,
      username,
    });

    await this.users.save(user);
  }

  async findByName(username: string) {
    const user = await this.users.findOne({ where: { username } });
    return user;
  }

  async list(id: string) {
    const user = await this.users.findOneBy({
      id,
    });
    return user;
  }
}

export { UsersRepository };
