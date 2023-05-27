import { Between, FindManyOptions, FindOptions, Repository } from "typeorm";
import { Post } from "../entities/Post";
import { ICreatePostDto, IPostsRepository } from "./IPostsRepository";
import AppDataSource from "../../../database/data-source";

class PostsRepository implements IPostsRepository {
  private posts: Repository<Post>;

  constructor() {
    this.posts = AppDataSource.getRepository(Post);
  }

  async create({ title, description, user }: ICreatePostDto) {
    const post = this.posts.create({ title, description, user });

    await this.posts.save(post);
  }

  async list(startDate?: string, endDate?: string, myPosts?: string) {
    if (!startDate && !endDate && !myPosts) {
      const allPosts = await this.posts.find({
        order: {
          created_at: "DESC",
        },
        take: 10,
        relations: {
          comments: true,
          user: true,
          reposts: {
            user: true,
          },
        },
      });

      return allPosts;
    }

    let options: any = {
      where: [
        { created_at: Between(startDate, endDate) },
        { user: { id: myPosts } },
      ],
    };

    const allPosts = await this.posts.find({
      order: {
        created_at: "DESC",
      },
      relations: {
        comments: true,
        user: true,
        reposts: true,
      },
      take: 10,
      ...options,
    });

    return allPosts;
  }
}

export { PostsRepository };
