import { Repository } from "typeorm";
import { Repost } from "../entities/Repost";
import AppDataSource from "../../../database/data-source";
import { ICreateRepostDto, IRepostsRepository } from "./IRepostsRepository";

class RepostsRepository implements IRepostsRepository {
  private reposts: Repository<Repost>;

  constructor() {
    this.reposts = AppDataSource.getRepository(Repost);
  }

  async create({ description, post }: ICreateRepostDto): Promise<void> {
    const repost = this.reposts.create({ description, post });

    console.log(post)

    await this.reposts.save(repost);
  }

  list(): void {
    console.log("Olá");
  }
}

export { RepostsRepository };
