import { DeepPartial } from "typeorm";
import { Repost } from "../entities/Repost";

interface ICreateRepostDto {
  description: string;
  post: DeepPartial<Repost>
  user: DeepPartial<Repost>
}

interface IRepostsRepository {
  create({ description, post, user }: ICreateRepostDto): Promise<void>;
}

export { IRepostsRepository, ICreateRepostDto };
