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

  async list(startDate: string, endDate = new Date()) {
    if (!startDate || !endDate) {
      const allPosts = await this.posts.find({
        order: {
          created_at: "DESC",
        },
        take: 10,
      });

      return allPosts;
    }

    const allPosts = await this.posts.find({
      order: {
        created_at: "DESC",
      },
      take: 10,
      where: {
        created_at: Between(startDate, String(endDate)),
      },
    });

    return allPosts;
  }
}

export { PostsRepository };
