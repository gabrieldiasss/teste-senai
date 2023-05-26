import { Between, Raw, Repository } from "typeorm";
import { Post } from "../entities/Post";
import { ICreatePostDto, IPostsRepository } from "./IPostsRepository";
import AppDataSource from "../../../database/data-source";

class PostsRepository implements IPostsRepository {
  private posts: Repository<Post>;

  constructor() {
    this.posts = AppDataSource.getRepository(Post);
  }

  async create({ title, description }: ICreatePostDto) {
    const post = this.posts.create({ title, description });

    await this.posts.save(post);
  }

  async list() {
    const allPosts = await this.posts.find({
      order: {
        created_at: "DESC",
      },
      take: 10,
    });

    console.log(allPosts);

    return allPosts;
  }

  async listByQuery(startDate: string, endDate = new Date()) {

    const allPosts = await this.posts.find({
      order: {
        created_at: "DESC",
      },
      take: 10,
      where: {
        created_at: Between(startDate, String(endDate)),
      },
    });

    console.log(allPosts);

    return allPosts;
  }
}

export { PostsRepository };
