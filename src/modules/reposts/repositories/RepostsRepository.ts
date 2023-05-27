import { Repository } from "typeorm";
import { Repost } from "../entities/Repost";
import AppDataSource from "../../../database/data-source";
import { ICreateRepostDto, IRepostsRepository } from "./IRepostsRepository";

class RepostsRepository implements IRepostsRepository {
  private reposts: Repository<Repost>;

  constructor() {
    this.reposts = AppDataSource.getRepository(Repost);
  }

  async create({ description, post, user }: ICreateRepostDto): Promise<void> {
    const repost = this.reposts.create({ description, post, user });

    await this.reposts.save(repost);
  }
}

export { RepostsRepository };
