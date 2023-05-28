import { DeepPartial } from "typeorm";
import { Post } from "../entities/Post";

interface ICreatePostDto {
  title: string;
  description: string;
  user: string
}

interface IPostsRepository {
  create({ title, description, user }: ICreatePostDto): void;
  findByUser(user: string): Promise<Post>
  list(startDate?: string, endDate?: string | Date, myPosts?: string): Promise<Post[]>
}

export { IPostsRepository, ICreatePostDto };
