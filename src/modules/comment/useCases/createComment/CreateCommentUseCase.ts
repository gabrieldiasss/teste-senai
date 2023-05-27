import { CommentRepository } from "../../repositories/CommentRepository";
import { ICreateCommentDto } from "../../repositories/ICommentRepository";

class CreateCommentUseCase  {
  constructor(private commentRepository: CommentRepository) {}

  async execute({ text, post }: ICreateCommentDto) {
    await this.commentRepository.create({ text, post });
  }
}

export { CreateCommentUseCase };
