import { Repository } from "typeorm";
import { Post } from "../entities/Post";
import { ICreatePostDto, IPostsRepository } from "./IPostsRepository";
import AppDataSource from "../../../database/data-source";

class PostsRepository implements IPostsRepository {
  private posts: Repository<Post>;

  constructor() {
    this.posts = AppDataSource.getRepository(Post);
  }

  async create({ title, description }: ICreatePostDto) {
   
    const post = this.posts.create({ title, description })

    await this.posts.save(post);
  }

  list() {
    return this.posts;
  }
}

export { PostsRepository };
