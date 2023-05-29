import { Repository } from "typeorm";
import { User } from "../entities/User";
import { ICreateUserDto, IUsersRepository } from "./IUsersRepository";
import AppDataSource from "../../../database/data-source";

class UsersRepository implements IUsersRepository {
  private users: Repository<User>;

  constructor() {
    this.users = AppDataSource.getRepository(User);
  }

  async create({ name }: ICreateUserDto) {
    const user = this.users.create({
      name,
    });

    await this.users.save(user);
  }

  async findByName(name: string) {
    const alreadyExists = await this.users.findOne({ where: { name } });
    console.log(alreadyExists);

    return alreadyExists;
  }

  async listOne(id: string) {
    const listUser = await this.users.findOne({
      where: { id },
      relations: {
        posts: true,
        comments: true,
        reposts: true,
      },
      order: {
        created_at: "DESC",
      },
    });
    return listUser;
  }

  async listAll() {
    const listAllUsers = await this.users.find()

    return listAllUsers
  }
}

export { UsersRepository };
