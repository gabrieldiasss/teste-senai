import { Post } from "../entities/Post";

interface ICreatePostDto {
  title: string;
  description: string;
}

interface IPostsRepository {
  create({ title, description}: ICreatePostDto): void;
  list(): Promise<Post[]>
  listByQuery(startDate: string, endDate?: string | Date): Promise<Post[]>
}

export { IPostsRepository, ICreatePostDto };
