import { Between, QueryFailedError, Repository } from "typeorm";
import { Post } from "../entities/Post";
import { ICreatePostDto, IPostsRepository } from "./IPostsRepository";
import AppDataSource from "../../../database/data-source";
import { AppError } from "../../../errors/AppError";

class PostsRepository implements IPostsRepository {
  private posts: Repository<Post>;

  constructor() {
    this.posts = AppDataSource.getRepository(Post);
  }

  async create({ title, description, user }: ICreatePostDto) {
    try {
      const post = this.posts.create({ title, description, user });

      await this.posts.save(post);
    } catch (error) {
      if (
        error instanceof QueryFailedError &&
        error.message.includes("invalid input syntax for type uuid")
      ) {
        throw new AppError(
          "The provided ID does not exist. Please double-check the ID and try again.",
          400
        );
      }
    }
  }

  async findByUser(user: string) {
    const alreadyExists = await this.posts.findOne({
      where: { user: { id: user } },
    });
    return alreadyExists;
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

    const options = {
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
