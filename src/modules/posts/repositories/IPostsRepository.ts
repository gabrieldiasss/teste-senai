import { Post } from "../entities/Post";

interface ICreatePostDto {
  title: string;
  description: string;
}

interface IPostsRepository {
  create({ title, description}: ICreatePostDto): void;
}

export { IPostsRepository, ICreatePostDto };
