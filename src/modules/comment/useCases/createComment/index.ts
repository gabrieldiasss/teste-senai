import { CommentRepository } from "../../repositories/CommentRepository"
import { CreateCommentController } from "./CreateCommentController"
import { CreateCommentUseCase } from "./CreateCommentUseCase"

const commentsRepository = new CommentRepository()
const createCommentsUseCase = new CreateCommentUseCase(commentsRepository)
const createCommentController = new CreateCommentController(createCommentsUseCase)

export { createCommentController }