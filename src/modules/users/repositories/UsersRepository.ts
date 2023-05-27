import { LessThan, Repository } from "typeorm";
import { User } from "../entities/User";
import { ICreateUserDto, IUsersRepository } from "./IUsersRepository";
import AppDataSource from "../../../database/data-source";
import { AppError } from "../../../errors/AppError";

class UsersRepository implements IUsersRepository {
  private users: Repository<User>;

  constructor() {
    this.users = AppDataSource.getRepository(User);
  }

  async create({ name }: ICreateUserDto) {
    const user = await this.users.create({
      name,
    });

    await this.users.save(user);
  }

  async findByName(name: string) {
    const alreadyExists = await this.users.findOne({ where: { name } });
    return alreadyExists;
  }

  async list(id: string) {
    const listUser = await this.users.findOne({
      where: { id },
      relations: {
        posts: true,
      },
      order: {
        created_at: "DESC",
      },
    });
    return listUser;
  }
}

export { UsersRepository };
