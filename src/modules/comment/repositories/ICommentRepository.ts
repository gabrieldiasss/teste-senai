import { DeepPartial } from "typeorm";
import { Comment } from "../entities/Comment";

interface ICreateCommentDto {
  text: string
  post: any
}

interface ICommentsRepository {
  create({ text, post }: ICreateCommentDto): Promise<void>;
}

export { ICommentsRepository, ICreateCommentDto };
