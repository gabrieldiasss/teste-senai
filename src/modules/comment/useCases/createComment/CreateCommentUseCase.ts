import { CommentRepository } from "../../repositories/CommentRepository";
import { ICreateCommentDto } from "../../repositories/ICommentRepository";

class CreateCommentUseCase  {
  constructor(private commentRepository: CommentRepository) {}

  async execute({ text, post, user }: ICreateCommentDto) {
    await this.commentRepository.create({ text, post, user });
  }
}

export { CreateCommentUseCase };
