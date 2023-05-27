import { DeepPartial } from "typeorm";
import { Comment } from "../entities/Comment";

interface ICreateCommentDto {
  text: string
  post: DeepPartial<Comment>
  user: DeepPartial<Comment>
}

interface ICommentsRepository {
  create({ text, post }: ICreateCommentDto): Promise<void>;
}

export { ICommentsRepository, ICreateCommentDto };
