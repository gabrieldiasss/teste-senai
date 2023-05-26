import { Post } from "../entities/Post";
import { ICreatePostDto, IPostsRepository } from "./IPostsRepository";

class PostsRepository implements IPostsRepository {
  private posts: Post[];

  constructor() {
    this.posts = [];
  }

  create({ title, description, content, author }: ICreatePostDto): void {
    const post = new Post();

    Object.assign(post, {
      title,
      description,
      content,
      author,
      created_at: new Date(),
    });

    this.posts.push(post);
  }

  verifyIfExistsAccount(name: string): Post {
    const user = this.posts.find((post) => post.author === name);
    return user;
  }

  list() {
    return this.posts;
  }
}

export { PostsRepository };
