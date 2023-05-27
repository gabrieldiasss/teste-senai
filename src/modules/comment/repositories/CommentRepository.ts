import { Repository } from "typeorm";
import AppDataSource from "../../../database/data-source";
import { Comment } from "../entities/Comment";
import { ICommentsRepository, ICreateCommentDto } from "./ICommentRepository";

class CommentRepository implements ICommentsRepository {
  private comments: Repository<Comment>;

  constructor() {
    this.comments = AppDataSource.getRepository(Comment);
  }

  async create({ text, post, user }: ICreateCommentDto) {
    const createComment = this.comments.create({ text, post, user });

    await this.comments.save(createComment);
  }
}

export { CommentRepository };
