import { LessThan, Repository } from "typeorm";
import { User } from "../entities/User";
import { ICreateUserDto, IUsersRepository } from "./IUsersRepository";
import AppDataSource from "../../../database/data-source";

class UsersRepository implements IUsersRepository {
  private users: Repository<User>;

  constructor() {
    this.users = AppDataSource.getRepository(User);
  }

  async create({ name }: ICreateUserDto) {
    const user = await this.users.create({
      name
    });

    await this.users.save(user);
  }

  async findByName(name: string) {
    const user = await this.users.findOne({ where: { name } });
    return user;
  }

  async list(id: string) {
    const user = await this.users.findOne({
      where: { id },
      relations: ['posts'],
      order: {
        created_at: "DESC",
      }
    });
    return user;
  }
}

export { UsersRepository };
